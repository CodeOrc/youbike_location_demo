import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Header from "@/components/NavBar";
export default function Event() {
  return (
    <>
      <Head>
        <title>Event</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className={styles.main}>
        <Header />
        <div className={styles.main_container}>
          <h2 className={styles.title}>網頁建置中...</h2>
        </div>
      </div>
    </>
  );
}
