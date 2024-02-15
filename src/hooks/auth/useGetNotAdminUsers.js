import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNotAdminUsers } from "../../redux/thunkActions/authActions";


const useGetNotAdminUsers = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const run = async () => {
      await dispatch(getNotAdminUsers());
    }
    run();
  }, []);

  const { getNotAdminUsersRes, isLoading, error } = useSelector(state => state.authSlice);

  console.log("____(getNotAdminUsersRes)_____:", getNotAdminUsersRes)

  let getNotAdminUsersData = []

  if (!isLoading) {
    if (getNotAdminUsersRes) {
      if (getNotAdminUsersRes.status) {
        if (getNotAdminUsersRes.data) {
            getNotAdminUsersData = getNotAdminUsersRes.data;
        }
      }
    }
  }
  return [
    getNotAdminUsersData,
    isLoading,
    error
  ]
}

export default useGetNotAdminUsers