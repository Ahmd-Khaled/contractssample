import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSupervisorDetails } from "../../redux/thunkActions/supervisorsActions";


const useGetSupervisorDetails = (superId) => {
  const dispatch = useDispatch();
  const [supervisorsData, setSupervisorsData] = useState([]);


  useEffect(() => {
    const run = async () => {
      await dispatch(getSupervisorDetails(superId));
    }
    run();
  }, []);

  const { getSupervisorDetailsRes, isLoading, error } = useSelector(state => state.supervisorsSlice);

  console.log("____(getSupervisorDetailsRes)_____:", getSupervisorDetailsRes)

  let message = "";
  let userNotFound = false
  let supervisorDetailsData = [];
  let supervisorNotebooks = [];
  let supervisorMembers = [];

  if (!isLoading) {
    if (getSupervisorDetailsRes) {
      if (getSupervisorDetailsRes.status) {
        message = getSupervisorDetailsRes.message;
        if (getSupervisorDetailsRes.data) {
          supervisorDetailsData = getSupervisorDetailsRes.data;
          if (getSupervisorDetailsRes.data.notebooks) {
            supervisorNotebooks = getSupervisorDetailsRes.data.notebooks;
          }
          if (getSupervisorDetailsRes.data.members) {
            supervisorMembers = getSupervisorDetailsRes.data.members;
          }
        }
      }else {
        message = getSupervisorDetailsRes.message;
        userNotFound = true;
      }
    }
  }
  return [
    userNotFound,
    message,
    supervisorDetailsData,
    supervisorNotebooks,
    supervisorMembers,
    isLoading,
    error
  ]
}

export default useGetSupervisorDetails