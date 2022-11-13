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
            <Image width={800} height={500} src="https://images.livemint.com/img/2022/11/12/600x338/FINTECH-CRYPTO-FTX-REGULATORS-0_1668252295859_1668252295859_1668252323178_1668252323178.JPG" alt="FTX"/>
            <h3>Recent News</h3>
            <a href='https://www.livemint.com/news/bankrupt-ftx-hit-by-mysterious-outflow-of-about-662-million-11668251631906.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bankrupt FTX hit by mysterious outflow of about $662 million | Mint</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTuA0wwp-zBasQeqRms7j7toVUMrKXJqON77EZcr-CSIhqVqL3pdbJwUlIkULBFeW5u6s47TmKY" alt="Bankrupt FTX hit by mysterious outflow of about $662 million | Mint" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>In the latest twist, bankrupt digital-asset exchange FTX was hit by a mysterious outflow of about $662 million in tokens in the past 24 hours.</p></div>
            </div>
        </a><a href='https://www.theguardian.com/technology/2022/nov/12/ftx-collapse-missing-funds'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>At least $1bn in investor assets missing after FTX collapse – reports</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQK0EYuIWc7I4TAQTeqn9fE5-2iOReJpyqdvEHhweo2txcs1hFzZx6L80aOXiUc0iIiezVMm4EN" alt="At least $1bn in investor assets missing after FTX collapse – reports" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sources tell Reuters funds were part of $10bn founder Sam Bankman-Fried transferred to his hedge fund.</p></div>
            </div>
        </a><a href='https://www.thehindu.com/sci-tech/collapsed-ftx-hit-by-rogue-600-million-outflows/article66129933.ece'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Collapsed FTX hit by rogue $600 million outflows</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ8IzSM1zAf6JupUl7scZc78Y_Fcwek3yvZFaYnvfRlUTlk_xlS5SgomGqsveJ4XJdLO9blkrRL" alt="Collapsed FTX hit by rogue $600 million outflows" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Days after FTX filed for bankruptcy, the Crypto exchange platform witnessed unauthorised outflow of its assets under &#39;suspicious circumstances&#39;</p></div>
            </div>
        </a><a href='https://www.ft.com/content/dc08ed9f-0f3b-45fb-a5f6-b87157fdf944'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>FTX says it is probing &#39;abnormal transactions&#39; after potential hack</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTFDOwQFRrktSu8LHb4_0V3IQuIivLy9ETnINwSpwmgoIQ5R2MoFlT19AI1aduP28Kv7EU5EWiB" alt="FTX says it is probing &#39;abnormal transactions&#39; after potential hack" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Assets worth hundreds of millions of dollars withdrawn as crypto empire declared bankruptcy, analysts say.</p></div>
            </div>
        </a><a href='https://www.cnbc.com/2022/11/12/1-billion-to-2-billion-of-ftx-customer-funds-missing-report.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Between $1 billion and $2 billion of FTX customer funds have ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQWXQO0uIdZsl2R6cYDk2erCW4n2Os4_JL_1sgdrkhJ9__nAVlmZKe0ARrqCDVKQ-akubLjpUO5" alt="Between $1 billion and $2 billion of FTX customer funds have ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Reuters reports that at least $1 billion worth of customer funds have vanished from the failed crypto exchange.</p></div>
            </div>
        </a><a href='https://www.ft.com/content/f05fe9f8-ca0a-48d5-8ef2-7a4d813af558'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>FTX held less than $1bn in liquid assets against $9bn in liabilities</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQa_eizRkzRnJ5jolZUN7tvpSkQiMC_J2WaDQj09uC-0x9f2PtzcUhQbttQCU4OYu04gYxWs0-H" alt="FTX held less than $1bn in liquid assets against $9bn in liabilities" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>We&#39;ll send you a myFT Daily Digest email rounding up the latest FTX Trading Ltd news every morning. Sam Bankman-Fried&#39;s main international FTX exchange held&nbsp;...</p></div>
            </div>
        </a><a href='https://www.thehindu.com/sci-tech/technology/ftx-the-crypto-empire-that-fell/article66129849.ece'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>FTX | The crypto empire that fell</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSlvJsgr4fMFy1Z_E-9pfUOPV0ZKGWHSwkkby2DMYJAXze4KvX3F7bSQbHdu43TFDysT-KMckkk" alt="FTX | The crypto empire that fell" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The crypto exchange founded by Sam Bankman-Fried imploded after revelations about its financial dealings with affiliated trading firm Alameda.</p></div>
            </div>
        </a><a href='https://www.livemint.com/market/cryptocurrency/ftx-news-upto-2-billion-of-client-funds-missing-11668252308050.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>FTX news: Upto $2 billion of client funds missing | Mint</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSWMEqxTcI2GH78-WEjRjpu228kpfPZ9CpNXugcGP0LnRBY3DQZ-48sselCTa-1lmQhvikNRyEQ" alt="FTX news: Upto $2 billion of client funds missing | Mint" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>At least $1 billion of customer funds have vanished from collapsed crypto exchange FTX, according to two people familiar with the matter.</p></div>
            </div>
        </a><a href='https://decrypt.co/114269/hundreds-of-millions-of-dollars-drained-from-ftx-overnight-in-unauthorized-transfers'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Hundreds of Millions of Dollars Drained From FTX Overnight in ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRTT4KnacXGDIBVedztj1ggbomoMJ42S8mXPT_M56NnrSGvFgUdduaFNE87Hkc7Tl9oKKCnA4NT" alt="Hundreds of Millions of Dollars Drained From FTX Overnight in ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Several wallets belonging to FTX were rapidly drained just before midnight. An FTX Telegram admin called it a hack and told users not to visit the site.</p></div>
            </div>
        </a><a href='https://www.business-standard.com/article/markets/crypto-exchange-ftx-says-investigating-unauthorised-transactions-122111201041_1.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Crypto exchange FTX says investigating unauthorised transactions</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS_bJi2AGoPLKpvXYvjMqzITDHLNh-UPpoa_jSFFKj2G4naTsSh3hYDnLcF2T2L6_KN36rcfQfB" alt="Crypto exchange FTX says investigating unauthorised transactions" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>FTX filed for U.S. bankruptcy protection on Friday and founder Sam Bankman-Fried resigned as chief executive.</p></div>
            </div>
        </a>
        </Template></>;
}