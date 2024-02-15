import { createAsyncThunk } from "@reduxjs/toolkit";
import baseUrl from "../../hooks/fetchDataHook/baseUrl";
import { useGetData } from "../../hooks/fetchDataHook/useGetData";


// --------------------------------------------------------------------------------------------
export const getAllSupervisors = createAsyncThunk("supervisors/getAllSupervisors", async (page, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    const res = await useGetData(`admin/all/supervisors?page=${page}`);
    console.log("res:", res);
    return res.data;
  } catch (error) {
    console.log("error:", error)
    return rejectWithValue(error.message);
  }
})

// --------------------------------------------------------------------------------------------
export const getSupervisorDetails = createAsyncThunk("supervisors/getSupervisorDetails", async (superId, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    const res = await useGetData(`/admin/all/supervisors?supervisor_id=${superId}`);
    console.log("res:", res);
    return res.data;
  } catch (error) {
    console.log("error:", error)
    return rejectWithValue(error.message);
  }
})