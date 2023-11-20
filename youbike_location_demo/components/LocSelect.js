import styles from "@/styles/LocSelect.module.css";
import { useState } from "react";
export default function LocSelect({ locations, value = "", onChange }) {
  const [show, setShow] = useState(false);
  return (
    <div className={styles.select_container}>
      <div
        style={value === "" ? { color: "#AEAEAE" } : {}}
        className={styles.location_select}
        onClick={() => {
          setShow(!show);
        }}
      >
        {value === "" ? "選擇縣市" : value}
        <span className={`${styles.drop_icon} material-symbols-outlined`}>
          arrow_drop_down
        </span>
      </div>
      <div
        style={show ? { display: "block" } : { display: "none" }}
        className={styles.location_option_box}
      >
        <div>
          {locations.map((v) => (
            <div
              value={v}
              onClick={(e) => {
                onChange(e);
                setShow(false);
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
