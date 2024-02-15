import { createAsyncThunk } from "@reduxjs/toolkit";
import { useGetData } from "../../hooks/fetchDataHook/useGetData";
import { useUploadFiles } from "../../hooks/fetchDataHook/useInsertData";

// --------------------------------------------------------------------------------------------
export const getContractDetails = createAsyncThunk(
  "contracts/getContractDetails",
  async (contractID, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await useGetData(`/admin/contract/details/${contractID}`);
      console.log("res:", res);
      return res.data;
    } catch (error) {
      console.log("error:", error);
      return rejectWithValue(error.message);
    }
  }
);

// --------------------------------------------------------------------------------------------
export const uploadContractFiles = createAsyncThunk(
  "contracts/uploadContractFiles",
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await useUploadFiles("/admin/upload/contract-files", data);
      console.log("res:", res);
      return res.data;
    } catch (error) {
      console.log("error:", error);
      return rejectWithValue(error.message);
    }
  }
);

// --------------------------------------------------------------------------------------------
export const getAllContracts = createAsyncThunk(
  "contracts/getAllContracts",
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      // const res = await useGetData(`/admin/all/contracts${data.page}`);
      const res = await useGetData(
        `/admin/all/contracts${data.page}${data.fromDate}${data.toDate}${data.serialNum}${data.type}`
      );
      console.log("res:", res);
      return res.data;
    } catch (error) {
      console.log("error:", error);
      return rejectWithValue(error.message);
    }
  }
);
