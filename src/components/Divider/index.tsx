import styles from './styles.module.scss'

export function Divider() {
    return (
        <div className={styles.container}>
            <div className={styles['dote-right']}></div>
            <div className={styles.line}></div>
            <div className={styles['dote-left']}></div>
        </div>
    )
}