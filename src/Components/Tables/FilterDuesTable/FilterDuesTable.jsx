import styles from "./styles.module.scss";
import { CiFilter } from "react-icons/ci";
import { useState } from "react";

const FilterDuesTable = ({ filterDateHandler, from, to }) => {
  const today = new Date();
  const yy = today.getFullYear();
  let mm = today.getMonth() + 1; // Months start at 0!
  let dd = today.getDate();

  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;
  const formattedToday = yy + "-" + mm + "-" + dd;

  const [fromDate, setFromDate] = useState(`${from}${formattedToday}`);
  const [toDate, setToDate] = useState(`${to}${formattedToday}`);

  console.log("=================== fromDate: ", fromDate)
  console.log("=================== toDate: ", toDate)

  return (
    <div className={styles.filterTable}>
      <div onClick={() => filterDateHandler(fromDate + toDate)} className={styles.icon}>
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

export default FilterDuesTable;

