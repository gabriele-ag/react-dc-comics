import styles from "./header.module.css"
import menuItem from "../data/menuItem"


function Header() {
    return (
    <header className={`flex + ${styles.header}`}>
        <img src="/dc-logo.png" alt="logosite-dc" />
        <nav>
            <ul className={`flex + font + ${styles.menu}`}>
                {menuItem.map((curItem, index) => (
                    <li key={index}>
                        <a href={curItem.href}>{curItem.sectionTitle}</a>
                    </li>
                ))}
            </ul>
        </nav>

        
    </header>
    )
}

export default Header