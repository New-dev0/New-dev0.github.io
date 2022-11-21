import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>ガンバ大阪</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,ガンバ大阪"/>
        <meta name="description" content="Trending News about ガンバ大阪" /></Head><Template>
            <h1 style={{fontSize: "30"}}>ガンバ大阪</h1>
            <Image width={800} height={500} src="https://newsatcl-pctr.c.yimg.jp/t/amd-img/20221120-41191080-nksports-000-3-view.jpg?exp=10800" alt="ガンバ大阪"/>
            <h3>Recent News</h3>
            <a href='https://news.yahoo.co.jp/articles/9de5d3377a13e80a71317857da895b370d4dd211'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>【Ｇ大阪】徳島監督ダニエル・ポヤトス氏新監督内定 熊本杉山直宏 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTEVIuwDmNKicnLLha7ZA3s0sszxCk-q3NOdw-JINrm__06o7E26seZcFMOQEItPUVJmyyQBI8h" alt="【Ｇ大阪】徳島監督ダニエル・ポヤトス氏新監督内定 熊本杉山直宏 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ガンバ大阪の来季新監督にJ2徳島ヴォルティスを率いるスペイン出身のダニエル・ポヤトス氏（44）が内定したことが19日、分かった。</p></div>
            </div>
        </a><a href='https://sports.yahoo.co.jp/official/detail/202211180083-spnaviow'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>【ガンバ大阪】松田ガンバの総決算。楽しむ心を忘れず ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR2EVPU7NvtmlWw5sMKi5MNAy-VNPiLyCkjP0iUHQZ5ILqd8Dw0Tdmuz2tKyVC3Mm5iYyeTY0_i" alt="【ガンバ大阪】松田ガンバの総決算。楽しむ心を忘れず ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>リーグ戦の最終節で、J1残留を決めたガンバだが、まだ今季の戦いは終わっていない。パナソニックスタジアム吹田で行われるプレ…</p></div>
            </div>
        </a>
        </Template></>;
}