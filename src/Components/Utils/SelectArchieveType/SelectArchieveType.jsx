import styles from "./styles.module.scss";


const SelectArchieveType = ({ name, selectList, onChange, onBlur, customLabel, rightDir, label, labelId, errorMsg, isEmpty, shippingCity }) => {
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
        <option value="&archieve=1">مأرشف</option>
        <option value="&archieve=0">غير مأرشف</option>
      </select>
      {errorMsg ? <span className={styles.errorMsg}>{errorMsg}</span> : null}
    </div>
  )
}

export default SelectArchieveType;