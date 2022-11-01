import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>SGX Nifty</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,SGX Nifty"/>
        <meta name="description" content="Trending News about SGX Nifty" /></Head><Template>
            <h1 style={{fontSize: "30"}}>SGX Nifty</h1>
            <Image width={800} height={500} src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202210/stock-market-3_0-sixteen_nine.jpg" alt="SGX Nifty"/>
            <h3>Recent News</h3>
            <a href='https://www.businesstoday.in/markets/market-perspective/story/sgx-nifty-gains-175-points-10-things-you-must-know-before-the-opening-bell-351232-2022-10-31'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>SGX Nifty gains 175 points: 10 things you must know before the ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQsC9Owyp8vUMQ1jg-bJB9jEOAOUTH9xsDj3nnLcOKnx_drClvPwWqtTMEdOvH7RNlQv3z9Fu6K" alt="SGX Nifty gains 175 points: 10 things you must know before the ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nifty futures on the Singapore Exchange quoted 174.50 points, or 0.98 per cent, higher at 18009, hinting at a strong start for the domestic market on&nbsp;...</p></div>
            </div>
        </a><a href='https://economictimes.indiatimes.com/markets/stocks/news/sgx-nifty-up-165-points-heres-what-changed-for-market-while-you-were-sleeping/articleshow/95190004.cms'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>SGX Nifty up 165 points; here&#39;s what changed for market while you ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRl4W5C9MtLPqrY4i-gxKhcOekz5XtN4PDlQqLYO93fl9H6rAtKcBDiMBbkt_C9_qglH-lYkuGW" alt="SGX Nifty up 165 points; here&#39;s what changed for market while you ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Asian stocks rose while US equity futures edged lower at the start of a pivotal week for investors that will see interest rate decisions from central banks&nbsp;...</p></div>
            </div>
        </a><a href='https://in.investing.com/news/opening-cues-ahead-of-fed-week-sgx-nifty-surge-asian-mkts-up-chinas-pmi--more-3396998'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Opening Cues Ahead of Fed Week: SGX Nifty Surge, Asian Markets ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTtuWs8TdtTHiQBmKf35hubJ9lUDRK0P91WrUwcyTisFJO2Jm4jYEcmmVbm_6eHqbDA5hxVU-Ds" alt="Opening Cues Ahead of Fed Week: SGX Nifty Surge, Asian Markets ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Major indices on Wall Street jumped on Friday amid a broad-based rally, thanks to encouraging economic data and positive earnings outlook ahead of the US Fed&#39;s&nbsp;...</p></div>
            </div>
        </a><a href='https://www.business-standard.com/article/news-cm/sgx-nifty-indicates-firm-opening-122103100152_1.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>SGX Nifty indicates firm opening</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="SGX Nifty indicates firm opening" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Trading of Nifty 50 index futures on the Singapore stock exchange indicates that the Nifty could rise 167 points at the opening bell. Global markets: Overseas,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.moneycontrol.com/news/business/markets/stock-market-today-top-10-things-to-know-before-the-market-opens-today-100-9414611.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Stock Market Today: Top 10 things to know before the market opens ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTxZ16ootRgoOOlsuynDxfbhZZkMRRhYJ_RtS3D07a-yz0l_39R68EzLEb5WxnSsRwZKGpUJ2Fx" alt="Stock Market Today: Top 10 things to know before the market opens ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Stock Market News: Trends in the SGX Nifty indicate a gap-up opening for the broader index in India with a gain of 193 points on Monday with its global&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cnbctv18.com/photos/market/stock-market-today-10-things-to-know-before-opening-bell-on-october-31-15049051.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Stock market today: 10 things to know before opening bell on ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTm5Aq5Z1oiwidujCO8ROQNwTBxUIiGqcFG6DgbF1qjjYK7DQDSdmQFeseH5AknwP2DswGSdcoW" alt="Stock market today: 10 things to know before opening bell on ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Trends on SGX Nifty indicate an opening in the green for the Indian markets on Monday after a gain of 1.10 percent. Here are the 10 things you need to know&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}