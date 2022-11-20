import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>FIFA World Cup games</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,FIFA World Cup games"/>
        <meta name="description" content="Trending News about FIFA World Cup games" /></Head><Template>
            <h1 style={{fontSize: "30"}}>FIFA World Cup games</h1>
            <Image width={800} height={500} src="https://img.olympicchannel.com/images/image/private/t_social_share_thumb/f_auto/primary/bxh0x3wf7zufeapsmati" alt="FIFA World Cup games"/>
            <h3>Recent News</h3>
            <a href='https://olympics.com/en/news/fifa-world-cup-2022-fixtures-schedule-india-match-start-time'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>FIFA World Cup 2022 schedule and India match times</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTi5ioszlF2erf_mmHbe6Y3pOPp4H9ECFaMNpImNVIaLxKXoLTt-aZF-nbm_TCJ7DRr0A34a5ku" alt="FIFA World Cup 2022 schedule and India match times" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The FIFA World Cup 2022 in Qatar will start on November 20. A total of 64 matches will be played. Know the schedule, fixtures and live India match start&nbsp;...</p></div>
            </div>
        </a><a href='https://www.visualcapitalist.com/cp/2022-fifa-world-cup-qualifiers/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mapped: The 32 Teams Playing in the 2022 FIFA World Cup</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTmWogkxB0Hv-qgEveXwy-QQDhqhdymZ9oBoIDJaQCGZpUiJTFUivGyAMZLmokvLH_WirSOExPV" alt="Mapped: The 32 Teams Playing in the 2022 FIFA World Cup" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>This graphic by Athul Alexander shows the teams that will be playing against one another this year, and their latest pre-tournament FIFA rankings. The Ranks of&nbsp;...</p></div>
            </div>
        </a><a href='https://indianexpress.com/article/technology/techook/fifa-world-cup-2022-top-apps-to-track-matches-players-and-more-8277427/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>FIFA World Cup 2022: Top apps to track matches, players and more</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRtMJ0acJqLJTseX6GirvELwOpF4PJOg3WVfHEiA3S_j7UG3z2YxzpeBF5X7xz-M6GAIKZAkuD3" alt="FIFA World Cup 2022: Top apps to track matches, players and more" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>World Cup 2022: Check out these five apps that will help you track the entire tournament easily.</p></div>
            </div>
        </a><a href='https://www.businesstoday.in/trending/story/fifa-world-cup-2022-when-and-where-to-watch-first-match-all-about-opening-ceremony-353448-2022-11-19'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>FIFA World Cup 2022: When and where to watch first match, all ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTs6OunW61ToplzD6Kz9GI6_x1htxSqcX9MN0l5EpYXTNFcu8ROm75ASskD8PI2Us9WUDjW0OSi" alt="FIFA World Cup 2022: When and where to watch first match, all ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>In India, the opening ceremony will begin at 7:30 pm IST followed by the first match between hosts Qatar and Ecuador.</p></div>
            </div>
        </a><a href='https://www.cbssports.com/soccer/news/fifa-world-cup-2022-opening-ceremony-how-to-watch-live-stream-jungkook-of-bts-perform-in-qatar-start-time/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>FIFA World Cup 2022 Opening Ceremony: How to watch, live stream ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRWT31LDXUa6Vz0X5DpglFaK49NSB0A5xOlwJLjnME3kPYA1-RJqJfUkbROW74Oy6ZBHL_iMhDw" alt="FIFA World Cup 2022 Opening Ceremony: How to watch, live stream ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Before the matches start, the opening ceremony kicks of at 9:30 a.m. on Sunday.</p></div>
            </div>
        </a><a href='https://www.theatlantic.com/international/archive/2022/11/qatar-hosting-fifa-world-cup-soccer/672171/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The Qatar World Cup Exposes Soccer&#39;s Shame</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcROAWm8pWuhmoytFPo7ZKcQY-KTdu0i08Z7eXUfpHpaqn5NH0sIWdfhDI-fj2ezcqiuFYd5IBMP" alt="The Qatar World Cup Exposes Soccer&#39;s Shame" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The absurd spectacle of a tiny Gulf petrostate hosting the world&#39;s premier tournament reveals the ugly side of “the beautiful game.”</p></div>
            </div>
        </a><a href='https://www.mirror.co.uk/sport/football/news/when-is-worldcup-opening-ceremony-28524096'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>When is the 2022 World Cup opening ceremony? Start time, how to ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR-Rq5S5xWDI0WMdY8eFZPZp8gkJiHe36IQ9rQhbX08DTn28vxiJUGMCawrB1URbrzIwHedo-8L" alt="When is the 2022 World Cup opening ceremony? Start time, how to ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The wait is finally over as hosts Qatar take on Ecuador in the opening game of the World Cup on Sunday, but the all-important opening ceremony must take&nbsp;...</p></div>
            </div>
        </a><a href='https://english.news.cn/20221120/0c93f0b02ce748339e40cb2b358e51e8/c.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Preview: Four things to look out for in FIFA World Cup opener</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Preview: Four things to look out for in FIFA World Cup opener" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>DOHA, Nov. 19 (Xinhua) -- The long wait for the first FIFA World Cup in the Middle East is over as hosts Qatar and Ecuador prepare to raise the curtain on&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}