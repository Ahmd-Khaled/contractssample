import { useEffect, useState } from "react";
import WithdrowalsTable from "../Tables/DuesTable/WithdrowalsTable";
import styles from "./styles.module.scss";
import useGetUserWithdrowals from "../../hooks/user/useGetUserWithdrowals";
import Spinner from "../Utils/Spinner/Spinner";
import Error from "../Utils/Error/Error";

const Withdrowals = () => {
  const [page, setPage] = useState(1);
  const [params, setParams] = useState("");

  useEffect(() => {}, [params, page]);

  const filterDateHandler = (dates) => {
    setParams(dates);
  };

  const data = {
    userId: "",
    params: params,
    page: `?page=${page}`,
  };

  console.log("-*-*-*-*-*-*-*-* data: ", data);

  const [
    total,
    count,
    mapedWithdrowalsList,
    isLoadingUserWithdrowals,
    errorUserWithdrowals
  ] = useGetUserWithdrowals(data)


  return (
    <section className={styles.withdrowals}>
      {isLoadingUserWithdrowals && <Spinner custom={true} />}
      {errorUserWithdrowals && <Error errMsg={errorUserWithdrowals} />}
      <div className="mainContainer">
        <div className={styles.container}>
          <div className={styles.head}>
            <div className="pageTitleBox">
              <h1 className="pageTitle">عمليات السحب</h1>
            </div>
          </div>
          <div
            className={`pt-4 w-full h-full bg-cyan-950 rounded-md ${styles.table}`}
          >
            table
            <WithdrowalsTable
              tableList={mapedWithdrowalsList}
              pageHandler={setPage}
              totalCount={total}
              page={page}
              sumCount={count.sum_deduction}
              filterDateHandler={filterDateHandler}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Withdrowals;
