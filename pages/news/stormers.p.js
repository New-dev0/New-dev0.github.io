import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Stormers</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Stormers"/>
        <meta name="description" content="Trending News about Stormers" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Stormers</h1>
            <Image width={800} height={500} src="https://cdn.24.co.za/files/Cms/General/d/7788/f2b4bb8cdf3343d8a6997b6cde0eaa99.jpg" alt="Stormers"/>
            <h3>Recent News</h3>
            <a href='https://www.news24.com/sport/rugby/unitedrugbychampionship/defending-champion-stormers-show-off-depth-carve-scarlets-apart-in-first-half-blitz-20221125'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Defending champion Stormers show off depth, carve Scarlets apart ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTQDUw-rIzdx4cpvnlxh7RerJloB685aU-PZSIpwMDmjAyaxuh_ta9jNsfnwKZ-eupujtp-Ab7R" alt="Defending champion Stormers show off depth, carve Scarlets apart ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Stormers flexed their muscles, showing the depth they have in trouncing Wales&#39; Scarlets at Cape Town Stadium in a one-side United Rugby Championship&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sarugbymag.co.za/stormers-punish-sleepy-scarlets/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Stormers punish sleepy Scarlets</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQF_F8kLzjthDa8fhq6YH-KIWzP-37l2UhJbzFeUPb1t9H6dXfZUo7sYxuz7Gh7TCy70ayDru4I" alt="Stormers punish sleepy Scarlets" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The DHL Stormers marked the return of the Vodacom United Rugby Championship with a sensational performance earning the hosts a bonus-point victory over&nbsp;...</p></div>
            </div>
        </a><a href='https://www.rugbypass.com/news/scarlets-beaten-again-after-stormers-dominate-first-half-scoring-in-cape-town/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Scarlets beaten again after Stormers dominate first-half scoring in ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRSbc8qHKzY6L2dUYYeq2gukc2MbJVHKgAvUg5Xr5t9jSho_b3QswJYnutawr8lLjr4oeiVPXtM" alt="Scarlets beaten again after Stormers dominate first-half scoring in ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Scarlets&#39; first-half failings cost them dear as they slipped to a 36-19 defeat against a weakened Stormers side.</p></div>
            </div>
        </a><a href='https://supersport.com/rugby/united-rugby-championship/news/a370f2e9-cc06-49ff-b7f2-2256cd8c3250/stormers-pass-depth-test-with-flying-colours'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Stormers pass depth test with flying colours | SuperSport</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSMx9o8Il9EsvH55MKMv1JHesF9yWjFJwVx6Y_aDZ9lQUsvD0lVl8n7yndMKcDEZQaDL5RHyynG" alt="Stormers pass depth test with flying colours | SuperSport" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The DHL Stormers made a resounding success of their test of depth as a first-half tidal wave set up a comprehensive 36-19 Vodacom United Rugby Championship&nbsp;...</p></div>
            </div>
        </a><a href='https://www.timeslive.co.za/sport/rugby/2022-11-26-stormers-coach-dobson-happy-with-squads-depth-ahead-of-champions-cup/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Stormers coach Dobson happy with squad&#39;s depth ahead of ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQtoNTWCug5_NaRIgg3kJ7oG8dOKfRPhroiZOe9s_m9I5tPs0Jbnvu02WkOzjXUswA8xOg96XEu" alt="Stormers coach Dobson happy with squad&#39;s depth ahead of ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Stormers coach John Dobson is pleased with the depth of his squad as the European Champions Cup looms large for top South African rugby franchises.</p></div>
            </div>
        </a><a href='https://www.iol.co.za/sport/rugby/urc/stormers-score-five-tries-in-bonus-point-win-over-scarlets-in-urc-f4ea96a5-4ca7-42eb-8737-0bcbe345eed5'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Stormers score five tries in bonus point win over Scarlets in URC</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRKt6lgzbcDQn-3tFq7HMByM1w64YtExlZp5WWXH2Qv11PtF9--t5uQG9p3sn9E-WlsJLqm4zYO" alt="Stormers score five tries in bonus point win over Scarlets in URC" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Stormers ran in five tries as they picked up a bonus point win during their United Rugby Championship clash against Scarlets in Cape Town on Friday.</p></div>
            </div>
        </a><a href='https://www.bbc.co.uk/sport/rugby-union/63760871'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Scarlets slump to convincing defeat by Stormers</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQjgd6KVXupRewBpjgF4tquFIGN26iFOo4MTJ_Cy60COnt5H__lyFzJq-h1s4WdxXPU3jnDUTcC" alt="Scarlets slump to convincing defeat by Stormers" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ryan Conbeer scores twice but Scarlets leave empty handed from Cape Town against the defending URC champions.</p></div>
            </div>
        </a>
        </Template></>;
}