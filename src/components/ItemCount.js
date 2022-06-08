import { Button, ButtonGroup } from "react-bootstrap";
import { toast } from "react-toastify";

export default function ItemCount({ initial, func }) {
  function addToCart() {
    toast.success(`${initial} ítems añadidos`, {
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
          <p>{initial}</p>
        </div>
        <ButtonGroup size="sm" vertical className="row col-5">
          <Button
            id="PlusAndMinus"
            variant="success"
            className="col-1"
            onClick={() => func("+")}
          >
            +
          </Button>
          <Button
            id="PlusAndMinus"
            variant="danger"
            className="col-1"
            onClick={() => func("-")}
          >
            -
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
}
