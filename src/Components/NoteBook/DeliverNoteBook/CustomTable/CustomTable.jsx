import { useEffect, useRef } from "react";
import styles from "./styles.module.scss"
import { IoSearch } from "react-icons/io5";

const CustomTable = ({ title }) => {

  const rowRef = useRef(null);
  const ref = useRef(null);
  

  useEffect(() => {
    const allRows = rowRef.current;
    console.log("allRows: ", allRows);

    // const ref = (el) => {ref.current[index] = el}
  }, []);

  
  const searchHandler = (e) => {
    console.log(e.target.value);

  }

  return (
    <section className={styles.table}>
      <div className={styles.head}>
        <h1>{title}</h1>
        <div className={styles.inputGroup}>
          <input onChange={searchHandler} type="search" placeholder="بحث..." />
          <IoSearch />
        </div>
      </div>
      <div className={styles.body}>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>Customer</th>
              <th>Location</th>
              <th>Order Date</th>
              <th>Status</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr ref={rowRef}>
              <td>1</td>
              <td>
                <div className={styles.image}>
                  <img src={process.env.PUBLIC_URL + `/images/table/Zinzu Chan Lee.jpg`} alt="" />
                  <span>Zinzu Chan Lee</span>
                </div>
              </td>
              <td>Cairo</td>
              <td>24 Dec, 2023</td>
              <td>
                <p className={`${styles.status} ${styles.delivered}`}>Delivered</p>
              </td>
              <td><strong>$150.50</strong></td>
            </tr>
            <tr ref={rowRef}>
              <td>2</td>
              <td>
                <div className={styles.image}>
                  <img src={process.env.PUBLIC_URL + `/images/table/Zinzu Chan Lee.jpg`} alt="" />
                  <span>Zinzu Chan Lee</span>
                </div>
              </td>
              <td>Cairo</td>
              <td>24 Dec, 2023</td>
              <td>
                <p className={`${styles.status} ${styles.cancelled}`}>Cancelled</p>
              </td>
              <td><strong>$150.50</strong></td>
            </tr>
            <tr ref={rowRef}>
              <td>3</td>
              <td>
                <div className={styles.image}>
                  <img src={process.env.PUBLIC_URL + `/images/table/Zinzu Chan Lee.jpg`} alt="" />
                  <span>Zinzu Chan Lee</span>
                </div>
              </td>
              <td>Cairo</td>
              <td>24 Dec, 2023</td>
              <td>
                <p className={`${styles.status} ${styles.pending}`}>Pending</p>
              </td>
              <td><strong>$150.50</strong></td>
            </tr>
            <tr ref={rowRef}>
              <td>4</td>
              <td>
                <div className={styles.image}>
                  <img src={process.env.PUBLIC_URL + `/images/table/Zinzu Chan Lee.jpg`} alt="" />
                  <span>Zinzu Chan Lee</span>
                </div>
              </td>
              <td>Cairo</td>
              <td>24 Dec, 2023</td>
              <td>
                <p className={`${styles.status} ${styles.shipped}`}>Shipped</p>
              </td>
              <td><strong>$150.50</strong></td>
            </tr>
            <tr ref={rowRef}>
              <td>5</td>
              <td>
                <div className={styles.image}>
                  <img src={process.env.PUBLIC_URL + `/images/table/Zinzu Chan Lee.jpg`} alt="" />
                  <span>Zinzu Chan Lee</span>
                </div>
              </td>
              <td>Cairo</td>
              <td>24 Dec, 2023</td>
              <td>
                <p className={`${styles.status} ${styles.delivered}`}>Delivered</p>
              </td>
              <td><strong>$150.50</strong></td>
            </tr>
            <tr ref={rowRef}>
              <td>6</td>
              <td>
                <div className={styles.image}>
                  <img src={process.env.PUBLIC_URL + `/images/table/Zinzu Chan Lee.jpg`} alt="" />
                  <span>Zinzu Chan Lee</span>
                </div>
              </td>
              <td>Cairo</td>
              <td>24 Dec, 2023</td>
              <td>
                <p className={`${styles.status} ${styles.cancelled}`}>Cancelled</p>
              </td>
              <td><strong>$150.50</strong></td>
            </tr>
            <tr ref={rowRef}>
              <td>7</td>
              <td>
                <div className={styles.image}>
                  <img src={process.env.PUBLIC_URL + `/images/table/Zinzu Chan Lee.jpg`} alt="" />
                  <span>Zinzu Chan Lee</span>
                </div>
              </td>
              <td>Cairo</td>
              <td>24 Dec, 2023</td>
              <td>
                <p className={`${styles.status} ${styles.pending}`}>Pending</p>
              </td>
              <td><strong>$150.50</strong></td>
            </tr>
            <tr ref={rowRef}>
              <td>8</td>
              <td>
                <div className={styles.image}>
                  <img src={process.env.PUBLIC_URL + `/images/table/Zinzu Chan Lee.jpg`} alt="" />
                  <span>Zinzu Chan Lee</span>
                </div>
              </td>
              <td>Cairo</td>
              <td>24 Dec, 2023</td>
              <td>
                <p className={`${styles.status} ${styles.shipped}`}>Shipped</p>
              </td>
              <td><strong>$150.50</strong></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default CustomTable