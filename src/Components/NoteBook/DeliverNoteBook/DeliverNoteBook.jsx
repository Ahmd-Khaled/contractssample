import Select from "react-select";
import AsyncSelect from "react-select/async";
import CustomTable from "./CustomTable/CustomTable"
import styles from "./styles.module.scss";
import useGetAllSupervisors from "../../../hooks/supervisors/useGetAllSupervisors";
import { useState } from "react";
import useAssignNotebooks from "../../../hooks/noteBooks/useAssignNotebooks";
import useGetNotAssignedNotebook from "../../../hooks/noteBooks/useGetNotAssignedNotebook";
import { ToastContainer } from "react-toastify";
import { useTranslation } from "react-i18next";
import Spinner from "../../Utils/Spinner/Spinner";
import Error from "../../Utils/Error/Error";


const DeliverNoteBook = () => {
  const { t, i18n } = useTranslation();
  const [assignedSuper, setAssignedSuper] = useState("");
  const [assignedNotebooks, setAssignedNotebooks] = useState([]);
  // const [mappedNotebooksList, setMappedNotebooksList] = useState([]);
  const mappedNotebooksList = assignedNotebooks?.map((notebook) => {
    return notebook.value
  });

  const [supervisorsList, supervisorsTotal, supervisorsCount, isLoadingGetAllSuper, errorGetAllSuper] = useGetAllSupervisors(1);
  const [notAssignedNotebookList, notAssignedNotebookTotal, isLoadingGetNotAssigned, errorGetNotAssigned] = useGetNotAssignedNotebook();

  const [assignNoteBookHandler, isLoadingAssignNote, errorAssignNote] = useAssignNotebooks(assignedSuper, mappedNotebooksList);

  console.log("supervisorsList", supervisorsList);
  
  const mappedSupervisor = supervisorsList?.map((supervisor) => {
    return {
      label: supervisor.user_name,
      value: supervisor.user_id
    }
  });
  
  
  const mappedNotAssignedNotbooks = notAssignedNotebookList?.map((notebook) => {
    return {
      label: notebook.serial_number,
      value: notebook.notebook_id
    }
  });
  
  console.log("********** (mappedNotAssignedNotbooks) : ", mappedNotAssignedNotbooks)

  // setMappedNotebooksList(mappedNotebooks)

  console.log("mappedNotebooksList", mappedNotebooksList);


  const options = [
    { value: "note-0000001", label: "note-0000001" },
    { value: "note-0000002", label: "note-0000002" },
    { value: "note-0000003", label: "note-0000003" },
  ];

  const selectSupervisorHandler = (selectedOption) => {
    console.log("-- +++ -- ++ -- select Parent: ", selectedOption);
    setAssignedSuper(selectedOption);
  }

  const selectNotebooksHandler = (selectedOption) => {
    // console.log("selectNotebooksHandler: ", selectedOption);
    setAssignedNotebooks(selectedOption);
  }

  const superStyles = {
    control: (styles) => ({
      ...styles,
      backgroundColor: "transparent",
      border: "1px solid #3b4781",
      padding: "4px",
      color: "#3b4781",
      textTransform: "capitalize",
      ":hover": {
        borderColor: "#F4911D"
      },
    }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      return {
        ...styles,
        textTransform: "capitalize"
      };
    }
  }
  // -----------------------------------
  const notebooksStyles = {
    control: (styles) => ({
      ...styles,
      backgroundColor: "transparent",
      border: "1px solid #3b4781",
      padding: "4px",
      ":hover": {
        borderColor: "#F4911D"
      },
      ":focus": {
        borderColor: "#F4911D"
      },
    }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      return { ...styles, color: "#3b4781"};
    },
    multiValue: (styles, { data }) => {
      return {
        ...styles,
        backgroundColor: "#3b4781",
        color: "#FFF",
        padding: "2px",
        borderRadius: "4px",
      }
    },
    multiValueLabel: (styles, { data }) => {
      return {
        ...styles,
        color: "#FFF",
      }
    },
    multiValueRemove: (styles, { data }) => {
      return {
        ...styles,
        color: "#FFF",
        cursor: "pointer",
        ":hover": {
          color: "#F55157",
          backgroundColor: "transparent"
        }
      }
    },
  }

  // const loadOptionsHandler = (searchValue, callback) => {
  //   callback(mappedSupervisor);
  //   setTimeout(() => {
  //   }, [100])
  // }

  return (
    <section className={styles.deliverNoteBook}>
      {isLoadingGetAllSuper && <Spinner custom={true} />}
      {isLoadingGetNotAssigned && <Spinner custom={true} />}
      {isLoadingAssignNote && <Spinner custom={true} />}
      {errorAssignNote && <Error errMsg={errorAssignNote} />}
      <div className="mainContainer">
        <div className={styles.container}>
          <div className={styles.head}>
            <div className="pageTitleBox">
              <h1 className="pageTitle">تسليم الدفاتر</h1>
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.superList}>
              <h3 className={styles.title}>أختر مشرف</h3>
              <Select
                options={mappedSupervisor}
                onChange={selectSupervisorHandler}
                styles={superStyles}
                placeholder="أختر مشرف"
              />
              {/* <AsyncSelect
                loadOptions={loadOptionsHandler}
                defaultOptions
                onChange={selectSupervisorHandler}
                styles={superStyles}
              /> */}
            </div>
            <div className={styles.notebooksList}>
              <h3 className={styles.title}>أختر دفتر أو أكثر</h3>
              <Select
                options={mappedNotAssignedNotbooks} 
                onChange={selectNotebooksHandler}
                isMulti
                styles={notebooksStyles}
                placeholder="أختر دفتر او أكثر"
              />
            </div>
          </div>
          {assignedNotebooks.length > 0 && assignedSuper ? (
            <div className={styles.assignBox}>
              <div className={styles.head}>
                <h2 className={styles.title}>بيانات تسليم الدفاتر</h2>
              </div>
              <div className={styles.assignedSuper}>
                <h3 className={styles.superName}>
                  <span className={styles.supTtl}>المشرف:</span>
                  <span>{assignedSuper.label}</span>
                </h3>
                <ul className={styles.assignedNotebooksList}>
                  <h4 className={styles.noteTtl}>الدفاتر:</h4>
                  {
                    assignedNotebooks?.map((item, index) => (
                      <li className={styles.item} key={index}>
                        <span className={styles.num}>{index+1}</span>
                        <span className={styles.name}>{item.label}</span>
                      </li>
                    ))
                  }
                </ul>
                <div className={styles.assBtnBox}>
                  <button className={styles.assBtn} onClick={assignNoteBookHandler}>تسليم للمشرف</button>
                </div>
              </div>
            </div>
          ) : null}
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

export default DeliverNoteBook