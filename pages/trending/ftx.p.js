import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>FTX</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,FTX"/>
        <meta name="description" content="Trending News about FTX" /></Head><Template>
            <h1 style={{fontSize: "30"}}>FTX</h1>
            <Image width={800} height={500} src="https://images.indianexpress.com/2022/11/explained.jpg" alt="FTX"/>
            <h3>Recent News</h3>
            <a href='https://indianexpress.com/article/explained/explained-sci-tech/timeline-rise-and-fall-of-crypto-exchange-ftx-8265537/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The rise and fall of crypto exchange FTX</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRJ5DBdPOc-eJRbgEHbKy-LdXawQkDZ_3ptBwcXwubg_4V4tmoJWKdmszmR0s3PTFEOfW-aJdgNcw" alt="The rise and fall of crypto exchange FTX" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>FTX filed for bankruptcy on Friday, one of the highest profile crypto blowups, after traders rushed to withdraw $6 billion from the platform in just 72&nbsp;...</p></div>
            </div>
        </a><a href='https://www.livemint.com/news/bankrupt-ftx-hit-by-mysterious-outflow-of-about-662-million-11668251631906.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bankrupt FTX hit by mysterious outflow of about $662 million | Mint</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTuA0wwp-zBasQeqRms7j7toVUMrKXJqON77EZcr-CSIhqVqL3pdbJwUlIkULBFeW5u6s47TmKY" alt="Bankrupt FTX hit by mysterious outflow of about $662 million | Mint" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>In the latest twist, bankrupt digital-asset exchange FTX was hit by a mysterious outflow of about $662 million in tokens in the past 24 hours.</p></div>
            </div>
        </a><a href='https://economictimes.indiatimes.com/markets/cryptocurrency/collapsed-ftx-hit-by-rogue-transactions-analysts-saw-over-600mln-outflows/articleshow/95484373.cms'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Collapsed <b>FTX</b> hit by rogue transactions, analysts saw over $600mln outflows</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQyAKGhuPrQEq7V6NceCDtNLdeXFAGVxm8e_or2OjC88IiCfxtCt1XjNBjckYKDSs_RMFvtfuie" alt="Collapsed <b>FTX</b> hit by rogue transactions, analysts saw over $600mln outflows" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}><b>FTX</b> filed for bankruptcy on Friday, one of the highest profile crypto blowups, after traders rushed to withdraw $6 billion from the platform in just 72 hours and rival exchange Binance abandoned a proposed rescue deal.<b>FTX</b> Chief Executive John J. Ray III&nbsp;...</p></div>
            </div>
        </a><a href='https://www.outlookindia.com/business/funds-vanish-at-bankrupt-crypto-exchange-ftx-probe-underway-news-237022'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Funds Vanish At Bankrupt Crypto Exchange FTX; Probe Underway</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTvbkYPsnqTTcPjC3Ci2NVH3MKcqLwdFBICS8aq0mtyjWHv6RT6KR-qG8PPmul8jarLFNHQAn0O" alt="Funds Vanish At Bankrupt Crypto Exchange FTX; Probe Underway" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A debate formed on social media about whether the exchange was hacked or a company insider had stolen funds, a possibility that cryptocurrency analysts&nbsp;...</p></div>
            </div>
        </a><a href='https://www.theguardian.com/technology/2022/nov/12/ftx-collapse-missing-funds'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>At least $1bn in investor assets missing after FTX collapse – reports</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQK0EYuIWc7I4TAQTeqn9fE5-2iOReJpyqdvEHhweo2txcs1hFzZx6L80aOXiUc0iIiezVMm4EN" alt="At least $1bn in investor assets missing after FTX collapse – reports" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sources tell Reuters funds were part of $10bn founder Sam Bankman-Fried transferred to his hedge fund.</p></div>
            </div>
        </a><a href='https://www.ft.com/content/f05fe9f8-ca0a-48d5-8ef2-7a4d813af558'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>FTX held less than $1bn in liquid assets against $9bn in liabilities</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQa_eizRkzRnJ5jolZUN7tvpSkQiMC_J2WaDQj09uC-0x9f2PtzcUhQbttQCU4OYu04gYxWs0-H" alt="FTX held less than $1bn in liquid assets against $9bn in liabilities" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>We&#39;ll send you a myFT Daily Digest email rounding up the latest FTX Trading Ltd news every morning. Sam Bankman-Fried&#39;s main international FTX exchange held&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}