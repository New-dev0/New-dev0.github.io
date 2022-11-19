import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>フィギュアスケート</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,フィギュアスケート"/>
        <meta name="description" content="Trending News about フィギュアスケート" /></Head><Template>
            <h1 style={{fontSize: "30"}}>フィギュアスケート</h1>
            <Image width={800} height={500} src="https://p.potaufeu.asahi.com/4years/img/ogp/default.jpg" alt="フィギュアスケート"/>
            <h3>Recent News</h3>
            <a href='https://4years.asahi.com/article/14768639'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>フィギュアスケート - 【動画】中京大・山本草太インタビュー 羽生 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTOIvv4QxbSu6qIv0UJ3UGSbBzdMGMaR2C9Vmt37_6yJrcKEbw8PVavTbsm7cyODf1oMZ0lSlKF" alt="フィギュアスケート - 【動画】中京大・山本草太インタビュー 羽生 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>フィギュアスケート男子で中京大学の山本草太が、11月18日～20日に札幌市で開催されるグランプリ（GP）シリーズ第5戦NHK杯に出場します。GPシリーズ第3戦フランス杯の&nbsp;...</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/fca9f6117eb72c423318fac6c8c31bc909fd9cbb'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>オンライン配信での解説は無良崇人さんと鈴木明子さん 名古屋 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQtywmXDPdmiTs0AoO7RXYoIIg6PehFjOkxJxsrKuimp_dsjHv7hP66PwkyHuTJ7pzORDJwNdE6" alt="オンライン配信での解説は無良崇人さんと鈴木明子さん 名古屋 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>新年恒例となっているフィギュアスケートのアイスショー「名古屋フィギュアスケートフェスティバル」（中日新聞社ほか主催）が来年１月４日に名古屋市の日本ガイシ&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}