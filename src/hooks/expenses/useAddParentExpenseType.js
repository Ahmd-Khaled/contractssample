import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { useState } from "react";
import notify from "../notify/useNotification";
import { addChildExpenseType } from "../../redux/thunkActions/expensesActions";


const useAddParentExpenseType = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const ChildExpenseSchema = Yup.object().shape({
    parentTypeName: Yup.string().required('إسم التصنيف الفرعي مطلوب'),
    parentTypeDesc: Yup.string().required('وصف التصنيف الفرعي مطلوب'),
  });

  const formik = useFormik({
    initialValues: {
      parentTypeName: '',
      parentTypeDesc: ''
    },
    validationSchema: ChildExpenseSchema,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: values => {
      // alert(JSON.stringify(values, null, 2));
      onSubmitForm(values);
    },
  });


  let parentTypeName;
  let parentTypeNameError;
  let onChangeParentTypeName;
  let onBlurParentTypeName;

  let parentTypeDesc;
  let parentTypeDescError;
  let onChangeParentTypeDesc;
  let onBlurParentTypeDesc;

  let onSubmit;


  parentTypeName = formik.values.parentTypeName;
  parentTypeNameError = formik.touched.parentTypeName && formik.errors.parentTypeName ? formik.errors.parentTypeName : null;
  onChangeParentTypeName = formik.handleChange;
  onBlurParentTypeName = formik.handleBlur;

  parentTypeDesc = formik.values.parentTypeDesc;
  parentTypeDescError = formik.touched.parentTypeDesc && formik.errors.parentTypeDesc ? formik.errors.parentTypeDesc : null;
  onChangeParentTypeDesc = formik.handleChange;
  onBlurParentTypeDesc = formik.handleBlur;


  onSubmit = formik.handleSubmit;

  const onSubmitForm = async (values) => {
    const expenseParentData = {
      parent_id: null,
      expense_type_name: values.parentTypeName,
      expense_type_description: values.parentTypeDesc,
  }

  console.log("/*/*/------------------- expenseParentData ------: ", expenseParentData);

  setLoading(true);
  await dispatch(addChildExpenseType(expenseParentData));
  setLoading(false);
  };

  
  // ---------------------------------------------------------------------------------
  const { addChildExpenseTypeRes, isLoading, error } = useSelector((state) => state.expensesSlice);

  console.log("__________ (addChildExpenseTypeRes) _______________", addChildExpenseTypeRes);

//   let addChildExpenseTypeData = [];

  useEffect(() => {
    if (!isLoading) {
      if (addChildExpenseTypeRes) {
        if (addChildExpenseTypeRes.status) {
            notify(addChildExpenseTypeRes.message, "success");
            if (addChildExpenseTypeRes.data) {
                // addChildExpenseTypeData = addChildExpenseTypeRes.data;
                setTimeout(() => {
                    navigate('/expenses/all-types');
                    window.location.reload();
                    }, 3000);
                }
        } else {
            notify(addChildExpenseTypeRes.message, "error");
        }
      }
    }
  }, [isLoading, addChildExpenseTypeRes])


  return [
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
  ];
}


export default useAddParentExpenseType