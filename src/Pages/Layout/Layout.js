import { Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Sidebar, { SidebarItem } from '../../Components/Home/Sidebar'
import { BarChart3, BookX, Boxes, CalendarPlus, CheckCheck, Contact, DollarSign, LayoutDashboard, LifeBuoy, Package, PlusSquare, Receipt, Settings, Truck, UserCircle, UserRoundPlus, Network, CalendarX2, ArchiveRestore } from 'lucide-react'
import Header from "../../Components/Home/Header/Header";
import { useSelector } from "react-redux";
import withGuard from "../../Components/Utils/withGuard/withGuard";

const Layout = () => {
  const { t, i18n } = useTranslation();
  // style={{direction: i18n.dir() === "ltr" ? "ltr" : "rtl"}}
  document.body.dir = i18n.dir();
  
  const { isOpen, isHidden } = useSelector((state) => state.sidebarSlice);


  return (
    <HelmetProvider>
      <main className=" w-full flex">
        <Sidebar>
          <SidebarItem link="/" icon={<LayoutDashboard size={20} />} text={t("sidebar-text1")} alert />
          <SidebarItem link="/add-notebook" icon={<PlusSquare size={20} />} text="إضافة دفتر"  />
          <SidebarItem link="/all-notebooks" icon={<Contact size={20} />} text="عرض الدفاتر"  />
          <SidebarItem link="/deliver-notebook" icon={<Truck size={20} />} text="تسليم الدفاتر" />
          <hr className="sidebarHr my-1 border-slate-500" />
          <SidebarItem link="/supervisors" icon={<UserCircle size={20} />} text="المشرفين"  />
          <SidebarItem link="/add-position" icon={<UserRoundPlus size={20} />} text="إضافة موظف"  />
          <hr className="sidebarHr my-1 border-slate-500" />
          <SidebarItem link="/deductions" icon={<CalendarX2 size={20} />} text="الخصومات"  />
          <SidebarItem link="/bonus" icon={<CalendarPlus size={20} />} text="الحوافز"  />
          <SidebarItem link="/settlements" icon={<DollarSign size={20} />} text="العمولات"  />
          <SidebarItem link="/withdrowals" icon={<DollarSign size={20} />} text="السحب"  />
          <SidebarItem link="/expenses/all-types" icon={<Network size={20} />} text="تصنيفات المصاريف"  />
          <SidebarItem link="/archieve" icon={<ArchiveRestore size={20} />} text="الأرشيف"  />
          {/* <SidebarItem link="/expenses" icon={<FaFileInvoiceDollar size={20} />} text={t("sidebar-text3")}  /> */}
          {/* <SidebarItem link="/statistics" icon={<BarChart3 size={20} />} text={t("sidebar-text4")}  /> */}
          {/* <SidebarItem link="/inventory" icon={<Boxes size={20} />} text={t("sidebar-text6")}  /> */}
          {/* <SidebarItem link="/orders" icon={<Package size={20} />} text={t("sidebar-text7")}  /> */}
          {/* <SidebarItem link="/billings" icon={<Receipt size={20} />} text={t("sidebar-text8")}  /> */}
          {/* <hr className="sidebarHr my-3 border-slate-500" /> */}
          {/* <SidebarItem link="/settings" icon={<Settings size={20} />} text={t("sidebar-text9")}  /> */}
          {/* <SidebarItem link="/help" icon={<LifeBuoy size={20} />} text={t("sidebar-text10")}  /> */}
        </Sidebar>
        <div className={`w-full ${isOpen && !isHidden ? "ms-56" : isHidden ? "" : "ms-16"}`}>
          <Header />
          <Outlet />
          <footer className="footer w-full p-4  flex flex-col justify-between items-center gap-1 sm:flex-row">
            <p className="text-slate-500">{t("footer-text1")} <a className="text-blue-400 font-semibold" href="/">{t("footer-text2")}</a></p>
            {/* <p className="text-slate-500">{t("footer-text3")}</p> */}
          </footer>
        </div>
      </main>
    </HelmetProvider>
  )
}

export default withGuard(Layout);