import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { CartContext } from "../context/cartContext";

function CartWidget() {
  const { cart } = useContext(CartContext);

  let totalItems = 0;
  // if (cart) {
  cart.forEach((item) => {
    totalItems = totalItems + item.qty;
  });
  // }
  return (
    <div className="position-relative d-flex justify-content-center  align-self-center">
      <FontAwesomeIcon icon={faShoppingCart} />
      {totalItems ? (
        <div
          className="position-absolute top-0 start-100 translate-middle bg-danger rounded-circle fs-5"
          style={{ height: "1.5em", width: "1.5em" }}
        >
          <span className="text-white">{totalItems}</span>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default CartWidget;
