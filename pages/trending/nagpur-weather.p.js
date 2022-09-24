import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Nagpur weather</title></Head><Template>
            <h1 style={{fontSize: "30"}}>Nagpur weather</h1>
            <Image width={800} height={500} src="https://s.w-x.co/in-india%20vs%20australia%20cricket.jpg" alt="Nagpur weather"/>
            <h3>Recent News</h3>
            <a href='https://weather.com/en-IN/india/news/news/2022-09-23-india-vs-australia-t20-cricket-nagpur-in-for-rain-thunderstorms'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>India vs Australia T20 Cricket: Weather Could Play Spoilsport As ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRNgly7ZRqeQ-L91LfA8RfsRTvkv5eBvpA1RuMgv1UE8bkVv9lP248uzL0f49l54uYg-0IqWHwp" alt="India vs Australia T20 Cricket: Weather Could Play Spoilsport As ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nagpur is likely to experience generally cloudy skies with a few spells of rains and thundershowers for the next 24 hours. - Articles from The Weather&nbsp;...</p></div>
            </div>
        </a><a href='https://thelivenagpur.com/2022/09/23/cricket-fans-have-all-eyes-on-weather-for-t20i-match-at-nagpur/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Cricket fans have all eyes on weather for T20I match at Nagpur - The ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRLC4IPNB51ASpLYrX03EpTO4CwzYjb7WcmcQgoZ-ZeqlpD--GuWfN6IgsejNgysHp6op0vojEJ" alt="Cricket fans have all eyes on weather for T20I match at Nagpur - The ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The second T20I match between India and Australia is scheduled to be played at Vidarbha Cricket Association Ground on Friday night. India is looking forward to&nbsp;...</p></div>
            </div>
        </a><a href='https://zeenews.india.com/cricket/ind-vs-aus-2nd-t20i-weather-report-rain-likely-to-play-spoilsport-in-nagpur-today-check-update-here-2513420.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>IND vs AUS 2nd T20I weather report: Rain likely to play spoilsport in ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQHBPcudATEMJDcNqDI-hNwhYP0WXAmirBNN_aNF5618mDoOub0729eigOSJAf1kF2AXMazqVY_" alt="IND vs AUS 2nd T20I weather report: Rain likely to play spoilsport in ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>IND vs AUS 2nd T20I weather report: Team India match vs Australia may get affected by rain today in Nagpur, check weather news here.</p></div>
            </div>
        </a><a href='https://thesportsrush.com/cricket-news-nagpur-weather-right-now-is-it-raining-in-nagpur-now/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Nagpur weather right now: Is it raining in Nagpur now?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTCObFhmu-Ozu7YD-2_lg--pgVGrFXK81yw_C0-9dwGrBE-X5Hq5qUoNBjFpG_TBnzVOYkRhKjO" alt="Nagpur weather right now: Is it raining in Nagpur now?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nagpur weather right now: Vidarbha Cricket Association Stadium has already been started to be thronged by spectators.</p></div>
            </div>
        </a><a href='https://www.latestly.com/sports/cricket/nagpur-weather-updates-live-ind-vs-aus-2nd-t20i-2022-hourly-rain-forecast-weather-report-today-for-india-vs-australia-cricket-match-at-vca-stadium-4240074.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Nagpur Weather Updates Live, IND vs AUS 2nd T20I 2022: Match ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTcSGQzMZX-H3gaRbfnrczdNuRSixdzaARW_CNgFMkMeENMhzAjlgZhz0ehPFU7KNDkc7tD6-F1" alt="Nagpur Weather Updates Live, IND vs AUS 2nd T20I 2022: Match ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The India vs Australia 2nd T20I has been reduced to eight overs a side after the long delay due to a wet outfield. The match would start at 9:30 pm IST&nbsp;...</p></div>
            </div>
        </a><a href='https://www.firstpost.com/firstcricket/sports-news/india-vs-australia-weather-update-and-forecast-will-rain-interrupt-2nd-t20i-in-nagpur-11316851.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>India vs Australia weather update and forecast: Will rain interrupt ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQbOwTdPhXipr5wUo5jKTGmOILvAvgtvwQ-bGnPuSA1t8In4smpT199wu4kzjHg5D0jG6rzZv-5" alt="India vs Australia weather update and forecast: Will rain interrupt ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>India vs Australia weather update and forecast: Check out weather and rain forecast in Nagpur ahead of 2nd T20I between India and Australia.</p></div>
            </div>
        </a><a href='https://www.hindustantimes.com/cricket/will-weather-woes-lead-to-focus-being-on-pitch-again-101663928826630.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Will weather woes lead to focus being on pitch again?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTQRP4Xh0j6PqUffiPggg1awGqVfKsD3-xnKgbPIYQB105a9iGZ4P6qs4a0kEw7IRTdIJ5bkPuK" alt="Will weather woes lead to focus being on pitch again?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Contentious strips in Nagpur is not new. Gloomy conditions could add a chapter on Friday. | Cricket.</p></div>
            </div>
        </a>
        </Template></>;
}