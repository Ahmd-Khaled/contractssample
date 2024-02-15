import { useEffect, useState } from "react";
import { HiMiniBarsArrowDown, HiMiniBarsArrowUp } from "react-icons/hi2"
import styles from "./styles.module.scss";
import UserWithdrowals from "./UserWithdrowals";
import UserExpenses from "./UserExpenses";
import UserSettlements from "./UserSettlements";
import UserDeductions from "./UserDeductions";
import useGetUserOperations from "../../hooks/user/useGetUserOperations";
import { useParams } from "react-router-dom";
import Spinner from "../Utils/Spinner/Spinner";
import { useSelector } from "react-redux";
import Error from "../Utils/Error/Error";

const UserOperations = () => {
  const { userId } = useParams();

  const [params, setParams] = useState("");

  const [
    getUserOperationsData,
    withdrowalsArray,
    totalWithdrowals,
    expensesArray,
    totalExpenses,
    deusDeductionsArray,
    totalDeusDeductions,
    settlementsArray,
    totalSettlements,
    isLoadingUserOperations,
    errorUserOperations,
  ] = useGetUserOperations({userId: userId, params: params});

  console.log("_____________)(________:getUserOperationsData:", getUserOperationsData)

  // ------------------------------Tabs Logic---------------------------------------
  const { clickedUserOperation } = useSelector((state) => state.userSlice);

  const [showTabs, setShowTabs] = useState(false);
  const [activeTab, setActiveTab] = useState("Withdrawals");
  const [showWithdrawals, setShowWithdrawals] = useState(false);
  const [showExpenses, setShowExpenses] = useState(false);
  const [showSettlements, setShowSettlements] = useState(false);
  const [showDeductions, setShowDeductions] = useState(false);

  useEffect(() => {
    if (activeTab === "Withdrawals") {
      setShowWithdrawals(true);
      setShowExpenses(false);
      setShowSettlements(false);
      setShowDeductions(false);
    } 
  
    if (activeTab === "Expenses") {
      setShowWithdrawals(false);
      setShowExpenses(true);
      setShowSettlements(false);
      setShowDeductions(false);
    }
  
    if (activeTab === "Settlements") {
      setShowWithdrawals(false);
      setShowExpenses(false);
      setShowSettlements(true);
      setShowDeductions(false);    
    } 
  
    if (activeTab === "Deductions") {
      setShowWithdrawals(false);
      setShowExpenses(false);
      setShowSettlements(false);
      setShowDeductions(true);   
    }
  }, [activeTab])


  return (
    <section className={styles.userOperations}>
      {isLoadingUserOperations && <Spinner custom={true} />}
      {errorUserOperations && <Error errMsg={errorUserOperations} />}
      <div className="mainContainer">
        <div className={styles.container}>
          <div className={styles.head}>
            <div className="pageTitleBox">
              <h1 className="pageTitle">عمليات الموظف</h1>
            </div>
          </div>
          <div className={styles.userDetails}>
            <div className={styles.text}>
              <span className={styles.title}>إسم الموظف:</span>
              <span className={styles.value}>{getUserOperationsData?.user_name}</span>
            </div>
            <div className={styles.text}>
              <span className={styles.title}>المنصب:</span>
              <span className={styles.value}>
                {
                  getUserOperationsData.position ? (
                    getUserOperationsData.position === 1 ? "مدير" : 
                      getUserOperationsData.position === 5 ? "مشرف" :
                        getUserOperationsData.position === 6 ? "مندوب" :
                          getUserOperationsData.position === 2 ? "" :
                            getUserOperationsData.position === 3 ? "" :
                              getUserOperationsData.position === 4 ? "" : ""
                  ) : null
                }
              </span>
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.accountHead}>
              <div onClick={() => setShowTabs(!showTabs)} className={styles.showTabsIcon}>
                <h3>السحب</h3>
                <button>
                  {showTabs ? <HiMiniBarsArrowUp /> : <HiMiniBarsArrowDown />}
                </button>
              </div>

              <div className={showTabs ? styles.tabs : styles.tabsHidden}>
                <h3 onClick={() => setActiveTab("Withdrawals")} className={showWithdrawals ? styles.tabActive : styles.tab}>السحب</h3>
                <h3 onClick={() => setActiveTab("Expenses")} className={showExpenses ? styles.tabActive : styles.tab}>المصروفات</h3>
                <h3 onClick={() => setActiveTab("Settlements")} className={showSettlements ? styles.tabActive : styles.tab}>العمولات</h3>
                <h3 onClick={() => setActiveTab("Deductions")} className={showDeductions ? styles.tabActive : styles.tab}>الخصومات و الحوافز</h3>
              </div>
            </div>
            <div className={`mt-2 w-full h-full bg-cyan-950 rounded-md ${styles.accountBody}`}>
              {showWithdrawals ? <UserWithdrowals data={withdrowalsArray} totalSum={totalWithdrowals} filterHandler={setParams} /> : null }
              {showExpenses ? <UserExpenses data={expensesArray} totalSum={totalExpenses} filterHandler={setParams} /> : null }
              {showSettlements ? <UserSettlements data={settlementsArray} totalSum={totalSettlements} filterHandler={setParams} /> : null }
              {showDeductions ? <UserDeductions data={deusDeductionsArray} totalSum={totalDeusDeductions} filterHandler={setParams} /> : null }
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserOperations;
