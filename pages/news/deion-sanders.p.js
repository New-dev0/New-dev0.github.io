import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Deion Sanders</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Deion Sanders"/>
        <meta name="description" content="Trending News about Deion Sanders" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Deion Sanders</h1>
            <Image width={800} height={500} src="https://a1.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F0519%2Fr1014946_1296x729_16%2D9.jpg" alt="Deion Sanders"/>
            <h3>Recent News</h3>
            <a href='https://www.espn.com/college-football/story/_/id/35168153/sources-deion-sanders-preparing-accept-colorado-coaching-job'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sources - Deion Sanders preparing to accept Colorado coaching job</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRB3-RkbPDT1daU01O6HsB4VWYMdBHQAXS6Iti8_g5x8PhG_yl1X8zQCuA9MDeHzr8kFM6FI4Bc" alt="Sources - Deion Sanders preparing to accept Colorado coaching job" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Jackson State coach Deion Sanders is preparing to take the head coaching job at Colorado, sources told ESPN.</p></div>
            </div>
        </a><a href='https://www.si.com/college/2022/12/03/deion-sanders-colorado-coaching-rumors-jackson-state'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sources: Colorado Preparing for Deion Sanders&#39;s Arrival ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRsvbnIOvjX38JEe5RWvzNNtau8xQJD3JflZrwZogMUxhTFiK9Ocsratzjd9PWyaT3OFBSHeyJ6" alt="Sources: Colorado Preparing for Deion Sanders&#39;s Arrival ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The school expects him to land in Boulder Saturday and become the Buffaloes&#39; next head coach.</p></div>
            </div>
        </a><a href='https://www.cbssports.com/nfl/news/cowboys-owner-jerry-jones-says-deion-sanders-is-capable-of-becoming-an-nfl-head-coach/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Cowboys owner Jerry Jones says Deion Sanders is capable of ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTNyRhk7JC_2EbcUZ91TXxzCxbDAOOdG_vjc-Pyk5kU-OL82m7WwvJHpvxDQDxR1N8Is9jGvPB7" alt="Cowboys owner Jerry Jones says Deion Sanders is capable of ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sanders, who played five NFL seasons in Dallas, is expected to become the next head coach at Colorado.</p></div>
            </div>
        </a><a href='https://footballscoop.com/news/deion-sanders-colorado-willie-simmons-charles-kelly'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Names emerge as potential staff additions if Deion Sanders accepts ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTgokjO9gL8dx57e5LC0C5jv8c04Gw72inI03Rqa3Oqf9iQ-IeWl3A4u4HCZKjoJZ-3HrpQlO5p" alt="Names emerge as potential staff additions if Deion Sanders accepts ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sources throughout the week have indicated to FootballScoop that Sanders is expected to accept the head coaching post at the University of Colorado, which&nbsp;...</p></div>
            </div>
        </a><a href='https://milehighsports.com/report-deion-sanders-ready-to-accept-cu-football-head-coach-job/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Report: Deion Sanders ready to accept CU football head coach job</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQk5RwJEnKzAneThufxQG0V11nWTY3m5DWgoM9hTzSKYbgY9m_G6DPPEsH1sNK44WSnDMOVghSd" alt="Report: Deion Sanders ready to accept CU football head coach job" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Following the SWAC championship game on Saturday, Deion Sanders is expected become the next football coach for the CU Buffs.</p></div>
            </div>
        </a><a href='https://www.denverpost.com/2022/12/03/deion-sanders-cu-buffs-football-coach-contract/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Deion Sanders over the line? CU regents planning to discuss new ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSF7KE7TMkOnIXpf1ytoRdcFXR_8AnpK8HhaiLJwz54cqpigkbc3ND-lnq3Irc-J7mH_4jtYI2W" alt="Deion Sanders over the line? CU regents planning to discuss new ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sanders, the NFL icon and current Jackson State coach, has been offered a multi-year contract by the Buffs worth at least $4.5 million annually.</p></div>
            </div>
        </a>
        </Template></>;
}