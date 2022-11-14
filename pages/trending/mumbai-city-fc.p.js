import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Mumbai City FC</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Mumbai City FC"/>
        <meta name="description" content="Trending News about Mumbai City FC" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Mumbai City FC</h1>
            <Image width={800} height={500} src="https://www.mumbaicityfc.com/static-assets/waf-images/42/2c/ec/16-9/sXbX734LW4.JPG" alt="Mumbai City FC"/>
            <h3>Recent News</h3>
            <a href='https://www.mumbaicityfc.com/news/match-report-chennaiyin-fc-2-6-mumbai-city-fc'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Match Report: Chennaiyin FC 2-6 Mumbai City FC</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ50yHmquOeR2R62IrTvN0mRGUH2OXEChDeiFMcJ9tjb3FL7f1N1fH6R-MweEupmlZD0JN7WWW3" alt="Match Report: Chennaiyin FC 2-6 Mumbai City FC" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Islanders beat the Marina Machans 6-2 in a game that showcased the fighting spirit of Mumbai City FC.</p></div>
            </div>
        </a><a href='https://www.tribuneindia.com/news/sports/ruthless-mumbai-city-fc-rout-chennaiyin-fc-6-2-450432'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ruthless Mumbai City FC rout Chennaiyin FC 6-2</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRbOr_2LUWAohHusW995Ehc400ODKJnuCM8DrPJmvqIy8Z5y4PF73zzpjgOz2uIxt3FvMXQPaYI" alt="Ruthless Mumbai City FC rout Chennaiyin FC 6-2" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>It rained goals at the Jawaharlal Nehru Stadium here as Mumbai City FC came from behind to beat Chennaiyin FC 6-2 in the Indian Super League here today.</p></div>
            </div>
        </a><a href='https://scroll.in/field/1037305/isl-mumbai-city-fc-move-to-second-on-table-with-big-win-over-chennaiyin'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ISL: Mumbai City FC move to second on table with big win over ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT8WlygUnBBm8xD1IwbZhlOIgutnzGjzvfnkKXfpZlWkxnllSa3_Ul5OJXUR5WfagOJNYSSRz0O" alt="ISL: Mumbai City FC move to second on table with big win over ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>It rained goals at the Jawaharlal Nehru Stadium in Chennai as Mumbai City FC came from behind to beat Chennaiyin FC 6-2 in the Indian Super League.</p></div>
            </div>
        </a><a href='https://www.indiansuperleague.com/news/ruthless-mumbai-city-fc-rout-chennaiyin-fc-6-2-in-a-comeback-win'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ruthless Mumbai City FC rout Chennaiyin FC 6-2 in a comeback win</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQb1cSHaASOoNNRs30N-tdiQvsSY5o8QY1q_6khtp9gccfplJ71A93KRXE8lX4B4GwI-QH69wZK" alt="Ruthless Mumbai City FC rout Chennaiyin FC 6-2 in a comeback win" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>It rained goals at the Jawaharlal Nehru Stadium in Chennai as Mumbai City FC came from behind to beat Chennaiyin FC 6-2 in matchweek 6 of the Hero Indian&nbsp;...</p></div>
            </div>
        </a><a href='https://english.mathrubhumi.com/special-pages/isl-2022-2023/isl-2022-23-ruthless-mumbai-city-rout-chennaiyin-6-2-in-comeback-win-1.8043199'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ISL 2022-23: Ruthless Mumbai City rout Chennaiyin 6-2 in ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTdAV_jW3RoMGa6PVASoMtWsHRvCOw_sa9g94idOjU0bfqcgLPH2T83hkoH86YEwOWrqwUdrTxI" alt="ISL 2022-23: Ruthless Mumbai City rout Chennaiyin 6-2 in ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Chennai, Nov 12 (IANS) It rained goals at the Jawaharlal Nehru Stadium here as Mumbai City FC came from behind to thrash Chennaiyin FC 6-2 in an Indian&nbsp;...</p></div>
            </div>
        </a><a href='https://www.news18.com/news/football/live-score-chennaiyin-fc-vs-mumbai-city-fc-isl-2022-23-latest-updates-indian-super-league-live-streaming-football-match-coverage-from-jawaharlal-nehru-stadium-chennai-livenews-6370381.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ISL 2022-2023, Chennaiyin FC vs Mumbai City FC Highlights: CFC ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSSzVBmG-EOeQhp0gZEXq7-4EEOoiWsL11BLG4XvAixJBAYjleCwOFIXr-G2Es4AE6IPx8cH0AB" alt="ISL 2022-2023, Chennaiyin FC vs Mumbai City FC Highlights: CFC ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Chennaiyin FC vs Mumbai City FC Live Match of ISL 2022-23 Match: Get the ISL 2022-23 between Chennaiyin FC and Mumbai City FC Live, CFC vs MCFC Dream11 Team&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}