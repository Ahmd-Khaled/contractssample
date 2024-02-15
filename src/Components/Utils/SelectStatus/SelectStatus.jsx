import styles from "./styles.module.scss";


const SelectStatus = ({ name, selectList, onChange, onBlur, customLabel, rightDir, label, labelId, errorMsg, isEmpty, shippingCity }) => {
  return (
    <div className={styles.inputBox}>      
      <select
        id={labelId}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        className={isEmpty ? styles.inputEmpty : styles.input}
      >
        <option>أختر الحالة</option>
        <option value={1}>نشط</option>
        <option value={0}>غير نشط</option>
      </select>
      {errorMsg ? <span className={styles.errorMsg}>{errorMsg}</span> : null}
    </div>
  )
}

export default SelectStatus;