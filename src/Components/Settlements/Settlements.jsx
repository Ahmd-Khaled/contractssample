import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import Spinner from "../Utils/Spinner/Spinner";
import Error from "../Utils/Error/Error";
import useGetUserSettlements from "../../hooks/user/useGetUserSettlements";
import SettlementsTable from "../Tables/DuesTable/SettlementsTable";

const Settlements = () => {
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

  const  [
    total,
    count,
    mapedSettlementsList,
    isLoadingUserSettlements,
    errorUserSettlements
  ] = useGetUserSettlements(data);


  return (
    <section className={styles.withdrowals}>
      {isLoadingUserSettlements && <Spinner custom={true} />}
      {errorUserSettlements && <Error errMsg={errorUserSettlements} />}
      <div className="mainContainer">
        <div className={styles.container}>
          <div className={styles.head}>
            <div className="pageTitleBox">
              <h1 className="pageTitle">العمولات</h1>
            </div>
          </div>
          <div
            className={`pt-4 w-full h-full bg-cyan-950 rounded-md ${styles.table}`}
          >
            <SettlementsTable
              tableList={mapedSettlementsList}
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


export default Settlements