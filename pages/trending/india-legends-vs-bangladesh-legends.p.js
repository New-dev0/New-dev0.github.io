import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>India Legends vs Bangladesh Legends</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,India Legends vs Bangladesh Legends"/>
        <meta name="description" content="Trending News about India Legends vs Bangladesh Legends" /></Head><Template>
            <h1 style={{fontSize: "30"}}>India Legends vs Bangladesh Legends</h1>
            <Image width={800} height={500} src="https://images.news18.com/ibnlive/uploads/2022/09/road-safety-world-series-india-legends-vs-bangladesh-legends-live-score-166411001116x9.jpg" alt="India Legends vs Bangladesh Legends"/>
            <h3>Recent News</h3>
            <a href='https://www.news18.com/cricketnext/news/india-legends-vs-bangladesh-legends-live-score-cricket-updates-streaming-t20-road-safety-world-series-2022-match-18-ind-l-vs-ban-l-latest-scorecared-today-dehradun-livenews-6035353.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>India Legends vs Bangladesh Legends Highlights, Road Safety ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS_sZW4z0KrHugW2YJjCNqZ3665JQfzzjlMg1gwxvNfDazPbGjePDsTNnw1TJZUIX_fFALpgx-V" alt="India Legends vs Bangladesh Legends Highlights, Road Safety ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>India Legends vs Bangladesh Legends Live Score, Road Safety World Series 2022 Updates: Check here for all the live score, live match text updates from IND-L&nbsp;...</p></div>
            </div>
        </a><a href='https://zeenews.india.com/cricket/india-legends-vs-bangladesh-legends-live-streaming-when-and-where-to-watch-ind-l-vs-ban-l-in-road-safety-world-series-t20-2022-in-india-on-tv-and-online-2514150.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>India Legends vs Bangladesh Legends Live Streaming: When and ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTE5ofzAGlFBCy8qDFYNrASr4ag9fk2q_gcN1XITPUKkZHjuCDsqHUQmf8uP7WIDKy8OWi6RpX7" alt="India Legends vs Bangladesh Legends Live Streaming: When and ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Here is all you need to know about India Legends vs Bangladesh Legends in the Road Safety World Series T20 2022.</p></div>
            </div>
        </a><a href='https://www.insidesport.in/ind-l-vs-ban-l-highlights-india-legends-bangladesh-legends-match-abandoned-sachin-tendulkar-team-india-qualifies-for-semis-watch-rsws-2022-highlights/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>IND-L vs BAN-L Highlights: India-legends &amp; Bangladesh-Legends ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR_1NYwtON3HsZnLUHEwgUBTcBlYWtx9vOZwr_4QNs8A94Tq4zEMtIUrXsAr5pdof5EkpTL1Cpm" alt="IND-L vs BAN-L Highlights: India-legends &amp; Bangladesh-Legends ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>IND-L vs BAN-L Highlights: India-legends &amp; Bangladesh-Legends share spoils as rain plays SPOILSPORT, Watch RSWS 2022 Highlights, Road Safety World Series.</p></div>
            </div>
        </a><a href='https://cricketaddictor.com/cricket-news/india-legends-vs-bangladesh-legends-live-streaming-details-live-telecast-channel-in-india-road-safety-world-series-2022-match-18/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>India Legends vs Bangladesh Legends Live Streaming Details, Live ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRZ8X6fHQ3yOz5fwPlft3YeekSIgSTo4TPcE7DwfMIMbbC0t9QBw6UNMX58E1zD8u61bRzxO7nf" alt="India Legends vs Bangladesh Legends Live Streaming Details, Live ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>India Legends vs Bangladesh Legends Live Streaming Details, Live Telecast Channel In India. Road Safety World Series 2022 Match 18.</p></div>
            </div>
        </a><a href='https://www.republicworld.com/sports-news/cricket-news/india-legends-vs-bangladesh-legends-in-l-vs-bn-l-dream11-prediction-fantasy-tips-and-more-articleshow.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>India Legends vs Bangladesh Legends: IN-L vs BN-L Dream11 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRPK9APGyAZTDPVQAc52d7JwYHl4fALYsjSuCpMo3a2E3vBAtDMR7aJMZt3gQ7LL-3HXIzSFtCk" alt="India Legends vs Bangladesh Legends: IN-L vs BN-L Dream11 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The match is scheduled to be played at Rajiv Gandhi International Cricket Stadium, Dehradun and will start at 7:30 pm IST. India Legends are currently second on&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}