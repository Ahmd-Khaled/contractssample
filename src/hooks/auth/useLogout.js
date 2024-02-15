import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useState } from 'react';
import { useEffect } from 'react';
import notify from '../notify/useNotification';
import { logOut } from "../../redux/thunkActions/authActions";

const useLogout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const logOutHandler = () => {
    console.log("___(1)___Logout button Clicked____");
    setLoading(true);
    dispatch(logOut({
      'apiPassword': '123',
      'Authorization': `Bearer ${Cookies.get("api_token")}`,
    }));
    console.log("___(2)___Logout Action dispatched____");
    setLoading(false);
  }

  const { logOutRes, isLoading, error } = useSelector((state) => state.authSlice);

  console.log("logOutRes__:", logOutRes);

  useEffect(() => {
    if (!isLoading) {
      console.log("___(--)___logOutRes !isLoading____");
      if (logOutRes) {
        console.log("___(--)___logOutRes true____");
        if (logOutRes.status) {
          console.log("___(--)___logOutRes.status true____");
          Cookies.remove("api_token");
          Cookies.remove("user_data");
          localStorage.removeItem("api_token");
          localStorage.removeItem("user_data");
          notify(logOutRes.message, "success");
          setTimeout(() => {
            navigate('/login');
          }, 3000);
        } else {
          notify(logOutRes.message, "error");
        }
      }
    }
  }, [loading, logOutRes])

  return [logOutHandler, isLoading, error];
}

export default useLogout;