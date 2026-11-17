import { useNavigate } from "react-router-dom";
import bg from "../Images/BookAp.png";
import Link from "@mui/material/Link";
import styles from "../css/BookAppointment.module.css";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import ap from "../Images/ap2.png";
import TextField from "@mui/material/TextField";

const BookAppointment = () => {
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
      Book Appointment
    </Typography>,
  ];
  return (
    <div>
      <div className={styles.content}>
        <img src={bg} alt="" className={styles.image} />
        <div className={styles.content1}>
          <p className={styles.title}>Book Appointment</p>
          <Breadcrumbs
            separator="›"
            aria-label="breadcrumb"
            sx={{ marginTop: "15px" }}
          >
            {breadcrumbs}
          </Breadcrumbs>
        </div>
      </div>
      <div className={styles.content2}>
        <div>
          <p className={styles.title2}>Schedule Your Visit</p>
          <p className={styles.para1}>
            Choose your service, preffered date and let us take care of the
            rest.
          </p>
          <div className={styles.content3}>
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
          </div>
          <div className={styles.formGroup1}>
            <label htmlFor="service">
              Select Service <span className={styles.required}>*</span>
            </label>
            <select name="service" id="service" className={styles.select}>
              <option value="Haircut & Styling">Haircut & Styling</option>
              <option value="Blow dry">Blow Dry</option>
              <option value="Hair Spa">Hair Spa</option>
              <option value="Hair coloring & Highlightes">
                Hair coloring & Highlightes
              </option>
              <option value="Keratin and smoothening">
                Keratin and smoothening
              </option>
              <option value="Hair wash">Hair wash</option>
              <option value="Cleanup">Cleanup</option>
              <option value="Hydrating facial">Hydrating facial</option>
              <option value="Gold or premium facial">
                Gold or premium facial
              </option>
              <option value="De-tan treatment">De-tan treatment</option>
              <option value="Skin polishing">Skin polishing</option>
              <option value="Face mask treatments">Face mask treatments</option>
              <option value="Bridal makeup">Bridal makeup</option>
              <option value="Engagement makeup">Engagement makeup</option>
              <option value="Party makeup">Party makeup</option>
              <option value="Reception makeup">Reception makeup</option>
              <option value="Hairstyling for events">
                Hairstyling for events
              </option>
              <option value="Pre-bridal packages">Pre-bridal packages</option>
              <option value="Manicure">Manicure</option>
              <option value="Pedicure">Pedicure</option>
              <option value="Gel polish">Gel polish</option>
              <option value="Nail extensions">Nail extensions</option>
              <option value="Nail art">Nail art</option>
              <option value="Head massage">Head massage</option>
              <option value="Hair spa therapy">Hair spa therapy</option>
              <option value="Scalp treatment">Scalp treatment</option>
            </select>
          </div>
          <div className={styles.content3}>
            <div className={styles.formGroup}>
              <label htmlFor="date">
                Preferred Date <span className={styles.required}>*</span>
              </label>
              <input type="date" id="date" name="date" required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="time">
                Preferred Time <span className={styles.required}>*</span>
              </label>
              <select
                type="text"
                id="time"
                name="time"
                className={styles.select}
                required
              >
                <option value="11:00 AM">11:00 AM</option>
                <option value="12:00 PM">12:00 PM</option>
                <option value="01:00 PM">01:00 PM</option>
                <option value="02:00 PM">02:00 PM</option>
                <option value="03:00 PM">03:00 PM</option>
                <option value="04:00 PM">04:00 PM</option>
                <option value="05:00 PM">05:00 PM</option>
                <option value="06:00 PM">06:00 PM</option>
              </select>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="request">Special Requests (Optional)</label>
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
                    },
                    marginTop: "10px",
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
                <button className={styles.bt}>Book Appointment</button>
            </div>
          </div>
        </div>
        <div className={styles.content4}>
          <div>
            <img src={ap} alt="" className={styles.image2} />
            <div className={styles.content5}>
              <p className={styles.title1}>Why Choose Us?</p>
              <p className={styles.para}>
                <i class="fa-solid fa-graduation-cap"></i>
                &nbsp;&nbsp;&nbsp;Expert & Certified Beauticians
              </p>
              <p className={styles.para}>
                <i class="fa-solid fa-hands-holding-circle"></i>
                &nbsp;&nbsp;&nbsp;Premium & Safe Products
              </p>
              <p className={styles.para}>
                <i class="fa-brands fa-envira"></i>&nbsp;&nbsp;&nbsp;Hygienic &
                Clean Environment
              </p>
              <p className={styles.para}>
                <i class="fa-solid fa-hand-holding-heart"></i>
                &nbsp;&nbsp;&nbsp;Personalized Consultations
              </p>
              <p className={styles.para}>
                <i class="fa-solid fa-crown"></i>&nbsp;&nbsp;&nbsp;Comfortable
                and Luxurious Ambience
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;
