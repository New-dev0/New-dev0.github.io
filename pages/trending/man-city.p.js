import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Man City</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Man City"/>
        <meta name="description" content="Trending News about Man City" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Man City</h1>
            <Image width={800} height={500} src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt92f0520bcbf64350/63584d22605b4904cf2b9665/haaland-16-9.jpg" alt="Man City"/>
            <h3>Recent News</h3>
            <a href='https://www.goal.com/en-in/lists/man-city-winners-losers-ratings-haaland-draw-dortmund-return/blt35493e10f791bce8'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Man City winners, losers and ratings as Haaland halted in dour draw ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTlyOE9gQMa9kE7TetWB8CGcHXabLGzqcnCYSJraeOmzCyi8Aipe6neTEQ2w4rbwuCZwI_21HaR" alt="Man City winners, losers and ratings as Haaland halted in dour draw ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Manchester City striker Erling Haaland failed to fire on his return to Borussia Dortmund as Manchester City were held to a dour 0-0 draw at Signal Iduna&nbsp;...</p></div>
            </div>
        </a><a href='https://sportstar.thehindu.com/football/champions-league/ucl-borussia-dortmund-vs-manchester-city-live-steaming-info-squads-predicted-xi-bor-vs-mci-updates-highlights/article66053633.ece'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Highlights Dortmund 0-0 Manchester City, UEFA Champions ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQc-u9m7w2Ew4td-NF75UFCid-5jZfIgAaXklt15tUIAWxh8DNlUEGnNtYBN1UMPrhd3M-8YFWg" alt="Highlights Dortmund 0-0 Manchester City, UEFA Champions ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Borussia Dortmund vs Manchester City: Highlights of the BOR vs MCI UEFA Champions League from the Signal Iduna Park stadium in Dortmund, Germany.</p></div>
            </div>
        </a><a href='https://www.goal.com/en-in/news/bravo-insists-man-city-spell-successful/bltd9229ca852b704d7'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;I had a marvellous time&#39; - Bravo insists error-strewn Man City spell ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQczEZCIdfrgxSmAQnv8RsJ-QnkL_q14_pZgHoMbP4Utuk12MALhORGhib8fiwuQd_cO3g8Zb2N" alt="&#39;I had a marvellous time&#39; - Bravo insists error-strewn Man City spell ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Former Manchester City goalkeeper Claudio Bravo has insisted his error-strewn time with the club was a great success.</p></div>
            </div>
        </a><a href='https://www.forbes.com/sites/manuelveth/2022/10/25/mats-hummels-dortmund-star-underlines-germany-ambitions-against-man-city/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mats Hummels: Dortmund Star Underlines Germany Ambitions ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS7HAihkEaIjntYQg6Dr-hBjPPQcnzgdKVAb4fNJBXrGkAPv1micL6pr4aRpXoGCQVpa64KJAT5" alt="Mats Hummels: Dortmund Star Underlines Germany Ambitions ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mats Hummels has further underlined his national team ambitions with an outstanding performance against Manchester City on Tuesday night.</p></div>
            </div>
        </a><a href='https://theathletic.com/live-blogs/borussia-dortmund-manchester-city-score/5ldhHetjdQM5/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>How Borussia Dortmund and Manchester City drew 0-0 on Erling ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcStMyGBfQefI8NfJXM1vKMSCimKvkS8acVxr8sCS7N2Imf3ZTp-It7cLbkbF38M3zJG59lRMmaC" alt="How Borussia Dortmund and Manchester City drew 0-0 on Erling ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Manchester City drew 0-0 with Borussia Dortmund in Germany as Erling Haaland was substituted at half-time against his former club.The result guarantees that&nbsp;...</p></div>
            </div>
        </a><a href='https://www.bbc.co.uk/sport/football/63381079'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Man City seal top spot despite Mahrez penalty miss</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQVshZhZB-mtOUfqtuEFbM5MWUNzXPcOBsMkeUImkIPbDiCsDJCixZUXRdubuBzsAYYND8ZCZ2X" alt="Man City seal top spot despite Mahrez penalty miss" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Pep Guardiola admits Manchester City have a &quot;problem&quot; with penalties as Riyad Mahrez misses in the draw with Borussia Dortmund.</p></div>
            </div>
        </a><a href='https://www.mancity.com/news/mens/borussia-dortmund-uefa-champions-league-25-october-63802318'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Goalless draw in Dortmund sees City crowned Group G winners</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTrggSLuRomgwKLL1bo3pf74kxWSc3FhOVebdO5fJpupwB-qm7Y-SvzT-_tRstAlLJVRZyMO8XD" alt="Goalless draw in Dortmund sees City crowned Group G winners" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Manchester City have guaranteed a first place finish in Group G of the 2022/23 UEFA Champions League after a 0-0 draw with Borussia Dortmund in Germany.</p></div>
            </div>
        </a>
        </Template></>;
}