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
            <Image width={800} height={500} src="https://www.mumbaicityfc.com/static-assets/waf-images/86/7b/a1/16-9/hsSTHFKcXV.JPG" alt="Mumbai City FC"/>
            <h3>Recent News</h3>
            <a href='https://www.mumbaicityfc.com/news/match-report-mumbai-city-fc-4-1-fc-goa'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Match Report: Mumbai City FC 4-1 FC Goa</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTYf4CQ9AAoyvAHWyca5U0WR2Hvb3WRuE_vwpPU4UHIVV97F9lupIMe9GnbbdoS-t6Aj7wcs3N2" alt="Match Report: Mumbai City FC 4-1 FC Goa" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The influential Greg Stewart started alongside Apuia and Jahouh in midfield. Jorge Pereyra Diaz was leading the line for the Islanders. He was flanked by&nbsp;...</p></div>
            </div>
        </a><a href='https://www.indiansuperleague.com/news/mumbai-city-fc-punish-fc-goa-with-another-goalfest-to-continue-dream-run'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mumbai City FC punish FC Goa with another goalfest to continue ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRPPx0R-EPHd1LFcMItgpnHsvpzHKQLPOjOrmYxl0enR57UKPlI67EUcyMmhKULzkoUv7Ld5LlZ" alt="Mumbai City FC punish FC Goa with another goalfest to continue ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mumbai City FC unleashed a barrage of goals on the opposition yet again as they beat FC Goa 4-1 in the Hero Indian Super League (ISL) at the Mumbai Football&nbsp;...</p></div>
            </div>
        </a><a href='https://www.indiansuperleague.com/news/we-were-extremely-emotional---mumbai-city-fc-fans-on-returning-to-stadiums-this-season'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>We were extremely emotional - Mumbai City FC fans on returning to ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQGr0jBKFISxYWcaTwz4GPpxDOrNvcDsTVExkmfnbh5cubTM4iR_kNhKkmnLVsJf51STg76lTv5" alt="We were extremely emotional - Mumbai City FC fans on returning to ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mumbai City FC fans have missed being at the stadium cheering their team over the past two years, which witnessed an unprecedented high in one and a&nbsp;...</p></div>
            </div>
        </a><a href='https://sportstar.thehindu.com/football/isl/2021-2022/isl-2021-2022-news/mumbai-city-fc-vs-fc-goa-isl-2022-indian-super-league-pereyra-diaz-scores-double/article66211554.ece'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ISL 2022-23: Pereyra Diaz double gives Mumbai City 4-1 win over ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSS2DsNc7E4YfZGUce2K102W8-D9_jOMwzH_WwKi2U6kdbhJ6Y6RqI8sluEBE7w4B6OmJtO0tSN" alt="ISL 2022-23: Pereyra Diaz double gives Mumbai City 4-1 win over ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mumbai dominated the game with Jorge Pereyra Diaz scoring a brace, while Lallianzuala Chhangte and Alberto Noguera scored one apiece.</p></div>
            </div>
        </a><a href='https://www.sportskeeda.com/indian-football/mumbai-city-fc-vs-fc-goa-prediction-preview-team-news-isl-2022-23-match'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mumbai City FC vs FC Goa: Prediction, preview, team news, and ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTpRoWPm6XTsaOTWJWmJD7awcdMH7bh1uFtehEpZAROu9-HNIIZaflKay-ZdzhxxEzp__Z6T6am" alt="Mumbai City FC vs FC Goa: Prediction, preview, team news, and ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Islanders will now take on FC Goa in matchweek nine of the Indian Super League (ISL) 2022-23 season at the Mumbai Football Arena on Thursday, December 1.</p></div>
            </div>
        </a><a href='https://khelnow.com/football/2022-12-indian-football-isl-2022-23-mumbai-city-vs-fc-goa-player-ratings'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ratings: Jorge Pereyra Diaz brace helps Mumbai City outclass FC ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSsmCfEAwLcV-VKdbxnhZptt0zt-i9BcuNggNbhA6ybRuhDp7YT83_aEzZI7xvYWvVwmjloL8IH" alt="Ratings: Jorge Pereyra Diaz brace helps Mumbai City outclass FC ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A Jorge Pereyra Diaz brace helped Mumbai City to earn a scintillating win over FC Goa in the Indian Super League (ISL 2022-23).</p></div>
            </div>
        </a>
        </Template></>;
}