import styles from '../style/LightButton.module.css'
export function CardContact({ color, textColor, hoverColor, icon, label, isActive }) {

    return (
        <div className={styles.lightButton}>
            <button
                className={`${styles.bt} ${isActive ? styles.active : ''}`}
                style={{ '--button-bg': color, '--text-color': textColor, '--hover-color': hoverColor }}
            >
                <div className={styles.lightHolder}>
                    <div className={styles.dot}></div>
                    <div className={styles.light}></div>
                </div>
                <div className={styles.buttonHolder}>
                {typeof icon === 'string' ? (
                        <img src={icon} alt={label} className={isActive ? '' : styles.inactiveIcon} style={{ height: '50px' }} />
                    ) : (
                        icon
                    )}
                    <p>{label}</p>
                </div>
            </button>
        </div>
    )
}