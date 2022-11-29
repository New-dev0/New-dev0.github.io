import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>FIFA World Cup standings</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,FIFA World Cup standings"/>
        <meta name="description" content="Trending News about FIFA World Cup standings" /></Head><Template>
            <h1 style={{fontSize: "30"}}>FIFA World Cup standings</h1>
            <Image width={800} height={500} src="https://sportshub.cbsistatic.com/i/r/2022/11/27/1302d013-34c6-4877-ac0b-905733d97ffe/thumbnail/1200x675/7a17df84b356ca8ec3b7956e40c19093/untitled-design-38.png" alt="FIFA World Cup standings"/>
            <h3>Recent News</h3>
            <a href='https://www.cbssports.com/soccer/news/fifa-world-cup-2022-scenarios-standings-tiebreakers-france-brazil-portugal-advance-27-teams-still-alive/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>FIFA World Cup 2022 scenarios, standings, tiebreakers: France ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ1rSq7hBUpmiePr-1DdfWgICb1MHRey183Z750BAON_QyPrF6tD1wW2K7z7pQyxZHNWmzVXiVD" alt="FIFA World Cup 2022 scenarios, standings, tiebreakers: France ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>France is already through, who will join them in the knockout stage of the tournament?</p></div>
            </div>
        </a><a href='https://sportstar.thehindu.com/football/fifa-world-cup/news/fifa-world-cup-points-table-qatar-2022-group-e-f-stage-standings-matches-goals-gf-ga/article66191454.ece'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>FIFA World Cup points table after ESP vs GER: Sergio Busquets ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT0W7QTJ50RKNnrZPFAhJkD_N5ft25BIvYPKwe1E6zGGEjeWoYchNH52sltZC_uAkmxet4h5mg4" alt="FIFA World Cup points table after ESP vs GER: Sergio Busquets ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Meanwhile, Spain stayed atop Group E despite playing out a 1-1 draw with Germany. Group A standings: Position, Teams, Matches, Won, Drawn, Lost&nbsp;...</p></div>
            </div>
        </a><a href='https://www.thequint.com/sports/fifa-world-cup-2022-points-table-latest-updated-team-rankings-and-standings-after-cameroon-vs-serbia'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>FIFA World Cup 2022 Points Table: Latest &amp; Updated Team ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcToboIcDKSmkdsKKZdU3He_TrmdnefuWZ-gBDILXbkCD_tu6TNTTHDqrjNDfCDSgTUK9FFWAoxU" alt="FIFA World Cup 2022 Points Table: Latest &amp; Updated Team ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The tournament kicked off on Sunday, 20 November 2022. All the participating countries have been categorized in 8 groups - Groups A, B, C, D, E, F, G, and H.</p></div>
            </div>
        </a><a href='https://olympics.com/en/news/fifa-world-cup-2022-netherlands-results-scores-and-standings'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>FIFA World Cup 2022: Netherlands results, scores and standings</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS5LY0i96jvMRzflBbtf0n-RSQR7bexE-xJrwGhNlJUaDK0UDW1yM9qHZIQMsfIm_5WNJ7aHdXS" alt="FIFA World Cup 2022: Netherlands results, scores and standings" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Find out the Team Netherlands&#39; results, scores and group standing at the FIFA World Cup 2022. Who scored for the Oranje in Qatar?</p></div>
            </div>
        </a><a href='https://dknation.draftkings.com/2022/11/28/23482323/world-cup-2022-knockout-round-qualification-group-g-switzerland-serbia-cameroon-scenario-tiebreakers'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>World Cup standings: Knockout round qualification, tiebreaker ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTIfkvatqO9sv50L8ywhKeVhKrbr64SyPD5irNhfWlYEyAd-aLK_CxavvUB8SsE-8oEM_GKqgpk" alt="World Cup standings: Knockout round qualification, tiebreaker ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Here&#39;s the knockout qualification scenarios in Group G at the 2022 World Cup.</p></div>
            </div>
        </a><a href='https://www.football.london/international-football/fifa-world-cup-group-stage-25625618'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>2022 FIFA World Cup: What happens if teams finish on equal points ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSI1d_CNMljlBEUJar_q2bS4yWI9anB6NlwKnayHn5TX1vxAHau1tdWvyvT_z8hy1sXSoCnK7A9" alt="2022 FIFA World Cup: What happens if teams finish on equal points ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The World Cup group stage is over but some of the standings are too close to call.</p></div>
            </div>
        </a><a href='https://www.sportingnews.com/us/soccer/news/round-of-16-world-cup-teams-qualified-bracket-match-schedule-fixtures-2022/rmoambxam6sowze7tzzixiqm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Round of 16 World Cup 2022: Teams qualified, bracket, match ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRa-Qr_9h_G6dsPggmgSY_7VljIzzFIJcMWgdxUVvzDjzhKeOtE7dbWi28J1X4gMTy6-4CNdfvU" alt="Round of 16 World Cup 2022: Teams qualified, bracket, match ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Round of 16 at the 2022 FIFA World Cup is set to begin on Saturday, December 3. All eight of the matches will be played over four days as the teams to&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}