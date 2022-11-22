import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>World Cup games</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,World Cup games"/>
        <meta name="description" content="Trending News about World Cup games" /></Head><Template>
            <h1 style={{fontSize: "30"}}>World Cup games</h1>
            <Image width={800} height={500} src="https://library.sportingnews.com/styles/facebook_1200x630/s3/2022-11/world-cup-sign-qatar.jpg?itok=B7ug1ycL" alt="World Cup games"/>
            <h3>Recent News</h3>
            <a href='https://www.sportingnews.com/us/soccer/news/next-world-cup-game-match-fifa-fixtures-upcoming-2022/aikwrz4xe7sanuw1a03mi1xg'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Next World Cup game: Match details for upcoming FIFA fixtures on ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ8S2cSDrEvp7Djtd83MSxvCBDUbmLEpvpB1dtfOGB_RuOQ4r9eysxizDFwlMB4cXWPI5NwjjIp" alt="Next World Cup game: Match details for upcoming FIFA fixtures on ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The next FIFA World Cup match is never too far away when you have 64 matches played in just 29 days. Here&#39;s everything you need to know about what&#39;s on tap&nbsp;...</p></div>
            </div>
        </a><a href='https://www.nytimes.com/2022/11/21/sports/soccer/world-cup-today-watch.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>How to Watch Today&#39;s World Cup Games</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSSSjXmBnxRH5IUv3n1eq1zykayQHe02_5h5yc3FTmF7SlPn_CKoyLwrCjDVYzxjk8Ki2UcNFhc" alt="How to Watch Today&#39;s World Cup Games" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>England, Iran, Senegal, Netherlands, the United States and Wales all play on day two of the tournament.</p></div>
            </div>
        </a><a href='https://www.timeout.com/uk/news/how-to-watch-all-of-waless-2022-world-cup-games-112122'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>How to watch all of Wales&#39;s 2022 World Cup games</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT2H52G-J1fI6YgYcnrCFInW6sW0zjw5BM-0DT6wpa4YdgjtdjsVSI4nBv1pZr2y0IwrmcFUq-y" alt="How to watch all of Wales&#39;s 2022 World Cup games" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Dragons have made it to the finals for the first time since 1958. Here&#39;s how to watch online and on TV.</p></div>
            </div>
        </a><a href='https://theathletic.com/live-blogs/world-cup-news-injuries-lineups/40oPLxrepvaY/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>World Cup 2022 day 2 live updates: Netherlands edge Senegal ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSNKUdV9uCIrTcOSsky4ResJzCcIVnDLPoRDGa8obXy5evt-KF-XH2yKGprRNejB0B68chigNMu" alt="World Cup 2022 day 2 live updates: Netherlands edge Senegal ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>How is Senegal adjusting with Sadio Mane? The game was in Doha, but it could have been Dakar. The relentless Senegalese drum beat from the stands underpinned a&nbsp;...</p></div>
            </div>
        </a><a href='https://www.radiotimes.com/tv/sport/football/world-cup-2022-today/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Which World Cup matches are on today? Schedule and TV ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRf32UyDVKfTEL2KLzV1pNY8Q1LrysuMA8oa1snAe2h4dzf98UX3Tgod9Hh4nSebsxNFRjvg1id" alt="Which World Cup matches are on today? Schedule and TV ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The World Cup is up and running with England, Wales and the Netherlands among the teams kick-starting their campaigns today. Advertisement.</p></div>
            </div>
        </a><a href='https://www.sportingnews.com/us/soccer/news/usa-vs-england-world-cup-soccer-time-channel-stream-usmnt/g2m3nbjywwvauuszd1p0rbua'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>When is USA vs. England World Cup 2022 soccer match? Date, time ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS547PUemN9QvxL2rxNkWwO9M6MmCKhOKWWDU3-78n1NhMhw6jmuKwdBhUvwlk_aDrn7NNoY-FV" alt="When is USA vs. England World Cup 2022 soccer match? Date, time ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The United States and England have a history of memorable matchups at the FIFA World Cup, and the two are paired up again in Group B at the 2022 tournament&nbsp;...</p></div>
            </div>
        </a><a href='https://mashable.com/article/2022-world-cup-england-vs-usa-livestream-group-b'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>England vs USA livestream: How to watch FIFA World Cup 2022 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR57keNt5shC-BYJ-B4dDbedUCqHyt18KAr3wIELto_uX27R52fnLgNBdNnn-Mj5p3q_rMfT-Wp" alt="England vs USA livestream: How to watch FIFA World Cup 2022 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The 2022 World Cup is underway in Qatar. See the schedule for each round as well as how to livestream every game of the tournament.</p></div>
            </div>
        </a>
        </Template></>;
}