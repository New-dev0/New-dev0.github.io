import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>David Raum</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,David Raum"/>
        <meta name="description" content="Trending News about David Raum" /></Head><Template>
            <h1 style={{fontSize: "30"}}>David Raum</h1>
            <Image width={800} height={500} src="https://bmg-images.forward-publishing.io/2022/11/27/8ae56e39-904c-4bd3-9539-88df6d9d5db0.jpeg?rect=0%2C0%2C4000%2C2250&w=1024" alt="David Raum"/>
            <h3>Recent News</h3>
            <a href='https://rblive.de/news/rb-leipzig-david-raum-spricht-ueber-hass-von-real-madrid-fans-3493826'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>RB Leipzig: David Raum spricht über Hass von Real-Madrid-Fans</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR3rwJHpqvriB_48y7P8_CSCW0zkD-PmhboJGarS63pbWYe1LVqFwK_2J8it1lMQfluzBcCeV5L" alt="RB Leipzig: David Raum spricht über Hass von Real-Madrid-Fans" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Für David Raum und die deutsche Nationalmannschaft geht es am Sonntag (20 Uhr) gegen Spanien um Alles oder Nichts. Bei einer Pleite gegen den Weltmeister&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}