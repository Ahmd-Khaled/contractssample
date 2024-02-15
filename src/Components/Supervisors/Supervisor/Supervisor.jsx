import { useParams } from "react-router-dom";
import styles from "./styles.module.scss";
import useGetSupervisorDetails from "../../../hooks/supervisors/useGetSupervisorDetails";
import Spinner from "../../Utils/Spinner/Spinner";
import NotebookTable from "../../Tables/NotebookTable/NotebookTable";
import MembersTable from "../../Tables/MembersTable/MembersTable";
import Error from "../../Utils/Error/Error";

const Supervisor = () => {
  const { superId } = useParams();

  const [
    userNotFound,
    message,
    supervisorDetailsData,
    supervisorNotebooks,
    supervisorMembers,
    isLoadingSupervisorDetails,
    errorSupervisorDetails
  ] = useGetSupervisorDetails(superId);

  if (userNotFound) {
    return (
      <section className="errorContainer">
        <p className="errorMsg">هذا المستخدم غير موجود</p>
      </section>
    )
  }

  return (
    <section className={styles.supervisor}>
      {isLoadingSupervisorDetails && <Spinner custom={true} />}
      {errorSupervisorDetails && <Error errMsg={errorSupervisorDetails} />}
      <div className="mainContainer">
        <div className={styles.container}>
          <div className={styles.head}>
            <div className="pageTitleBox">
              <h1 className="pageTitle">تفاصيل المشرف</h1>
            </div>
          </div>
          <div className={styles.content}>
            <ul className={styles.detailsList}>
              <li className={styles.listItem}>
                <h3 className={styles.title}>أسم المشرف:</h3>
                <p className={styles.value}>{supervisorDetailsData?.user_name}</p>
              </li>
              <li className={styles.listItem}>
                <h3 className={styles.title}>الدولة:</h3>
                <p className={styles.value}>
                  {
                    supervisorDetailsData.country ?
                      supervisorDetailsData.country === "KSA" ? "المملكة العربية السعودية" : supervisorDetailsData.country === "UAE" ? "الامارت العربية المتحدة" : ""
                    : null
                  }
                </p>
              </li>
              <li className={styles.listItem}>
                <h3 className={styles.title}>المنصب:</h3>
                <p className={styles.value}>
                  {
                    supervisorDetailsData.position ? (
                      supervisorDetailsData.position === 1 ? "مدير" : 
                        supervisorDetailsData.position === 5 ? "مشرف" :
                          supervisorDetailsData.position === 6 ? "مندوب" :
                            supervisorDetailsData.position === 2 ? "" :
                              supervisorDetailsData.position === 3 ? "" :
                                supervisorDetailsData.position === 4 ? "" : ""
                    ) : null
                  }
                </p>
              </li>
              <li className={styles.listItem}>
                <h3 className={styles.title}>الايميل:</h3>
                <p className={styles.value}>{supervisorDetailsData?.email}</p>
              </li>
              <li className={styles.listItem}>
                <h3 className={styles.title}>الموبايل:</h3>
                <p className={styles.value}>{supervisorDetailsData?.mobile}</p>
              </li>
              <li className={styles.listItem}>
                <h3 className={styles.title}>الحالة:</h3>
                <p className={styles.value}>
                  {
                    supervisorDetailsData.is_active ? (
                      supervisorDetailsData.is_active === 1 ? "مفعل" : "غير مفعل"
                    ) : null
                  }
                </p>
              </li>
              <li className={styles.listItem}>
                <h3 className={styles.title}>تأكيد الشروط:</h3>
                <p className={styles.value}>
                  {
                    supervisorDetailsData.terms_confirmation ? (
                      supervisorDetailsData.terms_confirmation === 1 ? "تم تأكيد الشروط" : "لم يتم تأكيد الشروط"
                    ) : "لم يتم تأكيد الشروط"
                  }
                </p>
              </li>
            </ul>
            {supervisorDetailsData.notebooks ? (
              <div className={styles.notebooks}>
                <h2 className={styles.title}>المناديب</h2>
                <div className={`pt-4 h-full w-fit bg-cyan-950 rounded-md ${styles.content}`}>
                  <MembersTable tableList={supervisorMembers} />
                </div>
              </div>
              ) : null
            }
            {supervisorDetailsData.notebooks ? (
              <div className={styles.notebooks}>
                <h2 className={styles.title}>جدول الدفاتر الخاص بالمشرف</h2>
                <div className={`pt-4 h-full bg-cyan-950 rounded-md ${styles.content}`}>
                  <NotebookTable tableList={supervisorNotebooks} />
                </div>
              </div>
              ) : null
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Supervisor