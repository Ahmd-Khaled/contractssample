import styles from "./styles.module.scss";
import { AiOutlineUser } from "react-icons/ai";
import { VscKey } from "react-icons/vsc";
import { BiLockOpen } from "react-icons/bi";
import useLogin from "../../../hooks/auth/useLogin";
import Input from "../Input/Input";
import { ToastContainer } from "react-toastify";
import { useTranslation } from "react-i18next";
import Spinner from "../../Utils/Spinner/Spinner";
import ChooseLanguage from "../../Utils/ChooseLanguage/ChooseLanguage";
import { useEffect } from "react";
import Error from "../../Utils/Error/Error";

const Login = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    localStorage.setItem("i18nextLng", 'ar')
  }, [])

  const [
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
    isLoadingLogin,
    errorLogin,

  ] = useLogin();


  return (
    <section className={styles.login}>
      {isLoadingLogin && <Spinner custom={true} />}
      {errorLogin && <Error errMsg={errorLogin} />}
      <div className="secContainer">
        <div className={styles.wrapper}>
          <div className={styles.header}>
            <div className={styles.logo}>
              <img src={process.env.PUBLIC_URL + "/images/new-logo9.svg"} alt="" />
            </div>
            <p className={styles.text}>
              <span>تسجيل الدخول مع عقود إم بي إن</span>
            </p>
            {/* <ChooseLanguage /> */}
          </div>
          <div className={styles.content}>
            <form onSubmit={onSubmit} className={styles.form}>
              <Input
                name="email"
                value={email}
                onChange={onChangeEmail}
                onBlur={onBlurEmail}
                isFirst={true}
                icon={<AiOutlineUser />}
                type="email"
                placeholder="اكتب بريدك الإلكتروني*"
                errorMsg={emailError}
              />
              <Input
                name="password"
                value={password}
                onChange={onChangePassword}
                onBlur={onBlurPassword}
                isLast={true}
                icon={<VscKey />}
                type="password"
                placeholder="كلمة المرور*"
                errorMsg={passwordError}
              />
              <div className={styles.rememberBox}>
                <div className={styles.inputBox2}>
                  <input id="remember" type="checkbox" />
                  <label htmlFor="remember">تذكرني</label>
                </div>
                <a className={styles.link} href="/forget-password">هل نسيت كلمة السر؟</a>
              </div>
              <div className={styles.loginBtn}>
                <button type="submit">
                  <BiLockOpen />
                  <span>تسجيل الدخول</span>
                </button>
              </div>
            </form>
          </div>
          <div className={styles.footer}>
            <a className={styles.link} href="/reset-password">{t("login-text6")}</a>
            {/* <div className={styles.signUp}>
              <span>New to Moden Admin?</span>
              <a className={styles.link} href="/register">Sign Up</a>
            </div> */}
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

export default Login