import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Chelsea vs Milan</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Chelsea vs Milan"/>
        <meta name="description" content="Trending News about Chelsea vs Milan" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Chelsea vs Milan</h1>
            <Image width={800} height={500} src="" alt="Chelsea vs Milan"/>
            <h3>Recent News</h3>
            <a href='https://www.goal.com/en-in/news/chelsea-vs-milan-lineups-live-updates/blt463d45eedf28c1a4'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Chelsea vs AC Milan: Lineups and LIVE updates</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQT84cJWPXHYRbbpldvKgYqLY3cxPT7l8kEXnNcqp2eMXAig3BTHQlB45pz26nh3ValnI7W8cHw" alt="Chelsea vs AC Milan: Lineups and LIVE updates" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Chelsea haven&#39;t had an ideal start to their Champions League campaign and need a desperate win against AC Milan.</p></div>
            </div>
        </a><a href='https://theathletic.com/live-blogs/chelsea-milan-score/6qRH3P2Tpm5p/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>How Chelsea beat AC Milan 3-0 in Champions League match: Full ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQrzRf1nbHUH6VlCO1Ey88rEdQuN-FTyNAoCs90P5-sR8rbkmza5MYStWYOFB8_wO0WYEFbUjrL" alt="How Chelsea beat AC Milan 3-0 in Champions League match: Full ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Chelsea comfortably beat an injury-depleted AC Milan 3-0 in the Champions League, moving the Blues ahead of the Italian side into second place in Group&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sportingnews.com/us/soccer/news/chelsea-vs-milan-live-score-updates-highlights-lineups-champions-league/jbp71d1qkjtc6tdebmc0er8i'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Chelsea vs. AC Milan result, highlights &amp; analysis as Blues cruise to ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRwK7OazP6KD3QKbgTQTpcKxmSOplzehhZlrPDHc5ScSfTWzOFgFGrlgh5Ss7w8YobmhUVmgqhY" alt="Chelsea vs. AC Milan result, highlights &amp; analysis as Blues cruise to ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Read how Chelsea beat AC Milan 3-0 to go second in Group E with a deserved first win in this season&#39;s Champions League.</p></div>
            </div>
        </a><a href='https://www.espn.in/football/uefa-champions-league/story/4761919/chelsea-beat-ac-milan-in-potters-first-champions-league-win'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Chelsea beat AC Milan in Potter&#39;s first Champions League win</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR0yNkshQsdpn99nyenZA0a6xS01lUilL2KUOBoR4xnr2eGMVV8hvSwFr8AVAlRHo7ETC6VlNoU" alt="Chelsea beat AC Milan in Potter&#39;s first Champions League win" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Graham Potter enjoyed his first Champions League victory with Chelsea, but more importantly, it keeps them in the mix for the knockout stages.</p></div>
            </div>
        </a><a href='https://www.theguardian.com/football/live/2022/oct/05/chelsea-v-milan-champions-league-live-score-updates'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Chelsea 3-0 Milan: Champions League – as it happened</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQUQ2kWQJudXNvHSCBMfbf5Vus9m4mRZiyCy2wto16eNTuCzRSvDX4v17onB8N4aerWBUfJU23d" alt="Chelsea 3-0 Milan: Champions League – as it happened" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Minute-by-minute report: Chelsea started slowly but by the end had utterly dominated the toothless Italian champions. Scott Murray was watching.</p></div>
            </div>
        </a><a href='https://www.trustedreviews.com/news/how-to-watch-chelsea-vs-ac-milan-live-tv-online-listen-free-4272517'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>How to watch Chelsea vs AC Milan live on TV and online, or listen ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQSJFx1czUshO-IHx-4rzOWvweT4qujW0EO9QDCHw16YvxBLRSoVBQkQrlnHloN2sZd16YDpjr5" alt="How to watch Chelsea vs AC Milan live on TV and online, or listen ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Potter nabbed a first win as Chelsea boss with a late goal over Crystal Palace in the Premier League at the weekend, but there&#39;s nothing like a big European&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}