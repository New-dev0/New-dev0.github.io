import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>BSF</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,BSF"/>
        <meta name="description" content="Trending News about BSF" /></Head><Template>
            <h1 style={{fontSize: "30"}}>BSF</h1>
            <Image width={800} height={500} src="" alt="BSF"/>
            <h3>Recent News</h3>
            <a href='https://theprint.in/india/bsf-adg-reviews-security-situation-along-international-border-in-jammu/1216857/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>BSF ADG reviews security situation along International Border in ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="BSF ADG reviews security situation along International Border in ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Jammu, Nov 15 (PTI) BSF Additional Director General, Western Command, P V Rama Sastry has reviewed the security situation, including challenges related to&nbsp;...</p></div>
            </div>
        </a><a href='https://www.hindustantimes.com/cities/chandigarh-news/bsf-adg-reviews-security-scenario-along-indo-pak-border-101668448370266.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>BSF ADG reviews security scenario along Indo-Pak border</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQb0k2ww1fCKVTJazZmvsWNa4xmKgfjdhp1mqoPTgTfUYpfFhIVvrLU-zx-qoQo770NprPTDjrH" alt="BSF ADG reviews security scenario along Indo-Pak border" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Additional director general of the BSF&#39;s western command P V Rama Sastry later met LG Manoj Sinha at Raj Bhavan and briefed him about the current security&nbsp;...</p></div>
            </div>
        </a><a href='https://www.greaterkashmir.com/todays-paper/jammu-todays-paper/adg-bsf-western-command-visits-jammu-border'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ADG BSF Western Command visits Jammu Border</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRxoSamteHYezgmNar2hNvYMhIKw1JXhQdHy769u8M1M7BluNFtgwVod8AfBOh6BrZjTH-jAIcX" alt="ADG BSF Western Command visits Jammu Border" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Jammu: Additional Director General, Western Command, Chandigarh, P V Rama Sastry today arrived at Jammu Frontier on his three day visit of International&nbsp;...</p></div>
            </div>
        </a><a href='https://www.thestatesman.com/india/adg-bsf-reviews-border-security-in-jk-1503131059.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ADG-BSF reviews border security in J&amp;K</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRZhpYpm6eI_wGcq3EXpP25V5y31ZtTbNslScNwm0d09byjldbFlKDLBPm_7koSmiHgZnazvgHf" alt="ADG-BSF reviews border security in J&amp;K" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>DK Boora, IG Jammu Frontier, made a detailed presentation to the ADG covering all the critical aspects of border security and domination on Jammu IB.</p></div>
            </div>
        </a><a href='https://www.latestly.com/agency-news/india-news-bsf-additional-dg-reviews-security-scenario-along-international-border-in-jammu-4459260.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>India News | BSF Additional DG Reviews Security Scenario Along ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQbxS-3aEMr_I138Kqe02TkKfFIrklnyH0zeuPcn-RELo4sD957E0WEVClCgBgiHxW3kj3ZQaR6" alt="India News | BSF Additional DG Reviews Security Scenario Along ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Get latest articles and stories on India at LatestLY. Additional Director General (ADG) of BSF&#39;s western command, P V Rama Sastry, arrived here on Monday&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}