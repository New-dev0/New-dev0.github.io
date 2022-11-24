import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>カタール</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,カタール"/>
        <meta name="description" content="Trending News about カタール" /></Head><Template>
            <h1 style={{fontSize: "30"}}>カタール</h1>
            <Image width={800} height={500} src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt3550267210fca780/637d15bbced7d007ced5f08b/goal---web_three-way-split-e8f56f5d-5def-454c-841c-d80b342bc28d.jpeg" alt="カタール"/>
            <h3>Recent News</h3>
            <a href='https://www.goal.com/jp/%E3%83%AA%E3%82%B9%E3%83%88/qatar-world-cup-top-scorers-ranking/blt6127843c4fe34fba'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>カタール・ワールドカップ(W杯)得点ランキング｜最もゴールを決め ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQLx47x-cDf8kN4MH8bAKBXhJJChieH-TpIRk1rWActU_GecJm9X0weON11CTT8yv4PKh_-Tlwa" alt="カタール・ワールドカップ(W杯)得点ランキング｜最もゴールを決め ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>FIFAワールドカップ カタール2022の最新得点ランキングを随時更新中。最もゴールを決めている選手は？</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/a3e6d07f63beb1b589a1f1bf34c91233c1e16a77'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>カタールW杯の光と影 巨額マネーの祭典に集まる批判【WBS ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRIXTozCDVpS5RWrP9eIdzSSJN05yUmIaDBlRmckhz4U7fXabkagB3S0KDNu6OmYqcZQF1Fm5AA" alt="カタールW杯の光と影 巨額マネーの祭典に集まる批判【WBS ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>日本時間の11月21日未明、中東で初開催となるサッカーワールドカップ・カタール大会が開幕しましたが、ヨーロッパなどで抗議デモが相次ぐなど批判の声が強まっています&nbsp;...</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/07b127bd2fcaadae2589ab367d8143c7b8b2ef94'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>フライト15時間でたどりついた「カタール」第一歩踏み出した感想 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTuvKi6HlOdrnFuSQMkMuXl5t5S5Nb_D-57sXspjQgm8vqyNZVP_NjexJYMd-Qx9KifYj7rWYME" alt="フライト15時間でたどりついた「カタール」第一歩踏み出した感想 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>日本のみなさん、アッサラーム・アライクム（こんにちは）。お笑い芸人「カカロニ」のすがやです。僕はいま、カタールにいます。目的はもちろん、カタールW杯を現地&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}