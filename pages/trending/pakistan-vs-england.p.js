import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Pakistan vs England</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Pakistan vs England"/>
        <meta name="description" content="Trending News about Pakistan vs England" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Pakistan vs England</h1>
            <Image width={800} height={500} src="https://images.indianexpress.com/2022/09/PAK-ENG-5.jpg" alt="Pakistan vs England"/>
            <h3>Recent News</h3>
            <a href='https://indianexpress.com/article/sports/cricket/pak-vs-eng-6th-t20-live-score-updates-8182529/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>PAK vs ENG 6th T20 Highlights: England beat Pakistan by eight ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR7WbLGR3wcNii3BFlClygfzAjYieYa15jeagxXJGicfGacGJHyoGJ7Lk-zrPcZwykQwiz2-D-t" alt="PAK vs ENG 6th T20 Highlights: England beat Pakistan by eight ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Pakistan vs England 6th T20 Match Highlights: England&#39;s Phil Salt scored a blistering half-century as the visitors raced to an eight-wicket win over&nbsp;...</p></div>
            </div>
        </a><a href='https://timesofindia.indiatimes.com/sports/cricket/live-cricket-score-updates-pakistan-vs-england-2022-6th-t20i/liveblog/94566428.cms'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pakistan vs England 6th T20I Highlights: Philip Salt stars as England ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcREkZXNT-X7MpTk_wyEdGwMMDmn0tKW-QivcW_E_dwA4typKagK8JkhjV--GkS3I730W7A9B6v0" alt="Pakistan vs England 6th T20I Highlights: Philip Salt stars as England ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Stay updated with Times of India to get all the live cricket score updates, scorecard, and ball by ball commentary of the sixth T20I between Pakistan.</p></div>
            </div>
        </a><a href='https://www.espncricinfo.com/series/england-in-pakistan-2022-1327226/pakistan-vs-england-6th-t20i-1327233/match-report'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Phil Salt&#39;s 88 not out powers England to series-squaring victory</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRUxygH2vohon5hnTeNrA94pW9FO5XNwFXo9XFnX-423DAUl9Kz2CnGcvTxwmc_wlICQttww1jD" alt="Phil Salt&#39;s 88 not out powers England to series-squaring victory" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Babar carries bat for 87 too, but Sam Curran&#39;s cutters prove the difference in bowling stakes.</p></div>
            </div>
        </a><a href='https://www.news18.com/cricketnext/news/live-cricket-score-pakistan-vs-england-6th-t20i-latest-updates-pak-vs-eng-live-streaming-cricket-match-scorecard-highlights-from-gaddafi-stadium-lahore-livenews-6074017.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pakistan vs England Highlights, 6th T20I Updates: Phillip Salt ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRmoLkrHc5petK0AvBbHch7WlRlhZnjopry3qPxNrWykDrdDjH5zC9KziWgON10qLarUXb9CyQ5" alt="Pakistan vs England Highlights, 6th T20I Updates: Phillip Salt ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Live Score PAK vs ENG 6th T20I: Here you can follow live score and updates of Pakistan vs England sixth T20I match from Lahore.</p></div>
            </div>
        </a><a href='https://www.indiatoday.in/sports/cricket/story/pakistan-vs-england-6th-t20i-live-score-updates-pak-vs-eng-lahore-2006878-2022-09-30'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pakistan vs England, 6th T20I Highlights: England win by 8 wickets</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSXaAdtb5xG8L1_hyeKieGHiAESYGYObOEeBgIlljS4PWja7BnUSbmGkiH9XVgnKqMhkHuVavcG" alt="Pakistan vs England, 6th T20I Highlights: England win by 8 wickets" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Pakistan (PAK) vs England (ENG), 6th T20I Highlights: Babar Azam&#39;s 87 went in vain as England rode on a special knock from Phil Salt to chase down 170 in&nbsp;...</p></div>
            </div>
        </a><a href='https://sports.ndtv.com/cricket/pakistan-vs-england-2022-6th-t20i-live-score-updates-3392761'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pakistan vs England, 6th T20I Highlights: Rampant Philip Salt ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQNZgNncMU8RtmhxaJbFQAW6lx07zdySnrZzrToIlFfwhcep18iC2-Xt3LNk39IjOqp6CuE11Va" alt="Pakistan vs England, 6th T20I Highlights: Rampant Philip Salt ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Pakistan vs England, 6th T20I Highlights: England chased down a 170-run target in 14.3 overs against Pakistan at the Gadaffi Stadium, Lahore on Friday.</p></div>
            </div>
        </a><a href='https://hindi.news18.com/news/sports/cricket-pakistan-vs-england-6th-t20i-babar-azam-returned-to-form-england-got-a-target-of-170-runs-to-win-4674403.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>PAK vs ENG, 6th T20I: बाबर आजम फॉर्म में लौटे, इंग्लैंड को जीत के लिए ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQLR9piNHI9CMbLPYmlK1mZt-I_kpwYNrP-dD1_yQ3C5gfxFfq6CH7hoZJjOIxYy0HglVwtkCHe" alt="PAK vs ENG, 6th T20I: बाबर आजम फॉर्म में लौटे, इंग्लैंड को जीत के लिए ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Pakistan vs England, 6th T20I: पाकिस्तान और इंग्लैंड क्रिकेट टीम के बीच जारी सात मैचों की टी20&nbsp;...</p></div>
            </div>
        </a><a href='https://www.livehindustan.com/cricket/story-pakistan-vs-england-6th-t20i-gaddafi-stadium-lahore-philip-salt-stormy-innings-babar-azam-eng-beat-pak-by-8-wickets-7160887.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>PAK vs ENG: बाबर आजम पर भारी पड़ी फिलिप साल्ट की तूफानी पारी, इंग्लैंड ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQeD6ifP8RrIA2H2PD-wsopo03353GaxrQZ1XpuyUjcy0HbIhitcgzijBodGXG8C3cPLPTmGvf-" alt="PAK vs ENG: बाबर आजम पर भारी पड़ी फिलिप साल्ट की तूफानी पारी, इंग्लैंड ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>बाबर आजम के अर्धशतक के दम पर पाकिस्तान ने इंग्लैंड के सामने जीत के लिए 170 रनों का&nbsp;...</p></div>
            </div>
        </a><a href='https://zeenews.india.com/hindi/zee-hindustan/sports-news/pakistan-vs-england-6th-t20i-philip-salt-smashes-70-runs-in-just-16-balls-england-beats-pakistan-by-8-wkts/1375025'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ENG vs PAK: सिर्फ 16 गेंदों में फिल सॉल्ट ने ठोक डाले 70 रन, पाकिस्तान ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS-NwF-9TYPKGVSM_zr-Ol_UunkE2BgM8WEWbJazNf6cWYdy8QwpRrMuln1sZVxf2SaamH5bhjl" alt="ENG vs PAK: सिर्फ 16 गेंदों में फिल सॉल्ट ने ठोक डाले 70 रन, पाकिस्तान ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ENG vs PAK: सिर्फ 16 गेंदों में फिल सॉल्ट ने ठोक डाले 70 रन, पाकिस्तान को रौंद सीरीज में की वापसी&nbsp;...</p></div>
            </div>
        </a><a href='https://www.indiatv.in/sports/cricket/pak-vs-eng-6th-t20i-live-streaming-lahore-gaddafi-stadium-pakistan-leads-by-3-2-do-or-die-for-england-2022-09-30-888653'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>PAK vs ENG, 6th T20I LIVE STREAMING: पाकिस्तान के पास सीरीज ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRVhXT8skooI62yfKZRubzQcyignIdkRW5VRLFcEmYgmkeeRMjUnTKAVODImlCihyM3XAqSNonE" alt="PAK vs ENG, 6th T20I LIVE STREAMING: पाकिस्तान के पास सीरीज ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>PAK vs ENG, 6th T20I LIVE STREAMING: पाकिस्तान की टीम पांच मैचों के बाद सीरीज में 3-2 से आगे है।</p></div>
            </div>
        </a>
        </Template></>;
}