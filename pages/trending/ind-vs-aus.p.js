import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>IND vs AUS</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,IND vs AUS"/>
        <meta name="description" content="Trending News about IND vs AUS" /></Head><Template>
            <h1 style={{fontSize: "30"}}>IND vs AUS</h1>
            <Image width={800} height={500} src="https://spiderimg.amarujala.com/assets/images/2022/10/17/750x506/india-vs-australia-practice-match-mohammad-shami-performance_1665998031.jpeg" alt="IND vs AUS"/>
            <h3>Recent News</h3>
            <a href='https://www.amarujala.com/cricket/cricket-news/ind-vs-aus-warm-up-match-t20-world-cup-mohammed-shami-takes-3-wickets-in-a-over-turning-point-of-practice-matc'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Shami IND vs AUS: 19वें ओवर तक डग आउट में बैठे थे शमी, छह गेंदों में ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQJYI7W4sDDfM7CCQDuTDZj59sf9jlsioXft48C8ndXddJyw2XiMUdPoI8tB_okGL-8e0zKcdZM" alt="Shami IND vs AUS: 19वें ओवर तक डग आउट में बैठे थे शमी, छह गेंदों में ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>जवाब में ऑस्ट्रेलिया ने 19 ओवर तक छह विकेट गंवाकर 176 रन बना लिए थे। 19 ओवर तक कप्तान रोहित&nbsp;...</p></div>
            </div>
        </a><a href='https://www.jagran.com/cricket/match-report-ind-vs-aus-warm-up-match-live-updates-india-will-fight-defending-champion-australia-at-the-gabba-brisbane-23145720.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ind vs Aus Warm Up: आखिरी ओवर के रोमांच में जीता भारत, शमी बने जीत ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR45zhcFhYFhXdgOGUfWBOCYbffIoQ47FyPUUY6pbWf1s-77lww6CMuYGzJ1mu4QlkI_E-_BxXE" alt="Ind vs Aus Warm Up: आखिरी ओवर के रोमांच में जीता भारत, शमी बने जीत ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>India vs Australia Warm Up Match टी20 वर्ल्ड कप से पहले टीम इंडिया ने रोमांचक मैच में ऑस्ट्रेलिया को 6&nbsp;...</p></div>
            </div>
        </a><a href='https://indianexpress.com/article/sports/t20-world-cup/india-vs-australia-warm-up-match-live-updates-8212852/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>India vs Australia Warm-Up Match Highlights: India beat Australia by ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSZtHrJ7DEqLQK6v9Y8YGeRZfwb48o7bHzBYBCt_H88K47cuG8iyi3h0soRWB_2G5qWH-PtFLrP" alt="India vs Australia Warm-Up Match Highlights: India beat Australia by ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>IND vs AUS warm up game highlights: India take on Australia in Gabba in a T20 World Cup warm-up match.</p></div>
            </div>
        </a><a href='https://hindi.news18.com/news/sports/cricket-india-vs-australia-warm-up-match-t20-world-cup-live-score-and-updates-4755859.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>IND vs AUS T20 Highlights: भारत ने ऑस्ट्रेलिया को हराया, मोहम्मद ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRsMkDSfmnqI1SMgFPXwII7jZn6Z-z1VB5Cek3YCbC1QIo5er3qfC4XDlHXQF0C1v3YVC2VzKbp" alt="IND vs AUS T20 Highlights: भारत ने ऑस्ट्रेलिया को हराया, मोहम्मद ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>India vs Australia Live Cricket Score &amp; Updates: भारतीय टीम ने टी20 वर्ल्ड कप के ऑफिशियल वॉर्मअप मैच में&nbsp;...</p></div>
            </div>
        </a><a href='https://www.hindustantimes.com/cricket/india-vs-australia-live-score-t20-world-cup-2022-warm-up-match-ind-vs-aus-today-latest-scorecard-at-brisbane-101665973510981.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>IND vs AUS highlights: Shami inspires late fightback as India win ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQpiRykFFa5XGI51NtoEkd3GVDRQCh2xnTFJEvQtyxVr6Ay1fJWl5W2kvUiNp5fGZL6MbvMyniW" alt="IND vs AUS highlights: Shami inspires late fightback as India win ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>India vs Australia, warm-up match highlights T20 World Cup 2022: Australia get off to strong start in response to India&#39;s 186/7.</p></div>
            </div>
        </a><a href='https://www.abplive.com/sports/cricket/ind-vs-aus-warm-up-match-hightlights-india-beat-australia-by-6-runs-in-practice-match-2239777'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>IND Vs AUS Warm-Up Match Hightlights: शमी ने एक ओवर में तीन विकेट ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQBpApUOd8I3YVaCEFeK6lmpUHb0gY86AophbwuuBvryXHmbg1Crcec-GCwdcSkRbDWj0SlK2Rq" alt="IND Vs AUS Warm-Up Match Hightlights: शमी ने एक ओवर में तीन विकेट ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>T20 World Cup 2022: भारत ने ऑस्ट्रेलिया को वार्म-अप मैच में 6 रन से मात दी. मोहम्मद शमी ने एक ही&nbsp;...</p></div>
            </div>
        </a><a href='https://www.dnaindia.com/cricket/report-ind-vs-aus-top-10-best-memes-as-virat-kohli-mohammed-shami-lead-india-to-crucial-win-2993560'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>IND vs AUS: Top 10 best memes as Virat Kohli, Mohammed Shami ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTEkCG05ooQSoQez3bJDXvnt1MNdraPtCHbcq6KK5d5uNFwBqjojz7dVqx4E58MkA1UCpPsV_NR" alt="IND vs AUS: Top 10 best memes as Virat Kohli, Mohammed Shami ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Team India defeated Australia by six runs in their first warmup match against the hosts of T20 World Cup 2022. Here&#39;s how fans reacted to India&#39;s win.</p></div>
            </div>
        </a><a href='https://www.livehindustan.com/cricket/story-ind-vs-aus-india-vs-australia-warm-up-match-today-17th-october-rohit-sharma-will-go-to-find-answers-to-these-3-questions-7230367.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>IND vs AUS: भारत का ऑस्ट्रेलिया के खिलाफ वॉर्म अप मैच आज, इन 3 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQPc1ZhqNMIe1JHVbAeTzcKKGfzTYwkB9WGxch4gQN8nOkTkCwAWEPOKVvE8BsC4ZcTigkwFK0L" alt="IND vs AUS: भारत का ऑस्ट्रेलिया के खिलाफ वॉर्म अप मैच आज, इन 3 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>टी20 वर्ल्ड कप 2022 में अपने अभियान का आगाज करने से पहले भारतीय टीम को दो वॉर्म-अप मैच&nbsp;...</p></div>
            </div>
        </a><a href='https://timesofindia.indiatimes.com/sports/cricket/icc-mens-t20-world-cup/india-vs-australia-icc-t20-world-cup-2022-warm-up-match-live-cricket-score-updates-oct-17/liveblog/94904935.cms'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>India vs Australia, T20 World Cup 2022 Warm-up: Stunning India ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS8cxeN5UEFqOQX0l7R0wHEVhdhtzbFVQSEKAODoVV5Js0fFuABckjmtup_LjZXp2x70h8Zm6N0" alt="India vs Australia, T20 World Cup 2022 Warm-up: Stunning India ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>India, led by fifties from KL Rahul and Suryakumar Yadav, scored 186/7 after being put in to bat by Australia. Get live cricket score updates of T20 World&nbsp;...</p></div>
            </div>
        </a><a href='https://www.indiatv.in/sports/cricket/ind-vs-aus-warm-up-match-live-scorecard-commentary-online-score-latest-updates-of-india-and-australia-2022-10-17-893897'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>IND vs AUS, Warm-up Match HIGHLIGHTS: भारत ने रोमांचक मुकाबले ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQNpeQUidB__qUa1N4010r9goU059BrtyAMQD4hzzTkGUbXklmhxpjfOLC6pXi4tFlIOmAPfYtY" alt="IND vs AUS, Warm-up Match HIGHLIGHTS: भारत ने रोमांचक मुकाबले ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>IND vs AUS, Warm-up Match HIGHLIGHTS: भारत ने टी20 वर्ल्ड कप के अपने पहले आधिकारिक अभ्यास मैच में&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}