import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Header from "@/components/NavBar";
import LocSelect from "@/components/LocSelect";
import SearchInput from "@/components/SearchInput";
import Pagination from "@/components/Pagination";
import { useState, useEffect } from "react";

const locations = [
  {
    locationName: "臺北市",
    api: "https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json",
  },
];

export default function Instruction() {
  const [loc, setLoc] = useState("");
  const [data, setData] = useState({
    data: [],
    areaList: [],
    currentPage: 1,
    search: "",
  });

  //25/perpage
  const fetchData = async (url) => {
    await fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData({
          data: data,
          areaList: getAllAreas(data),
          currentPage: 1,
          search: "",
        });
      })
      .catch((ex) => {
        console.log(ex);
      });
  };
  const handleLoctionChange = (e) => {
    setLoc(e.target.getAttribute("value"));
  };
  const handleSearch = (search) => {
    setData({ ...data, search: search });
  };
  const getAllAreas = (data) => {
    return data
      .map((v) => v.sarea)
      .filter((v, i, arr) => {
        return arr.indexOf(v) == i;
      })
      .map((v) => {
        return { areaName: v, checked: true };
      });
  };
  const handleAreaFilterChange = (e) => {
    const newArr = data.areaList.map((v) => {
      return v.areaName == e.target.value
        ? { ...v, checked: !v.checked }
        : { ...v };
    });
    setData({ ...data, areaList: newArr, currentPage: 1, search: "" });
  };
  const handleCheckAll = (e) => {
    if (e.target.checked) {
      const newArr = data.areaList.map((v) => {
        return { ...v, checked: true };
      });
      setData({ ...data, areaList: newArr, currentPage: 1, search: "" });
    } else {
      const newArr = data.areaList.map((v) => {
        return { ...v, checked: false };
      });
      setData({ ...data, areaList: newArr, currentPage: 1, search: "" });
    }
  };
  const filterData = (data) => {
    const filterArr = data.areaList
      .filter((v) => {
        return v.checked == true;
      })
      .map((v) => {
        return v.areaName;
      });
    return data.data
      .filter((v, i) => {
        return filterArr.indexOf(v.sarea) >= 0;
      })
      .filter((v) => {
        if (data.search) {
          return v.sna.includes(data.search.trim());
        } else {
          return v;
        }
      });
  };
  const getCurrentPageData = (filterdata) => {
    return filterdata.filter((v, i) => {
      if (i >= (data.currentPage - 1) * 25 && i < data.currentPage * 25) {
        return v;
      }
    });
  };

  const handlePage = (page) => {
    setData({ ...data, currentPage: page });
  };
  useEffect(() => {
    if (loc !== "") {
      const url = locations.filter((v) => v.locationName == loc)[0].api;
      if (url) {
        fetchData(url);
      }
    }
  }, [loc]);
  return (
    <>
      <Head>
        <title>youbike_location_demo</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className={styles.main}>
        <Header />
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
                <SearchInput handleSearch={handleSearch} />
              </div>
              {data.areaList.length > 0 && (
                <div className={styles.area}>
                  <div className={styles.area_content}>
                    <div style={{ width: "100%" }} className={styles.check_box}>
                      <label>
                        <input
                          className={styles.area_check_input}
                          type="checkbox"
                          checked={
                            data.areaList.filter((v) => {
                              return v.checked == false;
                            }).length == 0
                          }
                          onChange={handleCheckAll}
                        />
                        <span className="material-symbols-outlined"></span>
                        全部勾選
                      </label>
                    </div>
                    {data.areaList.map((v, i) => {
                      return (
                        <div key={"checkbox" + i} className={styles.check_box}>
                          <label>
                            <input
                              className={styles.area_check_input}
                              type="checkbox"
                              value={v.areaName}
                              checked={v.checked}
                              onChange={handleAreaFilterChange}
                            />
                            <span className="material-symbols-outlined"></span>
                            {v.areaName}
                          </label>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
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
              {data.data.length <= 0 ? (
                <div className={styles.info_tr}>尚無資料</div>
              ) : (
                getCurrentPageData(filterData(data)).map((v) => {
                  return (
                    <div className={styles.info_tr}>
                      <div className={styles.td_location}>{loc}</div>
                      <div className={styles.td_area}>{v.sarea}</div>
                      <div className={styles.td_sna}>{v.sna.split("_")[1]}</div>
                      <div className={styles.td_tot}>{v.sbi}</div>
                      <div className={styles.td_sbi}>{v.bemp}</div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
          {data.data.length > 0 && (
            <Pagination
              currentPage={data.currentPage}
              total={filterData(data).length}
              handlePage={handlePage}
            />
          )}
        </div>
      </div>
    </>
  );
}
