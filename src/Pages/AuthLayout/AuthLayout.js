import { Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Sidebar, { SidebarItem } from '../../Components/Home/Sidebar'
import { BarChart3, Boxes, LayoutDashboard, LifeBuoy, Package, Receipt, Settings, UserCircle } from 'lucide-react'
import Header from "../../Components/Home/Header/Header";


const AuthLayout = () => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();

  return (
    <HelmetProvider>
      <main>
        <Outlet />
      </main>
    </HelmetProvider>
  )
}

export default AuthLayout;