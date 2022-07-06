import { Button, Container } from "react-bootstrap";
import { useContext, useState } from "react";
import { CartContext } from "../../context/cartContext";
import CartItem from "./CartItem";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { addDoc, collection, getFirestore } from "firebase/firestore";

export default function CartListContainer() {
  const { clearCart, cart } = useContext(CartContext);
  const [purchaseId, setPurchaseId] = useState(false);

  function CartButtons() {
    if (cart.length === 0) {
      if (purchaseId) {
        return (
          <div>
            <h1>Compra exitosa!</h1>
            <h3>
              Tu orden de compra es: <strong>{purchaseId}</strong>
            </h3>
          </div>
        );
      } else {
        return (
          <div>
            <h1>El carrito se encuentra vacío</h1>
            <Link to={"/"}>
              <Button>Ir a la Tienda</Button>
            </Link>
          </div>
        );
      }
    } else {
      return (
        <>
          <div>
            <h2>
              <strong>Precio Total: ${totalPrice}</strong>
            </h2>
          </div>
          <div>
            <Button
              className="m-1"
              variant="danger"
              onClick={() => {
                clearCart();
              }}
            >
              Vaciar Carrito
            </Button>
            <Button
              className="m-1"
              variant="success"
              onClick={(e) => {
                generateOrder(e);
                clearCart();
                toast.success("¡Compra Finalizada!", {
                  position: "bottom-right",
                  autoClose: 3000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "dark",
                });
              }}
            >
              Finalizar Compra
            </Button>
          </div>
        </>
      );
    }
  }

  let totalPrice = 0;
  cart.forEach((item) => {
    totalPrice = totalPrice + item.qty * item.price;
  });

  function generateOrder(e) {
    e.preventDefault();

    let order = {};
    order.buyer = {
      name: "Joaco",
      email: "jgrachor@gmail.com",
      tel: "3512345678",
    };
    order.total = totalPrice;

    order.date = new Date().toLocaleString("es-AR");

    order.items = cart.map((item) => {
      const id = item.id;
      const name = item.name;
      const price = item.price * item.qty;

      return { id, name, price };
    });

    console.log(order);

    const db = getFirestore();
    const orderCollection = collection(db, "orders");
    addDoc(orderCollection, order).then((resp) => {
      setPurchaseId(resp.id);
    });
    //updateDoc para actualizar valores.
  }

  return (
    <div className="py-5">
      <Container>
        {cart.map((item) => (
          <CartItem item={item} key={item.id} />
        ))}
      </Container>
      <CartButtons />
    </div>
  );
}
