import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserDues } from "../../redux/thunkActions/userActions";


const useGetUserDues = (data) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const run = async () => {
      await dispatch(getUserDues(data));
    }
    run();
  }, [data.params, data.page]);

  const { getUserDuesRes, isLoading, error } = useSelector(state => state.userSlice);

  console.log("____(getUserDuesRes)_____:", getUserDuesRes)

  let total = 0
  let count = {}
  let getUserDuesList = []
  let mapedDuesList = []

  if (!isLoading) {
    if (getUserDuesRes) {
      if (getUserDuesRes.status) {
        if (getUserDuesRes.total) {
            total = getUserDuesRes.total;
        }
        if (getUserDuesRes.count) {
            count = getUserDuesRes.count;
        }
        if (getUserDuesRes.list) {
            getUserDuesList = getUserDuesRes.list;
            mapedDuesList = getUserDuesList.map((item) => (
              {
                ...item,
                user:[item.user_id, item.user_name],
                by:[item.by_id, item.by_name]
              }
            ))
            console.log("__________(_^_)______ mapedDuesList: ", mapedDuesList)
        }
      }
    }
  }
  return [
    total,
    count,
    mapedDuesList,
    isLoading,
    error
  ]
}


export default useGetUserDues