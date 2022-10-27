import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>PSG</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,PSG"/>
        <meta name="description" content="Trending News about PSG" /></Head><Template>
            <h1 style={{fontSize: "30"}}>PSG</h1>
            <Image width={800} height={500} src="https://www.ligue1.com:443/-/media/Project/LFP/Ligue1-COM/Images/Articles-Assests/2022/10/26/Desktop_UK_L1_2223_Messi_Neymar_Mbappe_Paris.jpg" alt="PSG"/>
            <h3>Recent News</h3>
            <a href='https://www.ligue1.com/Articles/NEWS/2022/10/26/psg-troyes-preview-neymar-back-for-paris'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>PSG-Troyes preview: Neymar back for Paris</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRxz3J_Lco_4aByHLA4cI7dcKXlD8CbMQdqKQQCtB79DNQdwRONck7FxDmbj9xfbwb_2G7s3pir" alt="PSG-Troyes preview: Neymar back for Paris" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Paris Saint-Germain&#39;s fabled front three of Lionel Messi, Neymar Jr. and Kylian Mbappé could be reunited in Paris on Saturday after the Brazilian missed&nbsp;...</p></div>
            </div>
        </a><a href='https://www.goal.com/en-in/lists/psg-winners-losers-ratings-messi-neymar-mbappe-smash-seven-past-maccabi-haifi/blt2685ebc2d3196e93'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>PSG winners, losers and ratings as Messi, Neymar and Mbappe ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQqoJB_ZRUuk8PBkH2100H1vb7XN6jboFhpmj2hRdsw-NIlSiPlz6kWOSr-IvpJa2qdffBKrk8w" alt="PSG winners, losers and ratings as Messi, Neymar and Mbappe ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>PSG hammered Maccabi Haifa 7-2 in the Champions League with superstar forwards Kylian Mbappe, Neymar and Lionel Messi all on the scoresheet.</p></div>
            </div>
        </a><a href='https://www.wionews.com/sports/lionel-messi-breaks-cristiano-ronaldos-champions-league-record-as-psg-run-riot-against-maccabi-haifa-528616'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lionel Messi breaks Cristiano Ronaldos Champions League record ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTQ6Owfnfe4Mpd5sdzOZO_DUBtqhUYp5hhEYZceTceSf-hnLwY_ZJXG81ucQ1Rbr8bqzEXZnvxT" alt="Lionel Messi breaks Cristiano Ronaldos Champions League record ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Lionel Messi continued his fine form for Paris Saint-Germain this season with a magnificent brace against Maccabi Haifa in the Champions League on Wednesday&nbsp;...</p></div>
            </div>
        </a><a href='https://sportstar.thehindu.com/football/champions-league/ucl-psg-vs-maccabi-haifa-live-steaming-info-squads-predicted-xi-paris-st-germain-mh-updates-highlights/article66054656.ece'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>PSG vs Maccabi Haifa HIGHLIGHTS, UEFA Champions League ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRRJ-qobs8wtx7JofNeJyd4Y5mtuWO1v_T4o2rwlIGNlK9Xy-VJNUJOgK63CPnxwpi8pR_0VQ1c" alt="PSG vs Maccabi Haifa HIGHLIGHTS, UEFA Champions League ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>82&#39; Eketike misses!! Messi finds Eketike with a through ball. But the youngster cant&#39; find his first goal. GLORIOUS CHANCE!! October 26,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.espn.in/football/report/_/gameId/652654'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Paris Saint-Germain vs. Maccabi Haifa - Football Match Report ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR9NhYhivC38mKLRGpw-ElZPY33DzNUP6Jfy5IfaWDjw11VBXHKxysvZyOkBYes6ZPotupIB11p" alt="Paris Saint-Germain vs. Maccabi Haifa - Football Match Report ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Get a report of the Paris Saint-Germain vs. Maccabi Haifa 2022-23 UEFA Champions League, Group Stage football match.</p></div>
            </div>
        </a><a href='https://www.hindustantimes.com/sports/football/mbappe-messi-brace-helps-psg-thrash-maccabi-7-2-in-champions-league-101666751135724.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mbappe, Messi brace helps PSG thrash Maccabi 7-2 in Champions ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQgs7m5vwX4IMb88-DaEmw0Mxua0p-yCCdW9CBs95DxaZaLzq1Wj1JrwY2kw32o-a3vp0CT0ooi" alt="Mbappe, Messi brace helps PSG thrash Maccabi 7-2 in Champions ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>PSG&#39;s romp means with one game remaining against already-eliminated Juventus they top the standings on goal difference from Benfica with 11 points.</p></div>
            </div>
        </a><a href='https://www.indiatoday.in/sports/football/story/psg-vs-maccabi-haifa-7-2-champions-league-messi-neymar-mbappe-reaction-2289567-2022-10-26'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>It&#39;s paradise: PSG coach Galtier chuffed with Messi, Neymar and ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSauG5z32PQ259nAQPbHdimcuJp4p6Q0h4PDnkF5Unou9x4y_9jQ2Bs1wGsnzo5XxzteOUuBNph" alt="It&#39;s paradise: PSG coach Galtier chuffed with Messi, Neymar and ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Champions League: Lionel Messi scored twice and was denied a record 9th UCL hat-trick by the cross bar. Kylian Mbappe netted a brace and Neymar chipped in&nbsp;...</p></div>
            </div>
        </a><a href='https://www.insidesport.in/psg-vs-troyes-live-psg-aim-to-extend-gap-at-top-against-faltering-troyes-check-psg-vs-troyes-predicted-xi-team-news-follow-live/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>PSG vs Troyes LIVE - PSG AIM to EXTEND gap at top against ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSgPc_pHopSvNQ1toYJZvizrMGCHq2_YK92H2fC0M042YUOY6RTKG9R4hE4Af6TlXqaSVvMLNDh" alt="PSG vs Troyes LIVE - PSG AIM to EXTEND gap at top against ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>PSG vs Troyes LIVE - PSG AIM to EXTEND gap at top against faltering Troyes - Check PSG vs Troyes Predicted XI, PSG vs Troyes LIVE Streaming, Ligue 1 LIVE.</p></div>
            </div>
        </a><a href='https://bolavip.com/en/soccer/psg-vs-troyes-date-time-and-tv-channel-to-watch-free-2022-2023-ligue-1-in-the-us-20221026-0034.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>PSG vs Troyes: Date, Time and TV Channel to watch free 2022 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTVqUnq7LpWvol7qNLtiLy7JnbZ6eku_0GLtXPlSEjbx0cl1buQlfRQxCE6dzCFYiDQc4yeHqZq" alt="PSG vs Troyes: Date, Time and TV Channel to watch free 2022 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>PSG will host Troyes trying to extend their lead on Matchday 13 of the 2022-2023 Ligue 1. The home team appears as the favorites after their win in&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}