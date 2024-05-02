import { Link, useLocation } from "react-router-dom";
import styles from "./Menu.module.scss";
import { routes } from "../../routes/Routes";

const Menu = () => {
  const { pathname } = useLocation();

  return (
    <nav className={styles.Menu}>
      <ul className={styles.Menu__itemContainer}>
        {routes.map(({ path, icon, text }) => (
          <li
            key={path}
            className={`${styles.Menu__item} ${
              pathname === path && styles.active
            }`}
          >
            <Link to={path}>
              {icon}
              {text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
