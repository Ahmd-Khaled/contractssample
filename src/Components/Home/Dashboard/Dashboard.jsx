import { useTranslation } from "react-i18next";
import Deals from "./Deals/Deals";
import Rate from "./Rate/Rate";
import Revenue from "./Revenue/Revenue";
import styles from "./styles.module.scss";
import { SlTrophy } from "react-icons/sl";
import { VscCallIncoming } from "react-icons/vsc";
import { LiaFileContractSolid } from "react-icons/lia";
import { IoCalendarNumberSharp } from "react-icons/io5";
import { AiOutlineNumber } from "react-icons/ai";
import SupervisorsTable from "./SupervisorsTable/SupervisorsTable";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getNotebooksStatistics } from "../../../redux/thunkActions/noteBooksActions";
import { getAllSupervisors } from "../../../redux/thunkActions/supervisorsActions";
import useGetNotebookStatistics from "../../../hooks/noteBooks/useGetNotebookStatistics";
import useGetAllSupervisors from "../../../hooks/supervisors/useGetAllSupervisors";
import Spinner from "../../Utils/Spinner/Spinner";
import Error from "../../Utils/Error/Error";

const Dashboard = () => {
  const { t, i18n } = useTranslation();
  // style={{direction: i18n.dir() === "ltr" ? "ltr" : "rtl"}}

  const dispatch = useDispatch();
  useEffect(() => {
    const run = async () => {
      // await dispatch(getNotebooksStatistics());
      // await dispatch(getAllSupervisors());
    }
    run();
  }, []);
  // -----------------------------------------------------------
  const [
    notebooksStatisticsMsg,
    notebooksStatisticsTotal,
    assignedNotebooksCount,
    notAssignedNotebooksCount,
    notebooksStatisticsList,
    isLoadingNotebookStatistics,
    errorNotebookStatistics
  ] = useGetNotebookStatistics();

  const [
    supervisorsList,
    supervisorsTotal,
    supervisorsCount,
    isLoadingAllSupervisors,
    errorAllSupervisors
  ] = useGetAllSupervisors();

  return (
    <section className={styles.dashboard}>
      {isLoadingAllSupervisors && <Spinner custom={true} />}
      {errorAllSupervisors && <Error errMsg={errorAllSupervisors} />}
      <div className={styles.container}>
        <div className={styles.box1}>
          <Revenue />
          {/* <ChartJsExample /> */}
        </div>
        <div className={styles.box2}>
          <Rate 
            assignedNotebooksCount={assignedNotebooksCount} 
            notAssignedNotebooksCount={notAssignedNotebooksCount} 
          />
        </div>
        <div className={styles.box3}>
          <Deals />
        </div>
        <div className={styles.box4}>
          <div className={styles.orders}>
            <div className={styles.details}>
              <h6 className={styles.title}>عدد العقود اليوم</h6>
              <h3 className={styles.value}>33</h3>
            </div>
            <div className={styles.icon}>
              <LiaFileContractSolid />
            </div>
          </div>
        </div>
        <div className={styles.box5}>
          <div className={styles.calls}>
            <div className={styles.details}>
            <h6 className={styles.title}>عدد العقود الشهري</h6>
              <h3 className={styles.value}>1068</h3>
            </div>
            <div className={styles.icon}>
              <IoCalendarNumberSharp />
            </div>
          </div>
        </div>
        <div className={styles.box6}>
          <div className={styles.calls}>
            <div className={styles.details}>
            <h6 className={styles.title}>إجمالي العقود</h6>
              <h3 className={styles.value}>{notebooksStatisticsTotal * 50}</h3>
            </div>
            <div className={styles.icon}>
              <AiOutlineNumber />
            </div>
          </div>
        </div>
        <div className={styles.box7}>
          <div className={styles.calls}>
            <div className={styles.details}>
            <h6 className={styles.title}>إجمالي الدفاتر</h6>
              <h3 className={styles.value}>{notebooksStatisticsTotal}</h3>
            </div>
            <div className={styles.icon}>
              <AiOutlineNumber />
            </div>
          </div>
        </div>
        <div className={styles.box8}>
          <div className={styles.calls}>
            <div className={styles.details}>
            <h6 className={styles.title}>عدد المشرفين</h6>
              <h3 className={styles.value}>{supervisorsTotal}</h3>
            </div>
            <div className={styles.icon}>
              <AiOutlineNumber />
            </div>
          </div>
        </div>
        <div className={styles.box9}>
          <div className={styles.calls}>
            <div className={styles.details}>
            <h6 className={styles.title}>عدد المناديب</h6>
              <h3 className={styles.value}>500</h3>
            </div>
            <div className={styles.icon}>
              <AiOutlineNumber />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.supervisorsTable}>
        <SupervisorsTable title="قائمة المشرفين" />
      </div>
    </section>
  )
}

export default Dashboard