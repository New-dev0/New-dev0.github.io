import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>シンウルトラマン</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,シンウルトラマン"/>
        <meta name="description" content="Trending News about シンウルトラマン" /></Head><Template>
            <h1 style={{fontSize: "30"}}>シンウルトラマン</h1>
            <Image width={800} height={500} src="https://m-78.jp/wp-content/uploads/shin-ultraman-hawaii-1.jpg" alt="シンウルトラマン"/>
            <h3>Recent News</h3>
            <a href='https://m-78.jp/news/post-6549'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>神永新二役・斎藤工さんに大歓声！『シン・ウルトラマン」が第42 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTJi6u4JpABOB4-OIxatXnRHCbqDDdJb1O7ZWu4cy2EEbE_h_z3tmyubu4GFL8kWrkBkV8lqiWd" alt="神永新二役・斎藤工さんに大歓声！『シン・ウルトラマン」が第42 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>『シン・ウルトラマン』が「第42回ハワイ国際映画祭」で上映され、日本に続いて海外でも大好評となりまし…</p></div>
            </div>
        </a><a href='https://www.hawaii-arukikata.com/tokushu/hiff2022_shinultraman_saitotakumi_instagram.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Myハワイ、斎藤工サイン入り「シンウルトラマン」ポスター ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ8VPlLMVLGfleoRpH2FyF6AkgaxE4ie0P5DjxXotjwpvhzG_ViYb7nkPQZpXvsE7D6lE8_nF8v" alt="Myハワイ、斎藤工サイン入り「シンウルトラマン」ポスター ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>毎年開催されているハワイ国際映画祭で今年も多くの邦画が上映され、日本からも是枝裕和監督と俳優の斎藤工さんを含む、著名なゲストが4名登場しました。</p></div>
            </div>
        </a>
        </Template></>;
}