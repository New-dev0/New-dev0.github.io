import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>ポケモンSV</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,ポケモンSV"/>
        <meta name="description" content="Trending News about ポケモンSV" /></Head><Template>
            <h1 style={{fontSize: "30"}}>ポケモンSV</h1>
            <Image width={800} height={500} src="https://newsatcl-pctr.c.yimg.jp/t/amd-img/20221118-00000270-impress-000-1-view.jpg?exp=10800" alt="ポケモンSV"/>
            <h3>Recent News</h3>
            <a href='https://news.yahoo.co.jp/articles/7ec5d5c9746f0df09034b1619b55492048482385'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>「ポケモンSV」＆「スプラ3」で試す！ サイガジェ製Switch用 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQPPUIjbI92dt8S4fOxbTXuhTOHQabgIzJrSda9Qh7kx0XIF2frA-KuRnThU9n7bOQVD-CFV2WR" alt="「ポケモンSV」＆「スプラ3」で試す！ サイガジェ製Switch用 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>「スプラトゥーン3」が発売されて再度注目度が高まっているNintendo Switch用コントローラー。自分の感覚によりフィットしたコントローラーを選ぶことで、ゲームプレイ&nbsp;...</p></div>
            </div>
        </a><a href='https://www.moguravr.com/pokemon-sv-long-live-vtubers/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>新作「ポケモンSV」で長時間配信するVTuberが続出 早々に 「金 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRyjyu-cWtFEqbPcBHo0PzVZchRAN7k80UDLXrYP87nGVbKvLggTZTU-vl6KWiHmKMBhXb-b9zq" alt="新作「ポケモンSV」で長時間配信するVTuberが続出 早々に 「金 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>VTuber界隈でもポケモンの人気は非常に高く、シリーズ新作が発表・発売されるたびに大きなトレンドとなっています。さらに発売直後は、徹夜でゲームの動画配信を行うのが&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}