import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>にゃんこ大戦争</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,にゃんこ大戦争"/>
        <meta name="description" content="Trending News about にゃんこ大戦争" /></Head><Template>
            <h1 style={{fontSize: "30"}}>にゃんこ大戦争</h1>
            <Image width={800} height={500} src="https://newsatcl-pctr.c.yimg.jp/t/amd-img/20221115-00010008-realsound-000-1-view.jpg?exp=10800" alt="にゃんこ大戦争"/>
            <h3>Recent News</h3>
            <a href='https://news.yahoo.co.jp/articles/ea1dfd70d3bd1387bc0670f3a2617c98fd406159'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>『にゃんこ大戦争』10周年 キモカワなキャラクターが繰り広げる ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTgY22tIMgo7bZ43_eCHqMhjnf86s0PK7FOQp0fNcBkfS5WawXBYaST32U69LpXBF6qYpBbeKUM" alt="『にゃんこ大戦争』10周年 キモカワなキャラクターが繰り広げる ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>『にゃんこ大戦争』は、2022年11月15日に発売10周年を迎える。携帯電話向けゲームとして始まった本作は、プラットフォームをスマートフォンに移し、いまなお高い人気を&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}