import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContractDetails } from "../../redux/thunkActions/contractsActions";


const useGetContractDetails = (contractID) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const run = async () => {
      await dispatch(getContractDetails(contractID));
    }
    run();
  }, []);

  const { getContractDetailsRes, isLoading, error } = useSelector(state => state.contractsSlice);

  console.log("____(getContractDetailsRes)_____:", getContractDetailsRes)

  let getContractDetailsData = []

  if (!isLoading) {
    if (getContractDetailsRes) {
      if (getContractDetailsRes.status) {
        if (getContractDetailsRes.data) {
            getContractDetailsData = getContractDetailsRes.data;
        }
      }
    }
  }
  return [
    getContractDetailsData,
    isLoading,
    error
  ]
}


export default useGetContractDetails