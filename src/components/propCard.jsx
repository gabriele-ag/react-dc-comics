import styles from "./comicsstyle.modules.css"

function cardComic ({thumb, type, series}) {
    return (
    <li className={styles.comicsP}>
        <img src={thumb} alt={type} className={styles.comicsImg}/>
        <p className={styles.comicsP}>{series}</p>
    </li>
    )
}

export default cardComic