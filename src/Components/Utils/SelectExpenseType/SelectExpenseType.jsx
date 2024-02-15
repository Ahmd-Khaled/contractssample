import styles from "./styles.module.scss";


const SelectExpenseType = ({ name, selectList, onChange, onBlur, customLabel, rightDir, label, labelId, errorMsg, isEmpty }) => {
  const onChangeHandler = (e) => {
    onChange(e.target.value);
    console.log("********************e.target.value*******: ", e.target.value);
  }

  return (
    <div className={styles.inputBox}>      
      <select
        id={labelId}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        className={isEmpty ? styles.inputEmpty : styles.input}
      >
        <option value={0}>إختر التصنيف الرئيسي</option>
        <option value={1}>سيارات</option>
        {selectList?.map((type, index) => (
          <option value={type.id} key={index}>{type.expense_type_name}</option>
        ))}
      </select>
      {errorMsg ? <span className={styles.errorMsg}>{errorMsg}</span> : null}
    </div>
  )
}

export default SelectExpenseType;