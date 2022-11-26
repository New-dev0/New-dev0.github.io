import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>PEPPA Pig</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,PEPPA Pig"/>
        <meta name="description" content="Trending News about PEPPA Pig" /></Head><Template>
            <h1 style={{fontSize: "30"}}>PEPPA Pig</h1>
            <Image width={800} height={500} src="https://www.thesun.ie/wp-content/uploads/sites/3/2022/11/NINTCHDBPICT000712685314.jpg?strip=all&quality=100&w=1920&h=1080&crop=1" alt="PEPPA Pig"/>
            <h3>Recent News</h3>
            <a href='https://www.thesun.ie/travel/9787012/peppa-pig-world-florida-theme-park-inside/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>I visited the brand new Peppa Pig World – here&#39;s how it compares to ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQy5mNH8i2WX1ekib9sPsHal2PeuFMzFLPRCPFlVmZKTajbWUDazC2x6OpJ1GgMPxD2FSQRQnxb" alt="I visited the brand new Peppa Pig World – here&#39;s how it compares to ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>PEPPA Pig has arrived in Florida and is luring families away from Disney World with her very own theme park.Having opened earlier this year, I decided.</p></div>
            </div>
        </a>
        </Template></>;
}