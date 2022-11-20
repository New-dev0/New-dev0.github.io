import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>戸田恵梨香</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,戸田恵梨香"/>
        <meta name="description" content="Trending News about 戸田恵梨香" /></Head><Template>
            <h1 style={{fontSize: "30"}}>戸田恵梨香</h1>
            <Image width={800} height={500} src="https://newsatcl-pctr.c.yimg.jp/t/amd-img/20221117-00010000-ytokushu-000-1-view.jpg?exp=10800" alt="戸田恵梨香"/>
            <h3>Recent News</h3>
            <a href='https://news.yahoo.co.jp/articles/cf2bb7479d2c1d8f1588c1aba2b24ee06243403a'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>「今は、スランプかもしれないですね」――戸田恵梨香ロング ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSZNp0rfKjdnk7E9izaHR2Rhg_OpOBuMu1TBAM-_nlc81rRYdsbHryCM60JaxHMBPdqAFH7mD36" alt="「今は、スランプかもしれないですね」――戸田恵梨香ロング ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>役柄そのものにのめり込まず、脚本を理解し、“作品を成立させること”に集中する。それが俳優・戸田恵梨香（34）の仕事の流儀だ。その高い演技力は、持って生まれた&nbsp;...</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/731b2b1cb201c43ccb58b6cdc657ef7f0a0a57bb'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>戸田恵梨香×森田敦子。植物の力で体や心をケアする、フィト ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcReUwV2x8T1xuIgPxEllgqnoRAm6noOQw7CT-AJvahXKrtugU4p2ORcKStrOlzPFJYx4j3vEJYh" alt="戸田恵梨香×森田敦子。植物の力で体や心をケアする、フィト ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>フィトテラピー〟とは、日本語で〝植物療法〟。自然の植物の力で体や心の不調を整えようというもの。フィトテラピーに関心を寄せ、日々の暮らしに取り入れている俳優・&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}