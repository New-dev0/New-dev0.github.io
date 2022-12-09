import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Netherlands vs Argentina</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Netherlands vs Argentina"/>
        <meta name="description" content="Trending News about Netherlands vs Argentina" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Netherlands vs Argentina</h1>
            <Image width={800} height={500} src="" alt="Netherlands vs Argentina"/>
            <h3>Recent News</h3>
            <a href='https://www.vanguardngr.com/2022/12/netherlands-vs-argentina-what-to-expect-in-second-match-of-quarter-finals/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Netherlands vs Argentina: What to expect in second match of quarter ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTW9U-d22VrKh-rklJt_0zzf0E2khkP9tf7W1EI9sGMaAcgOIAMFBWYDyut5fsEWaC3NZlkB6s5" alt="Netherlands vs Argentina: What to expect in second match of quarter ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>FIFA World Cup in Qatar will resume with quarter finals on Friday after a two-day break of breathtaking matches from group stages and the round of 16 but&nbsp;...</p></div>
            </div>
        </a><a href='https://theanalyst.com/2022/12/netherlands-vs-argentina-world-cup-2022-prediction-and-match-preview/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Netherlands vs. Argentina Prediction and Preview | The Analyst</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRDrH9PfrBTnQUIRPSzTlTtf9G29Qix0inooKCDwp1nSwbCIvWfqbCeodZhqi86tQYWmbi0w07N" alt="Netherlands vs. Argentina Prediction and Preview | The Analyst" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>After prevailing against USA and Australia, Netherlands and Argentina face off in the second quarter-final at Qatar 2022. We preview the game ahead of kick-off&nbsp;...</p></div>
            </div>
        </a><a href='https://www.90min.com/posts/netherlands-vs-argentina-world-cup-quarter-final-team-news-lineups-prediction-09-12-22'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Netherlands vs Argentina - World Cup quarter-final: Team news ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR-eQmm-bpgiBqqJ1EOcuTfijQYrQWIQZnKpk4YE3YiVNR3T0Wan9KtW2yoxsRg6NLTDmaJGN1v" alt="Netherlands vs Argentina - World Cup quarter-final: Team news ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Preview of the Netherlands&#39; World Cup quarter-final against Argentina, including team news, lineups and prediction.</p></div>
            </div>
        </a><a href='https://www.mirror.co.uk/sport/football/news/van-dijk-messi-world-cup-28681591'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Virgil van Dijk debunks Lionel Messi theory ahead of Netherlands vs ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT6LMdKj6kdiiFDALK82lxbYt5Yq-enzpAAPAhhYnsPa7xxQvvNrB9FdGmrlrunLJOUo0R420Iq" alt="Virgil van Dijk debunks Lionel Messi theory ahead of Netherlands vs ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Netherlands and Argentina will meet in the quarter-finals of the World Cup on Friday, with the match-up between Lionel Messi and Virgil van Dijk&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sportingnews.com/au/soccer/news/netherlands-argentina-history-head-to-head-world-cup-record/n5d6d6asq5oncbv2n6jxi0hr'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Netherlands vs Argentina history: Head-to-head World Cup matches ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTSPSc-lXJh73y2YFNtJEvOcIQe0B9gQMcN-Eq1Skajco738WWsW_h6Q5SwVnHEuRVNDLk_oWR_" alt="Netherlands vs Argentina history: Head-to-head World Cup matches ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Argentina&#39;s push to a potential World Cup final puts them up against old foes the Netherlands at the quarterfinal stage of Qatar 2022.</p></div>
            </div>
        </a><a href='https://www.covers.com/soccer/world-cup/netherlands-vs-argentina-world-cup-picks-predictions-december-9-2022'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Netherlands vs Argentina World Cup Picks and Predictions ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT0M_-o0vc2PxEW-krwT9XTy-qlbSYNLwn7GT01trep3Th91AwL4s9WwX1r0Zn6f2q307TWS8Fj" alt="Netherlands vs Argentina World Cup Picks and Predictions ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>World Cup prediction, odds, and betting tips for Netherlands vs Argentina on December 9. World Cup free pick and game analysis.</p></div>
            </div>
        </a>
        </Template></>;
}