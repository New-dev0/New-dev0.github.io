import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Indian cricket team</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Indian cricket team"/>
        <meta name="description" content="Trending News about Indian cricket team" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Indian cricket team</h1>
            <Image width={800} height={500} src="https://img.mensxp.com/media/content/2022/Sep/Social-Image---Final-2_6335a3913cf3c.jpeg" alt="Indian cricket team"/>
            <h3>Recent News</h3>
            <a href='https://www.mensxp.com/sports/cricket/118540-angry-indian-fans-turned-violent-stone-pelting-effigy-burnt.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;Stone Pelting To Effigy Burning&#39; 5 Times Angry Indian Cricket Fans ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTCE6sKL-GpDrcHlgwRF7I7ZyXoQYWo_-pKptDNM7ck25Rha1rwU7T44C_urzGsqh1QwdtZ7ooJ" alt="&#39;Stone Pelting To Effigy Burning&#39; 5 Times Angry Indian Cricket Fans ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Over the years, there have been numerous instances of Indian fans becoming a problem for the authorities while protesting against the Men in Blue.</p></div>
            </div>
        </a>
        </Template></>;
}