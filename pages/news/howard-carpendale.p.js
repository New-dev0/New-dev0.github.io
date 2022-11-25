import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Howard Carpendale</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Howard Carpendale"/>
        <meta name="description" content="Trending News about Howard Carpendale" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Howard Carpendale</h1>
            <Image width={800} height={500} src="https://www.regioactive.de/static/image/i/947159" alt="Howard Carpendale"/>
            <h3>Recent News</h3>
            <a href='https://www.regioactive.de/news/2022/11/24/es-ist-sein-leben-howard-carpendale-geht-2024-auf-deutschlandtour-fGVT2hptz6'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Es ist sein Leben: Howard Carpendale geht 2024 auf Deutschlandtour</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT1ZsPHl-JX6G16G7bFTlkFSecLp-NI3zoONCIUHRCVMv6lcqSQprx4rqqJHbHK0ezjFJ-qs6cq" alt="Es ist sein Leben: Howard Carpendale geht 2024 auf Deutschlandtour" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Howard Carpendale hat für Mai 2024 seine nächste Tour unter dem Titel &quot;Das ist mein Leben - die Tournee&quot; angekündigt. In dieser Zeit wird er in 14&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}