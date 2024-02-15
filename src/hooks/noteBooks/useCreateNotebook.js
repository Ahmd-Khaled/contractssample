import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import notify from '../notify/useNotification';
import { useFormik } from "formik";
import * as Yup from 'yup';
import { createNotebook } from '../../redux/thunkActions/noteBooksActions';


const useCreateNotebook = (data) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const CreateNotebookSchema = Yup.object().shape({
    numOfNotebooks: Yup.number().required("عدد الدفاتر مطلوب"),
    countryCode: Yup.number().required("أختر دولة"),
  });

  const formik = useFormik({
    initialValues: {
      numOfNotebooks: '',
      countryCode: ''
    },
    validationSchema: CreateNotebookSchema,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: values => {
      // alert(JSON.stringify(values, null, 2));
      onSubmitForm(values);
    },
  });

  let numOfNotebooks;
  let numOfNotebooksError;
  let onChangeNumOfNotebooks;
  let onBlurNumOfNotebooks;
  let countryCode;
  let countryCodeError;
  let onChangeCountryCode;
  let onBlurCountryCode;
  let onSubmit;

  numOfNotebooks = formik.values.numOfNotebooks;
  numOfNotebooksError = formik.touched.numOfNotebooks && formik.errors.numOfNotebooks ? formik.errors.numOfNotebooks : null;
  onChangeNumOfNotebooks = formik.handleChange;
  onBlurNumOfNotebooks = formik.handleBlur;
  countryCode = formik.values.countryCode;
  countryCodeError = formik.touched.countryCode && formik.errors.countryCode ? formik.errors.countryCode : null;
  onChangeCountryCode = formik.handleChange;
  onBlurCountryCode = formik.handleBlur;
  onSubmit = formik.handleSubmit;


  
  const onSubmitForm = async (values) => {
    const data = {
      notebooks_count: Number(values.numOfNotebooks),
      country_id: Number(values.countryCode)
    }
    console.log("____createNotebook Data: ", data)
    setLoading(true);
    await dispatch(createNotebook(data));
    setLoading(false);
  };

  // ---------------------------------------------------------------------------------



  const { createNotebookRes, isLoading, error } = useSelector(state => state.noteBooksSlice);
  
  
  console.log("_______(createNotebookRes)__________:", createNotebookRes);
  if (!loading) {
    if (createNotebookRes) {
      if (createNotebookRes.status) {
        notify(createNotebookRes.message, "success")
        setTimeout(() => {
          navigate("/all-notebooks")
        }, 1500);
      } else {
        notify(createNotebookRes.message, "error")
      }
    }
  }

  return [
    numOfNotebooks,
    numOfNotebooksError,
    onChangeNumOfNotebooks,
    onBlurNumOfNotebooks,
    countryCode,
    countryCodeError,
    onChangeCountryCode,
    onBlurCountryCode,
    onSubmit,
    isLoading,
    error
  ]
}


export default useCreateNotebook