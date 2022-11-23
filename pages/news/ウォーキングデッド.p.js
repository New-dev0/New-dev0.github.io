import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>ウォーキングデッド</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,ウォーキングデッド"/>
        <meta name="description" content="Trending News about ウォーキングデッド" /></Head><Template>
            <h1 style={{fontSize: "30"}}>ウォーキングデッド</h1>
            <Image width={800} height={500} src="https://www.cinemacafe.net/imgs/ogp_f/588431.jpg" alt="ウォーキングデッド"/>
            <h3>Recent News</h3>
            <a href='https://www.cinemacafe.net/article/2022/11/22/82082.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ライアン・レイノルズ、「ウォーキング・デッド」最終話のCMに ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcREuLNjLWBJoSM7LWSbhvSttHAqtehNryc0X_j0pXl6ZSPXQGaWNR5gEkDVtjAE6btQ3-NyBduN" alt="ライアン・レイノルズ、「ウォーキング・デッド」最終話のCMに ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>11月20日（現地時間）、「ウォーキング・デッド」がついに完結した。記念すべき最終話（シーズン11・24話）の放送中に、ライアン・レイノルズの製作会社「Maximum&nbsp;...</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/10362f2856cff5c159703d99fa27b4e692853190'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ライアン・レイノルズ、死んだ「ウォーキング・デッド」歴代 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRbSshYQEauJ5H3biHn0JkEr_xdnxebzqI2MC5WAL8uO6geRrDx_-m7XiWVE4uuKyU1Il19Xr43" alt="ライアン・レイノルズ、死んだ「ウォーキング・デッド」歴代 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>『デッドプール』シリーズのライアン・レイノルズ率いる製作会社マキシマム・エフォートが、米AMCネットワークとタッグを組み、人気ドラマ「ウォーキング・デッド」&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}