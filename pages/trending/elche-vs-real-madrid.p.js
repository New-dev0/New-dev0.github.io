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
            <Image width={800} height={500} src="https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F1019%2Fr1078264_1296x729_16%2D9.jpg" alt="Elche vs Real Madrid"/>
            <h3>Recent News</h3>
            <a href='https://www.espn.in/football/report/_/gameId/643868'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Elche vs. Real Madrid - Football Match Report - October 20, 2022 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSHXVPZwh31PL3-Kzx4h-CRrZf8jVXUOpXSZqQUK9JXsyw5YSDQ75IzU8vfzCkO5S33qsDNRVDm" alt="Elche vs. Real Madrid - Football Match Report - October 20, 2022 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Coming off a dominant 3-1 win over arch-rivals Barcelona in the El Clasico on Sunday, coach Carlo Ancelotti decided not to rest key players against winless&nbsp;...</p></div>
            </div>
        </a><a href='https://www.goal.com/en-in/news/elche-vs-real-madrid-predictions-tips-and-betting-odds/blt37d57c8b75756d53'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Elche vs Real Madrid: Predictions, tips &amp; betting odds</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTK0wQNTpZtl7kalICUb7BNI_LtulqhniCoppb3QDnsfAfxY6mv8JwG4yfI5GWluu3fC9oaXIY3" alt="Elche vs Real Madrid: Predictions, tips &amp; betting odds" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>La Liga leaders Real Madrid head to the Estadio Martinez Valero on Wednesday evening to face bottom club Elche. Carlo Ancelotti&#39;s men extended their&nbsp;...</p></div>
            </div>
        </a><a href='https://www.outlookindia.com/sports/la-liga-2022-23-ballon-d-or-winner-karim-benzema-scores-as-real-madrid-beat-elche-in-pics-photos-231296'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>La Liga 2022-23: Ballon d&#39;Or Winner Karim Benzema Scores As ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSq5YG-aCThxD1iV3uvnnvwRR4kBFXvnbZ5Ok9pabuKnizHNJKzdQNWLSQpN1jmLaf5hbpUgXg9" alt="La Liga 2022-23: Ballon d&#39;Or Winner Karim Benzema Scores As ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Karim Benzema celebrated his maiden Ballon d&#39;Or trophy with a goal as Real Madrid defeated Elche 3-0 on Wednesday night in La Liga 2022-23.</p></div>
            </div>
        </a><a href='https://sportstar.thehindu.com/football/real-madrid-rma-vs-elche-live-streaming-commentary-highlights-updates-score/article66032919.ece/amp/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Real Madrid vs Elche, La Liga LIVE updates: Valverde puts Madrid ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSzUieQ5gL4r3yF4GgGDcOjL5wwuuehVpmjrkvYbKZq6A0gN8yZBUMTa2_GT3fqAwbyDUsSQ-GG" alt="Real Madrid vs Elche, La Liga LIVE updates: Valverde puts Madrid ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Elche vs Real Madrid: Get the live updates, commentary and highlights of the La Liga match between Real Madrid and Elche.</p></div>
            </div>
        </a><a href='https://www.insidesport.in/elche-vs-real-madrid-live-real-madrid-hope-to-extend-gap-at-the-top-with-win-over-elche-check-elche-vs-real-madrid-predicted-xi-team-news-follow-live/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Elche vs Real Madrid HIGHLIGHTS- Fede Valverde STARS as Real ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSXQuHbSOuYwYMcjdjLQoGds4gKI4HTlqMnUK2k7SGSeiA1HTzzjewavGnMbRo8UZi2BochZBZO" alt="Elche vs Real Madrid HIGHLIGHTS- Fede Valverde STARS as Real ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Elche vs Real Madrid HIGHLIGHTS – La Liga HIGHLIGHTS – Real Madrid defeated Elche 3-0 on Wednesday in LaLiga with to goals from Federico Valverde,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}