import { createAsyncThunk } from "@reduxjs/toolkit";
import { useGetData } from "../../hooks/fetchDataHook/useGetData";
import { useUploadFiles } from "../../hooks/fetchDataHook/useInsertData";


// --------------------------------------------------------------------------------------------
// export const uploadContractFiles = createAsyncThunk("archieve/uploadContractFiles", async (data, thunkAPI) => {
//   const { rejectWithValue } = thunkAPI;
//   try {
//     const res = await useUploadFiles('/admin/contract-files');
//     console.log("res:", res);
//     return res.data;
//   } catch (error) {
//     console.log("error:", error)
//     return rejectWithValue(error.message);
//   }
// })


