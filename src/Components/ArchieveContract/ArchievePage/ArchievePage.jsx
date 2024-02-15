import { Link } from "react-router-dom";
import SectionHead from "../../Utils/SectionHead/SectionHead";
import { HiDocumentPlus } from "react-icons/hi2";
import { BsFillBagPlusFill } from "react-icons/bs";
import styles from "./styles.module.scss";
import ArchieveTable from "../../Tables/ArchieveTable/ArchieveTable";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import useGetNotebookStatistics from "../../../hooks/noteBooks/useGetNotebookStatistics";
import Spinner from "../../Utils/Spinner/Spinner";
import Error from "../../Utils/Error/Error";
import useGetAllContracts from "../../../hooks/contracts/useGetAllContracts";
import FullScreenImage from "../FullScreenImage/FullScreenImage";
import FullScreenImageSlider from "../FullScreenImageSlider/FullScreenImageSlider";

const ArchievePage = () => {
  const { t, i18n } = useTranslation();
  const [page, setPage] = useState(1);
  const [filterParams, setFilterParams] = useState("");
  console.log("______filterParams:", filterParams);
  const pageHandler = (num) => {
    setPage(num);
  };

  // const [
  //   notebooksStatisticsMsg,
  //   notebooksStatisticsTotal,
  //   assignedNotebooksCount,
  //   notAssignedNotebooksCount,
  //   notebooksStatisticsList,
  //   isLoadingStatistics,
  //   errorStatistics,
  // ] = useGetNotebookStatistics(page, filterParams);

  const data = {
    page: `?page=${page}`,
    fromDate: filterParams.fromDate,
    toDate: filterParams.toDate,
    serialNum: filterParams.serialNum,
    type: filterParams.type
  };

  const [
    total,
    archived_count,
    not_archived_count,
    per_page,
    getAllContractsList,
    isLoadingGetAllContracts,
    errorGetAllContracts,
  ] = useGetAllContracts(data);

  // ------------------------------------------------------
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [clickedImg, setClickedImg] = useState("");
  const [imagesList, setImagesList] = useState([]);
  const fullScreenHandler = (files, file) => {
    setIsFullScreen(true);
    setClickedImg(file);
    setImagesList(files)
    console.log("__Files__::::::::::", files);
  };

  const closeFullScreenHandler = () => {
    setIsFullScreen(false);
  };

  return (
    <section className={styles.archievePage}>
      {isLoadingGetAllContracts && <Spinner custom={true} />}
      {errorGetAllContracts && <Error errMsg={errorGetAllContracts} />}
      {isFullScreen ? (
        <FullScreenImageSlider
          trueUrl={true}
          imagesList={imagesList}
          close={closeFullScreenHandler}
        />
      ) : null}
      {/* {isFullScreen ? <FullScreenImage trueUrl={true} clickedImg={clickedImg} close={closeFullScreenHandler} /> : null} */}
      <div className="mainContainer">
        <div className={styles.container}>
          <SectionHead title="الأرشيف" />
          <div className={styles.addLink}>
            <Link to="/archieve/add-to-archieve" className={styles.link}>
              <span className={styles.text}>إضافة عقد للأرشيف</span>
              <BsFillBagPlusFill className={styles.icon} />
            </Link>
          </div>
          <div
            className={`pt-4 h-full rounded-md bg-cyan-950 ${styles.archieveTable}`}
          >
            <ArchieveTable
              setFilterParams={setFilterParams}
              tableList={getAllContractsList}
              pageHandler={setPage}
              page={page}
              totalCount={total}
              archived_count={archived_count}
              not_archived_count={not_archived_count}
              per_page={per_page}
              fullScreenHandler={fullScreenHandler}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArchievePage;
