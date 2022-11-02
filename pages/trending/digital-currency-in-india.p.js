import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Digital Currency in India</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Digital Currency in India"/>
        <meta name="description" content="Trending News about Digital Currency in India" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Digital Currency in India</h1>
            <Image width={800} height={500} src="https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_5/IMAGE_1643773983.jpg?utm_source=fb" alt="Digital Currency in India"/>
            <h3>Recent News</h3>
            <a href='https://www.outlookindia.com/business/e-rupee-india-s-foray-into-digital-currency-explained-news-234005'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>E-Rupee: India&#39;s Foray Into Digital Currency – Explained</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQMJVfcrQIFIInvXJbAfTX5wGbRoSCrex7x9AUMbdIERPtoBtlE65RwaQnjiiF7rwTon-OGgsi8" alt="E-Rupee: India&#39;s Foray Into Digital Currency – Explained" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>CBDC is a digital currency that is issued by the central bank of a sovereign nation. By definition, it is freely convertible against the physical currency&nbsp;...</p></div>
            </div>
        </a><a href='https://www.bloomberg.com/news/articles/2022-11-01/india-s-central-bank-starts-pilot-digital-currency-program'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>India&#39;s Central Bank Starts Pilot Digital Currency Program</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRcAzSbBgmH7dNB6R-wCGJG7HAxO0uUrwX9ihWA0zJsQg8_6HdZGd4b48p5I6ZurymMetiDhYSS" alt="India&#39;s Central Bank Starts Pilot Digital Currency Program" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>India&#39;s central bank started a pilot program of its digital currency Tuesday, allowing select banks to use it for settling secondary-market transactions in&nbsp;...</p></div>
            </div>
        </a><a href='https://economictimes.indiatimes.com/news/economy/policy/indias-central-bank-digital-currency-makes-glitch-free-start-in-the-world-of-real-time-trades/articleshow/95236452.cms'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>India&#39;s central bank digital currency makes glitch-free start in the ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRgBZdP0vczW-I-5VqIxLhWHr6ZGU-ZtTA8p1Wdn9b8GcW7ZC_bXtV7luWREZYEyMif7O0h0-aT" alt="India&#39;s central bank digital currency makes glitch-free start in the ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>State Bank of India (SBI), Bank of Baroda, ICICI Bank and IDFC Bank are among the nine participating lenders that are said to have cut the inaugural CBDC&nbsp;...</p></div>
            </div>
        </a><a href='https://www.financialexpress.com/money/digital-rupee-features-faq-benefits-of-rbis-central-bank-digital-currency-cbdc-explained/2763138/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Digital Rupee: RBI&#39;s Central Bank Digital Currency (CBDC) pilot ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTJBp90hYdcyw_e8CWSn0QiJDDUx8RTMeaYIS7eDhmmO3FD9R8Z2i4DXbXmZ6xBLPH3Gw2-kG--" alt="Digital Rupee: RBI&#39;s Central Bank Digital Currency (CBDC) pilot ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Digital Rupee Features, FAQ, Expected Benefits: RBI has not yet launched a Digital Rupee pilot for the retail segment. It will launch the first pilot of the&nbsp;...</p></div>
            </div>
        </a><a href='https://news.cleartax.in/all-you-need-to-know-about-new-digital-currency/8585/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>All You Need to Know About New Digital Currency</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRYI1zzHInKPI0sTysoKBeoZqS-rE5TIc88rorARzNozkiThc5lg8JYmGc1TqQPrEgMmwvIefK-" alt="All You Need to Know About New Digital Currency" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The first pilot launches for the Central Bank Digital Currency (CBDC) or the digital rupee-retail segment starts from today.</p></div>
            </div>
        </a>
        </Template></>;
}