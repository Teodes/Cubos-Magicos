import { useState } from "react";
import { Card } from "react-bootstrap";
import { toast } from "react-toastify";
import ItemCount from "./ItemCount";
import "react-toastify/dist/ReactToastify.css";

function Product(props) {
  const [qty, setQty] = useState(1);

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

  function valueChange(operation) {
    if (operation === "+") {
      if (qty < props.stock) {
        setQty(qty + 1);
      } else {
        error("Límite de stock alcanzado");
      }
    }
    if (operation === "-") {
      if (qty > 1) {
        setQty(qty - 1);
      } else {
        error("Mínimo de compra posible");
      }
    }
  }

  return (
    <Card className="my-4" bg="dark" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.src} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <ItemCount stock={props.stock} initial={qty} func={valueChange} />
      </Card.Body>
    </Card>
  );
}

export default Product;
