import "./scss/_main.scss";
import ItemListContainer from "./components/Items/ItemListContainer";
import NavBar from "./components/NavBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ItemDetailContainer from "./components/Items/Detail/ItemDetailContainer";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { CartContextProvider } from "./context/cartContext";
import CartListContainer from "./components/Cart/CartListContainer";

function App() {
  return (
    <CartContextProvider>
      <div className="App">
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route
              path="/404"
              element={
                <div className="App-header">
                  <img
                    src={"/images/logo/logo.png"}
                    className="App-logo"
                    alt="logo"
                  />
                  <span>Página en construcción...</span>
                </div>
              }
            />
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="/categoria/:category"
              element={<ItemListContainer />}
            />
            <Route path="/detalle/:id" element={<ItemDetailContainer />} />

            <Route path="/cart" element={<CartListContainer />} />
            <Route path="*" element={<Navigate to="/404" />} />
          </Routes>
          <ToastContainer newestOnTop />
        </BrowserRouter>
      </div>
    </CartContextProvider>
  );
}

export default App;
