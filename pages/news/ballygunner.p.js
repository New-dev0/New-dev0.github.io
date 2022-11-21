import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Ballygunner</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Ballygunner"/>
        <meta name="description" content="Trending News about Ballygunner" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Ballygunner</h1>
            <Image width={800} height={500} src="https://img.resized.co/breaking-news/eyJkYXRhIjoie1widXJsXCI6XCJodHRwczpcXFwvXFxcL2ltYWdlcy5icmVha2luZ25ld3MuaWVcXFwvcHJvZFxcXC91cGxvYWRzXFxcLzIwMjJcXFwvMTFcXFwvMjAyMTMzMTVcXFwvaW5waG9fMDIxMzUwOTAtZTE2Njg5ODAwMjE1MTMuanBnXCIsXCJ3aWR0aFwiOjEyMDAsXCJoZWlnaHRcIjo2MjcsXCJkZWZhdWx0XCI6XCJodHRwczpcXFwvXFxcL3d3dy5icmVha2luZ25ld3MuaWVcXFwvaW1hZ2VzXFxcL25vLWltYWdlLnBuZ1wiLFwib3B0aW9uc1wiOltdfSIsImhhc2giOiIyZGM5Yzk4MThjYTlmOTc2NjY4OWFmNThhNDI1YWRhZTUzYzc2MjdiIn0=/gaa-wrap-ballygunner-s-mahony-scores-13-points-in-semi-final-win.jpg" alt="Ballygunner"/>
            <h3>Recent News</h3>
            <a href='https://www.breakingnews.ie/sport/mahony-shines-as-ballygunner-stamp-second-half-class-1394916.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>GAA wrap: Ballygunner&#39;s Mahony scores 13 points in semi-final win</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRMCQGk2IhJx9vmNrZzVZqc_slHMqvWOfl1WHthrI0EGpQubg5bb9X6C4u41bBQInaUsNAAS3mE" alt="GAA wrap: Ballygunner&#39;s Mahony scores 13 points in semi-final win" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Na Piarsaigh were a shadow of themselves on the turnaround, scoring just four second-half points.</p></div>
            </div>
        </a><a href='https://www.rte.ie/sport/hurling/2022/1120/1337209-strong-finish-sends-ballygunner-back-into-munster-final/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Strong finish sends Ballygunner back into Munster final</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcToDCC9iZ6lEYL_SBo0gZ-RQyAVcYADz5mvJh71r7LvhQQPe69q-kgPoef_YHAc9Sh-BElryx9F" alt="Strong finish sends Ballygunner back into Munster final" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ballygunner are into the Munster Club SHC Final after a stunning second half display saw them to a 2-20 to 2-15 win over Na Piarsaigh at the TUS Gaelic&nbsp;...</p></div>
            </div>
        </a><a href='https://www.limerickleader.ie/news/limerick-sport/969471/na-piarsaigh-fall-to-power-of-champions-ballygunner-in-munster-club-hurling-semi-final.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Na Piarsaigh fall to power of champions Ballygunner in Munster club ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSbjuHmEmOjabAnCOCONf3tBRYunO9__HXL5qNwpClG3UKVTXMpXDb3P8_cWp5RcLJBQffsIQ6n" alt="Na Piarsaigh fall to power of champions Ballygunner in Munster club ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>DEFEAT for Na Piarsaigh in the Munster club SHC semi final this Sunday. In the TUS Gaelic Grounds reigning All-Ireland champions Ballygunner were 2-20 to 2.</p></div>
            </div>
        </a><a href='https://www.breakingnews.ie/sport/sunday-sport-world-cup-kicks-off-munster-club-hurling-championship-heats-up-1394774.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sunday sport: Ecuador cruises past hosts Qatar, Ballygunner into ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRi7X9RfcEgVPQJgepuwQ9ubYz0y7PpUKSlcVXbN_3U0YNyY8w1lGzIa_9LWlcQn63EC_NjOOXy" alt="Sunday sport: Ecuador cruises past hosts Qatar, Ballygunner into ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Waterford&#39;s Ballygunner beat Na Piarsaigh of Limerick 2-20 to 2-15 at the TUS Gaelic Grounds in their Munster Senior Hurling Club Championship semi-final.</p></div>
            </div>
        </a><a href='https://www.independent.ie/sport/gaelic-games/hurling/pauric-mahony-delivers-display-for-the-ages-as-ballygunners-second-half-surge-stuns-na-piarsaigh-in-classic-clash-42159092.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pauric Mahony delivers display for the ages as Ballygunner&#39;s ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQeTKaYvJMKQPJ54HD4JiiN4UUQvlBdjap62UiYPS5DRfDG9A2nkgSL5l4BOFmwcSdU9sYoZTrx" alt="Pauric Mahony delivers display for the ages as Ballygunner&#39;s ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>All-Ireland champions Ballygunner came good when it mattered most with a stunning second-half seeing them past Limerick champions Na Piarsaigh in a cracking&nbsp;...</p></div>
            </div>
        </a><a href='https://www.clare.fm/featured-2/ballyea-renew-rivalry-ballygunner-munster-final-showdown/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ballyea To Renew Rivalry With Ballygunner In Munster Final ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTHEUXqyTdSANHeCILwNNIHJizxnLBPHsdR6lm9DTs4hl1ppsvFXPIp2fYi8jlEsPPy1mK3V92A" alt="Ballyea To Renew Rivalry With Ballygunner In Munster Final ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ballyea will face the familiar foe of reigning Munster and All-Ireland Club Hurling Champions Ballygunner in the Senior Munster Club Hurling Final of 2022.</p></div>
            </div>
        </a><a href='https://www.radiokerry.ie/sport/ballygunner-and-ballyea-into-munster-final-306487'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ballygunner and Ballyea into Munster final</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Ballygunner and Ballyea into Munster final" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Waterford&#39;s Ballygunner have beaten Na Piarsaigh of Limerick 2-20 to 2-15 at the TUS Gaelic Grounds in their Munster Senior Hurling Club Championship&nbsp;...</p></div>
            </div>
        </a><a href='https://www.the42.ie/ballygunner-beat-na-piarsaigh-2022-munster-semi-report-5925159-Nov2022/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Majestic Mahony fires 0-13 as Ballygunner beat Na Piarsaigh in ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSQIDz90_oHwvgJg9_t3prvzmG6DAF6l2ssIDOBO7m8FoNK86rPdv74SjokXLLexgUIWA3tVF43" alt="Majestic Mahony fires 0-13 as Ballygunner beat Na Piarsaigh in ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Philip Mahony leads the Ballygunner celebrations. Image: Ben Brady/INPHO. Na Piarsaigh 2-15. Ballygunner 2-20. ALL-IRELAND CHAMPIONS Ballygunner booked their&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}