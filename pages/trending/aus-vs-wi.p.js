import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>AUS vs WI</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,AUS vs WI"/>
        <meta name="description" content="Trending News about AUS vs WI" /></Head><Template>
            <h1 style={{fontSize: "30"}}>AUS vs WI</h1>
            <Image width={800} height={500} src="https://www.jagranimages.com/images/newimg/07102022/07_10_2022-dawidwarnerap_23125085.jpg" alt="AUS vs WI"/>
            <h3>Recent News</h3>
            <a href='https://www.jagran.com/cricket/match-report-aus-vs-wi-australia-won-t20i-series-against-west-indies-david-warner-scored-75-runs-in-2nd-t20i-match-23125085.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Aus vs WI: डेविड वार्नर की दमदार पारी से आस्ट्रेलिया ने वेस्टइंडीज को ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSjYQO947ncwjRs5u0LO09wvVP4eu4LCk2KbzAkqwxyeyC1AbY2mcVPMGWLPHqDiqw0TUF-Kb8W" alt="Aus vs WI: डेविड वार्नर की दमदार पारी से आस्ट्रेलिया ने वेस्टइंडीज को ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ब्रिसबेन, प्रेट्र। Australia vs West Indies T20I series: आस्ट्रेलिया क्रिकेट टीम के ओपनर बल्लेबाज डेविड&nbsp;...</p></div>
            </div>
        </a><a href='https://www.abplive.com/sports/cricket/aus-vs-wi-tim-david-hits-110-meter-monstrous-six-against-west-indies-2233018'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>AUS vs WI: टिम डेविड ने ठोका 110 मीटर लंबा छक्का, गेंदबाज के भी उड़े होश ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQw6SXOMD3zXsLV1nbQm1EyW6qWhige8pb6jzKHrX5x9DUaeCFVowfMPXT1ss-8U8GDhLN1O49I" alt="AUS vs WI: टिम डेविड ने ठोका 110 मीटर लंबा छक्का, गेंदबाज के भी उड़े होश ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Tim David: ऑस्ट्रेलिया के आलराउंडर टिम डेविड ने वेस्टइंडीज के खिलाफ दूसरे टी20 मुकाबले में&nbsp;...</p></div>
            </div>
        </a><a href='https://navbharattimes.indiatimes.com/sports/cricket/cricket-news/aus-vs-wi-australia-made-a-ruckus-warner-and-team-david-blasted-against-west-indies/articleshow/94710276.cms'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>AUS vs WI: विश्व कप से पहले ऑस्ट्रेलिया ने भरी हुंकार, वार्नर और टीम ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR_9prjG2z8INSb49SS4VUBzKm_wmI2_J71jgH2z0XSbwlzQNYONMDqCozYa17cqcRlLwAbsy5h" alt="AUS vs WI: विश्व कप से पहले ऑस्ट्रेलिया ने भरी हुंकार, वार्नर और टीम ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>AUS vs WI: वेस्टइंडीज के खिलाफ दूसरे टी20 मैच में ऑस्ट्रेलिया ने 31 रन से दमदार जीत दर्ज 2-0 से&nbsp;...</p></div>
            </div>
        </a><a href='https://www.espncricinfo.com/series/west-indies-in-australia-2022-23-1317465/australia-vs-west-indies-2nd-t20i-1317483/match-report'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Warner, David and Starc shine as Australia secure convincing win</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTnllRfUMM-Rr7PDVsOEjhzEYGXZ0zu4cism1nyduqFs0SFUGdvR-cpu2EZu32BznO4rDNrYAql" alt="Warner, David and Starc shine as Australia secure convincing win" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Warner dominated the first half of the innings and David turned on the power in the latter stages before West Indies&#39; chase struggled to build a consistent&nbsp;...</p></div>
            </div>
        </a><a href='https://sportstar.thehindu.com/cricket/australia-vs-west-indies-live-score-2nd-t20i-scorecard-updates/article65979723.ece'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Australia vs West Indies Highlights 2nd T20I: Warner, Starc shine as ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ7JlIS9FF_1-8KeUlUA6vRpCux8C41PFJhXbbyjdsO7xLt29ylErg6WV-PV-TjAmPylf3OE9xr" alt="Australia vs West Indies Highlights 2nd T20I: Warner, Starc shine as ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Australia vs West Indies live score: Follow live score, updates, commentary and highlights from the second T20I between Aus and WI.</p></div>
            </div>
        </a><a href='https://www.indiatoday.in/sports/cricket/story/aus-vs-wi-2nd-t20i-david-warner-and-tim-david-were-the-difference-in-the-match-says-aaron-finch-2009474-2022-10-07'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>AUS vs WI, 2nd T20I: David Warner and Tim David were the ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRawYsnQWeO-S9Ek2u6TMVR0x6ld8syIc-IQZlzwdx3tIfPAf_jJZPUXC0qDD3RniI_Q7JTAjBX" alt="AUS vs WI, 2nd T20I: David Warner and Tim David were the ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Australia captain Aaron Finch said that David Warner and Tim David were the difference in the second T20I against West Indies.</p></div>
            </div>
        </a><a href='https://www.dnaindia.com/cricket/report-aus-vs-wi-tim-david-hits-monstrous-110m-six-vs-west-indies-in-the-2nd-t20i-watch-video-2991083'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>AUS vs WI: Tim David hits monstrous 110m six vs West Indies in the ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQuk-MUBmXCX6FwQgsrW4E_ajglX_2J8gh8zLGf9ieZccZyeInSZd-Fc1gR9GQyqqzEGl3uRSlj" alt="AUS vs WI: Tim David hits monstrous 110m six vs West Indies in the ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>David went 4, 6, 6, 4 on the first four balls of the 17th over bowled by Obed McCoy.</p></div>
            </div>
        </a><a href='https://zeenews.india.com/cricket/aus-vs-wi-2nd-t20i-david-warner-tim-david-show-lights-up-the-gabba-before-t20-world-cup-2022-watch-2519055.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>AUS vs WI 2nd T20I: David Warner, Tim David show lights up The ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR5Pw9tiBFXKuCUlP6dltOv5ZKSGj95L6D2I0q1WkPyInDW805FhGYbgufKkAlMcp-hBLep4RB7" alt="AUS vs WI 2nd T20I: David Warner, Tim David show lights up The ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Batting first on Thursday vs West Indies, Australia put on 178/7 in 20 overs. Apart from Warner&#39;s fifty, other standout performer was David who smashed 42&nbsp;...</p></div>
            </div>
        </a><a href='https://sports.ndtv.com/cricket/australia-vs-west-indies-2nd-t20i-live-updates-3410137'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Australia vs West Indies, 2nd T20I Highlights: David Warner, Mitchell ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTbJShk3oi3Sjeytv9a2x6Xyq9MaFku4h1WBFssxNbsM1S3gw1CO8zFQy6fRAu2QfE1rbwQJZUQ" alt="Australia vs West Indies, 2nd T20I Highlights: David Warner, Mitchell ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Australia vs West Indies, 2nd T20I Highlights: Australia on Friday defeated West Indies by 31 runs in the second T20I in Brisbane to sweep the two-match&nbsp;...</p></div>
            </div>
        </a><a href='https://hindi.oneindia.com/news/sports/cricket/tim-david-hits-massive-110-metre-six-australia-won-by-31-runs-against-west-indies-717269.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Aus vs WI: टिम डेविड ने जड़ा 110 मीटर का जोरदार छक्का, गेंदबाज हक्का ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTuZjEMqaA3JHQPvYdmd6naK428yfNRrEDET_YVZnYMT_u4r5AIalHUdF8cdL8ek_0LN4bYj4DA" alt="Aus vs WI: टिम डेविड ने जड़ा 110 मीटर का जोरदार छक्का, गेंदबाज हक्का ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ऑस्ट्रेलिया और वेस्टइंडीज (AUS vs WI) के बीच दो मैचों की टी20 सीरीज का दूसरा मैच 7 अक्टूबर को&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}