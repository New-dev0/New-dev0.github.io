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
            <Image width={800} height={500} src="https://static.www.nfl.com/image/private/t_editorial_landscape_12_desktop/league/h9p5wfgqicwaviqnt4qb" alt="Ravens"/>
            <h3>Recent News</h3>
            <a href='https://www.nfl.com/news/ravens-qb-lamar-jackson-illness-active-vs-panthers'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ravens QB Lamar Jackson (illness) active vs. Panthers</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSz5QH51L3FB9YpPid6xyJJg6uRiCkhzh1G1ZuyeEBc0UPkPkakm98G0gfsI8wM2gT1kJHYyCUq" alt="Ravens QB Lamar Jackson (illness) active vs. Panthers" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ravens quarterback ﻿Lamar Jackson﻿ is active and will start on Sunday versus the Panthers after missing his most recent practice with an illness.</p></div>
            </div>
        </a><a href='https://www.baltimoresun.com/sports/analysis/preston/report-card/bs-sp-ravens-report-card-grades-preston-panthers-week-11-20221120-h2xzvhdfangcjbfmfwspiygliu-story.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mike Preston&#39;s report card: Position-by-position grades for Ravens ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQErfhK09aBHrgtT0F8guu4rQKMNsSk1ZdQkbTr9YGT1-XxVgtc3NmwvQ5jIT-Cu5V32gPiniD-" alt="Mike Preston&#39;s report card: Position-by-position grades for Ravens ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Here&#39;s how the Ravens graded out at each position after a 13-3 win over the Carolina Panthers in Sunday&#39;s Week 11 matchup at M&amp;T Bank Stadium.</p></div>
            </div>
        </a><a href='https://www.baltimoreravens.com/news/five-thoughts-ravens-win-panthers-week-11-breakdown'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The Breakdown: Five Thoughts on Ravens&#39; Win vs. Panthers</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSP-IRRqjgzjh65nDoFrzlMep22SouH3Yjv4JTQnnhWg0pEiedwYe09fyOJ6EnONr2UnIiUq3k8" alt="The Breakdown: Five Thoughts on Ravens&#39; Win vs. Panthers" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Ravens&#39; dominant defense is here to stay. The offense needs to be better situationally. Demarcus Robinson is carrying the load at receiver.</p></div>
            </div>
        </a><a href='https://www.baltimorebeatdown.com/2022/11/20/23434274/ravens-vs-panthers-final-mvp-7-winners-6-losers-baltimore-carolina-week-11'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ravens vs. Panthers final: MVP, 7 winners, 6 losers</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ0hcuAidjT-8kP9TGJ0gOZyGvaUsJ8ywsdImt4gF58Cbou02g1CAa0FUMNTv_Yxf_R7maNTClX" alt="Ravens vs. Panthers final: MVP, 7 winners, 6 losers" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>In a mighty slugfest, one sooner forgotten than remembered, the Ravens came out on top over the Panthers in Week 11 to move to 7-3 — and they are still&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cbssports.com/nfl/news/ravens-vs-panthers-prediction-odds-line-spread-2022-nfl-picks-week-11-best-bets-from-proven-model/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ravens vs. Panthers prediction, odds, line, spread: 2022 NFL picks ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQPvPK_0L4o7pizrT_JYxLLhjqxRS7lE2k6ZN-nzzaD_TPIKKjEo3b-KmwtCxy8FWLMEYVajJMr" alt="Ravens vs. Panthers prediction, odds, line, spread: 2022 NFL picks ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>SportsLine simulated Carolina Panthers vs. Baltimore Ravens 10000 times and made its Week 11 NFL picks, predictions, and best bets.</p></div>
            </div>
        </a><a href='https://russellstreetreport.com/2022/11/20/knee-jerk-reactions/knee-jerk-reactions-ravens-13-panthers-3/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Baltimore Ravens: Knee-Jerk Reactions to 13-3 Win Over Panthers</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSwQsOUqcS35wja6pyXV2j7pZulj--z_qQ4sDyIAFNI1hu3cYGbHi4Ik_lZMOX7hSsSFQQAtdUy" alt="Baltimore Ravens: Knee-Jerk Reactions to 13-3 Win Over Panthers" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Knee-Jerk Reactions from the Russell Street Report staff to the Baltimore Ravens 13-3 win over the Carolina Panthers in Week 11.</p></div>
            </div>
        </a><a href='https://www.si.com/nfl/ravens/news/with-offense-sputtering-ravens-defense-paves-way-for-13-3-victory-over-panthers'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>With Offense Sputtering, Ravens Defense Paves Way for 13-3 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS2DbvlrhYSqVV0DchkQGm3_AlyBpEp1vnEcsfYPIGVsgiHgQwc2ySjDzSIb1s0xayITMbVBREc" alt="With Offense Sputtering, Ravens Defense Paves Way for 13-3 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>BALTIMORE — Lamar Jackson and the rest of the Ravens&#39; offense looked rusty and sluggish coming out of their bye week against the Carolina Panthers.</p></div>
            </div>
        </a><a href='https://ebonybird.com/2022/11/20/ravens-mark-andrews-injury-expected-play-week-11/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ravens TE Mark Andrews is expected to play in Week 11, per report</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTdMqUf_pe6P0SwFM5hqT_mW2CV-Ljqu5rPGHJr7zHpJghadaRZ2-91q_scKKRGmDzrs4V_dEOY" alt="Ravens TE Mark Andrews is expected to play in Week 11, per report" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Baltimore Ravens used last week&#39;s bye week to help some of their key players rest and recover, one of whom was star tight end Mark Andrews.</p></div>
            </div>
        </a><a href='https://profootballtalk.nbcsports.com/2022/11/20/mark-andrews-is-expected-to-play-for-ravens-sunday/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mark Andrews is expected to play for Ravens Sunday</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRw6mwV6qGpQl-_LtHao2UToqmOBBFznmge83UtvLVka9xlS2vgwpZbxPWDeoOtx5t66ApnpTOS" alt="Mark Andrews is expected to play for Ravens Sunday" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Andrews has 42 catches for 488 yards and five touchdowns this season. He leads the Ravens in all three of those categories. Quarterback Lamar Jackson (illness)&nbsp;...</p></div>
            </div>
        </a><a href='https://www.baltimoresun.com/sports/ravens/bs-sp-ravens-panthers-gus-edwards-david-ojabo-20221120-uxzholp6pnfmlouznb2yghwnz4-story.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ravens TE Mark Andrews returns vs. Panthers; RB Gus Edwards ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRLid0H5NpCtwn1ejUWcRdoWGyfd5bvNAIMysmjSzc1ndw3MpHYtdf20dUvwf9zDdDMsILWm9vF" alt="Ravens TE Mark Andrews returns vs. Panthers; RB Gus Edwards ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ravens tight end Mark Andrews is back in action. Andrews, an All-Pro and the team&#39;s leading receiver, was activated for Sunday&#39;s game against the Carolina&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}