import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Phillip Schofield</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Phillip Schofield"/>
        <meta name="description" content="Trending News about Phillip Schofield" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Phillip Schofield</h1>
            <Image width={800} height={500} src="https://cdn.images.express.co.uk/img/dynamic/20/1200x712/4428761.jpg?r=1669740077706" alt="Phillip Schofield"/>
            <h3>Recent News</h3>
            <a href='https://www.express.co.uk/showbiz/tv-radio/1702930/Phillip-Schofield-step-in-China-row-This-Morning'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Phillip Schofield forced to step in as China row erupts on This Morning</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTHI-DECZtb75tdgwF2qqVqlB_-sTRCovNVYafwcCspXEbqpFZKK_xDn6tLeSuXaT49BVTTkI4h" alt="Phillip Schofield forced to step in as China row erupts on This Morning" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Phillip Schofield was forced to step in during Tuesday&#39;s This Morning after a clash with Camilla Tominey and Matthew Wright got out of hand.</p></div>
            </div>
        </a>
        </Template></>;
}