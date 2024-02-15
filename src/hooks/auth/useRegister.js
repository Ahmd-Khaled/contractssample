import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createNewUser } from "../../redux/thunkActions/authActions";
import { resetSate } from "../../redux/slices/authSlice";
import { useFormik } from "formik";
import * as Yup from 'yup';
import Cookies from "js-cookie";
import notify from "../notify/useNotification";


const useRegister = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);
  const [showTermsPopup, setShowTermsPopup] = useState(false);
  const [errMsgPopUp, setErrMsgPopUp] = useState("");
  const [successMsgPopUp, setSuccessMsgPopUp] = useState("");

  const termsChangeHandler = () => {
    setIsTermsAccepted(!isTermsAccepted);
  }

  const RegisterSchema = Yup.object().shape({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    email: Yup.string().email('Enter a valid email').required('Email is required'),
    phone: Yup.number().required('Mobile number is required'),
    password: Yup.string()
      .min(8, 'Password should be of minimum 8 characters length')
      .max(50, 'Password should be of maximum 50 characters length')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .min(8, 'Confirm Password should be of minimum 8 characters length')
      .max(50, 'Confirm Password should be of maximum 50 characters length')
      .required('Please retype your password')
      .oneOf([Yup.ref('password')], 'Your passwords do not match.')
  });

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: ''
    },
    validationSchema: RegisterSchema,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: values => {
      onSubmitForm(values);
    },
  });

  let firstName;
  let firstNameError;
  let onChangeFirstName;
  let onBlurFirstName;

  let lastName;
  let lastNameError;
  let onChangeLastName;
  let onBlurLastName;
  
  let email;
  let emailError;
  let onChangeEmail;
  let onBlurEmail;
  
  let phone;
  let phoneError;
  let onChangePhone;
  let onBlurPhone;

  let password;
  let passwordError;
  let onChangePassword;
  let onBlurPassword;

  let confirmPassword;
  let confirmPasswordError;
  let onChangeConfirmPassword;
  let onBlurConfirmPassword;

  let onSubmit;

  firstName = formik.values.firstName;
  firstNameError = formik.touched.firstName && formik.errors.firstName ? formik.errors.firstName : null;
  onChangeFirstName = formik.handleChange;
  onBlurFirstName = formik.handleBlur;

  lastName = formik.values.lastName;
  lastNameError = formik.touched.lastName && formik.errors.lastName ? formik.errors.lastName : null;
  onChangeLastName = formik.handleChange;
  onBlurLastName = formik.handleBlur;

  email = formik.values.email;
  emailError = formik.touched.email && formik.errors.email ? formik.errors.email : null;
  onChangeEmail = formik.handleChange;
  onBlurEmail = formik.handleBlur;

  phone = formik.values.phone;
  phoneError = formik.touched.phone && formik.errors.phone ? formik.errors.phone : null;
  onChangePhone = formik.handleChange;
  onBlurPhone = formik.handleBlur;

  password = formik.values.password;
  passwordError = formik.touched.password && formik.errors.password ? formik.errors.password : null;
  onChangePassword = formik.handleChange;
  onBlurPassword = formik.handleBlur;

  confirmPassword = formik.values.confirmPassword;
  confirmPasswordError = formik.touched.confirmPassword && formik.errors.confirmPassword ? formik.errors.confirmPassword : null;
  onChangeConfirmPassword = formik.handleChange;
  onBlurConfirmPassword = formik.handleBlur;

  onSubmit = formik.handleSubmit;

  // --------------------------------------------------------------------------------------------------
  const { signUp, isLoading, error } = useSelector((state) => state.authSlice);


  const onSubmitForm = async (values) => {
    if (!isTermsAccepted) {
      setShowTermsPopup(true);
      return;
    }
    const newUserData = {
      name: `${values.firstName} ${values.lastName}`,
      email: values.email,
      mobile: values.phone,
      password: values.password,
      password_confirmation: values.confirmPassword
    }
    setLoading(true);
    await dispatch(createNewUser(newUserData));
    setLoading(false);
  };

  useEffect(() => {
    if (!loading) {
      if (signUp) {
        if (signUp.status) {
          if (signUp.user.api_token) {
            // Cookies.set("api_token", signUp.user.api_token);
            // localStorage.setItem("api_token", signUp.user.api_token);

            // setSuccessMsgPopUp(signUp.message);
            notify(signUp.message, "success");
            
            setTimeout(() => {
              navigate('/login');
            }, 3000);
          } 
        } else {
          setErrMsgPopUp(signUp.message);
          notify(signUp.message, "error");
        }
        // if (signUp.status === false) {
        //   if (signUp.errorNumber === "E700" || signUp.message === "The mobile has already been taken.") {
        //     setErrMsgPopUp("The mobile has already been taken.");
        //   } else {
        //     setErrMsgPopUp(signUp.message);
        //   }
        // }
      }
    }
  }, [loading])

  return [
    firstName,
    firstNameError,
    onChangeFirstName,
    onBlurFirstName,
    lastName,
    lastNameError,
    onChangeLastName,
    onBlurLastName,
    email,
    emailError,
    onChangeEmail,
    onBlurEmail,
    phone,
    phoneError,
    onChangePhone,
    onBlurPhone,
    password,
    passwordError,
    onChangePassword,
    onBlurPassword,
    confirmPassword,
    confirmPasswordError,
    onChangeConfirmPassword,
    onBlurConfirmPassword,
    isTermsAccepted,
    termsChangeHandler,
    showTermsPopup,
    errMsgPopUp,
    successMsgPopUp,
    onSubmit
  ]
}

export default useRegister;





// ------------------------------------------------------------------------------




  // --------------------------------------------------------------------------------------------------
  // name: `${values.firstName} ${values.lastName}`,
  // -----------------------------------Test With Fetch------------------------------------------------
  // const onSubmitFormx = async (values) => {
  //   if (!isTermsAccepted) {
  //     setShowTermsPopup(true);
  //     return;
  //   }
  //   const newUserData = {
  //     name: `${values.firstName} ${values.lastName}`,
  //     email: values.email,
  //     mobile: values.phone,
  //     password: values.password,
  //     password_confirmation: values.confirmPassword
  //   }

  //   const options = {
  //     method: 'POST',
  //     headers: {
  //       'Accept': '*/*',
  //       'Content-Type': 'application/json',
  //       'Access-Control-Allow-Origin': '*',
  //       'allow_headers': ['Content-Type', 'Authorization', 'language', 'api_password'],
  //       'Accept-Language': '*',
  //       'api_password': '123456',
  //       'language': 'ar',
  //       'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvbmVzdHJldHRvY29mZmVlLmNvbVwvZGFzaGJvYXJkXC9hcGlcL3JlZ2lzdGVyIiwiaWF0IjoxNzAwOTM5ODIyLCJuYmYiOjE3MDA5Mzk4MjIsImp0aSI6IkpYbHBNRkJ6QUxIVXc1NkkiLCJzdWIiOjQxLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.Qpw8OFSbkLSnFhhQBLTuU8PpvwsNthGLCMggupurKH4',
  //     },
  //     body: JSON.stringify(newUserData)
  //   };

  //   fetch('https://nestrettocoffee.com/dashboard/api/register', options)
  //     .then(response => response.json())
  //     .then(data => console.log("data-fetch: ", data))
  //     .catch(error => console.error("error-fetch: ", error));

  // };
      // fcm_token: 'fKDcMRWBRD2UHZ-o_BY-KI:APA91bHVgUZ4QabNTbc9ciCWnIq5Nr-ZBh0e3PHTR688IsNDnxAJv_-WP1wm4myYpgBStClY1pqT2Xz9oCixkNquSANH04SsTSSaOgDoONBzBdy5sjvXgMvdFEQwzZtZ1oh9DEdUmmg4'

// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { createNewUser } from "../../redux/thunkActions/authActions";
// import { resetSate } from "../../redux/slices/authSlice";

// const useRegister = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();


//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");

//   const [firstNameError, setFirstNameError] = useState("");
//   const [lastNameError, setLastNameError] = useState("");
//   const [emailError, setEmailError] = useState("");
//   const [phoneError, setPhoneError] = useState("");
//   const [passwordError, setPasswordError] = useState("");
//   const [confirmPasswordError, setConfirmPasswordError] = useState("");

//   const onChangeFirstName = (e) => {
//     setFirstName(e.target.value);
//   };

//   const onChangeLastName = (e) => {
//     setLastName(e.target.value);
//   };

//   const onChangeEmail= (e) => {
//     setEmail(e.target.value);
//   };

//   const onChangePhone = (e) => {
//     setPhone(e.target.value);
//   };

//   const onChangePassword = (e) => {
//     setPassword(e.target.value);
//   };

//   const onChangeConfirmPassword = (e) => {
//     setConfirmPassword(e.target.value);
//   };

//   const validationValues = () => {
//     if (firstName === "") {
//       setFirstNameError("الاسم الاول مطلوب");
//       return;
//     }
//     // if (lastName === "") {
//     //   setLastNameError("اسم العائله مطلوب");
//     //   return;
//     // }
//     if (email === "") {
//       setEmailError(" البريد الالكتروني مطلوب");
//       return;
//     }
//     if (phone === "") {
//       setPhoneError("رقم الهاتف مطلوب");
//       return;
//     }
//     if (password === "") {
//       setPasswordError("كلمة المرور مطلوبة");
//       return;
//     }
//     if (confirmPassword === "") {
//       setConfirmPasswordError("تأكيد كلمة المرور مطلوب");
//       return;
//     }
//     if (password !== confirmPassword) {
//       setConfirmPasswordError("كلمة المرور غير متطابقه")
//     }
//   }

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     validationValues();

//     const newUserData = {
//       name: `${firstName} ${lastName}`,
//       email,
//       mobile:phone,
//       password,
//       password_confirmation: confirmPassword,
//       // fcm_token: 'fKDcMRWBRD2UHZ-o_BY-KI:APA91bHVgUZ4QabNTbc9ciCWnIq5Nr-ZBh0e3PHTR688IsNDnxAJv_-WP1wm4myYpgBStClY1pqT2Xz9oCixkNquSANH04SsTSSaOgDoONBzBdy5sjvXgMvdFEQwzZtZ1oh9DEdUmmg4'
//     }
//     console.log("newUserData:", newUserData);
//     dispatch(createNewUser(newUserData));
//   };

//   const { signUp, isLoading, error} = useSelector((state) => state.authSlice);

//   useEffect(() => {
//     if (isLoading === false) {
//       if (typeof signUp === "object") {
//         if (signUp["token"]) {
//           localStorage.setItem("token", signUp["token"]);

//           setFirstName("")
//           setLastName("")
//           setEmail("")
//           setPhone("")
//           setPassword("")
//           setConfirmPassword("")

//           dispatch(resetSate());

//           setTimeout(() => {
//             navigate('/login');
//           }, 3000)
//         }

//         if (signUp.errors) {
//           signUp.errors.map((err) => console.log(err.msg, "error"))
//         }
//       }
//     }
//   }, [isLoading]);

//   return [
//     firstName,
//     lastName,
//     email,
//     phone,
//     password,
//     confirmPassword,
//     onChangeFirstName,
//     onChangeLastName,
//     onChangeEmail,
//     onChangePhone,
//     onChangePassword,
//     onChangeConfirmPassword,
//     firstNameError,
//     emailError,
//     phoneError,
//     passwordError,
//     confirmPasswordError,
//     onSubmit
//   ]
// }

// export default useRegister;



