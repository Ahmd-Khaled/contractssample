import { createAsyncThunk } from "@reduxjs/toolkit";
import { useGetData } from "../../hooks/fetchDataHook/useGetData";


// --------------------------------------------------------------------------------------------
export const getSearchResults = createAsyncThunk("search/getSearchResults", async (searchWord, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    const res = await useGetData(`/${searchWord}`);
    console.log("res:", res);
    return res.data;
  } catch (error) {
    console.log("error:", error)
    return rejectWithValue(error.message);
  }
})


