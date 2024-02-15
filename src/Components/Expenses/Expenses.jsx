import { Link, useLocation } from "react-router-dom";
import styles from "./styles.module.scss";
import AddParent from "./AddParent/AddParent";
import AddChild from "./AddChild/AddChild";
import AllTypes from "./AllTypes/AllTypes";
import { ToastContainer } from "react-toastify";
import { useTranslation } from "react-i18next";

const Expenses = () => {
  const { t, i18n } = useTranslation();

  const location = useLocation()

  console.log("location: ", location.pathname.split("/expenses/")[1]);

  const route = location.pathname.split("/expenses/")[1];

  return (
    <section className={styles.expenses}>
      {/* {isLoadingUserDues && <Spinner custom={true} />}
      {errorUserDues && <Error errMsg={errorUserDues} />} */}
      <div className="mainContainer">
        <div className={styles.container}>
          <div className={styles.head}>
            <div className="pageTitleBox">
              <h1 className="pageTitle">تصنيفات المصاريف</h1>
            </div>
          </div>
          <div className={styles.tabs}>
            <Link 
              className={`${route === "add-parent-type" ? `${styles.activeLink} ${styles.addParent}` : styles.addParent}`} 
              to="/expenses/add-parent-type"
            >إضافة تصنيف رئيسي</Link>

            <Link 
              className={`${route === "add-child-type" ? `${styles.activeLink} ${styles.addChild}` : styles.addChild}`}
              to="/expenses/add-child-type"
            >إضافة تصنيف فرعي</Link>

            <Link 
              className={`${route === "all-types" ? `${styles.activeLink} ${styles.allTypes}` : styles.allTypes}`}
              to="/expenses/all-types"
            >عرض تصنيفات المصاريف</Link>
          </div>
          {route === "add-parent-type" ? <AddParent /> : null}
          {route === "add-child-type" ? <AddChild /> : null}
          {route === "all-types" ? <AllTypes /> : null}
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
    </section>
  );
};

export default Expenses;
