import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";

function CartButtons({ setAtCheckout, totalPrice }) {
  const { clearCart, cart } = useContext(CartContext);

  return cart.length === 0 ? (
    <div>
      <h1>El carrito se encuentra vacío</h1>
      <Link to={"/"}>
        <Button>Ir a la Tienda</Button>
      </Link>
    </div>
  ) : (
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
            setAtCheckout(true);
          }}
        >
          Comprar Items
        </Button>
      </div>
    </>
  );
}

export default CartButtons;
