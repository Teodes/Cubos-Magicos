import logo from "./images/logo.png";
import "./scss/_main.scss";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Aquí irá la presentación de los productos" />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <span>Página en construcción</span>
      </header>
    </div>
  );
}

export default App;
