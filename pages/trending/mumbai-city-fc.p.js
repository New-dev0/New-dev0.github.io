import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Mumbai City FC</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Mumbai City FC"/>
        <meta name="description" content="Trending News about Mumbai City FC" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Mumbai City FC</h1>
            <Image width={800} height={500} src="https://www.mumbaicityfc.com/static-assets/waf-images/42/2c/ec/16-9/sXbX734LW4.JPG" alt="Mumbai City FC"/>
            <h3>Recent News</h3>
            <a href='https://www.mumbaicityfc.com/news/match-report-chennaiyin-fc-2-6-mumbai-city-fc'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Match Report: Chennaiyin FC 2-6 Mumbai City FC</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ50yHmquOeR2R62IrTvN0mRGUH2OXEChDeiFMcJ9tjb3FL7f1N1fH6R-MweEupmlZD0JN7WWW3" alt="Match Report: Chennaiyin FC 2-6 Mumbai City FC" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Islanders beat the Marina Machans 6-2 in a game that showcased the fighting spirit of Mumbai City FC.</p></div>
            </div>
        </a><a href='https://www.onmanorama.com/sports/football/2022/11/12/indian-super-league-mumbai-vs-chennai.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ISL: Ruthless Mumbai City FC rout Chennaiyin FC 6-2</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSp0vjD_PagCkrU1o3sFGLoA0ceLZ9DM-2tOSYVtHBeGIzJYJuNwTehjN4Uwt5iUz1HkKeTOuvf" alt="ISL: Ruthless Mumbai City FC rout Chennaiyin FC 6-2" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The win lifted Mumbai City into second place in the league, four points behind leaders Hyderabad FC..ISL. Indian Super league. Indian Football. Football.</p></div>
            </div>
        </a><a href='https://www.mathrubhumi.com/special-pages/isl-2022-23/chennaiyin-fc-vs-mumbai-city-fc-cfc-2-6-mcfc-1.8041202'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ചെന്നൈയിൻ എഫ്‌സിയെ ഗോൾമഴയിൽ മുക്കി ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTdAV_jW3RoMGa6PVASoMtWsHRvCOw_sa9g94idOjU0bfqcgLPH2T83hkoH86YEwOWrqwUdrTxI" alt="ചെന്നൈയിൻ എഫ്‌സിയെ ഗോൾമഴയിൽ മുക്കി ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ചെന്നൈയിന്‍ എഫ്‌സിയെ ഗോള്‍മഴയില്‍ മുക്കി മുംബൈ സിറ്റി &middot; Content Highlights: Chennaiyin FC vs Mumbai City FC : CFC 2-6&nbsp;...</p></div>
            </div>
        </a><a href='https://www.news18.com/news/football/live-score-chennaiyin-fc-vs-mumbai-city-fc-isl-2022-23-latest-updates-indian-super-league-live-streaming-football-match-coverage-from-jawaharlal-nehru-stadium-chennai-livenews-6370381.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ISL 2022-2023, Chennaiyin FC vs Mumbai City FC Highlights: CFC ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSSzVBmG-EOeQhp0gZEXq7-4EEOoiWsL11BLG4XvAixJBAYjleCwOFIXr-G2Es4AE6IPx8cH0AB" alt="ISL 2022-2023, Chennaiyin FC vs Mumbai City FC Highlights: CFC ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>When Vinit Rai scored the third goal, CFC more or less gave up as they lost all hope to make a comeback. This game also shows how good a bench MCFC have as&nbsp;...</p></div>
            </div>
        </a><a href='https://sportstar.thehindu.com/football/isl/chennaiyin-fc-vs-mumbai-city-fc-live-score-updates-isl-cfc-vs-mcfc-news-lineups-highlights-football/article66128305.ece'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Chennaiyin FC 2-6 Mumbai City Highlights, ISL 2022-23: Stewart ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQf0cT1z80vmFDgDKJC0rlsTRkAqPFfcd5lUvknVjT22mcFBQH8HfKyG3J0j6_uhaREMXd0ZoJf" alt="Chennaiyin FC 2-6 Mumbai City Highlights, ISL 2022-23: Stewart ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Follow live updates of the Chennaiyin FC vs Mumbai City FC ISL match from the Jawaharlal Nehru Indoor Stadium in Chennai.</p></div>
            </div>
        </a><a href='https://khelnow.com/football/2022-11-indian-football-isl-2022-23-chennaiyin-fc-vs-mumbai-city-player-ratings'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ratings: Goal fest from Mumbai City, Chennaiyin FC defence in pieces</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRHeUp-oWfw6lX3FZLc8oUiVwCq24Z_B_Vzibo8qVVHwT6cANyJAVd_GzfRuUz2kIxUjVDYxDKT" alt="Ratings: Goal fest from Mumbai City, Chennaiyin FC defence in pieces" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>It was goals galore at Chennai as Mumbai City came from behind to defeat Chennaiyin FC in the Indian Super League.</p></div>
            </div>
        </a><a href='https://www.insidesport.in/cfc-vs-mcfc-live-streaming-mumbai-city-fc-aim-to-continue-unbeaten-streak-in-isl-2022-against-chennaiyin-fc-follow-live/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>CFC vs MCFC HIGHLIGHTS: CFC 2-6 MCFC, Mumbai City FC come ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQtdBTihAEOya0Ayo-ElUvgI_RCKxIA4Uos4gqnL_USx4SixbLUQQ8gFSmJ0KhtCodXmQiXuXFw" alt="CFC vs MCFC HIGHLIGHTS: CFC 2-6 MCFC, Mumbai City FC come ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>CFC vs MCFC HIGHLIGHTS: CFC 2-6 MCFC, Mumbai City FC come from behind to score SIX past Chennaiyin FC, maintain UNBEATEN streak - CHECK HIGHLIGHTS.</p></div>
            </div>
        </a><a href='https://www.asianetnews.com/football-sports/isl-2022-23-cfc-vs-mcfc-match-result-mumbai-city-fc-beat-chennaiyin-fc-on-epic-comeback-rl8sgu'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>രാജകീയ തിരിച്ചുവരവ്, രണ്ട് ഗോളിന് ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTb55ZTUTEkRaQ3NzTGglgxr2xp3EE6Z7J5nzbzFmS7A1v3z0PoAnJI4CdJUUd1eJ1rU9Hufvie" alt="രാജകീയ തിരിച്ചുവരവ്, രണ്ട് ഗോളിന് ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Indian Super League 2022-23 Chennaiyin FC vs Mumbai City FC Match Result Chennaiyin fc beat Mumbai City FC. ഐഎസ്എല്ലില്‍ ചെന്നൈയിന്‍&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}