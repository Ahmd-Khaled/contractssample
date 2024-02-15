import { t } from 'i18next';
import HELMET from '../../Components/Utils/HELMET/HELMET';
import Register from '../../Components/Auth/Register/Register';

const RegisterPage = () => {
  return (
    <>
      <HELMET title={t("meta-title-register")} description="Contracts Dashboard Register Page description" />
      <Register />
    </>
  )
}

export default RegisterPage