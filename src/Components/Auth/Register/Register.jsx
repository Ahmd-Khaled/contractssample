import styles from "./styles.module.scss";
import { AiOutlineUser } from "react-icons/ai";
import { VscKey } from "react-icons/vsc";
import { BiLockOpen } from "react-icons/bi";
import { LuPhone } from "react-icons/lu";
import { HiOutlineMail } from "react-icons/hi";
import Input from "../Input/Input";

const Register = () => {


  return (
    <section className={styles.login}>
      <div className="secContainer">
        <div className={styles.wrapper}>
          <div className={styles.header}>
            <div className={styles.logo}>
              <img src={process.env.PUBLIC_URL + "/images/logo.png"} alt="" />
            </div>
            <p className={styles.text}>
              <span>Create Account</span>
            </p>
          </div>
          <div className={styles.content}>
            <form className={styles.form}>
              <Input
                isFirst={true}
                icon={<AiOutlineUser />}
                name="fullName"
                type="text"
                placeholder="Full Name*"
                errorMsg="Full Name is required"
              />
              <Input
                icon={<LuPhone />}
                name="mobile"
                type="text"
                placeholder="Mobile Number*"
              />
              <Input
                icon={<HiOutlineMail />}
                name="email"
                type="email"
                placeholder="E-mail Address*" 
              />
              <Input
                icon={<VscKey />}
                name="password"
                type="password"
                placeholder="Password*" 
              />
              <Input
                isLast={true}
                icon={<VscKey />}
                name="confPassword"
                type="password"
                placeholder="Confirm Password*" 
              />
              <div className={styles.loginBtn}>
                <button>
                  <BiLockOpen />
                  <span>Register</span>
                </button>
              </div>
            </form>
          </div>
          <div className={styles.footer}>
            <div className={styles.signUp}>
              <span>Already have an account ?</span>
              <a className={styles.link} href="/login">Login</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Register;