import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Man United vs Newcastle</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Man United vs Newcastle"/>
        <meta name="description" content="Trending News about Man United vs Newcastle" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Man United vs Newcastle</h1>
            <Image width={800} height={500} src="//b.smimg.net/22/40/eveutd.JPG" alt="Man United vs Newcastle"/>
            <h3>Recent News</h3>
            <a href='https://www.sportsmole.co.uk/football/man-utd/preview/preview-man-utd-vs-newcastle-prediction-team-news-lineups_496999.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Preview: Manchester United vs. Newcastle United - prediction, team ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQvYS3HnrsJnZ659R7KIARictsHP6ghTxdW1w0hptW-HQgsAGx9RNwl_A2QNX5hKD6q2LEfMuN0" alt="Preview: Manchester United vs. Newcastle United - prediction, team ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sports Mole previews Sunday&#39;s Premier League clash between Manchester United and Newcastle United, including predictions, team news and possible.</p></div>
            </div>
        </a><a href='https://www.90min.com/posts/man-utd-predicted-lineup-vs-newcastle-premier-league-16-10-2022'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Man Utd predicted lineup vs Newcastle - Premier League</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSwlxyGOlKj_-ar1Bqi1bV6B4_QUUsH0g4k6AX0dDZkZRDqJgZys8ETidTqqhAMiDvdRhdmIVwu" alt="Man Utd predicted lineup vs Newcastle - Premier League" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Manchester United welcome Newcastle United to Old Trafford in the Premier League&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cbssports.com/soccer/news/manchester-united-vs-newcastle-live-stream-premier-league-prediction-tv-channel-how-to-watch-online-odds/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Manchester United vs. Newcastle live stream: Premier League ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQG5rFrvrX4b4MKU2tfLUvdUVH7fiWAtPzlWMadCXRKxZOVoTgpoz629NJt2NA72QcmIR9wEHbh" alt="Manchester United vs. Newcastle live stream: Premier League ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Manchester United and Newcastle will face each other on Sunday at Old Trafford to determine which side will boost their hopes to fight for a spot in the&nbsp;...</p></div>
            </div>
        </a><a href='https://www.manchestereveningnews.co.uk/sport/football/football-news/man-united-team-news-newcastle-25261088'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Manchester United give Anthony Martial injury update and team ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQlPHqautHxkj5l7VdXvRxzy7KslWDcoBkzDb2TuC-sASiYmegQQBJus-8_-m0dj0MNivG21Dg3" alt="Manchester United give Anthony Martial injury update and team ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Anthony Martial has missed eight of Man United&#39;s 12 games this season due to three separate injuries.</p></div>
            </div>
        </a><a href='https://www.bbc.co.uk/sport/football/63189781'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Manchester United v Newcastle United</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQbmX1Uqd7wD-YBRNQzpNpdx-kyLY40PuQZ0Q4qW1ukwD1B63zq2c87X8nNnSvKRgDtoW0v9m88" alt="Manchester United v Newcastle United" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Newcastle boss Eddie Howe has reported no new injury concerns and may name the same team for a third straight game. Sunday&#39;s match is expected to come too soon&nbsp;...</p></div>
            </div>
        </a><a href='https://www.standard.co.uk/sport/football/man-utd-xi-vs-newcastle-confirmed-team-news-predicted-lineup-injury-latest-premier-league-2022-b1032752.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Man United XI vs Newcastle: Predicted lineup, confirmed team news ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRNt_PFOiHwXV1pBna84FL8xeiWuYopzpaGS5Pn6_sk77sSLLqDjrTQZFhryDlprG3s5dzuhO8J" alt="Man United XI vs Newcastle: Predicted lineup, confirmed team news ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Cristiano Ronaldo could be in line for his first Premier League start in two months as Manchester United welcome Newcastle to Old Trafford on Sunday.</p></div>
            </div>
        </a>
        </Template></>;
}