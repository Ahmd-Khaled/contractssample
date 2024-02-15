import { forwardRef } from "react";
import styles from "./styles.module.scss";
import { MdOutlineNoteAlt } from "react-icons/md";

const EmailMenu = forwardRef(function EmailMenu(props, emailMenuRef) {
  return (
    <div ref={emailMenuRef} className={styles.notifiMenu}>
      <div className={styles.head}>
        <p className={styles.title}>MESSAGES</p>
        <div className={styles.number}>4 New</div>
      </div>
      <div className={styles.body}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <div className={styles.imageActive}>
              <img src={process.env.PUBLIC_URL + "/images/avatar.png"} alt="" />
            </div>
            <div className={styles.text}>
              <h6 className={styles.title}>Margaret Govan</h6>
              <p className={styles.details}>I like your portfolio, let's start.</p>
              <p className={styles.time}>Today</p>
            </div>
          </li>
          <li className={styles.item}>
            <div className={styles.image}>
              <img src={process.env.PUBLIC_URL + "/images/avatar-s-2.png"} alt="" />
            </div>
            <div className={styles.text}>
              <h6 className={styles.title}>Bret Lezama</h6>
              <p className={styles.details}>I have seen your work, there is</p>
              <p className={styles.time}>Tuesday</p>
            </div>
          </li>
          <li className={styles.item}>
            <div className={styles.imageActive}>
              <img src={process.env.PUBLIC_URL + "/images/avatar-s-3.png"} alt="" />
            </div>
            <div className={styles.text}>
              <h6 className={styles.title}>Carie Berra</h6>
              <p className={styles.details}>Can we have call in this week ?</p>
              <p className={styles.time}>Friday</p>
            </div>
          </li>
          <li className={styles.item}>
            <div className={styles.image}>
              <img src={process.env.PUBLIC_URL + "/images/avatar-s-6.png"} alt="" />
            </div>
            <div className={styles.text}>
              <h6 className={styles.title}>Eric Alsobrook</h6>
              <p className={styles.details}>We have project party this saturday.</p>
              <p className={styles.time}>Last Month</p>
            </div>
          </li>
        </ul>
      </div>
      <div className={styles.footer}>
        <a className={styles.link} href="/">Read all messages</a>
      </div>
    </div>
  )
})

export default EmailMenu