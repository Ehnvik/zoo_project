import { Link } from "react-router-dom";
import "./Nav.scss";

export const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav__ul">
        <li className="nav__ul__li">
          <Link className="nav__ul__li__link" to="/">
            Hem
          </Link>
        </li>
      </ul>
    </nav>
  );
};
