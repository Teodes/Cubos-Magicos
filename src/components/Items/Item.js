import { useState } from "react";
import { Card } from "react-bootstrap";
import { toast } from "react-toastify";
import ItemCount from "./ItemCount";
import "react-toastify/dist/ReactToastify.css";

function Item(props) {
  const [qty, setQty] = useState(1);

  function addToCart() {
    toast.success(`${qty} ítems añadidos`, {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }

  const error = (msg) => {
    toast.error(msg, {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

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
