import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Bills vs Patriots</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Bills vs Patriots"/>
        <meta name="description" content="Trending News about Bills vs Patriots" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Bills vs Patriots</h1>
            <Image width={800} height={500} src="https://static.clubs.nfl.com/image/private/t_editorial_landscape_12_desktop/bills/gs9kuhad8iqksulxg1cy" alt="Bills vs Patriots"/>
            <h3>Recent News</h3>
            <a href='https://www.buffalobills.com/news/game-predictions-bills-vs-patriots-thursday-night-football'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Game predictions | Bills vs. Patriots | Thursday Night Football</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS85Y5XYKLrcxetPIeQ3IDkvK9LKLr_kQo0BRFVUgBClwq6lcHvQbtgubsxYnX03m28YYFZv5cE" alt="Game predictions | Bills vs. Patriots | Thursday Night Football" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Bills are 3.5 point favorites this week according to Caesars Sportsbook as the team prepares to face the New England Patriots at Gillette Stadium.</p></div>
            </div>
        </a><a href='https://www.patriots.com/news/expert-predictions-week-13-picks-for-patriots-vs-bills'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Expert Predictions: Week 13 picks for Patriots vs. Bills</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRpfOEis6yM7bPHA-Ad-Zob9kvsvKhmqqBA0PPnlqzIIle77hbpjGgmx04VU82pznsuOEsMJETq" alt="Expert Predictions: Week 13 picks for Patriots vs. Bills" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Experts share their picks for the Patriots Week 13 matchup against the Buffalo Bills. Mike Reiss, ESPN: Pick: Bills 27, Patiots 23.</p></div>
            </div>
        </a><a href='https://www.cbssports.com/nfl/news/bills-vs-patriots-player-props-odds-thursday-night-football-picks-stefon-diggs-over-82-5-receiving-yards/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bills vs. Patriots player props, odds, Thursday Night Football picks ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTxNm49Nb1Krk_5ChRS6fIcYnDMZgKou2MRwDD5-hCovKtYxkX7_C3d-AyYaIhQbc_NwUG0hWap" alt="Bills vs. Patriots player props, odds, Thursday Night Football picks ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>SportsLine&#39;s model reveals the top NFL prop picks and NFL best bets for Buffalo Bills vs. New England Patriots on TNF.</p></div>
            </div>
        </a><a href='https://theathletic.com/live-blogs/bills-patriots-thursday-night-football/DvejcPAvIfvM/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Buffalo Bills vs. New England Patriots live updates: How to stream ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT8KUJkiGzutPAgUKSVWN-orvRNaY0uDWTH4CPhRXckfy-TVwRXuxfh8MeQR0J53iKIJT1LwQLO" alt="Buffalo Bills vs. New England Patriots live updates: How to stream ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The AFC East is as competitive as ever as the Patriots (6-5) are set to host the Bills (8-3) on Amazon Prime Video&#39;s &quot;Thursday Night Football.</p></div>
            </div>
        </a><a href='https://nypost.com/2022/12/01/bills-vs-patriots-predictions-tnf-touchdown-scorer-prop-picks/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bills vs. Patriots predictions: &#39;Thursday Night Football&#39; touchdown ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTX51Wn2lkEkptkPwBO_Vy416UZtjEj8BSFd3ZPTl9PEzVOy5UaYg79hd1UZKDGiCHjjVrx_DLf" alt="Bills vs. Patriots predictions: &#39;Thursday Night Football&#39; touchdown ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Three anytime touchdown scorer props to target as the Buffalo Bills do battle with the New England Patriots on Thursday Night Football.</p></div>
            </div>
        </a><a href='https://www.sportingnews.com/us/nfl/news/bills-patriots-live-score-updates-highlights/zkxcpctdxqaddats4xq1crpj'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bills vs. Patriots live score, updates, highlights from NFL &#39;Thursday ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTGxrx61zECQsyoidMZLwoTZLl7t8nIuA9QCx-DbB6rnbMUH0Spr8GWLv3YsxbRFsbF4GL5ZFlU" alt="Bills vs. Patriots live score, updates, highlights from NFL &#39;Thursday ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Sporting News is tracking all the key moments from Bills vs. Patriots on &quot;Thursday Night Football.&quot;</p></div>
            </div>
        </a>
        </Template></>;
}