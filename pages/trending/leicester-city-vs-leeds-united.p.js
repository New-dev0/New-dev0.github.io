import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Leicester City vs Leeds United</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Leicester City vs Leeds United"/>
        <meta name="description" content="Trending News about Leicester City vs Leeds United" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Leicester City vs Leeds United</h1>
            <Image width={800} height={500} src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt3cba1472f3625912/60dd9b9ad9a5243b66a310b5/7652e9676123ff4db31797dd53fb7f92c39dd3d9.jpg" alt="Leicester City vs Leeds United"/>
            <h3>Recent News</h3>
            <a href='https://www.goal.com/en-in/news/leicester-city-vs-leeds-united-predictions-tips-and-betting-odds/blte1b079e2d11a319c'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Leicester City vs Leeds United: Predictions, tips &amp; betting odds</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQEEUfx7PjFCJNyH8j8U0rguy5EDYW-7zY6qTVSw-v-wsINc5UoxnKkJpHKB_aD2a7JSKIUMUM7" alt="Leicester City vs Leeds United: Predictions, tips &amp; betting odds" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Two struggling Premier League sides meet at the King Power stadium on Thursday evening as bottom team Leicester City host 16th placed Leeds United.</p></div>
            </div>
        </a><a href='https://www.leedsunited.com/news/team-news/30521/live-updates-leicester-city-vs-leeds-united'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Report: Leicester City 2-0 Leeds United</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTSuFT0A8iyOOzDaP8yUNoYgGUX1Ja6oRybOMJIQmgrqnMbBNR7fNFh3R-7IUs6wFjErSseAWVS" alt="Report: Leicester City 2-0 Leeds United" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Leicester: Ward (GK), Justin, Faes, Barnes (Iheanacho 85&#39;), Tielemans (C), Vardy (Daka 64&#39;), Amartey, Dewsbury-Hall, Praet (Perez 70&#39;), Castagne, Soumare (Mendy&nbsp;...</p></div>
            </div>
        </a><a href='https://www.bbc.co.uk/sport/football/63238010'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Marsch booed as Leeds loss lifts Leicester off bottom</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR2Mb0mK9tF8lSqfxua2-Yn4UMl_tM4ElgeqZmwXo9vcynwyoCXF4y--1LBd90BRMajAieXn7Ti" alt="Marsch booed as Leeds loss lifts Leicester off bottom" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Manager Jesse Marsch is booed by Leeds fans as Leicester City secure a valuable Premier League victory to move off the bottom of the table.</p></div>
            </div>
        </a><a href='https://www.leicestermercury.co.uk/sport/football/football-news/leicester-team-news-leeds-vardy-7728849'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Leicester City team news v Leeds United: Jamie Vardy replaces ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTxS9HZC7tN5zlvptIQYaw66J-V0GGd_-WZfGMXAfsuFMiBVBCcF5gYAPaFEhYAD7UESBxhdeHR" alt="Leicester City team news v Leeds United: Jamie Vardy replaces ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>How Leicester City line up at the King Power Stadium as Brendan Rodgers makes two changes to his side, with Dennis Praet coming in for the suspended James&nbsp;...</p></div>
            </div>
        </a><a href='https://www.vavel.com/en-us/soccer/2022/10/19/1126822-leicester-city-vs-leeds-united-live-stream-score-updates-and-how-to-watch-premier-league-match.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Highlight and goals: Leicester 2-0 Leeds in Premier League 2022-23</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR7YgXoRXjsdWWgAieTcX1yyXj6Zm7dHncgyDo0LsUjHSqLcAUYnUgw_8geOvHxJpxtspN1KV8-" alt="Highlight and goals: Leicester 2-0 Leeds in Premier League 2022-23" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Our coverage of the match Leicester City vs Leeds United of matchday 12 of Premier League 2022-23 comes to an end. Thanks for joining us! Stay tuned to VAVEL.</p></div>
            </div>
        </a><a href='https://www.telegraph.co.uk/football/2022/10/20/leicester-vs-leeds-live-score-latest-updates-premier-league/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Leicester relieve pressure on Brendan Rodgers and pile it on Jesse ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS-nmN_VDMNGESTuQn7nqk0NLamWkmtt7r8iuxHUwftAz1tzZOe7QXGUpRZonrehy_XOx6pV4j7" alt="Leicester relieve pressure on Brendan Rodgers and pile it on Jesse ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Post-match Opta stats pack &middot; Since earning just four points in their first nine Premier League games this season (W1 D1 L7), Leicester have picked up four in&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}