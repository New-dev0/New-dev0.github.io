import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Brazil vs Serbia</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Brazil vs Serbia"/>
        <meta name="description" content="Trending News about Brazil vs Serbia" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Brazil vs Serbia</h1>
            <Image width={800} height={500} src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt9ce3314bf32401e8/637c928d678f637cf694ace6/MP_Neymar_Brazil_vs_Aleksandar_Mitrovic_Serbia.jpg" alt="Brazil vs Serbia"/>
            <h3>Recent News</h3>
            <a href='https://www.goal.com/en-za/news/brazil-vs-serbia-lineups-and-live-updates/bltdc25b9bf0f624bc7'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Brazil vs Serbia: Lineups and LIVE updates</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT3ZwJ1LFocE7E_Gxiz-3U9rMI0B6l7kiD6hb2YXrbWHMS4oSlPjPtQCniEzZK0DI5uChVC8qDW" alt="Brazil vs Serbia: Lineups and LIVE updates" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Brazil have been touted by many as one of the clear favourites. Can Neymar lead them to glory this time?</p></div>
            </div>
        </a><a href='https://en.as.com/soccer/brazil-vs-serbia-live-online-score-stats-and-updates-world-cup-2022-n/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Brazil vs Serbia summary: Richarlison overhead kick, score, goals ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQE1ZtgBmGg4ce9-JJ5zZU0fHFAaXlkEeKzD-T6YbM8Ir7qoi34mITWT1CPtA6G-7rvaUkYiSUG" alt="Brazil vs Serbia summary: Richarlison overhead kick, score, goals ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Live updates as Brazil face Serbia in World Cup 2022 Group G at Lusail Stadium, Qatar, today, Thursday 24 November 2022. Kick-off: 2pm ET.</p></div>
            </div>
        </a><a href='https://www.sportingnews.com/us/soccer/news/brazil-vs-serbia-world-cup-live-score-result/xjm8fs3qzmqfjhdwgg0lyzpw'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Brazil vs Serbia final score, result: Richarlison stunner seals win as ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRNyrdqwzk_4w0bt3qpih372y2t-ZjxJDwqu4Yec_FHJyQ2kij-PQN20dcS8yR3Yn0o2A5hlWtH" alt="Brazil vs Serbia final score, result: Richarlison stunner seals win as ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Tournament heavyweights Brazil started their World Cup challenge by seeing off Group G rivals Serbia at the Lusail Stadium, thanks to Richarlison&#39;s&nbsp;...</p></div>
            </div>
        </a><a href='https://www.aljazeera.com/news/liveblog/2022/11/24/live-brazil-vs-serbia-world-cup-2022'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Brazil vs Serbia 2-0: World Cup 2022 – as it happened</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT1vqahibnlBzaR25JM6nY46qXuVcaYbM1lwDJfcTCDF11hG5cYaZUm-o_itDaiRRwvFAWBZQXV" alt="Brazil vs Serbia 2-0: World Cup 2022 – as it happened" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>All the updates from the World Cup 2022 match between Brazil and Serbia at Lusail Stadium.</p></div>
            </div>
        </a><a href='https://www.si.com/soccer/2022/11/24/brazil-serbia-world-cup-2022-video-highlights-recap-neymar'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Richarlison, Brazil Make Highlight-Reel Opening Statement vs ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTVqY1TEUhXJnK20WSBjw13n1Ws54NCKxdxrxi5-N_bsmaaCwptOZgnyogAI7eTvA5QBeJ6_4bR" alt="Richarlison, Brazil Make Highlight-Reel Opening Statement vs ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Tottenham forward scored a pair to lead Brazil to the three points at the World Cup—with his second a front-runner for goal of the tournament.</p></div>
            </div>
        </a>
        </Template></>;
}