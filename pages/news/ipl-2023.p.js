import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>IPL 2023</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,IPL 2023"/>
        <meta name="description" content="Trending News about IPL 2023" /></Head><Template>
            <h1 style={{fontSize: "30"}}>IPL 2023</h1>
            <Image width={800} height={500} src="https://spiderimg.amarujala.com/assets/images/2022/11/15/750x506/ipl-2023-retained-and-released-players-list_1668511968.jpeg" alt="IPL 2023"/>
            <h3>Recent News</h3>
            <a href='https://www.amarujala.com/live/cricket/cricket-news/ipl-2023-retention-live-updates-check-retained-and-released-players-list-team-wise-csk-mi-rcb-kkr-srh-lsg-gt'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>IPL 2023 Retention List: चेन्नई ने जडेजा को रिटेन किया, SRH से ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQTOfGkH2G5PKYDrZw2wWbYn28NPzQlAylO0f9M395ZuuX-l4c3ZzbkI1UMA0xcDX6gIFjEGFwE" alt="IPL 2023 Retention List: चेन्नई ने जडेजा को रिटेन किया, SRH से ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>IPL 2023 Retention Live Updates, Check Retained players list, IPL Released Players List, Team Wise Details, CSK, MI, RCB, KKR, SRH, LSG, GT, PBKS,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.hindustantimes.com/cricket/ipl-2023-retention-live-updates-retained-players-list-of-mumbai-indians-chennai-super-kings-sunrisers-hyderabad-royal-challengers-bangalore-gujarat-titans-ahead-of-mini-auction-101668509146344.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>IPL 2023 Retention Highlights: Williamson, Mayank Agarwal released</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTXHA1Zb1BpJVU5q6dyPHSbxfoUfko8yQ_HAIZVTrXCaY9Nn0hOo_Jredn2dlFW51QAprpTDIqR" alt="IPL 2023 Retention Highlights: Williamson, Mayank Agarwal released" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>IPL 2023 Retention Highlights: Find the names of all the players, who have been retained and released by their respective franchises ahead of the&nbsp;...</p></div>
            </div>
        </a><a href='https://www.indiatv.in/sports/cricket/ipl-2023-retention-and-releases-remaining-purse-amount-of-all-franchises-ahead-of-mini-auction-squad-and-all-details-2022-11-16-903084'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>IPL 2023 Retention: नीलामी से पहले टीमों ने बढ़ाया अपना बैंक बैलेंस, पढ़ें ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSIl3fy78RxHxPZWTI5aasyMwjgfMMzr4PEnZxrNYVYih9iX7iJ6cq5C8DK189FPRR-a52aloe1" alt="IPL 2023 Retention: नीलामी से पहले टीमों ने बढ़ाया अपना बैंक बैलेंस, पढ़ें ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>IPL 2023 Retention: आईपीएल के 16वें सीजन की नीलामी से पहले फ्रेंचाइजियों ने स्टार खिलाड़ियों को&nbsp;...</p></div>
            </div>
        </a><a href='https://zeenews.india.com/cricket/live-updates/ipl-2023-retention-live-updates-check-team-wise-retained-players-list-csk-mi-dc-srh-kkr-pbks-rr-rcb-november-15-ipl-mini-auction-today-latest-news-2535002'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>IPL 2023 Retention Highlights: Full list of retained and released ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRWAoauRGn3m_5BofclN7F3hGZD9z8_9Sa6QTRMFlFdWQ3Isj6jM5SEEPtPbj_lbKHSSDSU04gt" alt="IPL 2023 Retention Highlights: Full list of retained and released ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>LIVE UPDATES | IPL 2023 Team Wise Retained Players List: Check updates from all 10 IPL Franchises before Retention Day on November 15 here.</p></div>
            </div>
        </a><a href='https://www.iplt20.com/news/3849/tata-ipl-2023-player-retentions-list'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>TATA IPL 2023 Player Retentions List</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="TATA IPL 2023 Player Retentions List" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The window for the 10 franchises to retain players for the TATA Indian Premier League 2023 season ended on 15<sup>th</sup> November 2022. 163 players were retained by the&nbsp;...</p></div>
            </div>
        </a><a href='https://www.jagran.com/cricket/headlines-ipl-2023-know-who-has-been-released-and-retained-by-all-the-10-teams-for-the-next-ipl-season-23205429.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>IPL 2023 Retention: अगले सीजन की नीलामी से पहले टीमों ने किसे किया ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR8u8eSHuuHL81ot0XeQYBlF4Y_yIK95758yqiq00cREPCGBxBF8jjTcIg5AkrLvx277uPANDO1" alt="IPL 2023 Retention: अगले सीजन की नीलामी से पहले टीमों ने किसे किया ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>IPL 2023 Retention Live आइपीएल 2023 के दिसंबर में नीलामी होनी है और इससे पहले टीम ने जिन खिलाड़ियों&nbsp;...</p></div>
            </div>
        </a><a href='https://www.livehindustan.com/cricket/story-ipl-2023-retention-live-updates-check-all-team-retained-players-list-ipl-mini-auction-7356310.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>IPL 2023 Retention Updates: देखिए नीलामी से पहले रिटेन और रिलीज ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT43t5KlBnwJ3_xwINSsfQBUauhVMxYhq5rpTaPn80HeY6YD0mTtPKKvDv2EP95Ug5abhLKIcjG" alt="IPL 2023 Retention Updates: देखिए नीलामी से पहले रिटेन और रिलीज ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>IPL 2023 Retention : फ्रेंचाइजी द्वारा रिटेन खिलाड़ियों की लिस्ट भारतीय क्रिकेट कंट्रोल बोर्ड&nbsp;...</p></div>
            </div>
        </a><a href='https://www.aajtak.in/sports/cricket/story/ipl-2023-retention-list-live-updates-mumbai-indians-chennai-super-kings-delhi-latest-updates-ipl-full-list-tspo-1576142-2022-11-15'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>IPL 2023 Retention List LIVE Updates: CSK ने ड्वेन ब्रावो का साथ छोड़ा ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQJ4YEF78Sr_D5oForcBamSzu1TlwzYvampiAnUvneBsBt008bYg_BGVDkm3q467hOiKGzftac8" alt="IPL 2023 Retention List LIVE Updates: CSK ने ड्वेन ब्रावो का साथ छोड़ा ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>इंडियन प्रीमियर लीग की सभी 10 टीमों ने रिटेन किए खिलाड़ियों की लिस्ट जारी कर दी है.</p></div>
            </div>
        </a><a href='https://www.patrika.com/cricket-news/ipl-2023-remaining-purse-balance-of-ipl-teams-sunrisers-hyderabad-releases-the-most-players-7870457/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>IPL Retention 2023: किस टीम के पास है सबसे अधिक पैसा, इस फ्रेंचईजी ने ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSXEHYjPvHoxx0xry75PAOCnyLMtrjZsSsyO8AFVlFh7D7ztYnpfMmbfL6fvXfk3d9OGSxT95PW" alt="IPL Retention 2023: किस टीम के पास है सबसे अधिक पैसा, इस फ्रेंचईजी ने ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>IPL 2023: आईपीएल 2023 के लिए खिलाड़ियों की रिटेंशन लिस्ट आ चुकी है। इस बार सनराइजर्स&nbsp;...</p></div>
            </div>
        </a><a href='https://www.indiatv.in/sports/cricket/ipl-2023-ravindra-jadeja-tweet-about-csk-after-retention-list-ms-dhoni-chennai-super-kings-2022-11-15-903042'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>IPL 2023: तोड़ने से भी नहीं टूटेगी CSK और Jaddu की जोड़ी! जडेजा ने ट्वीट ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcReqg1Xbx5TMKoOhEWTp0ShkWdQYL_e3HNSPKyByO8t_Er_8BodaCRSwBJdjAFjh9Tt3OjW_ewO" alt="IPL 2023: तोड़ने से भी नहीं टूटेगी CSK और Jaddu की जोड़ी! जडेजा ने ट्वीट ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>IPL 2023: आईपीएल 2023 के लिए चेन्नई सुपर किंग्स द्वारा रिटेन किए जाने के बाद रवींद्र जडेजा&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}