import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>FIFAワールドカップ</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,FIFAワールドカップ"/>
        <meta name="description" content="Trending News about FIFAワールドカップ" /></Head><Template>
            <h1 style={{fontSize: "30"}}>FIFAワールドカップ</h1>
            <Image width={800} height={500} src="https://s3.ap-northeast-1.amazonaws.com/ktv-authoring-senden-prod/material/4066ab30ee3a41e5b9881fbc2d489cba/Z00000147551DL.jpg" alt="FIFAワールドカップ"/>
            <h3>Recent News</h3>
            <a href='https://www.ktv.jp/kanteletimes/detail.html?pageid=4066ab30ee3a41e5b9881fbc2d489cba'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>朝日奈央が“応援マネージャー”に就任！『FIFAワールドカップ ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSiemWILDt2KRQFI9nuBhfMTHLr0Fuw6WAG5X5RQ3JDuFmgfYOB6XKoAFA0E7Xt6P-UEv8u2My9" alt="朝日奈央が“応援マネージャー”に就任！『FIFAワールドカップ ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>４年に一度の世界最大のスポーツイベント『FIFAワールドカップカタール2022』が開幕した。フジテレビ系では、大注目のグループステージ第３戦「日本×スペイン」を含む&nbsp;...</p></div>
            </div>
        </a><a href='https://www.esquire.com/jp/lifestyle/sports/a42012450/fifa-world-cup-qatar-2022-esquire-the-best-shot-of-the-day-day0/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>FIFAワールドカップカタール大会&lt;br&gt;「Esquire」の写真日記（0日 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTmWRicmeGhDxZaGMzI90UF5wqladgUHyb-E9LUSDucmiu1HhCfbRnZ8oyAwMLkLgerIRUJe3_4" alt="FIFAワールドカップカタール大会&lt;br&gt;「Esquire」の写真日記（0日 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>2022年11月12日。ドイツの1部プロリーグ・ブンデスリーガのヘルタ・ベルリン対1.FCケルンの試合中に、ヘルタ・ベルリンのファンがW杯のボイコットを呼びかける横断幕を&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}