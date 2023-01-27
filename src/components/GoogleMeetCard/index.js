import lionImg from '../../img/alion_afro.jpg'
import styles from "./index.module.css"

function GoogleMeetCard() {
    console.log(styles)
    return (
        <div className={styles.container}>
            <p className={styles.mute}>🔇</p>
            <img
                className={styles.img}
                src={lionImg} alt="alion afro" />
            <h4 className={styles.username}>Ravan Rahimli</h4>
        </div>
    )
}

export default GoogleMeetCard;
