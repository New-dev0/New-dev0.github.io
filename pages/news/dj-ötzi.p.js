import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>DJ Ötzi</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,DJ Ötzi"/>
        <meta name="description" content="Trending News about DJ Ötzi" /></Head><Template>
            <h1 style={{fontSize: "30"}}>DJ Ötzi</h1>
            <Image width={800} height={500} src="https://static.schlager.de/uploads/2022/02/www.schlager.de-dj-oetzi.jpg" alt="DJ Ötzi"/>
            <h3>Recent News</h3>
            <a href='https://www.schlager.de/news/2022/12/02/dj-oetzi-weihnachts-tradition-mit-viel-herz/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>DJ Ötzi: Weihnachts-Tradition mit viel Herz - Schlager.de</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTVugkmr50C5pFRY-fZsU9qQf22a2x6Hntr3meuHlWx7xQzgOFXZAfnXUgKH-IdC2Ez1KTLh2WS" alt="DJ Ötzi: Weihnachts-Tradition mit viel Herz - Schlager.de" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Auch im Hause Friedle freut man sich schon auf Weihnachten. Im exklusiven Interview verriet uns DJ Ötzi, wie es bei ihm zu Hause gefeiert wird.</p></div>
            </div>
        </a>
        </Template></>;
}