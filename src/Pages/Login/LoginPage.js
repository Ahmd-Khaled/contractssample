import { t } from 'i18next';
import Login from '../../Components/Auth/Login/Login';
import HELMET from '../../Components/Utils/HELMET/HELMET';

const LoginPage = () => {
  return (
    <>
      <HELMET title={t("meta-title-login")} description="Contracts Dashboard Login Page description" />
      <Login />
    </>
  )
}

export default LoginPage