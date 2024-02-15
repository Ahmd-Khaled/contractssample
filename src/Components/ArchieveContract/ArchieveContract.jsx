import { useState } from "react";
import Input from "../Auth/Input/Input";
import SectionHead from "../Utils/SectionHead/SectionHead";
import styles from "./styles.module.scss";
import UploadImage from "./UploadImage/UploadImage";
import useUploadContractFiles from "../../hooks/contracts/useUploadContractFiles";
import FullScreenImage from "./FullScreenImage/FullScreenImage";
import { ToastContainer } from "react-toastify";
import { useTranslation } from "react-i18next";
import Spinner from "../Utils/Spinner/Spinner";
import Error from "../Utils/Error/Error";

const ArchieveContract = () => {
  const { t, i18n } = useTranslation();
  const [addContractImg, setAddContractImg] = useState("");
  const [addTestmonialImg, setAddTestmonialImg] = useState("");
  const [addBoardImg, setAddBoardImg] = useState("");
  const [addPoasterImg, setAddPoasterImg] = useState("");
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [clickedImg, setClickedImg] = useState("");

  const contractImgHandler = (e) => {
    setAddContractImg(e.target.files[0]);
  };
  const removeContractImg = () => {
    setAddContractImg("");
  };
  // --------------
  const testmonialImgHandler = (e) => {
    setAddTestmonialImg(e.target.files[0]);
    console.log(e.target.files[0]);
  };
  const removeTestmonialImg = () => {
    setAddTestmonialImg("");
  };

  // --------------
  const boardImgHandler = (e) => {
    setAddBoardImg(e.target.files[0]);
  };
  const removeBoardImg = () => {
    setAddBoardImg("");
  };
  // --------------

  const poasterImgHandler = (e) => {
    setAddPoasterImg(e.target.files[0]);
  };
  const removePoasterImg = () => {
    setAddPoasterImg("");
  };

  const fullScreenHandler = (file) => {
    setIsFullScreen(true);
    setClickedImg(file);
    console.log("__File__::::::::::", file);
  };

  const closeFullScreenHandler = () => {
    setIsFullScreen(false);
  };

  const [
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
    isLoadingUploadContractFiles,
    errorUploadContractFiles,
  ] = useUploadContractFiles();

  return (
    <div className={styles.archieveContract}>
      {isLoadingUploadContractFiles && <Spinner custom={true} />}
      {errorUploadContractFiles && <Error errMsg={errorUploadContractFiles} />}

      {isFullScreen ? (
        <FullScreenImage
          clickedImg={clickedImg}
          close={closeFullScreenHandler}
        />
      ) : null}
      <div className="mainContainer">
        <div className={styles.container}>
          <SectionHead title="إدخال العقد في الأرشيف" />
          <form onSubmit={onSubmit} className={styles.archForm}>
            <div className={styles.inputWrapper}>
              <Input
                name="serialNumber"
                value={serialNumber}
                onChange={onChangeSerialNumber}
                onBlur={onBlurSerialNumber}
                errorMsg={serialNumberError}
                type="text"
                placeholder="الرقم المسلسل للعقد"
                label="الرقم المسلسل للعقد"
                isFirst={true}
              />
            </div>
            <ul className={styles.uploadList}>
              <UploadImage
                id="ContractImg"
                label="إضافة صورة العقد"
                fileHandler={contractImgHandler}
                removeFile={removeContractImg}
                file={addContractImg}
                color="#FEB103"
                name="file1"
                value={file1}
                onChange={onChangeFile1}
                onBlur={onBlurFile1}
                errorMsg={file1Error}
                fullScreenHandler={fullScreenHandler}
              />
              <UploadImage
                id="TestmonialImg"
                label="إضافة صورة الإستبيان"
                fileHandler={testmonialImgHandler}
                removeFile={removeTestmonialImg}
                file={addTestmonialImg}
                color="#51A86C"
                name="file2"
                value={file2}
                onChange={onChangeFile2}
                onBlur={onBlurFile2}
                errorMsg={file2Error}
                fullScreenHandler={fullScreenHandler}
              />
              <UploadImage
                id="BoardImg"
                label="إضافة صورة اللوحة"
                fileHandler={boardImgHandler}
                removeFile={removeBoardImg}
                file={addBoardImg}
                color="#C0DB46"
                name="file3"
                value={file3}
                onChange={onChangeFile3}
                onBlur={onBlurFile3}
                errorMsg={file3Error}
                fullScreenHandler={fullScreenHandler}
              />
              <UploadImage
                id="PoasterImg"
                label="إضافة صورة الملصق"
                fileHandler={poasterImgHandler}
                removeFile={removePoasterImg}
                file={addPoasterImg}
                color="#E4736D"
                name="file4"
                value={file4}
                onChange={onChangeFile4}
                onBlur={onBlurFile4}
                errorMsg={file4Error}
                fullScreenHandler={fullScreenHandler}
              />
            </ul>

            {/* <div className={styles.inputWrapper}>
              <label>إضافة صورة العقد</label>
              <input type="file" />
            </div>
            <div className={styles.inputWrapper}>
              <label>إضافة صورة الإستبيان</label>
              <input type="file" />
            </div>
            <div className={styles.inputWrapper}>
              <label>إضافة صورة اللوحة</label>
              <input type="file" />
            </div>
            <div className={styles.inputWrapper}>
              <label>إضافة صورة الملصق</label>
              <input type="file" />
            </div> */}
            <div className={styles.addBtnBox}>
              <button type="submit" className={styles.addBtn}>
                إضافة للأرشيف
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer
        position={i18n.dir() === "rtl" ? "bottom-right" : "bottom-left"}
        autoClose={3000}
        limit={1}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={i18n.dir() === "rtl"}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default ArchieveContract;
