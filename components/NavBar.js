import styles from "@/styles/Header.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
export default function Header() {
  const router = useRouter();
  const [show, setShow] = useState(false);
  return (
    <div className={styles.header}>
      <div className={styles.header_content}>
        <div>
          <Image
            className={styles.logo}
            src={"/images/logo.png"}
            width={95}
            height={95}
            alt="logo"
          ></Image>
        </div>
        <div
          className={`${styles.nav_bar_content} ${
            show ? styles.nav_bar_content_active : ""
          }`}
        >
          <ul className={styles.nav_bar}>
            <li
              className={`${styles.nav} ${
                router.pathname == "/instruction" && styles.nav_active
              }`}
              onClick={() => router.push("/instruction")}
            >
              使用說明
            </li>
            <li
              className={`${styles.nav} ${
                router.pathname == "/payment" && styles.nav_active
              }`}
              onClick={() => router.push("/payment")}
            >
              收費方式
            </li>
            <li
              className={`${styles.nav} ${
                router.pathname == "/" && styles.nav_active
              }`}
              onClick={() => router.push("/")}
            >
              站點資訊
            </li>
            <li
              className={`${styles.nav} ${
                router.pathname == "/news" && styles.nav_active
              }`}
              onClick={() => router.push("/news")}
            >
              最新消息
            </li>
            <li
              className={`${styles.nav} ${
                router.pathname == "/event" && styles.nav_active
              }`}
              onClick={() => router.push("/event")}
            >
              活動專區
            </li>
          </ul>
          <div className={styles.login_btn}>登入</div>
        </div>
        <div
          className={styles.menu_btn}
          onClick={() => {
            setShow(!show);
          }}
        >
          <span className="material-symbols-outlined">
            {show ? "close" : "menu"}
          </span>
        </div>
      </div>
    </div>
  );
}
