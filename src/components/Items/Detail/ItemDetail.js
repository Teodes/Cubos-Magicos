import ItemCount from "../ItemCount";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function ItemDetail({ item }) {
  const [purchaseState, setPurchaseState] = useState(``);

  return (
    <Container className="d-flex flex-wrap justify-content-around row m0">
      <img className="col-6" src={item.img} alt="Imagen del Producto" />
      <div className="col-6 d-flex row align-content-around">
        <h2>{item.name}</h2>
        <h5>{item.description}</h5>
        <h3>
          <strong>${item.price}</strong>
        </h3>
        {purchaseState === `finished` ? (
          <div className="d-flex justify-content-center gap-3">
            <Link to={"/"}>
              <Button variant="outline-warning">Seguir Comprando</Button>
            </Link>
            <Link to={"/cart"}>
              <Button variant="outline-success">Ir al Carrito</Button>
            </Link>
          </div>
        ) : (
          <ItemCount item={item} setPurchaseState={setPurchaseState} />
        )}
      </div>
    </Container>
  );
}
