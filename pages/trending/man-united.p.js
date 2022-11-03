import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Man United</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Man United"/>
        <meta name="description" content="Trending News about Man United" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Man United</h1>
            <Image width={800} height={500} src="https://cdn.theathletic.com/app/uploads/2022/11/02102224/martial-antony-sancho-1024x683.jpg" alt="Man United"/>
            <h3>Recent News</h3>
            <a href='https://theathletic.com/3755445/2022/11/02/martial-antony-sancho-injury-man-utd/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Martial, Antony and Sancho out of Manchester United&#39;s trip to Real ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSUxDbUZ9VG2QyXkyv1p1nZ_5s0E6HKDK-Hzdc2fKss5YnBprbr5dfWtRAJVp4hQ1EeKaj6894j" alt="Martial, Antony and Sancho out of Manchester United&#39;s trip to Real ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Anthony Martial, Antony, Jadon Sancho and have been left out of Manchester United&#39;s 23-man squad for their final Europa League group game against Real&nbsp;...</p></div>
            </div>
        </a><a href='https://www.manchestereveningnews.co.uk/sport/football/football-news/manchester-united-squad-real-sociedad-25416235'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Anthony Martial absent as Manchester United confirm travelling ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTYkI-ZjadAqBsnX1id5hk-KXxriBvCtQXJoNJwtn1ORdiDGvaHnU0q7EZ-F6engv63i3dkLpg7" alt="Anthony Martial absent as Manchester United confirm travelling ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Man United have confirmed their 23-man travelling squad for Thursday&#39;s match against Real Sociedad in the Europa League.</p></div>
            </div>
        </a><a href='https://www.insidesport.in/real-sociedad-vs-man-united-live-big-match-in-uefa-europa-league-manchester-united-targets-big-win-over-real-sociedad-to-avoid-qualification-playoffs-follow-live/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Real Sociedad vs Man United LIVE: Manchester United TARGETS ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSVcQFQiG7rTpRItava6zrLgHmgzwWEJJH7WsDFrInf9kyYe8uAlp7nJ3NT87gr54s9j8Kq4sjH" alt="Real Sociedad vs Man United LIVE: Manchester United TARGETS ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Real Sociedad vs Man United LIVE: UEFA Europa League LIVE Streaming: Manchester United will travel to Spain where they will face Real Sociedad in their bid&nbsp;...</p></div>
            </div>
        </a><a href='https://www.standard.co.uk/sport/football/man-utd-xi-vs-real-sociedad-predicted-lineup-confirmed-team-news-injury-latest-2022-europa-league-b1036712.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Manchester United XI vs Real Sociedad: Predicted lineup, confirmed ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTK2UpKcQJ5U2rQwTd7PGGaQ1uIEyIyN51CeBB643P3Sx0N5EPOAq2M4Ne8FUEdrEPEKwROwgha" alt="Manchester United XI vs Real Sociedad: Predicted lineup, confirmed ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Manchester United could have Anthony Martial back in their line-up for Thursday&#39;s Europa League showdown with Real Sociedad.</p></div>
            </div>
        </a><a href='https://www.goal.com/en-in/news/real-sociedad-vs-man-utd-live-stream-tv-kick-off-where-to-watch/blt1c87c18c4ee5d056'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Real Sociedad vs Manchester United: Live stream, TV channel, kick ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcStCYtxR8H8kWD2-af7CKykpt8cjbWgt2KEfSMc-S2sLoSqt7AjAhLSNhdr0xfYeUp8-LbbHfi4" alt="Real Sociedad vs Manchester United: Live stream, TV channel, kick ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Where to watch Real Sociedad vs Man Utd Europa League game, including kick-off time &amp; team news.</p></div>
            </div>
        </a><a href='https://www.mirror.co.uk/sport/football/news/man-utd-antony-martial-sancho-28390537'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Man Utd explain Antony, Anthony Martial and Jadon Sancho ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSWLMPGhcBNJ2W2SkX0iKTPtSeIhH_mHQS4w19a7Ew9T7H2eG2AZweBervSZvVRit5aQ0pdEcjT" alt="Man Utd explain Antony, Anthony Martial and Jadon Sancho ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Erik ten Hag will be without Antony, Anthony Martial and Jadon Sancho for Manchester United&#39;s trip to Real Sociedad as they look to top their Europa League&nbsp;...</p></div>
            </div>
        </a><a href='https://strettynews.com/2022/11/02/man-united-duo-not-spotted-in-training-ahead-of-europa-league-showdown/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Man United duo not spotted in training ahead of Europa League ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTShqgh9Jv_Y7_Y7ilwNBCSIQ-kaxomsMHBdfe1Xg5oslP9esMTd2PmBmp2uJvqqS8zvSyX3zTt" alt="Man United duo not spotted in training ahead of Europa League ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Manchester United are preparing for potentially their biggest game of the season, with Erik ten Hag&#39;s men making the trip to Spain to face Real Sociedad in&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}