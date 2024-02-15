import { ToastContainer } from "react-toastify";
import useGetCountryData from "../../../hooks/country/useGetCountryData";
import useAddDues from "../../../hooks/dues/useAddDues";
import Input from "../../Auth/Input/Input";
import SelectOption from "../../Utils/SelectOption/SelectOption";
import styles from "./styles.module.scss";
import { useTranslation } from "react-i18next";
import Spinner from "../../Utils/Spinner/Spinner";
import useGetNotAdminUsers from "../../../hooks/auth/useGetNotAdminUsers";
import SelectUser from "../../Utils/SelectOption/SelectUser";
import Error from "../../Utils/Error/Error";

const AddDeduction = () => {
  const { t, i18n } = useTranslation();

  const [
    getNotAdminUsersData,
    isLoadingNotAdminUsers,
    errorNotAdminUsers
  ] = useGetNotAdminUsers()

  const [
    getCountryDataList,
    isLoadingCountryData,
    errorCountryData
  ] = useGetCountryData();

  const [
    userId,
    userIdError,
    onChangeUserId,
    onBlurUserId,
    reason,
    reasonError,
    onChangeReason,
    onBlurReason,
    currency,
    currencyError,
    onChangeCurrency,
    onBlurCurrency,
    amount,
    amountError,
    onChangeAmount,
    onBlurAmount,
    onSubmit,
    isLoadingAddDues,
    errorAddDues
  ] = useAddDues(1);

  return (
    <section className={styles.addDeduction}>
      {isLoadingNotAdminUsers && <Spinner custom={true} />}
      {errorNotAdminUsers && <Error errMsg={errorNotAdminUsers} />}

      {isLoadingCountryData && <Spinner custom={true} />}
      {errorCountryData && <Error errMsg={errorCountryData} />}

      {isLoadingAddDues && <Spinner custom={true} />}
      {errorAddDues && <Error errMsg={errorAddDues} />}

      <div className="mainContainer">
        <div className={styles.container}>
          <div className={styles.head}>
            <div className="pageTitleBox">
              <h1 className="pageTitle">إضافة خصم</h1>
            </div>
          </div>
          <div className={styles.content}>
            <form onSubmit={onSubmit} className={styles.addForm}>
              {/* <Input
                name="userId"
                value={userId}
                onChange={onChangeUserId}
                onBlur={onBlurUserId}
                isFirst={true}
                type="text"
                label="كود الموظف*"
                placeholder="كود الموظف*"
                errorMsg={userIdError}
              /> */}
              <SelectUser
                label="إسم الموظف"
                defaultOption="إختر إسم الموظف"
                selectList={getNotAdminUsersData}
                name="userId"
                onChange={onChangeUserId}
                onBlur={onBlurUserId}
                errorMsg={userIdError}
              />
              <Input
                name="reason"
                value={reason}
                onChange={onChangeReason}
                onBlur={onBlurReason}
                isFirst={true}
                type="text"
                label="سبب الخصم*"
                placeholder="سبب الخصم*"
                errorMsg={reasonError}
              />
              <SelectOption
                label="إختر العملة"
                defaultOption="إختر العملة"
                selectList={getCountryDataList}
                name="currency"
                onChange={onChangeCurrency}
                onBlur={onBlurCurrency}
                errorMsg={currencyError}
              />
              <Input
                name="amount"
                value={amount}
                onChange={onChangeAmount}
                onBlur={onBlurAmount}
                isFirst={true}
                type="text"
                label="المبلغ المخصوم*"
                placeholder="المبلغ المخصوم*"
                errorMsg={amountError}
              />
              <Input
                name="operationDate"
                // value={amount}
                // onChange={onChangeAmount}
                // onBlur={onBlurAmount}
                isFirst={true}
                type="date"
                label="تاريخ العملية*"
                placeholder="تاريخ العملية*"
                errorMsg={amountError}
              />
              <div></div>
              <div className={styles.addButton}>
                {/* <input type="submit" className={styles.submitBtn} value="إضافة الخصم" /> */}
                <button className={styles.submitBtn}>إضافة الخصم</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer
        position={i18n.dir() === "rtl" ? "bottom-right" : "bottom-left"}
        autoClose={3000}
        limit={1}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={i18n.dir() === "rtl"}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="light"
      />
    </section>
  );
};

export default AddDeduction;
