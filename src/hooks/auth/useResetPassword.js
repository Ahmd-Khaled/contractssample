import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logIn } from "../../redux/thunkActions/authActions";
import { useFormik } from "formik";
import * as Yup from 'yup';
import Cookies from "js-cookie";

const useResetPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const ResetSchema = Yup.object().shape({
    email: Yup.string().email('Enter a valid email').required('Email is required'),
    password: Yup.string()
      .min(8, 'Password should be of minimum 8 characters length')
      .max(50, 'Password should be of maximum 50 characters length')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .min(8, 'Password should be of minimum 8 characters length')
      .max(50, 'Password should be of maximum 50 characters length')
      .required('Confirm Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: ResetSchema,
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

  let password;
  let passwordError;
  let onChangePassword;
  let onBlurPassword;

  let confirmPassword;
  let confirmPasswordError;
  let onChangeConfirmPassword;
  let onBlurConfirmPassword;

  let onSubmit;

  email = formik.values.email;
  emailError = formik.touched.email && formik.errors.email ? formik.errors.email : null;
  onChangeEmail = formik.handleChange;
  onBlurEmail = formik.handleBlur;
  password = formik.values.password;
  passwordError = formik.touched.password && formik.errors.password ? formik.errors.password : null;
  onChangePassword = formik.handleChange;
  onBlurPassword = formik.handleBlur;
  confirmPassword = formik.values.confirmPassword;
  confirmPasswordError = formik.touched.confirmPassword && formik.errors.confirmPassword ? formik.errors.confirmPassword : null;
  onChangeConfirmPassword = formik.handleChange;
  onBlurConfirmPassword = formik.handleBlur;
  onSubmit = formik.handleSubmit;

  const onSubmitForm = async (values) => {

    // alert(JSON.stringify(values, null, 2));
    const loginData = {
      email: values.email,
      password: values.password,
    }
    console.log("loginData: ", loginData);
    dispatch(logIn(loginData));
  };

  const { resetPasswordRes, isLoading, error } = useSelector((state) => state.authSlice);

  console.log("resetPasswordRes:_____", resetPasswordRes);

  useEffect(() => {
    if (resetPasswordRes) {
      if (resetPasswordRes.status) {
        
      }
    }
  }, [isLoading, resetPasswordRes])


  return [
    email,
    emailError,
    onChangeEmail,
    onBlurEmail,
    password,
    passwordError,
    onChangePassword,
    onBlurPassword,
    confirmPassword,
    confirmPasswordError,
    onChangeConfirmPassword,
    onBlurConfirmPassword,
    onSubmit
  ];
}

export default useResetPassword;