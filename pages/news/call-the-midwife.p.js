import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Call the Midwife</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Call the Midwife"/>
        <meta name="description" content="Trending News about Call the Midwife" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Call the Midwife</h1>
            <Image width={800} height={500} src="https://i2-prod.mirror.co.uk/incoming/article28652476.ece/ALTERNATES/s1200/0_358531Call-the-Midwife-S11.jpg" alt="Call the Midwife"/>
            <h3>Recent News</h3>
            <a href='https://www.irishmirror.ie/tv/call-midwife-stars-were-left-28653684'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Call the Midwife stars were left &#39;feeling sick&#39; as they filmed Rivers of ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcReq7k3O1ji0xy25Hy3vlnAt86v8kC5bktcJ3xGU7tWP-l-Uu2YBJOkUWgtc9V4T6KLJF1pQTpi" alt="Call the Midwife stars were left &#39;feeling sick&#39; as they filmed Rivers of ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Filming scenes that showed the impact of Conservative MP Enoch Powell&#39;s infamous Rivers of Blood speech left Call the Midwife stars &#39;feeling sick&#39;,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}