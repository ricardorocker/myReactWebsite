import styles from "./Navbar.module.css";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <NavLink to="/" className={styles.brand}>
        Dev <span>Ricardo Rocker</span>
      </NavLink>
      <ul className={styles.links_list}>
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : "")}>Início</NavLink>
        </li>
        <li>
          <NavLink to="/stacks" className={({ isActive }) => (isActive ? styles.active : "")}>Habilidades</NavLink>
        </li>
        <li>
          <NavLink to="/projects" className={({ isActive }) => (isActive ? styles.active : "")}>Projetos</NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? styles.active : "")}>Contato</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
