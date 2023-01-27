import logo from "../../logo.svg"
import styles from './index.module.css'

function Header() {
    return <header className={styles.header}>
        <h1>salam</h1>
        <img
            className={styles.img}
            src={logo} alt="mern02 react logo" />
    </header>
}
export default Header;

// elem.style.width = '100px'
// jsx -> 
