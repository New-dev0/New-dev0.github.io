import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>South Korea vs Ghana</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,South Korea vs Ghana"/>
        <meta name="description" content="Trending News about South Korea vs Ghana" /></Head><Template>
            <h1 style={{fontSize: "30"}}>South Korea vs Ghana</h1>
            <Image width={800} height={500} src="https://library.sportingnews.com/styles/facebook_1200x630/s3/2022-11/nba-canada--7068b5ca-7a48-4496-b032-0fb29f1cfffe.jpeg?itok=HtP33yDQ" alt="South Korea vs Ghana"/>
            <h3>Recent News</h3>
            <a href='https://www.sportingnews.com/us/soccer/news/south-korea-ghana-prediction-world-cup-odds-betting-tips-2022/hjxrzkqniywmzxlotciz2rdb'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>South Korea vs Ghana prediction, odds, betting tips and best bets for ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTmJxPjoJY1NTvmHPnhQ9WxlON1_ZNHvYVPexYooKg_a-HjE9ty8VURO9JGCKStSCkVKvhfy72n" alt="South Korea vs Ghana prediction, odds, betting tips and best bets for ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Two teams who will feel they need to win on matchday two to stand a chance of progression meet in Group H on Monday, as Ghana face South Korea in what&nbsp;...</p></div>
            </div>
        </a><a href='https://theathletic.com/3932097/2022/11/27/south-korea-ghana-stream-tv-channel-predictions-start-time/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>South Korea vs Ghana preview: How to stream, start time ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSOqSe7psrgcmB9-WSZNSeSC7Bhnducu3D3hvvafSgvqpO5Kl4-_e1oSWMEmRBy5kUoIxTuu5Zp" alt="South Korea vs Ghana preview: How to stream, start time ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Everything you need to know ahead of the Group H meeting between South Korea and Ghana at the 2022 World Cup.</p></div>
            </div>
        </a><a href='https://soccer.nbcsports.com/2022/11/27/south-korea-vs-ghana-live-how-to-watch-stream-link-team-news/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>South Korea vs Ghana: How to watch live, stream link, team news</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSUeIIx8eAo-0C1srLIuusfqpMr-arujwVqcRjYCcPb76uSlARPg-OhdUYl0hyg4euI-bbUSuUk" alt="South Korea vs Ghana: How to watch live, stream link, team news" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>South Korea and Ghana collide in Group H with both teams earmarking this as a must-win game in an incredibly tight group.</p></div>
            </div>
        </a><a href='https://www.goal.com/en-gb/news/south-korea-vs-ghana-predictions-tips-and-betting-odds/blt5364e49a27ba9569'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>South Korea vs Ghana: Predictions, tips &amp; betting odds</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS_Xm6CWtK4qBGNslcVfQtPZEWVQq6L0L088pqQ9rToR-PKlf763V5Im0d-sTMAyqwTRLtePXzy" alt="South Korea vs Ghana: Predictions, tips &amp; betting odds" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The African nation showed plenty of attacking intent in their opening game and backing a game with goals at both ends could offer value.</p></div>
            </div>
        </a><a href='https://www.thesun.ie/sport/football/9792641/world-cup-south-korea-ghana-time-live-stream-free-tv-channel/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>South Korea vs Ghana: Stream FREE, TV channel, kick-off time and ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRhXViDZK05wixGJd6ydnlXdoN4nQeKzeXaqJrfiOrSM8L7bH4MMR9f0Bz2-rjiE_wjtejgKVuF" alt="South Korea vs Ghana: Stream FREE, TV channel, kick-off time and ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>GHANA take on South Korea in the second round of World Cup group-stage games.Neither team won their opening game, as South Korea drew 0-0 with Uruguay.</p></div>
            </div>
        </a>
        </Template></>;
}