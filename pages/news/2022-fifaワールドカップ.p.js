import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>2022 FIFAワールドカップ</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,2022 FIFAワールドカップ"/>
        <meta name="description" content="Trending News about 2022 FIFAワールドカップ" /></Head><Template>
            <h1 style={{fontSize: "30"}}>2022 FIFAワールドカップ</h1>
            <Image width={800} height={500} src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt3550267210fca780/637d15bbced7d007ced5f08b/goal---web_three-way-split-e8f56f5d-5def-454c-841c-d80b342bc28d.jpeg" alt="2022 FIFAワールドカップ"/>
            <h3>Recent News</h3>
            <a href='https://www.goal.com/jp/%E3%83%AA%E3%82%B9%E3%83%88/qatar-world-cup-top-scorers-ranking/blt6127843c4fe34fba'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>カタール・ワールドカップ(W杯)得点ランキング｜最もゴールを決め ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQLx47x-cDf8kN4MH8bAKBXhJJChieH-TpIRk1rWActU_GecJm9X0weON11CTT8yv4PKh_-Tlwa" alt="カタール・ワールドカップ(W杯)得点ランキング｜最もゴールを決め ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>FIFAワールドカップ カタール2022の最新得点ランキングを随時更新中。最もゴールを決めている選手は？</p></div>
            </div>
        </a>
        </Template></>;
}