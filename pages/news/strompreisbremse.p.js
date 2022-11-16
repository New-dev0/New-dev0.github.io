import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Strompreisbremse</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Strompreisbremse"/>
        <meta name="description" content="Trending News about Strompreisbremse" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Strompreisbremse</h1>
            <Image width={800} height={500} src="https://www.augsburger-allgemeine.de/img/donauwoerth/crop28856842/3683605545-cv16_9-w1200-owebp/3gtm5929?t=.jpg" alt="Strompreisbremse"/>
            <h3>Recent News</h3>
            <a href='https://www.finanz.at/news/strompreis-entlastung-dezember-9892/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bis zu 700 Euro - Diese Entlastungen kommen im Dezember</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Bis zu 700 Euro - Diese Entlastungen kommen im Dezember" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ab Dezember tritt die im Oktober beschlossene Strompreisbremse in Kraft. Der Netzkostenzuschuss folgt im Januar 2023. Sie bringen eine Entlastung von bis zu&nbsp;...</p></div>
            </div>
        </a><a href='https://www.augsburger-allgemeine.de/politik/kommentar-die-geplante-strompreisbremse-ist-teuer-und-riskant-id64559901.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kommentar: Die geplante Strompreisbremse ist teuer und riskant ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRkrPSvM9LXaypNrBQaK03HJWOpfVXHcUCMIRJ0u4SawM5lBPygS1Dy6YqKv6zJlfJO7RrcdRtP" alt="Kommentar: Die geplante Strompreisbremse ist teuer und riskant ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Statt die Probleme der explodierenden Stromkosten an der Wurzel anzupacken, setzt die Koalition auf ein kompliziertes Modell. Dabei ginge es viel einfacher.</p></div>
            </div>
        </a><a href='https://www.zfk.de/energie/strom/strompreisbremse-dauer-subventionierung-darf-nicht-das-ziel-sein'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Strompreisbremse: „Dauer-Subventionierung darf nicht das Ziel sein“</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcShNoEyiz2kJw_SbpUAEnDkAc3vruW4AgGFEvJG3UzX5CZjzo-ltXbwLXQOHT8Wde89MUh7Iy3E" alt="Strompreisbremse: „Dauer-Subventionierung darf nicht das Ziel sein“" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Die Strompreisbremse soll Wirtschaft und Privathaushalte entlasten. Matthias Koch von Rödl &amp; Partner befürwortet das, mahnt aber vor einem dauerhaften&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}