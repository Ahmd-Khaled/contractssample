import { useTranslation } from "react-i18next";
import styles from "./styles.module.scss";
import { RxReload } from "react-icons/rx";
import LineChartJs from "./LineChartJs";




const Revenue = () => {
  const { t, i18n } = useTranslation();


  return (
    <div className={styles.revenue}>
      <div className={styles.head}>
        <h4 className={styles.title}>{t("dashboard-home-text1")}</h4>
        <RxReload />
      </div>
      <div className={styles.content} style={{direction: i18n.dir()}}>
        <LineChartJs />
      </div>
    </div>
  )
}

export default Revenue