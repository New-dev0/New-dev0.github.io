import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Maccabi Haifa vs Juventus</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Maccabi Haifa vs Juventus"/>
        <meta name="description" content="Trending News about Maccabi Haifa vs Juventus" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Maccabi Haifa vs Juventus</h1>
            <Image width={800} height={500} src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt7201691b7b1e4377/6345ba127e7d650fd0c8df5d/GettyImages-1243890620.jpg" alt="Maccabi Haifa vs Juventus"/>
            <h3>Recent News</h3>
            <a href='https://www.goal.com/en-in/news/juventus-embarrassed-maccabi-haifa-champions-league/blt4f5662971e61c160'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Curtains for Allegri? Juventus embarrassed by Maccabi Haifa in ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQM_gnhgzt68Pcc5aQhXlBTYjrQx5v_L-zoc5cB4ge9hdR0RbEF1wBLrkyMY_RPuRZU4ZXX4oRD" alt="Curtains for Allegri? Juventus embarrassed by Maccabi Haifa in ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The pressure that has already piled on Max Allegri increased tenfold in Israel as Juventus were beaten 2-0 by Maccabi Haifa in the Champions League.</p></div>
            </div>
        </a><a href='https://www.espn.com/soccer/report?gameId=652635'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Maccabi Haifa vs. Juventus - Football Match Report - October 11 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQi614S92LcQaUnvBG_x8gyCBaJN67lgOfs4rUALhN-NDC-GNP6Subtxs_PY9OF0Ei3fgoZnlJC" alt="Maccabi Haifa vs. Juventus - Football Match Report - October 11 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Get a report of the Maccabi Haifa vs. Juventus 2022-23 UEFA Champions League, Group Stage football match.</p></div>
            </div>
        </a><a href='https://www.blackwhitereadallover.com/2022/10/11/23397395/juventus-maccabi-haifa-2022-champions-league-group-stage-lineups-team-news-live-online-streaming'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Juventus vs. Maccabi Haifa 2022 live stream: Team news and how ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSbkD7vjbJIKujg0kmtY-pp8z-DUkhnerm9IlUm6pOVP8h_s_ozmwqP5Nle0H0M9p71huZXGFLq" alt="Juventus vs. Maccabi Haifa 2022 live stream: Team news and how ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Leonardo Bonucci of Juventus FC kicks the ball during the... Photo by Nicolò Campo/LightRocket via Getty Images. Juventus has three games left in&nbsp;...</p></div>
            </div>
        </a><a href='https://football-italia.net/champions-league-maccabi-haifa-vs-juventus-probable-line-ups/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Champions League, Maccabi Haifa vs. Juventus - probable line-ups ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQWlLxc3doUalNb5vElxAzCsKlObiPeutByZfPGUuWhZSzapHCzkhJxlSWqrQWu6OgKLzhcY-BX" alt="Champions League, Maccabi Haifa vs. Juventus - probable line-ups ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Angel Di Maria returns to the Juventus line-up in a must-win game for Massimiliano Allegri against Maccabi Haifa.</p></div>
            </div>
        </a><a href='https://www.fourfourtwo.com/features/maccabi-haifa-vs-juventus-live-stream-match-preview-team-news-and-kick-off-time-for-the-champions-league-clash'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Maccabi Haifa vs Juventus live stream, match preview, team news ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTjHJeKAFW6OXb5rhVRA4ZrKGBW4Vd1K3OYyAGRG2mIhRmvGJ7L0Koph6nlrdZ7GlrjzuC5HozI" alt="Maccabi Haifa vs Juventus live stream, match preview, team news ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Find a Maccabi Haifa vs Juventus live stream and check all the latest on Tuesday&#39;s Champions League clash.</p></div>
            </div>
        </a>
        </Template></>;
}