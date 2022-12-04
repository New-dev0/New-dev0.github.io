import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Sofia Goggia</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Sofia Goggia"/>
        <meta name="description" content="Trending News about Sofia Goggia" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Sofia Goggia</h1>
            <Image width={800} height={500} src="https://s3-images.sportnews.bz/_images/fit/1000x563/img/2022/12/sofia-goggia-will-in-lake-louise-erneut-zuschlagen.jpg" alt="Sofia Goggia"/>
            <h3>Recent News</h3>
            <a href='https://www.sportnews.bz/artikel/wintersport/ski-alpin/live-sofia-goggia-jagt-ihren-naechsten-abfahrtssieg'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>LIVE | Sofia Goggia jagt ihren nächsten Abfahrtssieg</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQFHffzTnqCtw0vlTZwE5C9LcDR83dWEL2hfCw9T3Xz_1IiLViUpjaYIeUcOW7FCi9r9XAp-Sf6" alt="LIVE | Sofia Goggia jagt ihren nächsten Abfahrtssieg" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Die erste Damen-Abfahrt der Saison in Lake Louise war ein Hundertstelkrimi, den Sofia Goggia für sich entscheiden konnte. Am Samstag steht ab 20.30 Uhr&nbsp;...</p></div>
            </div>
        </a><a href='https://skiweltcup.tv/index.php/sofia-goggia-doppelt-mit-dem-sieg-in-der-2-abfahrt-von-lake-louise-nach/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sofia Goggia doppelt mit dem Sieg in der 2. Abfahrt von Lake Louise ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTml5FaJm2Ccjjf7OYgaiZOkoGSOMsni2Svriz7O6ZZoJZzc9J_E-uoLZaR35E3izmhs0tTscEO" alt="Sofia Goggia doppelt mit dem Sieg in der 2. Abfahrt von Lake Louise ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Lake Louise – Am heutigen Abend wurde im kanadischen Lake Louise die zweite Weltcupabfahrt der Damen in der Saison 2022/23 ausgetragen.</p></div>
            </div>
        </a><a href='https://www.skionline.ski/sofia-goggia-siegt-in-lake-louise-knapp-vor-corinne-suter/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sofia Goggia siegt in Lake Louise knapp vor Corinne Suter</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSzpNSNBRgK3BE2t3M-uG8oXl2pRIodqUwQr_i56cv4kHlHvTDf846xapo8BH0Dbtu2xSdD8Axn" alt="Sofia Goggia siegt in Lake Louise knapp vor Corinne Suter" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Eine Woche nach den Herren starteten in den gestrigen Abendstunden mitteleuropäischer Zeit die Damen in die Speedsaison des alpinen Skiweltcups.</p></div>
            </div>
        </a><a href='https://www.kleinezeitung.at/sport/wintersport/skialpin/6223545/Zweite-Abfahrt-Lake-Louise_Goggia-feiert-Doppelsieg-Ortlieb'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Goggia feiert Doppelsieg, Ortlieb sensationell Zweite – Hütter ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcREZPaigHIA6QGMSrJDqXu7ARebhuuY9QxHeVLN2TIgiifqsOquorEgPUfDjbW2Y1a583S1BBmM" alt="Goggia feiert Doppelsieg, Ortlieb sensationell Zweite – Hütter ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sofia Goggia feierte in Lake Louise einen Doppelsieg: Die Italienerin siegt in der zweiten Abfahrt innerhalb von 24 Stunden – auf verkürzter Strecke.</p></div>
            </div>
        </a><a href='https://www.vol.at/nina-ortlieb-bei-goggia-sieg-als-2-zurueck-am-podest/7781110'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Nina Ortlieb bei Goggia-Sieg als 2. zurück am Podest</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTAGDcy6auDvga0tcsDGjzhqaG5Il-hfSlRUZv09sDxWI7KTxbiWtwG-_pD8ZZimX295Tk4dE74" alt="Nina Ortlieb bei Goggia-Sieg als 2. zurück am Podest" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sofia Goggia jubelte auch in der zweiten Abfahrt von Lake Louise über einen Sieg. Dahinter kam Nina Ortlieb auf den starken zweiten Rang.</p></div>
            </div>
        </a>
        </Template></>;
}