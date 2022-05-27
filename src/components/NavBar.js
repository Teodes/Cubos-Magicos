import logo from "../images/logo.png";

function NavBar() {
  return (
    <nav>
      <div className="Logo">
        <img src={logo} alt="Logo" />
        <span>Magicubes</span>
      </div>
      <ul>
        <li>
          <a href="">Cúbicos</a>
        </li>
        <li>
          <a href="">Cuboides</a>
        </li>
        <li>
          <a href="">Minx</a>
        </li>
        <li>
          <a href="">Engranajes</a>
        </li>
      </ul>
    </nav>
  );
}
export default NavBar;
