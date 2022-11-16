import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Warriors vs Spurs</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Warriors vs Spurs"/>
        <meta name="description" content="Trending News about Warriors vs Spurs" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Warriors vs Spurs</h1>
            <Image width={800} height={500} src="https://www.si.com/.image/t_share/MTkzNzUxOTMwMjMxNTk2NDgz/usatsi_17940498.jpg" alt="Warriors vs Spurs"/>
            <h3>Recent News</h3>
            <a href='https://www.si.com/nba/warriors/news/warriors-vs-spurs-injury-report-revealed'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Warriors vs. Spurs Injury Report Revealed</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSY5otP658iVFkk827uOvvy0JDc2gh7jgNEl2G6yMPiKNKhaqTDlyhpfsAj3JTMUZY_oFvDtbEc" alt="Warriors vs. Spurs Injury Report Revealed" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Golden State Warriors are looking for a win vs. the San Antonio Spurs.</p></div>
            </div>
        </a><a href='https://www.cbssports.com/nba/news/warriors-vs-spurs-live-stream-info-tv-channel-how-to-watch-nba-on-tv-stream-online-28930207/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Warriors vs. Spurs live stream info, TV channel: How to watch NBA ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS_Vr3c-lO6k770uz9qrk5io9DdDznZF2Uiy4ToTAOjx0GY818pwmx-EL6mN5zWQvivyJLrQ9xB" alt="Warriors vs. Spurs live stream info, TV channel: How to watch NBA ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>This Monday, the Golden State Warriors are hoping to patch up the holes in a defense that has allowed an average of 119.23 points per game. They are getting&nbsp;...</p></div>
            </div>
        </a><a href='https://www.goldenstateofmind.com/2022/11/15/23459795/warriors-spurs-grades-jordan-poole-steph-curry'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jordan Poole, Steph Curry graded in Warriors vs. Spurs</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ7E6E_LeMUkTqKoxVZx2ldCB94AE2w9qxwxGeo7O43TFt7B9nefNCpIkG2CHRxcWPo4ZzQJMQJ" alt="Jordan Poole, Steph Curry graded in Warriors vs. Spurs" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Grading Steph Curry, Jordan Poole, Draymond Green, and the rest of the Golden State Warriors in the teams 132-95 win over the San Antonio Spurs.</p></div>
            </div>
        </a><a href='https://www.espn.com/nba/recap/_/gameId/401468360'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Spurs vs. Warriors - NBA Game Recap - November 14, 2022 | ESPN</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR1W5hnHLVTkOkB3Fe5_-r81XCW_cxIPGuIRRT14bnrPjCGXA-gQv8IOikLeNLU92EfbDBAs67l" alt="Spurs vs. Warriors - NBA Game Recap - November 14, 2022 | ESPN" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Visit ESPN for the game recap of the San Antonio Spurs vs. Golden State Warriors NBA basketball game on November 14, 2022.</p></div>
            </div>
        </a><a href='https://warriorswire.usatoday.com/article/how-to-watch-warriors-vs-spurs-live-stream-info-tv-channel-game-time-november-14/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>How to watch Warriors vs. Spurs: Live stream info, TV channel ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ-dpo2eWWmhrYPbSCjNx0YrSqhszqhRHFYeyH5fTgV1IiC1bRmR2N34CqucTifsVXp7Z0WI6Fj" alt="How to watch Warriors vs. Spurs: Live stream info, TV channel ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Golden State Warriors (5-8) will be attempting to build on a four-game home winning run when hosting the San Antonio Spurs (6-7) on Monday, November 14,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.masslive.com/sports/2022/11/warriors-vs-spurs-how-to-watch-nba-games-on-monday-night.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Warriors vs. Spurs: How to watch NBA games on Monday night</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSx4JrSGTEgMxuvG7v5KfIwYUyPV_WgyAM0z7d4I4L5z-nUJU9h9L2LqTfEGxmLWD5dW5z-3jG3" alt="Warriors vs. Spurs: How to watch NBA games on Monday night" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Stephen Curry who is averaging 32.8 points per game, will lead the Warriors into Monday&#39;s matchup against San Antonio.</p></div>
            </div>
        </a>
        </Template></>;
}