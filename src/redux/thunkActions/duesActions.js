import { createAsyncThunk } from "@reduxjs/toolkit";
import { useGetData } from "../../hooks/fetchDataHook/useGetData";
import { useInsertData } from "../../hooks/fetchDataHook/useInsertData";


// --------------------------------------------------------------------------------------------
export const addDues = createAsyncThunk("dues/addDues", async (data, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    const res = await useInsertData('/admin/add/dues', data);
    console.log("res:", res);
    return res.data;
  } catch (error) {
    console.log("error:", error)
    return rejectWithValue(error.message);
  }
})


