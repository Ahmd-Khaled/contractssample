import { createAsyncThunk } from "@reduxjs/toolkit";
import { useGetData } from "../../hooks/fetchDataHook/useGetData";
import { useInsertData } from "../../hooks/fetchDataHook/useInsertData";


// ---------------------------getAllExpensesTypes-----------------------------------------------------------------
export const getAllExpensesTypes = createAsyncThunk("expenses/getAllExpensesTypes", async (data, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    const res = await useGetData(`/admin/all/expense-type${data.page}${data.params}`);
    console.log("res:", res);
    return res.data;
  } catch (error) {
    console.log("error:", error)
    return rejectWithValue(error.message);
  }
})

// ----------------------------getExpensesTypes------------------------------
export const getExpensesTypes = createAsyncThunk("expenses/getExpensesTypes", async (type, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    const res = await useGetData(`/admin/expense-type/select/limit${type}`);
    console.log("res:", res);
    return res.data;
  } catch (error) {
    console.log("error:", error)
    return rejectWithValue(error.message);
  }
})
// -----------------addChildExpenseType-----------------------------------------
export const addChildExpenseType = createAsyncThunk("expenses/addChildExpenseType", async (data, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    const res = await useInsertData(`/admin/add/expense-type`, data);
    console.log("res:", res);
    return res.data;
  } catch (error) {
    console.log("error:", error)
    return rejectWithValue(error.message);
  }
})



