import styles from "@/styles/Pagination.module.css";
export default function Pagination({
  total,
  currentPage,
  countPerPage = 25,
  handlePage,
}) {
  return (
    <div className={styles.pagination}>
      {currentPage - 1 > 0 && (
        <div
          className={styles.page}
          onClick={() => {
            handlePage(currentPage - 1);
          }}
        >
          <span className="material-symbols-outlined">navigate_before</span>
        </div>
      )}
      {[
        currentPage - 2,
        currentPage - 1,
        currentPage,
        currentPage + 1,
        currentPage + 2,
      ].map((v) => {
        if (v > 0 && v <= Math.floor(total / countPerPage)) {
          return v == currentPage ? (
            <div key={"page" + v} className={styles.page_active}>
              {v}
            </div>
          ) : (
            <div
              key={"page" + v}
              className={styles.page}
              onClick={() => {
                handlePage(v);
              }}
            >
              {v}
            </div>
          );
        }
      })}
      {currentPage + 1 <= Math.floor(total / countPerPage) && (
        <div
          className={styles.page}
          onClick={() => {
            handlePage(currentPage + 1);
          }}
        >
          <span className="material-symbols-outlined">navigate_next</span>
        </div>
      )}
    </div>
  );
}
