import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Bears vs Falcons</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Bears vs Falcons"/>
        <meta name="description" content="Trending News about Bears vs Falcons" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Bears vs Falcons</h1>
            <Image width={800} height={500} src="https://bearswire.usatoday.com/wp-content/uploads/sites/63/2022/11/1443079020.jpg?w=1024&h=576&crop=1" alt="Bears vs Falcons"/>
            <h3>Recent News</h3>
            <a href='https://bearswire.usatoday.com/lists/bears-vs-falcons-everything-we-know-about-chicagos-week-11-loss/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bears vs. Falcons: Everything we know about Chicago&#39;s Week 11 loss</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTbb8PIYb0nSZ8ag3rd91ANFRYzwtSF_Qar4TxhZ8MmQqfaziNusvZ7AqfGasLcci1e6i2r_EQX" alt="Bears vs. Falcons: Everything we know about Chicago&#39;s Week 11 loss" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Justin Fields&#39; Rushing Hot Streak: Fields went into Sunday&#39;s game hot on the ground. He had a rushing touchdown in each of the last four games, and he scored&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cnet.com/tech/services-and-software/bears-vs-falcons-livestream-how-to-watch-nfl-week-11-today/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bears vs. Falcons Livestream: How to Watch NFL Week 11 Today</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRUA0GNUO1ZxmteACkINsNDc3N5-g4MQ2xxFu_3j9CraJOfOUuhgUjF8DtczFrwEND-cLqOX_ug" alt="Bears vs. Falcons Livestream: How to Watch NFL Week 11 Today" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Want to watch the Chicago Bears play the Atlanta Falcons? Here&#39;s everything you need to stream Sunday&#39;s 1 p.m. ET game on Fox.</p></div>
            </div>
        </a><a href='https://www.cbssports.com/nfl/news/falcons-vs-bears-odds-line-spread-2022-nfl-picks-week-11-predictions-from-proven-computer-model/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Falcons vs. Bears odds, line, spread: 2022 NFL picks, Week 11 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTgIrnQE1tknuoblSwddTZNYzFAfMPMGuiHzcmaZvE-f750dlZjRpcM7l7Er48wL8Wz5fAGJBoA" alt="Falcons vs. Bears odds, line, spread: 2022 NFL picks, Week 11 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>SportsLine&#39;s model just revealed its NFL picks for Chicago Bears vs. Atlanta Falcons.</p></div>
            </div>
        </a><a href='https://dknation.draftkings.com/nfl/2022/11/20/23460510/bears-vs-falcons-live-stream-nfl-week-11-tv-schedule-channel-start-time-watch-online'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bears vs. Falcons live stream: How to watch Week 11 NFL matchup ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcScYpyJenoptBVmEZO-PwzyNJ0Iut9qX_VE29cy8WEuM7dZnY7WfwmSXYOz8OldW23tk9I16XXq" alt="Bears vs. Falcons live stream: How to watch Week 11 NFL matchup ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>We break down the schedule for Bears vs. Falcons and how to watch in Week 11 of the 2022 NFL season.</p></div>
            </div>
        </a><a href='https://www.espn.com/nfl/recap/_/gameId/401437845'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bears vs. Falcons - Game Recap - November 20, 2022 - ESPN</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSYxAJFYCJJq-HiEkre043uMGJc_MwpKMFbrzSZQ5uwWAOd2rQahTWjbnIz08New0uMi0i274Ct" alt="Bears vs. Falcons - Game Recap - November 20, 2022 - ESPN" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ATLANTA -- — Younghoe Koo&#39;s 53-yard field goal gave Atlanta the lead with less than two minutes to play and the Falcons overcame another impressive game&nbsp;...</p></div>
            </div>
        </a><a href='https://www.si.com/nfl/falcons/news/atlanta-falcons-chicago-bears-inactives-aj-terrell-erik-harris-feleipe-franks'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bears vs. Falcons Inactives: Will A.J. Terrell Play?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTIPdz63vIzM_iErI170N6tykv7HHiSkrQNt5u4AI34RDSsW5orNKNbwYjLxNexBbcLq9KsRHA7" alt="Bears vs. Falcons Inactives: Will A.J. Terrell Play?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Falcons are coming off a long week following a 22-15 loss to the Carolina Panthers on Thursday Night Football, while the Bears fell 31-30 to the Detroit&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}