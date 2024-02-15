import useGetNotebookStatistics from "../../../hooks/noteBooks/useGetNotebookStatistics";
import NotebookTable from "../../Tables/NotebookTable/NotebookTable";
import CustomTable from "../DeliverNoteBook/CustomTable/CustomTable";
import styles from "./styles.module.scss";
import { useTranslation } from "react-i18next";
import Spinner from "../../Utils/Spinner/Spinner";
import { RxReload } from "react-icons/rx";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import { LiaFileContractSolid } from "react-icons/lia";
import { MdAssignmentReturned, MdAssignmentTurnedIn, MdCancel } from "react-icons/md";
import { useState } from "react";
import Error from "../../Utils/Error/Error";

const COLORS = ['#28d094', '#ff4961'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const ViewNoteBooks = () => {
  const { t, i18n } = useTranslation();
  const [page, setPage] = useState(1);
  const [filterParams, setFilterParams] = useState("");
  console.log("______filterParams:", filterParams)
  const pageHandler = (num) => {
    setPage(num);
  }

  const [
    notebooksStatisticsMsg,
    notebooksStatisticsTotal,
    assignedNotebooksCount,
    notAssignedNotebooksCount,
    notebooksStatisticsList,
    isLoadingStatistics,
    errorStatistics
  ] = useGetNotebookStatistics(page, filterParams);

  console.log("___***___***_______________notebooksStatisticsList Table", notebooksStatisticsList)
  // console.log("___***___***_______________notebooksStatisticsList Table Length", notebooksStatisticsList.length)

  const chart1Data = [
    { name: 'Assigned', value: assignedNotebooksCount },
    { name: 'Not Assigned', value: notAssignedNotebooksCount },
  ];
  

  return (
    <section className={styles.viewNoteBooks}>
      {isLoadingStatistics && <Spinner custom={true} />}
      {errorStatistics && <Error errMsg={errorStatistics} />}
      <div className="mainContainer">
        <div className={styles.container}>
          <div className={styles.head}>
            <div className="pageTitleBox">
              <h1 className="pageTitle">عرض كل الدفاتر</h1>
            </div>
          </div>
          <div className={styles.charts}>
            <div className={styles.stats}>
              <div className={styles.assigned}>
                <div className={styles.details}>
                  <h6 className={styles.title}>تم تسليمه</h6>
                  <h3 className={styles.value}>{assignedNotebooksCount}</h3>
                </div>
                <div className={styles.icon}>
                  <MdAssignmentTurnedIn />
                </div>
              </div>
              <div className={styles.notAssigned}>
                <div className={styles.details}>
                  <h6 className={styles.title}>لم يتم تسليمه</h6>
                  <h3 className={styles.value}>{notAssignedNotebooksCount}</h3>
                </div>
                <div className={styles.icon}>
                  <MdAssignmentReturned />
                </div>
              </div>
            </div>
            <div className={styles.chart}>
              <ResponsiveContainer height='100%' width='100%' style={{direction: i18n.dir()}}>
                <PieChart style={{direction: i18n.dir()}}>
                  <Pie
                    data={chart1Data}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    direction={i18n.dir()}
                  >
                    {chart1Data.map((entry, index) => (
                      <Cell direction={i18n.dir()} key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className={`pt-4 h-full rounded-md bg-cyan-950 ${styles.content}`}>
            <NotebookTable 
              setFilterParams={setFilterParams}
              tableList={notebooksStatisticsList} 
              pageHandler={setPage} 
              page={page} 
              totalCount={notebooksStatisticsTotal}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ViewNoteBooks