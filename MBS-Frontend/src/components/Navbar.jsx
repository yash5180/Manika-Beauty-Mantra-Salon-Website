import logo from "../Images/Logo.png";
import styles from "../css/Navbar.module.css";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <img src={logo} alt="" className={styles.logo} />
      <nav className={styles.midNav}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? styles.active : styles.notActive
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? styles.active : styles.notActive
          }
        >
          About
        </NavLink>
        <NavLink
          to="/services"
          className={({ isActive }) =>
            isActive ? styles.active : styles.notActive
          }
        >
          Services
        </NavLink>
        <NavLink
          to="/bridal"
          className={({ isActive }) =>
            isActive ? styles.active : styles.notActive
          }
        >
          Bridal
        </NavLink>
        <NavLink
          to="/gallery"
          className={({ isActive }) =>
            isActive ? styles.active : styles.notActive
          }
        >
          Gallery
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? styles.active : styles.notActive
          }
        >
          Contact
        </NavLink>
      </nav>
      <div className={styles.content}>
        <p className={styles.sIcon}><i class="fa-solid fa-magnifying-glass"></i></p>
        <Link to='/bookappointment' className={styles.link}>
        <p className={styles.appoint}><i class="fa-solid fa-calendar-days"></i>&nbsp;&nbsp;Book&nbsp;&nbsp;Appointment&nbsp;&nbsp;→</p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
