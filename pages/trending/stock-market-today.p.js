import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Stock market today</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Stock market today"/>
        <meta name="description" content="Trending News about Stock market today" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Stock market today</h1>
            <Image width={800} height={500} src="https://images.livemint.com/img/2022/11/08/600x338/stock_market_1667872711989_1667872712137_1667872712137.JPG" alt="Stock market today"/>
            <h3>Recent News</h3>
            <a href='https://www.livemint.com/market/stock-market-news/stock-market-holiday-today-as-bse-nse-closed-for-guru-nanak-jayanti-11667872590536.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Stock market holiday: Trading at BSE, NSE closed today. Here&#39;s why ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQnQOVsVHSGD59dGx4fIpH8ogTkS6bt5InVRTR7ouN6wnzvw_Vl_JfSbzHkkFrP3tsyklVJIrAt" alt="Stock market holiday: Trading at BSE, NSE closed today. Here&#39;s why ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Indian stock market will be closed on Tuesday on the account of Guru Nanak Jayanti.</p></div>
            </div>
        </a><a href='https://economictimes.indiatimes.com/markets/stocks/news/is-the-stock-market-closed-tomorrow/articleshow/95359723.cms'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Is the stock market closed for trading today?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcStQgl0JuqUTsPF4Twd1sGfmhWKErBIYTVDm5vgvLLP1UgHxQT4ePdGFkT9UVchj0umPE1CmmLw" alt="Is the stock market closed for trading today?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Commodity markets will be shut during the morning hours; however, they will operate during the evening session. The currency market will also be shut&nbsp;...</p></div>
            </div>
        </a><a href='https://www.bloomberg.com/news/articles/2022-11-07/asia-stocks-set-for-mixed-open-before-us-midterms-markets-wrap'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Stocks Notch Three-Day Rally Ahead of Vote Results: Markets Wrap</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQSNDGnAaJ5tVCxCCS3ViaYwCoeMFbJrij-1WO7skMqIJnOktUPe4eCd6UDuGARtpwfUgTu0hHy" alt="Stocks Notch Three-Day Rally Ahead of Vote Results: Markets Wrap" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>US stocks rose for a third day as investors awaited midterm election results and monitored the selloff in crypto tokens that wiped out more than 10% from&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cnbctv18.com/market/stock-market-holiday-trading-at-bse-nse-closed-today-on-account-of-guru-nanak-jayanti-15114871.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Stock market holiday: Trading at BSE, NSE closed today on account ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS9p1MZ8iaTbabyIOoLFWrh9joOxPTm_CnP827plk5qkfC-cO8JKZ4DmKnRATc0Ye7oPwbv3FP5" alt="Stock market holiday: Trading at BSE, NSE closed today on account ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Domestic markets will remain shut for trading on Tuesday. This is the last trading holiday of the calendar year.</p></div>
            </div>
        </a><a href='https://indianexpress.com/article/business/market/indian-stock-share-money-currency-bond-commodity-markets-shut-gurunanak-jayanti-november-8-8255645/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Stock Market Holidays 2022: Indian equity and currency markets ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSZ7ToNjipCPEjn-L6PJmW-RhjSS_dGRGFGLImYaJIIsvXTk_O9BYwl19nEwpFovBKzbxGEnGfd" alt="Stock Market Holidays 2022: Indian equity and currency markets ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Share Market Closed Today, November 8, 2022: Indian Stock Exchanges NSE and BSE will remain closed today (8 November) on account of Gurunanak Jayanti.</p></div>
            </div>
        </a><a href='https://in.investing.com/news/stock-market-today-dow-rides-midterm-election-fever-to-close-higher-3410698'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Stock market today: Dow rides midterm election fever to close higher</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQeEcQH_denVZ4uSNs_eyQUst-TaBa2Bj7hP8cIfMAIMaYyF3rVYvGr9UDfyg28cA7zdoYzW8fK" alt="Stock market today: Dow rides midterm election fever to close higher" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Investing.com -- The Dow continued its strong start to the week Tuesday, on bets political gridlock looms in the U.S., with Republicans widely expected to come&nbsp;...</p></div>
            </div>
        </a><a href='https://www.hindustantimes.com/business/stock-markets-holiday-why-there-is-no-trading-at-bse-nse-today-101667878881886.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Stock markets holiday: Why there is no trading at BSE, NSE today?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ2dktSfKjiVBzWSe1cjUvNjv14Kwsm1C0MPCAx766SQRCVQ1VY01BhU7o2erBU8Zua2lDTDfy3" alt="Stock markets holiday: Why there is no trading at BSE, NSE today?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Today happens to be the last trading holiday at the stock exchanges. It is the 16th market holiday of 2022. Recently, the markets were shut on Diwali&nbsp;...</p></div>
            </div>
        </a><a href='https://www.wsj.com/livecoverage/stock-market-news-today-11-07-2022'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Stock Market Today: Dow Gains 400 Points as Investors Await ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRcc380KdnlqTLZz_uEhfaFavEjcjcdRBnsUXlo434ad76clvH04AhsB5hzRfvQ3K1zfSpvU9Iv" alt="Stock Market Today: Dow Gains 400 Points as Investors Await ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Stocks closed Monday&#39;s session higher, a day before midterm elections that could see one or both chambers of Congress shift to Republican control.</p></div>
            </div>
        </a><a href='https://www.zeebiz.com/market-news/news-stock-market-holiday-today-sensex-nifty-close-on-account-of-gurunanak-jayanti-mcx-to-open-at-this-time-206641'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Stock Market Holiday: Today market open or close? Sensex, Nifty ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSn9upJjOxPqNvHZKsGH0bvVTvMsz1UgvHMd6bZV4NonKKPHL0dwULoDwTB4P4Q6DQyccQUDIEA" alt="Stock Market Holiday: Today market open or close? Sensex, Nifty ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Today Market Open or Close, Share Market Open Time: Indian equity markets are closed today for trading on account of Gurunanak Jayanti.</p></div>
            </div>
        </a><a href='https://www.financialexpress.com/market/is-stock-market-closed-today-trading-on-bse-nse-to-remain-suspended-on-guru-nanank-jayanti/2783065/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Is stock market closed today? Trading on BSE, NSE to remain ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRvpyJsBeyR_wSOj6Pca3JPPv-v_TQekpV-CR-6MGj4cDGQS9h-EngupzxQjboEkXtAFCK0HZHl" alt="Is stock market closed today? Trading on BSE, NSE to remain ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Indian share market will remain closed today (8 November) on the occasion of Guru Nanak Jayanti. The currency markets will also remain shut.</p></div>
            </div>
        </a>
        </Template></>;
}