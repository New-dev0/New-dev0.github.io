import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Elche vs Real Madrid</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Elche vs Real Madrid"/>
        <meta name="description" content="Trending News about Elche vs Real Madrid" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Elche vs Real Madrid</h1>
            <Image width={800} height={500} src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt2e62188ab19a7e6e/60dbea6147339c0fc01db272/4ea09eafd160becf8bd5a151a04759c610e8b83e.jpg" alt="Elche vs Real Madrid"/>
            <h3>Recent News</h3>
            <a href='https://www.goal.com/en-in/news/elche-vs-real-madrid-predictions-tips-and-betting-odds/blt37d57c8b75756d53'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Elche vs Real Madrid: Predictions, tips &amp; betting odds</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTK0wQNTpZtl7kalICUb7BNI_LtulqhniCoppb3QDnsfAfxY6mv8JwG4yfI5GWluu3fC9oaXIY3" alt="Elche vs Real Madrid: Predictions, tips &amp; betting odds" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>La Liga leaders Real Madrid head to the Estadio Martinez Valero on Wednesday evening to face bottom club Elche. Carlo Ancelotti&#39;s men extended their&nbsp;...</p></div>
            </div>
        </a><a href='https://sportstar.thehindu.com/football/real-madrid-rma-vs-elche-live-streaming-commentary-highlights-updates-score/article66032919.ece'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Real Madrid vs Elche, La Liga HIGHLIGHTS: Real Madrid hammers ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSzUieQ5gL4r3yF4GgGDcOjL5wwuuehVpmjrkvYbKZq6A0gN8yZBUMTa2_GT3fqAwbyDUsSQ-GG" alt="Real Madrid vs Elche, La Liga HIGHLIGHTS: Real Madrid hammers ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Elche vs Real Madrid: Get the highlights of the La Liga match between Real Madrid and Elche.</p></div>
            </div>
        </a><a href='https://www.insidesport.in/elche-vs-real-madrid-live-real-madrid-hope-to-extend-gap-at-the-top-with-win-over-elche-check-elche-vs-real-madrid-predicted-xi-team-news-follow-live/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Elche vs Real Madrid HIGHLIGHTS- Fede Valverde STARS as Real ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSXQuHbSOuYwYMcjdjLQoGds4gKI4HTlqMnUK2k7SGSeiA1HTzzjewavGnMbRo8UZi2BochZBZO" alt="Elche vs Real Madrid HIGHLIGHTS- Fede Valverde STARS as Real ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Elche vs Real Madrid HIGHLIGHTS – La Liga HIGHLIGHTS – Real Madrid defeated Elche 3-0 on Wednesday in LaLiga with to goals from Federico Valverde,&nbsp;...</p></div>
            </div>
        </a><a href='http://www.espn.in/football/report?gameId=643868'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Elche vs. Real Madrid - Football Match Report - October 20, 2022 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Elche vs. Real Madrid - Football Match Report - October 20, 2022 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Federico Valverde, Karim Benzema and Marco Asensio scored to give Real Madrid a comfortable 3-0 win at bottom side Elche in LaLiga on Wednesday and the&nbsp;...</p></div>
            </div>
        </a><a href='https://www.marca.com/en/football/laliga/elche-r-madrid-directo/2022/10/19/01_0101_20221019_954_186.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Elche 0-3 Real Madrid: Goals and Highlights - LaLiga Santander ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcShCX9EP4yuMx42AWxPfM5hGqGyNyqIFxnhRJZ7WrMNy79YPSypoELeRGQkX-Up_4lfaQTB5Og7" alt="Elche 0-3 Real Madrid: Goals and Highlights - LaLiga Santander ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The match in Elche represents a great chance for Real Madrid to maintain or build that gap as Elche sit bottom of the league having amassed just three points&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}