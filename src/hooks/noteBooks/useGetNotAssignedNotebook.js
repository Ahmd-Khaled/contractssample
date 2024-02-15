import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNotAssignedNotebook } from "../../redux/thunkActions/noteBooksActions";


const useGetNotAssignedNotebook = () => {
  const dispatch = useDispatch();


  useEffect(() => {
    const run = async () => {
      await dispatch(getNotAssignedNotebook());
    }
    run();
  }, []);

  const { getNotAssignedNotebookRes, isLoading, error } = useSelector(state => state.noteBooksSlice);

  console.log("____(getNotAssignedNotebookRes)_____:", getNotAssignedNotebookRes)

  let notAssignedNotebookList = []
  let notAssignedNotebookTotal = 0
  let notAssignedNotebookCount = {}

  if (!isLoading) {
    if (getNotAssignedNotebookRes) {
      if (getNotAssignedNotebookRes.status) {
        if (getNotAssignedNotebookRes.total > 0) {
          notAssignedNotebookTotal = getNotAssignedNotebookRes.total;
          if (getNotAssignedNotebookRes.list) {
            notAssignedNotebookList = getNotAssignedNotebookRes.list;
          }
        }
      }
    }
  }
  return [notAssignedNotebookList, notAssignedNotebookTotal, isLoading, error]
}


export default useGetNotAssignedNotebook