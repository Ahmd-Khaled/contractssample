import { createAsyncThunk } from "@reduxjs/toolkit";
import { useInsertData, useInsertDataLogin, useInsertDataLogout, useInsertDataWithBody } from "../../hooks/fetchDataHook/useInsertData";
import baseUrl from "../../hooks/fetchDataHook/baseUrl";
import { useGetData } from "../../hooks/fetchDataHook/useGetData";


// --------------------------------------------------------------------------------------------
export const logIn = createAsyncThunk("auth/logIn", async (data, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    console.log("User Login Data:", data)
    const res = await useInsertDataLogin('/admin/login', data);
    console.log("res:", res);
    return res.data;
  } catch (error) {
    console.log("error:", error)
    return rejectWithValue(error.message);
  }
})

// --------------------------------------------------------------------------------------------
export const addPosition = createAsyncThunk("auth/addPosition", async (data, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    console.log("addPosition Data:", data)
    const res = await useInsertData('admin/create/user', data);
    console.log("res:", res);
    return res.data;
  } catch (error) {
    console.log("error:", error)
    return rejectWithValue(error.message);
  }
})
// --------------------------------------------------------------------------------------------

export const logOut = createAsyncThunk("auth/logOut", async (token, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    console.log("logOut- Token sent to RTK: ", token);
    console.log("___(3)___Logout Before Insert Data____");
    const res = await useInsertDataLogout(`/logout`, token);
    console.log("___(5)___Logout After Insert Data____");
    return res.data;
  } catch (error) {
    console.log("error:", error)
    return rejectWithValue(error.message);
  }
})
// --------------------------------------------------------------------------------------------

export const getNotAdminUsers = createAsyncThunk("auth/getNotAdminUsers", async (data, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    const res = await useGetData(`/admin/users/under/admin`);
    return res.data;
  } catch (error) {
    console.log("error:", error)
    return rejectWithValue(error.message);
  }
})



