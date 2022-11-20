import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Florida vs Vanderbilt</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Florida vs Vanderbilt"/>
        <meta name="description" content="Trending News about Florida vs Vanderbilt" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Florida vs Vanderbilt</h1>
            <Image width={800} height={500} src="https://cdn.vox-cdn.com/thumbor/DMRZiRMQLx2dK99dPkL3cwCEkIA=/0x0:4883x2557/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24211514/1441048006.jpg" alt="Florida vs Vanderbilt"/>
            <h3>Recent News</h3>
            <a href='https://www.alligatorarmy.com/2022/11/19/23467838/florida-vs-vanderbilt-anchor-of-gold'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Florida vs. Vanderbilt: Q&amp;A with Anchor of Gold</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTzbppELMvfu_7P0V3xMf8vGx3QdPkAR9Jfk-boEFGsK46-wUloxW7uR0ZyJ_uSTfJuMkgG0Fsl" alt="Florida vs. Vanderbilt: Q&amp;A with Anchor of Gold" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Questions and answers about Mike Wright, Clark Lea, and Vandy&#39;s new V.</p></div>
            </div>
        </a><a href='https://floridagators.com/news/2022/11/19/football-slant-florida-vs-vanderbilt-nov-19-2022.aspx'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>FINAL: Vanderbilt 31, Florida 24</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQuWkoSyqyF5aiKz7DwkqeX6rwYHu7nFgeA61pB0zMSBKtI5BuwroQn0KThqOnAsZ3mzqfhcvMc" alt="FINAL: Vanderbilt 31, Florida 24" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>WHAT HAPPENED: Quarterback Mike Wright threw three touchdown passes to three different receivers and the Vanderbilt defense completely neutralized the&nbsp;...</p></div>
            </div>
        </a><a href='https://www.espn.com/college-football/recap/_/gameId/401403955'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Florida vs. Vanderbilt - Game Recap - November 19, 2022 - ESPN</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTokFOS74cnE-mfUep2scUCAzO4Jyd2U6VRT5OtnTBeQ3ABKoPOIettkeHMN_BykZv3VmHZQft7" alt="Florida vs. Vanderbilt - Game Recap - November 19, 2022 - ESPN" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Get a recap of the Florida Gators vs. Vanderbilt Commodores football game.</p></div>
            </div>
        </a><a href='https://www.tennessean.com/story/sports/college/vanderbilt/2022/11/19/vanderbilt-football-vs-florida-live-score-updates/69640993007/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Vanderbilt football score vs. Florida: Live updates</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRxytsdZayVDiKr0msnfEJZow3PiE4ogdDU6I2n3vxy2IbhLqbcss7enedogEPJffsAPo-KKZIy" alt="Vanderbilt football score vs. Florida: Live updates" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Commodores (4-6, 1-5 SEC) can keep bowl eligibility alive with a win over the Gators (6-4, 3-4) on Saturday. Florida has had a somewhat up and down season&nbsp;...</p></div>
            </div>
        </a><a href='https://gatorswire.usatoday.com/lists/florida-football-vanderbilt-commodores-social-media-reactions-after/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Social media&#39;s reactions to Florida&#39;s 31-24 loss vs Vanderbilt</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQoaH4mQUvRcrTKMwL-NK-REyJYserrLAsZUdfz0Jz2b8iHhMiZFqUkmESaWVUWwXjwv0QVfU4e" alt="Social media&#39;s reactions to Florida&#39;s 31-24 loss vs Vanderbilt" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Florida Gators lost to the Vanderbilt Commodores, 31-24, Saturday in their final SEC game of the season. It was the first Florida loss in Nashville&nbsp;...</p></div>
            </div>
        </a><a href='https://www.al.com/sports/2022/11/florida-vs-vanderbilt-by-the-numbers-elusive-qbs-square-off.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Florida vs. Vanderbilt by the numbers: Elusive QBs square off</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRD5kq2EAXUFd-q0zLmWSMPi3OU5-Vt7Cqdt4aMPrQ3NyWtfT8QTvajGg9wLw7OZfeZXLJDHWp7" alt="Florida vs. Vanderbilt by the numbers: Elusive QBs square off" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Florida and Vanderbilt will square off in an SEC game at 11 a.m. CST Saturday at FirstBank Stadium in Nashville, Tennessee.</p></div>
            </div>
        </a><a href='https://onlygators.com/11/19/2022/florida-vs-vanderbilt-prediction-pick-odds-spread-football-game-time-watch-live-stream-tv-channel/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Florida vs. Vanderbilt: Prediction, pick, odds, spread, football game ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Florida vs. Vanderbilt: Prediction, pick, odds, spread, football game ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Coming off their two most complete games of the season, the Florida Gators are riding high looking to cement their first winning streak under head coach&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}