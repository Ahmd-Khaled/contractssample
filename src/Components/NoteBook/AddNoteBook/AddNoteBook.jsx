import styles from "./styles.module.scss";
import useCreateNotebook from "../../../hooks/noteBooks/useCreateNotebook";
import Input from "../../Auth/Input/Input";
import Select from "react-select";
import SelectCountry from "../../Utils/SelectCountry/SelectCountry";
import { ToastContainer } from "react-toastify";
import { useTranslation } from "react-i18next";
import Spinner from "../../Utils/Spinner/Spinner";
import Error from "../../Utils/Error/Error";

const AddNoteBook = () => {
  const { t, i18n } = useTranslation();
  const [
    numOfNotebooks,
    numOfNotebooksError,
    onChangeNumOfNotebooks,
    onBlurNumOfNotebooks,
    countryCode,
    countryCodeError,
    onChangeCountryCode,
    onBlurCountryCode,
    onSubmit,
    isLoadingCreate,
    errorCreate
  ] = useCreateNotebook();

  const countryOptions = [
    {
      label: "السعودية",
      value: 1
    },
    {
      label: "الامارات",
      value: 2
    },
  ]

  const selectCountryHandler = () => {

  }

  const countryStyles = {
    control: (styles) => ({
      ...styles,
      backgroundColor: "transparent",
      // border: "1px solid #3b4781",
      padding: "6px 4px",
      color: "#3b4781",
      textTransform: "capitalize",
      minWidth: "200px",
      ":hover": {
        borderColor: "#F4911D"
      },
    }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      return {
        ...styles,
        textTransform: "capitalize",
        // padding: "8px",
      };
    }
  }

  return (
    <section className={styles.addNoteBook}>
      {isLoadingCreate && <Spinner custom={true} />}
      {errorCreate && <Error errMsg={errorCreate} />}
      <div className="mainContainer">
        <div className={styles.container}>
          <div className={styles.head}>
            <div className="pageTitleBox">
              <h1 className="pageTitle">اضافة دفتر</h1>
            </div>
          </div>
          <div className={styles.content}>
            <form onSubmit={onSubmit}>
              <div className={styles.inputBox}>
                <div className={styles.inputWrapper}>
                  <label>أدخل عدد الدفاتر</label>
                  <Input
                    name="numOfNotebooks"
                    value={numOfNotebooks}
                    onChange={onChangeNumOfNotebooks}
                    onBlur={onBlurNumOfNotebooks}
                    errorMsg={numOfNotebooksError}
                    type="number"
                    placeholder="عدد الدفاتر"
                    isFirst={true}
                  />
                </div>
                <div className={styles.inputWrapper}>
                  <label>أختر الدولة</label>
                  <SelectCountry 
                    name="countryCode"
                    value={countryCode}
                    onChange={onChangeCountryCode}
                    onBlur={onBlurCountryCode}
                    errorMsg={countryCodeError}
                  />
                </div>
                {/* <Select
                  options={countryOptions}
                  onChange={selectCountryHandler}
                  onBlur={onBlurCountryCode}
                  styles={countryStyles}
                  placeholder="أختر الدولة"
                /> */}
              </div>
              <div className={styles.addBtnBox}>
                <button className={styles.addBtn}>إضافة</button>
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
  )
}

export default AddNoteBook