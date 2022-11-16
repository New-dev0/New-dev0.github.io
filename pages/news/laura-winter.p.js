import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Laura Winter</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Laura Winter"/>
        <meta name="description" content="Trending News about Laura Winter" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Laura Winter</h1>
            <Image width={800} height={500} src="https://www.radiohamburg.de//assets/fallback/fallback_1x1.jpg" alt="Laura Winter"/>
            <h3>Recent News</h3>
            <a href='https://www.radiohamburg.de/aktuelles/fussball-wm/Sky-Moderatorin-Laura-Winter-berichtet-f%C3%BCr-euch-aus-Katar-id778460.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sky-Moderatorin Laura Winter berichtet für euch aus Katar</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS3V8vTPfsFwwXrYknY2nSikICn9mcfl8hKHlAIyt9bdxIM8Dlj5xf24Y695kZwIhKf-yJ55Drt" alt="Sky-Moderatorin Laura Winter berichtet für euch aus Katar" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Während bei uns der Glühwein fließt, rollt in Katar vom 20. November bis 18. Dezember 2022 bei der Fußball-Weltmeisterschaft der Ball.</p></div>
            </div>
        </a>
        </Template></>;
}