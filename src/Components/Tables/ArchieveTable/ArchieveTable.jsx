import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useEffect, useMemo, useState } from "react";
import { FaChevronCircleRight, FaChevronCircleLeft } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import DownloadBtn from "./DownloadBtn";
import SearchInput from "./SearchInput";
import { NavLink } from "react-router-dom";
import FilterArchieveTable from "../FilterArchieveTable/FilterArchieveTable";



const ArchieveTable = ({ fullScreenHandler, tableList, pageHandler, page, totalCount, setFilterParams, archived_count, not_archived_count, per_page }) => {
  const [data, setData] = useState([]);
  const [archiveFiles, setArchiveFiles] = useState([]);

  let filesArchived;

  console.log("_________filesArchived_______:", filesArchived)

  useEffect(() => {
    setData([...tableList])
  }, [tableList])

  const { t, i18n } = useTranslation();
  const totalPages = Math.ceil(totalCount/per_page);

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
// ---------------------------------------------------------------------------
  const columnHelper = createColumnHelper();

  const columns = [
    // columnHelper.accessor("", {
    //   id: "#",
    //   cell: (info) => <span>{info.row.index + 1}</span>,
    //   header: "#",
    // }),
    columnHelper.accessor("contract_id", {
      cell: (info) => (
        <NavLink className="underline" to={`/contracts/${info.getValue()}`}>
          {info.getValue()}
        </NavLink>
      ),
      header: "ID",
    }),
    columnHelper.accessor("serial_number", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "رقم المسلسل",
    }),
    columnHelper.accessor("country", {
      cell: (info) => <span className={info.getValue() === "KSA" ? "text-red-500" : "text-green-400"}>{info.getValue()}</span>,
      header: "الدولة",
    }),
    columnHelper.accessor("delegate_id", {
      cell: (info) => <span>{info.getValue() === null ? "No" : info.getValue()}</span>,
      header: "المندوب",
      // footer: (info) => info.column.id,
    }),
    columnHelper.accessor("attachments", {
      cell: (info, renderValue) => {
        // setArchiveFiles(info.getValue())
          // console.log("_________archiveFiles _getValue______:", info.getValue())
        // if (info.getValue() !== null) {
        // }
        return <span className={info.getValue() === null ? "bg-red-400 text-white" : ""}>{info.renderValue()}</span>
      },
      header: "عرض صور الأرشيف",

    }),
    columnHelper.accessor("created_at", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "أنشأ في",
    }),
  ];

  const [globalFilter, setGlobalFilter] = useState("");

  const table = useReactTable({
    data,
    columns,
    state: {
      globalFilter,
    },
    renderFallbackValue: "لا يوجد",
    getFilteredRowModel: getFilteredRowModel(),
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  useEffect(() => {
    table.setPageSize(50);
  }, [])

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
        <DownloadBtn data={data} fileName="أرشيف العقود" />
      </div>
      {/* <div className="w-full flex items-center  z-50 mb-2">
        <FilterArchieveTable setFilterParams={setFilterParams} />
      </div> */}
      <div className="w-full flex items-center justify-between gap-1  z-50 mb-2">
        <FilterArchieveTable setFilterParams={setFilterParams} />
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 p-1 px-2 py-1 rounded-sm  bg-yellow-100 text-blue-400">
            <span className="font-semibold text-sm">الإجمالي:</span>
            <span className="font-semibold text-sm">{totalCount}</span>
          </div>
          <div className="flex items-center gap-1 p-1 px-2 py-1 rounded-sm  bg-green-500 text-white">
            <span className="font-semibold text-sm">مأرشف:</span>
            <span className="font-semibold text-sm">{archived_count}</span>
          </div>
          <div className="flex items-center gap-1 p-1 px-2 py-1 rounded-sm  bg-red-500 text-white">
            <span className="font-semibold text-sm">غير مأرشف:</span>
            <span className="font-semibold text-sm">{not_archived_count}</span>
          </div>
        </div>
      </div>
      <table className="border border-gray-700 w-full text-right">
        <thead className="bg-cyan-600">
          {table.getHeaderGroups().map((getHeaderGroup) => (
            <tr key={getHeaderGroup.id}>
              {getHeaderGroup.headers.map((header) => (
                <th key={header.id} className="capitalize px-3.5 py-2">
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.length ? (
            table.getRowModel().rows.map((row, i) => (
              <tr
                key={row.id}
                className={`
                  ${i % 2 === 0 ? "bg-gray-900" : "bg-gray-800"}
                `}
              >
                {row.getVisibleCells().map((cell) => {
                  if (typeof cell.getValue() === "object") {
                    filesArchived = cell.getValue();
                  }
                  return (
                  <td
                    key={cell.id}
                    className={` ${
                      cell.getValue() === null ? " font-semibold" : ""
                    } px-3.5 py-2`}
                  >
                    {cell.getValue() 
                      === "KSA" ? <span className="text-red-400">السعودية</span> 
                      : cell.getValue() === "UAE" ? <span className="text-green-400">الإمارات</span> 
                      : cell.getValue() === null ? <span className="text-red-400">{cell.renderValue()}</span>
                      : typeof cell.getValue() === "object" ? <div className="flex items-center gap-2">
                        {cell.getValue()[0] ? <img onClick={() => fullScreenHandler(cell.getValue(), cell.getValue()[0].file)} className="w-8 h-8 rounded-sm contractImg" src={cell.getValue()[0].file} alt="1" /> : null}
                        {cell.getValue()[1] ? <img onClick={() => fullScreenHandler(cell.getValue(), cell.getValue()[1].file)} className="w-8 h-8 rounded-sm testmonialImg" src={cell.getValue()[1].file} alt="1" /> : null}
                        {cell.getValue()[2] ? <img onClick={() => fullScreenHandler(cell.getValue(), cell.getValue()[2].file)} className="w-8 h-8 rounded-sm boardImg" src={cell.getValue()[2].file} alt="2" /> : null}
                        {cell.getValue()[3] ? <img onClick={() => fullScreenHandler(cell.getValue(), cell.getValue()[3].file)} className="w-8 h-8 rounded-sm bannerImg" src={cell.getValue()[3].file} alt="3" /> : null}
                        {/* <img className="w-4 h-4 rounded-sm"  src={cell.getValue()[3].file} alt="4" /> */}
                      </div>
                      : flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                )
                })}
              </tr>
            ))
          ) : (
            <tr className="text-center h-32">
              <td colSpan={12}>لم يتم العثور على نتائج!</td>
            </tr>
          )}
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

      </div>
      {/* <div className="flex items-center justify-center mt-2 gap-2">
        <button
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
            [10, 20, 30, 50].map((pageSize) => (
              <option className="bg-transparent text-gray-700 rou" key={pageSize} value={pageSize}>{t("table-show")}{pageSize}</option>
            ))
          }
        </select>
      </div> */}
    </div>
  );
};

export default ArchieveTable;

// {
//   <table>

//   </table>
// }
