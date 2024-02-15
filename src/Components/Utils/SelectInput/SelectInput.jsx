import { t } from "i18next";
import styles from "./styles.module.scss";
import { useState } from "react";
import Input from "../../Auth/Input/Input";


const SelectInput = ({ name, value, onChange, onBlur, customLabel, rightDir, label, labelId, inputType, placeHolder, errorMsg, isEmpty, forLogin, fullWidth, quarterWidthInput }) => {
  const [isCustom, setIsCustom] = useState(false);
  const changeHandler = (e) => {
    // onChange();
    if (e.target.value === "custom") {
      setIsCustom(true);
    } else {
      setIsCustom(false);
    }
  }
  return (
    <div className={styles.inputBox}>
      {customLabel ? (
        <label className={rightDir ? styles.customLabelAr : styles.customLabel} htmlFor={labelId}>{label}</label>
      ) : (
        <label className={styles.label} htmlFor={labelId}>{label}</label>
      )}
      
      <select
        id={labelId}
        name={name}
        onChange={changeHandler}
        onBlur={onBlur}
        className={isEmpty ? styles.inputEmpty : styles.input}
      >
        <option value="10">10 {t("SR")}</option>
        <option value="25">25 {t("SR")}</option>
        <option value="50">50 {t("SR")}</option>
        <option value="100">100 {t("SR")}</option>
        <option value="custom">{t("gift-text-16")}</option>
      </select>
      
      {
        isCustom ? (
          <Input 
              bg="#FFFFFF"
              name="RecipientName"
              inputType="number"
              placeHolder={t("gift-text-17")}
            />
        ) : null
      }
      {errorMsg ? <span className={styles.errorMsg}>{errorMsg}</span> : null}
    </div>
  )
}

export default SelectInput