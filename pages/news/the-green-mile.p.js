import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>The Green Mile</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,The Green Mile"/>
        <meta name="description" content="Trending News about The Green Mile" /></Head><Template>
            <h1 style={{fontSize: "30"}}>The Green Mile</h1>
            <Image width={800} height={500} src="https://de.web.img2.acsta.net/img/fe/50/fe506f32ff7a43f6ed87b719f0af3602.jpg" alt="The Green Mile"/>
            <h3>Recent News</h3>
            <a href='https://www.filmstarts.de/nachrichten/1000005464.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Heute im TV: Einer der beliebtesten 3-Stunden-Filme überhaupt</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQnK7K0Z2zo3oBtHLG5iFF7NUrE_-G0_vyUiC3H28cZSsrzWlq7jWV-FugdXnLDtfCRjFcZXYYL" alt="Heute im TV: Einer der beliebtesten 3-Stunden-Filme überhaupt" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Es ist ein Film, bei dem man beim Zappen hängen bleibt, einer, den man trotz seiner XXL-Laufzeit immer wieder schauen kann. Heute um 20.15 Uhr läuft das&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}