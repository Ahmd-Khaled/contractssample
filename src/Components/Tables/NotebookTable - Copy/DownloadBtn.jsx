import { useTranslation } from "react-i18next";
import { MdOutlineFileDownload } from "react-icons/md";
import { SiMicrosoftexcel } from "react-icons/si";
import * as XLSX from 'xlsx/xlsx.mjs';


const DownloadBtn = ({ data = [], fileName }) => {
  const { t, i18n } = useTranslation();
  return (
    <button
      className="download-btn"
      onClick={() => {
        const rows = data?.length ? data : [];
        const worksheet = XLSX.utils.json_to_sheet(rows);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1")
        XLSX.writeFile(workbook, fileName ? `${fileName}.xlsx` : "NoteBooks.xlsx");
      }}
    >
      <SiMicrosoftexcel size={26} />
      {t("table-download")}
      <MdOutlineFileDownload size={26} />
    </button>
  )
}

export default DownloadBtn