import logo from '../../logo.svg'
import styles from './index.module.css'

const Footer = () => {
    return <footer
        className={styles.footer}
    >
        <img
            className={styles.img}
            src={logo} alt="logo mern02 react" />
        <h3>mern02</h3>
    </footer>
}
export default Footer;
