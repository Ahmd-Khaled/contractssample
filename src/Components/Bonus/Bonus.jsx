import styles from "./styles.module.scss";
import { useEffect, useState } from "react";
import useGetUserDues from "../../hooks/user/useGetUserDues";
import BonusTable from "../Tables/DuesTable/BonusTable";

const Bonus = () => {
  const [page, setPage] = useState(1);
  const [params, setParams] = useState('');

  useEffect(() => {

  }, [params, page])
  // userId: "&user_id=3",

  const filterDateHandler = (dates) => {
    setParams(dates);
    // console.log("-*-*-*-*-*-*-*-* dates: ", dates);
  }
  const data = {
    type: "?type=2",
    userId: '',
    params: params,
    page: `&page=${page}`
  };

  console.log("-*-*-*-*-*-*-*-* data: ", data);

  const [
    total,
    count,
    mapedDuesList,
    isLoadingUserDues,
    errorUserDues
  ] = useGetUserDues(data);

  console.log("___________________mapedDuesList_______________________", mapedDuesList)

  return (
    <section className={styles.bonus}>
      {/* {isLoadingAllSupervisors && <Spinner custom={true} />}
      {errorAllSupervisors && <p>Error: {errorAllSupervisors.message}</p>} */}
      <div className="mainContainer">
        <div className={styles.container}>
          <div className={styles.head}>
            <div className="pageTitleBox">
              <h1 className="pageTitle">الحوافز</h1>
            </div>
          </div>
          <div className={styles.addBtn}>
            <a className={styles.link} href="/bonus/add-bonus">إضافة حافز</a>
          </div>
          <div className="pageTitleBox">
            <h1 className="pageTitle text-green-500">جدول الحوافز</h1>
          </div>
          <div className={`pt-4 w-full h-full bg-cyan-950 rounded-md ${styles.table}`}>
            <BonusTable 
              tableList={mapedDuesList} 
              pageHandler={setPage}
              totalCount={total}
              page={page}
              sumCount={count}
              filterDateHandler={filterDateHandler}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Bonus