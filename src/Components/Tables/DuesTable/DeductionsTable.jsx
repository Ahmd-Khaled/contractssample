import { createColumnHelper, flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, useReactTable } from "@tanstack/react-table";
import { useEffect, useState } from "react";
import { FaChevronCircleRight, FaChevronCircleLeft } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import DownloadBtn from "./DownloadBtn";
import SearchInput from "./SearchInput";
import { NavLink } from "react-router-dom";
import FilterDuesTable from "../FilterDuesTable/FilterDuesTable";


const DeductionsTable = ({ tableList, pageHandler, page, totalCount, sumCount, filterDateHandler }) => {
  const { t, i18n } = useTranslation();
  const totalPages = Math.ceil(totalCount/10);

  const nextPageHandler = () => {
    if (page < totalPages) {
      pageHandler(prev => prev + 1);
    }
  }
  
  const prevPageHandler = () => {
    if (page > 1) {
      pageHandler(prev => prev - 1);
    }
  }
  // -----------------------------------------------------------
  const columnHelper = createColumnHelper();

  const columns = [
    columnHelper.accessor("", {
      id: "#",
      cell: (info) => <span>{info.row.index + 1}</span>,
      header: "#",
    }),
    columnHelper.accessor("user", {
      cell: (info) => <NavLink className="underline" to={`/supervisors/${info.getValue()[0]}`}>{info.getValue()[1]}</NavLink>,
      header: "الموظف",
    }),
    columnHelper.accessor("amount", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "المبلغ",
    }),
    // columnHelper.accessor("type", {
    //   cell: (info) => <span>{info.getValue()}</span>,
    //   header: "النوع",
    // }),
    columnHelper.accessor("reason", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "السبب",
    }),
    columnHelper.accessor("by", {
      cell: (info) => <NavLink className="underline" to={`/supervisors/${info.getValue()[0]}`}>{info.getValue()[1]}</NavLink>,
      header: "المشرف",
    }),
    columnHelper.accessor("created_at", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "تاريخ الخصم",
    }),
  ];

  // const [data] = useState(() => [...tableList]);

  const [data, setData] = useState([]);

  useEffect(() => {
    setData([...tableList])
  }, [tableList])

  console.log("___***___***_______________Table Data", tableList)
  const [globalFilter, setGlobalFilter] = useState("");

  const table = useReactTable({
    data,
    columns,
    state: {
      globalFilter,
    },
    getFilteredRowModel: getFilteredRowModel(),
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });
  
  return (
    <div className="p-2 max-w-5xl mx-auto text-white fill-gray-400">
      <div className="flex justify-between mb-2">
        <div className="w-full flex items-center gap-1">
          <IoSearch />
          <SearchInput 
            value={globalFilter ?? ""}
            onChange={(value) => setGlobalFilter(String(value))}
            className="p-2 block bg-slate-700 text-white rounded-md outline-none border-b-2 w-1/5 focus:w-1/3 duration-300 border-indigo-500"
            placeholder={t("table-search")}
          />
        </div>
        <DownloadBtn data={data} fileName="عمليات الخصم" />
      </div>
      <div className="w-full flex items-center justify-between gap-1  z-50 mb-2">
        <FilterDuesTable 
          filterDateHandler={filterDateHandler} 
          from="&date_from="
          to="&date_to="
        />
        <div className="p-1 px-2 py-1 bg-red-400 text-white rounded-sm flex items-center gap-2">
          <span className="">إجمالي الخصم:</span>
          <span className=" text-emerald-950 font-semibold text-lg">{sumCount?.sum_deductions_sar}ريال</span> &
          <span className=" text-emerald-950 font-semibold text-lg">{sumCount?.sum_deductions_uae}درهم</span>
        </div>
      </div>
      <table className="border border-gray-700 w-full text-left">
        <thead className="bg-cyan-600">
          {
            table.getHeaderGroups().map((getHeaderGroup) => (
              <tr key={getHeaderGroup.id}>
                {
                  getHeaderGroup.headers.map((header) => (
                    <th key={header.id} className="capitalize px-3.5 py-2">
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                    </th>
                  ))
                }
              </tr>
            ))
          }
        </thead>
        <tbody>
          {
            table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row, i) => (
                <tr key={row.id} className={`
                  ${i % 2 === 0 ? 'bg-gray-900' : 'bg-gray-800'}
                `}>
                  {
                    row.getVisibleCells().map((cell) => (
                      <td key={cell.id} className={`px-3.5 py-2`}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    ))
                  }
                </tr>
              ))
            ) : (
                <tr className="text-center h-32">
                  <td colSpan={12}>{t("table-searchNotFound")}</td>
                </tr>
            )
          }
        </tbody>
      </table>
      {/* Pagination Section */}
      <div className="flex items-center justify-center mt-2 gap-2">
        <button 
          onClick={nextPageHandler}
          disabled={page === totalPages} 
          className="p-1 border border-gray-300 px-2 disabled:opacity-30"
        >
          <FaChevronCircleRight size={26} />
        </button>
        <button 
          onClick={prevPageHandler}
          disabled={page === 1} 
          className="p-1 border border-gray-300 px-2 disabled:opacity-30"
        >
          <FaChevronCircleLeft size={26} />
        </button>
        <span className="flex items-center gap-1">
          <div>{t("table-page")}</div>
          <strong>
            {page} {t("table-of")}
            {totalPages}
          </strong>
        </span>

        {/* <button
          onClick={() => {
            i18n.dir() === "ltr" ?  table.previousPage() : table.nextPage();
          }}
          disabled={i18n.dir() === "ltr" ?  !table.getCanPreviousPage() : !table.getCanNextPage()}
          className="p-1 border border-gray-300 px-2 disabled:opacity-30"
        >
          {i18n.dir() === "ltr" ? <FaChevronCircleLeft size={26} /> : <FaChevronCircleRight size={26} />}
        </button>
        <button
          onClick={() => {
            i18n.dir() === "ltr" ?  table.nextPage() : table.previousPage();
          }}
          disabled={i18n.dir() === "ltr" ? !table.getCanNextPage() : !table.getCanPreviousPage()}
          className="p-1 border border-gray-300 px-2 disabled:opacity-30"
        >
          {i18n.dir() === "ltr" ? <FaChevronCircleRight size={26} /> : <FaChevronCircleLeft size={26} />}
        </button>
        <span className="flex items-center gap-1">
          <div>{t("table-page")}</div>
          <strong>
            {table.getState().pagination.pageIndex + 1} {t("table-of")}
            {table.getPageCount()}
          </strong>
        </span>
        <span className="flex items-center gap-1">{t("table-goToPage")}
          <input
            type="number"
            defaultValue={table.getState().pagination.pageIndex + 1} 
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              table.setPageIndex(page);
            }}
            className="border border-gray-300 p-1 rounded w-16 bg-transparent"
          />
        </span>
        <select
          value={table.getState().pagination.pageSize}
          onChange={(e) => { table.setPageSize(Number(e.target.value)) }}
          className="p-1 bg-transparent"
        >
          {
            [10, 20, 30, 50, 100].map((pageSize) => (
              <option className="bg-transparent text-gray-700 rou" key={pageSize} value={pageSize}>{t("table-show")}{pageSize}</option>
            ))
          }
        </select> */}
      </div>
    </div>
  )
}

export default DeductionsTable


// {
//   <table>

//   </table>
// }