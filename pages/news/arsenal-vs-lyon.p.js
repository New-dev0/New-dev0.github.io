import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Arsenal vs Lyon</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Arsenal vs Lyon"/>
        <meta name="description" content="Trending News about Arsenal vs Lyon" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Arsenal vs Lyon</h1>
            <Image width={800} height={500} src="https://library.sportingnews.com/styles/facebook_1200x630/s3/2022-12/Mikel%20Arteta_0.jpg?itok=HcZp5Xrv" alt="Arsenal vs Lyon"/>
            <h3>Recent News</h3>
            <a href='https://www.sportingnews.com/us/soccer/news/arsenal-vs-lyon-live-score-highlights-lineups-friendly/recuz3a7zogmrst2iw2yzvfp'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Arsenal vs. Lyon result: Gunners show their class in mid-season ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT1fi3QjrwcrO0zN9v3EnBMjuaRfZrXHe9VU7ZYfh3GAE7npDGCRuEZYoJdFq3h_mC61l3eu203" alt="Arsenal vs. Lyon result: Gunners show their class in mid-season ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Arsenal&#39;s preparations for the return of English and European football began in the best possible way, as the Premier League leaders swept Ligue 1 club Lyon&nbsp;...</p></div>
            </div>
        </a><a href='https://www.espn.com/soccer/report?gameId=657438'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Arsenal vs. Lyon - Football Match Report - December 8, 2022 - ESPN</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT1M4o587vUs_tiFTvu3qqH1705gohNdFS0IC-D4USyH4DviNAOnLzmQdl511WxBvAW3vvomfAx" alt="Arsenal vs. Lyon - Football Match Report - December 8, 2022 - ESPN" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Arsenal beat Lyon 3-0 in a friendly in Dubai on Thursday as those players not involved in the World Cup in Qatar kicked off their preparations for the&nbsp;...</p></div>
            </div>
        </a><a href='https://www.arsenal.com/fixture/arsenal/2022-Dec-08/arsenal-3-0-lyon-match-report'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Arsenal 3 - 0 Lyon - Match Report</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSW4pewCF3A6L2vJO8H8cRVLHwSU-LdowJTuA9spr5WTjFuJb-15yQYs6n0ftlMTCor-a7fpNlY" alt="Arsenal 3 - 0 Lyon - Match Report" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Goals from Gabriel, Eddie Nketiah and Fabio Vieira handed us victory in our Dubai Super Cup opener.</p></div>
            </div>
        </a><a href='https://uk.sports.yahoo.com/news/arsenal-vs-lyon-live-dubai-130210701.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Arsenal 3-0 Lyon LIVE! Dubai Super Cup result, match stream, latest ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTQCXY8DWVFl_qn7-i0zNWaBtclJ_9wEy2bqxIYjNjU48-UCtZkHp1U25x3zuLNfCBl47ajBwI2" alt="Arsenal 3-0 Lyon LIVE! Dubai Super Cup result, match stream, latest ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Arsenal showed no signs of rustiness as they cruised to a 3-0 win over Lyon in the Dubai Super Cup. Almost a month after the Gunners beat Wolves in their&nbsp;...</p></div>
            </div>
        </a><a href='https://www.vavel.com/en-us/soccer/2022/12/07/1131563-arsenal-vs-lyon-live-stream-how-to-watch-on-tv-and-score-updates-in-friendly-match.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Arsenal vs Lyon: Live Stream, How to Watch on TV and Score ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS213pAkI_idkA9Yq_w8YT7xO2wzvXmgTdYEpJh-GKN8Rch7ImF1i78bHbJIkJRfkxC00yretaF" alt="Arsenal vs Lyon: Live Stream, How to Watch on TV and Score ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Follow match Arsenal vs Lyon live stream information and score online, prediction, TV channel, lineups preview, start date and result updates of the 2022&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}