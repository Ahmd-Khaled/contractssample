import { useParams } from "react-router-dom";
import useGetNotebookDetails from "../../../hooks/noteBooks/useGetNotebookDetails";
import Spinner from "../../Utils/Spinner/Spinner";
import styles from "./styles.module.scss";
import ContractsTable from "../../Tables/ContractsTable/ContractsTable";
import Error from "../../Utils/Error/Error";

const NoteBookDetails = () => {
  const { id } = useParams();
  const [notebookDetailsData, notebookContracts, isLoadingDetails, errorDetails] = useGetNotebookDetails(id);



  return (
    <section className={styles.noteBookDetails}>
      {isLoadingDetails && <Spinner custom={true} />}
      {errorDetails && <Error errMsg={errorDetails} />}
      <div className="mainContainer">
        <div className={styles.container}>
          <div className={styles.head}>
            <div className="pageTitleBox">
              <h1 className="pageTitle">تفاصيل الدفتر</h1>
            </div>
          </div>
          <div className={styles.content}>
            <ul className={styles.detailsList}>
              <li className={styles.listItem}>
                <h3 className={styles.title}>رقم المسلسل:</h3>
                <p
                  className={
                    notebookDetailsData.supervisor && notebookDetailsData.supervisor !== null ? styles.serialAssig : styles.serialNotAssig
                    }
                >
                  {notebookDetailsData?.serial_number}
                </p>
              </li>
              <li className={styles.listItem}>
                <h3 className={styles.title}>الدولة:</h3>
                <p className={styles.value}>
                  {
                    notebookDetailsData.country ?
                      notebookDetailsData.country === "KSA" ? "المملكة العربية السعودية" : notebookDetailsData.country === "UAE" ? "الامارت العربية المتحدة" : ""
                    : null
                  }
                </p>
              </li>
              {
                notebookDetailsData.supervisor !== null ? (
                  <li className={styles.listItem}>
                    <h3 className={styles.title}>المشرف:</h3>
                    <p className={styles.value}>{notebookDetailsData?.supervisor}</p>
                  </li>
                ) : null
              }
              {
                notebookDetailsData.assigned_at !== null ? (
                  <li className={styles.listItem}>
                    <h3 className={styles.title}>خصص في:</h3>
                    <p className={styles.value}>{notebookDetailsData?.assigned_at}</p>
                  </li>
                ) : null
              }
              <li className={styles.listItem}>
                <h3 className={styles.title}>انشأ من قبل:</h3>
                <p className={styles.value}>{notebookDetailsData?.created_by}</p>
              </li>
              <li className={styles.listItem}>
                <h3 className={styles.title}>انشأ في:</h3>
                <p className={styles.value}>{notebookDetailsData?.created_at}</p>
              </li>
            </ul>
            {notebookDetailsData.contracts ? (
              <div className={styles.contracts}>
                <h2 className={styles.title}>جدول العقود بالدفتر</h2>
                <div className={`pt-4 min-h-screen bg-cyan-950 rounded-md ${styles.content}`}>
                  <ContractsTable tableList={notebookContracts} />
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

export default NoteBookDetails