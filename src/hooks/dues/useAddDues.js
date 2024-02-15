import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { useState } from "react";
import notify from "../notify/useNotification";
import { addDues } from "../../redux/thunkActions/duesActions";


const useAddDues = (type) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const DuesSchema = Yup.object().shape({
    userId: Yup.number().required('كود الموظف مطلوب'),
    reason: Yup.string().required('السبب مطلوب'),
    currency: Yup.string().required('عملة الدولة مطلوبه'),
    amount: Yup.number().required('المبلغ مطلوب'),
    duesDate: Yup.string().required('تاريخ العملية مطلوب'),
  });

  const formik = useFormik({
    initialValues: {
        type: '',
        userId: '',
        reason: '',
        currency: '',
        amount: '',
        duesDate: ''
    },
    validationSchema: DuesSchema,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: values => {
      // alert(JSON.stringify(values, null, 2));
      onSubmitForm(values);
    },
  });

  let userId;
  let userIdError;
  let onChangeUserId;
  let onBlurUserId;

  let reason;
  let reasonError;
  let onChangeReason;
  let onBlurReason;

  let currency;
  let currencyError;
  let onChangeCurrency;
  let onBlurCurrency;

  let amount;
  let amountError;
  let onChangeAmount;
  let onBlurAmount;

  let duesDate;
  let duesDateError;
  let onChangeDuesDate;
  let onBlurDuesDate;

  let onSubmit;
  // ----------
  
  userId = formik.values.userId;
  userIdError = formik.touched.userId && formik.errors.userId ? formik.errors.userId : null;
  onChangeUserId = formik.handleChange;
  onBlurUserId = formik.handleBlur;
  
  reason = formik.values.reason;
  reasonError = formik.touched.reason && formik.errors.reason ? formik.errors.reason : null;
  onChangeReason = formik.handleChange;
  onBlurReason = formik.handleBlur;
  
  currency = formik.values.currency;
  currencyError = formik.touched.currency && formik.errors.currency ? formik.errors.currency : null;
  onChangeCurrency = formik.handleChange;
  onBlurCurrency = formik.handleBlur;
  
  amount = formik.values.amount;
  amountError = formik.touched.amount && formik.errors.amount ? formik.errors.amount : null;
  onChangeAmount = formik.handleChange;
  onBlurAmount = formik.handleBlur;
  
  duesDate = formik.values.duesDate;
  duesDateError = formik.touched.duesDate && formik.errors.duesDate ? formik.errors.duesDate : null;
  onChangeDuesDate = formik.handleChange;
  onBlurDuesDate = formik.handleBlur;

  onSubmit = formik.handleSubmit;


  const onSubmitForm = async (values) => {
    console.log("_____________Submitting Deues Form________")
    const duesData = {
        user_id: values.userId,
        country_id: values.currency,
        dues_date: values.duesDate,
        amount: values.amount,
        type: type,
        reason: values.reason,
    };

    console.log("++++++++++++ Deues Form duesData: ", duesData)

    setLoading(true);
    dispatch(addDues(duesData));
    setLoading(false);
  };

  // ---------------------------------------------------------------------------------
  const { addDuesRes, isLoading, error } = useSelector((state) => state.duesSlice);

  console.log("addDuesRes:_____", addDuesRes);


  useEffect(() => {
    if (!isLoading) {
      if (addDuesRes) {
        if (addDuesRes.status) {
          if (addDuesRes.message) {
            notify(addDuesRes.message, "success");
            setTimeout(() => {
                if(type === 1) {
                    navigate('/deductions');
                } else if (type === 2) {
                    navigate('/bonus');
                } else {
                    navigate('/');
                }
            }, 3000);
          }
        } else {
          notify(addDuesRes.message, "error");
        }
      }
    }
  }, [loading, addDuesRes])


  return [
    userId,
    userIdError,
    onChangeUserId,
    onBlurUserId,
    reason,
    reasonError,
    onChangeReason,
    onBlurReason,
    currency,
    currencyError,
    onChangeCurrency,
    onBlurCurrency,
    amount,
    amountError,
    onChangeAmount,
    onBlurAmount,
    duesDate,
    duesDateError,
    onChangeDuesDate,
    onBlurDuesDate,
    onSubmit,
    isLoading,
    error
  ];
}

export default useAddDues