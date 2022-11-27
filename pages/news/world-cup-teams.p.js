import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>World Cup teams</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,World Cup teams"/>
        <meta name="description" content="Trending News about World Cup teams" /></Head><Template>
            <h1 style={{fontSize: "30"}}>World Cup teams</h1>
            <Image width={800} height={500} src="https://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F1126%2Fr1097383_1296x729_16%2D9.jpg" alt="World Cup teams"/>
            <h3>Recent News</h3>
            <a href='https://www.espn.in/football/fifa-world-cup/story/4809990/2022-world-cup-group-stage-clinching-scenarios'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>World Cup 2022: How every team can reach the round of 16</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ9RbwEr7Xn4EDgkaNKAwDN5SkVUCcbUZz2wfUCX4CiXoYoMseHX4gY51GGXGRV1LWXmULP7Dy4" alt="World Cup 2022: How every team can reach the round of 16" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The group stage at the 2022 World Cup continues, as 16 teams look to win a place in the knockouts. Here&#39;s what every nation needs.</p></div>
            </div>
        </a><a href='https://www.sportingnews.com/us/soccer/news/round-of-16-world-cup-teams-qualified-bracket-match-schedule-fixtures-2022/rmoambxam6sowze7tzzixiqm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Round of 16 World Cup 2022: Teams qualified, bracket, match ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRa-Qr_9h_G6dsPggmgSY_7VljIzzFIJcMWgdxUVvzDjzhKeOtE7dbWi28J1X4gMTy6-4CNdfvU" alt="Round of 16 World Cup 2022: Teams qualified, bracket, match ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Round of 16 at the 2022 FIFA World Cup is set to begin on Saturday, December 3. All eight of the matches will be played over four days as the teams to&nbsp;...</p></div>
            </div>
        </a><a href='https://sportstar.thehindu.com/football/fifa-world-cup/faqs/teams-same-points-group-stage-tiebreak-rules-qatar-2022/article66185746.ece'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>FIFA World Cup tiebreakers: What happens if teams finish with same ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRkrJ5thvFQd4vg-1uhN0zQUpuCiS_YZp8e6xHffBCWAKZ6wOwK0w2VIbQ-pWw8LZgAVARpf4ri" alt="FIFA World Cup tiebreakers: What happens if teams finish with same ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The FIFA World Cup has specific tiebreak criteria for the scenarios in which two or more teams in a group finish with same points at the end of three rounds&nbsp;...</p></div>
            </div>
        </a><a href='https://khelnow.com/football/2022-11-world-football-fifa-world-cup-2022-group-stage-tiebreakers-qualification-rules-explained'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>World Cup 2022: What happens if teams are locked on points and ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRG61hZgYbYyRFn9Trg0_7FDJIXdDnZ_T_N-VvqU3ouaaiK7TvI12nQ_hupqgQgyxepDDldF4ht" alt="World Cup 2022: What happens if teams are locked on points and ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>These are the tie-breakers rules to separate the teams if they are locked on the same points and goal difference at FIFA World Cup 2022.</p></div>
            </div>
        </a><a href='https://www.eurosport.com/football/world-cup/2022/world-cup-who-has-qualified-for-the-last-16-who-will-england-play-next-group-permutations-at-qatar-2_sto9242943/story.shtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>World Cup 2022: Who has qualified for the last 16? Who is in ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR0RYugUIUvi7U7Sap48SGSW653U4dftJHud9WzCr4Oyub3lKIYF5DDqSQEOlY6cnyaKJFCJM24" alt="World Cup 2022: Who has qualified for the last 16? Who is in ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>GROUP B &middot; All four teams can still qualify &middot; England will be assured of advancing if they avoid defeat in their final group game against Wales. &middot; Iran and the&nbsp;...</p></div>
            </div>
        </a><a href='https://www.thesun.co.uk/sport/20560362/world-cup-2022-teams-knocked-out-qatar-group-rules/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Which teams are OUT of the World Cup 2022? Eliminations ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR0OC1LoOuCwpS0EZijc0sQWQrC9vpuFWYGn1ax-GrZKseo8xYsQTFQICil-5byI9mpoubIRZJl" alt="Which teams are OUT of the World Cup 2022? Eliminations ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>THE WORLD Cup 2022 is kicking on at some pace in Qatar.And this means we&#39;re now at the stage when teams face elimination each day, with their tourname.</p></div>
            </div>
        </a>
        </Template></>;
}