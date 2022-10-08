import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>T20 World Cup</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,T20 World Cup"/>
        <meta name="description" content="Trending News about T20 World Cup" /></Head><Template>
            <h1 style={{fontSize: "30"}}>T20 World Cup</h1>
            <Image width={800} height={500} src="https://resources.pulse.icc-cricket.com/ICC/photo/2022/10/07/d1d2abdf-c0b6-468f-b8b1-4f4ef0e655d6/Netherlands.png" alt="T20 World Cup"/>
            <h3>Recent News</h3>
            <a href='https://www.icc-cricket.com/news/2841341'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Determined Dutch plot revenge - Netherlands T20 World Cup Preview</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSQmeij9i1hUfxSY5Zu-zNPdXSzRj4Or2IBFWuzqMknAqIHUbCG3XIIIRhbq2pnXYYRftwhGhJ1" alt="Determined Dutch plot revenge - Netherlands T20 World Cup Preview" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>After a forgettable 2021 campaign, the Dutch look more prepared for the 2022 event in Australia.</p></div>
            </div>
        </a><a href='https://www.indiatv.in/sports/cricket/t20-world-cup-2022-team-india-ready-to-become-champion-special-video-came-in-front-2022-10-07-890827'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>T20 World Cup 2022 : चैंपियन बनने के लिए तैयार टीम इंडिया, खास VIDEO ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT3slmSolCY3agO0e2TsLySehqWDYbbsjjmN2TJjanKHuQyn73Z7614__shLdiINNQmRd5S2ouw" alt="T20 World Cup 2022 : चैंपियन बनने के लिए तैयार टीम इंडिया, खास VIDEO ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>टी20 विश्व कप 2022 को शुरू होने में अब बचे हैं केवल नौ दिन &middot; टीम इंडिया ऑस्ट्रेलिया पहुंची,&nbsp;...</p></div>
            </div>
        </a><a href='https://hindi.insidesport.in/featured/t20-world-cup-team-india-reaches-australia-indian-team-stays-at-crown-towers-hotel-in-perth-check-out-504314/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>T20 World Cup: ऑस्ट्रेलिया पहुंची टीम इंडिया, पर्थ के क्राउन टावर्स ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRmLkGVozhZj2xcE4bbgPVlgGyu2kPN6tolcOya8rS4g-qJV4Iekky_9sYA4bzABYnZ-RLvUA30" alt="T20 World Cup: ऑस्ट्रेलिया पहुंची टीम इंडिया, पर्थ के क्राउन टावर्स ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>T20 World Cup: भारतीय टीम (Team India) को ऑस्ट्रेलिया में टी20 विश्व कप (T20 World Cup 2022) खेलना है।</p></div>
            </div>
        </a><a href='https://hindi.news18.com/news/sports/cricket-team-india-arrived-australia-first-practice-match-against-western-australia-on-monday-4706209.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>T20 World Cup: ऑस्ट्रेलिया पहुंची टीम इंडिया, सोमवार को वेस्टर्न ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT4diKQ3Bg95e90c3ljVtvdYEEDdU59JRdzEQXpunJqwVa9eqgZse0N5F09IFNSAKVEjoxkLMyx" alt="T20 World Cup: ऑस्ट्रेलिया पहुंची टीम इंडिया, सोमवार को वेस्टर्न ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>टीम इंडिया विश्व कप के लिए ऑस्ट्रेलिया पहुंच चुकी है. इस बार सिर्फ 14 खिलाड़ियों ने ही&nbsp;...</p></div>
            </div>
        </a><a href='https://www.aajtak.in/sports/cricket/story/analysis-of-rohit-sharma-led-team-india-in-australia-for-t20-world-cup-2022-schedule-tspo-1550728-2022-10-06'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Team India T20 World Cup 2022: खिलाड़ी कम, सपोर्ट स्टाफ ज्यादा ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS4nl9_uBBsimi5MN_YVUkfsUB1hw6EbrH5HJMvXgYABcI7u0A-OqA88XnWeRsKqxF7FndmvrIy" alt="Team India T20 World Cup 2022: खिलाड़ी कम, सपोर्ट स्टाफ ज्यादा ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>इस बार टी20 वर्ल्ड कप के लिए बीसीसीआई ने 15 सदस्यीय भारतीय टीम घोषित की है.</p></div>
            </div>
        </a><a href='https://zeenews.india.com/hindi/sports/cricket/team-india-t20-world-cup-2022-shardul-thakur-match-winner-indian-cricket-team-all-rounder/1383396'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>T20 World Cup: इस खिलाड़ी के बिना टीम इंडिया का टी20 वर्ल्ड कप जीतना ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQpcK2100lRqMQfU2651oy6Rv_uRWTLEH8U1XB1e6f-0FNzoT7jwq8jRe-7qYSK6wzVtQXZoJaa" alt="T20 World Cup: इस खिलाड़ी के बिना टीम इंडिया का टी20 वर्ल्ड कप जीतना ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Team India: भारतीय टीम को टी20 वर्ल्ड कप में अपना पहला मैच पाकिस्तान के खिलाफ 23 अक्टूबर को&nbsp;...</p></div>
            </div>
        </a><a href='https://www.abplive.com/sports/cricket/rohit-sharma-visit-sidhivinayak-temple-before-going-to-australia-for-t20-world-cup-2022-2232239'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>T20 World Cup: ऑस्ट्रेलिया रवाना होने से पहले सिद्धि विनायक के दरबार ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRMrWyonCshn8HFOJAdj42TKst6pnWaHKqw1K8BmT4If5PK4nZ_NowopahJH8vjNOKYHX8cyO3M" alt="T20 World Cup: ऑस्ट्रेलिया रवाना होने से पहले सिद्धि विनायक के दरबार ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Rohit Sharma: टी20 वर्ल्ड कप 2022 के लिए ऑस्ट्रेलिया रवाना होने से पहले भारतीय टीम के कप्तान&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}