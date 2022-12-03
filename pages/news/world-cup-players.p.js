import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>World Cup players</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,World Cup players"/>
        <meta name="description" content="Trending News about World Cup players" /></Head><Template>
            <h1 style={{fontSize: "30"}}>World Cup players</h1>
            <Image width={800} height={500} src="https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2022-12/221202-world-cup-medic-spray-ew-415p-4af8cb.jpg" alt="World Cup players"/>
            <h3>Recent News</h3>
            <a href='https://www.nbcnews.com/health/health-news/magic-spray-world-cup-soccer-rcna59872'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>What is the &#39;magic spray&#39; World Cup players use, and does it work?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRPQ-D79gXT-mSdln8ml1Khvo2-_Nn3t0OeOYrs6gpPYXJ7wMRLSm-p1p2g3n2ahvWtUR_cdhZ8" alt="What is the &#39;magic spray&#39; World Cup players use, and does it work?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>What&#39;s in the bottle varies from brand to brand, but the sprays usually contain ethyl chloride, a prescription medication used as a topical antiseptic and&nbsp;...</p></div>
            </div>
        </a><a href='https://www.nytimes.com/2022/12/02/sports/soccer/us-world-cup-team-soccer-diversity.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The U.S. World Cup Team Is Notably Diverse, but the Pipeline ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQUbSNIM4jPHfcWunCKcGCeM6VxzPOnoUtI3DiFpDVTNmh3eJMZtPWA-Q3ziQbd8_FIfyGUifbb" alt="The U.S. World Cup Team Is Notably Diverse, but the Pipeline ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>You may well have never heard of him, but Desmond Armstrong is a pioneer. In 1990, he became the first Black player born in the United States to represent&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}