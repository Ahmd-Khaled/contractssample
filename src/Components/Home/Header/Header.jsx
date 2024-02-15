import { useEffect, useState, useRef } from "react";
import styles from "./styles.module.scss";
import { FiSearch } from "react-icons/fi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { HiOutlineMail } from "react-icons/hi";
import AccountMenu from "./AccountMenu/AccountMenu";
import NotificationMenu from "./NotificationMenu/NotificationMenu";
import EmailMenu from "./EmailMenu/EmailMenu";
import { useDispatch, useSelector } from "react-redux";
import { TbLayoutSidebarLeftCollapse, TbLayoutSidebarLeftExpand } from "react-icons/tb";
import { hideSidebar } from "../../../redux/slices/sidebarSlice";
import { useTranslation } from "react-i18next";
import { MdLogout } from "react-icons/md";
import { BiLogOutCircle } from "react-icons/bi";
import useLogout from "../../../hooks/auth/useLogout";
import { ToastContainer } from "react-toastify";
import Cookies from "js-cookie";
import useSearch from "../../../hooks/search/useSearch";
import Spinner from "../../Utils/Spinner/Spinner";

const Header = () => {
  const [logOutHandler, isLoadingLogout, errorLogout] = useLogout();


  const { t, i18n } = useTranslation();
  const searchRef = useRef(null);
  const searchMenuRef = useRef(null);
  const notificRef = useRef(null);
  const notificMenuRef = useRef(null);
  const emailRef = useRef(null);
  const emailMenuRef = useRef(null);
  const accMenuRef = useRef(null);
  const accountRef = useRef(null);
  const langMenuRef = useRef(null);
  const languageRef = useRef(null);

  const [lang, setLang] = useState("ar");

  const [isSearchMenuOpen, setIsSearchMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("Ar");
  const [imgName, setImgName] = useState("sa.svg");
  const [isNotificMenuOpen, setIsNotificMenuOpen] = useState(false);
  const [isEmailMenuOpen, setIsEmailMenuOpen] = useState(false);
  const [isAccMenuOpen, setIsAccMenuOpen] = useState(false);
  
  const closeAccMenuHandler = () => {
    setIsAccMenuOpen(false);
  };


  const showSearchMenu = () => {
    // console.log("Search Menu Clicked!");
    setIsSearchMenuOpen(true);
    setIsLangMenuOpen(false);
    setIsAccMenuOpen(false);
    setIsNotificMenuOpen(false);
    setIsEmailMenuOpen(false);
  }

  const showAccountMenu = () => {
    // console.log("Account Menu Clicked!");
    setIsAccMenuOpen(true);
    setIsSearchMenuOpen(false);
    setIsLangMenuOpen(false);
    setIsNotificMenuOpen(false);
    setIsEmailMenuOpen(false);
  }

  const showLanguageMenu = () => {
    // console.log("Language Menu Clicked!");
    setIsLangMenuOpen(true);
    setIsSearchMenuOpen(false);
    setIsAccMenuOpen(false);
    setIsNotificMenuOpen(false);
    setIsEmailMenuOpen(false);
  }

  const showNotifMenu = () => {
    // console.log("Notification Menu Clicked!");
    setIsNotificMenuOpen(true);
    setIsLangMenuOpen(false);
    setIsSearchMenuOpen(false);
    setIsAccMenuOpen(false);
    setIsEmailMenuOpen(false);
  }

  const showEmailMenu = () => {
    // console.log("Email Menu Clicked!");
    setIsEmailMenuOpen(true);
    setIsNotificMenuOpen(false);
    setIsLangMenuOpen(false);
    setIsSearchMenuOpen(false);
    setIsAccMenuOpen(false);
  }

  const selectLangHandler = (val) => {
    setSelectedLang(val);
    i18n.changeLanguage(val);
    localStorage.setItem("lang", val);

    setLang(val);
    if (val === "ar") {
      setImgName("sa.svg");
    } else if (val === "en") {
      setImgName("us.svg");
    }
    setIsLangMenuOpen(false);
  }

  useEffect(() => {
    setLang("ar");
    localStorage.setItem("i18nextLng", 'ar')
    
    if (localStorage.getItem("i18nextLng") === 'en' || localStorage.getItem("i18nextLng") === 'ar') {
      setLang(localStorage.getItem("i18nextLng"));
      // setLang(Cookies.get("i18nextLng"));
    } else {
      setLang("ar");
      localStorage.setItem("i18nextLng", 'ar')
    }

    if (lang === "ar") {
      setImgName("sa.svg");
    } else if (lang === "en") {
      setImgName("us.svg");
    }
  }, [lang])

  const dispatch = useDispatch();
  const { isOpen, isHidden } = useSelector((state) => state.sidebarSlice);

  const hideSideBarHandler = () => {
    dispatch(hideSidebar());
  }

  
  useEffect(() => {
    const currentSearch = searchRef.current;
    const currentSearchMenu = searchMenuRef.current;

    const currentNotific = notificRef.current;
    const currentnotificMenu = notificMenuRef.current;

    const currentEmail = notificRef.current;
    const currentEmailMenu = notificMenuRef.current;

    const currentAccountAvatar = accountRef.current;
    const currentAccMenu = accMenuRef.current;

    const currentLanguage = languageRef.current;
    const currentLangMenu = langMenuRef.current;


    window.addEventListener("mousedown", (e) => {    
      if (
        languageRef.current &&
        langMenuRef.current &&
        isLangMenuOpen &&
        !languageRef.current.contains(e.target) &&
        !langMenuRef.current.contains(e.target)
      ) {
        setIsLangMenuOpen(false);
      }
  
      if (
        searchRef.current &&
        searchMenuRef.current &&
        isSearchMenuOpen &&
        !searchRef.current.contains(e.target) &&
        !searchMenuRef.current.contains(e.target)
      ) {
        setIsSearchMenuOpen(false);
      }
  
      // if (
      //   currentNotific &&
      //   currentnotificMenu &&
      //   isNotificMenuOpen &&
      //   !currentNotific.contains(e.target) &&
      //   !currentnotificMenu.contains(e.target)
      // ) {
      //   setIsNotificMenuOpen(false);
      // }

      // if (
      //   emailRef.current &&
      //   emailMenuRef.current &&
      //   isEmailMenuOpen &&
      //   !emailRef.current.contains(e.target) &&
      //   !emailMenuRef.current.contains(e.target)
      // ) {
      //   setIsEmailMenuOpen(false);
      // }

      // if (
      //   accountRef.current &&
      //   accMenuRef.current &&
      //   isAccMenuOpen &&
      //   !accountRef.current.contains(e.target) &&
      //   !accMenuRef.current.contains(e.target)
      // ) {
      //   setIsAccMenuOpen(false);
      // }

      if (e.target !== notificRef.current && e.target !== notificMenuRef.current) {
      setIsNotificMenuOpen(false);
      }
      
      if (e.target !==  emailRef.current && e.target !== emailMenuRef.current) {
        setIsEmailMenuOpen(false);
      }

      if (e.target !==  accountRef.current && e.target !== accMenuRef.current) {
        setIsAccMenuOpen(false);
      }
  
    })

  }, [
    isLangMenuOpen,
    isSearchMenuOpen,
    isNotificMenuOpen,
    isEmailMenuOpen,
    isAccMenuOpen
  ]);

  // ---------------------------------------------------------------
  const [
    searchWord,
    searchWordError,
    onChangeSearchWord,
    onBlurSearchWord,
    onSubmit,
    searchResData,
    isLoadingSearch,
    errorSearch,
    loading
  ] = useSearch();

  return (
    <header className={styles.header}>
      {loading && <Spinner custom={true} />}
      {/* {errorLogin && <Error errMsg={errorLogin} />} */}
      <div onClick={hideSideBarHandler} className={styles.sideBarIcon}>
        {i18n.dir() === "ltr"
              ?  isHidden ? <TbLayoutSidebarLeftExpand /> : <TbLayoutSidebarLeftCollapse />
              :  isHidden ? <TbLayoutSidebarLeftCollapse /> : <TbLayoutSidebarLeftExpand />
        }
        
      </div>
      <div className={styles.search}>
        <form onSubmit={onSubmit} className={styles.searchBox}>
          <button><FiSearch /></button>
          <input 
            type="search" 
            placeholder="بحث في كل الأقسام..."
            name="searchWord"
            value={searchWord}
            onChange={onChangeSearchWord}
            onBlur={onBlurSearchWord}
          />
          <p className={styles.searchError}>{searchWordError}</p>
        </form>
        <div ref={searchRef} onClick={showSearchMenu} className={styles.searchIcon}>
          <FiSearch />
        </div>
        {
          isSearchMenuOpen ? (
            <div ref={searchMenuRef} className={styles.searchMenu}>
              <form onSubmit={onSubmit} className={styles.searchBox}>
                <button><FiSearch /></button>
                <input 
                  type="search" 
                  placeholder="بحث في كل الأقسام..."
                  name="searchWord"
                  value={searchWord}
                  onChange={onChangeSearchWord}
                  onBlur={onBlurSearchWord}
                />
                <p className={styles.searchError}>{searchWordError}</p>
              </form>
            </div>
          ) : null
        }
      </div>
      <div className={styles.menus}>
        <div className={styles.language}>
          <div ref={languageRef} onClick={showLanguageMenu} className={styles.selectedLang}>
            <img src={process.env.PUBLIC_URL + `/images/${imgName}`} alt="" />
          </div>
          {
            isLangMenuOpen ? (
              <ul ref={langMenuRef} className={styles.langMenu}>
                <li onClick={() => selectLangHandler("ar")}>
                  <img src={process.env.PUBLIC_URL + "/images/sa.svg"} alt="" />
                  <span>عربي</span>
                </li>
                <li onClick={() => selectLangHandler("en")}>
                  <img src={process.env.PUBLIC_URL + "/images/us.svg"} alt="" />
                  <span>English</span>
                </li>
              </ul>
            ) : null
          }
        </div>
        <div className={styles.notifications}>
          <div ref={notificRef} onClick={showNotifMenu} className={styles.notificIcon}>
            <IoIosNotificationsOutline />
            <span className={styles.notifNum}>5</span>
          </div>
          {
            isNotificMenuOpen ? <NotificationMenu notificMenuRef={notificMenuRef} /> : null
          }
        </div>
        <div className={styles.email}>
          <div ref={emailRef} onClick={showEmailMenu} className={styles.emailIcon}>
            <HiOutlineMail />
          </div>
          {
            isEmailMenuOpen ? <EmailMenu emailMenuRef={emailMenuRef} /> : null
          }
        </div>
        <div className={styles.account}>
          <div  className={styles.accWrapper}>
            <div className={styles.info}>
              {/* <h3 className={styles.name}>{loginResData?.user_name}</h3> */}
              <h3 className={styles.name}>{JSON.parse(Cookies.get("user_data")).user_name}</h3>
            </div>
            {/* <div ref={accountRef} className={styles.avatar}>
              <h2 className={styles.alias}>
                <span className={styles.firstL}>A</span>
                <span className={styles.firstL}>K</span>
              </h2>
            </div> */}
            <button onClick={logOutHandler} className={styles.logoutBtn}>
              <BiLogOutCircle />
            </button>
          </div>
        </div>
        {/* <div className={styles.account}>
          <div  className={styles.accWrapper}>
            <div onClick={showAccountMenu} className={styles.info}>
              <h3 className={styles.name}>Ahmed Khaled</h3>
            </div>
            <div ref={accountRef} onClick={showAccountMenu} className={styles.avatar}>
              <h2 className={styles.alias}>
                <span className={styles.firstL}>A</span>
                <span className={styles.firstL}>K</span>
              </h2>
            </div>
          </div>
          {
            isAccMenuOpen ? (
              <AccountMenu
                accMenuRef={accMenuRef}
                closeAccMenuHandler={closeAccMenuHandler} 
              />
            ) : null
          }
        </div> */}
      </div>
      <ToastContainer
        position={i18n.dir() === "rtl" ? "bottom-right" : "bottom-left"}
        autoClose={3000}
        limit={1}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={i18n.dir() === "rtl"}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="light"
      />
    </header>
  )
}

export default Header



    // if (e.target !==  searchRef.current && e.target !== searchMenuRef.current) {
    //   setIsSearchMenuOpen(false);
    // }

    // if (e.target !==  languageRef.current && e.target !== langMenuRef.current) {
    //   setIsLangMenuOpen(false);
    // }

    // if (e.target !== notificRef.current && e.target !== notificMenuRef.current) {
    //   setIsNotificMenuOpen(false);
    // }
    
    // if (e.target !==  emailRef.current && e.target !== emailMenuRef.current) {
    //   setIsEmailMenuOpen(false);
    // }

    // if (e.target !==  accountRef.current && e.target !== accMenuRef.current) {
    //   setIsAccMenuOpen(false);
    // }