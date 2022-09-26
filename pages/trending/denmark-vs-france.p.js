import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Denmark vs France</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Denmark vs France"/>
        <meta name="description" content="Trending News about Denmark vs France" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Denmark vs France</h1>
            <Image width={800} height={500} src="" alt="Denmark vs France"/>
            <h3>Recent News</h3>
            <a href='https://www.goal.com/en-in/news/denmark-vs-france-live-stream-tv-channel-kick-off-time-and-how-to-watch/blt54303156e9199a6b'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Denmark vs France: Live stream, TV channel, kick-off time &amp; how to ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR0K7eKf3QpKrOLqSpr-etWW_qV5LLIR3L_6_TzSmhvkFmx68kjfrsuKD-MSPDNbz1vUikJnrTy" alt="Denmark vs France: Live stream, TV channel, kick-off time &amp; how to ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The 2022-23 UEFA Nations Legaue enters its final stages this week as Denmark welcome France to face them at Parken Stadium in a Group A1 encounter.</p></div>
            </div>
        </a><a href='https://www.goal.com/en-gb/news/denmark-vs-france-predictions-tips-and-betting-odds/bltb7dbc98310d50d66'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Denmark vs France: Predictions, tips &amp; betting odds</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQd79UV79LJycnVYprgo2RSm2FTr1CmcELZ1kDuZsARL5V6cffwYCK75Mup9EnHtvpcjPGmHcbS" alt="Denmark vs France: Predictions, tips &amp; betting odds" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>France are looking to rescue their UEFA Nations League campaign when they take on Denmark on Sunday. Les Bleus are five points off of top spot after five&nbsp;...</p></div>
            </div>
        </a><a href='https://www.espn.com/soccer/report?gameId=624023'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Denmark vs. France - Football Match Report - September 25, 2022 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSsLSx8RBvNaYWvPgCbtWrAgbLMf4erYAUQAG-C2uOSTweXUgMOJsfrQgYTStb-zRY4GdW3yLI8" alt="Denmark vs. France - Football Match Report - September 25, 2022 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Get a report of the Denmark vs. France 2022-23 UEFA Nations League, Group Stage football match.</p></div>
            </div>
        </a><a href='https://www.insidesport.in/uefa-nations-league-2022-live-denmark-aim-for-shock-upset-over-france-with-finals-qualification-at-stake-check-denmark-vs-france-live-predicted-xi-live-streaming-follow-live/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>UEFA Nations League 2022 LIVE: DEN 2-0 FRA,France are yet to ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTo7lAVP4Yv_Jas6JL8iSmA9Ll5-67ZoQ6T5hd_g4zEqBKBgE0qM0MFQh_fLqtjIXZ5ScvtoQOF" alt="UEFA Nations League 2022 LIVE: DEN 2-0 FRA,France are yet to ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>UEFA Nations League 2022 LIVE: Denmark aim for SHOCK UPSET over France with Finals qualification at stake, Check Denmark vs France LIVE, Live Streaming –</p></div>
            </div>
        </a><a href='https://zeenews.india.com/football/kylian-mbappes-france-vs-denmark-uefa-nations-league-match-livestreaming-details-when-and-where-to-watch-fra-vs-den-2514200.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kylian Mbappes France vs Denmark UEFA Nations League match ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRPJ0K5AEPwN0-nxiMeN3gD9Rrf9yWlxNznhr9B7LpppV-HrcRrYg_nfQ52IkAa8n6YB48Q_5L5" alt="Kylian Mbappes France vs Denmark UEFA Nations League match ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>France will take on Denmark as the UEFA Nations League 2022-23 enters its final stages at the Parken Stadium in the Group A1 fixture. It&#39;s good a match for&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}