import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Indian space research organisation</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Indian space research organisation"/>
        <meta name="description" content="Trending News about Indian space research organisation" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Indian space research organisation</h1>
            <Image width={800} height={500} src="https://assets.telegraphindia.com/telegraph/2022/Dec/1670597161_nandini-harinath.jpg" alt="Indian space research organisation"/>
            <h3>Recent News</h3>
            <a href='https://www.telegraphindia.com/india/in-days-to-come-meetings-may-be-held-in-space-isro-scientist/cid/1902963'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>In days to come, meetings may be held in space: ISRO scientist</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQKNOCrM5EOrd7qTtdYtedsOgwMfEibc3T1ECecwUhjMwUzhQUTQQmcmFEMa6ukO3lwekDHtmz0" alt="In days to come, meetings may be held in space: ISRO scientist" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Space is now open for commercial start-ups, says eminent rocket scientist Nandini Harinath.</p></div>
            </div>
        </a>
        </Template></>;
}