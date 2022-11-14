import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Rafael Nadal</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Rafael Nadal"/>
        <meta name="description" content="Trending News about Rafael Nadal" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Rafael Nadal</h1>
            <Image width={800} height={500} src="https://www.atptour.com/-/media/images/news/2022/11/13/22/25/nadal-nitto-atp-finals-2022-sunday.jpg" alt="Rafael Nadal"/>
            <h3>Recent News</h3>
            <a href='https://www.atptour.com/en/news/nadal-nitto-atp-finals-2022-sunday-reaction'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Rafael Nadal Philosophical After Fritz Defeat | ATP Tour | Tennis</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTmgVB9l4h7_Ep-pjw-XbA5YDIQr0mqs3foLLzRW-eWHryMQRNYwFD7eeFG7F68zvrwLoLcoRyR" alt="Rafael Nadal Philosophical After Fritz Defeat | ATP Tour | Tennis" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Rafael Nadal was defeated by Taylor Fritz on Sunday at the Nitto ATP Finals, but there was no sign of panic from the Spaniard despite his opening loss at&nbsp;...</p></div>
            </div>
        </a><a href='https://www.espn.in/tennis/story/_/id/35021737/taylor-fritz-beats-rafael-nadal-open-atp-finals'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Taylor Fritz beats Rafael Nadal to open ATP Finals</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSrdbcn3-9XhlgX7-K8cQPqvHiOWmu6mjhfJCDyxuyaycZnBUe80sbL2UD5cg9wnDE12AtAmh3K" alt="Taylor Fritz beats Rafael Nadal to open ATP Finals" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Rafael Nadal&#39;s bid to win one of the few titles missing from his glittering career started poorly as he was beaten in straight sets by eighth-seeded Taylor&nbsp;...</p></div>
            </div>
        </a><a href='https://www.eurosport.com/tennis/atp-finals/2022/live-rafael-nadal-taylor-fritz_mtc1406944/live-commentary.shtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Rafael Nadal - Taylor Fritz live: ATP Finals - Tennis - Eurosport</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQcKK4SH2-yRxcJEHW6hJrJrwiqNmpK9uq9FNSmMtEsp_fcqp1KLvYnCaMt-k4YwXQFSof2HKRf" alt="Rafael Nadal - Taylor Fritz live: ATP Finals - Tennis - Eurosport" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Get the latest Tennis updates on Eurosport. Catch Rafael Nadal - Taylor Fritz live on 13/11/2022. Find scores, stats and comments in real time.</p></div>
            </div>
        </a><a href='https://www.skysports.com/tennis/news/12110/12747122/atp-finals-rafael-nadal-loses-to-taylor-fritz-in-his-opening-match-i-need-more-matches-to-play-at-this-level'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ATP Finals: Rafael Nadal loses to Taylor Fritz in his opening match ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS7po5eTvwpIPcpiaf3iDnw3mDzq3YWI2seOOza53vw-0vplzRh3vffMpU-SuWSGaQzw-7Fq_Of" alt="ATP Finals: Rafael Nadal loses to Taylor Fritz in his opening match ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Rafael Nadals hopes of finishing 2022 ranked as the world No 1 take a major hit as Taylor Fritz hands him a straight-sets defeat in his opening match at the&nbsp;...</p></div>
            </div>
        </a><a href='https://www.foxsports.com.au/tennis/atp-finals-2022-results-tennis-news-taylor-fritz-beats-rafael-nadal-reaction-round-robin/news-story/16d16f9a736cd6b0a03cfb63142fc9a5'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Disaster for Nadal as Spanish superstar suffers setback in trophy bid</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSzspTPUf_Y8mNomtYp8NSR7sMLdTaS02A2b56fA90c0b42TCAl7WyfV49CfrNQ_eOfwDoQE-Da" alt="Disaster for Nadal as Spanish superstar suffers setback in trophy bid" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Disaster for Nadal as Spanish superstar suffers setback in trophy bid.</p></div>
            </div>
        </a><a href='https://www.tennis.com/news/articles/stat-of-the-day-taylor-fritz-beats-rafael-nadal-for-first-top-3-win-atp-finals'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Stat of the Day: Taylor Fritz beats Rafael Nadal at ATP Finals for first ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTTL5e7i5pJ75qV-wYxIie_QZStfC-DrJWNV_wwvh3pc20DeMZvF2TCJQoegMgRXVpBe_TVkSDq" alt="Stat of the Day: Taylor Fritz beats Rafael Nadal at ATP Finals for first ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>He had beaten Nadal in the Indian Wells final this year, but the Spaniard was ranked No. 4 at the time—he&#39;s now No. 2.</p></div>
            </div>
        </a>
        </Template></>;
}