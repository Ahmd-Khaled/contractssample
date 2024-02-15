import { useTranslation } from "react-i18next";
import styles from "./styles.module.scss";


const Error = ({errMsg}) => {
  const { t, i18n } = useTranslation();
  return (
    <section className={styles.errorPage}>
      <div className={styles.errorPage__container}>
        <a href="/" className={styles.logo}>
          <img width={120} src={process.env.PUBLIC_URL + "/images/new-logo9.svg"} alt="" />
        </a>
        <h1 className={styles.title}>
          {errMsg ? <span>{errMsg}</span> :  <span>خطأ في السيرفر</span>}
          <span>- 404</span>
        </h1>
      </div>
    </section>
  )
}

export default Error