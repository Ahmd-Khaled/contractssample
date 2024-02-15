import styles from "./styles.module.scss";

const Spinner = ({custom}) => {
  return (
    <div className={custom ? styles.customSpinner : styles.fullWidthSpinner}>
      <div className={styles.image}>
        <img src="/images/new-logo.svg" alt="" />
      </div>
    </div>
  )
}

export default Spinner;