import OperationTable from "../Tables/UserOperationTable/OperationTable";
import styles from "./styles.module.scss";

const UserSettlements = ({ data, filterHandler, totalSum }) => {
  if (data === null) {
    return <p className={styles.notFound}>لا يوجد عمليات للموظف في هذا القسم</p>
  }
  return (
    <div className={styles.operation}>
      <OperationTable 
        tableList={data} 
        filterHandler={filterHandler} 
        tableKey="UserSettlements" 
        from="?settlement_date_from="
        to="&settlement_date_to="
        amountKey="commission"
        tableId="settle_id"
        totalSum={totalSum}
      />
    </div>
  )
}

export default UserSettlements;
