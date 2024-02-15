import React from 'react'
// import { useSelector } from 'react-redux';
import Cookies from 'js-cookie';
import Login from '../../Auth/Login/Login';

const withGuard = (Component) => {
  const Wrapper = (props) => {
    // const { signIn, isLoading, error } = useSelector((state) => state.authSlice);
    const apiToken = Cookies.get("api_token");
    // const apiToken = true;

    return apiToken ? <Component {...props} /> : <Login />
  }
  return Wrapper;
}

export default withGuard;