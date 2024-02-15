import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNotebookDetails } from "../../redux/thunkActions/noteBooksActions";


const useGetNotebookDetails = (noteId) => {
  const dispatch = useDispatch();


  useEffect(() => {
    const run = async () => {
      await dispatch(getNotebookDetails(noteId));
    }
    run();
  }, []);
  
  
  const { getNotebookDetailsRes, isLoading, error } = useSelector(state => state.noteBooksSlice);

  console.log("____(getNotebookDetailsRes)_____:", getNotebookDetailsRes)

  let notebookDetailsData = {}
  let notebookContracts = []

  
  if (!isLoading) {
    if (getNotebookDetailsRes) {
      if (getNotebookDetailsRes.status) {
        if (getNotebookDetailsRes.data) {
          notebookDetailsData = getNotebookDetailsRes.data;
          if (getNotebookDetailsRes.data.contracts) {
            notebookContracts = getNotebookDetailsRes.data.contracts;
          }
        }
      }
    }
  }
  return [notebookDetailsData, notebookContracts, isLoading, error]
}

export default useGetNotebookDetails