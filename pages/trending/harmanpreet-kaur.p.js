import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Harmanpreet Kaur</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Harmanpreet Kaur"/>
        <meta name="description" content="Trending News about Harmanpreet Kaur" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Harmanpreet Kaur</h1>
            <Image width={800} height={500} src="https://i0.wp.com/cricketaddictor.com/wp-content/uploads/2022/07/Harmanpreet-Kaur-BBL.jpg" alt="Harmanpreet Kaur"/>
            <h3>Recent News</h3>
            <a href='https://cricketaddictor.com/cricket-news/india-captain-harmanpreet-kaur-to-miss-initial-games-of-womens-big-bash-league-wbbl/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>India Captain Harmanpreet Kaur To Miss Initial Games Of Women&#39;s ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQu2Lw0u1AKYRgTTuSkim0mewAAmcDsXJlH9G3Lv4-EJK3b5qANBUrJlwb5ueQkqDSMc89UYfWR" alt="India Captain Harmanpreet Kaur To Miss Initial Games Of Women&#39;s ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>With the win over Sri Lanka, India Women&#39;s National Cricket Team continued their dominance in the Asian tournament and won their 7th Asia Cup title in 8&nbsp;...</p></div>
            </div>
        </a><a href='https://pragnews.com/sports/harmanpreet-kaur-will-not-be-able-to-attend-the-first-two-matches-bbl-fans-dissapointed'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Harmanpreet Kaur will not be able to attend the first two matches ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTFu2MYmbpVVLhqGjpoX0d1sa8ZQtope7WNjA_F8AssX6wSANNGyF0h3nrCBYjR5EbP9fdq-02M" alt="Harmanpreet Kaur will not be able to attend the first two matches ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>In contrast, Meg Lanning, the captain of the Australian team that took home the gold medal at the Commonwealth Games, announced an extended hiatus a few days&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sportskeeda.com/cricket/wbbl-2022-indian-players-watch'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>WBBL 2022: Indian players to watch out for</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRwTL1JA91uo73NtFKCx-_0_TiopQ6MV4omdG6GzsyRzWi9evLgyEqYNGJXpsqii7xdLWIJ1fvy" alt="WBBL 2022: Indian players to watch out for" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Women&#39;s Big Bash League (WBBL) kicked off in style last week, but without Indian players.</p></div>
            </div>
        </a>
        </Template></>;
}