import styles from "./styles.module.scss";
import Input from "../../Auth/Input/Input";
import useAddParentExpenseType from "../../../hooks/expenses/useAddParentExpenseType";

const AddParent = () => {
  const [
    parentTypeName,
    parentTypeNameError,
    onChangeParentTypeName,
    onBlurParentTypeName,
    parentTypeDesc,
    parentTypeDescError,
    onChangeParentTypeDesc,
    onBlurParentTypeDesc,
    onSubmit,
    isLoading,
    error
  ] = useAddParentExpenseType();


  return (
    <div className={styles.addParent}>
      <form onSubmit={onSubmit} className={styles.form}>
        <div className={styles.inpBox}>
          <Input
            label="إسم التصنيف الرئيسي"
            name="parentTypeName"
            value={parentTypeName}
            onChange={onChangeParentTypeName}
            onBlur={onBlurParentTypeName}
            isFirst={true}
            type="text"
            placeholder="إسم التصنيف الرئيسي*"
            errorMsg={parentTypeNameError}
          />
          <Input
            label="وصف التصنيف الرئيسي"
            name="parentTypeDesc"
            value={parentTypeDesc}
            onChange={onChangeParentTypeDesc}
            onBlur={onBlurParentTypeDesc}
            isFirst={true}
            type="text"
            placeholder="وصف التصنيف الرئيسي*"
            errorMsg={parentTypeDescError}
          />
        </div>
        <button type="submit" className={styles.addBtn}>إضافة</button>
      </form>
    </div>
  );
};

export default AddParent;
