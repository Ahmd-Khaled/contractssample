import styles from "./styles.module.scss";


const SelectStatistics = ({ name, selectList, onChange, onBlur, customLabel, rightDir, label, labelId, errorMsg, isEmpty, shippingCity }) => {
  return (
    <div className={styles.inputBox}>      
      <select
        id={labelId}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        className={isEmpty ? styles.inputEmpty : styles.input}
      >
        <option value="">الكل</option>
        <option value="&assigned=true">تم تسليمه</option>
        <option value="&not_assigned=true">لم يتم تسليمه</option>
      </select>
      {errorMsg ? <span className={styles.errorMsg}>{errorMsg}</span> : null}
    </div>
  )
}

export default SelectStatistics;