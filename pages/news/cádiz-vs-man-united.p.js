import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Cádiz vs Man United</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Cádiz vs Man United"/>
        <meta name="description" content="Trending News about Cádiz vs Man United" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Cádiz vs Man United</h1>
            <Image width={800} height={500} src="https://assets.manutd.com/AssetPicker/images/0/0/17/231/1173313/0R7A0671_f5e603d9_3e5d_4aeb_8e02_033275b8e3481670442994297_large.jpg" alt="Cádiz vs Man United"/>
            <h3>Recent News</h3>
            <a href='https://www.manutd.com/en/news/detail/talking-points-from-cadiz-v-man-utd-friendly-on-7-december'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>What we noticed from our Cadiz friendly</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQo1MSrZyEOjjLoLAFhsqbCAjgfWAqFBZTxu9nm7u9jxMm7p2aGPL_vkqpiE0uE62uXkU_KKj1w" alt="What we noticed from our Cadiz friendly" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Erik ten Hag&#39;s Manchester United team returned to action for the first time in 24 days, with a friendly against La Liga side Cadiz CF in Spain.</p></div>
            </div>
        </a><a href='https://www.sportingnews.com/ca/soccer/news/cadiz-vs-man-united-live-stream-lineups-betting-odds/gx68ih0rlwg9usqblyz3khlv'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Cadiz vs. Manchester United live stream, lineups for mid-season ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR8FR-MKLcg_sZGwEasXw8TOPDJcZuSVXZK2ECpkoD9zxkmpdMRNfrnEf3V6GE9d8RMuEg4XSc7" alt="Cadiz vs. Manchester United live stream, lineups for mid-season ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>How to watch the action as Manchester United head to south-western Spain to face Cadiz in a mid-season friendly, with team news and the latest odds.</p></div>
            </div>
        </a><a href='https://sportsbrief.com/football/manchester-united/29833-cadiz-man-united-red-devils-suffer-42-humiliating-defeat-world-cup-tour/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Cadiz vs Man United: Red Devils Suffer 4:2 Humiliating Defeat ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ5ybmZLx_ZUKxYCZyJ9i6xP5bos0c-_EU4imnTe7dun4ECC18PHgUwvWDjfWG8-6OvRPpCRHhy" alt="Cadiz vs Man United: Red Devils Suffer 4:2 Humiliating Defeat ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>SportsBrief.com News - Cadiz and Manchester United&#39;s friendly clash ended in a 4-2 defeat for the Red Devils. The match is part of United&#39;s preparations for&nbsp;...</p></div>
            </div>
        </a><a href='https://www.espn.com/soccer/report/_/gameId/656208'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Cádiz vs. Manchester United - Football Match Report - December 7 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSXV5lhlORb63VLnSY7UGD1dF7sZVRR_oA_mW4fimQU2anYJKa2h20mZg_UHvQV4miB_FuK4tPL" alt="Cádiz vs. Manchester United - Football Match Report - December 7 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The game was set up to keep players not involved in the ongoing 2022 World Cup in Qatar sharp ahead of the return of club football immediately following the&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sportingnews.com/us/soccer/news/cadiz-vs-manchester-united-result-highlights-analysis-united-youngsters-are-swept-aside-mid-season-friendly/mpsmptz5z2tfyxpb74l80e8e'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Cadiz vs. Manchester United result, highlights &amp; analysis as United ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTNuR8PjDJ4inKMSct6C-fNgxk9oNQ3lK5vD28mQXhTlYkw1DlL-EV_kQuvH5nZOm6AGiuPYO2C" alt="Cadiz vs. Manchester United result, highlights &amp; analysis as United ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Manchester United headed to southern Spain to face Cadiz in their first mid-season friendly, losing 4-2 after briefly recovering from 2-0 down.</p></div>
            </div>
        </a><a href='https://uk.sports.yahoo.com/news/cadiz-vs-man-united-live-164528538.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Cadiz 4-2 Man United LIVE! Friendly result, match stream, latest ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTlmRQPyl9uaKrGixFzMdhIaq1-ZWgVqx_Ce7OfGde7dGdONMT1je_oS8RmC2UzyjuX1xH02tqZ" alt="Cadiz 4-2 Man United LIVE! Friendly result, match stream, latest ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Lozano scores in shock start GOAL! Cadiz head home the opener! Full-time!</p></div>
            </div>
        </a>
        </Template></>;
}