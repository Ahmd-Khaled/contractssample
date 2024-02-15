import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addPosition, logIn } from "../../redux/thunkActions/authActions";
import { useFormik } from "formik";
import * as Yup from 'yup';
import Cookies from "js-cookie";
import { useState } from "react";
import notify from "../notify/useNotification";
import { redirect } from "react-router-dom";


const useAddPosition = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const LoginSchema = Yup.object().shape({
    positionCode: Yup.number().required('نوع الوظيفة مطلوب'),
    countryCode: Yup.number().required('أختر الدولة'),
    userName: Yup.string().required('أسم المستخدم مطلوب'),
    mobile: Yup.number().required('رقم الجوال مطلوب'),
    status: Yup.number().required('أختر حالة الموظف'),
    email: Yup.string().email('أدخل ايميل صحيح').required('البريد الالكتروني مطلوب'),
    password: Yup.string()
      .min(6, 'يجب الا تقل كلمة المرور عن 6 أحرف')
      .max(50, 'يجب الا تزيد كلمة المرور عن 50 حرف')
      .required('كلمة المرور مطلوبة'),
    confirmPassword: Yup.string()
    .min(6, 'يجب الا تقل كلمة المرور عن 6 أحرف')
    .max(50, 'يجب الا تزيد كلمة المرور عن 50 حرف')
    .required('اعادة كلمة المرور مطلوبة')
    .oneOf([Yup.ref('password')], 'كلمة المرور غير متطابقة')
  });

  const formik = useFormik({
    initialValues: {
      positionCode: '',
      countryCode: '',
      userName: '',
      mobile: '',
      status: '',
      email: '',
      password: '',
      confirmPassword: ''
    },
    validationSchema: LoginSchema,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: values => {
      // alert(JSON.stringify(values, null, 2));
      onSubmitForm(values);
    },
  });

  let positionCode;
  let ErrorPositionCode;
  let onChangePositionCode;
  let onBlurPositionCode;

  let countryCode;
  let countryCodeError;
  let onChangeCountryCode;
  let onBlurCountryCode;

  let userName;
  let ErroruserName;
  let onChangeUserName;
  let onBlurUserName;

  let mobile;
  let mobileError;
  let onChangeMobile;
  let onBlurMobile;

  let status;
  let Errorstatus;
  let onChangeStatus;
  let onBlurStatus;

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
  // ----------
  
  positionCode = formik.values.positionCode;
  ErrorPositionCode = formik.touched.positionCode && formik.errors.positionCode ? formik.errors.positionCode : null;
  onChangePositionCode = formik.handleChange;
  onBlurPositionCode = formik.handleBlur;
  
  countryCode = formik.values.countryCode;
  countryCodeError = formik.touched.countryCode && formik.errors.countryCode ? formik.errors.countryCode : null;
  onChangeCountryCode = formik.handleChange;
  onBlurCountryCode = formik.handleBlur;
  
  userName = formik.values.userName;
  ErroruserName = formik.touched.userName && formik.errors.userName ? formik.errors.userName : null;
  onChangeUserName = formik.handleChange;
  onBlurUserName = formik.handleBlur;
  
  mobile = formik.values.mobile;
  mobileError = formik.touched.mobile && formik.errors.mobile ? formik.errors.mobile : null;
  onChangeMobile = formik.handleChange;
  onBlurMobile = formik.handleBlur;
  
  status = formik.values.status;
  Errorstatus = formik.touched.status && formik.errors.status ? formik.errors.status : null;
  onChangeStatus = formik.handleChange;
  onBlurStatus = formik.handleBlur;
  
  email = formik.values.email;
  emailError = formik.touched.email && formik.errors.email ? formik.errors.email : null;
  onChangeEmail = formik.handleChange;
  onBlurEmail = formik.handleBlur;

  password = formik.values.password;
  passwordError = formik.touched.password && formik.errors.password ? formik.errors.password : null;
  onChangePassword = formik.handleChange;
  onBlurPassword = formik.handleBlur;
  onSubmit = formik.handleSubmit;

  confirmPassword = formik.values.confirmPassword;
  confirmPasswordError = formik.touched.confirmPassword && formik.errors.confirmPassword ? formik.errors.confirmPassword : null;
  onChangeConfirmPassword = formik.handleChange;
  onBlurConfirmPassword = formik.handleBlur;

  onSubmit = formik.handleSubmit;

  
  const onSubmitForm = async (values) => {

    const positionData = {
      user_name: values.userName,
      email: values.email,
      mobile: values.mobile,
      country_id: values.countryCode,
      position: values.positionCode,
      is_active: values.status,
      password: values.password,
    };

    setLoading(true);
    await dispatch(addPosition(positionData));
    setLoading(false);
  };

  // ---------------------------------------------------------------------------------
  const { addPositionRes, isLoading, error } = useSelector((state) => state.authSlice);

  console.log("addPositionRes:_____", addPositionRes);


  useEffect(() => {
    if (!isLoading) {
      if (addPositionRes) {
        if (addPositionRes.status) {
          if (addPositionRes.data) {
            notify(addPositionRes.message, "success");
            setTimeout(() => {
              navigate('/supervisors');
              // redirect('/supervisors');
              // return redirect("/supervisors");
            }, 3000);
          }
        } else {
          notify(addPositionRes.message, "error");
        }
      }
    }
  }, [isLoading, addPositionRes])


  return [
    positionCode,
    ErrorPositionCode,
    onChangePositionCode,
    onBlurPositionCode,
    countryCode,
    countryCodeError,
    onChangeCountryCode,
    onBlurCountryCode,
    userName,
    ErroruserName,
    onChangeUserName,
    onBlurUserName,
    mobile,
    mobileError,
    onChangeMobile,
    onBlurMobile,
    status,
    Errorstatus,
    onChangeStatus,
    onBlurStatus,
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
    onSubmit,
    isLoading,
    error
  ];
}

export default useAddPosition