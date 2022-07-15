import { Container } from "react-bootstrap";
import { useContext, useState } from "react";
import { CartContext } from "../../context/cartContext";
import CartItem from "./CartItem";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import CartButtons from "./CartButtons";
import CartForm from "./CartForm";

export default function CartListContainer() {
  const { cart, clearCart } = useContext(CartContext);
  const [purchaseId, setPurchaseId] = useState(false);
  const [atCheckout, setAtCheckout] = useState(false);

  let totalPrice = 0;
  cart.forEach((item) => {
    totalPrice = totalPrice + item.qty * item.price;
  });

  function generateOrder(e) {
    let order = {};
    order.buyer = {
      name: e.target.name.value,
      email: e.target.email.value,
      tel: e.target.tel.value,
    };
    order.total = totalPrice;

    order.date = new Date().toLocaleString("es-AR");

    order.items = cart.map((item) => {
      const id = item.id;
      const name = item.name;
      const price = item.price * item.qty;

      return { id, name, price };
    });

    const db = getFirestore();
    const orderCollection = collection(db, "orders");
    addDoc(orderCollection, order)
      .then((resp) => {
        setPurchaseId(resp.id);
      })
      .then(clearCart());
  }

  if (purchaseId) {
    return (
      <div className="py-5">
        <h1>Compra exitosa!</h1>
        <h3>
          Tu orden de compra es: <strong>{purchaseId}</strong>
        </h3>
      </div>
    );
  }

  if (atCheckout) {
    return (
      <div className="py-5">
        <CartForm generateOrder={generateOrder} />
      </div>
    );
  }

  return (
    <div className="py-5">
      <Container>
        {cart.map((item) => (
          <CartItem item={item} key={item.id} />
        ))}
      </Container>
      <CartButtons setAtCheckout={setAtCheckout} totalPrice={totalPrice} />
    </div>
  );
}
