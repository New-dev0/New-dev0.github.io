import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Jio Cinema</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Jio Cinema"/>
        <meta name="description" content="Trending News about Jio Cinema" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Jio Cinema</h1>
            <Image width={800} height={500} src="https://images.hindustantimes.com/img/2022/11/20/1600x900/FBL-WC-2022-MATCH01-QAT-ECU-430_1668964848601_1668964848601_1668964874897_1668964874897.jpg" alt="Jio Cinema"/>
            <h3>Recent News</h3>
            <a href='https://www.hindustantimes.com/technology/fifa-world-cup-2022-apologies-says-jio-as-football-fans-flag-technical-snag-during-fifa-world-cup-101668963496869.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;Apologies&#39;, says Jio as football fans flag technical snag during FIFA ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcREr1Mqk01sYcDqwTY-RDR-UL4c5VGi8zMqzPLDjlhIUpkej1F7vhnDtHLvgcTyafqhCUguWrcW" alt="&#39;Apologies&#39;, says Jio as football fans flag technical snag during FIFA ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Jio Cinema users are complaining of buffering issue even if they have sufficiently good quality of internet connectivity.</p></div>
            </div>
        </a><a href='https://www.telegraphindia.com/sports/football/qatar-2022-jio-cinema-leaves-football-buffs-miffed/cid/1899244'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Qatar 2022: Jio Cinema leaves football buffs miffed</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT5-R-QQCr-kGQmn3YPTQOcG9QGs9kJhC_-ox5otycpQnN00oGuHPB8b1wzPAH538h_mDdIkkbQ" alt="Qatar 2022: Jio Cinema leaves football buffs miffed" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Poor quality streaming comes in the way of Qatar-Ecuador opener, fans slam application on social media.</p></div>
            </div>
        </a><a href='https://www.indiatoday.in/sports/fifa-world-cup-2022/story/fifa-world-cup-2022-football-fans-frustrated-over-live-streaming-jio-cinema-apologises-for-inconvenience-2299696-2022-11-20'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>FIFA World Cup 2022: Football fans frustrated over live streaming ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSExyN3U2OyQFC0VyJM5KbcG1yPJXpNV2GXYOSZNQ7NbKDsf6ad9z3NUF4XiXLIgfbIl1O2bxap" alt="FIFA World Cup 2022: Football fans frustrated over live streaming ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Football fans were left frustrated by the indifferent live streaming of the FIFA World Cup 2022 opening ceremony from Qatar on Jio Cinema.</p></div>
            </div>
        </a><a href='https://www.thehindubusinessline.com/news/variety/jio-cinemas-app-scores-as-football-fans-flock-to-download-it/article66157911.ece'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Fifa World Cup 2022: Jio Cinemas app scores as football fans flock ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRlJeXP6D58u1_EthUT6o8hn7WVqZ8P5mIb-7BVcgTN5sEp68aPSSitopSiRzngFjX_ms-IokLO" alt="Fifa World Cup 2022: Jio Cinemas app scores as football fans flock ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Reliance-backed app is betting on FIFA to make a sporting hit.</p></div>
            </div>
        </a><a href='https://www.freepressjournal.in/sports/shameful-pathetic-fans-fume-after-jio-cinema-suffers-streaming-issues-during-qatar-vs-ecuador-fifa-world-cup-2022-match'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Shameful, pathetic: Fans fume after Jio Cinema suffers streaming ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT4RMowDIIb-_gOshRbOCKALHKxewbF-EkYtslMcFvbvJJlLb7eo3DY4K0A6MCEOPAnF4QCYhCw" alt="Shameful, pathetic: Fans fume after Jio Cinema suffers streaming ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Indian football fans were left dejected after the official streaming platform of the FIFA World Cup 2022 suffered issues during the opening match of the&nbsp;...</p></div>
            </div>
        </a><a href='https://www.indiaherald.com/Sports/Read/994552734/FIFA-World-Cup-Indian-fans-are-very-dissatisfied'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>FIFA World Cup..! Indian fans are very dissatisfied..?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTPwUyi1Fl42lPWLNVD_3mMqiE4RDt1KGr9xRkZDTTtS5xv2fq6W4NAdkUUamYAh4dtonDf2CUV" alt="FIFA World Cup..! Indian fans are very dissatisfied..?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>sports : The 2022 FIFA World Cup started with a bang. This is the most watched sports series in the world, so Indian fans were watching this match with&nbsp;...</p></div>
            </div>
        </a><a href='https://www.bgr.in/how-to/watch-fifa-world-cup-2022-for-free-on-jiocinema-1342126/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>FIFA World Cup 2022 starts tomorrow: How to watch it for free on ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSGtzVws-4G7WrNa9phnqydSA-wW44x5_wtG-jwzFwZJ-12T4Y1I3DK315MyKAn6xRD9uE4iDaZ" alt="FIFA World Cup 2022 starts tomorrow: How to watch it for free on ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>FIFA World Cup 2022 will start from November 20. It will be streamed live on JioCinema for free. Not Just Jio users, but everyone can watch the live stream for&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}