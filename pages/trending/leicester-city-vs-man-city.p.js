import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Leicester City vs Man City</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Leicester City vs Man City"/>
        <meta name="description" content="Trending News about Leicester City vs Man City" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Leicester City vs Man City</h1>
            <Image width={800} height={500} src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltd231186d01479002/63543843d8b0bb0c673ec1c8/GettyImages-1435623465.jpg" alt="Leicester City vs Man City"/>
            <h3>Recent News</h3>
            <a href='https://www.goal.com/en-in/news/leicester-city-vs-manchester-city-lineups-and-live-updates/blt63db41e575cf7594'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Leicester City vs Manchester City: Lineups &amp; LIVE updates</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTZIq7zQ37dbso6d6n4Z4KuPybZqpGMXFVE4dRrgXSwM6l5Xs2b26YMVyhm5pJ-M_N8j6jNhB5B" alt="Leicester City vs Manchester City: Lineups &amp; LIVE updates" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Pep Guardiola&#39;s City are only two points behind Arteta&#39;s Arsenal and come into this on the back of a goalless draw against Borussia Dortmund in the Champions&nbsp;...</p></div>
            </div>
        </a><a href='https://www.skysports.com/football/leicester-vs-man-city/report/464771'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Leicester City 0-1 Man City: Kevin De Bruyne free-kick sends ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR94nmL3PmdW9keqkCueNW68jElffcPo-SuvS-58lFOPbauzxKmO7KceZK2DQ0WZbPpI8BgSfcD" alt="Leicester City 0-1 Man City: Kevin De Bruyne free-kick sends ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Match report as Man City beat Leicester City 1-0 at the King Power; the visitors claim all three points thanks to Kevin De Bruynes second-half free-kick;&nbsp;...</p></div>
            </div>
        </a><a href='https://www.espn.in/football/report?gameId=637955'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Leicester City vs. Manchester City - Football Match Report - October ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRl7t8eLoFBXZdVUIRx0_E-62mEPVgDf2afNMQ8oJW3XP7K-_H6AR9fYcWTdho4p2kKmenEY9V2" alt="Leicester City vs. Manchester City - Football Match Report - October ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Get a report of the Leicester City vs. Manchester City 2022-23 English Premier League football match.</p></div>
            </div>
        </a><a href='https://www.bbc.co.uk/sport/football/63354924'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Stunning De Bruyne free-kick moves Man City top</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTbX07pW_iYzn1alH_XCm9xRY4Pkeh3AcLO4mN7auOHme7zBA0MotRzvyZGRH37Y9Z_hrXJRELj" alt="Stunning De Bruyne free-kick moves Man City top" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Foxes&#39; manager Brendan Rodgers had clearly set up his team to do a containing job on the reigning champions and it had worked effectively until De Bruyne curled&nbsp;...</p></div>
            </div>
        </a><a href='https://sportstar.thehindu.com/football/epl/premier-league-live-score-leicester-vs-man-city-live-haaland-injury-de-bruyne/article66069181.ece'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Highlights Leicester City 0-1 Manchester City, Premier League: De ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTGDHyV-2ZdqxxrVakBF5AH1RQjSi-mwDnkr6426zpC5UztDdws5_Ard8s-LNQfaiNBARz7F0vq" alt="Highlights Leicester City 0-1 Manchester City, Premier League: De ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Highlights of the match between Leicester City and Manchester City.</p></div>
            </div>
        </a>
        </Template></>;
}