import { createAsyncThunk } from "@reduxjs/toolkit";
import { useInsertData, useInsertFormData } from "../../hooks/fetchDataHook/useInsertData";
import { useGetData } from "../../hooks/fetchDataHook/useGetData";


// --------------------------------------------------------------------------------------------
export const createNotebook = createAsyncThunk("noteBooks/createNotebook", async (data, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    const res = await useInsertData('/admin/create/notebooks', data);
    return res.data;
  } catch (error) {
    console.log("error:", error)
    return rejectWithValue(error.message);
  }
})


// --------------------------------------------------------------------------------------------
export const assignNotebooks = createAsyncThunk("noteBooks/assignNotebooks", async (data, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    console.log("_________________________(assign notebook data:)", data);
    const res = await useInsertData('/admin/assign/notebook', data);
    // const res = await useInsertFormData('/admin/assign/notebook', data);
    console.log("//////////////////__________ assignNotebooks res", res)
    return res.data;
  } catch (error) {
    console.log("error:", error)
    return rejectWithValue(error.message);
  }
})

// --------------------------------------------------------------------------------------------
export const getNotAssignedNotebook = createAsyncThunk("noteBooks/getNotAssignedNotebook", async (data, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    const res = await useGetData('/admin/notebook/statistics?not_assigned=true');
    console.log("________(getNotAssignedNotebook res:)", res);
    return res.data;
  } catch (error) {
    console.log("error:", error)
    return rejectWithValue(error.message);
  }
})

// --------------------------------------------------------------------------------------------
export const getNotebooksStatistics = createAsyncThunk("noteBooks/getNotebooksStatistics", async (data, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    const res = await useGetData(`admin/notebook/statistics?page=${data.page}${data.params}`);
    console.log("________(getNotebooksStatistics res:)", res);
    return res.data;
  } catch (error) {
    console.log("error:", error)
    return rejectWithValue(error.message);
  }
})

// --------------------------------------------------------------------------------------------
export const getNotebookDetails = createAsyncThunk("noteBooks/getNotebookDetails", async (noteId, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    const res = await useGetData(`admin/notebook/statistics?notebook_id=${noteId}`);
    console.log("________(getNotebooksStatistics res:)", res);
    return res.data;
  } catch (error) {
    console.log("error:", error)
    return rejectWithValue(error.message);
  }
})