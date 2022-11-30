import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>サッカー日本代表ワールドカップコスタリカ</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,サッカー日本代表ワールドカップコスタリカ"/>
        <meta name="description" content="Trending News about サッカー日本代表ワールドカップコスタリカ" /></Head><Template>
            <h1 style={{fontSize: "30"}}>サッカー日本代表ワールドカップコスタリカ</h1>
            <Image width={800} height={500} src="https://www3.nhk.or.jphttps://www3.nhk.or.jp/news/html/20221128/K10013905931_2211281620_1128162629_01_02.jpg" alt="サッカー日本代表ワールドカップコスタリカ"/>
            <h3>Recent News</h3>
            <a href='https://www3.nhk.or.jp/news/html/20221128/k10013905931000.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ワールドカップ コスタリカ戦 西野前監督 どう見た【詳しく】</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSfpL3qAkbEMO5W_rcX_rXCF8N32hOLpfgbx7sHObTSIdTW-sfwJDrRdls7_3CQTNGuWIilL8Pv" alt="ワールドカップ コスタリカ戦 西野前監督 どう見た【詳しく】" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>【NHK】サッカーワールドカップカタール大会。日本の1次リーグ第2戦、押し込みながら競り負けたコスタリカ戦について前の日本代表監督…</p></div>
            </div>
        </a>
        </Template></>;
}