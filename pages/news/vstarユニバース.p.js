import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>VSTARユニバース</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,VSTARユニバース"/>
        <meta name="description" content="Trending News about VSTARユニバース" /></Head><Template>
            <h1 style={{fontSize: "30"}}>VSTARユニバース</h1>
            <Image width={800} height={500} src="https://newsatcl-pctr.c.yimg.jp/t/amd-img/20221202-00000003-isd-000-3-view.jpg?exp=10800" alt="VSTARユニバース"/>
            <h3>Recent News</h3>
            <a href='https://news.yahoo.co.jp/articles/844a1ca772c6eadc555c927aa49957dc26f730ce'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>「VSTARユニバース」収録カードだけで、（ほぼ）組める ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSLXWJ6imkudL730Ms9Hp5CZu3hH31jT1QoRwxwgcvkIcQ1bZFhGH6YTyOz8XAHnZMdU5gxd-6D" alt="「VSTARユニバース」収録カードだけで、（ほぼ）組める ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>12月2日に発売を迎えた『ポケモンカードゲーム ソード＆シールド』のハイクラスパック「VSTARユニバース」。本商品は今年活躍した強力なカードを多数収録！</p></div>
            </div>
        </a>
        </Template></>;
}