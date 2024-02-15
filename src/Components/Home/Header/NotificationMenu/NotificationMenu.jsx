import { forwardRef } from "react";
import styles from "./styles.module.scss";
import { MdOutlineNoteAlt } from "react-icons/md";

const NotificationMenu = forwardRef(function NotificationMenu(props, notificMenuRef) {
  return (
    <div ref={notificMenuRef} className={styles.notifiMenu}>
      <div className={styles.head}>
        <p className={styles.title}>Notifications</p>
        <div className={styles.number}>5 New</div>
      </div>
      <div className={styles.body}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <div className={styles.image}>
              <MdOutlineNoteAlt />
            </div>
            <div className={styles.text}>
              <h6 className={styles.title}>You have new order!</h6>
              <p className={styles.details}>Lorem ipsum dolor sit amet, consectetuer elit.</p>
              <p className={styles.time}>30 minutes ago</p>
            </div>
          </li>
          <li className={styles.item}>
            <div className={styles.image}>
              <MdOutlineNoteAlt />
            </div>
            <div className={styles.text}>
              <h6 className={styles.title}>99% Server load</h6>
              <p className={styles.details}>Aliquam tincidunt mauris eu risus.</p>
              <p className={styles.time}>Five hour ago</p>
            </div>
          </li>
          <li className={styles.item}>
            <div className={styles.image}>
              <MdOutlineNoteAlt />
            </div>
            <div className={styles.text}>
              <h6 className={styles.title}>Warning notifixation</h6>
              <p className={styles.details}>Vestibulum auctor dapibus neque.</p>
              <p className={styles.time}>Today</p>
            </div>
          </li>
          <li className={styles.item}>
            <div className={styles.image}>
              <MdOutlineNoteAlt />
            </div>
            <div className={styles.text}>
              <h6 className={styles.title}>Complete the task</h6>
              <p className={styles.details}>Lorem ipsum dolor sit amet, consectetuer elit.</p>
              <p className={styles.time}>Last Week</p>
            </div>
          </li>
          <li className={styles.item}>
            <div className={styles.image}>
              <MdOutlineNoteAlt />
            </div>
            <div className={styles.text}>
              <h6 className={styles.title}>Generate monthly report</h6>
              <p className={styles.details}>Lorem ipsum dolor sit amet, consectetuer elit.</p>
              <p className={styles.time}>Last Month</p>
            </div>
          </li>
        </ul>
      </div>
      <div className={styles.footer}>
        <a className={styles.link} href="/">Read all notifications</a>
      </div>
    </div>
  )
})

export default NotificationMenu