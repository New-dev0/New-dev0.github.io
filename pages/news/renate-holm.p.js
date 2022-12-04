import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Renate Holm</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Renate Holm"/>
        <meta name="description" content="Trending News about Renate Holm" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Renate Holm</h1>
            <Image width={800} height={500} src="https://i.ds.at/cpR1jA/rs:fill:1200:600/plain/2022/12/02/renateholm1.jpg" alt="Renate Holm"/>
            <h3>Recent News</h3>
            <a href='https://www.derstandard.at/story/2000141445406/versteigerung-der-verlassenschaft-frau-holm-wohnt-hier-nicht-mehr'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Versteigerung der Verlassenschaft: Frau Holm wohnt hier nicht mehr</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS0STktYsNZrzZNx9Wk46lwzOdjHYRVkCurEb6fWQ91w8fMCj5oOv2Nu7F5kY1GOPdCkAA_AG3r" alt="Versteigerung der Verlassenschaft: Frau Holm wohnt hier nicht mehr" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Im Frühjahr ist die Kammersängerin Renate Holm verstorben. Möbel, Erinnerungen und Kuriositäten wurden nun versteigert. Ein posthumer Hausbesuch.</p></div>
            </div>
        </a>
        </Template></>;
}