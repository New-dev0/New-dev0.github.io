import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Argentina vs Saudi Arabia</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Argentina vs Saudi Arabia"/>
        <meta name="description" content="Trending News about Argentina vs Saudi Arabia" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Argentina vs Saudi Arabia</h1>
            <Image width={800} height={500} src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt881b2d810c47f23e/6377fb2e678f637cf694ab14/MP_Lionel_Messi_Argentina_vs_Saud_Abulhamid_Saudi_Arabia.jpg" alt="Argentina vs Saudi Arabia"/>
            <h3>Recent News</h3>
            <a href='https://www.goal.com/en/news/argentina-vs-saudi-arabia-lineups-and-live-updates/blte2f2519482f4f7ca'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Argentina vs Saudi Arabia: Lineups and LIVE updates</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSS3_sOFx1WK257pLnVf4mfv249cqNyI7nd96zXnROR9YAgbPQtWwX2IzjGHiqlPVFB8ac5Ckg8" alt="Argentina vs Saudi Arabia: Lineups and LIVE updates" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The 2014 FIFA World Cup&#39;s runner-up begin their campaign today against Saudi Arabia at the Lusail Stadium. Argentina come into this game having not lost a&nbsp;...</p></div>
            </div>
        </a><a href='https://www.espn.com/soccer/report/_/gameId/633794'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Argentina vs. Saudi Arabia - Football Match Report - November 22 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTeYm0UgBlv7QZyXgVtdsDylWi3BRKuxtwii45eF6dcOA2aAEiImjEVR9cubLlhWwDTfvJORLZg" alt="Argentina vs. Saudi Arabia - Football Match Report - November 22 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Get a report of the Argentina vs. Saudi Arabia 2022 FIFA World Cup, Group Stage football match.</p></div>
            </div>
        </a><a href='https://www.bbc.com/pidgin/sport-63714777'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Argentina vs Saudi Arabia highlight: Lionel Messi, Di Maria skill no ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQd0eP0uHx3GbNJZmJSEqaTPQQlD1nzYLTs164m3ekXWNKOmfGUy1hGcUq8xsgMmeJbfdQWNVxl5g" alt="Argentina vs Saudi Arabia highlight: Lionel Messi, Di Maria skill no ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Saudi Arabia dey lead 2-1 wit gaols from Al Shehri and Al Dawsari. Dia goals come after dem dey one nil behind for first half courtesy of Lionel Messi&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sportingnews.com/au/soccer/news/argentina-vs-saudi-arabia-world-cup-live-score-result/guldh6njdecvphcvfjki22ze'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Argentina vs. Saudi Arabia final score, result: Green Falcons stun ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSi6j0t64z4noX-jpKFWV4NQwyMA8E92s80Qv7zdK6H-n9kl4ozpiuKw7LqOyooL9JZsdQglSrc" alt="Argentina vs. Saudi Arabia final score, result: Green Falcons stun ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Argentina were expected to start their 2022 World Cup campaign with a comfortable win over Saudi Arabia. It didn&#39;t quite work out like that.</p></div>
            </div>
        </a><a href='https://en.as.com/soccer/argentina-saudi-arabia-live-online-score-stats-and-updates-world-cup-2022-n/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Argentina vs Saudi Arabia summary: 1-2, goals, highlights, Al ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRcVYqOcQLhI2mbkfyMCQvSM6kL4jxvqn2CtMXKJg5bK30omI7Xe5vqjJ7Q5CH5TcLWKFSdZwNu" alt="Argentina vs Saudi Arabia summary: 1-2, goals, highlights, Al ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Saudi Arabia stunning Argentina with goals from Al Shehri and Salem Al-Dawsari, Messi got the opener in the Group C game.</p></div>
            </div>
        </a>
        </Template></>;
}