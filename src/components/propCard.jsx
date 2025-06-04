import styles from "./comicstyle.module.css";

function CardComic ({thumb, type, series}) {
    return (
    <li className={styles.comicsP}>
        <img src={thumb} alt={type} className={styles.comicsImg}/>
        <p className={styles.comicsP}>{series}</p>
    </li>
    )
}

export default CardComic