import styles from "./styles.module.scss";


const SelectPosition = ({ name, selectList, onChange, onBlur, customLabel, rightDir, label, labelId, errorMsg, isEmpty, shippingCity }) => {
  return (
    <div className={styles.inputBox}>      
      <select
        id={labelId}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        className={isEmpty ? styles.inputEmpty : styles.input}
      >
        <option>إختر الوظيفة</option>
        <option value={1}>مدير</option>
        <option value={5}>مشرف</option>
        <option value={6}>مندوب</option>
      </select>
      {errorMsg ? <span className={styles.errorMsg}>{errorMsg}</span> : null}
    </div>
  )
}

export default SelectPosition;