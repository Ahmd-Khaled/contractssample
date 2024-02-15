import OperationTable from "../Tables/UserOperationTable/OperationTable";
import styles from "./styles.module.scss";

const UserDeductions = ({ data, filterHandler, totalSum }) => {
  if (data === null) {
    return <p className={styles.notFound}>لا يوجد عمليات للموظف في هذا القسم</p>
  }
  return (
    <div className={styles.operation}>
      <OperationTable 
        tableList={data} 
        filterHandler={filterHandler} 
        tableKey="UserDeductions" 
        from="?deus_date_from="
        to="&deus_date_to="
        amountKey="amount"
        tableId="dues_id"
        totalSum={totalSum}
      />
    </div>
  )
}

export default UserDeductions;
