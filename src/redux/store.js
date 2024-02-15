import { configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

import authSlice from "./slices/authSlice";
import sidebarSlice from "./slices/sidebarSlice";
import supervisorsSlice from "./slices/supervisorsSlice";
import noteBooksSlice from "./slices/noteBooksSlice";
import countrySlice from "./slices/countrySlice";
import contractsSlice from "./slices/contractsSlice";
import duesSlice from "./slices/duesSlice";
import userSlice from "./slices/userSlice";
import searchSlice from "./slices/searchSlice";
import expensesSlice from "./slices/expensesSlice";
import archieveSlice from "./slices/archieveSlice";

export const store = configureStore({
  reducer: {
    authSlice: authSlice,
    sidebarSlice: sidebarSlice,
    supervisorsSlice: supervisorsSlice,
    noteBooksSlice: noteBooksSlice,
    countrySlice: countrySlice,
    contractsSlice: contractsSlice,
    duesSlice: duesSlice,
    userSlice: userSlice,
    searchSlice: searchSlice,
    expensesSlice: expensesSlice,
    archieveSlice: archieveSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: true,
})



// const persistConfig = {
//   key: 'root',
//   storage,
// }

// const persistedAuthSlice = persistReducer(persistConfig, authSlice)
// const persistedSidebarSlice = persistReducer(persistConfig, sidebarSlice)
// const persistedSupervisorsSlice = persistReducer(persistConfig, supervisorsSlice)
// const persistedNoteBooksSlice = persistReducer(persistConfig, noteBooksSlice)
// const persistedCountrySlice = persistReducer(persistConfig, countrySlice)
// const persistedContractsSlice = persistReducer(persistConfig, contractsSlice)
// const persistedDuesSlice = persistReducer(persistConfig, duesSlice)
// const persistedUserSlice = persistReducer(persistConfig, userSlice)

// export const store = configureStore({
//   reducer: {
//     authSlice: persistedAuthSlice,
//     sidebarSlice: persistedSidebarSlice,
//     supervisorsSlice: persistedSupervisorsSlice,
//     noteBooksSlice: persistedNoteBooksSlice,
//     countrySlice: persistedCountrySlice,
//     contractsSlice: persistedContractsSlice,
//     duesSlice: persistedDuesSlice,
//     userSlice: persistedUserSlice
//   },
//   devTools: true,
//   middleware: [thunk]
// })



// export const persistor = persistStore(store)








