import bg from "../Images/BgImageHome1.png";
import styles from "../css/Home1.module.css";
import logo from "../Images/Logo.png";
import { service } from "../service/services";
import ServiceCard from "./ServiceCard";
import foot from "../Images/footImage.png";
import { Link } from "react-router-dom";

const Home1 = () => {
  return (
    <div>
      <img src={bg} alt="" className={styles.image} />
      <div className={styles.content}>
        <img src={logo} alt="" className={styles.logo} />
        <p className={styles.heading}>Where Beauty Becomes an Experience</p>
        <p className={styles.para}>
          Redefine your glow with expert care, premium products and personalized
          beauty rituals.
        </p>
        <Link to='/bookappointment'>
        <button className={styles.button}>
          BOOK APPOINTMENT &nbsp;&nbsp;&nbsp; →
        </button>
        </Link>
      </div>
      <div className={styles.content1}>
        <div>
          <p className={styles.icon}>
            <i class="fa-brands fa-pagelines"></i>
          </p>
          <p className={styles.head}>PREMIUM PRODUCTS</p>
        </div>
        <hr className={styles.line} />
        <div>
          <p className={styles.icon}>
            <i class="fa-regular fa-circle-check"></i>
          </p>
          <p className={styles.head}>EXPERT BEAUTICIANS</p>
        </div>
        <hr className={styles.line} />
        <div>
          <p className={styles.icon}>
            <i class="fa-solid fa-spa"></i>
          </p>
          <p className={styles.head}>PERSONALIZED CARE</p>
        </div>
        <hr className={styles.line} />
        <div>
          <p className={styles.icon}>
            <i class="fa-regular fa-gem"></i>
          </p>
          <p className={styles.head}>HYGIENIC & SAFE</p>
        </div>
      </div>
      <div className={styles.content3}>
        <p className={styles.head1}>OUR SIGNATURE SERVICES</p>
        <div className={styles.content2}>
          <span className={styles.line1}></span>
          <p className={styles.icon2}>
            <i class="fa-solid fa-spa"></i>
          </p>
          <span className={styles.line1}></span>
        </div>
      </div>
      <div className={styles.content4}>
        {service.map((item) => (
          <ServiceCard service={item} />
        ))}
      </div>
      <div className={styles.hero}>
              <img src={foot} alt="" className={styles.foot} />
              <div className={styles.content5}>
                <p className={styles.head2}>A Space Designed For Your Comfort</p>
                <p className={styles.para1}>
                  Step into a world of elegance, calm and care. At Manika, every
                  details is crafted to give you a luxurious self-care experience.
                </p>
                <button className={styles.bt}>VISIT OUR SALON&nbsp;&nbsp;</button>
                <span>→</span>
              </div>
            </div>
    </div>
  );
};

export default Home1;
