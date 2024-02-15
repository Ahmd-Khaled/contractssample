import { createArrayFromNum } from '../../../utils/usefulFunctions';
import { ImStarFull } from "react-icons/im";
import styles from "./styles.module.scss";

const RatingStars = ({rate}) => {
  const starYellowList = createArrayFromNum(rate)
  const starGrayList = createArrayFromNum(Math.ceil(5 - rate));
  return (
    <div className={styles.stars}>
      {
        starYellowList?.map((item, index) => (
          <ImStarFull className={styles.starYellow} key={index} />
        ))
      }
      {
        starGrayList?.map((item, index) => (
          <ImStarFull className={styles.starGray} key={index} />
        ))
      }
    </div>
  )
}

export default RatingStars