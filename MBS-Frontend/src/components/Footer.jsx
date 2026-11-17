import styles from "../css/Footer.module.css";
import footer from "../Images/footer.png";
import logo from "../Images/Logo.png";

const Footer = () => {
  return (
    <>
      <div className={styles.hero}>
        <img src={footer} alt="" className={styles.footer} />
        <div className={styles.content6}>
          <div>
            <img src={logo} alt="" className={styles.footLogo} />
            <p className={styles.para2}>
              Where beauty becomes an experience discover luxurious beauty
              treatments, expert care and personalized rituals designed just for
              you.
            </p>
            <div className={styles.content7}>
              <p>
                <i class="fa-brands fa-instagram"></i>
              </p>
              <p>
                <i class="fa-brands fa-facebook-f"></i>
              </p>
              <p>
                <i class="fa-brands fa-pinterest-p"></i>
              </p>
              <p>
                <i class="fa-brands fa-youtube"></i>
              </p>
            </div>
          </div>
          <hr className={styles.line} />
          <div className={styles.content9}>
            <h3 className={styles.head3}>QUICK LINKS</h3>
            <p>Home</p>
            <p>About Us</p>
            <p>Our Services</p>
            <p>Bridal</p>
            <p>Gallery</p>
            <p>Contact Us</p>
          </div>
          <hr className={styles.line} />
          <div className={styles.content9}>
            <h3 className={styles.head3}>OUR SERVICES</h3>
            <p>Hair Care</p>
            <p>Skin Care</p>
            <p>Bridal Makeup</p>
            <p>Nail Care</p>
            <p>Spa & Relaxation</p>
            <p>Beauty Treatments</p>
          </div>
          <hr className={styles.line} />
          <div className={styles.content9}>
            <h3 className={styles.head3}>GET IN TOUCH</h3>
            <div className={styles.content8}>
              <p className={styles.icon3}>
                <i class="fa-solid fa-location-dot"></i>
              </p>
              <p>Bank Colony,Hansi</p>
            </div>
            <div className={styles.content8}>
              <p className={styles.icon3}>
                <i class="fa-solid fa-phone"></i>
              </p>
              <p>+91 &nbsp;999212&nbsp;2767</p>
            </div>
            <div className={styles.content8}>
              <p className={styles.icon3}>
                <i class="fa-solid fa-envelope"></i>
              </p>
              <p>manikaarora63@gmail.com</p>
            </div>
            <p>OPENING HOURS</p>
            <p>Monday - Sunday</p>
            <p>10:00 AM - 8:00 PM</p>
          </div>
        </div>
      </div>
      <div className={styles.content12}>
        <div className={styles.content11}>
          <hr className={styles.line2} />
          <div className={styles.content10}>
            <div>
              <p className={styles.para3}>YOUR BEAUTY, OUR PASSION</p>
              <p className={styles.ready}>Ready for your moment of beauty?</p>
            </div>
            <hr className={styles.line} />
            <button className={styles.bt2}>
              BOOK AN APPOINTMENT&nbsp;&nbsp;→
            </button>
          </div>
          <hr className={styles.line2} />
        </div>
      </div>
      <div className={styles.content13}>
        <div className={styles.content15}>
        <div>
          <p>
            <i class="fa-regular fa-copyright"></i>&nbsp; 2026 Manika Beauty
            Mantra Salon.All rights reserved.
          </p>
        </div>
        <div className={styles.content14}>
          <hr className={styles.line}/>
          <p>Privacy Policy</p>
          <hr className={styles.line}/>
          <p>Terms & Conditions</p>
          <hr className={styles.line}/>
        </div>
        <div>
          <p>Made With Care &hearts;</p>
        </div>
        </div>
      </div>
    </>
  )
}

export default Footer