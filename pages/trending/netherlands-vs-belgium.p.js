import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Netherlands vs Belgium</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Netherlands vs Belgium"/>
        <meta name="description" content="Trending News about Netherlands vs Belgium" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Netherlands vs Belgium</h1>
            <Image width={800} height={500} src="" alt="Netherlands vs Belgium"/>
            <h3>Recent News</h3>
            <a href='https://www.goal.com/en/news/netherlands-vs-belgium-live-stream-tv-channel-kick-off-time-and-how-to-watch/blt7f165b8d8eea0d55'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Netherlands vs Belgium: Live stream, TV channel, kick-off time ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRnykzB3dPsmn43NctZHkP-NM9mP7tgvU1tfanQGOfHVjloNn6IbAY5VMjz6VNn3b_XYeQfFb2f" alt="Netherlands vs Belgium: Live stream, TV channel, kick-off time ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Here&#39;s how you can watch the Netherlands against Belgium on TV and stream the game live...</p></div>
            </div>
        </a><a href='https://www.espn.com/soccer/report/_/gameId/624021'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Netherlands vs. Belgium - Football Match Report - September 25 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRm07raVLBVyh4A4-W1TjyScmtmq-iHEdtw7uixe0IoZQz_zcvHf8gkg3QUl_WyLkQG4X3nwkzn" alt="Netherlands vs. Belgium - Football Match Report - September 25 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Get a report of the Netherlands vs. Belgium 2022-23 UEFA Nations League, Group Stage football match.</p></div>
            </div>
        </a><a href='https://www.goal.com/en-gb/news/netherlands-vs-belgium-predictions-tips-and-betting-odds/blt13f2fbbf34de83bd'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Netherlands vs Belgium: Predictions, tips &amp; betting odds</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT2xkxjRZwG-i6wklHVe2-icZMamIKnmrtKc9ha-XV2b8O1jxb67ewhslKawaoTcqIl6AfQGymk" alt="Netherlands vs Belgium: Predictions, tips &amp; betting odds" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Netherlands are out to maintain their strong Nations League campaign on Sunday when they host Belgium. Three points separate the two teams heading into this&nbsp;...</p></div>
            </div>
        </a><a href='https://www.fourfourtwo.com/features/netherlands-vs-belgium-live-stream-how-to-watch-nations-league'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Netherlands vs Belgium match preview, team news and kick-off time ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRwPDrlFGUZUrVlzAdVS_Yat6mlnwfIyEP4N-p34UtxZsz5rKb04vSejHO5MJ0we1YWvPwXa4-i" alt="Netherlands vs Belgium match preview, team news and kick-off time ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Jump to: Match preview; Form; Referee; Stadium; Other games in this group; Kick-off and channel; VPN guide; UK TV rights; US TV rights; Canada TV&nbsp;...</p></div>
            </div>
        </a><a href='https://zeenews.india.com/football/netherlands-vs-belgium-uefa-nations-league-match-livestreaming-details-when-and-where-to-watch-ned-vs-bel-2514297.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Netherlands vs Belgium UEFA Nations League match livestreaming ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTNIWa-0uwk1DskJhJ5OqYAMHQ3G5Dkver8e6QSh6VsT8kVMTV_XR3Sfr7MpoBZzmW7flqf-SrC" alt="Netherlands vs Belgium UEFA Nations League match livestreaming ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Netherlands will host Belgium at the Johan Cruyff Arena in their UEFA Nations League fixture on Monday (September 26), as per IST.</p></div>
            </div>
        </a><a href='https://www.insidesport.in/uefa-nations-league-highlights-netherlands-overpowers-belgium-1-0-virgil-van-dijk-goal-takes-dutch-side-to-nations-league-finals-watch-highlights/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>UEFA Nations League Highlights: Netherlands defeats Belgium 1-0 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTsyTR1Ceq6ekf4w9PxvoOSrN8004Rjb0Af8C_Sht4qKyjGmteGAwPD3I2EFyahLs7lgJsfD7Be" alt="UEFA Nations League Highlights: Netherlands defeats Belgium 1-0 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>UEFA Nations League Highlights: NED 1-0 BEL, Netherlands OVERPOWERS Belgium, Virgil van Dijk&#39;s thundering Header SINKS Belgium: Watch Highlights.</p></div>
            </div>
        </a>
        </Template></>;
}