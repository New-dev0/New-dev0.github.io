import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Kelly Khumalo</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Kelly Khumalo"/>
        <meta name="description" content="Trending News about Kelly Khumalo" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Kelly Khumalo</h1>
            <Image width={800} height={500} src="https://cdn.24.co.za/files/Cms/General/d/7687/4a2b18e0179b4602952fb5432c621a96.jpg" alt="Kelly Khumalo"/>
            <h3>Recent News</h3>
            <a href='https://www.news24.com/truelove/celebrity/gallery-a-peek-inside-kelly-khumalos-38th-birthday-celebration-20221115'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>GALLERY | A peek inside Kelly Khumalo&#39;s 38th birthday celebration</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS_FwNypxRnGz6-YPOevJzSjL_InPg9UKAJZE6mzle93QzPvUOQREEB-qG9-6-iGoVW1nWk11qq" alt="GALLERY | A peek inside Kelly Khumalo&#39;s 38th birthday celebration" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The luxurious red and gold-themed party was decorated by celebrity events planner Nono Events, while her cake was made by the celebrated Chef Zondi.</p></div>
            </div>
        </a>
        </Template></>;
}