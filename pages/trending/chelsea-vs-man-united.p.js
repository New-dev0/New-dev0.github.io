import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Chelsea vs Man United</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Chelsea vs Man United"/>
        <meta name="description" content="Trending News about Chelsea vs Man United" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Chelsea vs Man United</h1>
            <Image width={800} height={500} src="https://images.indianexpress.com/2022/10/Casemiro.png" alt="Chelsea vs Man United"/>
            <h3>Recent News</h3>
            <a href='https://indianexpress.com/article/sports/football/chelsea-vs-manchester-united-live-score-updates-premier-league-2022-8225383/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Chelsea vs Manchester United Highlights: Casemiro&#39;s late goal ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcStTpNWwWMne3vcJTCbP_qDLzARVoJ3qotg16rC6oY_QajwPQ0ltlLrb-omRYEpvln8JUuE3nWg" alt="Chelsea vs Manchester United Highlights: Casemiro&#39;s late goal ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Chelsea vs Manchester United, Premier League Highlights: Late drama with two goals in seven minutes led to a 1-1 draw between Chelsea and Manchester United&nbsp;...</p></div>
            </div>
        </a><a href='https://sportstar.thehindu.com/football/chelsea-manchester-united-live-score-premier-league-2022-23-updates-commentary-epl-highlights-lineups/article66045883.ece'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Chelsea 1-1 Manchester United, Highlights Premier League ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ0IhpeUe-si5QnbQNT-9hDruijArJtAuWKOfNzLpDDhXLMye65DM4DRfF5hc1-ADodayM4Zl7Z" alt="Chelsea 1-1 Manchester United, Highlights Premier League ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Chelsea vs Manchester United, Premier League: Catch the live score, updates and commentary from the match at Stamford Bridge, London.</p></div>
            </div>
        </a><a href='https://khelnow.com/football/2022-10-world-football-premier-league-2022-23-chelsea-vs-manchester-united'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Premier League 2022-23: Chelsea 1-1 Manchester United Replay</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQNbebRFBNQXu4q7EDnYmbEcX0WwwHccoGEwmoO6DBwEhNErGc433IMuyuZRXCmuMjoS7UfsQox" alt="Premier League 2022-23: Chelsea 1-1 Manchester United Replay" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Hello everyone and welcome to Khel Now&#39;s LIVE COVERAGE of the Chelsea vs Manchester United match in the Premier League 2022-23.</p></div>
            </div>
        </a><a href='https://www.espn.in/football/report?gameId=637947'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Chelsea vs. Manchester United - Football Match Report - October 22 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSFzFFf7I791QoqDYjJGiCeR3eGfI-XfWwxTFkCUI6Uh-IAYXYHJZeO8w55ORDnqbGtUmvfsJlP" alt="Chelsea vs. Manchester United - Football Match Report - October 22 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Get a report of the Chelsea vs. Manchester United 2022-23 English Premier League football match.</p></div>
            </div>
        </a><a href='https://www.sportingnews.com/us/soccer/news/chelsea-vs-man-united-live-score-highlights-premier-league/egeprzyot8yoglfiwa5lvjfe'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Chelsea vs. Manchester United result, highlights &amp; analysis as ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQxut7Llxf_4d8sXQfkpHizVizTUF90uMtYZyNmDsPzEyS8WQP42ubZRElqIs4UYkVb7tchCz_T" alt="Chelsea vs. Manchester United result, highlights &amp; analysis as ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Manchester United left it late to take points against Chelsea as Casemiro equalised in injury-time.</p></div>
            </div>
        </a><a href='https://www.bbc.com/pidgin/sport-63359169'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Chelsea vs Man United highlights: Casemiro score equaliser for di ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSwTnL2gu49KEkTuAJCRRP0SGWNUwaOOP6CWpJgfWt_Vh1rotlc9Q-7UWld8hfubE26tY7bl2As" alt="Chelsea vs Man United highlights: Casemiro score equaliser for di ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Chelsea and Manchester United play draw ewen dem meet for Stamford Bridge on Saturday. Na ogbonge match for di two sides. A win for Manchester United and&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}