import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Dallas Cowboys</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Dallas Cowboys"/>
        <meta name="description" content="Trending News about Dallas Cowboys" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Dallas Cowboys</h1>
            <Image width={800} height={500} src="https://img.asmedia.epimg.net/resizer/YzydYw7DZ2-lVghLtKlZb_fLIRA=/644x362/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/C5FL3WU7Q2IHWDL4UAACZHKIFE.jpg" alt="Dallas Cowboys"/>
            <h3>Recent News</h3>
            <a href='https://en.as.com/nfl/new-york-giants-vs-dallas-cowboys-live-online-stats-scores-and-highlights-nfl-week-12-n/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>New York Giants vs Dallas Cowboys live online: stats, scores and ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR2amPkVZc4mZSuUdswdINzLJRWvyml1FKKqHnbU-c1kJjLOf2rn29DYh7tHmwnPwsqOBX0KRlx" alt="New York Giants vs Dallas Cowboys live online: stats, scores and ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Fresh off of an unexpected loss to the struggling Detroit Lions, the Giants will now travel to Dallas where they will take on the dangerous Dallas Cowboys.</p></div>
            </div>
        </a><a href='https://www.northjersey.com/story/sports/nfl/giants/2022/11/24/ny-giants-vs-dallas-cowboys-live-updates-from-thanksgiving-showdown/69672827007/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Dallas Cowboys 28, NY Giants 20: Not enough firepower dooms Big ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTI1N0eHjLbwbM862UIYKiKVGTShSZ63W4ziQWS-SgDA3Ihldn5M-xbuj9ImKkCmnwKZEHdHJiL" alt="Dallas Cowboys 28, NY Giants 20: Not enough firepower dooms Big ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The NY Giants are banged up and coming off their worst loss of the season. Can they rebound and pick up a significant upset of Dallas on Turkey Day?</p></div>
            </div>
        </a><a href='https://www.cbsnews.com/essentials/nfl-thanksgiving-football-how-to-watch-the-new-york-giants-dallas-cowboys-game-2022-11-24/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>NFL Week 12: How to watch the New York Giants - Dallas Cowboys ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSgwkLNand2VzL6f6plxTUKPWQVH9uuP9j4r3k4s5I1svLKnbjoIeDe5G5d8A8fGk4ett7gHCmY" alt="NFL Week 12: How to watch the New York Giants - Dallas Cowboys ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Here&#39;s how (and where) to stream the New York Giants - Dallas Cowboys game this Thanksgiving.</p></div>
            </div>
        </a><a href='https://www.si.com/nfl/giants/gameday/new-york-giants-at-dallas-cowboys-inactives-lineup-changes'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>New York Giants at Dallas Cowboys: Inactives &amp; Lineup Changes</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQTwhXbPA_lihF3mCww_LrI3FegFMWvaeCIKAE6a99tobl_mil747zEwYuYN8MxgcrS6xOnVBL-" alt="New York Giants at Dallas Cowboys: Inactives &amp; Lineup Changes" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Giants have a lengthy injury list of players who are unable to participate in their Week 12 game against the Dallas Cowboys due to injury.</p></div>
            </div>
        </a><a href='https://thelandryhat.com/2022/11/24/cowboys-giants-injury-report-illness-week-12/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Cowboys injury report: illness keeps Dallas defenders out on ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSxty5aIlO795iyykBr7WpqLivfVsih6pTNUVVEPSJGnEADMeVroBoc3QqoGKQKrPj1oFlA5oKa" alt="Cowboys injury report: illness keeps Dallas defenders out on ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>It&#39;s Thanksgiving Day, which means it&#39;s time for some Dallas Cowboys football. Before the &#39;Boys take on their NFC East rival New York Giants,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.newsweek.com/dallas-cowboys-thanksgiving-record-wins-losses-1762198'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>What Is the Dallas Cowboys&#39; Thanksgiving Record? Holiday Wins ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSMXsq8fCgL6f7tYX9XKHtFN-EH9EYnGxDhvxQzWiAgVL6sN3Voe8r6hdEbGkqLQBKRxMJaNsII" alt="What Is the Dallas Cowboys&#39; Thanksgiving Record? Holiday Wins ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The team has been a fixture on Thanksgiving Day since the 1960s and, over the decades, has enjoyed more wins than losses on the holiday.</p></div>
            </div>
        </a><a href='https://www.dallasnews.com/espanol/al-dia/nfl-dallas-cowboys/2022/11/24/jonas-brothers-concierto-cowboys-dallas-giants/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Los Jonas Brothers se presentaron en el medio tiempo del juego ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSCVD3PXz3k59NgOLm6mTRyu_D3bJxQrrJVzH1rWc8uD_oHRz5Uz3MzssGumqiWE6nQiKjxIwgQ" alt="Los Jonas Brothers se presentaron en el medio tiempo del juego ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Los Jonas Brothers, nominados al premio Grammy y ganadores del premio American Music Award, se presentaron en vivo en AT&amp;T Stadium durante el espectáculo...</p></div>
            </div>
        </a>
        </Template></>;
}