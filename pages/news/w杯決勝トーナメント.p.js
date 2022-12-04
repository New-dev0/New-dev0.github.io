import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>W杯決勝トーナメント</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,W杯決勝トーナメント"/>
        <meta name="description" content="Trending News about W杯決勝トーナメント" /></Head><Template>
            <h1 style={{fontSize: "30"}}>W杯決勝トーナメント</h1>
            <Image width={800} height={500} src="https://newsatcl-pctr.c.yimg.jp/t/amd-img/20221203-00000010-pseven-000-1-view.jpg?exp=10800" alt="W杯決勝トーナメント"/>
            <h3>Recent News</h3>
            <a href='https://news.yahoo.co.jp/articles/28ef248b6db56afe6263dc82960d435972a270e1'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>進撃の日本代表とともにニワカなりにW杯決勝トーナメントを楽しむ ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSWZlwTwTqZswRIlb8SeDZ63l_OnU9rK5Mneo-L8SezPmJTYYEAInfRPy39fbCQpyI4XHyuoz_U" alt="進撃の日本代表とともにニワカなりにW杯決勝トーナメントを楽しむ ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>日本代表の進撃は、普段サッカーとは距離のある人々までをも虜にしている。コラムニストの石原壮一郎氏が考察した。</p></div>
            </div>
        </a>
        </Template></>;
}