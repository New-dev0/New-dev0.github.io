import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>名探偵コナン</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,名探偵コナン"/>
        <meta name="description" content="Trending News about 名探偵コナン" /></Head><Template>
            <h1 style={{fontSize: "30"}}>名探偵コナン</h1>
            <Image width={800} height={500} src="https://newsatcl-pctr.c.yimg.jp/t/amd-img/20221126-00000017-anmanmv-000-1-view.jpg?exp=10800" alt="名探偵コナン"/>
            <h3>Recent News</h3>
            <a href='https://news.yahoo.co.jp/articles/ed7e3d72730f78c4c38d6d23c4dec997cb1df5d0'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>「名探偵コナン」と一緒に楽しく学ぼう新コンセプトくじ「一番 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRiD13yFS0DNnWyRqhdbMN61GgGscsb9SdHgNXixHdVRQnlH5FEnNsI18nN9OnwfMCpwig-jjsG" alt="「名探偵コナン」と一緒に楽しく学ぼう新コンセプトくじ「一番 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>TVアニメ『名探偵コナン』が、キャラクターくじ「一番くじ」の展開する新コンセプトくじ「一番ラボ」シリーズ第1弾として登場する。まなびへの好奇心を高めるアイテム&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}