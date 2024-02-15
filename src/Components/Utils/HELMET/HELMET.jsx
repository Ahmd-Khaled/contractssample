import { Helmet } from "react-helmet-async"
import { useTranslation } from "react-i18next";

const HELMET = ({ title, description }) => {
  const { t, i18n } = useTranslation();
  return (
    <Helmet>
      <meta name="description" content={description} />
      <title>{t(title)}</title>
    </Helmet>
  )
}

export default HELMET;