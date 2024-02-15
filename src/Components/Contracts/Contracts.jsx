import Contract from "./Contract/Contract";
import styles from "./styles.module.scss";

const Contracts = () => {
  return (
    <section className={styles.contracts}>
      {/* <Contract /> */}
      <div className={`mainContainer ${styles.container}`}>
        <div className={styles.head}>
          <h2 className={styles.pageTitle}>D2020 Contracts</h2>
          <button className={styles.genrBtn}>Generate Contract</button>
        </div>
      </div>
    </section>
  )
}

export default Contracts