import useSearch from "../../hooks/search/useSearch";
import styles from "./styles.module.scss";

const Search = () => {
  const [
    searchWord,
    searchWordError,
    onChangeSearchWord,
    onBlurSearchWord,
    onSubmit,
    searchResData,
    isLoadingSearch,
    errorSearch,
    loading,
  ] = useSearch();

  return (
    <section className={styles.search}>
      <div className={`mainContainer ${styles.container}`}>
        <div className={styles.head}>
          <h2 className={styles.title}>
            <span>نتائج البحث عن:</span>
            <span className={styles.searchWord}>Search Word</span>
            <span>في قسم</span>
            <span className={styles.searchSec}>الدفاتر</span>
          </h2>
        </div>
        <div className={`pt-4 h-full rounded-md bg-cyan-950 ${styles.content}`}>
          Search Results
        </div>
      </div>
    </section>
  );
};

export default Search;
