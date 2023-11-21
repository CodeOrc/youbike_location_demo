import styles from "@/styles/SearchInput.module.css";
import { useState, useRef } from "react";
export default function searchInput({ handleSearch }) {
  const ref = useRef(null);
  const [history, setHistory] = useState([]);
  const [show, setShow] = useState(false);
  return (
    <div>
      <div className={styles.search_box}>
        <input
          className={styles.search_input}
          type="text"
          ref={ref}
          onFocus={() => {
            setShow(true);
          }}
          onChange={() => {
            handleSearch(ref.current.value);
          }}
        />
        <div
          className={styles.search_btn}
          onClick={() => {
            if (history.indexOf(ref.current.value) < 0 && ref.current.value) {
              let newArr = history;
              newArr.push(ref.current.value);
              setHistory(newArr);
            }
            handleSearch(ref.current.value);
            setShow(false);
          }}
        >
          <span className="material-symbols-outlined">search</span>
        </div>
      </div>
      <div
        style={show ? { display: "block" } : { display: "none" }}
        className={styles.history_box}
      >
        <div>
          {history.length > 0 &&
            history.map((v, i) => (
              <div
                key={"history" + i}
                value={v}
                onClick={() => {
                  handleSearch(v);
                  setShow(false);
                  ref.current.value = v;
                }}
              >
                {v}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
