import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>スタバ 福袋2023</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,スタバ 福袋2023"/>
        <meta name="description" content="Trending News about スタバ 福袋2023" /></Head><Template>
            <h1 style={{fontSize: "30"}}>スタバ 福袋2023</h1>
            <Image width={800} height={500} src="https://rocketnews24.com/wp-content/uploads/sites/2/2022/11/fukubukuro2023.jpg?crop=381px%2C0px%2C798px%2C420px&resize=1200%2C630" alt="スタバ 福袋2023"/>
            <h3>Recent News</h3>
            <a href='https://rocketnews24.com/2022/11/28/1723232/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>【抽選結果】スタバ福袋2023の当選確率がヤバすぎる！ 編集部全員 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSIxXWtpBxIj1ETMrWqUhs03pPxlZswI5s1XO1Wvl-cct555O_Z1bCzEQIWKUV9YLXt9cGxX9lO" alt="【抽選結果】スタバ福袋2023の当選確率がヤバすぎる！ 編集部全員 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>今朝11時06分に1通のメールが届いた。送信主はスターバックスで、タイトルは「福袋2023 当選のご案内」である。そう、本日2022年11月28日はスターバックス福袋2023の&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}