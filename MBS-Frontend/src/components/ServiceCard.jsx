import styles from "../css/ServiceCard.module.css";

const ServiceCard = ({service}) => {
  return (
    <div key={service.id} className={styles.container}>
        <img src={service.Image} alt="" className={styles.image}/>
        <div className={styles.content}>
            <p className={styles.title}>{service.title}</p>
            <p className={styles.para}>{service.desc}</p>
            <button className={styles.bt}>EXPLORE&nbsp;&nbsp;</button>
            <span>→</span>
        </div>
    </div>
  )
}

export default ServiceCard