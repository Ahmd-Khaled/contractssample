import Input from "../Input/Input";
import { AiOutlineUser } from "react-icons/ai";
import { VscKey } from "react-icons/vsc";
import { BiLockOpen } from "react-icons/bi";
import { LuPhone } from "react-icons/lu";
import { HiOutlineMail } from "react-icons/hi";
import styles from "./styles.module.scss";
import SelectCountry from "../../Utils/SelectCountry/SelectCountry";
import useCreateNotebook from "../../../hooks/noteBooks/useCreateNotebook";
import SelectPosition from "../../Utils/SelectPosition/SelectPosition";
import Spinner from "../../Utils/Spinner/Spinner";
import SelectStatus from "../../Utils/SelectStatus/SelectStatus";
import useAddPosition from "../../../hooks/auth/useAddPosition";
import { ToastContainer } from "react-toastify";
import { useTranslation } from "react-i18next";
import Error from "../../Utils/Error/Error";

const AddPosition = () => {
  const { t, i18n } = useTranslation();
  
  const [
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
    isLoadingAddPosition,
    errorAddPosition
  ] = useAddPosition();

  return (
    <section className={styles.addPosition}>
      {isLoadingAddPosition && <Spinner custom={true} />}
      {errorAddPosition && <Error errMsg={errorAddPosition} />}
      <div className="mainContainer">
        <div className={styles.container}>
          <div className={styles.head}>
            <div className="pageTitleBox">
              <h1 className="pageTitle">اضافة موظف</h1>
            </div>
          </div>
          <div className={styles.content}>
            <form onSubmit={onSubmit} className={styles.form}>
              <div className={styles.selections}>
                <div className={styles.inputWrapper}>
                  <label>أختر الوظيفة</label>
                  <SelectPosition 
                    name="positionCode"
                    value={positionCode}
                    onChange={onChangePositionCode}
                    onBlur={onBlurPositionCode}
                    errorMsg={ErrorPositionCode}
                  />
                </div>
                <div className={styles.inputWrapper}>
                  <label>أختر الدولة</label>
                  <SelectCountry 
                    name="countryCode"
                    value={countryCode}
                    onChange={onChangeCountryCode}
                    onBlur={onBlurCountryCode}
                    errorMsg={countryCodeError}
                  />
                </div>
              </div>
              <Input
                isFirst={true}
                icon={<AiOutlineUser />}
                name="userName"
                value={userName}
                onChange={onChangeUserName}
                onBlur={onBlurUserName}
                errorMsg={ErroruserName}
                type="text"
                placeholder="أسم المستخدم*"
              />
              <Input
                icon={<LuPhone />}
                name="mobile"
                value={mobile}
                errorMsg={mobileError}
                onChange={onChangeMobile}
                onBlur={onBlurMobile}
                type="text"
                placeholder="رقم الموبايل*"
              />
              <Input
                icon={<HiOutlineMail />}
                name="email"
                value={email}
                errorMsg={emailError}
                onChange={onChangeEmail}
                onBlur={onBlurEmail}
                type="email"
                placeholder="البريد الالكتروني*" 
              />
              <Input
                icon={<VscKey />}
                name="password"
                value={password}
                errorMsg={passwordError}
                onChange={onChangePassword}
                onBlur={onBlurPassword}
                type="password"
                placeholder="كلمة المرور*" 
              />
              <Input
                isLast={true}
                icon={<VscKey />}
                name="confirmPassword"
                value={confirmPassword}
                errorMsg={confirmPasswordError}
                onChange={onChangeConfirmPassword}
                onBlur={onBlurConfirmPassword}
                type="password"
                placeholder="اعادة كلمة المرور*" 
              />
              <div className={styles.inputWrapper2}>
                <label>أختر الحالة</label>
                <SelectStatus 
                  name="status"
                  value={status}
                  errorMsg={Errorstatus}
                  onChange={onChangeStatus}
                  onBlur={onBlurStatus}
                />
              </div>
              <div className={styles.loginBtn}>
                <button>
                  <BiLockOpen />
                  <span>اضافة موظف</span>
                </button>
              </div>
            </form>
          </div>
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
    </section>
  )
}

export default AddPosition