import OperationTable from "../Tables/UserOperationTable/OperationTable";
import styles from "./styles.module.scss";

const UserWithdrowals = ({ data, filterHandler, totalSum }) => {
  if (data === null) {
    return <p className={styles.notFound}>لا يوجد عمليات للموظف في هذا القسم</p>
  }
  return (
    <div className={styles.operation}>
      <OperationTable 
        tableList={data} 
        filterHandler={filterHandler} 
        tableKey="UserWithdrowals" 
        from="?withdrowals_date_from="
        to="&withdrowals_date_to="
        amountKey="amount"
        tableId="dues_id"
        totalSum={totalSum}
      />
    </div>
  )
}

export default UserWithdrowals;
