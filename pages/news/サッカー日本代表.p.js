import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>サッカー日本代表</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,サッカー日本代表"/>
        <meta name="description" content="Trending News about サッカー日本代表" /></Head><Template>
            <h1 style={{fontSize: "30"}}>サッカー日本代表</h1>
            <Image width={800} height={500} src="https://newsatcl-pctr.c.yimg.jp/t/amd-img/20221203-00487320-footballc-000-3-view.jpg?exp=10800" alt="サッカー日本代表"/>
            <h3>Recent News</h3>
            <a href='https://www.minpo.jp/news/moredetail/20221203102947'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>【サッカー日本代表】新しい歴史を刻め（１２月３日）</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="【サッカー日本代表】新しい歴史を刻め（１２月３日）" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>県内の多くのファンも一挙一動に息をのみ、歓喜に沸いたに違いない。サッカー日本代表がワールドカップ（Ｗ杯）カタール大会の１次リーグＥ組で１位となり、２大会連続&nbsp;...</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/9621feaca5c523124e4f3c50aa36e83499ec1fdc'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>権田修一、川島永嗣、シュミット・ダニエル。サッカー日本代表 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ1AOi4VAWHmI5m4BxkXjwAG68LpxRajFCkS9WDj_12dtShPSIa89e4nKBbXoGCcJDzu-tRQ5o3" alt="権田修一、川島永嗣、シュミット・ダニエル。サッカー日本代表 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>サッカー日本代表がスペイン代表に2-1で勝利しカタールワールドカップの決勝トーナメント進出が決まった瞬間だった。ベンチから飛び出したGK川島永嗣とGKシュミット・&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}