import styles from "./styles.module.scss";
import { CiFilter } from "react-icons/ci";
import { useEffect, useState } from "react";
import { getNotebooksStatistics } from "../../../redux/thunkActions/noteBooksActions";
import { useDispatch } from "react-redux";
import SelectArchieveType from "../../Utils/SelectArchieveType/SelectArchieveType";

const FilterArchieveTable = ({ setFilterParams }) => {
  const todayDate = new Date(Date.now()).toLocaleString().split(",")[0];
  const today = new Date();
  const yy = today.getFullYear();
  let mm = today.getMonth() + 1; // Months start at 0!
  let dd = today.getDate();

  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;
  const formattedToday = yy + "-" + mm + "-" + dd;
//   console.log("Date.now(): formattedToday", formattedToday);

  // const [fromDate, setFromDate] = useState(`&date_from=2024-01-01`);
  // const [fromDate, setFromDate] = useState(`&date_from=${formattedToday}`);
  // const [toDate, setToDate] = useState(`&date_to=${formattedToday}`);
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [id, setId] = useState("");
  const [serialNum, setSerialNum] = useState("");
  const [type, setType] = useState("");

  // const params = fromDate + toDate + serialNum + type;
  // setFilterParams(params);
  // useEffect(() => {
  //   setFilterParams(params)
  // }, [])

//   console.log("fromDate :", fromDate);
//   console.log("toDate :", toDate);

  const dispatch = useDispatch();
  const filterHandler = async () => {
    // const params = `${fromDate}${toDate}&notebook_id=${id}&serial_number=${serialNum}${type}`
    // const params = fromDate + toDate + id + serialNum + type;
    const params = {
      fromDate,
      toDate,
      serialNum,
      type
    };
    setFilterParams(params)
    // const data = {
    //     page: 1,
    //     params: params
    //   }
    //   await dispatch(getNotebooksStatistics(data));
  };

  return (
    <div className={styles.filterTable}>
      <div onClick={filterHandler} className={styles.icon}>
        <CiFilter size={26} />
      </div>
      <div className={styles.container}>
        <div className={styles.assigned}>
          <SelectArchieveType
            name="status"
            onChange={(e) => setType(e.target.value)}
         />
        </div>
        {/* <div className={styles.id}>
          <input
            name="id"
            // value={id}
            onChange={(e) => setId(`&notebook_id=${e.target.value}`)}
            type="text"
            placeholder="بحث بالكود"
          />
        </div> */}
        <div className={styles.serial}>
          <input 
            type="text" 
            placeholder="بحث برقم المسلسل" 
            // value={serialNum}
            onChange={(e) => setSerialNum(`&serial_number=${e.target.value}`)}
          />
        </div>
        <div className={styles.fromDate}>
          <input
            type="date"
            max={formattedToday}
            name="fromDate"
            onChange={(e) => setFromDate(`&date_from=${e.target.value}`)}
            placeholder="من تاريخ"
          />
        </div>
        <div className={styles.toDate}>
          <input
            type="date"
            // min={formattedToday}
            name="toDate"
            //   value={toDate}
            onChange={(e) => setToDate(`&date_to=${e.target.value}`)}
            placeholder="إلى تاريخ"
          />
        </div>
      </div>
    </div>
  );
};

export default FilterArchieveTable;
