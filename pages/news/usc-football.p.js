import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>USC football</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,USC football"/>
        <meta name="description" content="Trending News about USC football" /></Head><Template>
            <h1 style={{fontSize: "30"}}>USC football</h1>
            <Image width={800} height={500} src="https://d3jycsk0m72ya7.cloudfront.net/images/2022/11/25/2022-FB-USCPharmKeys-ND-web_fx1F8.png?preset=large.socialmediaimage" alt="USC football"/>
            <h3>Recent News</h3>
            <a href='https://usctrojans.com/news/2022/11/25/usc-football-notre-dame-irish-trojans-game-preview-lincoln-riley-caleb-williams'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Game Preview: USC Football Hosts Rival Notre Dame for First Time ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTDfiyeLYK6X7zzoWlVgumLMRhwO4p060FpZ0ieLFo9XQ8zn0_DjPrJJt0OpJKj-uW-DOCCbkIT" alt="Game Preview: USC Football Hosts Rival Notre Dame for First Time ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Trojans will face the Irish at home for the team&#39;s final game in the Coliseum for the 2022 season.</p></div>
            </div>
        </a><a href='https://www.ndinsider.com/story/sports/football/2022/11/26/notre-dame-usc-college-football-rivalry-game-ncaa-transfer-portal/69675304007/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Culture wars: Notre Dame-USC rivalry offers modern referendum on ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTFLEYTs3KZ52o3JXj8Ana9eExmjOmAtrp_SD7VIM9R3E5b-pwjrsKNDtAmlKy1nbacUscj-_5j" alt="Culture wars: Notre Dame-USC rivalry offers modern referendum on ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>SOUTH BEND — No program restocked more aggressively through the transfer portal last offseason than USC. The sixth-ranked Trojans, 10-1 as they face No.</p></div>
            </div>
        </a><a href='https://nypost.com/2022/11/26/notre-dame-vs-usc-predictions-college-football-picks-odds-today/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Notre Dame vs. USC predictions: College football picks and odds</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSkbX1MPkxTjg2P3lTN6mfMV9bFn6N6IvgTk7cH6tJfjcAp4AcM20EhmWrRdfYoo27xtTfcjvkN" alt="Notre Dame vs. USC predictions: College football picks and odds" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Our college football betting writer brings you his best betting picks and predictions for the matchup between No. 15 Notre Dame and No.</p></div>
            </div>
        </a><a href='https://trojanswire.usatoday.com/2022/11/26/usc-football-program-has-been-rejuvenated-in-2022/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>USC football program has been rejuvenated in 2022</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSUEPyV8WAleUVGrWKRtTRFXT99OprqH1XiD8xHn54mbxZ2ab0HZU13tkwsEPBPo4PSdVsMaTJe" alt="USC football program has been rejuvenated in 2022" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Maybe USC will beat Notre Dame on Saturday in the Los Angeles Coliseum. Maybe it won&#39;t. That point aside, let&#39;s simply stop for a moment to reflect on the&nbsp;...</p></div>
            </div>
        </a><a href='https://247sports.com/college/usc/Article/USCFootballcom-staff-picks-against-spread-USC-Trojans-Notre-Dame-Fighting-Irish-Las-Vegas-198538286/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>USCFootball.com staff picks against the spread for USC vs. Notre ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSJIsnl_7UEVfv64WCc4i4qjv4Yrda845LYA7MEgT7vw2zPL3mIXmFrVEyh8B6AagCo7rnI5Z2x" alt="USCFootball.com staff picks against the spread for USC vs. Notre ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>This week the Trojans back at home in the Coliseum taking on the Notre Dame Fighting Irish with a kickoff time set for at 4:30 p.m. PT with the game on ABC. The&nbsp;...</p></div>
            </div>
        </a><a href='https://www.si.com/college/usc/football/how-to-watch-usc-vs-notre-dame-football'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>How to watch USC vs. Notre Dame football: Live stream online, TV ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRmOWorHf7_FdyVUcSGMWt3BtFt5pfxeWRTBbwyuNPRrTvkGKyoymbtWfvf1T7lQ2KMpSxPUVYb" alt="How to watch USC vs. Notre Dame football: Live stream online, TV ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>No. 6 USC and No. 15 Notre Dame square off for the 92nd time on Saturday in the Trojans&#39; final home game of the season at the Los Angeles Memorial Coliseum.</p></div>
            </div>
        </a><a href='https://www.latimes.com/sports/usc/liveblog/usc-notre-dame-live-updates'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>No. 6 USC vs. No. 15 Notre Dame: Caleb Williams and Trojans ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTqHzS73sVMBPwSX3cEH3EY6m3CCRjHihRQpaB9IegKM0P7PsunaoQug0qvkmIk6PTkD0dLcur1" alt="No. 6 USC vs. No. 15 Notre Dame: Caleb Williams and Trojans ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>USC needs a win over Notre Dame to extend its push for a spot in the College Football Playoff semifinals. Kickoff is at 4:30 p.m. and it airs on ABC.</p></div>
            </div>
        </a><a href='https://247sports.com/college/usc/Article/Stat-Pack-Where-USC-football-stands-statistically-following-Week-12-198217256/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Stat Pack: Where USC football stands statistically following Week 12</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQmSCsO-piMoeGRWVO8TVWk4CUvY2RwQugM7ek325kVDZJ9K31Y60NXQn6M18nfiKwE9dXwZvvN" alt="Stat Pack: Where USC football stands statistically following Week 12" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>I also pull out interesting or impressive stat standings/trends. Here is where USC stands after a Week 12 win over UCLA. The first number in parentheses&nbsp;...</p></div>
            </div>
        </a><a href='https://theathletic.com/3930295/2022/11/25/usc-recruiting-duce-robinson/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>USC recruiting reset: Trojans seek strong finish to Lincoln Riley&#39;s ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSwu-JkGAy1MMO586a9mUgeNfSSaW4fcKPH5eBb5vK94OIhVQFmVS196aML69lJjCfmTG1U1Kfc" alt="USC recruiting reset: Trojans seek strong finish to Lincoln Riley&#39;s ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>LOS ANGELES — Three weeks ago, Lincoln Riley sat in his office and told the truth about the state of USC&#39;s roster while talking to reporters over Zoom.</p></div>
            </div>
        </a>
        </Template></>;
}