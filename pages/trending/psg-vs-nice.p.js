import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>PSG vs Nice</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,PSG vs Nice"/>
        <meta name="description" content="Trending News about PSG vs Nice" /></Head><Template>
            <h1 style={{fontSize: "30"}}>PSG vs Nice</h1>
            <Image width={800} height={500} src="https://ss-i.thgim.com/public/incoming/6puldt/article65960576.ece/alternates/LANDSCAPE_615/2022-10-01T204747Z_332317330_UP1EIA11LRLVN_RTRMADP_3_SOCCER-FRANCE-PSG-NCE-REPORT.JPG" alt="PSG vs Nice"/>
            <h3>Recent News</h3>
            <a href='https://sportstar.thehindu.com/football/psg-vs-nice-live-paris-saint-germain-messi-neymar-mbappe-ligue-1-score-updates-highlights/article65960268.ece'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>PSG vs OGC Nice Ligue 1 HIGHLIGHTS: Mbappe wins it late for ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSx5J9Bbd_6eQlIeN7e6BQBfcT42uV7L9a8thbBSl777Yo643VAG4oqp3CYZNPsU86WpuRWOcuk" alt="PSG vs OGC Nice Ligue 1 HIGHLIGHTS: Mbappe wins it late for ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>PSG vs Nice, Ligue 1 HIGHLIGHTS: Welcome to Sportstar&#39;s HIGHLIGHTS of the Ligue 1 match between Paris Saint-Germain and Nice.</p></div>
            </div>
        </a><a href='https://www.news18.com/news/football/psg-vs-nice-live-streaming-when-and-where-to-watch-ligue-1-match-live-coverage-on-live-tv-online-6080857.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>PSG vs Nice Live Streaming: When and Where to Watch Ligue 1 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS3e6NSHTeM9VJYOCggmF87fh2SuBzvwLK0JBaTf2g_FeNVmviZvsoV4Avk7DJUj2Y_-aLs-7T9" alt="PSG vs Nice Live Streaming: When and Where to Watch Ligue 1 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>PSG vs Nice Live Streaming of Ligue 1 Match: Here you can get all the details as to When, Where, and how you can watch the Ligue 1 2022-23 match between PSG&nbsp;...</p></div>
            </div>
        </a><a href='https://www.goal.com/en-in/news/psg-vs-nice-live-stream-tv-kick-off-where-to-watch/blt2df3c839d1779d26'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>PSG vs Nice: Live stream, TV channel, kick-off time &amp; where to watch</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ_W0N7buY-nJsBsnbF7n-6VX9Q06W0Ow1m7lZDfXz-tYpXDrMd0fp5-BgVyjXac0MxfY0DBPoa" alt="PSG vs Nice: Live stream, TV channel, kick-off time &amp; where to watch" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Where to watch the Ligue 1 game between PSG and Nice, plus kick-off time and team news.</p></div>
            </div>
        </a><a href='https://www.espn.co.uk/football/report/_/gameId/639695'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Paris Saint-Germain vs. Nice - Football Match Report - October 1 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTD7ge3494q2taTMIIWMGdIXtGwXGQbH3kty8OGl-kss-GcKRhbxApOolg5nmOY4iOMQIFXP-ig" alt="Paris Saint-Germain vs. Nice - Football Match Report - October 1 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>PSG had begun the game with Mbappe only among the substitutes after his exploits for France in the UEFA Nations League and ahead of Wednesday&#39;s Champions League&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sportbible.com/football/psg-nice-tv-channel-live-stream-team-news-messi-20221001'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>PSG vs Nice: TV Channel, live stream and team news as Messi set ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRcsx94MVNrnj2rONqw3uPYPOyeAZdqzveueLhBIZfIlivE1sDJI2YV_LqonLAQ_MSqRDpR_Wks" alt="PSG vs Nice: TV Channel, live stream and team news as Messi set ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Paris Saint-Germain are back in action tonight as they face Lucien Favre&#39;s OGC Nice at the Parc Des Princes. The Ligue 1 champions have made a fast start to&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}