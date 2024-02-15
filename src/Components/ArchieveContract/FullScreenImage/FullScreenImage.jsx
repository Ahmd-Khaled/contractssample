import styles from "./styles.module.scss";
import { IoMdCloseCircle } from "react-icons/io";

const FullScreenImage = ({ clickedImg, close, trueUrl }) => {
  return (
    <div className={styles.fullScreenImage}>
      <div className={styles.container}>
        <div className={styles.image}>
          <img
            className={styles.img}
            src={trueUrl ? clickedImg : URL.createObjectURL(clickedImg)}
            alt="contract"
          />
        </div>
        <IoMdCloseCircle onClick={close} className={styles.closeIcon} />
      </div>
    </div>
  );
};

export default FullScreenImage;
