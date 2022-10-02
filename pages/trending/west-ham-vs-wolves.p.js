import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>West Ham vs Wolves</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,West Ham vs Wolves"/>
        <meta name="description" content="Trending News about West Ham vs Wolves" /></Head><Template>
            <h1 style={{fontSize: "30"}}>West Ham vs Wolves</h1>
            <Image width={800} height={500} src="https://i.guim.co.uk/img/media/b0f02f1420138d86713a8d54544ef9b8ed5a0653/1_42_2321_1394/master/2321.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=f23bef8c9d7b4603779ea57fa8e0ace5" alt="West Ham vs Wolves"/>
            <h3>Recent News</h3>
            <a href='https://www.theguardian.com/football/live/2022/oct/01/west-ham-v-wolves-premier-league-live'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>West Ham 2-0 Wolves: Premier League – as it happened</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQTPv2hFgKALW9I4Jj2aCgjti5FunOaberMl4tWvGp30zHOXH_vKQcEoOJGtswYbt7l-77NQpp7" alt="West Ham 2-0 Wolves: Premier League – as it happened" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Minute-by-minute report: Gianluca Scamacca&#39;s first Premier League goal helped to lift West Ham out of the bottom three at Wolves&#39; expense.</p></div>
            </div>
        </a><a href='https://talksport.com/football/1206116/west-ham-v-wolves-live-stream-commentary-kick-off-time-date-tv-channel-team-news-moyes-costa/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>West Ham v Wolves LIVE stream: Pressure builds on David Moyes ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT_LeOqc36Aw0jd72fvkwk6lIQhPetMu1CPk31S4dU8WjhA9qv5xvT4NUx4Cowtpw0u4tlgEEHu" alt="West Ham v Wolves LIVE stream: Pressure builds on David Moyes ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Premier League strugglers West Ham and Wolves meet in the Saturday evening clash this weekend.The Hammers are in the relegation zone after picking up.</p></div>
            </div>
        </a><a href='https://www.standard.co.uk/sport/football/west-ham-xi-vs-wolves-confirmed-team-news-injury-latest-starting-lineup-premier-league-2022-today-b1029199.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>West Ham XI vs Wolves: Confirmed team news, injury latest, starting ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQPoQoaf0HOHDKhUWGkbWmh8i_E-1IH8F2FURstXJL2SZDjbDDKbbT1BwilIXyaZ2CstbOKhIaQ" alt="West Ham XI vs Wolves: Confirmed team news, injury latest, starting ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>West Ham have Gianluca Scamacca leading the line for this evening&#39;s crucial Premier League game with Wolves.</p></div>
            </div>
        </a><a href='https://www.fantasyfootballscout.co.uk/2022/10/01/west-ham-v-wolves-team-news-scamacca-starts-coufal-and-antonio-benched/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>West Ham v Wolves team news: Scamacca starts, Coufal and ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQcJfvEIeWn1FndOvlTZdgE2Z6GDq2LMSroR_UT2wqVZH15YUm6ihT1L9sCHAHGfQfClPZQwEyI" alt="West Ham v Wolves team news: Scamacca starts, Coufal and ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Gianluca Scamacca, Maxwel Cornet and Craig Dawson all start as Michail Antonio, Vladimir Coufal and Pablo Fornals drop to the bench. Bruno Lage&#39;s only change&nbsp;...</p></div>
            </div>
        </a><a href='https://www.telegraph.co.uk/football/2022/10/01/west-ham-vs-wolves-live-score-premier-league-latest-updates/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>West Ham ease to victory over Wolves and heap pressure on Bruno ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSdlPYISU2WbfosB-HHFwzF_vRQLYnhvoCTEag04kO7NCyMmWna1PxGio9A2qmDB1FDZBA9hU_E" alt="West Ham ease to victory over Wolves and heap pressure on Bruno ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A shapeless team who have just three Premier League goals to their name and a full treatment room, Wolves were the perfect visitors. Their problems run deep and&nbsp;...</p></div>
            </div>
        </a><a href='https://www.fourfourtwo.com/features/west-ham-united-vs-wolves-live-stream-how-to-watch-the-premier-league-from-anywhere-in-the-world'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>West Ham United vs Wolves live stream: How to watch the Premier ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRLYKxY-kvrvp0Cl3zZ6NEdG3Lf1Hceh9t25ajF8656EvKnw0aynCveROd-bVRKI_1GtBy0dUis" alt="West Ham United vs Wolves live stream: How to watch the Premier ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>David Moyes&#39; men have been unable to get going in the Premier League in 2022/23, with just one win in their first seven outings. Their most recent fixture&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}