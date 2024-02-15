import { useEffect, useState } from "react";
import useGetAllExpensesTypes from "../../../hooks/expenses/useGetAllExpensesTypes";
import ExpensesTable from "../../Tables/ExpensesTable/ExpensesTable";
import Error from "../../Utils/Error/Error";
import Spinner from "../../Utils/Spinner/Spinner";
import styles from "./styles.module.scss";

const AllTypes = () => {
  const [page, setPage] = useState(1);
  const [params, setParams] = useState('');

  useEffect(() => {

  }, [params, page])

  const filterDateHandler = (dates) => {
    setParams(dates);
  }

  const data = {
    params: params,
    page: `?page=${page}`
  };


  const [
    total,
    getAllExpensesTypesList,
    isLoadingAllExpenses,
    errorAllExpenses,
  ] = useGetAllExpensesTypes(data);

  return (
    <div className={styles.allTypes}>
      {isLoadingAllExpenses && <Spinner custom={true} />}
      {errorAllExpenses && <Error errMsg={errorAllExpenses} />}

      <div className={`pt-4 w-full h-full bg-cyan-950 rounded-md ${styles.table}`}>
        <ExpensesTable
          tableList={getAllExpensesTypesList}
          pageHandler={setPage}
          totalCount={total}
          page={page}
          filterDateHandler={filterDateHandler}
        />
      </div>
    </div>
  );
};

export default AllTypes;
