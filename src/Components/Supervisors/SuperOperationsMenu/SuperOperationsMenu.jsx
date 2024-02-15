import { useDispatch } from "react-redux";
import styles from "./styles.module.scss";
import { clickOperation } from "../../../redux/slices/userSlice";

const SuperOperationsMenu = ({userId}) => {
  const dispatch = useDispatch();

  const clickOperationMenuHandler = (operation) => {
    console.log("_____Before Reducer Dispatch ______:", operation);
    dispatch(clickOperation(operation));
    console.log("_____After Reducer Dispatch ______:", operation);
  };

  return (
    <div className={styles.operationsMenu}>
        <ul className={styles.list}>
            <li className={styles.item}>
                <a onClick={() => clickOperationMenuHandler("Withdrawals")} className={styles.link} href={`/user-operations/${userId}`}>السحب</a>
            </li>
            <li className={styles.item}>
                <a onClick={() => clickOperationMenuHandler("Expenses")} className={styles.link} href={`/user-operations/${userId}`}>المصروفات</a>
            </li>
            {/* <li onClick={() => clickOperationMenuHandler("")} className={styles.item}>
                <a className={styles.link} href={`/user-operations/${userId}`}>العمولة</a>
            </li> */}
            <li className={styles.item}>
                <a onClick={() => clickOperationMenuHandler("Deductions")} className={styles.link} href={`/user-operations/${userId}`}>الخصومات</a>
            </li>
            <li className={styles.item}>
                <a onClick={() => clickOperationMenuHandler("Settlements")} className={styles.link} href={`/user-operations/${userId}`}>الحوافز</a>
            </li>
            {/* <li onClick={() => clickOperationMenuHandler("")} className={styles.item}>
                <a className={styles.link} href={`/user-operations/${userId}`}>تعديل</a>
            </li> */}
        </ul>
    </div>
  )
}

export default SuperOperationsMenu