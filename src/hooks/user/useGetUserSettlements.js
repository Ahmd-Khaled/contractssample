import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserSettlements } from "../../redux/thunkActions/userActions";


const useGetUserSettlements = (data) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const run = async () => {
      await dispatch(getUserSettlements(data));
    }
    run();
  }, [data.params, data.page]);

  const { getUserSettlementsRes, isLoading, error } = useSelector(state => state.userSlice);

  console.log("____(getUserSettlementsRes)_____:", getUserSettlementsRes)

  let total = 0
  let count = {}
  let getUserSettlementsList = []
  let mapedSettlementsList = []

  if (!isLoading) {
    if (getUserSettlementsRes) {
      if (getUserSettlementsRes.status) {
        if (getUserSettlementsRes.total) {
            total = getUserSettlementsRes.total;
        }
        if (getUserSettlementsRes.count) {
            count = getUserSettlementsRes.count;
        }
        if (getUserSettlementsRes.list) {
            getUserSettlementsList = getUserSettlementsRes.list;
            mapedSettlementsList = getUserSettlementsList.map((item) => (
              {
                ...item,
                user:[item.user_id, item.user_name],
              }
            ))
            console.log("__________(_^_)______ mapedSettlementsList: ", mapedSettlementsList)
        }
      }
    }
  }
  return [
    total,
    count,
    mapedSettlementsList,
    isLoading,
    error
  ]
}



export default useGetUserSettlements