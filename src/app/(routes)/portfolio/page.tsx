import styles from "./page.module.css"
import { ListProyect } from "./components/list";



export default function Portfolio() {

    return (
      <main className={styles.page}>
       <ListProyect/>
      </main>
    );
  }
  