import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllExpensesTypes } from "../../redux/thunkActions/expensesActions";


const useGetAllExpensesTypes = (data) => {
  const dispatch = useDispatch();


  useEffect(() => {
    const run = async () => {
      await dispatch(getAllExpensesTypes(data));
    }
    run();
  }, [data.page, data.params]);

  const { getAllExpensesTypesRes, isLoading, error } = useSelector(state => state.expensesSlice);

  console.log("____(getAllExpensesTypesRes)_____:", getAllExpensesTypesRes)

  let getAllExpensesTypesList = [];
  let total = 1;

  if (!isLoading) {
    if (getAllExpensesTypesRes) {
      if (getAllExpensesTypesRes.status) {
        if (getAllExpensesTypesRes.total) {
            total = getAllExpensesTypesRes.total;
        }
        if (getAllExpensesTypesRes.list) {
            getAllExpensesTypesList = getAllExpensesTypesRes.list;
        }
      }
    }
  }
  return [
    total,
    getAllExpensesTypesList,
    isLoading,
    error
  ]
}

export default useGetAllExpensesTypes