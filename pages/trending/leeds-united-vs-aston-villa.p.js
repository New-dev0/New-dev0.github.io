import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Leeds United vs Aston Villa</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Leeds United vs Aston Villa"/>
        <meta name="description" content="Trending News about Leeds United vs Aston Villa" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Leeds United vs Aston Villa</h1>
            <Image width={800} height={500} src="" alt="Leeds United vs Aston Villa"/>
            <h3>Recent News</h3>
            <a href='https://www.goal.com/en-in/news/leeds-united-vs-aston-villa-predictions-tips-and-betting-odds/bltc1c7e0d3cc1699cd'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Leeds United vs Aston Villa: Predictions, tips &amp; betting odds</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSKGHL7_5rctrqF7gFq-mViAk2d0tefiwudNNov-6OOKuBeHy0rjNHxesZmG--hugHXOhGX28gZ" alt="Leeds United vs Aston Villa: Predictions, tips &amp; betting odds" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Leeds United host Aston Villa on Sunday afternoon in the Premier League with Jesse Marsch&#39;s side aiming to get back to winning ways.</p></div>
            </div>
        </a><a href='https://www.leedsunited.com/news/team-news/30435/live-updates-leeds-united-vs-aston-villa'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Report: Leeds United 0-0 Aston Villa</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQLbxg9PiExuM5cvtH0k37HFSKo_1xvPkgcz_VCVYT07mobiZwW5B4FVb6uoi45me4PUt_I5-tjyQ" alt="Report: Leeds United 0-0 Aston Villa" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A goalless draw at Elland Road. Premier League. Leeds United 0. Aston Villa 0. Leeds: Meslier (GK), Koch, Cooper (C),&nbsp;...</p></div>
            </div>
        </a><a href='https://www.theguardian.com/football/live/2022/oct/02/leeds-united-v-aston-villa-premier-league-live'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Leeds United 0-0 Aston Villa: Premier League — as it happened</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQsdBHcYqPQIGNxVcJneFGhIyjqt9X_wX4Im-4DcIVMQ-j4jlk7uXZ4Dlt4_K8is7EMxozCtWgR" alt="Leeds United 0-0 Aston Villa: Premier League — as it happened" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Leeds maintained their unbeaten home record but Aston Villa will rue not taking advantage of Luis Sinisterra&#39;s red card reducing Leeds to ten men.</p></div>
            </div>
        </a><a href='https://www.espn.com/soccer/report/_/gameId/637906'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Leeds United vs. Aston Villa - Football Match Report - October 2 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRIp_4xeoNjjFpaQvNSBiryqeap24mgJQ2ZYpikYzvlVXNTR2SjfCzm3bzn6QXY_6swxH7cnL9m" alt="Leeds United vs. Aston Villa - Football Match Report - October 2 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Get a report of the Leeds United vs. Aston Villa 2022-23 English Premier League football match.</p></div>
            </div>
        </a><a href='https://www.independent.co.uk/sport/football/leeds-united-aston-villa-live-stream-premier-league-2022-b2191005.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Leeds United vs Aston Villa LIVE: Premier League result, final score ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRZgrEkyg4duhZBu8aFzJS4sp-Tmgcs7hTj66vqqsX60eb1LctqeuqL1efqIvDXr9KcNIAIrfy0" alt="Leeds United vs Aston Villa LIVE: Premier League result, final score ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Re-live the action as Steven Gerrard&#39;s side failed to capitalise on Luis Sinisterra&#39;s red card for the hosts.</p></div>
            </div>
        </a><a href='https://www.avfc.co.uk/news/2022/october/02/leeds-united-v-aston-villa/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Leeds United 0-0 Aston Villa</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT8U392AOVpqLr1SFrtkxdEu5TVg9ZLVsPJWdRmU7hp0xjeApSz4PHTAppUS5BrF1vpkZQrzlb7" alt="Leeds United 0-0 Aston Villa" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>But there were further injury issues for Steven Gerrard as debutant Ludwig Augustinsson was forced off in the first half in West Yorkshire. 44%.</p></div>
            </div>
        </a>
        </Template></>;
}