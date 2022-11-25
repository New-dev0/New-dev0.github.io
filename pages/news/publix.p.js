import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Publix</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Publix"/>
        <meta name="description" content="Trending News about Publix" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Publix</h1>
            <Image width={800} height={500} src="https://npr.brightspotcdn.com/dims4/default/28c8778/2147483647/strip/true/crop/1486x780+44+0/resize/1200x630!/quality/90/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F5b%2F24%2F0faebe424c9dbd9ffc1c37fe0425%2Ftreasure-coast-food-bank-and-publix.jpg" alt="Publix"/>
            <h3>Recent News</h3>
            <a href='https://www.wqcs.org/wqcs-news/2022-11-24/treasure-coast-food-bank-receives-175-000-donation-from-publix'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Treasure Coast Food Bank Receives $175000 donation from Publix</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTWIOe3ScB65j5yX5pPr2-9DqUhEmALfTupM5QgVWFC_T_TR-jP2jOH83ajs0ttH-o1a3mYx5lR" alt="Treasure Coast Food Bank Receives $175000 donation from Publix" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Market Fresh on the Move&#39;s “grocery stores on wheels” are stocked with fresh produce, dairy and meats as well as pantry staples. They make regular stops in so-&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}