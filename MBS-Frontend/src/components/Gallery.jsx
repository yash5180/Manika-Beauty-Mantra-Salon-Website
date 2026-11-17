import bg from "../Images/BookAp.png";
import styles from "../css/Gallery.module.css";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { NavLink, useNavigate } from "react-router-dom";

const Gallery = () => {
  const navigate = useNavigate();
  function handleClick(event) {
    event.preventDefault();
    navigate("/");
  }
  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="inherit"
      href="/"
      onClick={handleClick}
    >
      Home
    </Link>,
    <Typography key="3" sx={{ color: "#76604D" }}>
      Gallery
    </Typography>,
  ];
  return (
    <div>
      <div>
        <img src={bg} alt="" className={styles.image} />
        <div className={styles.content1}>
          <p className={styles.title}>Gallery</p>
          <Breadcrumbs
            separator="›"
            aria-label="breadcrumb"
            sx={{ marginTop: "15px" }}
          >
            {breadcrumbs}
          </Breadcrumbs>
        </div>
      </div>
      <nav className={styles.midNav}>
        <NavLink
          className={({ isActive }) =>
            isActive ? styles.active : styles.notActive
          }
        >
          All
        </NavLink>
        <NavLink
          
          className={({ isActive }) =>
            isActive ? styles.active : styles.notActive
          }
        >
          Hair
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? styles.active : styles.notActive
          }
        >
          Skin
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? styles.active : styles.notActive
          }
        >
          Bridal
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? styles.active : styles.notActive
          }
        >
          Makeup
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? styles.active : styles.notActive
          }
        >
          Nails
        </NavLink>

        <NavLink
         className={({ isActive }) =>
            isActive ? styles.active : styles.notActive
          }>
            Salon
          </NavLink>
      </nav>
    </div>
  );
};

export default Gallery;
