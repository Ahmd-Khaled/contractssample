import styles from "./styles.module.scss";


const Input = ({ label, isFirst, isLast, icon,  type, name, value, placeholder, errorMsg, onChange, onBlur}) => {
  return (
    <fieldset className={isFirst ? styles.inputBoxFirst : isLast ? styles.inputBoxLast : styles.inputBox}>
      {label ? <label className={styles.label}>{label}</label> : null}
      <div className={styles.inputContent}>
        <div className={styles.icon}>
          {icon}
        </div>
        <input
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
        />
      </div>
      {errorMsg ? <p className={styles.errorMsg}>{errorMsg}</p> : null}
    </fieldset>
  )
}

export default Input