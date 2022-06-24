import { Button } from "react-bootstrap";
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import CartItem from "./CartItem";

export default function CartListContainer() {
  const { clearCart, cart } = useContext(CartContext);
  return (
    <div className="py-5">
      <Button
        variant="danger"
        onClick={() => {
          clearCart();
        }}
      >
        Vaciar Cart
      </Button>
      <div>
        {cart.map((item) => (
          <CartItem item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}
