import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Sean Quinn</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Sean Quinn"/>
        <meta name="description" content="Trending News about Sean Quinn" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Sean Quinn</h1>
            <Image width={800} height={500} src="https://cdn.fermanaghherald.com/wp-content/uploads/2015/09/07161827/Sean-Quinn-01.jpg" alt="Sean Quinn"/>
            <h3>Recent News</h3>
            <a href='https://fermanaghherald.com/2022/11/landmark-sean-quinn-documentary-to-air-next-week/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Landmark Sean Quinn documentary to air next week - The ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQDYY4RVVc0cWqISrqAC75V-vrGL4m1Bsi7SAr0w19DiciIkTT25NxdFdBTZjxK4tcVXgyat5db" alt="Landmark Sean Quinn documentary to air next week - The ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>RTE have announced today &#39;Quinn Country&#39;, the long-awaited landmark documentary series on the rise and fall of Seán Quinn, will air on RTE One next week.</p></div>
            </div>
        </a><a href='https://www.impartialreporter.com/news/23150300.sean-quinn-documentary-air-next-week/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sean Quinn documentary to air next week</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTzvo9vKyjA_8ucSE7FfvG4v855bumHXlzsFjOx_kw2JXPAOZTWi1LqvA_hfiWeDntR5zKSI2eM" alt="Sean Quinn documentary to air next week" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>This coming week, RTÉ will broadcast a landmark documentary series detailing the rise and fall of Seán Quinn and the repercussions for &#39;Quinn…</p></div>
            </div>
        </a><a href='https://extra.ie/2022/11/25/entertainment/movies-tv/sean-quinn-docuseries'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>RTE Announced Docu-Series On Sean Quinn</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSUKiXxQJ3neN_yHhGSjD_8xsBQ-ctvNuLmf7MvqQw2RkbUQ5QtstLhAkjTw_8e3bA0krJexYP4" alt="RTE Announced Docu-Series On Sean Quinn" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>RTÉ are set to broadcast a landmark documentary series detailing the rise and fall of former businessman Seán Quinn and the repercussions for &#39;Quinn&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}