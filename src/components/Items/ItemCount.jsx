import { Button, ButtonGroup } from "react-bootstrap";
import { CartContext } from "../../context/cartContext";
import { useContext, useState } from "react";
import { error } from "../../Helpers/error";

export default function ItemCount({ item, setPurchaseState }) {
  function valueChange(operation) {
    if (operation === "+") {
      if (qty < item.stock) {
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

  const [qty, setQty] = useState(1);

  const { addItemToCart } = useContext(CartContext);

  return (
    <div className="row justify-content-around">
      <Button
        size="s"
        variant="outline-info"
        className="col-6"
        onClick={() => {
          addItemToCart(item, qty);
          setPurchaseState(`finished`);
        }}
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
