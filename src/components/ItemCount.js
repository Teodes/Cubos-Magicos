import { Button, ButtonGroup } from "react-bootstrap";

export default function ItemCount({
  initial,
  valueChange,
  setQty,
  stock,
  onError,
  onBuy,
}) {
  let currentValue = initial;
  function valueChange(operation) {
    if (operation === "+") {
      if (currentValue < stock) {
        setQty(currentValue + 1);
      } else {
        onError("Límite de stock alcanzado");
      }
    }
    if (operation === "-") {
      if (currentValue > 1) {
        setQty(currentValue - 1);
      } else {
        onError("Mínimo de compra posible");
      }
    }
  }
  return (
    <div className="row justify-content-around">
      <Button size="s" variant="outline-info" className="col-6" onClick={onBuy}>
        <strong>Comprar</strong>
      </Button>
      <div className="row col-6">
        <div className="col-7 bg-light text-dark rounded-start">
          <p>{currentValue}</p>
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
