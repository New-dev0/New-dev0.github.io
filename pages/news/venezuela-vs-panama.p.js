import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Venezuela vs Panama</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Venezuela vs Panama"/>
        <meta name="description" content="Trending News about Venezuela vs Panama" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Venezuela vs Panama</h1>
            <Image width={800} height={500} src="https://img.vavel.com/prelive-venezuela-federacionvenezolanadefutbol-org-vavel-1668487498153.jpg" alt="Venezuela vs Panama"/>
            <h3>Recent News</h3>
            <a href='https://www.skysports.com/football/venezuela-vs-panama/479056'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>%competition_name% (Sky Sports)</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="%competition_name% (Sky Sports)" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>International Match match Venezuela vs Panama 15.11.2022. Preview and stats followed by live commentary, video highlights and match report.</p></div>
            </div>
        </a><a href='https://www.vavel.com/en-us/soccer/2022/11/15/1129491-venezuela-vs-panama-live-stream-score-updates-and-how-to-watchfriendlymatch.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Goals and Highlights: Venezuela 2-2 Panama in friendly match 2022</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSRTK7Q0qc4tmrMibyF7Ls28ZLvNKJQ922nRJlrkk49_qEFqhQ6jtdGloUXnhjR1x1SHm7ES8al" alt="Goals and Highlights: Venezuela 2-2 Panama in friendly match 2022" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Venezuela and Panama tied 2-2 in a 2022 friendly match, the goals were scored by Salomón Rondón at minute 83&#39; and Ernesto Torregrossa at minute 90+3&#39; for&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sportingpedia.com/2022/11/15/venezuela-vs-panama-preview-tips-and-odds/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Venezuela vs Panama – Preview, Tips and Odds</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS588tv-3149JMKrKL0toYfT7mxcSRE8ZreOpMZetvy3VDjPLf9_JHmVy8KHvSMilH9_Pa2p6xe" alt="Venezuela vs Panama – Preview, Tips and Odds" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Venezuela vs Panama expert prediction, tips, betting odds and latest news about the two teams. Look at the head to head stats, formation and lineups.</p></div>
            </div>
        </a>
        </Template></>;
}