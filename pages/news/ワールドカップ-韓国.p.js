import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>ワールドカップ 韓国</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,ワールドカップ 韓国"/>
        <meta name="description" content="Trending News about ワールドカップ 韓国" /></Head><Template>
            <h1 style={{fontSize: "30"}}>ワールドカップ 韓国</h1>
            <Image width={800} height={500} src="https://newsatcl-pctr.c.yimg.jp/t/amd-img/20221124-00010006-sporting-000-2-view.jpg?exp=10800" alt="ワールドカップ 韓国"/>
            <h3>Recent News</h3>
            <a href='https://news.yahoo.co.jp/articles/9cea36fbaffd9fc8707105c833d39cad1b31ee19'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>【カタールW杯】韓国代表 戦力分析：注目はプレミアリーグ得点王 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSCwokHlAvt2UUe7o8i_oPFk4SR0SDc45wfmpPUBILh1PAMB0zRAdpb7ZjoORxIV0KgjHubDbdP" alt="【カタールW杯】韓国代表 戦力分析：注目はプレミアリーグ得点王 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>「アジアの虎」の異名で知られる韓国代表（FIFAランキング28位）は、FIFAワールドカップ・カタール2022において10大会連続11回目のW杯出場。W杯での最高成績は、2002年&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}