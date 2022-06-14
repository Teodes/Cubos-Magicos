import { Button, ButtonGroup } from "react-bootstrap";

export default function ItemCount({ stock, setQty, qty, error, addToCart }) {
  function valueChange(operation) {
    if (operation === "+") {
      if (qty < stock) {
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
    <div className="row justify-content-around">
      <Button
        size="s"
        variant="outline-info"
        className="col-6"
        onClick={addToCart}
      >
        <strong>Comprar</strong>
      </Button>
      <div className="row col-6">
        <div className="col-7 bg-light text-dark rounded-start">
          <p>{qty}</p>
        </div>
        <ButtonGroup size="sm" vertical className="row col-5">
          <Button
            id="PlusAndMinus"
            variant="success"
            className="col-1"
            onClick={() => valueChange("+")}
          >
            +
          </Button>
          <Button
            id="PlusAndMinus"
            variant="danger"
            className="col-1"
            onClick={() => valueChange("-")}
          >
            -
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
}
