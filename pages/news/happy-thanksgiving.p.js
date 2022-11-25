import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Happy Thanksgiving</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Happy Thanksgiving"/>
        <meta name="description" content="Trending News about Happy Thanksgiving" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Happy Thanksgiving</h1>
            <Image width={800} height={500} src="https://media.defense.gov/2022/Nov/24/2003120883/2000/2000/0/221124-F-GR961-1008.JPG" alt="Happy Thanksgiving"/>
            <h3>Recent News</h3>
            <a href='https://www.ramstein.af.mil/News/Article-Display/Article/3227915/happy-thanksgiving-ramstein/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Happy Thanksgiving, Ramstein</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT9Oc96xu7DDbb226rexajBHm4XozEJE31CVpwo-4PAktiwUjEc4Z3IJVCGt0Phc25unMDQ_Vyg" alt="Happy Thanksgiving, Ramstein" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>U.S. Air Force Master Sgt. Teve Molioo, 786th Force Support Squadron first sergeant, carves a Thanksgiving turkey in the Rheinland Inn Dining Facility at&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}