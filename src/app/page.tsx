import styles from "./pagestyles.module.css"

export default function Landing() {
  return (
    <main className={styles.main}>
      <div>
        <div className={styles.page1}>
          <p>Section 1</p>
        </div>
        <div className={styles.page2}>
          <p>Section 2</p>
        </div>
        <div className={styles.page3}>
          <p>Section 3</p>
        </div>
      </div>
    </main>
  );
}
