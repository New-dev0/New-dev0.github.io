import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Liverpool vs Leeds United</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Liverpool vs Leeds United"/>
        <meta name="description" content="Trending News about Liverpool vs Leeds United" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Liverpool vs Leeds United</h1>
            <Image width={800} height={500} src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltc9fcb5a5a344c9f7/62172e07a8ab79676acedc67/klopp-celebrates.jpg" alt="Liverpool vs Leeds United"/>
            <h3>Recent News</h3>
            <a href='https://www.goal.com/en-in/news/liverpool-vs-leeds-lineups-live-updates/blt134868d31e9d2345'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Liverpool vs Leeds United: Lineups and LIVE updates</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQlBjR3aFfmx0Ck_9Mtu5x1hG4W-cZacDgUUfw3HD9Wq6XsJLyfodW2SnpYC89YqIIJc9QeeRid" alt="Liverpool vs Leeds United: Lineups and LIVE updates" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Liverpool will look to bounce back from the Forest defeat last weekend when they host a relegation-battlers Leeds in the Premier League on Saturday.</p></div>
            </div>
        </a><a href='http://www.espn.in/football/report?gameId=637956'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Liverpool vs. Leeds United - Football Match Report - October 30 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQG9PKNgBQJZe3a3fHK9mAEz7FbR64la2S9fhnIxW8slbER0EPSDeCf0EwnWos0Cm5PZKxBkmIz" alt="Liverpool vs. Leeds United - Football Match Report - October 30 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Crysencio Summerville scored a dramatic late winner as Leeds United shocked Liverpool 2-1 at Anfield on Saturday night, handing Jurgen Klopp&#39;s side their&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sportingnews.com/us/soccer/news/liverpool-vs-leeds-united-live-score-highlights-premier-league/sgk7y4sbq87lkzmi2ihxer7f'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Liverpool vs. Leeds United result, highlights and analysis as ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSkl2LEva38k6SqOYLZJTrfRTmfu0VRmKE9nA3ftp3Ay3WuLbkZftGzSFrZ50BGrUEyNvf89UvH" alt="Liverpool vs. Leeds United result, highlights and analysis as ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Relive all the action from a thrilling game at Anfield won by Crysencio Summerville&#39;s late, late goal.</p></div>
            </div>
        </a><a href='https://www.insidesport.in/liverpool-vs-leeds-united-live-liverpool-aim-to-return-to-winning-ways-against-struggling-leeds-united-check-liverpool-vs-leeds-united-predicted-xi-team-news-follow-live/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Liverpool vs Leeds United LIVE -LIV 1-1 LEE, Summerville puts ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRMngM22B3ygjbIuHMkVZ-qMLWhuOQhzoVzjKi3nzt64jLJRCSRyh49Gjh0CjGzgXzSrXcZ1HNzxQ" alt="Liverpool vs Leeds United LIVE -LIV 1-1 LEE, Summerville puts ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Liverpool vs Leeds United LIVE - Liverpool AIM to return to WINNING ways against Leeds United - Liverpool vs Leeds Live Streaming, Premier League LIVE.</p></div>
            </div>
        </a><a href='https://theathletic.com/live-blogs/liverpool-leeds-united-score/QJm2yL6v8OlX/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>How Leeds beat Liverpool at Anfield in dramatic fashion - live</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQclxMcRVPY4V76gf4reL3C1WcKfxCZJQlTW_Tip6367ktEoPq55bYFt6bKddASYXBo3aUMlV5Z" alt="How Leeds beat Liverpool at Anfield in dramatic fashion - live" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Leeds United pulled off a miraculous result at Anfield to beat Liverpool 2-1. Crysencio Summerville scored an 89th-minute winner when he poked past Alisson&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}