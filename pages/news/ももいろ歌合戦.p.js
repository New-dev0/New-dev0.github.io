import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>ももいろ歌合戦</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,ももいろ歌合戦"/>
        <meta name="description" content="Trending News about ももいろ歌合戦" /></Head><Template>
            <h1 style={{fontSize: "30"}}>ももいろ歌合戦</h1>
            <Image width={800} height={500} src="https://newsatcl-pctr.c.yimg.jp/t/amd-img/20221122-00010037-realsound-000-1-view.jpg?exp=10800" alt="ももいろ歌合戦"/>
            <h3>Recent News</h3>
            <a href='https://news.yahoo.co.jp/articles/4b15b391c95b0e092cf9e4cc9f8d6683fe1b96ad'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ももクロ・高城れに「20代最後の年くらい勝たせてくださいよ ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQK47qECWZ0_t37FqjVdPrHXfLV_BEPmxTeVMg-GcFcYj2snDg5XWbfQfr0A6UfD1ZmngoVAsjE" alt="ももクロ・高城れに「20代最後の年くらい勝たせてくださいよ ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ももいろクローバーZ（以下、ももクロ）が豪華アーティストと共に毎年大晦日に開催している歌の祭典『ももいろ歌合戦』が今年も開催される。11月21日、その第1弾出場者&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}