import useAddChildExpenseType from "../../../hooks/expenses/useAddChildExpenseType";
import useGetExpensesTypes from "../../../hooks/expenses/useGetExpensesTypes";
import Input from "../../Auth/Input/Input";
import Error from "../../Utils/Error/Error";
import SelectExpenseType from "../../Utils/SelectExpenseType/SelectExpenseType";
import Spinner from "../../Utils/Spinner/Spinner";
import styles from "./styles.module.scss";
import Select from "react-select";
import { useState } from "react";


const AddChild = () => {
  const [pID, setPID] = useState("");

  const [
    getExpensesTypesList,
    isLoadingExpensesTypes,
    errorExpensesTypes
  ] = useGetExpensesTypes("?parent=true");

  const [
    parentId,
    parentIdError,
    onChangeParentId,
    onBlurParentId,
    childTypeName,
    childTypeNameError,
    onChangeChildTypeName,
    onBlurChildTypeName,
    childTypeDesc,
    childTypeDescError,
    onChangeChildTypeDesc,
    onBlurChildTypeDesc,
    onSubmit,
    isLoadingAddChild,
    errorAddChild
  ] = useAddChildExpenseType(pID);

  const mappedParentTypes = getExpensesTypesList?.map((parentType) => {
    return {
      label: parentType.expense_type_name,
      value: parentType.id
    }
  });

  const selectParentTypeHandler = (selectedOption) => {
    // console.log("selectSupervisorHandler: ", selectedOption);
    setPID(selectedOption.value);
  }

  const selectParentStyles = {
    control: (styles) => ({
      ...styles,
      backgroundColor: "transparent",
      border: "1px solid #3b4781",
      padding: "4px",
      marginBottom: "16px",
      color: "#3b4781",
      textTransform: "capitalize",
      ":hover": {
        borderColor: "#F4911D"
      },
    }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      return {
        ...styles,
        textTransform: "capitalize"
      };
    }
  }

  return (
    <div className={styles.addChild}>

      {isLoadingExpensesTypes && <Spinner custom={true} />}
      {errorExpensesTypes && <Error errMsg={errorExpensesTypes} />}

      {isLoadingAddChild && <Spinner custom={true} />}
      {errorAddChild && <Error errMsg={errorAddChild} />}

      <form onSubmit={onSubmit} className={styles.form}>
        <div className={styles.inpBox}>
          <label className={styles.parentLabel}>إختر التصنيف الرئيسي</label>
          {/* <SelectExpenseType 
            labelId="parent"
            selectList={getExpensesTypesList}
            name={parentId}
            errorMsg={parentIdError}
            onChange={onChangeParentId}
            onBlur={onBlurParentId}
          /> */}
          <Select
            options={mappedParentTypes}
            onChange={selectParentTypeHandler}
            styles={selectParentStyles}
            placeholder="إختر التصنيف الرئيسي"
          />
          <Input
            label="إسم التصنيف الفرعي"
            name="childTypeName"
            value={childTypeName}
            onChange={onChangeChildTypeName}
            onBlur={onBlurChildTypeName}
            isFirst={true}
            type="text"
            placeholder="إسم التصنيف الفرعي*"
            errorMsg={childTypeNameError}
          />
          <Input
            label="وصف التصنيف الفرعي"
            name="childTypeDesc"
            value={childTypeDesc}
            onChange={onChangeChildTypeDesc}
            onBlur={onBlurChildTypeDesc}
            isFirst={true}
            type="text"
            placeholder="وصف التصنيف الفرعي*"
            errorMsg={childTypeDescError}
          />
        </div>
        <button type="submit" className={styles.addBtn}>إضافة</button>
      </form>
    </div>
  )
}

export default AddChild