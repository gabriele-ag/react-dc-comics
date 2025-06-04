import styles from "./menu2Cta.module.css";

function CtaSite({thumb, alt, link, title}) {
    return (
    <div className={`flex + ${styles.menu2Card}`}>
        <img src={thumb} alt={alt} className={styles.menu2Img}/>
        <a href={link}>{title}</a>
    </div>
    )
}

export default CtaSite