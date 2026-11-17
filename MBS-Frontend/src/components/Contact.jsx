import contact from "../Images/Contact.png";
import styles from "../css/Contact.module.css";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { useNavigate } from "react-router-dom";
import map from "../Images/map.png";
import TextField from "@mui/material/TextField";

const Contact = () => {
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
      Contact
    </Typography>,
  ];
  return (
    <div>
      <div className={styles.content}>
        <img src={contact} alt="" className={styles.image} />
        <div className={styles.content1}>
          <p className={styles.title}>Contact Us</p>
          <Breadcrumbs
            separator="›"
            aria-label="breadcrumb"
            sx={{ marginTop: "15px" }}
          >
            {breadcrumbs}
          </Breadcrumbs>
        </div>
      </div>
      <div className={styles.content3}>
        <div>
          <div>
            <p className={styles.title1}>Let's Connect</p>
            <p className={styles.para}>
              We'd love to hear from you. Whether you have a question, want to
              book an appointment or just say hello - we're here for you.
            </p>
          </div>
          <div className={styles.content2}>
            <p className={styles.icon}>
              <i class="fa-solid fa-location-dot"></i>
            </p>
            <div>
              <p className={styles.title2}>Our Location</p>
              <p className={styles.para1}>
                Bank Colony, Hansi, Haryana - 125033
              </p>
            </div>
          </div>
          <div className={styles.content2}>
            <p className={styles.icon}>
              <i class="fa-solid fa-phone"></i>
            </p>
            <div>
              <p className={styles.title2}>Call us</p>
              <p className={styles.para1}>+91 99921 22767</p>
            </div>
          </div>
          <div className={styles.content2}>
            <p className={styles.icon}>
              <i class="fa-solid fa-envelope"></i>
            </p>
            <div>
              <p className={styles.title2}>Email Us</p>
              <p className={styles.para1}>manikaarora63@gmail.com</p>
            </div>
          </div>
          <div className={styles.content2}>
            <p className={styles.icon}>
              <i class="fa-regular fa-clock"></i>
            </p>
            <div>
              <p className={styles.title2}>Working Hours</p>
              <p className={styles.para1}>Mon - Sun : 10:00 AM - 8:00 PM</p>
            </div>
          </div>
        </div>
        <div>
          <img src={map} alt="" className={styles.map} />
        </div>
      </div>
      <hr />
      <div className={styles.content5}>
        <p className={styles.title3}>Send a Message</p>
        <div className={styles.content4}>
          <div className={styles.formGroup}>
            <label htmlFor="name">
              Name <span className={styles.required}>*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter Your Name"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">
              Email <span className={styles.required}>*</span>
            </label>

            <input
              type="text"
              id="email"
              name="email"
              placeholder="Enter Your Email"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="phone">
              Phone Number <span className={styles.required}>*</span>
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              placeholder="Enter Your Number"
              required
            />
          </div>
          <div className={styles.content7}>
            <div>
            <label htmlFor="message">
              Message <span className={styles.required}>*</span>
            </label>

            <TextField
              id="message"
              name="message"
              placeholder="Enter Your Message"
              multiline
              rows={4}
              required
              fullWidth
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "10px",
                  backgroundColor: "#FFFCF8",
                  "& fieldset": {
                    borderColor: "#F0E1D1",
                  },marginTop:"10px",
                  "&:hover fieldset": {
                    borderColor: "#D6C2AA",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#96794C",
                  },
                },
                "& .MuiInputBase-input": {
                  fontFamily: "Georgia, serif",
                  fontSize: "16px",
                },
              }}
            />
            </div>
            <div className={styles.content6}>
            <button className={styles.bt}>Send Message</button>
        </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Contact;
