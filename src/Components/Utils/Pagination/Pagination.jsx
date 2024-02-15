import React from 'react'
import ReactPaginate from "react-paginate";
import { BiSolidChevronLeft, BiSolidChevronRight } from "react-icons/bi"
import styles from "./styles.module.scss";
import { useTranslation } from 'react-i18next';

const Pagination = ({ pageCount, onPress }) => {
  const { t, i18n } = useTranslation();

    const handlePageClick = (data) => {
      onPress(data.selected + 1)
    };

    return (
      <ReactPaginate
        breakLabel="..."
        nextLabel={i18n.dir() === "rtl" ? <BiSolidChevronLeft /> : <BiSolidChevronRight />}
        onPageChange={handlePageClick}
        marginPagesDisplayed={1}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel={i18n.dir() === "rtl" ? <BiSolidChevronRight /> : <BiSolidChevronLeft />}
        containerClassName={styles.pagination}
        pageClassName={styles.pageItem}
        pageLinkClassName={styles.pageLink}
        previousClassName={styles.pageItem}
        nextClassName={styles.pageItem}
        previousLinkClassName={styles.pageLink}
        nextLinkClassName={styles.pageLink}
        breakClassName={styles.pageItem}
        breakLinkClassName={styles.pageLink}
        activeClassName={styles.pageActive}
        // renderOnZeroPageCount={null}
      />
    )
}

export default Pagination



// import { BiSolidChevronLeft, BiSolidChevronRight } from "react-icons/bi"
// import styles from "./styles.module.scss";
// const Pagination = () => {
//   return (
//     <div className={styles.paginationBox}>
//       <ul className={styles.paginList}>
//         <li className={styles.paginItem}><BiSolidChevronRight /></li>
//         <li className={styles.paginItemActive}>1</li>
//         <li className={styles.paginItem}>2</li>
//         <li className={styles.paginItem}><BiSolidChevronLeft /></li>
//       </ul>
//     </div>
//   )
// }

// export default Pagination