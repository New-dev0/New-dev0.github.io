import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Cameroon vs Serbia</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Cameroon vs Serbia"/>
        <meta name="description" content="Trending News about Cameroon vs Serbia" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Cameroon vs Serbia</h1>
            <Image width={800} height={500} src="https://theanalyst.com/wp-content/uploads/2022/11/cameroon-vs-serbia-prediction-world-cup.png" alt="Cameroon vs Serbia"/>
            <h3>Recent News</h3>
            <a href='https://theanalyst.com/2022/11/cameroon-vs-saudi-arabia-prediction-preview-world-cup/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Cameroon vs. Serbia: Prediction and Preview | The Analyst</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR_cEhCEYoKakZm6pZaGFzQEbYO54KZEppOB8VhOdbd9w58aTtnmdW4IiyK4nKPwBgIaqoDV2hk" alt="Cameroon vs. Serbia: Prediction and Preview | The Analyst" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>We preview the 2022 World Cup match between Cameroon and Serbia, including our pre-match prediction for each team&#39;s second game in Group G.</p></div>
            </div>
        </a><a href='https://www.espn.com/soccer/fifa-world-cup/story/4818012/2022-world-cups-best-game-so-far-cameroon-peg-back-serbia-after-onana-exit'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>World Cup&#39;s best game? Cameroon peg back Serbia; Onana exit</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRXrfBdA4-sldnjE7Ud235MdKBeB83GXzj6oBFgZwvZL-GdB8aRnrElOvcxp-mGuSoXwDZk4VC7" alt="World Cup&#39;s best game? Cameroon peg back Serbia; Onana exit" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Cameroon were ahead against Serbia, then went behind 3-1 before pegging them back to a draw in a topsy-turvy and incredibly fun game in Group G.</p></div>
            </div>
        </a><a href='https://theathletic.com/live-blogs/cameroon-vs-serbia-world-cup-2022-live-score-updates-result/drM8IQWD7A4D/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>World Cup 2022 result: How Cameroon came back to draw with ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ4fp7iFnj8H0NviEaSDJctEa6S0RXL5oLZsLU3IOejXuI5HaH4-FqMdsEBY1y3_u1gqTObqZXx" alt="World Cup 2022 result: How Cameroon came back to draw with ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Depending on how the rest of the group stages go for Serbia, and despite scoring, Aleksandar Mitrovic may well rue not winning that game for Serbia. Michael&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sportingnews.com/us/soccer/news/cameroon-vs-serbia-world-cup-live-score-result/bmszy4fyzs3jfcxbrkfjl8if'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Cameroon vs. Serbia final score, result: Indomitable Lions launch ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR1b4jjkMxopmgU72AAa2aJDaQO2yZqPBOIX28UM0eDv57QgnyofNDhJ3G-iA-RZpJJwBkdVVN2" alt="Cameroon vs. Serbia final score, result: Indomitable Lions launch ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Vincent Aboubakar sparked a stunning second-half comeback as Cameroon avoided what would have been a record-equalling World Cup defeat against Serbia.</p></div>
            </div>
        </a><a href='https://dknation.draftkings.com/2022/11/28/23480341/cameroon-vs-serbia-group-stage-world-cup-2022-referee-mohammed-abdulla-hassan-history-cards'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Cameroon vs. Serbia: Who is the referee for Group G match in 2022 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQiD1XzarmkcDDWwdwRHX-CN-P-viXglSiJXOg6f6nwXHF9c5WlFh3di5OX3VzbdHChFqluDJgS" alt="Cameroon vs. Serbia: Who is the referee for Group G match in 2022 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Cameron and Serbia face off on Monday, November 28, with both squads looking to get their first win of the 2022 World Cup. The match kicks off at 5 a.m. ET&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}