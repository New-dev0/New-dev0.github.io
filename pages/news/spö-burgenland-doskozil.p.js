import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>SPÖ Burgenland Doskozil</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,SPÖ Burgenland Doskozil"/>
        <meta name="description" content="Trending News about SPÖ Burgenland Doskozil" /></Head><Template>
            <h1 style={{fontSize: "30"}}>SPÖ Burgenland Doskozil</h1>
            <Image width={800} height={500} src="https://www.sn.at/spoe-interner-streit-kickl-als-lachender-dritter-41-102898916.jpg/size-1600x840/130.178.668" alt="SPÖ Burgenland Doskozil"/>
            <h3>Recent News</h3>
            <a href='https://www.sn.at/politik/innenpolitik/spoe-burgenland-und-doskozil-kickl-als-lachender-dritter-130178677'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>SPÖ Burgenland und Doskozil: Kickl als lachender Dritter?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQsvjsjwynGPdFDQeRc2qg1-3uKK486EPP2eKBVkJhpCGtlXH3ZVCaLCcvK1dy1o8e2MC6DJiQT" alt="SPÖ Burgenland und Doskozil: Kickl als lachender Dritter?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Die Sozialdemokraten hätten mit einem Kanzlerkandidaten Hans Peter Doskozil bessere Wahlchancen als mit Parteichefin Pamela Rendi-Wagner an ihrer Spitze.</p></div>
            </div>
        </a><a href='https://www.wienerzeitung.at/nachrichten/politik/oesterreich/2168765-Oberoesterreichs-SP-Chef-Lindner-ueber-Doskozil-veraergert.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Oberösterreichs SP-Chef Lindner über Doskozil verärgert</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQXooE262_K3vYRAfo7avZmVnCYXbSNT5r4_06A95ePopRSrfOX3QhBuGXA_vlzyJASTCucsPB0" alt="Oberösterreichs SP-Chef Lindner über Doskozil verärgert" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Indem man parteiinterne Kämpfe öffentlich austrage, verspiele man nur das Vertrauen der Wähler, richtet Oberösterreichs SPÖ-Chef Michael Lindner Burgenlands&nbsp;...</p></div>
            </div>
        </a><a href='https://www.derstandard.at/story/2000141036522/spoe-burgenland-lanciert-umfrage-die-doskozil-vor-rendi-wagner-sieht'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Doskozil heizt mit Umfrage Führungsdebatte in der SPÖ neu an</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQLC1FaW6u0NvXw5Ag1Pu6lcGmSzb7EZ5kRqlVVsl3Qv7WCRBedoUmdFQaLirkLpI_9pboTSOp9" alt="Doskozil heizt mit Umfrage Führungsdebatte in der SPÖ neu an" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nächste Runde im Clinch um die Ausrichtung der SPÖ: Pamela Rendi-Wagner und Hans Peter Doskozil. Foto: Matthias Cremer. Erste im Vergleich zur Konkurrenz, aber&nbsp;...</p></div>
            </div>
        </a><a href='https://www.oe24.at/oesterreich/politik/parteien/nach-doskozil-attacke-fliegen-in-der-spoe-die-fetzen/536689907'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Nach Doskozil-Attacke fliegen in der SPÖ die Fetzen</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSj35gy0OTYEZbEGfvYmKhMO6J4hH2PWHW_L2vxwDNw7o1L3qwqMe7sN2Y9AVfjysvWf8y-ep-w" alt="Nach Doskozil-Attacke fliegen in der SPÖ die Fetzen" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nach der Umfrage-Attacke gegen Parteichefin Pamela Rendi-Wagner streiten die Mitarbeiter von Rendi und Doskozil auf offener Bühne.</p></div>
            </div>
        </a><a href='https://www.vienna.at/weiter-aerger-ueber-doskozil-in-spoe-nach-umfrage/7759702'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Weiter Ärger über Doskozil in SPÖ nach Umfrage</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRUMNeByI5IYooNP0D8Qy2Y6fBmxxoA4-XJa1cZTO2FLUnqiqgsBRKC9NumX0pFf0b80KfqLMps" alt="Weiter Ärger über Doskozil in SPÖ nach Umfrage" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Die Umfrage der SPÖ Burgenland über die Chancen der Bundes-SPÖ bei einer Nationalratswahl sorgt bei den Sozialdemokraten weiter für Unmut.</p></div>
            </div>
        </a><a href='https://www.krone.at/2862391'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Umfrage regt auf - So reagiert Bundes-SPÖ auf Doskozil-Attacke</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTSXLGyAfJWZaA9Cj3w3rmafTysH55786uIkB2u1yaLEUxbhtVQp02Mo_-bC042QVqvk2-LjNfA" alt="Umfrage regt auf - So reagiert Bundes-SPÖ auf Doskozil-Attacke" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Roter Clinch: Die SPÖ Burgenland fragte nach Hans Peter Doskozils Beliebtheit als Kanzlerkandidat. Bundesgeschäftsführer Christian Deutsch reagierte nun auf die&nbsp;...</p></div>
            </div>
        </a><a href='https://www.noen.at/in-ausland/umfrage-spoe-burgenland-erfragte-doskozils-chance-als-kanzlerkandidat-burgenland-oesterreich-spoe-hans-peter-doskozil-nationalratswahl-umfrage-344211929'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>SPÖ Burgenland erfragte Doskozils Chance als Kanzlerkandidat</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR1sWD1NekPiza1KkDciJ5rKH7K7eZnvbHQWHvMw70WiktZQ3lQ1qzUN5J5V2VDjke0ETPyxlvY" alt="SPÖ Burgenland erfragte Doskozils Chance als Kanzlerkandidat" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Darin werden nämlich nicht nur Themen wie der Mindestlohn abgefragt, sondern auch wie die Parteien bei einer bevorstehenden Nationalratswahl abschneiden würden&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}