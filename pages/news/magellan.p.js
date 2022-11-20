import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Magellan</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Magellan"/>
        <meta name="description" content="Trending News about Magellan" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Magellan</h1>
            <Image width={800} height={500} src="https://cdn-a.prisma.de/data/img/teleschau/4220/42196347_31dde86943e2314c4d004b1fd3da35ff.jpg" alt="Magellan"/>
            <h3>Recent News</h3>
            <a href='https://www.prisma.de/news/tv/Die-abenteuerliche-Weltreise-des-Magellan-sehenswerte-Doku-bei-ARTE,42196352'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Die abenteuerliche Weltreise des Magellan&quot;: sehenswerte Doku bei ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS3qoQ0ZTFTSo7pHlC5H2Oj7skSAh78_Z2_aNa0Sk-XKU3WuMc-m5JBi8X_0rpWj-cdmhASR-sU" alt="&quot;Die abenteuerliche Weltreise des Magellan&quot;: sehenswerte Doku bei ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Er wollte den Seeweg durch den amerikanischen Kontinent entdecken und läutete so die erste Weltumsegelung ein – auch wenn er selbst die Umrundung nicht mehr&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}