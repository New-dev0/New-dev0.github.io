import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Andrea Corr</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Andrea Corr"/>
        <meta name="description" content="Trending News about Andrea Corr" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Andrea Corr</h1>
            <Image width={800} height={500} src="https://i2-prod.rsvplive.ie/incoming/article28649594.ece/ALTERNATES/s1200/0_GettyImages-88432363.jpg" alt="Andrea Corr"/>
            <h3>Recent News</h3>
            <a href='https://www.rsvplive.ie/news/celebs/andrea-corr-appreciates-financial-independence-28649632'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Andrea Corr appreciates financial independence in marriage to ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQYvZ1NZonAg1OxQV3UssXrngI1y9O7ASWMwzAuCGyGavBRfN8ZKsGZjZtdkUntnR3_cVTFUtT4" alt="Andrea Corr appreciates financial independence in marriage to ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The talented singer opened up about her marriage to private husband after the couple tied the knot in a glamorous and star-studded ceremony in County Clare&nbsp;...</p></div>
            </div>
        </a><a href='https://www.thesun.ie/tvandshowbiz/music/9843114/andrea-corr-shock-challenge-comeback-new-priority/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>We had to work extra hard to be taken seriously for crucial reason ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSbvUo9nXr-EnB8EIF1kCvKOuiACM4gkkTv15eB6IECH1Gxw08jI0EitLd_bJcQuKGc0H9z5hFp" alt="We had to work extra hard to be taken seriously for crucial reason ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ANDREA Corr has revealed how The Corrs struggled for recognition due to the girls&#39; stunning looks and how it is only now in middle age they are get.</p></div>
            </div>
        </a>
        </Template></>;
}