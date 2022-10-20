import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Newcastle vs Everton</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Newcastle vs Everton"/>
        <meta name="description" content="Trending News about Newcastle vs Everton" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Newcastle vs Everton</h1>
            <Image width={800} height={500} src="" alt="Newcastle vs Everton"/>
            <h3>Recent News</h3>
            <a href='https://www.skysports.com/football/newcastle-vs-everton/464754'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Newcastle 1-0 Everton: Miguel Almiron scores stunning winner to ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR7hEKNeIQc4lVWwkSHaGN7XZ9t4yUOOLGEmKjrUX_1BWeBAZd2DNaImn6uF6f4yPuKWAB98aLD" alt="Newcastle 1-0 Everton: Miguel Almiron scores stunning winner to ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Match report and highlights as Miguel Almirons superb first-half opener gives Newcastle their fifth win of the season; Dominic Calvert-Lewin made his first&nbsp;...</p></div>
            </div>
        </a><a href='https://soccer.nbcsports.com/2022/10/19/newcastle-vs-everton-live-score-updates-how-to-watch-stream-link-team-news-2/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Newcastle vs Everton live: Score, updates, stream link, lineups</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTY5zfcIogJnajXb6MxJlFHUAwad9QKIrqdjwHCwyE_9yOn5528QGosAmY-0jjZF4fouUm_cZfO" alt="Newcastle vs Everton live: Score, updates, stream link, lineups" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Newcastle United looks to continue its early-season push for a top-four place when it hosts improving Everton at St. James&#39; Park on Wednesday.</p></div>
            </div>
        </a><a href='https://www.goal.com/en-gb/news/newcastle-vs-everton-predictions-tips-and-betting-odds/blta01638e3c3ea1745'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Newcastle vs Everton: Predictions, tips &amp; betting odds</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQqJsu_BAEkl7xVXprhdYqdv2sRFitdYJdo_T3e7ixzPNAt4eDI0TDyWT1Z7I5Mx84guH699MB5" alt="Newcastle vs Everton: Predictions, tips &amp; betting odds" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Newcastle can extend their unbeaten run to six games when they take on Everton on Wednesday.</p></div>
            </div>
        </a><a href='https://www.bbc.co.uk/sport/football/63224225'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Newcastle run continues as Almiron sinks Everton</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRL5d6-T9a0GpUyzIPzO8xdqbPsrwwLmN9j2n8XymiWLpizFY9PcbofxPMtTmpc-AEKLOjDN4Sb" alt="Newcastle run continues as Almiron sinks Everton" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Newcastle underline their top-six credentials by beating Everton thanks to Miguel Almiron&#39;s fifth goal of the season.</p></div>
            </div>
        </a><a href='https://www.grandoldteam.com/2022/10/19/newcastle-v-everton-5/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Newcastle v Everton - GrandOldTeam</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSEByfoiIymjQpgVgTc7Z-HQqIpa2xqzZdvY3j72tFdl1Hjvrger1VpWVxN-APhVnQg5XI2gqh4" alt="Newcastle v Everton - GrandOldTeam" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>I&#39;ve written a few times previously about my contempt for the modern game being a fine line between hype and hysteria, engineered by and for the media and&nbsp;...</p></div>
            </div>
        </a><a href='https://www.espn.in/football/report?gameId=637936'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Newcastle United vs. Everton - Football Match Report - October 20 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Newcastle United vs. Everton - Football Match Report - October 20 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>NEWCASTLE, England, Oct 19 (Reuters) - Newcastle United forward Miguel Almiron scored a super first- half goal to secure a 1-0 win over toothless Everton in&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}