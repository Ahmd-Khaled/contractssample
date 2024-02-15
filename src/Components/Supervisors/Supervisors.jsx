import Spinner from "../Utils/Spinner/Spinner";
import styles from "./styles.module.scss";
import { useTranslation } from "react-i18next";
import SupervisorsTable from "../Tables/SupervisorsTable/SupervisorsTable";
import useGetAllSupervisors from "../../hooks/supervisors/useGetAllSupervisors";
import { useState } from "react";
import Error from "../Utils/Error/Error";

const Supervisors = () => {
  const { t, i18n } = useTranslation();
  const [page, setPage] = useState(1);

  const [
    supervisorsList,
    supervisorsTotal,
    supervisorsCount,
    isLoadingAllSupervisors,
    errorAllSupervisors
  ] = useGetAllSupervisors(page);

  return (
    <section className={styles.supervisors}>
      {isLoadingAllSupervisors && <Spinner custom={true} />}
      {errorAllSupervisors && <Error errMsg={errorAllSupervisors} />}
      {/* {errorAllSupervisors && <p>Error: {errorAllSupervisors.message}</p>} */}
      <div className="mainContainer">
        <div className={styles.container}>
          <div className={styles.head}>
            <div className="pageTitleBox">
              <h1 className="pageTitle">قائمة المشرفين</h1>
            </div>
          </div>
          <div className={`pt-4 w-full h-full bg-cyan-950 rounded-md ${styles.table}`}>
            <SupervisorsTable 
              tableList={supervisorsList} 
              supervisorsTotal={supervisorsTotal}
              pageHandler={setPage}
              totalCount={supervisorsTotal}
              page={page}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Supervisors