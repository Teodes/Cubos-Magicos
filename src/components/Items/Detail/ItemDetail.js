import ItemCount from "../ItemCount";
import { Container } from "react-bootstrap";
import { addToCart } from "../../Helpers/addToCart";
import { error } from "../../Helpers/error";

export default function ItemDetail({ item, qty, setQty }) {
  return (
    <Container className="d-flex flex-wrap justify-content-around row m0">
      <img className="col-6" src={item.img} alt="Imagen del Producto" />
      <div className="my-5 col-6">
        <h2>{item.name}</h2>
        <h3>
          <strong>${item.price}</strong>
        </h3>
        <h5>{item.description}</h5>
        <ItemCount
          stock={item.stock}
          setQty={setQty}
          qty={qty}
          error={error}
          addToCart={addToCart}
        />
      </div>
    </Container>
  );
}
