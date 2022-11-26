import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Florida Gators football</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Florida Gators football"/>
        <meta name="description" content="Trending News about Florida Gators football" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Florida Gators football</h1>
            <Image width={800} height={500} src="https://s3media.247sports.com/Uploads/Assets/948/619/10619948.jpg?fit=bounds&crop=1200:630,offset-y0.50&width=1200&height=630" alt="Florida Gators football"/>
            <h3>Recent News</h3>
            <a href='https://247sports.com/college/florida-state/Article/FSU-Football-Florida-State-Seminoles-Florida-Gators-how-to-watch-stream-listen-198489175/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>FSU Football vs. Florida Gators: How to Watch, Stream, or Listen</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSds-DvteZYrLEBM-HUjlqghyPrNKTBGNQE9pbQh7fnGjyw9lrWqsJJ0eYgGLZvnYsIUfrp99-F" alt="FSU Football vs. Florida Gators: How to Watch, Stream, or Listen" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>No. 16 Florida State hosts Florida at Doak Campbell Stadium (79,560) in Tallahassee, Fla. on Friday evening at 7:30 p.m.. Here is how to watch, stream,&nbsp;...</p></div>
            </div>
        </a><a href='https://floridagators.com/news/2022/11/24/football-the-opening-kickoff-gators-at-no-16-florida-state'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The Opening Kickoff: Gators at No. 16 Florida State</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRAalSUV1MjoGVQR7amItbpVKTRtQEkenmq4mWM-l_PQ-vWjuwAZb7jx4i5flU1fupKs2dpPjme" alt="The Opening Kickoff: Gators at No. 16 Florida State" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Florida (6-5) and Florida State (8-3) close the regular season with the first Friday night showdown in the rivalry&#39;s storied history.</p></div>
            </div>
        </a><a href='https://www.tomahawknation.com/florida-state-seminoles-football-recruiting-fsu-class-commit-visit-offer/2022/11/25/23476976/official-visitor-list-norvell-players-cfb-acc-gators-game-schedule-247-sports-on3-rivals-rankings'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Florida State football recruiting visitor list for FSU vs. UF</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR-RPEXK6wqo8svEVBdVsPP9EA1Or5Jjf4Ns6JQLRoWWbYKvj8WI7OKeWU640flTSIW6zsXn6-8" alt="Florida State football recruiting visitor list for FSU vs. UF" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mike Norvell&#39;s Florida State Seminoles with a massive visitor list for rivalry game vs. Florida Gators Friday night in Tallahassee.</p></div>
            </div>
        </a><a href='https://www.si.com/college/florida/football/florida-gators-florida-state-seminoles-picks-predictions-2022'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Florida vs. Florida State: Picks and Predictions</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTpyWeNVfmztaXKLagxF1Ajsrg_5vf9432uFyreGRMMmvFvgZiVS8wvf3dUoVHS2cg4pqOLZLOv" alt="Florida vs. Florida State: Picks and Predictions" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Florida enters the game as a 10-point underdog and threatened to lose control of a three-game winning streak over Florida State, according to the Sports&nbsp;...</p></div>
            </div>
        </a><a href='https://www.gatorsports.com/story/football/2022/11/25/florida-gators-live-football-score-vs-fsu-seminoles-updates/10757559002/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Live score: Florida Gators battle in-state rival FSU Seminoles in ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRdDi1uR9orG2ApNgE6D76VZlO67B9MeEhWYQs1ZXQWB0n4DobLnWsnUivujb1nz7scwHnhbimE" alt="Live score: Florida Gators battle in-state rival FSU Seminoles in ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Florida Gators close out their season hoping for bowl eligibility as they take on their in-state rival, the Florida State Seminoles.</p></div>
            </div>
        </a><a href='https://www.tallahassee.com/story/sports/college/fsu/football/2022/11/25/fsu-florida-game-score-live-updates-florida-state-football-highlights-seminoles-gators/10759217002/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Live updates: Florida State Seminoles vs. Florida Gators officially ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSWlzRpLSKCAqR8wUb348SGv-gd-yyt2bf9SnbYt0S5r0d5zOHLoYGTHZc9Do4PnQMNfgLtRP6S" alt="Live updates: Florida State Seminoles vs. Florida Gators officially ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Jordan Travis and the FSU Seminoles host Anthony Richardson and the Florida Gators on November 25, 2022 at Doak Campbell Stadium in Tallahassee.</p></div>
            </div>
        </a><a href='https://www.onlygators.com/11/25/2022/florida-vs-florida-state-prediction-pick-odds-spread-football-game-time-watch-live-stream-tv-channel/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Florida vs. Florida State: Prediction, pick, odds, spread, football ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTX2fgYZgbq6y56FZc7UoZrPprs0uDXUw0On6qvmG3g_ELt_m04Iz6KmbrUJmz1xh66G8IHBQ57" alt="Florida vs. Florida State: Prediction, pick, odds, spread, football ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Coming off their two most complete games of the campaign, the Florida Gators laid an egg last week, ruining their opportunity to end the regular season with&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}