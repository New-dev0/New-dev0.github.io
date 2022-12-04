import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>サッカーワールドカップ</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,サッカーワールドカップ"/>
        <meta name="description" content="Trending News about サッカーワールドカップ" /></Head><Template>
            <h1 style={{fontSize: "30"}}>サッカーワールドカップ</h1>
            <Image width={800} height={500} src="https://www3.nhk.or.jphttps://www3.nhk.or.jp/news/html/20221203/K10013911781_2212030630_1203064404_01_02.jpg" alt="サッカーワールドカップ"/>
            <h3>Recent News</h3>
            <a href='https://www3.nhk.or.jp/news/html/20221203/k10013911781000.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ワールドカップ 得点ランキング 仏エムバペら3得点で5人が並ぶ</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSngLCgFCKYnOfBor6ZIQYbkte5xeDI_jGCJjjEFetTU4JAMlgCTN5FtyLTlkFd09gPZQV_XR7d" alt="ワールドカップ 得点ランキング 仏エムバペら3得点で5人が並ぶ" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>【NHK】サッカーワールドカップカタール大会は、1次リーグのすべての試合が終わり、得点ランキングのトップには、3得点で5人が並んで…</p></div>
            </div>
        </a>
        </Template></>;
}