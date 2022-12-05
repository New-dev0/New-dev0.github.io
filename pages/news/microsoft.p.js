import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Microsoft</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Microsoft"/>
        <meta name="description" content="Trending News about Microsoft" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Microsoft</h1>
            <Image width={800} height={500} src="https://www.lac.co.jp/lacwatch/img/thumb_lacwatch_003200.jpg" alt="Microsoft"/>
            <h3>Recent News</h3>
            <a href='https://www.lac.co.jp/lacwatch/people/20221202_003200.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Microsoft MVP 受賞レポート～活動の一例と悩んだこととは？ | LAC ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRfZbWT8Aqn9tASREVhXlxRzDVWUExHl4QRPIQMWzKzY_PM9sgr0l1jqeI1HN7ZIfHKg5x6QOMc" alt="Microsoft MVP 受賞レポート～活動の一例と悩んだこととは？ | LAC ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>デジタルペンテスト部の北原です。 カーネルやハードウェアなどを中心とした、低レイヤに対する攻撃手法の研究を中心とした業務を担当しています。</p></div>
            </div>
        </a>
        </Template></>;
}