import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>チャンピオンズカップ</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,チャンピオンズカップ"/>
        <meta name="description" content="Trending News about チャンピオンズカップ" /></Head><Template>
            <h1 style={{fontSize: "30"}}>チャンピオンズカップ</h1>
            <Image width={800} height={500} src="https://newsatcl-pctr.c.yimg.jp/t/amd-img/20221128-00021076-tspkeiba-000-2-view.jpg?exp=10800" alt="チャンピオンズカップ"/>
            <h3>Recent News</h3>
            <a href='https://news.yahoo.co.jp/articles/777135c7acffce1003e0c00373706e225d74ca6f'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>【チャンピオンズカップ・厩舎直送】１週前には鞍上・川田と初 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQRD449a3HYHbdfKouW8BLLRNPlAcy49XOai0vSoJiw1B3RSO0mK1yz2jqt5cwkyjTlR_eFNXUR" alt="【チャンピオンズカップ・厩舎直送】１週前には鞍上・川田と初 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ＧⅠチャンピオンズカップ＝２０２２年１２月４日（日曜）３歳上、中京競馬場、ダート１８００メートル］ シャマル（牡４・松下）は全休日の２８日朝、馬房の中で&nbsp;...</p></div>
            </div>
        </a><a href='https://tospo-keiba.jp/anohi/23926'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>【２０１５年・チャンピオンズカップ】「マジでやってしまう ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS5xIZLCD6DWpR9hHdzqxvZlpg-gjUlmyCsoGWWx9f7GotmdH5PCI0RHrFAgQdEV0wjbrXuin41" alt="【２０１５年・チャンピオンズカップ】「マジでやってしまう ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>【あの日、あの時、あのレース】芝とダートのどちらに注目しているかと聞かれれば、それは芝のレースです。しかし、ダービーやジャパンＣといった特別なレースが念頭に&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}