import { toast } from "react-toastify";

export function addToCart(qty) {
  toast.success(
    `${qty} ${qty === 1 ? "producto" : "productos"} agregados al carrito`,
    {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    }
  );
}
