import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllContracts,
  getContractDetails,
} from "../../redux/thunkActions/contractsActions";

const useGetAllContracts = (data) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const run = async () => {
      await dispatch(getAllContracts(data));
    };
    run();
  }, [data.page, data.fromDate, data.toDate, data.serialNum, data.type]);


  const { getAllContractsRes, isLoading, error } = useSelector(
    (state) => state.contractsSlice
  );

  console.log("____(getAllContractsRes)_____:", getAllContractsRes);

  let total = 0;
  let archived_count = 0;
  let not_archived_count = 0;
  let per_page = 1;
  let getAllContractsList = [];

  if (!isLoading) {
    if (getAllContractsRes) {
      if (getAllContractsRes.status) {
        if (getAllContractsRes.total) {
            total = getAllContractsRes.total;
        }
        if (getAllContractsRes.count) {
          archived_count = getAllContractsRes.count.archived_count;
          not_archived_count = getAllContractsRes.count.not_archived_count;
          per_page = getAllContractsRes.count.per_page;
        }
        if (getAllContractsRes.list) {
            getAllContractsList = getAllContractsRes.list;
        } else if (getAllContractsRes.data) {
            getAllContractsList.push(getAllContractsRes.data);
        }
      }
    }
  }
  return [
    total,
    archived_count,
    not_archived_count,
    per_page,
    getAllContractsList,
    isLoading,
    error,
  ];
};

export default useGetAllContracts;
