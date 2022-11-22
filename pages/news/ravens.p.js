import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Ravens</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Ravens"/>
        <meta name="description" content="Trending News about Ravens" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Ravens</h1>
            <Image width={800} height={500} src="https://images2.minutemediacdn.com/image/fetch/w_2000,h_2000,c_fit/https%3A%2F%2Fblackandteal.com%2Fwp-content%2Fuploads%2Fimagn-images%2F2017%2F07%2F19379305.jpeg" alt="Ravens"/>
            <h3>Recent News</h3>
            <a href='https://blackandteal.com/2022/11/21/jaguars-ravens-winning-streak-week-12/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jaguars looking to end Ravens winning streak: Odds and Prediction ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT06XYZrSnDpJ4rTYRnf-XVuBgo3RfL1wTIDST9KRNSibpPDrX5qPuLKikyXmoPKmgBcwBY4C_E" alt="Jaguars looking to end Ravens winning streak: Odds and Prediction ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Jacksonville Jaguars will play the Baltimore Ravens in Week 12 of the 2022 season. Here are the odds and a score prediction for the game.</p></div>
            </div>
        </a><a href='https://www.baltimoreravens.com/news/ravens-need-play-far-better-lamar-jackson-offense'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Late for Work 11/21: A Win Is a Win, But Ravens &#39;Will Need to Play ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRZLzS_LI4wVmRq2qiIsY9-sxYX0GxGCF0LmQ03S-FSzPyZfM_QyUtFGuB5BqiA06DNN50MXoWY" alt="Late for Work 11/21: A Win Is a Win, But Ravens &#39;Will Need to Play ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Concerns over injuries loom large over victory. Patrick Queen is emerging next to Roquan Smith. Rashod Bateman had his surgery.</p></div>
            </div>
        </a><a href='https://www.baltimoreravens.com/news/what-panthers-said-loss-ravens-week-11'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>What the Panthers Said After Their Loss in Baltimore</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSd65SvFiXlNwxqysqvunqR3rVx-CmxWh-q-3tvD5SNs-wbvqmM1mijwHnp0cMa72acVVE5wpe_" alt="What the Panthers Said After Their Loss in Baltimore" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Baker Mayfield gives props to the Ravens defense and the Panthers talk about their plan for limiting Lamar Jackson and the Ravens running game.</p></div>
            </div>
        </a><a href='https://www.baltimorebeatdown.com/2022/11/21/23469915/ravens-vs-panthers-play-of-the-game-baltimore-carolina-highlights-touchdown-interception-fumble'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ravens vs. Panthers: Play of the Game</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRXBOMi_RAvY3FEXv7Hiz_rnJh8Ba2OS4U0DqElvtjZypIErmk2Ll_mjhZEGDyVtkr88_Vwwkti" alt="Ravens vs. Panthers: Play of the Game" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>With just 16 combined points between both teams, the Baltimore Ravens and Carolina Panthers matchup in Week 11 was a defensive slugfest.</p></div>
            </div>
        </a><a href='https://ebonybird.com/2022/11/21/dominant-ravens-defense-returned/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The dominant Ravens defense has finally returned to Baltimore</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRHIikLzIXQY7gGTnKAnN0nkaNRImLyz3lYrE6cVbTnrFcRziPoEHTBf8qLk0if8RUQRLYAa5z4" alt="The dominant Ravens defense has finally returned to Baltimore" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Baltimore Ravens defeated the Carolina Panthers 13-3 in Week 11 on the back of a dominant defensive performance on a day when the offense let them down.</p></div>
            </div>
        </a><a href='https://www.baltimorebeatdown.com/2022/11/21/23470840/what-are-the-odds-ravens-are-mild-favorites-over-jaguars-nfl-gambling-draftkings-promo-code-link'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>What are the odds? Ravens are mild favorites over Jaguars</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQzxuEC2v9RY1U2mDUnNEU7L3aoH3ZMWnByAguskrx1Pga9qHVrVK4LpOjpBIebMqJVcgd83rzs" alt="What are the odds? Ravens are mild favorites over Jaguars" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>If you&#39;re gambling on NFL games, consider doing so at DraftKings Sportsbook, official sponsor of SB Nation and Baltimore Beatdown. Bet Now! Lamar Jackson.</p></div>
            </div>
        </a><a href='https://www.si.com/nfl/ravens/news/ravens-lamar-jackson-style-points'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lamar Jackson, Ravens Offense Not Worried About Style Points</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ5ld7sPAxrM3mRnSDbliRU15HpF-2j29aXi0De4K-q4BzK4iTo8LngWCek2Bvf4lFWA8uy3myK" alt="Lamar Jackson, Ravens Offense Not Worried About Style Points" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>OWINGS MILLS Md. — Ravens quarterback Lamar Jackson is only concerned about winning.&#39; So as the offense sputtered in Week 11 against the Carolina Panthers,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.washingtonpost.com/sports/nfl/baltimore-defense-key-to-ravens-4-game-winning-streak/2022/11/21/af4b5348-69e3-11ed-8619-0b92f0565592_story.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Baltimore defense key to Ravens&#39; 4-game winning streak</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSJ4vEwIVF38w9oP3MdxPS4kxP1JBb3xLfl1-5tRNIf4DN8Bdx9QLLNz1fPtwDZysw567xlK0Xx" alt="Baltimore defense key to Ravens&#39; 4-game winning streak" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Baltimore&#39;s 13-3 victory over Carolina looked like a throwback to the days when the Ravens could win big with a phenomenal defense and a marginal offense.</p></div>
            </div>
        </a><a href='https://www.azcentral.com/story/sports/nfl/2022/11/21/baltimore-ravens-jacksonville-jaguars-betting-odds-nfl-week-12-game/10720339002/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Baltimore Ravens vs. Jacksonville Jaguars odds: NFL Week 12 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTFKucb-X_xXXOaczSGqqXdBZWOMv3FCOehRYGbgM0jBhGR9PPU6_MfV7gXsgwDyFX-yZ9m9PR-" alt="Baltimore Ravens vs. Jacksonville Jaguars odds: NFL Week 12 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Baltimore Ravens and Jacksonville Jaguars play on Sunday in a game on the NFL Week 12 schedule. What do the odds say about the game?</p></div>
            </div>
        </a><a href='https://www.si.com/betting/2022/11/21/ravens-jaguars-odds-spreads-bets-week-12'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ravens-Jaguars Week 12 Odds, Lines and Spread</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQQBLA0IYMzythwdI-HIypG2gBPrc9fhqGHFdTXce83hQKIg4Hw055FLJCC7tejBC24AveXaduB" alt="Ravens-Jaguars Week 12 Odds, Lines and Spread" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Ravens, 4-1 against the spread in road games, are 3.5-point favorites in Jacksonville.</p></div>
            </div>
        </a>
        </Template></>;
}