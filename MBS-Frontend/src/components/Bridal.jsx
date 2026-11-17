import styles from "../css/Bridal.module.css";
import bridal from "../Images/Bridal.png";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { useNavigate } from "react-router-dom";
import { packages } from "../service/packages";
import foot from "../Images/foot.png";


const Bridal = () => {
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
      Bridal
    </Typography>,
  ];
  return (
    <div>
      <div className={styles.content}>
        <img src={bridal} alt="" className={styles.image} />
        <div className={styles.content1}>
          <p className={styles.title}>Bridal Makeup</p>
          <Breadcrumbs
            separator="›"
            aria-label="breadcrumb"
            sx={{ marginTop: "15px" }}
          >
            {breadcrumbs}
          </Breadcrumbs>
          <p className={styles.title2}>Your Dream Look For Your Special Day</p>
          <p className={styles.para}>
            From subtle elegance to regal glamour, we create personalized bridal
            looks that make you feel the most beautiful version of yourself.
          </p>
          <div className={styles.buttons}>
            <button className={styles.bt}>BOOK BRIDAL PACKAGE</button>
            <button className={styles.bt1}>VIEW GALLERY</button>
          </div>
        </div>
      </div>
      <div className={styles.content2}>
        <p className={styles.title3}>Our Bridal Packages</p>
        <div className={styles.content3}>
          <span className={styles.line1}></span>
          <p className={styles.icon2}>
            <i class="fa-solid fa-spa"></i>
          </p>
          <span className={styles.line1}></span>
        </div>
        <div className={styles.card}>
          {packages.map((pack) => (
            <div key={pack.name} className={styles.cards}>
              <img src={pack.image} alt="" className={styles.cardImage}/>
              <div>
              <h2>{pack.name}</h2>
              {pack.services.map((service) => (
                <p key={service}>
                  <span className="check">✓</span> {service}
                </p>
              ))}
              <h3>₹{pack.price}</h3>
              </div>
              <button>BOOK NOW</button>
            </div>
          ))}
        </div>
        <div>
            <img src={foot} alt=""  className={styles.foot}/>
        </div>
      </div>
    </div>
  );
};

export default Bridal;
