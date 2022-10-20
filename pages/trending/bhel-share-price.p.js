import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>BHEL share price</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,BHEL share price"/>
        <meta name="description" content="Trending News about BHEL share price" /></Head><Template>
            <h1 style={{fontSize: "30"}}>BHEL share price</h1>
            <Image width={800} height={500} src="https://images.simplywall.st/asset/industry/3052000-choice2-main-header/1585186800829" alt="BHEL share price"/>
            <h3>Recent News</h3>
            <a href='https://simplywall.st/stocks/in/capital-goods/nse-bhel/bharat-heavy-electricals-shares/news/bharat-heavy-electricals-limiteds-nsebhel-stock-is-soaring-b'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bharat Heavy Electricals Limited&#39;s (NSE:BHEL) Stock is Soaring But ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSHVMIL8P7f1U5wk2tPcNLhoO_d7ZqDjGS17wKkeUSkT_w7Hvqbi3ZKjjcCZ8U802JX-5c3eV56TA" alt="Bharat Heavy Electricals Limited&#39;s (NSE:BHEL) Stock is Soaring But ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Return on equity or ROE is an important factor to be considered by a shareholder because it tells them how effectively their capital is being reinvested. In&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cnbctv18.com/market/stocks/bhel-shares-end-near-52-week-high-thermal-power-plants-14972791.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>What is leading BHEL&#39;s surge to a 52-week high?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSY4qQvFg-qNlp7U5-UgBF2poESI6hG2YaiI3qbUZ0IzpgPkVsq8nUvpIC5TksNl_BBHogAv51w" alt="What is leading BHEL&#39;s surge to a 52-week high?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Shares of Bharat Heavy Electricals Ltd. (BHEL) ended near a 52-week high on Thursday, gaining 8.3 percent to end at Rs 68.20.</p></div>
            </div>
        </a>
        </Template></>;
}