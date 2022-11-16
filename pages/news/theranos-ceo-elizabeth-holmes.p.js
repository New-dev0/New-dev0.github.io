import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Theranos CEO elizabeth Holmes</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Theranos CEO elizabeth Holmes"/>
        <meta name="description" content="Trending News about Theranos CEO elizabeth Holmes" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Theranos CEO elizabeth Holmes</h1>
            <Image width={800} height={500} src="https://assets.entrepreneur.com/content/3x2/2000/1668522309-GettyImages-1181871591.jpg" alt="Theranos CEO elizabeth Holmes"/>
            <h3>Recent News</h3>
            <a href='https://www.entrepreneur.com/business-news/what-happened-to-elizabeth-holmes-sentencing-net-worth/439137'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>What Happened to Theranos CEO Elizabeth Holmes? Everything ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSLFHDC96LBACILpzz1nmLH5U-3mVbTu1DBLQUjgoIRfXFPzU5GKxChF5pp-9MfPDcjJH3qmK5W" alt="What Happened to Theranos CEO Elizabeth Holmes? Everything ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>See everything to know about Theranos founder and CEO Elizabeth Holmes from her legal battle to where she is now.</p></div>
            </div>
        </a>
        </Template></>;
}