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
            <Image width={800} height={500} src="" alt="Belgium vs Egypt"/>
            <h3>Recent News</h3>
            <a href='https://english.news.cn/20221119/b45623b2787649f7973b78a5af498f97/c.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>International friendly match: Belgium vs. Egypt</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTIajPKK6s11b0nHK0UVek2F2OxRo-mbrnT6J55NYxpOZ02iGtFwaJ0XAFBuPQHzYTXTfAqQlcm" alt="International friendly match: Belgium vs. Egypt" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Belgium&#39;s Arthur Theate (L) vies with Egypt&#39;s Mohamed Salah during an international friendly football match between Belgium and Egypt at Jaber Al-Ahmad&nbsp;...</p></div>
            </div>
        </a><a href='https://www.espn.com/soccer/report/_/gameId/653666'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Belgium vs. Egypt - Football Match Report - November 18, 2022 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSKQg5Rbbkmd605-ElEg7qzyl3jov_CYQEavEk5QIzABHDNwAjU80MJN_seeEYNCQKc-vRFpZY-" alt="Belgium vs. Egypt - Football Match Report - November 18, 2022 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>An error by Kevin De Bruyne and an inspired pass from Mohamed Salah ensured goals for Egypt, who narrowly missed out on World Cup qualification in March, as&nbsp;...</p></div>
            </div>
        </a><a href='https://www.standard.co.uk/sport/football/belgium-vs-egypt-prediction-kick-off-time-tv-live-stream-team-news-latest-h2h-results-odds-2022-world-cup-friendly-preview-today-b1040515.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Belgium vs Egypt: 2022 World Cup friendly prediction, kick-off time ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQQZ4BXBoTp8Ajh7Z5A19bhI0-_OcwUL5_GYWoch9vCPRuzPvvc0EU5IHaWn4wsNETd3YQrQAZw" alt="Belgium vs Egypt: 2022 World Cup friendly prediction, kick-off time ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>One of the final World Cup warm-up matches will take place between Belgium and Egypt today.</p></div>
            </div>
        </a><a href='https://www.vavel.com/en-us/soccer/2022/11/17/1129674-belgium-vs-egypt-live-stream-score-updates-and-how-to-watch-friendly-game.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Highlights: Belgium 1-2 Egypt in Friendly Match 2022</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTAbH5Tu_e7yRCXEPuKOc3h79w-pNgW57xGjioQp3w_KJWTH_HYgtkFG3I__0tmrQgt1qsbbJGL" alt="Highlights: Belgium 1-2 Egypt in Friendly Match 2022" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Best moments and summary of Egypt&#39;s victory in the last preparation game for the Belgium team prior to the start of the Qatar 2022 World Cup.</p></div>
            </div>
        </a><a href='https://www.completesports.com/belgium-vs-egypt-preview-and-predictions/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Belgium Vs Egypt – Preview And Predictions</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSZA2lCQwfRW6HDnWMLv36f1smkvR5yADzQJ1Bq4MUnmvCGDXH80XY-JYCs5PX0U1wP-cqeMkwm" alt="Belgium Vs Egypt – Preview And Predictions" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Belgium vs Egypt: Belgium are possibly one of the top prospects in the 2022 World Cup. They reached to the semifinals of the previous edition.</p></div>
            </div>
        </a><a href='https://www.sportsmole.co.uk/football/belgium/news/belgium-warm-up-for-world-cup-with-defeat-to-egypt_500020.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Belgium warm up for World Cup with defeat to Egypt</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRLFSnbELo8s3mJY0xejea9Y_mGd7beG8YzOuTcjdiu3jZhA5xCRqgojgxGADLjjPYLWFgZS59j" alt="Belgium warm up for World Cup with defeat to Egypt" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Although Romelu Lukaku was a well-documented absentee, Martinez named an otherwise strong starting lineup, including the likes of Thibaut Courtois, Kevin De&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}