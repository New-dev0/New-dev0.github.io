import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Oregon football</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Oregon football"/>
        <meta name="description" content="Trending News about Oregon football" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Oregon football</h1>
            <Image width={800} height={500} src="https://duckswire.usatoday.com/wp-content/uploads/sites/101/2022/10/20221022_SC2_7736.JPG-1200x1200-1.jpg?w=1024&h=576&crop=1" alt="Oregon football"/>
            <h3>Recent News</h3>
            <a href='https://duckswire.usatoday.com/lists/espn-college-gameday-crew-picks-winner-between-oregon-and-oregon-state/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ESPN College GameDay crew picks winner between Oregon and ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS7n0HwBHHliSv-Hw8jYBWvYw9nFoxWz0g_nQ12PU_SGgMp4Cv5xCSuYmJCtpWDWhuG9Tmipisj" alt="ESPN College GameDay crew picks winner between Oregon and ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The stakes have certainly been raised for the regular-season finale in Oregon. In the 13th week of college football, the No. 9 Oregon Ducks go up to&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cbssports.com/college-football/news/oregon-state-vs-oregon-live-updates-score-results-highlights-for-saturdays-ncaa-football-game-27009786/live/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Oregon State vs. Oregon: Live updates, score, results, highlights, for ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQW-7qaplZUTNXAmKhVExpfMO1Nia0ILV0oMQbkC014CaPnEkAHnkX5beXNNvhMmKtzsUV_541u" alt="Oregon State vs. Oregon: Live updates, score, results, highlights, for ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>After a two-game homestand, the Oregon Ducks will be on the road. Oregon and the Oregon State Beavers will face off in a Pac-12 battle at 3:30 p.m. ET on&nbsp;...</p></div>
            </div>
        </a><a href='https://www.oregonlive.com/collegefootball/2022/11/live-updates-oregon-ducks-vs-oregon-state-beavers.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Rewinding Oregon State&#39;s 38-34 comeback win over Oregon</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQvgwpkOWs4FvQvZQXwLELqZAhvN7_RXq90Xl6lvURzWpXApTx6WNxW2lBbsls7QWmXNcD_4DpP" alt="Rewinding Oregon State&#39;s 38-34 comeback win over Oregon" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>We were live from Reser Stadium for today&#39;s game between No. 9 Oregon and No. 22 Oregon State. The Beavers won 38-34. Oregon (9-3, 7-2 Pac-12) opened the&nbsp;...</p></div>
            </div>
        </a><a href='https://www.nj.com/sports/2022/11/what-channel-is-the-oregon-football-game-on-today-vs-oregon-state-free-live-stream-time-tv-channel-for-college-football-week-13.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>What channel is the Oregon football game on today vs. Oregon State ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTkjp5BkdvhD57QLp7ei360V82Ju1y3blJTitG12wY6vQVo4P5ZRELFmrd_1TQqwj0pQHWdnv5-" alt="What channel is the Oregon football game on today vs. Oregon State ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Oregon faces Oregon State in a regular season game on Saturday, Nov. 26, 2022 (11/26/22) at Reser Stadium in Corvallis, Oregon.</p></div>
            </div>
        </a><a href='https://www.si.com/tv/college-football/2022/11/26/oregon-oregon-state-stream-college-football-live'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>How to Watch Oregon at Oregon State: Live Stream College Football ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTaXA9fgvUB2BAyw6wWkTOynGxlMutaTQ214Sc6gDqUnf6jSV5_582VvoI8BkzWpiUcUzSFKjkD" alt="How to Watch Oregon at Oregon State: Live Stream College Football ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Oregon takes on rival Oregon State on Saturday afternoon looking to wrap up a spot in the Pac-12 Championship game.</p></div>
            </div>
        </a><a href='https://247sports.com/college/oregon/LongFormArticle/Oregon-Ducks-Football-Updates-State-Beavers-Civil-War-198585906/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>LIVE UPDATES: No. 9 Oregon at No. 21 Oregon State</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTwAM1YVKJpdsk3AESaBDiPVPjEv32Sc6R-tsJCiSdArV41sAOU5_aNOFykzULQ8_STjYPwyV1k" alt="LIVE UPDATES: No. 9 Oregon at No. 21 Oregon State" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>GameDay is here for the Oregon Ducks! No. 9 Oregon heads to rival No. 21 Oregon State for a showdown of ranked opponents in the in-state rivalry series&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}