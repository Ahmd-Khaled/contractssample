import styles from "./styles.module.scss";
import useGetUserDues from "../../hooks/user/useGetUserDues";
import Spinner from "../Utils/Spinner/Spinner";
import Error from "../Utils/Error/Error";
import { useEffect, useState } from "react";
import DeductionsTable from "../Tables/DuesTable/DeductionsTable";

const Deductions = () => {
  const [page, setPage] = useState(1);
  const [params, setParams] = useState('');

  useEffect(() => {

  }, [params, page])
  // userId: "&user_id=3",

  const filterDateHandler = (dates) => {
    setParams(dates);
    // console.log("-*-*-*-*-*-*-*-*... dates: ", dates);
  }
  const data = {
    type: "?type=1",
    userId: '',
    params: params,
    page: `&page=${page}`
  };

  console.log("-*-*-*-*-*-*-*-* data: ", data);

  const [
    total,
    count,
    getUserDuesList,
    isLoadingUserDues,
    errorUserDues
  ] = useGetUserDues(data);

  console.log("___________________getUserDuesList_______________________", getUserDuesList)

  return (
    <section className={styles.deductions}>
      {isLoadingUserDues && <Spinner custom={true} />}
      {errorUserDues && <Error errMsg={errorUserDues} />}
      <div className="mainContainer">
        <div className={styles.container}>
          <div className={styles.head}>
            <div className="pageTitleBox">
              <h1 className="pageTitle">الخصومات</h1>
            </div>
          </div>
          <div className={styles.addBtn}>
            <a className={styles.link} href="/deductions/add-deduction">إضافة خصم</a>
          </div>
          <div className="pageTitleBox">
            <h1 className="pageTitle text-red-500">جدول الخصومات</h1>
          </div>
          <div className={`pt-4 w-full h-full bg-cyan-950 rounded-md ${styles.table}`}>
            <DeductionsTable 
              tableList={getUserDuesList} 
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

export default Deductions