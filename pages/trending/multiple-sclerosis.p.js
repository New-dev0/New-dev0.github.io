import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Multiple sclerosis</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Multiple sclerosis"/>
        <meta name="description" content="Trending News about Multiple sclerosis" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Multiple sclerosis</h1>
            <Image width={800} height={500} src="" alt="Multiple sclerosis"/>
            <h3>Recent News</h3>
            <a href='https://multiplesclerosisnewstoday.com/news-posts/2022/10/25/risk-ms-relapse-mri-activity-after-stopping-dmt/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Risk of MS Relapse, MRI Activity After Stopping a DMT Analyzed ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT4CTkboAuNn5tdFle8oSzT3W9BZcU0ArspTARP5Wy9IC32R5Vu7DQ8GFDSjyBSjVx6pG6pFF-l" alt="Risk of MS Relapse, MRI Activity After Stopping a DMT Analyzed ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>When multiple sclerosis (MS) patients stop their disease-modifying treatment, the risk of relapses and disease activity on MRI scans is higher among&nbsp;...</p></div>
            </div>
        </a><a href='https://multiplesclerosisnewstoday.com/news-posts/2022/10/25/iv-ofatumumab-reduces-relapses-but-not-better-than-kesimpta/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>IV Ofatumumab Stops MS Relapses, But Not Better Than Kesimpta ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTcXWbnRFaTPA3U9PBl1yw2J5ImVA-U8uUPMd_z4l125K3_ByLLL7q1lsXreZqOo24dipf79E9f" alt="IV Ofatumumab Stops MS Relapses, But Not Better Than Kesimpta ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>An into-the-vein formulation of ofatumumab reduced relapse rates for MS patients, but not by as much as the approved under-the-skin Kesimpta.</p></div>
            </div>
        </a>
        </Template></>;
}