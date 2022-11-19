import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>ドバイ</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,ドバイ"/>
        <meta name="description" content="Trending News about ドバイ" /></Head><Template>
            <h1 style={{fontSize: "30"}}>ドバイ</h1>
            <Image width={800} height={500} src="https://www.jetro.go.jp/library/images/sns/logo1200_630.png" alt="ドバイ"/>
            <h3>Recent News</h3>
            <a href='https://www.jetro.go.jp/biznews/2022/11/e08606a1339b1ae3.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>家具・インテリア・装飾品の展示会「ドバイ・デザイン・ウイーク ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRsmUe220dHK3XRup1-9bCKBV6Pm_yuebuhQ7kPleqVlRMf3qxiyGSK3NNZj1jYYi9rMJCci0pX" alt="家具・インテリア・装飾品の展示会「ドバイ・デザイン・ウイーク ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>アラブ首長国連邦（UAE）のドバイで11月8～13日、デザインをテーマにしたイベント「ドバイ・デザイン・ウイーク（Dubai Design Week） 2022」が開催された。</p></div>
            </div>
        </a><a href='https://www3.nhk.or.jp/news/html/20221118/k10013895621000.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>サッカーワールドカップ 日本代表がドバイからカタールに到着</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT3tONluOzhAM2CrBUs7Uxlg8WlCFnAt8kZ_WZWmpOnBAaGfNUvQVy2SkZFKXU044oaAAm47L2J" alt="サッカーワールドカップ 日本代表がドバイからカタールに到着" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>【NHK】サッカーワールドカップカタール大会の開幕を2日後に控え、日本代表の選手たちが18日、前日に強化試合が行われたUAE＝アラ…</p></div>
            </div>
        </a>
        </Template></>;
}