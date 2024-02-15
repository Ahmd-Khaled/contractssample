import styles from "./styles.module.scss";
import { GoPerson } from "react-icons/go";
import { RiTodoLine } from "react-icons/ri";
import { MdLogout } from "react-icons/md";
import { BiTask } from "react-icons/bi";
import { forwardRef } from "react";
import useLogout from "../../../../hooks/auth/useLogout";
import { ToastContainer } from "react-toastify";
import { useTranslation } from "react-i18next";
import Spinner from "../../../Utils/Spinner/Spinner";
import Error from "../../../Utils/Error/Error";

const AccountMenu = forwardRef(function AccountMenu({ closeAccMenuHandler }, accMenuRef) {
  const { t, i18n } = useTranslation();

  const [logOutHandler, isLoadingLogout, errorLogout] = useLogout();

  return (
    <div ref={accMenuRef} className={styles.accountMenu}>
      {isLoadingLogout && <Spinner custom={true} />}
      {errorLogout && <Error errMsg={errorLogout} />}
      <ul className={styles.profileList}>
        <li onClick={closeAccMenuHandler} className={styles.profileItem}>
          <a href="/">
            <GoPerson />
            <span>أحمد خالد</span>
          </a>
        </li>
        <li onClick={closeAccMenuHandler} className={styles.profileItem}>
          <a href="/">
            <RiTodoLine />
            <span>الملف الشخصي</span>
          </a>
        </li>
        <li onClick={closeAccMenuHandler} className={styles.profileItem}>
          <a href="/">
            <BiTask />
            <span>المهام</span>
          </a>
        </li>
        <li onClick={() => {
          logOutHandler();
          // closeAccMenuHandler();
        }} className={styles.profileItem}>
          <button>
            <MdLogout />
            <span>تسجيل الخروج</span>
          </button>
        </li>
      </ul>
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
  )
})

export default AccountMenu