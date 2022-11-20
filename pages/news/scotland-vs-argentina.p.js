import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Scotland vs Argentina</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Scotland vs Argentina"/>
        <meta name="description" content="Trending News about Scotland vs Argentina" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Scotland vs Argentina</h1>
            <Image width={800} height={500} src="https://static.independent.co.uk/2022/11/19/15/SEI134301910.jpg?quality=75&width=1200&auto=webp" alt="Scotland vs Argentina"/>
            <h3>Recent News</h3>
            <a href='https://www.independent.co.uk/sport/rugby/rugby-union/scotland-argentina-live-stream-score-result-b2228624.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Scotland vs Argentina LIVE: Rugby result and reaction as Darcy ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRbWNcDwn7hhx-2EZC5Lnu2hlNJgNBjhchqh4JbwjGplAONh4j8VodretCMfMvG2Z8pES0WGbPf" alt="Scotland vs Argentina LIVE: Rugby result and reaction as Darcy ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Scotland 52-29 Argentina: Darcy Graham notched a hat-trick in a bizarre game that included six cards and 12 tries.</p></div>
            </div>
        </a><a href='https://www.rugbypass.com/news/scotland-player-ratings-vs-argentina-autumn-nations-series/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Scotland player ratings vs Argentina | Autumn Nations Series</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTk7VzoZ4UilXRZbOUrUHf585CZUrr8C8oZoF5aBITbTGsoyObJbePAmqe-jr_kbOaNfUApAzMV" alt="Scotland player ratings vs Argentina | Autumn Nations Series" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Scotland player ratings: Scotland ended their autumn campaign with a comprehensive win over 14-man Argentina at Murrayfield.</p></div>
            </div>
        </a><a href='https://www.rugbydump.com/news/massive-brawl-in-scotland-vs-argentina-thriller-at-bt-murrayfield/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Massive Brawl in Scotland vs Argentina Thriller At BT Murrayfield ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTYOfP-oVud_-A06w9GdSRkpBNJIGA4yeBB6HIKgnAc-hjv8rZeCK_y4IwTZEitWH5782oQ2auJ" alt="Massive Brawl in Scotland vs Argentina Thriller At BT Murrayfield ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The question for all Scottish and Argentinean Rugby fans after that one is &#39;have you caught your breath yet?&#39; ADVERTISEMENT. In a truly chaotic,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.walesonline.co.uk/sport/rugby/rugby-news/scotland-v-argentina-descends-chaos-25559062'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Scotland v Argentina descends into chaos amid 12 tries, mass brawl ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQB1vKsHZ8DjKz3k6KtHAkL27_lCRHEWmmwU0-4qcj8Zt8Lm26At31KjxSgxfb0WLttgT4BldjA" alt="Scotland v Argentina descends into chaos amid 12 tries, mass brawl ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Darcy Graham scored three of those, Sione Tuipulotu claimed two, and Duhan van der Merwe, Cameron Redpath and Stuart Hogg also crossed. But the game also had&nbsp;...</p></div>
            </div>
        </a><a href='https://www.telegraph.co.uk/rugby-union/2022/11/19/scotland-v-argentina-live-score-autumn-internationals-2022-latest/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Scotland thump 14-man Pumas in chaotic clash at Murrayfield</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSrqu1K5rniIFECW4jax-F49hx-vsP-Rgj9WznRYElTwIkbr1aNU2KQLwbU2uN7M-tkmimyjxjq" alt="Scotland thump 14-man Pumas in chaotic clash at Murrayfield" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Scotland pulled away from their bedraggled visitors in the closing 11 minutes when Cameron Redpath, Stuart Hogg and Darcy Graham all helped themselves to&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}