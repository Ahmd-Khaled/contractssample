import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNotebooksStatistics } from "../../redux/thunkActions/noteBooksActions";
// import { purgeState, resetSate } from "../../redux/slices/noteBooksSlice";
// import { persistor } from "../../redux/store";
// import { PURGE } from "redux-persist";


const useGetNotebookStatistics = (page, filterParams) => {
  const dispatch = useDispatch();
  // const persistor = getPersistor();

  const [supervisorsData, setSupervisorsData] = useState([]);
  console.log("----------________------- page:", page)
  console.log("----------________------- filterParams:", filterParams)
  
  
  useEffect(() => {
    const run = async () => {
      // dispatch(resetSate());
      // await persistor.purge();
      // localStorage.setItem("getNotebooksStatisticsRes", [])
      // PURGE.resetSate;
      // window.location.reload();
      const data = {
        page: page,
        params: filterParams
      }
      // dispatch(purgeState());
      // window.location.assign(`${appConfig.publicUrl}/`);

      await dispatch(getNotebooksStatistics(data));
    }
    run();
  }, [page, filterParams]);
  
  
  const { getNotebooksStatisticsRes, isLoading, error } = useSelector(state => state.noteBooksSlice);



  console.log("____(getNotebooksStatisticsRes)_____:", getNotebooksStatisticsRes)

  let notebooksStatisticsMsg = ""
  let notebooksStatisticsTotal = 0
  let assignedNotebooksCount = 0
  let notAssignedNotebooksCount = 0
  let notebooksStatisticsList = []

  
  if (!isLoading) {
    if (getNotebooksStatisticsRes) {
      if (getNotebooksStatisticsRes.status) {
        if (getNotebooksStatisticsRes.message) {
          notebooksStatisticsMsg = getNotebooksStatisticsRes.message;
        }
        if (getNotebooksStatisticsRes.count) {
          if (getNotebooksStatisticsRes.count.assigned_notebooks_count) {
            assignedNotebooksCount = getNotebooksStatisticsRes.count.assigned_notebooks_count;
          }
          if (getNotebooksStatisticsRes.count.not_assigned_notebooks_count) {
            notAssignedNotebooksCount = getNotebooksStatisticsRes.count.not_assigned_notebooks_count;
          }
        }
        if (getNotebooksStatisticsRes.total > 0) {
          notebooksStatisticsTotal = getNotebooksStatisticsRes.total;
          if (getNotebooksStatisticsRes.list) {
            notebooksStatisticsList = getNotebooksStatisticsRes.list;
          }
        }
        if (getNotebooksStatisticsRes.data) {
          notebooksStatisticsList = new Array(getNotebooksStatisticsRes.data)
          console.log("++++_______notebooksStatisticsList______:", notebooksStatisticsList)
        }
      }
    }
  }
  return [
    notebooksStatisticsMsg,
    notebooksStatisticsTotal,
    assignedNotebooksCount,
    notAssignedNotebooksCount,
    notebooksStatisticsList,
    isLoading,
    error
  ]
}

export default useGetNotebookStatistics