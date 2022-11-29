import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>こどもみらい住宅支援事業</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,こどもみらい住宅支援事業"/>
        <meta name="description" content="Trending News about こどもみらい住宅支援事業" /></Head><Template>
            <h1 style={{fontSize: "30"}}>こどもみらい住宅支援事業</h1>
            <Image width={800} height={500} src="" alt="こどもみらい住宅支援事業"/>
            <h3>Recent News</h3>
            <a href='https://www.mlit.go.jp/report/press/house04_hh_001129.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>国土交通省｜報道資料｜こどもみらい住宅支援事業において、予算 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="国土交通省｜報道資料｜こどもみらい住宅支援事業において、予算 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>育て世帯や若者夫婦世帯の住宅取得に伴う負担軽減を図るとともに、省エネ性能を有する住宅ストックの形成を図る「こどもみらい住宅支援事業」は、予算上限に対する交付&nbsp;...</p></div>
            </div>
        </a><a href='https://www.housenews.jp/executive/22919'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>こどもみらい支援事業、予算学に到達、申請受付を終了</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="こどもみらい支援事業、予算学に到達、申請受付を終了" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>住まいや暮らし、ハウスメーカーや住宅設備メーカー、地域工務店、行政、自治体まで、住宅に関するあらゆるニュースを幅広く取り上げます.</p></div>
            </div>
        </a>
        </Template></>;
}