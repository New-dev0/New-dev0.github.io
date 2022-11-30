import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Enner Valencia</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Enner Valencia"/>
        <meta name="description" content="Trending News about Enner Valencia" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Enner Valencia</h1>
            <Image width={800} height={500} src="https://media.kleinezeitung.at/social_klz/images/uploads_520/focal464x178-568x281/d/7/8/6221176/78536D7A-37F6-4EF9-9689-F53B2354172B_v0_h.jpg" alt="Enner Valencia"/>
            <h3>Recent News</h3>
            <a href='https://www.kleinezeitung.at/sport/fussball/wm/6221176/Gruppe-A-Ecuador-Senegal-16-Uhr_Schiesst-Enner-Valencia-sein-Land'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Schießt Enner Valencia sein Land heute mit Rekordtor ins ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRc0NLU50PoO1VV5yK4cEGfpDWMp5OMEz7eS5mO_bHTmjLz5NNdFyKF9hgAw_tFcOAIe6zuVXU_" alt="Schießt Enner Valencia sein Land heute mit Rekordtor ins ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ecuador oder Senegal? Der Sieger der Partie steht fix im Achtelfinale. Hier verpassen Sie kein Tor der Gruppe A.</p></div>
            </div>
        </a>
        </Template></>;
}