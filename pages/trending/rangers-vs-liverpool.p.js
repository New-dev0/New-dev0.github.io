import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Rangers vs Liverpool</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Rangers vs Liverpool"/>
        <meta name="description" content="Trending News about Rangers vs Liverpool" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Rangers vs Liverpool</h1>
            <Image width={800} height={500} src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltbc319d360e995d15/633c8b73fb6ee0105793d66c/GettyImages-1430437997.jpg" alt="Rangers vs Liverpool"/>
            <h3>Recent News</h3>
            <a href='https://sportstar.thehindu.com/football/champions-league/rangers-vs-liverpool-uefa-champions-league-live-scores-commentary-highlights-group-a-points-table/article66002739.ece'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>LIVE scores, Rangers vs Liverpool, Champions League: Injury ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="LIVE scores, Rangers vs Liverpool, Champions League: Injury ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Rangers vs Liverpool, Champions League: Catch the live score, updates, and commentary from the Group A match at the Ibrox stadium, Glasgow.</p></div>
            </div>
        </a><a href='https://www.goal.com/en-in/news/rangers-vs-liverpool-lineups-live-updates/blt7499c49112432c0e'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Rangers vs Liverpool: Lineups and LIVE updates</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSabBVHy-IJeSW9tMKfvK37EXOBGRwe9MhbzRm2epvAStfuGAS9jDdtsFVkLTxaqIouMOfdNKX-" alt="Rangers vs Liverpool: Lineups and LIVE updates" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Liverpool face a tricky trip away to Rangers as they hope to notch a third consecutive win in the Champions League group stage.</p></div>
            </div>
        </a><a href='http://www.espn.in/football/report?gameId=652647'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Rangers vs. Liverpool - Football Match Report - October 13, 2022 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQbikAU9PoiLWYG8VSjLG09TUzkzkT6Cl80jy4z44EHtFunen5EXAsAYdob0kCRWpegSvHhwckT" alt="Rangers vs. Liverpool - Football Match Report - October 13, 2022 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Get a report of the Rangers vs. Liverpool 2022-23 UEFA Champions League, Group Stage football match.</p></div>
            </div>
        </a><a href='https://en.as.com/soccer/rangers-vs-liverpool-live-online-score-stats-and-updates-202223-champions-league-n/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Rangers vs Liverpool summary: Salah scores quickest UCL hat-trick ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT603_QFKTQH1yuqAbLnBzNnRp9JNrLoLrYbLpNXh5t5RL4Fhek0yOXWeKyqIZ52E19rEspO9mn" alt="Rangers vs Liverpool summary: Salah scores quickest UCL hat-trick ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Substitute Mo Salah scored the fastest ever hat-trick in the Champions League as Liverpool thumped Rangers 7-1 to move closer to last-16 qualification.</p></div>
            </div>
        </a><a href='https://www.sportingnews.com/us/soccer/news/rangers-vs-liverpool-live-score-updates-highlights-champions-league/ldso14osjkmmuq6q2t0aavkf'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Rangers vs. Liverpool result, highlights and analysis as Mohamed ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRx2BDG7rRo-y_dk4Xs6vWptstPRfc_SMKuGj_lKsy2aZMCeNZsqa6mrvMF6-i3v8eTYgnQNqQV" alt="Rangers vs. Liverpool result, highlights and analysis as Mohamed ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mohamed Salah scored the fastest hat-trick in Champions League history as Liverpool earned a confidence-boosting 7-1 win over Rangers.</p></div>
            </div>
        </a><a href='https://www.news18.com/news/football/rangers-vs-liverpool-live-streaming-when-and-where-to-watch-uefa-champions-league-live-coverage-on-live-tv-online-6152425.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Rangers vs Liverpool Live Streaming: When and Where to Watch ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTYvnZrDPRCzpdLGBict5opeQHYpXfzzuS5zH373V9iFtER8NdNShcvZ5mOU9JYBmGSj2-Q8Us2" alt="Rangers vs Liverpool Live Streaming: When and Where to Watch ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Rangers vs Liverpool Live Streaming of Champions League Match: Here you can get all the details as to When, Where, and How you can watch the Champions&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}