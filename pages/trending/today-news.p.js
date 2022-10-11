import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Today News</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Today News"/>
        <meta name="description" content="Trending News about Today News" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Today News</h1>
            <Image width={800} height={500} src="https://images.indianexpress.com/2022/10/bse-sensex-bombay-stock-exchange-express-archive-1200.jpg" alt="Today News"/>
            <h3>Recent News</h3>
            <a href='https://indianexpress.com/article/business/market/share-market-today-october-10-stocks-bse-sensex-nse-nifty-rupee-global-cues-8199888/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Share Market Today Updates: Sensex slips 200 points, Nifty ends ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQLQ6GcK91s7ZXjR35oUFptU9WGr8W_WR2NZKsmDAIfzvZnexMQSwez2MMy3bNHypgjS_OUBut9" alt="Share Market Today Updates: Sensex slips 200 points, Nifty ends ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Share Market News, Stock Market Today, Sensex, Nifty Share Prices: The S&amp;P BSE Sensex fell 200.18 points (0.34 per cent) to end at 57991.11 while the Nifty&nbsp;...</p></div>
            </div>
        </a><a href='https://www.livemint.com/market/stock-market-news/buy-or-sell-vaishali-parekh-recommends-2-stocks-to-buy-today-oct-10-11665365756787.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Buy or sell: Vaishali Parekh recommends 2 stocks to buy today ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTND2pv2JHIrc4jkjGRDF4MMmli9lFOw5sUVJ7Dov5WQXC8HH_eNF33oBY3EHPWFHwD917w9oym" alt="Buy or sell: Vaishali Parekh recommends 2 stocks to buy today ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Buy or sell stocks for today: On account of strong global cues, Indian stock market finished higher in the week gone by. NSE Nifty ended with a weekly gain&nbsp;...</p></div>
            </div>
        </a><a href='https://www.moneycontrol.com/news/business/markets/stock-market-today-top-10-things-to-know-before-the-market-opens-today-90-9300061.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Stock Market Today: Top 10 things to know before the market opens ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTxZ16ootRgoOOlsuynDxfbhZZkMRRhYJ_RtS3D07a-yz0l_39R68EzLEb5WxnSsRwZKGpUJ2Fx" alt="Stock Market Today: Top 10 things to know before the market opens ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Stock Market News: Trends in SGX Nifty indicate a gap-down opening for the broader index in India with a loss of 268 points.</p></div>
            </div>
        </a><a href='https://news.abplive.com/gaming/wordle-479-answer-today-october-11-wordle-solution-puzzle-hints-1557448'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Wordle 479 Answer, October 11: Check Out Hints And Clues To ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRojPLWk6PAA2EUzsaek533yLVFFsZI_GmsYujnSIiQYM7xzKBsQYUqoA5DwNyEeGIQ7WOZuuTn" alt="Wordle 479 Answer, October 11: Check Out Hints And Clues To ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Wordle 479 Answer Today: Here are some clues and hints for you to crack today&#39;s Wordle puzzle.</p></div>
            </div>
        </a><a href='https://www.thequint.com/tech-and-auto/tech-news/wordle-479-answer-today-11-october-2022-check-hints-and-clues-read-to-know-the-solution-for-the-day'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Wordle 479 Answer Today: Check Hints, Clues, and Solution for 11 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS5LEfZHr2axJ5PHaJnFXSlL44FwhAneRqPZvBEUPUfyoCBBmf_-a8SkZiIuu5XpRkAc2Y4TZ89" alt="Wordle 479 Answer Today: Check Hints, Clues, and Solution for 11 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Wordle 479 word of the day today, on Tuesday, 11 October 2022 is an easy one. Read the hints and clues stated by us so that you can guess the correct answer&nbsp;...</p></div>
            </div>
        </a><a href='https://economictimes.indiatimes.com/markets/stocks/news/rs-3-lakh-crore-investor-wealth-wiped-off-key-factors-behind-sensex-crash-today/articleshow/94752355.cms'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Rs 3 lakh crore investor wealth wiped off: Key factors behind Sensex ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTQi3o2RTZ_iBwU91oZtUp_xzQPbW3mgG741ajVXX_mwucv1KW-Ggs7k20Plik1ivAmIHyaXtZw" alt="Rs 3 lakh crore investor wealth wiped off: Key factors behind Sensex ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Fears around aggressive rate hikes by the US Federal Reserve were back to haunt investors as the surprisingly low US unemployment rate at 3.5 per cent&nbsp;...</p></div>
            </div>
        </a><a href='https://tamil.indianexpress.com/tamilnadu/tamil-news-today-live-school-leave-wikki-nayan-rain-update-522621/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Tamil news today : 5வது இடத்திற்கு இந்திய ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTzDIjEP-tcIfptqf5fe-eMCH58yQLRCLpgCbRTADddUb9W4GHdg0rDCdTiE5lIFt6JavEE3JY4" alt="Tamil news today : 5வது இடத்திற்கு இந்திய ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Petrol and Diesel Price: சென்னையில் பெட்ரோல், டீசல் விலையில் எந்த மாற்றமுமில்லை. இன்று சென்னையில்&nbsp;...</p></div>
            </div>
        </a><a href='https://www.eurogamer.net/wordle-answer-today-11-october-479-9033'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Wordle answer today for Tuesday, 11th October: What is the word ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQHE1-UZhg07vycRI6UHNMJ11hKCJIJrTwhMQV4ZsX3oacmf6l-4YZsmMv7UqvNAkr1ZWVeNlOT" alt="Wordle answer today for Tuesday, 11th October: What is the word ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Stuck on today&#39;s Wordle? Here&#39;s the answer for 479 on 11th October.</p></div>
            </div>
        </a><a href='https://www.indiainfoline.com/article/news-top-story/top-10-stocks-for-today-10th-october-2022-122101000010_1.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Top 10 stocks for today - 10th October, 2022</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Top 10 stocks for today - 10th October, 2022" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Here are the top 10 stocks that may show price movement today. October 10, 2022 7:54 IST | India Infoline News Service. The Singapore Exchange&#39;s Nifty&nbsp;...</p></div>
            </div>
        </a><a href='https://www.jagran.com/news/national-hindi-breaking-news-live-updates-today-9-october-pm-modi-gujarat-visit-rahul-gandhi-lb-23127987.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Breaking News in Hindi Today: प्रधानमंत्री नरेंद्र मोदी ने गुजरात के ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS6ZkONM86YBhZ5G7M0h90Aj9TI-BFxRfYZAv7P3BRd0VbKKHftGk9oX7dka_efJODdsJRzG961" alt="Breaking News in Hindi Today: प्रधानमंत्री नरेंद्र मोदी ने गुजरात के ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Breaking News in Hindi Today प्रधानमंत्री नरेंद्र मोदी ने गुजरात के मोढेरा में कई विकास&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}