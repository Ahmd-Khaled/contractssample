import { useTranslation } from "react-i18next";
import styles from "./styles.module.scss";
import { useEffect, useState } from "react";

const ChooseLanguage = () => {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState("ar");
  
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("Ar");
  const [imgName, setImgName] = useState("sa.svg");
  
  const showLanguageMenu = () => {
    console.log("Language Menu Clicked!");
    setIsLangMenuOpen(prevState => !prevState);
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
    i18n.changeLanguage("ar");
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


  return (
    <div className={styles.language}>
      <div  onClick={showLanguageMenu} className={styles.selectedLang}>
        <img src={process.env.PUBLIC_URL + `/images/${imgName}`} alt="" />
      </div>
      {
        isLangMenuOpen ? (
          <ul className={styles.langMenu}>
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
  )
}

export default ChooseLanguage