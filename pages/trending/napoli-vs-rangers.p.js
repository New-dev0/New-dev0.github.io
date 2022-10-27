import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Napoli vs Rangers</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Napoli vs Rangers"/>
        <meta name="description" content="Trending News about Napoli vs Rangers" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Napoli vs Rangers</h1>
            <Image width={800} height={500} src="https://a1.espncdn.com/combiner/i?img=%2Fi%2Fespn%2Fespn_logos%2Fespn_red.png" alt="Napoli vs Rangers"/>
            <h3>Recent News</h3>
            <a href='https://www.espn.in/football/report?gameId=652663'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Napoli vs. Rangers - Football Match Report - October 27, 2022 - ESPN</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT-TsF4zCqEHto2aOsJLBBn4Kclmh4x5pePehlEieBsNw4-gBZFjMEUU12mGchTgtYc0RY2v-cv" alt="Napoli vs. Rangers - Football Match Report - October 27, 2022 - ESPN" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Get a report of the Napoli vs. Rangers 2022-23 UEFA Champions League, Group Stage football match.</p></div>
            </div>
        </a><a href='https://football-italia.net/champions-league-line-ups-napoli-vs-rangers/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Champions League line-ups: Napoli vs. Rangers - Football Italia</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSQBgXaW5lf0p7h7WQ-r8wT3B8SmCfknaknaOvXqOrDs1f7zmyUP2n4ZJL_5u7_ZKSje78PvNgv" alt="Champions League line-ups: Napoli vs. Rangers - Football Italia" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Napoli seek a 12th consecutive victory in all competitions, looking to Giovanni Simeone and Giacomo Raspadori against Glasgow Rangers.</p></div>
            </div>
        </a><a href='https://www.goal.com/en-gb/news/napoli-vs-rangers-predictions-tips-and-betting-odds/blt6b5616fb9158cc50'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Napoli vs Rangers: Predictions, tips &amp; betting odds</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSbnbCS8fRPe1R9BblHPpmDB0mjzHOAdRwlakuzibTMCIKaqzokIQ1wJlK0Kf75FsDZ0o5uBiOC" alt="Napoli vs Rangers: Predictions, tips &amp; betting odds" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Napoli will be confident of maintaining their perfect record in the group stage of the Champions League when they host Rangers on Wednesday.</p></div>
            </div>
        </a><a href='https://www.theguardian.com/football/live/2022/oct/26/champions-league-tottenham-sporting-napoli-rangers-champions-league-clockwatch-live'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Tottenham 1-1 Sporting, Napoli 1-1 Rangers and more: Champions ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQPbh2EeAIgYimZf0T9Md2Jy_-nYfOGhKw03xE20_aIutlijmtOszJqC75q-rKVS-i2M0C13j3o" alt="Tottenham 1-1 Sporting, Napoli 1-1 Rangers and more: Champions ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Harry Kane&#39;s late goal was disallowed by a marginal offside decision when it looked like Tottenham had booked their place in the last 16.</p></div>
            </div>
        </a><a href='https://www.sportsunfold.com/napoli-vs-rangers-prediction-head-to-head-lineup-betting-tips-where-to-watch-live-today-uefa-champions-league-2022-match-details-october-27/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Napoli vs Rangers Prediction, Head-To-Head, Lineup, Betting Tips ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQngUNImhh8c0RSQcI4Bd6-yKis6QogSt69gUIyYRxKh1DvF4K0GlCA8sp4SJ8UrFDSB0QR6-Sf" alt="Napoli vs Rangers Prediction, Head-To-Head, Lineup, Betting Tips ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Wednesday&#39;s Champions League matchup will feature two teams with divergent campaigns thus far. Currently, Liverpool is second in Group A, three points&nbsp;...</p></div>
            </div>
        </a><a href='https://www.scotsman.com/sport/football/rangers/what-channel-is-napoli-v-rangers-on-kick-off-time-tv-details-live-stream-team-news-3892758'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>What channel is Napoli v Rangers on? Kick-off time, TV details, live ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQzUhFnfe4JQrZ8AOsmVIegeCe5E4VOQT88y2CTrg_z5B8k-g33yUevoVvRzOg5wssWMw1IoX4F" alt="What channel is Napoli v Rangers on? Kick-off time, TV details, live ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Rangers play their penultimate Champions League group stage match on Wednesday night against Napoli knowing they cannot progress to the knockout stages.</p></div>
            </div>
        </a>
        </Template></>;
}