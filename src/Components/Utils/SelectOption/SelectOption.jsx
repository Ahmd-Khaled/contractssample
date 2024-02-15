import styles from "./styles.module.scss";


const SelectOption = ({ name, defaultOption, selectList, optionValue, optionName, onChange, onBlur, customLabel, rightDir, label, labelId, errorMsg, isEmpty, shippingCity }) => {
  return (
    <div className={styles.inputBox}>     
      <label className={styles.label}>{label}</label> 
      <div className={styles.selectBox}>
        <select
          id={labelId}
          name={name}
          onChange={onChange}
          onBlur={onBlur}
          className={isEmpty ? styles.inputEmpty : styles.input}
        >
          <option>{defaultOption}</option>
          {
            selectList?.map((item, index) => (
              <option value={item.id} key={index}>{item.currency}</option>
            ))
          }
        </select>
      </div>
      {errorMsg ? <span className={styles.errorMsg}>{errorMsg}</span> : null}
    </div>
  )
}

export default SelectOption;