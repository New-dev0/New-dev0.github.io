import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Nigerian Army</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Nigerian Army"/>
        <meta name="description" content="Trending News about Nigerian Army" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Nigerian Army</h1>
            <Image width={800} height={500} src="https://radionigeria.gov.ng/wp-content/uploads/2022/12/Brigadier-General-Onyema-Nwachukwu-e1669902905539.jpg" alt="Nigerian Army"/>
            <h3>Recent News</h3>
            <a href='https://radionigeria.gov.ng/2022/12/01/army-to-review-operations-across-nigeria/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Army to review operations across Nigeria - FRCN HQ</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSttcPaD-gKL0zxa_vMwWJRLtaFAuGtauen918brVFeJT6iSF02A1IX_ZX8QFJ7tmSGNBRTt_Up" alt="Army to review operations across Nigeria - FRCN HQ" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Director, Army Public Relations, Brigadier General Onyema Nwachukwu stated this in Abuja during the news briefing on the fourth quarter Chief of Army Staff&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sunnewsonline.com/insecurity-army-to-review-operations-to-wipe-out-criminal-groups/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Insecurity: Army to review operations to wipe out criminal groups ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR7Bnpynnvg3glo91FN8SBx5jhwBJbpwQQyz32q5_k3eIExlPR1GP_PwG1vKxTtDTvqxXfonkXu" alt="Insecurity: Army to review operations to wipe out criminal groups ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>From Molly Kilete, Abuja. The Nigerian army said it is reviewing its operations to rout terrorists, bandits, kidnappers, separatist groups and other&nbsp;...</p></div>
            </div>
        </a><a href='https://von.gov.ng/coas-conference-army-demonstrates-capacity-against-external-aggressions/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>COAS Conference: Army Demonstrates Capacity Against External ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSz7E6vJeekur_v6EmKFWmBNfR0GCKJPx_22BAOQvI5k2-ddR_mXOCKycBDnLK0FPsaOyWgjs4m" alt="COAS Conference: Army Demonstrates Capacity Against External ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Chief of Army Staff (COAS) Annual Conference 2022 which was to be held in Sokoto State is expected to commence from 4th of December to 10th December 2022 at&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sunnewsonline.com/ipob-court-orders-police-dss-army-others-to-fish-out-killers-of-okoro-pa-to-nnamdi-kanus-lawyer/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>IPOB: Court orders Police, DSS, Army, others to fish out killers of ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTwdOTtMZQ2Ra2__YB2QGe2DzQ3H8Nv5C4SwcxiX4w8aN2SJ3LYpdehGm3cNN2BI2BZr_mN5-Dw" alt="IPOB: Court orders Police, DSS, Army, others to fish out killers of ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A Federal High Court has ordered the Nigeria Police Force and the Department of State Security Service, DSS), to fish out the killers of late Samuel Okoro&nbsp;...</p></div>
            </div>
        </a><a href='https://www.nannews.ng/2022/12/01/army-to-review-2022-operations-other-activities-at-coas-conference/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Army to review 2022 operations at COAS conference</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS-vSjzbbT0dwaihcaj0OxcBaU0NQmi8Jz4qwjS8VcHMTsk7drEBO6iD5v7hI7ZMZRtd-_Q-YQ1" alt="Army to review 2022 operations at COAS conference" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Nigerian Army is set to review its operational activities and take stock of its 2022 activities at the Chief of Army Staff Annual Conference in Sokoto.</p></div>
            </div>
        </a><a href='https://newnationalstar.com/army-to-review-operational-engagements-as-coas-annual-conference-opens-in-sokoto/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Army to Review Operational Engagements as COAS Annual ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTSUCSUmJaIKwISadUCImxdvT4GoUXIvrBuB8biC8YVWmVNEioXx6Z2uSa6VzvZhk2KVY4KCtQV" alt="Army to Review Operational Engagements as COAS Annual ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>By Lawrence Audu. All is now set for the Chief of Army Staff (COAS) Annual Conference 2022, which is expected to commence from 4<sup>th</sup> December to last till&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}