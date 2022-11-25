import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>サッカーワールドカップ 2022</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,サッカーワールドカップ 2022"/>
        <meta name="description" content="Trending News about サッカーワールドカップ 2022" /></Head><Template>
            <h1 style={{fontSize: "30"}}>サッカーワールドカップ 2022</h1>
            <Image width={800} height={500} src="https://ichef.bbci.co.uk/news/1024/branded_japanese/2B62/production/_127760111_mediaitem127760110.jpg" alt="サッカーワールドカップ 2022"/>
            <h3>Recent News</h3>
            <a href='https://www.bbc.com/japanese/features-and-analysis-63732128'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>【2022年サッカーW杯】 日本代表、トップ選手は欧州で才能磨く J ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTuGqhnCoAz1ZD81b4JOu7ftS6xP79A9-CxZ9c4115DAOt_WsAx2XitopfHMiRW19UvYM2wwIIF" alt="【2022年サッカーW杯】 日本代表、トップ選手は欧州で才能磨く J ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>日本は1998年から7回連続でサッカー・ワールドカップに出場している。かつてと現在の代表チームの大きな違いは、ヨーロッパでプレーする選手の多さだ。</p></div>
            </div>
        </a>
        </Template></>;
}