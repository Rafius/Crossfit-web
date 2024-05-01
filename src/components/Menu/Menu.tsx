import { Link } from "react-router-dom";
import styles from "./Menu.module.scss";

const Menu = () => {
  return (
    <nav className={styles.Menu}>
      <ul>
        <li>
          <Link to="/">Mis Entrenos</Link>
        </li>
        <li>
          <Link to="/prs">Mis pesos</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
