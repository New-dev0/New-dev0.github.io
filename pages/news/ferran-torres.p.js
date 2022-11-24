import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Ferran Torres</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Ferran Torres"/>
        <meta name="description" content="Trending News about Ferran Torres" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Ferran Torres</h1>
            <Image width={800} height={500} src="https://media.kleinezeitung.at/social_klz/images/uploads_520/focal37x45-557x386/4/b/2/6218930/5F154193-A1EB-454D-B5D5-897F99D503D7_v0_h.jpg" alt="Ferran Torres"/>
            <h3>Recent News</h3>
            <a href='https://www.kleinezeitung.at/sport/fussball/wm/6218930/Spanien-Costa-Rica-3_0_Zweite-Haelfte-von-Spanien-gegen-Costa'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Spanien spielt solide und lässt Costa Rica keine Chance</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRRUHN-ilZFz5TNTKAEKnimajCxmleHltbkpNLHHM8hyM5Id6VCiJjXaXF0L3tEciougFL4dUsU" alt="Spanien spielt solide und lässt Costa Rica keine Chance" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Die Spanier werden ihre Favoritenrolle in diesem Match gerecht und lassen nichts anbrennen. Olmo, Asensio und Torres zweifach treffen für &quot;La Furia Roja&quot;.</p></div>
            </div>
        </a>
        </Template></>;
}