import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import notify from "../notify/useNotification";
import { uploadContractFiles } from "../../redux/thunkActions/contractsActions";
import dataURLtoFile from "../../utils/dataURLtoFile";

const useUploadContractFiles = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const archieveSchema = Yup.object().shape({
    serialNumber: Yup.string().required("الرقم المسلسل للعقد مطلوب"),
    file1: Yup.mixed().required("صورة العقد مطلوبه"),
    file2: Yup.mixed().required("صورة الإستبيان مطلوبه"),
    file3: Yup.mixed().required("صورة اللوحة مطلوبه"),
    file4: Yup.mixed().required("صورة الملصق مطلوبه"),
  });

  const formik = useFormik({
    initialValues: {
      serialNumber: "",
      file1: null,
      file2: null,
      file3: null,
      file4: null,
    },
    validationSchema: archieveSchema,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      onSubmitForm(values);
    },
  });

  // formik.setFieldValue('photo', e.currentTarget.files[0])

  let serialNumber;
  let serialNumberError;
  let onChangeSerialNumber;
  let onBlurSerialNumber;

  let file1;
  let file1Error;
  let onChangeFile1;
  let onBlurFile1;

  let file2;
  let file2Error;
  let onChangeFile2;
  let onBlurFile2;

  let file3;
  let file3Error;
  let onChangeFile3;
  let onBlurFile3;

  let file4;
  let file4Error;
  let onChangeFile4;
  let onBlurFile4;

  let onSubmit;
  // ----------

  serialNumber = formik.values.serialNumber;
  serialNumberError =
    formik.touched.serialNumber && formik.errors.serialNumber
      ? formik.errors.serialNumber
      : null;
  onChangeSerialNumber = formik.handleChange;
  onBlurSerialNumber = formik.handleBlur;

  file1 = formik.values.file1;
  file1Error =
    formik.touched.file1 && formik.errors.file1 ? formik.errors.file1 : null;
  onChangeFile1 = (e) =>
    formik.setFieldValue("file1", e.currentTarget.files[0]);
  // onChangeFile1 = formik.handleChange;
  // onChangeFile1 = (e) => {
  //   const fileReader1 = new FileReader();
  //   fileReader1.onload = () => {
  //     if (fileReader1.readyState === 2) {
  //       formik.setFieldValue('file1', fileReader1.result);
  //     }
  //   };
  //   fileReader1.readAsDataURL(e.target.files[0]);
  // }
  onBlurFile1 = formik.handleBlur;

  file2 = formik.values.file2;
  file2Error =
    formik.touched.file2 && formik.errors.file2 ? formik.errors.file2 : null;
  onChangeFile2 = (e) =>
    formik.setFieldValue("file2", e.currentTarget.files[0]);
  // onChangeFile2 = formik.handleChange;
  // onChangeFile2 = (e) => {
  //   const fileReader2 = new FileReader();
  //   fileReader2.onload = () => {
  //     if (fileReader2.readyState === 2) {
  //       formik.setFieldValue('file2', fileReader2.result);
  //     }
  //   };
  //   fileReader2.readAsDataURL(e.target.files[0]);
  // }
  onBlurFile2 = formik.handleBlur;

  file3 = formik.values.file3;
  file3Error =
    formik.touched.file3 && formik.errors.file3 ? formik.errors.file3 : null;
  onChangeFile3 = (e) =>
    formik.setFieldValue("file3", e.currentTarget.files[0]);
  // onChangeFile3 = formik.handleChange;
  // onChangeFile3 = (e) => {
  //   const fileReader3 = new FileReader();
  //   fileReader3.onload = () => {
  //     if (fileReader3.readyState === 2) {
  //       formik.setFieldValue('file3', fileReader3.result);
  //     }
  //   };
  //   fileReader3.readAsDataURL(e.target.files[0]);
  // }
  onBlurFile3 = formik.handleBlur;

  file4 = formik.values.file4;
  file4Error =
    formik.touched.file4 && formik.errors.file4 ? formik.errors.file4 : null;
  onChangeFile4 = (e) =>
    formik.setFieldValue("file4", e.currentTarget.files[0]);
  // onChangeFile4 = formik.handleChange;
  // onChangeFile4 = (e) => {
  //   const fileReader4 = new FileReader();
  //   fileReader4.onload = () => {
  //     if (fileReader4.readyState === 2) {
  //       formik.setFieldValue('file4', fileReader4.result);
  //     }
  //   };
  //   fileReader4.readAsDataURL(e.target.files[0]);
  // }
  onBlurFile4 = formik.handleBlur;

  onSubmit = formik.handleSubmit;

  const onSubmitForm = async (values) => {
    console.log("_____________Submitting Contract Files Form________");



    //Usage example:
    var file = dataURLtoFile("data:text/plain;base64,aGVsbG8=", "hello.txt");
    console.log("_____dataURLtoFile____", file);

    const formData1 = new FormData();
    formData1.append("file1", values.file1);
    // formData1.append("file1", {
    //   uri: dataUri,
    //   name: values.file.name,
    //   type: values.file.type,
    // });

    console.log("+++++(formData1)+++++: ", formData1);

    const formData2 = new FormData();
    formData2.append("file2", values.file2);

    const formData3 = new FormData();
    formData3.append("file3", values.file3);

    const formData4 = new FormData();
    formData4.append("file4", values.file4);

    const contractData = {
      serial_number: values.serialNumber,
      "file[1]": file1,
      "file[2]": file2,
      "file[3]": file3,
      "file[4]": file4,
    };

    console.log("_____________contractData________", contractData);

    setLoading(true);
    dispatch(uploadContractFiles(contractData));
    setLoading(false);
  };

  // ---------------------------------------------------------------------------------
  const { uploadContractFilesRes, isLoading, error } = useSelector(
    (state) => state.contractsSlice
  );

  console.log("uploadContractFilesRes:_____", uploadContractFilesRes);

  useEffect(() => {
    if (!isLoading) {
      if (uploadContractFilesRes) {
        if (uploadContractFilesRes.status) {
          if (uploadContractFilesRes.message) {
            notify(uploadContractFilesRes.message, "success");
            setTimeout(() => {
              navigate("/archieve");
            }, 3000);
          }
        } else {
          notify(uploadContractFilesRes.message, "error");
        }
      }
    }
  }, [loading, uploadContractFilesRes]);

  return [
    serialNumber,
    serialNumberError,
    onChangeSerialNumber,
    onBlurSerialNumber,
    file1,
    file1Error,
    onChangeFile1,
    onBlurFile1,
    file2,
    file2Error,
    onChangeFile2,
    onBlurFile2,
    file3,
    file3Error,
    onChangeFile3,
    onBlurFile3,
    file4,
    file4Error,
    onChangeFile4,
    onBlurFile4,
    onSubmit,
    loading,
    isLoading,
    error,
  ];
};

export default useUploadContractFiles;
