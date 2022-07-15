import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { toast } from "react-toastify";

function CartForm({ generateOrder }) {
  function submitHandler(e) {
    e.preventDefault();
    generateOrder(e);
    toast.success("¡Compra Exitosa!", {
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
    <Form
      className="mx-auto p-5"
      style={{ maxWidth: "500px" }}
      onSubmit={(e) => {
        e.target.submitBtn.disabled = true;
        e.target.submitBtn.innerText = "Procesando...";
        submitHandler(e);
      }}
    >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Direccion de Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          placeholder="Enter email"
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicLastName">
        <Form.Label>Apellido</Form.Label>
        <Form.Control
          type="text"
          name="lastName"
          placeholder="Apellido"
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" name="name" placeholder="Nombre" required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicTel">
        <Form.Label>Telefono</Form.Label>
        <Form.Control type="tel" name="tel" placeholder="Telefono" required />
      </Form.Group>
      <Form.Text className="text-white-50">
        Nunca compartiremos tus datos con otras personas o compañias.
      </Form.Text>
      <Button
        variant="outline-info"
        size="lg"
        className="mt-3"
        name="submitBtn"
        type="submit"
      >
        Finalizar Compra
      </Button>
    </Form>
  );
}

export default CartForm;
