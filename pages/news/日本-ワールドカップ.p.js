import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>日本 ワールドカップ</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,日本 ワールドカップ"/>
        <meta name="description" content="Trending News about 日本 ワールドカップ" /></Head><Template>
            <h1 style={{fontSize: "30"}}>日本 ワールドカップ</h1>
            <Image width={800} height={500} src="https://www3.nhk.or.jphttps://www3.nhk.or.jp/news/html/20221202/K10013910561_2212020819_1202081937_01_02.jpg" alt="日本 ワールドカップ"/>
            <h3>Recent News</h3>
            <a href='https://www3.nhk.or.jp/news/html/20221202/k10013910561000.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>日本代表 決勝T進出「日本まじ」「俺のコース」SNSで話題</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRFxNnnbWS0nqBk1UqT-TGLZUzA330Rt8ObffbxqQmRkwNnNlHG-1C2eu3QzslqH7dcBAjBP5WB" alt="日本代表 決勝T進出「日本まじ」「俺のコース」SNSで話題" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>【NHK】サッカーワールドカップカタール大会で日本は強豪スペインを破って、2大会連続の決勝トーナメント進出を決めました。この快挙に…</p></div>
            </div>
        </a><a href='https://www3.nhk.or.jp/news/html/20221202/k10013910921000.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>日本 実ったハイプレス 成長を物語る サッカーワールドカップ</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT44gbBTOgEjF1JbcEbgbK7wAqQVzxXj03eVzalgXinAdPx6tE-2hiEvX8RLWJRp9BzCn5q_Iqs" alt="日本 実ったハイプレス 成長を物語る サッカーワールドカップ" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>【NHK】サッカーワールドカップカタール大会、強豪・スペインに逆転勝ちした日本。去年の雪辱を見事に果たした勝利でした。</p></div>
            </div>
        </a>
        </Template></>;
}