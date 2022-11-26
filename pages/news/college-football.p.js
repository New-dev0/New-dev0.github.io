import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>College football</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,College football"/>
        <meta name="description" content="Trending News about College football" /></Head><Template>
            <h1 style={{fontSize: "30"}}>College football</h1>
            <Image width={800} height={500} src="https://sportshub.cbsistatic.com/i/r/2022/11/12/d270fb4a-d372-4676-90e8-d098a271d35b/thumbnail/1200x675/fa823113b4f81c3239a1188c2359a5a6/usc-caleb-williams.jpg" alt="College football"/>
            <h3>Recent News</h3>
            <a href='https://www.cbssports.com/college-football/news/college-football-picks-schedule-predictions-against-the-spread-odds-for-top-25-games-during-week-13/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>College football picks, schedule: Predictions against the spread ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSM2_vm_yPegCo1S9aoilqyjBxB4D_F8rMqOotnOhajbFYngHIcNxqJFenckLd4LkGzeBCIRXks" alt="College football picks, schedule: Predictions against the spread ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A closer look at the top games during Rivalry Week of the 2022 college football season.</p></div>
            </div>
        </a><a href='https://www.si.com/fannation/college/cfb-hq/ncaa-football-picks/college-football-picks-predictions-odds-upset-alert-week-13-ohio-state-usc'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>College football picks, predictions, odds: Ohio State, USC on upset ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQOD-sMzy3T8zcsgcwfaBzs3PDe0oLtfVe0nG0YvVbmL1HYMRdtQCGK1_NgwX7cTEtsrjyASMsi" alt="College football picks, predictions, odds: Ohio State, USC on upset ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>College Football HQ makes our upset picks and predictions as the Week 13 schedule brings us some crucially important rivalry matchups with narrow point&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cleveland.com/osu/2022/11/picking-college-football-rivalry-upsets-and-explaining-the-right-time-to-buy-points-college-football-betting.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Picking college football rivalry upsets, and explaining the right time ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT5Q8do6pTVymxbiS9pvYniSbqa39dfyLOyA8WU3h7D-QFZAf5mKI7pWoJ8HOXk3oRwsqcXwKIO" alt="Picking college football rivalry upsets, and explaining the right time ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Tyler Shoemaker offers an inside betting tip and make three best bets in Power 5 rivalry games this week.</p></div>
            </div>
        </a><a href='https://www.si.com/fannation/college/cfb-hq/ncaa-football-schedule/florida-gators-florida-state-game-time-predictions-tv-channel-streaming-college-football-schedule'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Florida vs. Florida State prediction, game time, TV, streaming: Week ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRZKva3S-x_BLqCqNoVNFtkPDFTQQyGWfadp4Q7pxaWVW4zTLScNM6OPOvhpsuTf8d1prsQ77sI" alt="Florida vs. Florida State prediction, game time, TV, streaming: Week ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>How to watch Florida vs. Florida State on the Week 13 college football schedule with updated TV channel and streaming info with new predictions.</p></div>
            </div>
        </a><a href='https://www.cbssports.com/college-football/news/cincinnati-vs-tulane-prediction-odds-line-2022-week-13-college-football-picks-best-bets-by-proven-model/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Cincinnati vs. Tulane prediction, odds, line: 2022 Week 13 college ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQTNbmGej23XJihyoMzpl5AEW-g91csyd-cuUgyV7dElB8fEAPspdCj7PfBqjvwYwUhaytcdO4G" alt="Cincinnati vs. Tulane prediction, odds, line: 2022 Week 13 college ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>SportsLine&#39;s model revealed its CFB picks, predictions, and best bets for Tulane Green Wave vs. Cincinnati Bearcats on Friday.</p></div>
            </div>
        </a><a href='https://www.si.com/fannation/college/cfb-hq/ncaa-football-schedule/ohio-state-michigan-picks-prediction-game-time-tv-stream-college-football-schedule'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ohio State vs. Michigan pick, prediction, game time, TV channel ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQUQII3F1QnkVBDoUuE2vec1VSRYasuwob4W06HVBIuYxy7wr72UDITl4-BIKfrA3ncpAG34_T1" alt="Ohio State vs. Michigan pick, prediction, game time, TV channel ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>How to watch Ohio State vs. Michigan on the Week 13 college football schedule with updated picks and predictions for The Game.</p></div>
            </div>
        </a><a href='https://www.si.com/college/kansas/football/kansas-jayhawk-fan-college-football-viewing-guide-week-13'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kansas Jayhawk Fan College Football Viewing Guide - Week 13</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSwbVWeolP1491JudFV-hPKEHHqx2dXwN0m_Lsewz53RdAqoIYushdbzmGOa80mXV1AWV-_sfp6" alt="Kansas Jayhawk Fan College Football Viewing Guide - Week 13" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Running through the holiday weekend slate to find games that are worth tuning in for.</p></div>
            </div>
        </a><a href='https://www.usatoday.com/story/sports/ncaaf/2022/11/25/college-football-week-13-bold-predictions-ohio-state-usc/10747868002/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ohio State, USC set for upsetting weekend? College football bold ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRfSEvFNCmPRvcOZw46xCxXhpBC-YoI4SgUTo6LYujIc8uL4pe055AARxkerZC6iTxil7JQlIvr" alt="Ohio State, USC set for upsetting weekend? College football bold ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>There&#39;s a full slate of major games in Week 13 of the college football season. Our staff makes its bold predictions for Saturday&#39;s biggest showdowns.</p></div>
            </div>
        </a><a href='https://247sports.com/nfl/pittsburgh-steelers/Article/Roy-Countryman-spotlights-the-college-football-players-who-should-draw-the-interest-of-Steelers-fans-today-198526544/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>College Football Spotlight Week 13</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS1zhlVdpjUr7-uofzNSwi6dp0jXe4MBEd-rn9w-cekC491Y9quf-BsvI3Fwj_6xFZgyNkGYvpC" alt="College Football Spotlight Week 13" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Steelers fell to 3-7 and No. 9 in the draft order if it were to be held today. The Steelers own the second-round pick of the Chicago Bears,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.si.com/fannation/college/cfb-hq/ncaa-football-schedule/tulane-cincinnati-predictions-game-time-schedule-tv-channel-streaming'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Tulane vs. Cincinnati prediction, game time, TV, streaming: Week 13 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQWTNTpN4UWSliR974gl6erMbZYd7NsXHRHGNqZIhGNV9-eB7H8Cg7yeuzjYwkl23yUJhhOYXoH" alt="Tulane vs. Cincinnati prediction, game time, TV, streaming: Week 13 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>How to watch Tulane vs. Cincinnati on the Week 13 college football schedule with updated predictions and betting lines.</p></div>
            </div>
        </a>
        </Template></>;
}