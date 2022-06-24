import { useContext } from "react";
import { Button } from "react-bootstrap";
import { CartContext } from "../../context/cartContext";

export default function CartItem({ item }) {
  const { removeItem } = useContext(CartContext);

  return (
    <div>
      <h1>{item.name}</h1>
      <h4>{item.qty}</h4>
      <Button onClick={() => removeItem(item)}>Eliminar</Button>
    </div>
  );
}
