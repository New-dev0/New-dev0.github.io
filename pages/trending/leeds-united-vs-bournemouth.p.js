import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Leeds United vs Bournemouth</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Leeds United vs Bournemouth"/>
        <meta name="description" content="Trending News about Leeds United vs Bournemouth" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Leeds United vs Bournemouth</h1>
            <Image width={800} height={500} src="" alt="Leeds United vs Bournemouth"/>
            <h3>Recent News</h3>
            <a href='https://www.skysports.com/football/leeds-united-vs-bournemouth/report/464778'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Leeds 4-3 Bournemouth: Crysencio Summerville completes ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcREVsirSs2qQdJiAQo4-G_MV4QsIEaeDzdHK4S8MbDz8hskKgQ47HNWcuIIsRypiD6UsTLpfMC-" alt="Leeds 4-3 Bournemouth: Crysencio Summerville completes ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Report and free match highlights as Leeds produce a sensational comeback to beat Bournemouth 4-3 at Elland Road; Crysencio Summerville scores winner as&nbsp;...</p></div>
            </div>
        </a><a href='http://www.espn.in/football/report?gameId=637967'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Leeds United vs. AFC Bournemouth - Football Match Report ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQIIvOO6lNPpv8xF5qYxASa7pIagf8I-TIlU-zqoWhkwCyidmqCGZdindsll-R7ojTPJKHa7AYY" alt="Leeds United vs. AFC Bournemouth - Football Match Report ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Rodrigo (3&#39; PEN) &middot; Sam Greenwood (60&#39;) &middot; Liam Cooper (68&#39;) &middot; Crysencio Summerville (84&#39;).</p></div>
            </div>
        </a><a href='https://www.cbssports.com/soccer/news/how-to-watch-leeds-united-vs-bournemouth-premier-league-live-stream-info-tv-channel-time-game-odds-28880494/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>How to watch Leeds United vs. Bournemouth: Premier League live ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTSKSqJOX56hAaCRI-zhlb8695DfpTugFFp3J1NDKNgALmtWl9tUqPA78NVH9_itvgeXE8v534A" alt="How to watch Leeds United vs. Bournemouth: Premier League live ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Your ultimate guide to the Beautiful Game as our experts take you beyond the pitch and around the globe with news that matters. (coming soon!) By submitting my&nbsp;...</p></div>
            </div>
        </a><a href='https://www.leedsunited.com/news/team-news/30586/live-updates-leeds-united-vs-afc-bournemouth'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Report: Leeds United 4-3 AFC Bournemouth</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQhOlFSHegVakOY3nTuCZxsNdEbsKmi-PzPWav8i_5P-3LtN9msnqu86u7Z7-Ja7e6dHDj29e-d" alt="Report: Leeds United 4-3 AFC Bournemouth" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Premier League. Leeds United 4 (Rodrigo 3&#39; pen, Greenwood 60&#39;, Cooper 68&#39;, Summerville 84&#39;). AFC Bournemouth 3 (Tavernier 7&#39;, Billing 19&#39;, Solanke 48&#39;)&nbsp;...</p></div>
            </div>
        </a><a href='https://www.bbc.co.uk/sport/football/63436261'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Leeds fight back from 3-1 down to beat Bournemouth</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSiuzb_UaycGtNX5qu_jj1dZ3TeqcOmFU7tAQ4UV2RoWl4BwiWLCRJ1KWeqYvJEuAkqZOIc3fw7" alt="Leeds fight back from 3-1 down to beat Bournemouth" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Leeds United fight back from 3-1 down to beat Bournemouth in a pulsating game played out in an electric atmosphere at Elland Road.</p></div>
            </div>
        </a>
        </Template></>;
}