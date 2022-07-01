import { useContext } from "react";
import { Button, Container } from "react-bootstrap";
import { toast } from "react-toastify";
import { CartContext } from "../../context/cartContext";

export default function CartItem({ item }) {
  const { removeItem } = useContext(CartContext);

  function alertOnRemove() {
    toast.warning("El item ha sido eliminado", {
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
    <Container className="d-flex flex-row justify-content-between align-items-center my-3">
      <img
        className="rounded-4"
        src={`${item.srcImg}`}
        style={{ width: "10em", height: "10em" }}
        alt="Imagen del Producto"
      />
      <h1 className="p-3">{item.name}</h1>
      <div className="d-flex flex-column">
        <h4>Cantidad: {item.qty}</h4>
        <h4>Precio: {item.price}</h4>
      </div>
      <Button
        variant="outline-danger"
        onClick={() => {
          removeItem(item);
          alertOnRemove();
        }}
      >
        X
      </Button>
    </Container>
  );
}
