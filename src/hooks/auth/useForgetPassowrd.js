import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { forgetPassword } from "../../redux/thunkActions/authActions";
import { useFormik } from "formik";
import * as Yup from 'yup';
import Cookies from "js-cookie";

const useForgetPassowrd = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [errMsgPopUp, setErrMsgPopUp] = useState("");
  const [successMsgPopUp, setSuccessMsgPopUp] = useState("");

  const ForgetSchema = Yup.object().shape({
    email: Yup.string().email('Enter a valid email').required('Email is required'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: ForgetSchema,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: values => {
      // alert(JSON.stringify(values, null, 2));
      onSubmitForm(values);
    },
  });

  let email;
  let emailError;
  let onChangeEmail;
  let onBlurEmail;
  let onSubmit;

  email = formik.values.email;
  emailError = formik.touched.email && formik.errors.email ? formik.errors.email : null;
  onChangeEmail = formik.handleChange;
  onBlurEmail = formik.handleBlur;
  onSubmit = formik.handleSubmit;

  const onSubmitForm = async (values) => {
    const userEmail = {
      email: values.email,
    }
    console.log("forgetPasswordEmail: ", userEmail);
    setLoading(true);
    dispatch(forgetPassword(userEmail));
    setLoading(false);
  };

  const { forgetPasswordRes, isLoading, error } = useSelector((state) => state.authSlice);

  console.log("forgetPasswordRes:_____", forgetPasswordRes);

  useEffect(() => {
    if (forgetPasswordRes) {
      if (forgetPasswordRes.status) {
        
      }
    }
  }, [isLoading, forgetPasswordRes])


  return [
    email,
    emailError,
    onChangeEmail,
    onBlurEmail,
    onSubmit
  ];
}
export default useForgetPassowrd;