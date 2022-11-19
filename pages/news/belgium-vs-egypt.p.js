import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Belgium vs Egypt</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Belgium vs Egypt"/>
        <meta name="description" content="Trending News about Belgium vs Egypt" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Belgium vs Egypt</h1>
            <Image width={800} height={500} src="https://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F1118%2Fr1092909_1296x729_16%2D9.jpg" alt="Belgium vs Egypt"/>
            <h3>Recent News</h3>
            <a href='https://www.espn.co.uk/football/report/_/gameId/653666'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Belgium vs. Egypt - Football Match Report - November 18, 2022 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSKQg5Rbbkmd605-ElEg7qzyl3jov_CYQEavEk5QIzABHDNwAjU80MJN_seeEYNCQKc-vRFpZY-" alt="Belgium vs. Egypt - Football Match Report - November 18, 2022 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>But Egypt held out for the win with Salah close to getting a goal of his own right at the end. Belgium, who are second in the FIFA rankings and were semi-&nbsp;...</p></div>
            </div>
        </a><a href='https://www.standard.co.uk/sport/football/belgium-vs-egypt-prediction-kick-off-time-tv-live-stream-team-news-latest-h2h-results-odds-2022-world-cup-friendly-preview-today-b1040515.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Belgium vs Egypt: 2022 World Cup friendly prediction, kick-off time ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQQZ4BXBoTp8Ajh7Z5A19bhI0-_OcwUL5_GYWoch9vCPRuzPvvc0EU5IHaWn4wsNETd3YQrQAZw" alt="Belgium vs Egypt: 2022 World Cup friendly prediction, kick-off time ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>One of the final World Cup warm-up matches will take place between Belgium and Egypt today.</p></div>
            </div>
        </a><a href='https://www.thesun.co.uk/sport/20442306/belgium-vs-egypt-live-tv-stream-team-news-world-cup-friendly-online/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Belgium 1 Egypt 2 LIVE REACTION: Salah and Co BEAT Red Devils ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT-IMKzS2PGHWyaCmeN3s-cFkpKJfYX9GuFG4TAQi63KQ6iPwIR2X7vq_OJW0JRgdDHkb2kdYHT" alt="Belgium 1 Egypt 2 LIVE REACTION: Salah and Co BEAT Red Devils ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>BELGIUM lost 2-1 to Egypt in their pre-World Cup friendly with the Pharoahs.Mohamed and Trezeguet grabbed the goals for the African side before Openda.</p></div>
            </div>
        </a><a href='https://www.vavel.com/en-us/soccer/2022/11/17/1129674-belgium-vs-egypt-live-stream-score-updates-and-how-to-watch-friendly-game.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Highlights: Belgium 1-2 Egypt in Friendly Match 2022</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTAbH5Tu_e7yRCXEPuKOc3h79w-pNgW57xGjioQp3w_KJWTH_HYgtkFG3I__0tmrQgt1qsbbJGL" alt="Highlights: Belgium 1-2 Egypt in Friendly Match 2022" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Best moments and summary of Egypt&#39;s victory in the last preparation game for the Belgium team prior to the start of the Qatar 2022 World Cup.</p></div>
            </div>
        </a>
        </Template></>;
}