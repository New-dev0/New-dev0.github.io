import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>UEFA Champions League</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,UEFA Champions League"/>
        <meta name="description" content="Trending News about UEFA Champions League" /></Head><Template>
            <h1 style={{fontSize: "30"}}>UEFA Champions League</h1>
            <Image width={800} height={500} src="https://d1af7m13b2f34i.cloudfront.net/media/1664811070763.jpeg" alt="UEFA Champions League"/>
            <h3>Recent News</h3>
            <a href='https://www.sportstiger.com/news/uefa-champions-league-2022-23-matchday-3-fixtures-timings-live-streaming-and-more'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>UEFA Champions League 2022-23 Matchday 3: Fixtures, Timings ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS-UrCteQWMLW068fpoBnjB8_VgQhMRMJz1r5NMVUZDMNzt_6_8sUN7aCfO0PRntG-lTuo7VC1k" alt="UEFA Champions League 2022-23 Matchday 3: Fixtures, Timings ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Group A, B, C, and D will be in action on Day 1 while the remaining four groups will begin fixtures on Day 2.</p></div>
            </div>
        </a><a href='https://www.uefa.com/uefachampionsleague/news/027a-1641f41a12e7-8a6c279d0925-1000--champions-league-predicted-line-ups-and-team-news-for-matchday-/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Champions League: Predicted line-ups and team news for Matchday 3</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcReMs-NzkJWSlDjChbn_goH1DkQkhuaTO-EJKft0aiYK7kESq8ZQo9C2kaD7IzuBAclBvIqFlU1" alt="Champions League: Predicted line-ups and team news for Matchday 3" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Who&#39;s likely to start, who might be left out and who is unavailable? UEFA.com predicts the line-ups for UEFA Champions League Matchday 3.</p></div>
            </div>
        </a><a href='https://www.si.com/soccer/liverpool/news/uefa-champions-league-matchday-3-fixtures-schedule-results-4th-5th-october'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>UEFA Champions League Matchday 3 Fixtures, Schedule &amp; Results ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRmBT5ZoH-L0uMiJ27n1wWVl1_b-B-F8yJGXWm5VVsyklDyZoEE6LkXcvyZDO3iGZbCjuLQe02S" alt="UEFA Champions League Matchday 3 Fixtures, Schedule &amp; Results ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Jurgen Klopp and Liverpool will be looking to build on their last-gasp victory against Ajax on matchday 2 of the Champions League.</p></div>
            </div>
        </a><a href='https://www.cbssports.com/soccer/news/uefa-champions-league-match-day-3-schedule-liverpool-napoli-tottenham-bayern-inter-barcelona-buildup/live/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>UEFA Champions League Matchday 3 schedule: Liverpool, Napoli ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS3SdHO_9xzM7TooIkTOxX71pCf4Fehef5s9v7nsw6jmR3ZLuBfdnFeKZGt5gs18LwhZztaa6Mp" alt="UEFA Champions League Matchday 3 schedule: Liverpool, Napoli ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>As for Wednesday, Chelsea vs. AC Milan will be tough to beat, but Benfica vs. Paris Saint-Germain is very tempting at Estadio da Luz and buildup to Wednesday&#39;s&nbsp;...</p></div>
            </div>
        </a><a href='https://www.chicagotribune.com/betting/ct-uefa-champions-league-predictions-bets-20221003-pqrsepdo5rbqlixstnujztj5jq-story.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>UEFA Champions League odds, predictions: best bets for Tuesday&#39;s ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ1OnOldtwJodicZPKWlqEuQK3XiZfS8HH3gQ9aiXeY9x42HDrHZPBqeEfg6JA41kf23k8Kb5tK" alt="UEFA Champions League odds, predictions: best bets for Tuesday&#39;s ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Headlining the Tuesday slate is a Group C clash between Barcelona and Inter Milan as both continue to chase Bayern Munich for the group lead, but there are a&nbsp;...</p></div>
            </div>
        </a><a href='https://supersport.com/football/uefa-champions-league/news/7523969b-ee26-4ecb-8226-53ab4cbb9103/tuesday_champions_league_md3_game-by-game_previews'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Tuesday Champions League MD3: Game-by-game previews ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSEix7fIP4l2pAg2N7R1JFUmp1VObiLnNNSbJ338vInEUeCLrMox5rgqY5ZMvgKI_FHBtCbvZWV" alt="Tuesday Champions League MD3: Game-by-game previews ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Bayern Munich have won all four of their UEFA European matches against Viktoria Plzen, beating them twice in the 1971-72 Cup Winners&#39; Cup and 2013-14 UEFA&nbsp;...</p></div>
            </div>
        </a><a href='https://worldsoccertalk.com/2022/10/03/5-must-see-champions-league-games-in-matchday-three/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>5 must-see Champions League games in matchday three</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQRdhfdeMi93eYBgPteJD95B8x-LbYC9SbLUCe56Ta08jnvT5tT0zZz3bWvWeFjMwo9SqXDQS6K" alt="5 must-see Champions League games in matchday three" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>American television viewers can expect a whole host of UEFA Champions League action to feature on their screens on matchday three.</p></div>
            </div>
        </a>
        </Template></>;
}