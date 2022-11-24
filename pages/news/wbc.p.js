import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Wbc</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Wbc"/>
        <meta name="description" content="Trending News about Wbc" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Wbc</h1>
            <Image width={800} height={500} src="https://newsatcl-pctr.c.yimg.jp/t/amd-img/20221123-00000133-sanspo-000-3-view.jpg?exp=10800" alt="Wbc"/>
            <h3>Recent News</h3>
            <a href='https://news.yahoo.co.jp/articles/48ebb4fae1c5691b35562e0e2d649cbb2b258474'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>大谷翔平出場明言でＷＢＣチケット一般販売は秒殺 ２次流通サイト ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTK0f6lsIqeIp5ejdLVch4P3MwZH8L4FwMn-ybwO44d8Jy1iM_yrz4LmgxJbptt6DbWmVskuOKG" alt="大谷翔平出場明言でＷＢＣチケット一般販売は秒殺 ２次流通サイト ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>来年３月９日に開幕するワールド・ベースボール・クラシック（ＷＢＣ）の東京ラウンドのチケット一般販売が２３日、午前１１時からスタートした。</p></div>
            </div>
        </a>
        </Template></>;
}