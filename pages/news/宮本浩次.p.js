import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>宮本浩次</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,宮本浩次"/>
        <meta name="description" content="Trending News about 宮本浩次" /></Head><Template>
            <h1 style={{fontSize: "30"}}>宮本浩次</h1>
            <Image width={800} height={500} src="https://newsatcl-pctr.c.yimg.jp/t/amd-img/20221125-00000419-oric-000-8-view.jpg?exp=10800" alt="宮本浩次"/>
            <h3>Recent News</h3>
            <a href='https://news.yahoo.co.jp/articles/2aacf0f1d2d09b751b3551445150aa7af2c86e72'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>宮本浩次、体調不良で『Mステ』休演 発熱もPCR検査は陰性 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ5N2sVD9435CiLjZNTSZPZ4Nv26BwUhKjWJ7zk_1ROn4mGv7vmfofWMC4hkKneMYUlZoTmTnuh" alt="宮本浩次、体調不良で『Mステ』休演 発熱もPCR検査は陰性 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>エレファントカシマシのボーカル・宮本浩次が、きょう25日放送のテレビ朝日系『ミュージックステーション』（後9：00）を体調不良で休演することが同日、ホームページ&nbsp;...</p></div>
            </div>
        </a><a href='https://natalie.mu/music/news/502797'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>TAKUMA、体調不良の宮本浩次に代わりこのあと「Mステ」緊急 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ-OZBHyQ-u0hrbZHZet-66Z6H0xta7gbZttcvANqagvQOg16DmG5jW6uoK-pj4Ni_ZSc1dG-oz" alt="TAKUMA、体調不良の宮本浩次に代わりこのあと「Mステ」緊急 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>本日11月25日21:00から放送のテレビ朝日系「ミュージックステーション」に、TAKUMA（10-FEET）が緊急出演することが決定した。</p></div>
            </div>
        </a>
        </Template></>;
}