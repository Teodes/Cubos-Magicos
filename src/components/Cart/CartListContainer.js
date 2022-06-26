import { Button, Container } from "react-bootstrap";
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import CartItem from "./CartItem";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

export default function CartListContainer() {
  const { clearCart, cart } = useContext(CartContext);

  function CartButtons() {
    if (cart.length === 0) {
      return (
        <div>
          <h1>El carrito se encuentra vacío</h1>
          <Link to={"/"}>
            <Button>Ir a la Tienda</Button>
          </Link>
        </div>
      );
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
              onClick={() => {
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
