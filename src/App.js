import "./scss/_main.scss";
import ItemListContainer from "./components/Items/ItemListContainer";
import NavBar from "./components/NavBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ItemDetailContainer from "./components/Items/Detail/ItemDetailContainer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <img src={"images/logo/logo.png"} className="App-logo" alt="logo" />
        <span>Página en construcción</span>
      </header>
      <ItemListContainer greeting="¡Bienvenidos a nuestra tienda!" />
      <ItemDetailContainer />
      <ToastContainer newestOnTop />
    </div>
  );
}

export default App;
