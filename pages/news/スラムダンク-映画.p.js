import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>スラムダンク 映画</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,スラムダンク 映画"/>
        <meta name="description" content="Trending News about スラムダンク 映画" /></Head><Template>
            <h1 style={{fontSize: "30"}}>スラムダンク 映画</h1>
            <Image width={800} height={500} src="https://newsatcl-pctr.c.yimg.jp/t/amd-img/20221203-00953763-kana-000-5-view.jpg?exp=10800" alt="スラムダンク 映画"/>
            <h3>Recent News</h3>
            <a href='https://news.yahoo.co.jp/articles/4ab396c91bd60ad75d2ed85cc40282922bbece54'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>「スラムダンク」映画公開 〝聖地〟鎌倉の踏切にファンが殺到 地元 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT6jFWTdURYRdyOrRZS6DJJGnqb4KJ8R5cFlrOOXud1ArIPvDDTy8gCQBN6-Dl4AitUKfC1Goxi" alt="「スラムダンク」映画公開 〝聖地〟鎌倉の踏切にファンが殺到 地元 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>神奈川県の藤沢と鎌倉を走る江ノ島電鉄のある場所が、再び脚光を浴びている。人気漫画「ＳＬＡＭ ＤＵＮＫ（スラムダンク）」のアニメのオープニングシーンに登場&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}