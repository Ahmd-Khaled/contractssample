import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { useState } from "react";
import notify from "../notify/useNotification";
import { addChildExpenseType } from "../../redux/thunkActions/expensesActions";


const useAddChildExpenseType = (pID) => {
  console.log("(((((((((((((=======)))))))))))))pID ", pID)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const ChildExpenseSchema = Yup.object().shape({
    // parentId: Yup.number().required('إختر تصنيف رئيسي'),
    childTypeName: Yup.string().required('إسم التصنيف الفرعي مطلوب'),
    childTypeDesc: Yup.string().required('وصف التصنيف الفرعي مطلوب'),
  });

  const formik = useFormik({
    initialValues: {
      // parentId: '',
      childTypeName: '',
      childTypeDesc: ''
    },
    validationSchema: ChildExpenseSchema,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: values => {
      // alert(JSON.stringify(values, null, 2));
      onSubmitForm(values);
    },
  });

  let parentId;
  let parentIdError;
  let onChangeParentId;
  let onBlurParentId;

  let childTypeName;
  let childTypeNameError;
  let onChangeChildTypeName;
  let onBlurChildTypeName;

  let childTypeDesc;
  let childTypeDescError;
  let onChangeChildTypeDesc;
  let onBlurChildTypeDesc;

  let onSubmit;

//   parentId = formik.values.parentId;
//   parentIdError = formik.touched.parentId && formik.errors.parentId ? formik.errors.parentId : null;
//   onChangeParentId = formik.handleChange;
//   onBlurParentId = formik.handleBlur;

  // parentId = formik.values.parentId;
  // parentIdError = formik.touched.parentId && formik.errors.parentId ? formik.errors.parentId : null;
  // onChangeParentId = formik.handleChange;
  // onBlurParentId = formik.handleBlur;

  childTypeName = formik.values.childTypeName;
  childTypeNameError = formik.touched.childTypeName && formik.errors.childTypeName ? formik.errors.childTypeName : null;
  onChangeChildTypeName = formik.handleChange;
  onBlurChildTypeName = formik.handleBlur;

  childTypeDesc = formik.values.childTypeDesc;
  childTypeDescError = formik.touched.childTypeDesc && formik.errors.childTypeDesc ? formik.errors.childTypeDesc : null;
  onChangeChildTypeDesc = formik.handleChange;
  onBlurChildTypeDesc = formik.handleBlur;

  console.log("=============parentId=============: ", parentId)
  console.log("=============childTypeName=============: ", childTypeName)
  console.log("=============childTypeDesc=============: ", childTypeDesc)

  onSubmit = formik.handleSubmit;

  const onSubmitForm = async (values) => {
    const expenseChildData = {
      parent_id: pID,
      expense_type_name: values.childTypeName,
      expense_type_description: values.childTypeDesc,
  }

  console.log("/*/*/------------------- expenseChildData ------: ", expenseChildData);

  setLoading(true);
  await dispatch(addChildExpenseType(expenseChildData));
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
    isLoading,
    error
  ];
}


export default useAddChildExpenseType