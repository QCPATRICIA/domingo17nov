import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import { GiHealthPotion } from "react-icons/gi";
import "./navbar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="icon-navbar">
      <GiHealthPotion size={60}/>
      </Link>

      <h1>BIENVENIDOS A LA PRIMER APP DE COMIDA SALUDABLE</h1>

      <ul className="categories-navbar">
        <Link to="/category/frutas" className="categorie-navbar">
          Frutas
        </Link>
        <Link to="/category/verduras" className="categorie-navbar">
          Verduras
        </Link>
        <Link to="/category/cesu" className="categorie-navbar">
          Comidas elaboradas sin conservantes
        </Link>
      </ul>
      <CartWidget />
    </nav>
  );
};
export default NavBar;
