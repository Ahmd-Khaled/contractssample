import './i18n';
import './index.scss';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
// import { persistor, store } from './redux/store';
// import { PersistGate } from 'redux-persist/integration/react';
import Layout from './Pages/Layout/Layout';
import HomePage from './Pages/Home/HomePage';

import Spinner from './Components/Utils/Spinner/Spinner';
import ErrorPage from './Pages/Error/ErrorPage';
import LoginPage from './Pages/Login/LoginPage';
import RegisterPage from './Pages/Register/RegisterPage';
import AuthLayout from './Pages/AuthLayout/AuthLayout';
import ContractsPage from './Pages/Contracts/ContractsPage';
import AddNoteBookPage from './Pages/AddNoteBook/AddNoteBookPage';
import AllNoteBooksPage from './Pages/AllNoteBooks/AllNoteBooksPage';
import DeliverNoteBookPage from './Pages/DeliverNoteBook/DeliverNoteBookPage';
import SupervisorsPage from './Pages/Supervisors/SupervisorsPage';
import NoteBookPage from './Pages/NoteBook/NoteBookPage';
import ContractPage from './Pages/Contract/ContractPage';
import SupervisorPage from './Pages/Supervisor/SupervisorPage';
import AddPositionPage from './Pages/AddPosition/AddPositionPage';
import DeductionsPage from './Pages/Deductions/DeductionsPage';
import BonusPage from './Pages/Bonus/BonusPage';
import AddDeductionPage from './Pages/AddDeduction/AddDeductionPage';
import AddBonusPage from './Pages/AddBonus/AddBonusPage';
import UserOperationsPage from './Pages/UserOperations/UserOperationsPage';
import SearchPage from './Pages/Search/SearchPage';
import SettlementsPage from './Pages/Settlements/SettlementsPage';
import WithdrowalsPage from './Pages/Withdrowals/WithdrowalsPage';
import ExpensesPage from './Pages/Expenses/ExpensesPage';
import ArchieveContractPage from './Pages/ArchieveContract/ArchieveContractPage';
import AddContractToArchivePage from './Pages/ArchieveContract/AddContractToArchivePage';

const LazyHomePage = React.lazy(() => import("./Pages/Home/HomePage"));

const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    errorElement: <ErrorPage type="1" />,
    children: [
      {
        path: "/login",
        element: <LoginPage />,
      },
      // {
      //   path: "/register",
      //   element: <RegisterPage />,
      // },
    ]
  },
  {
    element: <Layout />,
    errorElement: <ErrorPage type="2" />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/all-notebooks",
        element: <AllNoteBooksPage />,
      },
      {
        path: "/all-notebooks/:id",
        element: <NoteBookPage />,
      },
      {
        path: "/contracts/:contractId",
        element: <ContractPage />,
      },
      {
        path: "/add-notebook",
        element: <AddNoteBookPage />,
      },
      {
        path: "/deliver-notebook",
        element: <DeliverNoteBookPage />,
      },
      {
        path: "/supervisors",
        element: <SupervisorsPage />,
      },
      {
        path: "/supervisors/:superId",
        element: <SupervisorPage />,
      },
      {
        path: "/contracts",
        element: <ContractsPage />,
      },
      {
        path: "/add-position",
        element: <AddPositionPage />,
      },
      {
        path: "/deductions",
        element: <DeductionsPage />,
      },
      {
        path: "/deductions/add-deduction",
        element: <AddDeductionPage />,
      },
      {
        path: "/bonus",
        element: <BonusPage />,
      },
      {
        path: "/bonus/add-bonus",
        element: <AddBonusPage />,
      },
      {
        path: "/settlements",
        element: <SettlementsPage />,
      },
      {
        path: "/withdrowals",
        element: <WithdrowalsPage />,
      },
      {
        path: "/user-operations/:userId",
        element: <UserOperationsPage />,
      },
      {
        path: "/search",
        element: <SearchPage />,
      },
      {
        path: "/statistics",
        element: <p>Statistics Page</p>,
      },
      {
        path: "/expenses",
        element: <ExpensesPage />,
      },
      {
        path: "/expenses/add-parent-type",
        element: <ExpensesPage />,
      },
      {
        path: "/expenses/add-child-type",
        element: <ExpensesPage />,
      },
      {
        path: "/expenses/all-types",
        element: <ExpensesPage />,
      },
      {
        path: "/archieve",
        element: <ArchieveContractPage />,
      },
      {
        path: "/archieve/add-to-archieve",
        element: <AddContractToArchivePage />,
      },
      {
        path: "/inventory",
        element: <p>Inventory Page</p>,
      },
      {
        path: "/orders",
        element: <p>Orders Page</p>,
      },
      {
        path: "/billings",
        element: <p>Billings Page</p>,
      },
      {
        path: "/settings",
        element: <p>Settings Page</p>,
      },
      {
        path: "/help",
        element: <p>Help Page</p>,
      },
    ]
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
      <RouterProvider router={router} />
    {/* <PersistGate loading={null} persistor={persistor}>
    </PersistGate> */}
  </Provider>
);

