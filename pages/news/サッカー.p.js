import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>サッカー</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,サッカー"/>
        <meta name="description" content="Trending News about サッカー" /></Head><Template>
            <h1 style={{fontSize: "30"}}>サッカー</h1>
            <Image width={800} height={500} src="https://www.kataller.co.jp/topteam/wp-content/uploads/2022/11/49ef72b19c9b2addea8db508ca9b00b7-11.jpg" alt="サッカー"/>
            <h3>Recent News</h3>
            <a href='https://www.kataller.co.jp/pickup/%E3%82%AB%E3%82%BF%E3%83%BC%E3%83%AC%E5%AF%8C%E5%B1%B1%E3%82%B5%E3%83%83%E3%82%AB%E3%83%BC%E3%82%B9%E3%82%AF%E3%83%BC%E3%83%ABgk%E3%82%AF%E3%83%AA%E3%83%8B%E3%83%83%E3%82%AF%EF%BC%81%E3%80%90-3/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>カターレ富山サッカースクールGKクリニック！【基本編③】 開催の ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT2312tDlTv4ykCcRk3zaZE4m-C4OG84CoAlV4OP4g17EtIlvuzPqaxlodROaJZAW0aYWRZWdVO" alt="カターレ富山サッカースクールGKクリニック！【基本編③】 開催の ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>素早いポジション修正ができるステップを身に付けよう！ 主催. 株式会社カターレ富山. 対象. 小学3年生、小学4年生. 日時. 2022年&nbsp;...</p></div>
            </div>
        </a><a href='https://news.yahoo.co.jp/articles/3180f184af3fbd248ecfaac78f17b22135eb3230'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>「日本サッカーを強く」 世界有数のクラブも利用 AI分析ツールが ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSLlXFpljTfhxVMxdNErVhx3SqGaaFQ88YYVAPrc91xczPv1k3Ir8eRTRv_Cx7vy4v0UQcLhm-C" alt="「日本サッカーを強く」 世界有数のクラブも利用 AI分析ツールが ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>サッカー界の発展とともに年々進化を続けてきた“分析技術”。『ABEMAヒルズ』はその最新鋭となるAIを活用した分析サービスを提供する会社を取材した。</p></div>
            </div>
        </a>
        </Template></>;
}