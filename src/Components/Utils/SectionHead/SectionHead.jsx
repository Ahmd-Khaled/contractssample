import styles from "./styles.module.scss";

const SectionHead = ({title}) => {
  return (
    <div className={styles.head}>
      <div className="pageTitleBox">
        <h1 className="pageTitle">{title}</h1>
      </div>
    </div>
  );
};

export default SectionHead;
