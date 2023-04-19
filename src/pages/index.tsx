import Ticket from "./Ticket";
import styles from '../styles/home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Cartão de embarque</h1>
      <Ticket />
    </div>
  )
}