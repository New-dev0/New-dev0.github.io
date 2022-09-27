import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Upstox</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Upstox"/>
        <meta name="description" content="Trending News about Upstox" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Upstox</h1>
            <Image width={800} height={500} src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202209/brokeragefirms_660_021220075535-sixteen_nine.jpg" alt="Upstox"/>
            <h3>Recent News</h3>
            <a href='https://www.businesstoday.in/trending/story/zerodha-upstox-users-report-login-issues-on-volatile-trading-day-details-here-348156-2022-09-26'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Zerodha, Upstox users report login issues on volatile trading day ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcScPHLFoQ6UeLYFDK6q2qnSn_ilnFN2lMZ46Gswhzfr-s6FbFe78eoIhp0I9Sf2OxWSsZqyG5Xi" alt="Zerodha, Upstox users report login issues on volatile trading day ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Users took to Twitter and shared their grievances. Upstox said the login issues have since been resolved.</p></div>
            </div>
        </a><a href='https://www.moneycontrol.com/news/business/markets/upstox-trading-platform-down-for-an-hour-users-complain-of-losses-9230731.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Upstox trading platform down for an hour, users complain of losses</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRrT_kT6tKwuvhKS8ZhmhjhXY4PrU2TOihBpPLvO75foGDeETNdrONp-H2ssjWcF9O2aCJLJuA5" alt="Upstox trading platform down for an hour, users complain of losses" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Users flocked to social media sharing their inability to trade using Upstox. Clients of the company also complained of losing their money and a loss of&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}