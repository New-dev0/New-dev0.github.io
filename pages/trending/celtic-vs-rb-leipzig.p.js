import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Celtic vs RB Leipzig</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Celtic vs RB Leipzig"/>
        <meta name="description" content="Trending News about Celtic vs RB Leipzig" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Celtic vs RB Leipzig</h1>
            <Image width={800} height={500} src="https://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F1011%2Fr1074373_1296x729_16%2D9.jpg" alt="Celtic vs RB Leipzig"/>
            <h3>Recent News</h3>
            <a href='http://www.espn.in/football/report?gameId=652636'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Celtic vs. RB Leipzig - Football Match Report - October 12, 2022 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSugBqoTtm88tyVuiTWRpN1A35xyH1RylqIwdT4N_WZv865GH5qxaaOG-fE3cQ-cu2NtacCrayc" alt="Celtic vs. RB Leipzig - Football Match Report - October 12, 2022 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Get a report of the Celtic vs. RB Leipzig 2022-23 UEFA Champions League, Group Stage football match.</p></div>
            </div>
        </a><a href='https://www.bbc.co.uk/sport/football/63186516'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Celtic out of Champions League after Leipzig loss</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTBmRLLVoYdzgaZBOuYbxLxAqUqYV8e-QlkVTCkLg9MwkEcg8DV-1VfSPQl9uwbLNET9FUsKOG1" alt="Celtic out of Champions League after Leipzig loss" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Celtic&#39;s hopes of Champions League progress are over after their profligacy is punished in a frustrating home defeat by RB Leipzig.</p></div>
            </div>
        </a><a href='https://www.goal.com/en-gb/news/celtic-vs-rb-leipzig-predictions-tips-and-betting-odds/bltfb635030fc663443'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Celtic vs RB Leipzig: Predictions, tips &amp; betting odds</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSHDEoXlSZcLF_g1XzZz4jQ6VLEDP21mvaqyHq7VJFtOLjH2epYMiot-t9jJuLKgS24ECOk_cGT" alt="Celtic vs RB Leipzig: Predictions, tips &amp; betting odds" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Celtic are looking for their first win of the Champions League campaign when they host RB Leipzig on Tuesday.</p></div>
            </div>
        </a><a href='https://news.yahoo.com/celtic-vs-rb-leipzig-live-173639525.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Celtic vs RB Leipzig LIVE: Champions League result, final score and ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQwtQMShrEtt_4I3YVVRH142BW3W_Az5advy_vuVjR_yCOBJd3gIZvkCH3QsNV7ZANEksVGXXaN" alt="Celtic vs RB Leipzig LIVE: Champions League result, final score and ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Scottish side will be given a boost by playing at home this evening and come into the match on the back of an injury time winner over St. Johnstone in the&nbsp;...</p></div>
            </div>
        </a><a href='https://www.fourfourtwo.com/features/celtic-vs-rb-leipzig-live-stream-match-preview-team-news-and-kick-off-time-for-the-champions-league-clash'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Celtic vs RB Leipzig live stream, match preview, team news and kick ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTm6ajN103b16RjtQkt2y-Ym0hssqF88LtNHUaPCZ5yzyp6D9_4NZ0P6xtOqt3PeOOJY-a2iHK5" alt="Celtic vs RB Leipzig live stream, match preview, team news and kick ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Jump to: Match preview; Form; Referee; Stadium; Elsewhere in the group; Kick-off and channel; VPN guide; International Champions League TV rights&nbsp;...</p></div>
            </div>
        </a><a href='https://www.thesun.co.uk/sport/20059249/celtic-vs-rb-leipzig-live-score-updates-watch-champions-league-online/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Celtic vs RB Leipzig LIVE: Latest updates, teams news and score for ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSJXDRrLSqDRFPBNljod1yjNHMUhkdq5imVXzHXOMTdrsjG1-oOBKiyi3ZK1XaTYQJdhiyKrduQ" alt="Celtic vs RB Leipzig LIVE: Latest updates, teams news and score for ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>RB Leipzig scored second-half goals through Timo Werner and substitute Emil Forsberg to earn a 2-0 win at Celtic in their Champions League Group F cla.</p></div>
            </div>
        </a>
        </Template></>;
}