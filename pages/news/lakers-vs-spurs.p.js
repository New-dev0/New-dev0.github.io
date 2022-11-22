import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Lakers vs Spurs</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Lakers vs Spurs"/>
        <meta name="description" content="Trending News about Lakers vs Spurs" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Lakers vs Spurs</h1>
            <Image width={800} height={500} src="https://sportshub.cbsistatic.com/i/r/2022/01/19/bb699609-e09b-4b1b-a474-470473264bf4/thumbnail/1200x675/e826c8059ebac512a26e31c8e839eab5/generic-nba-basketball.jpg" alt="Lakers vs Spurs"/>
            <h3>Recent News</h3>
            <a href='https://www.cbssports.com/nba/news/lakers-vs-spurs-how-to-watch-nba-online-tv-channel-live-stream-info-game-time-28930275/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lakers vs. Spurs: How to watch NBA online, TV channel, live stream ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS_Vr3c-lO6k770uz9qrk5io9DdDznZF2Uiy4ToTAOjx0GY818pwmx-EL6mN5zWQvivyJLrQ9xB" alt="Lakers vs. Spurs: How to watch NBA online, TV channel, live stream ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>This Sunday, the Los Angeles Lakers are hoping to patch up the holes in a defense that has allowed an average of 115.79 points per game. Their homestand&nbsp;...</p></div>
            </div>
        </a><a href='https://www.nba.com/lakers/news/three-things-to-know-lakers-vs-spurs-11-20-22'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Three Things to Know: Lakers vs. Spurs 11-20-22</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR3FVfuLMA8cD_Q0TbcP14SiwiM8qQyNObCJwdD7k_PGQ1Bf3mznrjohNSnHl-5GgI_nqVz3Z0S" alt="Three Things to Know: Lakers vs. Spurs 11-20-22" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>In Friday&#39;s win over the Pistons, Anthony Davis again put together a monstrous performance, scoring a season-high 38 points while pulling down 16 rebounds. With&nbsp;...</p></div>
            </div>
        </a><a href='https://lakersnation.com/lakers-vs-spurs-preview-lebron-james-remains-out-with-adductor-strain/2022/11/20/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lakers Vs. Spurs Preview: LeBron James Remains Out With ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR5MrxNUxdZIxE7bElhaNjhmXpBUdc7Vr4cUg-jRHXPL75ZM6ISiceJCbj4wA58sD3n5aGWFGX-" alt="Lakers Vs. Spurs Preview: LeBron James Remains Out With ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Los Angeles Lakers take on the San Antonio Spurs, hoping to extend their winning streak to three games despite LeBron James&#39; absence.</p></div>
            </div>
        </a><a href='https://lebronwire.usatoday.com/lists/lakers-vs-spurs-lineups-injuries-and-broadcast-info-for-sunday/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lakers vs. Spurs: Lineups, injuries and broadcast info for Sunday</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRomHY4Sw8zMQdshr7Op6BnqsnNYRphjtFTEacd-bGHlvCvdHBHFfEVHkM0BHRIvoPSQMXPmuJ5" alt="Lakers vs. Spurs: Lineups, injuries and broadcast info for Sunday" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Los Angeles Lakers play the San Antonio Spurs on Sunday, and if you&#39;re wondering how you can watch the action live, you&#39;ve come to the right place.</p></div>
            </div>
        </a><a href='https://www.silverscreenandroll.com/2022/11/20/23470473/lakers-spurs-recap-box-score-stats-anthony-davis-austin-reaves-russell-westbrook'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lakers vs. Spurs Final Score: LA blows out Spurs to extend win streak</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRhTdiy6Ixokwu0eIEkpMLDGWMAlzdDHF_yXg6Sw5BRGGtIK8F5x4k_Aj7N4COU9djIFmTz9yuJ" alt="Lakers vs. Spurs Final Score: LA blows out Spurs to extend win streak" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Lakers actually blew out an NBA team, extend win streak to three games &middot; Why LeBron is already sending subliminal messages to Rob Pelinka -- The Hook.</p></div>
            </div>
        </a><a href='https://www.espn.com/nba/recap/_/gameId/401468402'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Spurs vs. Lakers - NBA Game Recap - November 20, 2022 | ESPN</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQRBCqthIsc7P4IMhLmgQTUUnfsuEUrY3j-MkMuIOIVg9mawQzdfVxkp8lZ1UA6rUEQv4AcegOT" alt="Spurs vs. Lakers - NBA Game Recap - November 20, 2022 | ESPN" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Visit ESPN for the game recap of the San Antonio Spurs vs. Los Angeles Lakers NBA basketball game on November 20, 2022.</p></div>
            </div>
        </a>
        </Template></>;
}