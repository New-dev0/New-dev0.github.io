import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Embolo</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Embolo"/>
        <meta name="description" content="Trending News about Embolo" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Embolo</h1>
            <Image width={800} height={500} src="https://img.blick.ch/incoming/18110979-v1-wm-26006.jpg?imwidth=2000&ratio=16_9&x=430&y=191&width=4551&height=2562" alt="Embolo"/>
            <h3>Recent News</h3>
            <a href='https://www.blick.ch/sport/fussball/wm/noch-sonniger-statt-n-wort-zdf-sorgt-mit-zweideutigem-embolo-kommentar-fuer-rote-koepfe-id18110982.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Zweideutiger ZDF-Kommentar über Embolo löst zahlreiche ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS-7pqVoywGlcRr-zwEEqlraRIkgbcHMXuoXYKScVpocpCFleq8btM_KrgaMwEstQXn2-7pWf34" alt="Zweideutiger ZDF-Kommentar über Embolo löst zahlreiche ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Zahlreiche Leser schreiben Blick noch während der Partie Schweiz gegen Serbien. Sie mitverfolgen das Spiel auf dem ZDF. Dort soll ein zweideutiger Kommentar&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}