import { Button, Card } from "react-bootstrap";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

function Item({ product }) {
  return (
    <Card className="my-4" bg="dark" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={product.srcImg} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <h3 style={{ color: "limegreen" }}>${product.price}</h3>
        <Link to={`/detalle/${product.id}`}>
          <Button variant="outline-warning">Detalle</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default Item;
