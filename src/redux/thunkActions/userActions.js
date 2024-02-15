import { createAsyncThunk } from "@reduxjs/toolkit";
import { useGetData } from "../../hooks/fetchDataHook/useGetData";


// --------------------------------------------------------------------------------------------
export const getUserOperations = createAsyncThunk("user/getUserOperations", async (data, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    console.log("_+_______++________+++____getUserOperations data:", data)
    const res = await useGetData(`/admin/user/operations/${data.userId}${data.params}`);
    console.log("res:", res);
    return res.data;
  } catch (error) {
    console.log("error:", error)
    return rejectWithValue(error.message);
  }
})

// ---------------------------------------------Settlements-----------------------------------------------
export const getUserSettlements = createAsyncThunk("user/getUserSettlements", async (data, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    console.log("_+_______++________+++getUserSettlements data:", data)
    const res = await useGetData(`/admin/settlements/list${data.page}${data.userId}${data.params}`);
    console.log("res:", res);
    return res.data;
  } catch (error) {
    console.log("error:", error)
    return rejectWithValue(error.message);
  }
})

// ---------------------------------------------Settlements-----------------------------------------------
export const getUserWithdrowals = createAsyncThunk("user/getUserWithdrowals", async (data, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    console.log("_+_______++________+++getUserWithdrowals data:", data)
    const res = await useGetData(`/admin/withdrowals/list${data.page}${data.userId}${data.params}`);
    console.log("res:", res);
    return res.data;
  } catch (error) {
    console.log("error:", error)
    return rejectWithValue(error.message);
  }
})

// ---------------------------------------------Settlements-----------------------------------------------
export const getUserDues = createAsyncThunk("user/getUserDues", async (data, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    console.log("_+_______++________+++getUserDues data:", data)
    const res = await useGetData(`/admin/dues/list${data.type}${data.userId}${data.params}${data.page}`);
    console.log("res:", res);
    return res.data;
  } catch (error) {
    console.log("error:", error)
    return rejectWithValue(error.message);
  }
})