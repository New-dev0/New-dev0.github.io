import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Russland-Ukraine-Konflikt</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Russland-Ukraine-Konflikt"/>
        <meta name="description" content="Trending News about Russland-Ukraine-Konflikt" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Russland-Ukraine-Konflikt</h1>
            <Image width={800} height={500} src="https://www.sn.at/gruenderin-des-russischen-tv-senders-doschd-die-propaganda-ist-in-die-koepfe-eingedrungen-41-102909274.jpg/size-1600x840/130.175.893" alt="Russland-Ukraine-Konflikt"/>
            <h3>Recent News</h3>
            <a href='https://www.sn.at/politik/weltpolitik/russland-ukraine-konflikt-gruenderin-des-russischen-tv-senders-doschd-die-propaganda-ist-in-die-koepfe-eingedrungen-130175902'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Russland-Ukraine-Konflikt: Gründerin des russischen TV-Senders ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQI-BuibOxRS5nyYXBunxr1RywF2ZaeCXvcLFtGcSRx3ScOZj6l4trXkhkBqDhRyrx-idB_PHj9" alt="Russland-Ukraine-Konflikt: Gründerin des russischen TV-Senders ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sie ist das Gesicht des russischen Senders TV Doschd: Natalja Sindejewa. Die Chefin des Exilsenders über die Bilder in den Köpfen der Russen und welche&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}