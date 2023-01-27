import styles from "./index.module.css"

function GoogleMeetCard({ sekil, name }) {
    return (
        <div className={styles.container}>
            <p className={styles.mute}>🔇</p>
            <img
                className={styles.img}
                src={sekil} />
            <h4 className={styles.username}>{name}</h4>
        </div>
    )
}

export default GoogleMeetCard;
