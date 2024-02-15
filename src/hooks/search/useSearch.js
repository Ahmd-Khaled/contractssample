import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import Cookies from "js-cookie";
import { useState } from "react";
import notify from "../notify/useNotification";
import { redirect } from "react-router-dom";
import { getSearchResults } from "../../redux/thunkActions/searchActions";

const useSearch = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const SearchSchema = Yup.object().shape({
    searchWord: Yup.string()
      .min(3, "يجب الا تقل كلمة البحث عن 3 أحرف")
      .max(50, "يجب الا تزيد كلمة البحث عن 50 حرف")
      .required("كلمة البحث مطلوبة"),
  });

  const formik = useFormik({
    initialValues: {
      searchWord: "",
    },
    validationSchema: SearchSchema,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      onSubmitForm(values);
    },
  });

  let searchWord;
  let searchWordError;
  let onChangeSearchWord;
  let onBlurSearchWord;
  let onSubmit;

  searchWord = formik.values.searchWord;
  searchWordError = formik.touched.searchWord && formik.errors.searchWord ? formik.errors.searchWord : null;
  onChangeSearchWord = formik.handleChange;
  onBlurSearchWord = formik.handleBlur;
  onSubmit = formik.handleSubmit;

  const onSubmitForm = async (values) => {
    // alert(JSON.stringify(values, null, 2));
    const searchWord = {
      word: values.searchWord,
    };
    setLoading(true);
    await dispatch(getSearchResults(searchWord));
    // setLoading(false);
    setTimeout(() => {
        setLoading(false);
        if(loading === false) {
            navigate('/search');
        }
      }, 1000);
  };
  // ---------------------------------------------------------------------------------
  const { getSearchResultsRes, isLoading, error } = useSelector((state) => state.searchSlice);

  console.log("getSearchResultsRes:_____", getSearchResultsRes);

  let searchResData = [];

  return [
    searchWord,
    searchWordError,
    onChangeSearchWord,
    onBlurSearchWord,
    onSubmit,
    searchResData,
    isLoading,
    error,
    loading
  ];
};

export default useSearch;
