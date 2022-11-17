import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Albanien gegen Italien</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Albanien gegen Italien"/>
        <meta name="description" content="Trending News about Albanien gegen Italien" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Albanien gegen Italien</h1>
            <Image width={800} height={500} src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt654c3215ea3dc350/62d17c3a4bc4f34213dc0074/goal---image-w-crest--095b6fbd-faba-4313-bac2-8878a5e301eb.jpeg" alt="Albanien gegen Italien"/>
            <h3>Recent News</h3>
            <a href='https://www.goal.com/de/meldungen/albanien-italien-tv-live-stream-uebertragung-testspiel/blt6e9d3fadf2c8a4b3'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Albanien vs. Italien heute live im TV und LIVE-STREAM: Gibt es eine ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRwQwYuEeRIYJtSBbp9k-6GVjYe56jPT6UWa8cVCMSsYhhghtwbGH_yhnyKTADFrqpPcT6vfGX1" alt="Albanien vs. Italien heute live im TV und LIVE-STREAM: Gibt es eine ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Der amtierende Europameister reist für ein Freundschaftsspiel nach Albanien. Die Infos zur Übertragung der Partie im TV und LIVE-STREAM gibt es hier.</p></div>
            </div>
        </a>
        </Template></>;
}