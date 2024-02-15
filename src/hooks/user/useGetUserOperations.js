import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserOperations } from "../../redux/thunkActions/userActions";

const useGetUserOperations = (data) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const run = async () => {
      await dispatch(getUserOperations(data));
    };
    run();
  }, []);

  const { getUserOperationsRes, isLoading, error } = useSelector((state) => state.userSlice);
  

  console.log("____(getUserOperationsRes)_____:", getUserOperationsRes);

  let getUserOperationsData = [];
  let userWithdrowals = null;
  let userExpenses = null;
  let userDeusDeductions = null;
  let userSettlements = null;

  let withdrowalsArray = null;
  let expensesArray = null;
  let deusDeductionsArray = null;
  let settlementsArray = null;
  

  let totalWithdrowals = 0;
  let totalExpenses = 0;
  let totalDeusDeductions = 0;
  let totalSettlements = 0;

  if (!isLoading) {
    if (getUserOperationsRes) {
      if (getUserOperationsRes.status) {
        if (getUserOperationsRes.data) {
          getUserOperationsData = getUserOperationsRes.data;

          if (getUserOperationsRes.data.withdrowals) {
            userWithdrowals = getUserOperationsRes.data.withdrowals;
            totalWithdrowals= userWithdrowals.total_sum;

            const withdrowals = Object.entries(userWithdrowals).filter(([key, value]) => key.split("_")[0] !== "total" )
            withdrowalsArray = withdrowals.map((item) => item[1]);
          }

          if (getUserOperationsRes.data.expenses) {
            userExpenses = getUserOperationsRes.data.expenses;
            totalExpenses = userExpenses.total_sum;

            const expenses = Object.entries(userExpenses).filter(([key, value]) => key.split("_")[0] !== "total" )
            expensesArray = expenses.map((item) => item[1]);
          }

          if (getUserOperationsRes.data.deusDeductions) {
            userDeusDeductions = getUserOperationsRes.data.deusDeductions;
            totalDeusDeductions = userDeusDeductions.total_sum;

            const deusDeductions = Object.entries(userDeusDeductions).filter(([key, value]) => key.split("_")[0] !== "total" )
            deusDeductionsArray = deusDeductions.map((item) => item[1]);
          }

          if (getUserOperationsRes.data.settlements) {
            userSettlements = getUserOperationsRes.data.settlements;
            totalSettlements = userSettlements.total_sum;
            
            const settlements = Object.entries(userSettlements).filter(([key, value]) => key.split("_")[0] !== "total" )
            settlementsArray = settlements.map((item) => item[1]);
          }
        }
      }
    }
  }
  return [
    getUserOperationsData,
    withdrowalsArray,
    totalWithdrowals,
    expensesArray,
    totalExpenses,
    deusDeductionsArray,
    totalDeusDeductions,
    settlementsArray,
    totalSettlements,
    isLoading,
    error,
  ];
};

export default useGetUserOperations;
