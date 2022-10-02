import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Southampton vs Everton</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Southampton vs Everton"/>
        <meta name="description" content="Trending News about Southampton vs Everton" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Southampton vs Everton</h1>
            <Image width={800} height={500} src="" alt="Southampton vs Everton"/>
            <h3>Recent News</h3>
            <a href='https://www.skysports.com/football/southampton-vs-everton/report/464723'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Southampton 1-2 Everton: Conor Coady and Dwight McNeil score ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ0C_oNV9W35kXSnyxDh1D1ZgZwNOvhzgZ9Nizv8yv4SLm7W7NJNCzPo6zYKrhh3GL83Oc61NvM" alt="Southampton 1-2 Everton: Conor Coady and Dwight McNeil score ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Match report and free highlights as Everton beat Southampton 2-1 at St Marys to record back-to-back victories in the Premier League; Joe Aribo gave hosts&nbsp;...</p></div>
            </div>
        </a><a href='http://www.espn.in/football/report?gameId=637902'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Southampton vs. Everton - Football Match Report - October 1, 2022 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTvbEZYkmUazReU5adNKwokKkkXbv0V67m4UXFHJxj7U65DnOSNo7Y40xgrbRIZUN64VTzpxKPM" alt="Southampton vs. Everton - Football Match Report - October 1, 2022 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Get a report of the Southampton vs. Everton 2022-23 English Premier League football match.</p></div>
            </div>
        </a><a href='https://soccer.nbcsports.com/2022/10/01/southampton-vs-everton-video-highlights-analysis-reaction-recap/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Southampton vs Everton: Toffees&#39; comeback seals back-to-back wins</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcST-wJcvIkW7w-NPW4JYG6a9XsaPhSkEj5g6mSnQ3SYMuuRJRdA32gcWBAQ7b4rhJEB0MWCSzXp" alt="Southampton vs Everton: Toffees&#39; comeback seals back-to-back wins" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Everton fought back to beat Southampton at St Mary&#39;s Stadium as Frank Lampard&#39;s Toffees have secured back-to-back wins and are in the top 10.</p></div>
            </div>
        </a><a href='https://www.fourfourtwo.com/features/southampton-vs-everton-live-stream-how-to-watch-the-premier-league-from-anywhere-in-the-world'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Southampton vs Everton live stream: How to watch the Premier ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSeBtBjVgqJXP6d7ew0GNMd6vDA19Kh7dM_JuSKSj_vm8AWbNTwI_Mmt46yFMYWBrhBpqIN05nN" alt="Southampton vs Everton live stream: How to watch the Premier ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Southampton will be looking to bounce back from two consecutive defeats when they host Everton on Saturday. Ralph Hasenhuttl&#39;s side have blown hot and cold&nbsp;...</p></div>
            </div>
        </a><a href='https://www.bbc.co.uk/sport/football/63017882'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Everton come from behind to beat struggling Saints</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT6_pBZfWKYkhHwIeWpDCwht3Gs1nkEYRnf9-OAIMV1eE6Dk-iP1gYbtHj2ip0tIvYflXKiqN2h" alt="Everton come from behind to beat struggling Saints" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Everton score twice in a game for the first time this season as they come from behind to beat Southampton at St Mary&#39;s.</p></div>
            </div>
        </a><a href='https://www.liverpoolecho.co.uk/sport/football/football-news/southampton-everton-live-stream-score-25153793'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Southampton vs Everton live - goal updates and analysis</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSXEErfEOe9YG5RkxcP3tE2kC8lkNd-scMaCDTWDssT-BO8-HHHAG5TNt1K7vwMU0Tf4T_ue7CE" alt="Southampton vs Everton live - goal updates and analysis" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Live score updates, team news, goals, how to watch and commentary stream from St Mary&#39;s at Everton face Southampton in the Premier League.</p></div>
            </div>
        </a>
        </Template></>;
}