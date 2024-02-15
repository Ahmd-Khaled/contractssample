import { t } from "i18next";
import styles from "./styles.module.scss";
import { useTranslation } from "react-i18next";
import useGetAllCities from "../../../hooks/userProfile/useGetAllCities";


const Select = ({ name, selectList, onChange, onBlur, customLabel, rightDir, label, labelId, errorMsg, isEmpty, shippingCity }) => {

  const [getAllCitiesResData] = useGetAllCities();

  const { t, i18n } = useTranslation();
  // const changeHandler = (e) => {
  //   onChange(e.target.value);
  //   console.log(e.target.value)
  // }
  return (
    <div className={styles.inputBox}>      
      <select
        id={labelId}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        className={isEmpty ? styles.inputEmpty : styles.input}
      >
        <option value={0}>{t("checkout-selectCity")}</option>
        {
          getAllCitiesResData?.map((item, index) => (
            <option selected={item.id === shippingCity.id} value={item.id} key={index}>{i18n.dir() === "ltr" ? item.en_name : item.ar_name}</option>
          ))
        }
      </select>
      {errorMsg ? <span className={styles.errorMsg}>{errorMsg}</span> : null}
    </div>
  )
}

export default Select;