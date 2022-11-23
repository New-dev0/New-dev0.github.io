import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Hervé Renard</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Hervé Renard"/>
        <meta name="description" content="Trending News about Hervé Renard" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Hervé Renard</h1>
            <Image width={800} height={500} src="https://www.4-4-2.com/wp-content/uploads/2022/11/Herve-Renard-Imago-1000.jpg" alt="Hervé Renard"/>
            <h3>Recent News</h3>
            <a href='https://www.4-4-2.com/weitere/argentinien/pausenansprache-saudi-coach-herve-renard-argentinien/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>So emotional war die Pausenansprache von Saudi-Coach Hervé ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS11Xz2ClcOeYQMYjIDmxPAYgZV-RZh1_8g-m1FEIIuxfARyY5TjRWihQm5nra4e2bXF_p9eFfY" alt="So emotional war die Pausenansprache von Saudi-Coach Hervé ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Saudi-Arabien schlägt Argentinen zum WM-Auftakt sensationell mit 2:1. Grossen Anteil daran hat zweifellos auch der französische Trainer Hervé Renard, der seine&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}