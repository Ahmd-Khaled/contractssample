import { createAsyncThunk } from "@reduxjs/toolkit";
import { useGetData } from "../../hooks/fetchDataHook/useGetData";


// --------------------------------------------------------------------------------------------
export const getCountryData = createAsyncThunk("country/getCountryData", async (data, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    const res = await useGetData('/contries/select/limit');
    console.log("res:", res);
    return res.data;
  } catch (error) {
    console.log("error:", error)
    return rejectWithValue(error.message);
  }
})


