import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Georgia football</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Georgia football"/>
        <meta name="description" content="Trending News about Georgia football" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Georgia football</h1>
            <Image width={800} height={500} src="https://s3media.247sports.com/Uploads/Assets/640/469/11469640.jpg?fit=bounds&crop=1200:630,offset-y0.50&width=1200&height=630" alt="Georgia football"/>
            <h3>Recent News</h3>
            <a href='https://247sports.com/college/georgia/LongFormArticle/Everything-Kirby-Smart-said-after-UGAs-victory-over-Georgia-Tech-198682359/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Georgia football: Everything Kirby Smart said after the Bulldogs ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSlv-u9Lp7B47opngnLa51rYDLIVzDG39MwOeXrk2LVLvsM3E1qwruQOVqYSgC02ZeDsQGn4E-Y" alt="Georgia football: Everything Kirby Smart said after the Bulldogs ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>After two quarters of play on Saturday, the Georgia Bulldogs found themselves in a low-scoring slugfest with Georgia Tech. Come the third quarter,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.dawgnation.com/football/georgia-football-georgia-tech-live-updates-scores-injury-news-week-13/LVF4GDDE25BZLCJVMRGPER6D3I/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Georgia football-Georgia Tech live updates, scores, injury news ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSxxjMF9bE4ZbPoui2jVN-z_eYvABqTzYsVIDcx15VpsduHSOFpIZ0Z-BFjRJlWKI_HPMgF8ZWH" alt="Georgia football-Georgia Tech live updates, scores, injury news ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Georgia football team takes on Georgia Tech in a Week 13 college football game. Below you can find live updates, scores, injury news and analysis.</p></div>
            </div>
        </a><a href='https://sports.yahoo.com/twitter-reacts-georgia-rolls-georgia-210627840.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Twitter reacts: Georgia rolls Georgia Tech, finishes 12-0</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSiUmcZRW0-_YTgRT3mRoRCTk2K0UrnhFVXjICwip-qJ7wSVrg2xmyaM6z6KIfVwTqIJdUYw9L1" alt="Twitter reacts: Georgia rolls Georgia Tech, finishes 12-0" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The No. 1 Georgia Bulldogs have finished the regular season 12-0 and undefeated for the second season in-a-row after a 37-14 win over Georgia Tech.</p></div>
            </div>
        </a><a href='https://www.cbssports.com/college-football/news/georgia-vs-georgia-tech-how-to-watch-ncaa-football-online-tv-channel-live-stream-info-game-time-27009794/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Georgia vs. Georgia Tech: How to watch NCAA Football online, TV ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSPvEF1Ia4muID3GtkG4uJ8A8OEA636GTLr-yg1S2UDN1eCAHYew1kI3tCHHOyLeCS0-oggouFu" alt="Georgia vs. Georgia Tech: How to watch NCAA Football online, TV ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Georgia Bulldogs will be returning home after a two-game road trip. They will take on the Georgia Tech Yellow Jackets at noon ET Saturday at Sanford Stadium&nbsp;...</p></div>
            </div>
        </a><a href='https://www.onlineathens.com/story/sports/college/bulldogs-extra/2022/11/26/georgia-bulldogs-football-score-vs-georgia-tech-yellow-jackets-live-updates/10752642002/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Georgia Football Final: Bulldogs beat Georgia Tech to end regular ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSR8vuYBb5njbTY2HF7zkj9boJh1M7vCJI1dxO2-I-K850mwGhTy7mXPcVWohHJpLDm5HImrmRi" alt="Georgia Football Final: Bulldogs beat Georgia Tech to end regular ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Georgia Football Final: Bulldogs beat Georgia Tech to end regular season, SEC championship next &middot; 2:59 p.m. | Georgia football Kendall Milton gets in on the&nbsp;...</p></div>
            </div>
        </a><a href='https://www.si.com/college/georgia/news/georgia-injury-report-bulldogs-looking-to-stay-healthy-vs-georgia-tech'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Georgia Injury Report: Bulldogs Looking to Stay Healthy vs Georgia ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRoUIZEVUvrrC16A0VzW9WgZEgFbcYW42DyYuQ5LbRr4oMH3FZ8glMeYnY0u6YUy0WHmQIZiIIB" alt="Georgia Injury Report: Bulldogs Looking to Stay Healthy vs Georgia ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>As the Georgia Bulldogs look to complete an undefeated regular season, we bring you the final injury report for the rivalry matchup with Georgia Tech.</p></div>
            </div>
        </a>
        </Template></>;
}