import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logIn } from "../../redux/thunkActions/authActions";
import { useFormik } from "formik";
import * as Yup from 'yup';
import Cookies from "js-cookie";
import { useState } from "react";
import notify from "../notify/useNotification";
import { redirect } from "react-router-dom";


const useLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const LoginSchema = Yup.object().shape({
    email: Yup.string().email('أدخل بريد إالكتروني صحيح').required('البريد الإلكتروني مطلوب'),
    password: Yup.string()
      .min(6, 'يجب الا تقل كلمة المرور عن 6 أحرف')
      .max(50, 'يجب الا تزيد كلمة المرور عن 50 حرف')
      .required('كلمة المرور مطلوبة'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: LoginSchema,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: values => {
      // alert(JSON.stringify(values, null, 2));
      onSubmitForm(values);
    },
  });

  let email;
  let password;
  let emailError;
  let passwordError;
  let onChangeEmail;
  let onBlurEmail;
  let onChangePassword;
  let onBlurPassword;
  let onSubmit;

  email = formik.values.email;
  emailError = formik.touched.email && formik.errors.email ? formik.errors.email : null;
  onChangeEmail = formik.handleChange;
  onBlurEmail = formik.handleBlur;
  password = formik.values.password;
  passwordError = formik.touched.password && formik.errors.password ? formik.errors.password : null;
  onChangePassword = formik.handleChange;
  onBlurPassword = formik.handleBlur;
  onSubmit = formik.handleSubmit;


  
  const onSubmitForm = async (values) => {
    
    // alert(JSON.stringify(values, null, 2));
    const loginData = {
      email: values.email,
      password: values.password,
    }
    setLoading(true);
    await dispatch(logIn(loginData));
    setLoading(false);
  };

  // ---------------------------------------------------------------------------------
  const { loginRes, isLoading, error } = useSelector((state) => state.authSlice);

  console.log("loginRes:_____", loginRes);

  let loginResData = [];

  // useEffect(() => {
  //   if (loginRes) {
  //     if (loginRes.status) {
  //       if (loginRes.user.api_token) {
  //         setIsLoggedIn(true);
  //       } 
  //     }
  //   }
  // }, [loginRes])

  useEffect(() => {
    if (!isLoading) {
      if (loginRes) {
        if (loginRes.status) {
          if (loginRes.data) {
            loginResData = loginRes.data;
            console.log("____*(*)*______loginResData: ", loginResData)

            if (loginRes.data.token) {
              setIsLoggedIn(true);
            }
            
            Cookies.set("api_token", loginRes.data.token);
            Cookies.set("user_data", JSON.stringify(loginRes.data));
            notify(loginRes.message, "success");
  
            setTimeout(() => {
              navigate('/');
              // redirect("/");
              window.location.reload();
            }, 3000);

          } else {
            Cookies.remove("api_token");
            Cookies.remove("user_data");
          }
        } else {
          Cookies.remove("api_token");
          Cookies.remove("user_data");
          notify(loginRes.message, "error");
        }
      }
    }
  }, [loading, loginRes])


  return [
    email,
    emailError,
    onChangeEmail,
    onBlurEmail,
    password,
    passwordError,
    onChangePassword,
    onBlurPassword,
    isLoggedIn,
    onSubmit,
    loginResData,
    isLoading,
    error
  ];
}

export default useLogin;