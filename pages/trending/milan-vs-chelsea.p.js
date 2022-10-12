import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Milan vs Chelsea</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Milan vs Chelsea"/>
        <meta name="description" content="Trending News about Milan vs Chelsea" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Milan vs Chelsea</h1>
            <Image width={800} height={500} src="https://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F1011%2Fr1074319_1296x729_16%2D9.jpg" alt="Milan vs Chelsea"/>
            <h3>Recent News</h3>
            <a href='https://www.espn.in/football/report?gameId=652639'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>AC Milan vs. Chelsea - Football Match Report - October 12, 2022 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRUtpoyhJ5kVJ2_EHUxOqhgztVKqUXf7rHFUk-2HMX5rg5LsV5qHdCN1uS76LozQQaxajsgXjhx" alt="AC Milan vs. Chelsea - Football Match Report - October 12, 2022 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Get a report of the AC Milan vs. Chelsea 2022-23 UEFA Champions League, Group Stage football match.</p></div>
            </div>
        </a><a href='https://www.goal.com/en-in/news/milan-vs-chelsea-lineups-live-updates/blte7e28539735793f0'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>AC Milan vs Chelsea: Lineups and LIVE updates</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ2o7QBe3BSf01ffiBSa6T6_CctlbvyG7QM0WnSvf8nYgbtt-PBWK80Jh848b0kMNfxmLVqnR9H" alt="AC Milan vs Chelsea: Lineups and LIVE updates" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A mouth-watering encounter Chelsea and Milan might decide the fate of Group E in the Champions League.</p></div>
            </div>
        </a><a href='https://www.timesnownews.com/sports/football/ac-milan-vs-chelsea-live-streaming-when-and-where-to-watch-uefa-champions-league-match-live-on-tv-in-india-article-94792538'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>AC Milan vs Chelsea live streaming: When and where to watch ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSVzwWL0Cysas8HWVA1nhKERQ2AJBJCe8pPPeERwmmbqpE_6irA0rMA__wDQyoGaaISXa6TAjnn" alt="AC Milan vs Chelsea live streaming: When and where to watch ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Chelsea and AC Milan go head to head against each other in the group stage of the UEFA Champions League, this time at San Siro. Chelsea will be looking to&nbsp;...</p></div>
            </div>
        </a><a href='https://www.goal.com/en-in/news/milan-vs-chelsea-predictions-tips-and-betting-odds/bltb3876a07876ce7b5'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Milan vs Chelsea: Predictions, tips &amp; betting odds</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ1myHDLqR1Cj1uj4LSPsPZn3AU8dfGOHascHNPMulzCftQzD97bTwwYvw_eb5RBG1KUR7_8ijW" alt="Milan vs Chelsea: Predictions, tips &amp; betting odds" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Chelsea travel to Milan on Tuesday evening in the Champions League looking for another victory in Group E. The Blues enjoyed a 3-0 win at Stamford Bridge&nbsp;...</p></div>
            </div>
        </a><a href='https://www.football.london/chelsea-fc/news/ac-milan-vs-chelsea-live-25231270'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>AC Milan vs Chelsea LIVE: All of the action from the San Siro</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRauTzpRRnTfgGqOntXQskGIG_wAsp8OF2MNDVkBvwY_unGVKb3mklmTODp7EfQHz1RpNbmg8yM" alt="AC Milan vs Chelsea LIVE: All of the action from the San Siro" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Welcome to football.london&#39;s live coverage as Chelsea take on AC Milan at the San Siro. The Blues will be hoping to put in a repeat performance of their 3-0&nbsp;...</p></div>
            </div>
        </a><a href='https://theathletic.com/live-blogs/chelsea-milan-score/cXCx11XCvaa9/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>How Chelsea defeated AC Milan to go top of Champions League ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS4JYv5QzQyazTt_IOEL7Cb_jb14O0C9bcAyGtiCcYtnt_SM8TZ_R_xDkXjRd0uNHOnMMPOzhM9" alt="How Chelsea defeated AC Milan to go top of Champions League ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>With Chelsea up two goals and a man, they smothered Milan for the remainder of the match. The Italian side recorded just one shot on target and were out-&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}