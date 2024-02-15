import styles from "./styles.module.scss";
import { CiFilter } from "react-icons/ci";
import { FaFilter } from "react-icons/fa";
import { LuArrowLeftFromLine, LuArrowRightFromLine } from "react-icons/lu";
import DatePicker from "react-datepicker";
import { useEffect, useState } from "react";
import { getNotebooksStatistics } from "../../../redux/thunkActions/noteBooksActions";
import { useDispatch } from "react-redux";
import SelectStatistics from "../../Utils/SelectStatistics/SelectStatistics";
import { useParams } from "react-router-dom";
import { getUserOperations } from "../../../redux/thunkActions/userActions";

const FilterOperationsTable = ({ setFilterParams, tableKey, from, to }) => {


  const { userId } = useParams();
  const todayDate = new Date(Date.now()).toLocaleString().split(",")[0];
  const today = new Date();
  const yy = today.getFullYear();
  let mm = today.getMonth() + 1; // Months start at 0!
  let dd = today.getDate();

  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;
  const formattedToday = yy + "-" + mm + "-" + dd;
//   console.log("Date.now(): formattedToday", formattedToday);
const [fromDate, setFromDate] = useState(`${from}${formattedToday}`);
const [toDate, setToDate] = useState(`${to}${formattedToday}`);

  // useEffect(() => {
  //   if (tableKey = "UserSettlements") {
  //     setFromParams(`?settlement_date_from=`);
  //     setToParams(`&settlement_date_to=`);
  //   }

  //   if (tableKey = "UserDeductions") {
  //     setFromParams(`?deus_date_from=`);
  //     setToParams(`&deus_date_to=`);
  //   }

  //   if (tableKey = "UserExpenses") {
  //     setFromParams(`?expenses_date_from=`);
  //     setToParams(`&expenses_date_to=`);
  //   }

  //   if (tableKey = "UserWithdrowals") {
  //     setFromParams(`?withdrowals_date_from=`);
  //     setToParams(`&withdrowals_date_to=`);
  //   }

  //   console.log("**==**____: fromParams:", fromParams);
  //   console.log("**==**____: toParams:", toParams);
  //   console.log("**==**____: fromDate:", fromDate);
  //   console.log("**==**____: toDate:", toDate);
  // }, [tableKey, fromParams, toParams, fromParams, toParams])

  const dispatch = useDispatch();
  const filterHandler = async () => {
    await dispatch(getUserOperations(
      {userId: userId, params: fromDate + toDate}
    ));
  };

  return (
    <div className={styles.filterTable}>
      <div onClick={filterHandler} className={styles.icon}>
        <CiFilter size={26} />
      </div>
      <div className={styles.container}>
        <div className={styles.fromDate}>
          <input
            type="date"
            max={formattedToday}
            name="fromDate"
            onChange={(e) => setFromDate(`${from}${e.target.value}`)}
            placeholder="من تاريخ"
          />
        </div>
        <div className={styles.toDate}>
          <input
            type="date"
            name="toDate"
            onChange={(e) => setToDate(`${to}${e.target.value}`)}
            placeholder="إلى تاريخ"
          />
        </div>
      </div>
    </div>
  );
};

export default FilterOperationsTable;

