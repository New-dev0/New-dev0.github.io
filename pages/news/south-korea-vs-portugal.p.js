import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>South Korea vs Portugal</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,South Korea vs Portugal"/>
        <meta name="description" content="Trending News about South Korea vs Portugal" /></Head><Template>
            <h1 style={{fontSize: "30"}}>South Korea vs Portugal</h1>
            <Image width={800} height={500} src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt65274f4264aba22d/6386ff7182454d2d4a5cf07e/Son_Heung-min_Korea_Republic_Cristiano_Ronaldo_Portugal.jpg" alt="South Korea vs Portugal"/>
            <h3>Recent News</h3>
            <a href='https://www.goal.com/en/news/south-korea-vs-portugal-lineups-and-live-updates/blt9d72386378c9eb36'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>South Korea vs Portugal: Lineups and LIVE updates</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT6qFAIAKzc2SVvvbdz3s9MPwRQWZsnCEFuxunK3TQAk6d6ZmZTxI9yJV18pNcEj__QzASne2ws" alt="South Korea vs Portugal: Lineups and LIVE updates" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Portugal will need to avoid defeat to top the group, while South Korea have all to play for.</p></div>
            </div>
        </a><a href='https://www.espn.com/soccer/report/_/gameId/633832'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>South Korea vs. Portugal - Football Match Report - December 2 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS5md7pjrBPW-iIa3vIIqr_d5cntyb2atepxgK14Ajgm3U_fp6IRGcXApYYIraOBAyqKO6piJbptw" alt="South Korea vs. Portugal - Football Match Report - December 2 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Get a report of the South Korea vs. Portugal 2022 FIFA World Cup, Group Stage football match.</p></div>
            </div>
        </a><a href='https://www.goal.com/en-us/news/south-korea-vs-portugal-predictions-world-cup-group-stage-odds-and-best-bets/blt722334c5977c28ee'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>South Korea vs Portugal Predictions: World Cup Group Stage Odds ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS5qIcMwV_kNsmC7M1vEQK85N7OAMuMFKUTJ681fbA8u9pplzMZtPAiHyj4Bg1KapNaIfWGEJH0" alt="South Korea vs Portugal Predictions: World Cup Group Stage Odds ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Asian side need a win to keep alive their tournament hopes but the 2016 European champions are likely to be too strong for them.</p></div>
            </div>
        </a><a href='https://en.as.com/soccer/south-korea-vs-portugal-live-online-updates-score-stats-qatar-world-cup-2022-n/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>South Korea vs Portugal summary: Korea into last 16 after late ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR5ZjAQ3COQnWbQRLV_lmqsBXiEr_SeO0UNy060a2ohf3EfLa9EN7nJ40wha4TXnJvjXLpXnhEU" alt="South Korea vs Portugal summary: Korea into last 16 after late ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Hee-Chan Hwang&#39;s last-gasp goal gave South Korea a dramatic win over Portugal that took Paulo Bento&#39;s side through to the last 16 of World Cup 2022.</p></div>
            </div>
        </a><a href='https://www.football.london/international-football/south-korea-vs-portugal-prediction-25655976'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>South Korea need to take risks against Portugal on Friday</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR7VI7rE6Cgs_Z9McaMd_LrrnrQKzCPaGEpskBHunlHowp_v3m1K8fif_1ccCG6pOJ6qVk6DoeF" alt="South Korea need to take risks against Portugal on Friday" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Any slip-ups from Portugal could mean a last 16 tie against Brzil so there is plenty on the line in Friday&#39;s Group H finale.</p></div>
            </div>
        </a><a href='https://www.skysports.com/football/korea-republic-vs-portugal/live/463006'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>World Cup 2022: South Korea vs Portugal LIVE!</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTtT260RQNCZBw6TyTGPEtsWm0RmS02xW-xiE2AVv6KX2X1MpGzB8FXDL9T3RUxOjJL1UALjG6A" alt="World Cup 2022: South Korea vs Portugal LIVE!" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>FIFA World Cup match Korea Rep vs Portugal 02.12.2022. Preview and stats followed by live commentary, video highlights and match report.</p></div>
            </div>
        </a>
        </Template></>;
}