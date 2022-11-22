import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Commanders</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Commanders"/>
        <meta name="description" content="Trending News about Commanders" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Commanders</h1>
            <Image width={800} height={500} src="https://static.www.nfl.com/image/private/t_editorial_landscape_12_desktop/league/xegwtetsn1es4mtzdgax" alt="Commanders"/>
            <h3>Recent News</h3>
            <a href='https://www.nfl.com/news/commanders-activate-de-chase-young-to-53-man-roster-a-year-after-knee-injury'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Commanders activate DE Chase Young to 53-man roster a year ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTXYKBhzwFbt7ieHPG0QmDKcdMFuI-TCYBXvpbFRRJZeJMjW9OqhkkXGshKIxRANTWD3ZV7xUaP" alt="Commanders activate DE Chase Young to 53-man roster a year ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Washington Commanders officially activated pass rusher Chase Young to the 53-man roster, head coach Ron Rivera announced on Monday.</p></div>
            </div>
        </a><a href='https://www.espn.com/nfl/story/_/id/35066579/source-taylor-heinicke-remain-commanders-starting-qb'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Taylor Heinicke to remain Commanders&#39; starting QB</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRrkLEQtILHlT2dvlRUPCtNXWs4JkKOjxdxvVdjLoCGrozwg4BRr0dnS5eqc8i3MaHhJxOyIHvw" alt="Taylor Heinicke to remain Commanders&#39; starting QB" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Washington Commanders will stick with Taylor Heinicke as their starting quarterback as long as he continues to play well and the team keeps winning.</p></div>
            </div>
        </a><a href='https://www.nbcsports.com/washington/commanders/commanders-dominance-houston-brings-serious-playoff-talk-dc'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Commanders dominance in Houston brings serious playoff talk to D.C.</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQricmIjHMJnWV43GGHQpGxrMZN6XkdTuPFKRTBcskQd9dVa8QxLXHVjh1LHgS7_ospWPxFpW3r" alt="Commanders dominance in Houston brings serious playoff talk to D.C." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Commanders dominated the Texans in every fashion on Sunday, culminating in a 23-10 win that brings home a winning record.</p></div>
            </div>
        </a><a href='https://www.nbcsports.com/washington/commanders/commanders-activate-pass-rusher-chase-young-53-man-roster'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Commanders activate pass rusher Chase Young to 53-man roster</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSpL5RX4vuZQNXEsyibOUVHbur8Z3sg5sqr6tL8LMdLKKXajGM5JnHYVa5gBGP7wk5RPNuFTcMG" alt="Commanders activate pass rusher Chase Young to 53-man roster" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Young missed all of training camp and has been sidelined for the 11 games of the regular season while rehabbing his knee. The third-year veteran returned to&nbsp;...</p></div>
            </div>
        </a><a href='https://www.washingtonpost.com/sports/2022/11/21/riding-good-vibes-winning-streak-commanders-activate-chase-young/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Riding good vibes and a winning streak, Commanders activate ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQOwIM2O9iG-Bna2eClO-CY74JuCe7YN8Z7cpVZ0I5vYJnRo8HrOZ68XTnWVR_PozzJMcAnuBjP" alt="Riding good vibes and a winning streak, Commanders activate ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Commanders activated Young from the physically unable to perform list ahead of their Nov. 23 deadline to either do so or place the defensive end on&nbsp;...</p></div>
            </div>
        </a><a href='https://www.washingtonpost.com/sports/2022/11/20/commanders-vs-texans/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Four takeaways from the Commanders&#39; 23-10 win over the Texans</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRTZXSN2Wh-GLtugAlk2bFeGgu9bwR742JW1AfCYKGQ7jynMgHFNDnEwgkiBoXsaCFy06eOigED" alt="Four takeaways from the Commanders&#39; 23-10 win over the Texans" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Texans quarterback Davis Mills capped an 11-play drive with a four-yard touchdown run. Houston has two timeouts remaining. Commanders cornerback Benjamin St-&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cbssports.com/nfl/news/commanders-chase-young-activated-to-53-man-roster-ahead-of-week-12-matchup-with-falcons/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Commanders&#39; Chase Young activated to 53-man roster ahead of ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSjYTCyyE0Pi3MDrym_8srSfhEFFEQmrjuaclQzZGcQ934C2yS3G-wLvd8JGUsakq06yAiRPIBM" alt="Commanders&#39; Chase Young activated to 53-man roster ahead of ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Washington Commanders have won two straight and are now firmly in the playoff mix. They are now getting an important reinforcement in the form of star&nbsp;...</p></div>
            </div>
        </a><a href='https://sports.yahoo.com/commanders-activate-pro-bowl-pass-rusher-chase-young-ahead-of-sundays-game-vs-falcons-203954801.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Commanders activate Pro Bowl pass rusher Chase Young ahead of ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT4I1C1A2wSkeI8BRuGf_E7-h1ppXu7VrLX2_dLdAMGY_7nk03xYau9ZSl2xKpB_nhX4wxMiQlv" alt="Commanders activate Pro Bowl pass rusher Chase Young ahead of ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The 2020 Defensive Rookie of the Year returns from an ACL tear to a team that&#39;s won five of its last six games.</p></div>
            </div>
        </a><a href='https://www.nbcsports.com/washington/commanders/ron-rivera-announces-taylor-heinicke-commanders-qb1-moving-forward'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ron Rivera announces Taylor Heinicke as Commanders&#39; QB1 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ1NgEnlH8NFjXgyo93EHzMOn0xa2LSexpvpYCfXpu_7uHnSUpGXcFYWB8PV5z9l-lVf53XGa2a" alt="Ron Rivera announces Taylor Heinicke as Commanders&#39; QB1 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>&quot;It&#39;s a special moment. It&#39;s something I&#39;ve been working for my whole life,&quot; Heinicke said postgame on being named the starter. &quot;To be a starting quarterback in&nbsp;...</p></div>
            </div>
        </a><a href='https://www.commanders.com/news/instant-analysis-commanders-defense-smothers-houston-in-23-10-victory'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Instant analysis | Commanders&#39; defense smothers Houston in 23-10 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSxt6gS0wbd4Pp3UNd5GsXzqSyZFhur8YIzNvwf6eWxyjcRrmwkpM28ZWkGTeVbqj22r2f0yS0g" alt="Instant analysis | Commanders&#39; defense smothers Houston in 23-10 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Washington allowed five net yards in the first half and recorded in five sack to get above .500 for the first time since Week 1.</p></div>
            </div>
        </a>
        </Template></>;
}