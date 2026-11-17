import about from "../Images/About.png";
import styles from "../css/About.module.css";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { useNavigate } from "react-router-dom";
import about2 from "../Images/About2.png";
import foot from "../Images/foot.png";

const About = () => {
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
      About
    </Typography>,
  ];
  return (
    <div className={styles.container}>
      <div>
        <img src={about} alt="" className={styles.image} />
        <div className={styles.content1}>
          <p className={styles.title}>About Us</p>
          <Breadcrumbs
            separator="›"
            aria-label="breadcrumb"
            sx={{ marginTop: "15px" }}
          >
            {breadcrumbs}
          </Breadcrumbs>
        </div>
        <div className={styles.content2}>
          <p className={styles.ptit}>
            Beauty is not just a look, it's a feeling.
          </p>
          <p className={styles.para}>
            At Manika Beauty Mantra, we believe in enhancing your natural beauty
            with expert care, premium products and a personalized approach. Our
            mission is to make every client feel confident, refreshed and
            beautiful inside out.
          </p>
        </div>
      </div>
      <div className={styles.content3}>
        <div>
          <p className={styles.icon}>
            <i class="fa-brands fa-web-awesome"></i>
          </p>
          <p className={styles.title1}>20+</p>
          <p className={styles.para1}>Years of Excellence</p>
        </div>
        <hr />
        <div>
          <p className={styles.icon}>
            <i class="fa-regular fa-heart"></i>
          </p>
          <p  className={styles.title1}>10k+</p>
          <p className={styles.para1}>Happy Clients</p>
        </div>
        <hr />
        <div>
          <p className={styles.icon}>
            <i class="fa-solid fa-wand-magic-sparkles"></i>
          </p>
          <p  className={styles.title1}>50+</p>
          <p className={styles.para1}>Beauty Experts</p>
        </div>
        <hr />
        <div>
          <p className={styles.icon}>
            <i class="fa-solid fa-spa"></i>
          </p>
          <p  className={styles.title1}>100%</p>
          <p className={styles.para1}>Client Satisfaction</p>
        </div>
      </div>
      <div className={styles.content4}>
        <div>
        <p className={styles.our}>Our Story</p>
        <p className={styles.para2}>
            Manika Beauty Mantra Salon was founded with a vision to create 
            space where beauty, wellness and self-love come together. From
            a small start to a treated name, our journey has always been about our 
            clients.
        </p>
        <button className={styles.bt}>OUR TEAM</button>
        </div>
        <div>
            <img src={about2} alt="" className={styles.image1}/>
        </div>
      </div>
      <div>
            <img src={foot} alt="" className={styles.image2}/>
        </div>
    </div>
  );
};

export default About;
