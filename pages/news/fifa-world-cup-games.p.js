import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>FIFA World Cup games</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,FIFA World Cup games"/>
        <meta name="description" content="Trending News about FIFA World Cup games" /></Head><Template>
            <h1 style={{fontSize: "30"}}>FIFA World Cup games</h1>
            <Image width={800} height={500} src="https://img.etimg.com/thumb/msid-96059213,width-1070,height-580,imgsize-33592,overlay-economictimes/photo.jpg" alt="FIFA World Cup games"/>
            <h3>Recent News</h3>
            <a href='https://economictimes.indiatimes.com/news/international/us/world-cup-matches-happening-in-qatar-today-december-7-schedule-quarterfinal-details-here/articleshow/96058958.cms'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>World Cup matches happening in Qatar today: December 7 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSa9fG6C4MWEz1fbm9L14MWJ4iyEYCoV3jaumCsou3qkFSMiX51pLAMxYttpClvrpzYfp8iRCRm" alt="World Cup matches happening in Qatar today: December 7 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>No games are scheduled for today (December 7) at FIFA World Cup 2022. The matches will resume when Brazil takes on Croatia in the quarterfinals on December&nbsp;...</p></div>
            </div>
        </a><a href='https://en.as.com/soccer/qatar-2022-world-cup-daily-schedule-who-plays-today-8-december-n/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Qatar 2022 World Cup daily schedule: who plays today, 8 December?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTqUXvaAo1j5VRfN0yex-HVjfAhPhahLz4ZExF_5RbVv2AMwr0cMD3AZkS9Trpn6q4YzlRLXbJt" alt="Qatar 2022 World Cup daily schedule: who plays today, 8 December?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>We&#39;re over halfway through the four weeks of action at the FIFA showpiece tournament, as we head into the business end.</p></div>
            </div>
        </a><a href='https://www.hindustantimes.com/sports/football/world-cup-2022-the-final-eight-and-how-they-got-there-101670409562265.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>FIFA World Cup 2022: The final eight and how they got there</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS1AtYKKqFPzYPIVQENxkdMJ85dp2DAiBUhikkE8-CrcFjis-q-e7NPam3VVKw4HGsW4dlRTbbf" alt="FIFA World Cup 2022: The final eight and how they got there" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The tournament started with surprises but as the quarterfinalists line-up, we have five European teams, two South African team and one African team in the&nbsp;...</p></div>
            </div>
        </a><a href='https://nbcsportsgrouppressbox.com/2022/12/07/fifa-world-cup-2022-on-telemundo-peacock-quarterfinals-schedule-announce-teams-highlights-dec-9-dec-10/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>FIFA WORLD CUP 2022™ ON TELEMUNDO &amp; PEACOCK ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="FIFA WORLD CUP 2022™ ON TELEMUNDO &amp; PEACOCK ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Quarterfinals Matchup Include Croatia vs. Brazil, Netherlands vs. Argentina, Morocco vs. Portugal, and England vs. France on Telemundo, Universo and Peacock.</p></div>
            </div>
        </a><a href='https://www.bbc.com/pidgin/articles/c4ne3jgq1j0o'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>World Cup 2022 quarter-final fixtures: Qualified teams &amp; kick off time ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR4AavAq4Go6uAuTL9O7GnpzMVs5GbBL0Hh0PTirSSPazxvG_sM6RQr3uUfaIXDPwM6e9JqPvqw" alt="World Cup 2022 quarter-final fixtures: Qualified teams &amp; kick off time ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Di FIFA World Cup for Qatar don reach di quarter final stages afta di round of 16 games end on Tuesday.</p></div>
            </div>
        </a><a href='https://www.football.london/international-football/no-world-cup-matches-today-25692479'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Why are there no World Cup matches on today and when is the next ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQJz1NGqOW3gwFs_nnu7_IGe84uT9DXnpt0bpzIu0ZEo9QBAbdnTSKdtYLSs1xf9Gj3o3XwGA8j" alt="Why are there no World Cup matches on today and when is the next ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>For the first time in under a month there are no 2022 World Cup matches on television with the knockout stage of the tournament taking a break before&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}