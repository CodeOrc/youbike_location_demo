import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import LocSelect from "@/components/LocSelect";
import { useState, useEffect } from "react";

const locations = [
  {
    locationName: "臺北市",
    api: "https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json",
  },
  { locationName: "新北市", api: "" },
  { locationName: "新竹縣", api: "" },
  { locationName: "新竹市", api: "" },
  { locationName: "新竹科學園區", api: "" },
  { locationName: "苗栗縣", api: "" },
  { locationName: "臺中市", api: "" },
  { locationName: "嘉義市", api: "" },
  { locationName: "臺南市", api: "" },
  { locationName: "高雄市", api: "" },
  { locationName: "屏東縣", api: "" },
];

export default function Home() {
  const [loc, setLoc] = useState("");

  const handleLoctionChange = (e) => {
    setLoc(e.target.getAttribute("value"));
  };

  return (
    <>
      <Head>
        <title>youbike_location_demo</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className={styles.main}>
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
            <ul className={styles.nav_bar}>
              <li className={styles.nav}>使用說明</li>
              <li className={styles.nav}>收費方式</li>
              <li className={styles.nav}>站點資訊</li>
              <li className={styles.nav}>最新消息</li>
              <li className={styles.nav}>活動專區</li>
            </ul>
            <div className={styles.login_btn}>登入</div>
            <div className={styles.menu_btn}>
              <span className="material-symbols-outlined">menu</span>
            </div>
          </div>
        </div>
        <div className={styles.main_container}>
          <div className={styles.filter_content}>
            <div className={styles.filter}>
              <h2 className={styles.title}>站點資訊</h2>
              <div className={styles.location}>
                <LocSelect
                  locations={locations.map((v) => v.locationName)}
                  value={loc}
                  onChange={handleLoctionChange}
                ></LocSelect>
                <div className={styles.search_box}>
                  <input className={styles.search_input} type="text" />
                  <div className={styles.search_btn}>
                    <span className="material-symbols-outlined">search</span>
                  </div>
                </div>
              </div>
              <div className={styles.area}>
                <div className={styles.area_content}>
                  <div style={{ width: "100%" }} className={styles.check_box}>
                    <label>
                      <input
                        className={styles.area_check_input}
                        type="checkbox"
                      />
                      <span className="material-symbols-outlined"></span>
                      全部勾選
                    </label>
                  </div>
                  <div className={styles.check_box}>
                    <label>
                      <input
                        className={styles.area_check_input}
                        type="checkbox"
                      />
                      <span className="material-symbols-outlined"></span>
                      全部勾選
                    </label>
                  </div>
                  <div className={styles.check_box}>
                    <label>
                      <input
                        className={styles.area_check_input}
                        type="checkbox"
                      />
                      <span className="material-symbols-outlined"></span>
                      全部勾選
                    </label>
                  </div>
                  <div className={styles.check_box}>
                    <label>
                      <input
                        className={styles.area_check_input}
                        type="checkbox"
                      />
                      <span className="material-symbols-outlined"></span>
                      全部勾
                    </label>
                  </div>
                  <div className={styles.check_box}>
                    <label>
                      <input
                        className={styles.area_check_input}
                        type="checkbox"
                      />
                      <span className="material-symbols-outlined"></span>
                      全部勾
                    </label>
                  </div>
                  <div className={styles.check_box}>
                    <label>
                      <input
                        className={styles.area_check_input}
                        type="checkbox"
                      />
                      <span className="material-symbols-outlined"></span>
                      全部勾
                    </label>
                  </div>
                  <div className={styles.check_box}>
                    <label>
                      <input
                        className={styles.area_check_input}
                        type="checkbox"
                      />
                      <span className="material-symbols-outlined"></span>
                      全部選
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.decorate}>
              <Image src={"/images/bike.png"} width={502} height={172} alt="" />
            </div>
          </div>
          <div className={styles.info_content}>
            <div className={styles.info_theader}>
              <div className={styles.td_location}>縣市</div>
              <div className={styles.td_area}>區域</div>
              <div className={styles.td_sna}>站點名稱</div>
              <div className={styles.td_tot}>可借車輛</div>
              <div className={styles.td_sbi}>可還空位</div>
            </div>
            <div className={styles.info_tbody}>
              <div className={styles.info_tr}>
                <div className={styles.td_location}>縣市</div>
                <div className={styles.td_area}>區域</div>
                <div className={styles.td_sna}>站點名稱</div>
                <div className={styles.td_tot}>可借車輛</div>
                <div className={styles.td_sbi}>可還空位</div>
              </div>
              <div className={styles.info_tr}>
                <div className={styles.td_location}>縣市</div>
                <div className={styles.td_area}>區域</div>
                <div className={styles.td_sna}>站點名稱</div>
                <div className={styles.td_tot}>可借車輛</div>
                <div className={styles.td_sbi}>可還空位</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
