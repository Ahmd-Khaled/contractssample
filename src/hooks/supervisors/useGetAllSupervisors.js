import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllSupervisors } from "../../redux/thunkActions/supervisorsActions";


const useGetAllSupervisors = (page) => {
  const dispatch = useDispatch();
  const [supervisorsData, setSupervisorsData] = useState([]);


  console.log("_____Page____: ", page);
  
  useEffect(() => {
    const run = async () => {
      await dispatch(getAllSupervisors(page));
    }
    run();
  }, [page]);

  const { GetAllSupervisorsRes, isLoading, error } = useSelector(state => state.supervisorsSlice);

  console.log("____(GetAllSupervisorsRes)_____:", GetAllSupervisorsRes)

  let supervisorsList = []
  let supervisorsTotal = 0
  let supervisorsCount = {}

  if (!isLoading) {
    if (GetAllSupervisorsRes) {
      if (GetAllSupervisorsRes.status) {
        if (GetAllSupervisorsRes.count) {
          supervisorsCount = GetAllSupervisorsRes.count;
        }
        if (GetAllSupervisorsRes.total > 0) {
          supervisorsTotal = GetAllSupervisorsRes.total;
          if (GetAllSupervisorsRes.list) {
            supervisorsList = GetAllSupervisorsRes.list;
          }
        }
      }
    }
  }
  return [
    supervisorsList,
    supervisorsTotal,
    supervisorsCount,
    isLoading,
    error
  ]
}

export default useGetAllSupervisors