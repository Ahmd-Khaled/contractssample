import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserWithdrowals } from "../../redux/thunkActions/userActions";


const useGetUserWithdrowals = (data) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const run = async () => {
      await dispatch(getUserWithdrowals(data));
    }
    run();
  }, [data.params, data.page]);

  const { getUserWithdrowalsRes, isLoading, error } = useSelector(state => state.userSlice);

  console.log("____(getUserWithdrowalsRes)_____:", getUserWithdrowalsRes)

  let total = 0;
  let count = {};
  let getUserWithdrowalsList = [];
  let mapedWithdrowalsList = []

  if (!isLoading) {
    if (getUserWithdrowalsRes) {
      if (getUserWithdrowalsRes.status) {
        if (getUserWithdrowalsRes.total) {
            total = getUserWithdrowalsRes.total;
        }
        if (getUserWithdrowalsRes.count) {
            count = getUserWithdrowalsRes.count;
        }
        if (getUserWithdrowalsRes.list) {
            getUserWithdrowalsList = getUserWithdrowalsRes.list;
            mapedWithdrowalsList = getUserWithdrowalsList.map((item) => (
              {
                ...item,
                user:[item.user_id, item.user_name],
              }
            ))
            console.log("__________(_^_)______ mapedSettlementsList: ", mapedWithdrowalsList)
        }
      }
    }
  }
  return [
    total,
    count,
    mapedWithdrowalsList,
    isLoading,
    error
  ]
}


export default useGetUserWithdrowals