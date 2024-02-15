import { MoreVertical, ChevronLast, ChevronFirst, PanelLeftClose, PanelRightClose } from "lucide-react"
import { useContext, useEffect, createContext, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { closeSidebar, openSidebar, toggleSidebar } from "../../redux/slices/sidebarSlice";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";

const SidebarContext = createContext()

export default function Sidebar({ children }) {
  const loggedUserName = JSON.parse(Cookies.get("user_data")).user_name;
  const loggedUserEmail = JSON.parse(Cookies.get("user_data")).email;

  let firstLetter = loggedUserName[0]

  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();

  const [expanded, setExpanded] = useState(true);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 992) {
        setExpanded(false);
        dispatch(closeSidebar());
      } else {
        setExpanded(true);
        dispatch(openSidebar());
      }
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleOpenSidebar = () => {
    setExpanded((curr) => !curr);
    dispatch(toggleSidebar())
  }
  const { isOpen, isHidden } = useSelector((state) => state.sidebarSlice);

  
  return (
    <aside className={` h-full z-50 sideBar fixed ${expanded && !isHidden ? "w-56" : isHidden ? "sideBarHidden"  : "w-16"}`}>
      <nav className="h-full flex flex-col bg-white border-r shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center">
          <img
            src={process.env.PUBLIC_URL + "/images/new-logo.svg"}
            className={`overflow-hidden transition-all ${
              expanded ? "w-10" : "w-0"
            }`}
            alt=""
          />
          <button
            onClick={handleOpenSidebar}
            className="p-1.5 colapBtn rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            {i18n.dir() === "ltr"
              ?  expanded ? <ChevronFirst /> : <ChevronLast />
              :  expanded ? <ChevronLast /> : <ChevronFirst />
            }
            {/* {expanded ? <PanelLeftClose /> : <PanelRightClose />} */}
          </button>
        </div>

        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3">{children}</ul>
        </SidebarContext.Provider>

        <div className="border-t flex p-3">
          {/* <img
            src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
            alt=""
            className="w-10 h-10 rounded-md"
          /> */}
          <div className="accountAlias w-10 h-10 rounded-md bg-slate-200 flex justify-center items-center font-semibold text-lg px-2">
            {firstLetter}
          </div>
          <div
            className={`
              flex justify-between items-center
              overflow-hidden transition-all ${expanded ? "w-52 ms-3" : "w-0"}
          `}
          >
            <div className="leading-4">
              <h4 className="font-semibold">{loggedUserName}</h4>
              <span className="text-xs text-gray-400">{loggedUserEmail}</span>
            </div>
            {/* <MoreVertical size={20} /> */}
          </div>
        </div>
      </nav>
    </aside>
  )
}

export function SidebarItem({ link, icon, text, active, alert }) {
  const { t, i18n } = useTranslation();
  const { expanded } = useContext(SidebarContext);

  const [isLinkActive, setIsLinkActive] = useState(false);
  
  return (
    <li
      className={`
        sidebarItem
        relative flex items-center paddY6 px-3 my-1
        font-medium rounded-md cursor-pointer
        transition-colors group
        ${
          isLinkActive
            ? "active bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
            : "notActive hover:bg-indigo-50 text-gray-600"
        }
    `}
    >
      <NavLink
        to={link}
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? setIsLinkActive(true) : setIsLinkActive(false)
        }
      >
        <div className="w-full">{icon}</div>
      </NavLink>
      <NavLink 
        to={link}
        className={`overflow-hidden transition-all ${
          expanded ? "w-52 ms-3" : "w-0"
        }`}
      >
        {text}
      </NavLink>
      {alert && (
        <div
          className={`alertIcon absolute ${i18n.dir() === "ltr" ? 'right-2' : 'left-2'}   w-2 h-2 rounded bg-indigo-600 ${
            expanded ? "" : "top-2"
          }`}
        />
      )}

      {!expanded && (
        <div
          className={`
          popUpItem 
          absolute ${i18n.dir() === "ltr" ? 'left-full' : 'right-full'}  rounded-md px-2 py-1 ms-6
          bg-indigo-100 text-indigo-800 text-sm
          invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
      `}
        >
          {text}
        </div>
      )}
    </li>
  )
}
