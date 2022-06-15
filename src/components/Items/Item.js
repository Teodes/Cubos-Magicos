import { useState } from "react";
import { Card } from "react-bootstrap";
import ItemCount from "./ItemCount";
import "react-toastify/dist/ReactToastify.css";
import { error } from "../Helpers/error";
import { addToCart } from "../Helpers/addToCart";

function Item(props) {
  const [qty, setQty] = useState(1);

  return (
    <Card className="my-4" bg="dark" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.src} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <ItemCount
          stock={props.stock}
          setQty={setQty}
          qty={qty}
          error={error}
          addToCart={addToCart}
        />
      </Card.Body>
    </Card>
  );
}

export default Item;
