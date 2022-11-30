import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>ヴェラアズール</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,ヴェラアズール"/>
        <meta name="description" content="Trending News about ヴェラアズール" /></Head><Template>
            <h1 style={{fontSize: "30"}}>ヴェラアズール</h1>
            <Image width={800} height={500} src="https://newsatcl-pctr.c.yimg.jp/t/amd-img/20221127-11251236-sph-000-1-view.jpg?exp=10800" alt="ヴェラアズール"/>
            <h3>Recent News</h3>
            <a href='https://news.yahoo.co.jp/articles/21d7becaf16365bef7457fe3a6e80a2aeac46b27'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>【ジャパンＣ】林家木りん、ヴェラアズール本命「ジャパンＣの ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQkBIJFYKJC-zxZxkd7JrkYgw8w48rOtw1V7qeE2mTMSEPncdTv666iLfGPiFLiBOp5hznKcJ7p" alt="【ジャパンＣ】林家木りん、ヴェラアズール本命「ジャパンＣの ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>第４２回ジャパンＣは１１月２７日、東京競馬場で争われる。サッカーのカタールＷ杯で日本が強豪ドイツを撃破したことに刺激を受けた落語家・林家木りん（３３）は、&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}