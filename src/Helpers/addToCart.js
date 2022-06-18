import { toast } from "react-toastify";

export function addToCart(qty) {
  toast.success(`${qty} ítems añadidos`, {
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
