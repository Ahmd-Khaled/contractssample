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

const FilterTable = ({ setFilterParams, filterOperations, tableKey }) => {
  console.log("**==**____: filterOperations:", filterOperations);
  console.log("**==**____: tableKey:", tableKey);
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

  const [fromParams, setFromParams] = useState("");
  const [toParams, setToParams] = useState("");

  useEffect(() => {
    if (filterOperations !== true) {
      setFromParams("&from=");
      setToParams("&to=");
    } else {

      if (tableKey = "UserSettlements") {
        setFromParams("?settlement_date_from=");
        setToParams("&settlement_date_to=");
      }

      if (tableKey = "UserDeductions") {
        setFromParams("?deus_date_from=");
        setToParams("&deus_date_to=");
      }

      if (tableKey = "UserExpenses") {
        setFromParams("?expenses_date_from=");
        setToParams("&expenses_date_to=");
      }

      if (tableKey = "UserWithdrowals") {
        setFromParams("?withdrowals_date_from=");
        setToParams("&withdrowals_date_to=");
      }

      console.log("**==**____: fromParams:", fromParams);
      console.log("**==**____: toParams:", toParams);
    }
  }, [fromParams, toParams])

  const [fromDate, setFromDate] = useState(`${fromParams}${formattedToday}`);
  const [toDate, setToDate] = useState(`${toParams}${formattedToday}`);
  const [id, setId] = useState("");
  const [serialNum, setSerialNum] = useState("");
  const [type, setType] = useState("");

//   console.log("fromDate :", fromDate);
//   console.log("toDate :", toDate);

  const dispatch = useDispatch();
  const filterHandler = async () => {
    // const params = `${fromDate}${toDate}&notebook_id=${id}&serial_number=${serialNum}${type}`
    const params = fromDate + toDate + id + serialNum + type;
    const data = {
      page: 1,
      params: params
    }

    if (!filterOperations) {
      await dispatch(getNotebooksStatistics(data));
    } else {
      setFilterParams(fromDate + toDate);
      await dispatch(getUserOperations(
        {userId: userId, params: fromDate + toDate}
      ));
    }
  };
  
  return (
    <div className={styles.filterTable}>
      <div onClick={filterHandler} className={styles.icon}>
        <CiFilter size={26} />
      </div>
      <div className={styles.container}>
       {filterOperations === true ? null : (
        <>
          <div className={styles.assigned}>
            <SelectStatistics
              name="status"
              onChange={(e) => setType(e.target.value)}
          />
          </div>
          <div className={styles.id}>
            <input
              name="id"
              // value={id}
              onChange={(e) => setId(`&notebook_id=${e.target.value}`)}
              type="text"
              placeholder="بحث بالكود"
            />
          </div>
          <div className={styles.serial}>
            <input 
              type="text" 
              placeholder="بحث برقم المسلسل" 
              // value={serialNum}
              onChange={(e) => setSerialNum(`&serial_number=${e.target.value}`)}
            />
          </div>
        </>
        )}
        <div className={styles.fromDate}>
          <input
            type="date"
            max={formattedToday}
            name="fromDate"
            onChange={(e) => setFromDate(`&from=${e.target.value}`)}
            placeholder="من تاريخ"
          />
        </div>
        <div className={styles.toDate}>
          <input
            type="date"
            // min={formattedToday}
            name="toDate"
            //   value={toDate}
            onChange={(e) => setToDate(`&to=${e.target.value}`)}
            placeholder="إلى تاريخ"
          />
        </div>
      </div>
    </div>
  );
};

export default FilterTable;
{
  /* <DatePicker
                className={styles.to}
                id="start"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                icon={<LuArrowLeftFromLine size={23} />}
            /> */
}
