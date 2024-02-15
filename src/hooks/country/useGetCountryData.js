import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountryData } from "../../redux/thunkActions/countryActions";


const useGetCountryData = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const run = async () => {
      await dispatch(getCountryData());
    }
    run();
  }, []);

  const { getCountryDataRes, isLoading, error } = useSelector(state => state.countrySlice);

  console.log("____(getCountryDataRes)_____:", getCountryDataRes)

  let getCountryDataList = []

  if (!isLoading) {
    if (getCountryDataRes) {
      if (getCountryDataRes.status) {
        if (getCountryDataRes.data) {
            getCountryDataList = getCountryDataRes.data;
        }
      }
    }
  }
  return [
    getCountryDataList,
    isLoading,
    error
  ]
}

export default useGetCountryData