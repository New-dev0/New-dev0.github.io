import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Tottenham</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Tottenham"/>
        <meta name="description" content="Trending News about Tottenham" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Tottenham</h1>
            <Image width={800} height={500} src="https://i2-prod.football.london/incoming/article25711796.ece/ALTERNATES/s1200/0_Tan-Abstract-Minimalist-Blank-Document-Border-23.png" alt="Tottenham"/>
            <h3>Recent News</h3>
            <a href='https://www.football.london/tottenham-hotspur-fc/fixtures-results/tottenham-motherwell-live-goal-updates-25711824'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Tottenham vs Motherwell highlights as Kulusevski, Doherty and ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQUPtPjBsJ4RweV6USRIwYT1Jziy2Id6Q7cp-W5D8IkbWUf9Zni_63Linu4BOnBzi0t58JTjzq0" alt="Tottenham vs Motherwell highlights as Kulusevski, Doherty and ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>LIVE: Follow all the action right here as Tottenham take on Scottish side Motherwell in a behind-closed-doors friendly match at Hotspur Way on Friday&nbsp;...</p></div>
            </div>
        </a><a href='https://www.thesun.co.uk/sport/20703602/tottenham-4-motherwell-0-kulusevski-scores-and-assists/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Tottenham 4 Motherwell 0: Kulusevski scores one and assists two as ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTY06fHX3mYb3g4v3rvan-HxsBxyfv2h0UKvpsH927004MDLp5b5TJepSZuZTEZCif1ifiUKYpC" alt="Tottenham 4 Motherwell 0: Kulusevski scores one and assists two as ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>HARRY KANE and Heung Min Son have spearheaded Tottenham&#39;s attack for several years - but in Dejan Kulusevski they have an absolute star.The Sweden int.</p></div>
            </div>
        </a><a href='https://cartilagefreecaptain.sbnation.com/2022/12/9/23501541/tottenham-motherwell-friendly-matt-doherty-brace-goals-bryan-gil-dejan-kulusevski-hotspur-way'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Tottenham 4-0 Motherwell: Matt Doherty brace powers Spurs to ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQUp4Q3Pf4lSCUE1kS2cyNeIewlOFCzPk-f14DhdXbpTPIEUE7KkE0IiL-D9-atvJWScARpvw9x" alt="Tottenham 4-0 Motherwell: Matt Doherty brace powers Spurs to ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Tottenham Hotspur&#39;s men&#39;s team returned to action today, sort of, taking on Scottish Premier League side Motherwell in a mid-season friendly at Hotspur Way.</p></div>
            </div>
        </a><a href='https://www.thesun.ie/sport/football/9876966/tottenham-fans-djed-spence-motherwell/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Tottenham fans all say the same thing as frozen out Djed Spence ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRWDv-KMgGd0XlFZp-pjkOrm-k8-I1b9OVnyuD8HXBqcJC6gBSPBqF9dIAqjbh9LJvgCzfL_GCp" alt="Tottenham fans all say the same thing as frozen out Djed Spence ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>WITH Tottenham in action during the World Cup Djed Spence was given a prime opportunity to impress Antonio Conte against Motherwell.Despite fellow rig.</p></div>
            </div>
        </a><a href='https://www.msn.com/en-gb/sport/football/tottenham-vs-motherwell-first-half-ratings-kulusevski-doherty-and-gil-score-as-spence-shines/ar-AA155CZx'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Tottenham vs Motherwell first half ratings: Kulusevski, Doherty and ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTXD5OHg75BS-MMuvRO6Nb21LiEKwJbZgmB15jQ1z2VWXpDSY_WYJpBt2MiOR3OTCi4VYvYJ-s2" alt="Tottenham vs Motherwell first half ratings: Kulusevski, Doherty and ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Here are our Tottenham player ratings as they lead Motherwell 3-0 at the break in the friendly match at Hotspur Way.</p></div>
            </div>
        </a>
        </Template></>;
}