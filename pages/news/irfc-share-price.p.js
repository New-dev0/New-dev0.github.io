import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>IRFC Share Price</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,IRFC Share Price"/>
        <meta name="description" content="Trending News about IRFC Share Price" /></Head><Template>
            <h1 style={{fontSize: "30"}}>IRFC Share Price</h1>
            <Image width={800} height={500} src="https://images.livemint.com/img/2022/11/17/600x338/IRFC_share_price_1668668635758_1668668635945_1668668635945.jpg" alt="IRFC Share Price"/>
            <h3>Recent News</h3>
            <a href='https://www.livemint.com/market/stock-market-news/irfc-shares-rally-to-hit-record-high-trade-above-ipo-issue-price-11668668547034.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>IRFC shares rally to hit record high; trade above IPO issue price | Mint</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSoUhKP6nPNjIziNvAOPW_UFeou4ws7rc1OWGPfSZGY1q-QuYnQEMk2J5GYff3EOFi4nNtO-2oL" alt="IRFC shares rally to hit record high; trade above IPO issue price | Mint" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Indian Railway Finance Corporation Ltd (IRFC) shares rallied more than 8% to hit a record high of ₹28.7.</p></div>
            </div>
        </a><a href='https://indtoday.com/indian-railway-finance-corporation-share-prices-surge/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Indian Railway Finance Corporation share prices surge</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTdIUGVMFr4k0fTjeG2Yng0TO0do4uJS_2_QHMYdLqLWL7Pcg5Jd7C-LjESZ7iEyoND9CWcGyzt" alt="Indian Railway Finance Corporation share prices surge" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>In a relief for Indian Railway Finance Corporation investors, the IRFC shares have surged over its IPO price for the first time since its listing last year.</p></div>
            </div>
        </a><a href='https://www.businesstoday.in/markets/stocks/story/trading-ideas-tata-steel-iob-irfc-bank-of-india-and-unichem-labs-353163-2022-11-17'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Trading ideas: Tata Steel, IOB , IRFC, Bank of India and Unichem Labs</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSooH1o7z8QidRk3bu98a-gyy3ZcZzvhmu8Xa8V59Be3IvmYpBGxRN3uycv6AnTcD8SEmfKHHGb" alt="Trading ideas: Tata Steel, IOB , IRFC, Bank of India and Unichem Labs" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ICICIdirect remains constructive on Tata Steel as it has registered a breakout above the falling supply line joining highs since August 2022 (Rs 113),&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cnbctv18.com/business/companies/irfc-shares-52-week-high-no-npa-no-tax-hotel-ashok-ipo-price-15190691.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Has the funding arm of the Indian Railways finally started to chug ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQg5BEmPZPI_U-25AAmmcYqg-yndBwnzeCVPUdI2hUMJ48PpBcPvr0udeTMS-yYMoB9kg6qyvCI" alt="Has the funding arm of the Indian Railways finally started to chug ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The company also has zero tax expenses as it has been granted exemptions by the government of India. &middot; Recommended Articles.</p></div>
            </div>
        </a>
        </Template></>;
}