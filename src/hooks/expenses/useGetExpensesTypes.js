import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getExpensesTypes } from "../../redux/thunkActions/expensesActions";


const useGetExpensesTypes = (type) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const run = async () => {
      await dispatch(getExpensesTypes(type));
    }
    run();
  }, []);
  
  
  const { getExpensesTypesRes, isLoading, error } = useSelector(state => state.expensesSlice);

  console.log("____(getExpensesTypesRes)_____:", getExpensesTypesRes)

  let getExpensesTypesList = [];

  if (!isLoading) {
    if (getExpensesTypesRes) {
      if (getExpensesTypesRes.status) {
        if (getExpensesTypesRes.data) {
            getExpensesTypesList = getExpensesTypesRes.data;
        }
      }
    }
  }
  return [
    getExpensesTypesList,
    isLoading,
    error
  ]
}


export default useGetExpensesTypes