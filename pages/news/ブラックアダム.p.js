import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>ブラックアダム</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,ブラックアダム"/>
        <meta name="description" content="Trending News about ブラックアダム" /></Head><Template>
            <h1 style={{fontSize: "30"}}>ブラックアダム</h1>
            <Image width={800} height={500} src="https://newsatcl-pctr.c.yimg.jp/t/amd-img/20221203-01113617-mvwalk-000-1-view.jpg?exp=10800" alt="ブラックアダム"/>
            <h3>Recent News</h3>
            <a href='https://news.yahoo.co.jp/articles/a6f8c4ca613069193947da2ef3a3efb395519a7c'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>キャラの二面性がミソ『ブラックアダム』、裏の主役はジョンと ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQI4xH3n-r2X3fBGaet23M-F10KWZa082U0sNISMimNDueHZ-tXLmwjlEIQK3ZrQcL__9qD3K10" alt="キャラの二面性がミソ『ブラックアダム』、裏の主役はジョンと ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>MOVIE WALKER PRESSスタッフが、いま観てほしい映像作品3本を(独断と偏見で)紹介する連載企画「今週の」。今週は、ドウェイン・ジョンソン扮する“破壊神”が&nbsp;...</p></div>
            </div>
        </a><a href='https://prtimes.jp/main/html/rd/p/000000472.000063811.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>atmosより、映画『ブラックアダム』の12月2日（金）の公開を記念 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRQc4cQ9EU7DYAv7BajklODQ84tQyveOmjwJm_FfbpnUq-d0pgSdI0fFYa3567DI24OuCVFJ2t3" alt="atmosより、映画『ブラックアダム』の12月2日（金）の公開を記念 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Foot Locker atmos Japan合同会社のプレスリリース（2022年12月2日 10時22分）atmosより、映画『ブラックアダム』の12月2日（金）の公開を記念し、 [atmos × BLACK&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}