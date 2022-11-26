import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>St. Pölten</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,St. Pölten"/>
        <meta name="description" content="Trending News about St. Pölten" /></Head><Template>
            <h1 style={{fontSize: "30"}}>St. Pölten</h1>
            <Image width={800} height={500} src="https://image.kurier.at/images/facebook/7432332/46-192365078.jpg" alt="St. Pölten"/>
            <h3>Recent News</h3>
            <a href='https://kurier.at/chronik/niederoesterreich/sankt-poelten/schuesse-in-st-poelten-polizist-verletzt-grossfahndung-ausgeloest/402237867'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Schüsse in St. Pölten: Polizist verletzt, Großfahndung ausgelöst</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ026lAOwQQnJvPbRy-3Yb7Hs_Qd-bHuor5eZy_ZFNMvc3n-iCsNz28Kjg0LEhyhVz4g0mgqS6A" alt="Schüsse in St. Pölten: Polizist verletzt, Großfahndung ausgelöst" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Völlig aus dem Ruder gelaufen ist Freitagabend beim Regierungsviertel in St. Pölten eine Verkehrskontrolle der Polizei. Im Zuge der Anhaltung hat ein&nbsp;...</p></div>
            </div>
        </a><a href='https://www.krone.at/2866567'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Fahndung in St. Pölten - Pkw rast auf Polizist zu: Schüsse aus ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRA3vhEwn1qiq6LKm6mIooScpGukAtWFDtr_7C0XPBG5MHaWQVpaBHGvjZBWccMguA0fCYth5Ys" alt="Fahndung in St. Pölten - Pkw rast auf Polizist zu: Schüsse aus ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Unmittelbar neben dieser Tankstelle in der Wiener Straße in St. Pölten fand die Verkehrskontrolle statt, bei der ein Polizist angeschossen wurde. (Bild: APA/&nbsp;...</p></div>
            </div>
        </a><a href='https://www.derstandard.at/story/2000141229959/polizist-in-stpoelten-angeschossen'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Polizist in St. Pölten angeschossen</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRYXF-dYmWjRTS__a_qF9LkQGIER6mfQ1Q3xQNIlIfK8wey_wmZ6icHk9ra9uY9WBNPlOo4egru" alt="Polizist in St. Pölten angeschossen" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Der Beamte ist im Spital und schwebt nicht in Lebensgefahr. Der Schuss fiel bei einer Fahrzeugkontrolle.</p></div>
            </div>
        </a><a href='https://www.nachrichten.at/panorama/chronik/schuesse-in-st-poelten-polizist-verletzt-taeter-fluechtig;art58,3749334'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Schüsse in St. Pölten: Polizist verletzt, Täter flüchtig</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQJ0XHNjRjDwGTfIM5AmFRENuei_rbBaC0_3HsV7z1nNQVLROeHdXQTy-jMCneMStWSyAjVdmLw" alt="Schüsse in St. Pölten: Polizist verletzt, Täter flüchtig" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ST. PÖLTEN. Ein Polizist ist am frühen Freitagabend in St. Pölten angeschossen worden. Der Beamte wurde mit Verletzungen ins Krankenhaus gebracht.</p></div>
            </div>
        </a><a href='https://www.vienna.at/noe-polizist-in-st-poelten-angeschossen-und-verletzt/7766647'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>NÖ: Polizist in St. Pölten angeschossen und verletzt</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTKIiyVb6kCMfbHsoP_k6J7AfU8XBM-echSMfnDj8LKiwYf9MIkAcWUG7Awf47EsJ1PIyVhDmud" alt="NÖ: Polizist in St. Pölten angeschossen und verletzt" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Der Beamte wurde ambulant im Krankenhaus behandelt, er konnte das Spital inzwischen wieder verlassen, teilte Polizeisprecher Raimund Schwaigerlehner auf Anfrage&nbsp;...</p></div>
            </div>
        </a><a href='https://www.meinbezirk.at/st-poelten/c-regionauten-community/unterstuetzung-fuer-den-verein-club-of-roma_a5733943'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Weihnachtsaktion der HTL St. Pölten: Unterstützung für den Verein ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQOpLpyB5cblIoMqpaTWD8vOVLduEeb1VWUYpVcohHrx0etJgg4P13AgZZLYC3CeWhGGAx7dcml" alt="Weihnachtsaktion der HTL St. Pölten: Unterstützung für den Verein ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Dieses Jahr wurde der Langenloiser Verein &quot;Club of Roma&quot; unter der Leitung von Herrn Christian Rauscher unterstützt. Dieser Verein hat es sich seit einigen&nbsp;...</p></div>
            </div>
        </a><a href='https://www.st-poelten.at/gv-buergerservice/rathaus/buergeranliegen/2-uncategorised/17585-voll-dabei-netzwerktreffen-bei-schirak'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>VOLL DABEI - Netzwerktreffen im Familienunternehmen SCHIRAK</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQPFqGe-ejJHOzZfe_-K-QXYSfUScyLVi5RXVT5vdwFvOXgm34yPplkWZWIqVOtQyoabYQ-RmIo" alt="VOLL DABEI - Netzwerktreffen im Familienunternehmen SCHIRAK" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Durch den Abend führten die Geschwister Theresa und Florian Schirak mit &quot;Papa&quot; Werner Schirak. Mag. Daniela Kittel, Obmann Stellvertreterin der Plattform St.</p></div>
            </div>
        </a><a href='https://www.meinbezirk.at/st-poelten/c-lokales/kalender-mit-historischen-ansichten-ab-sofort-erhaeltlich_a5732755'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>St. Pölten: Kalender mit historischen Ansichten ab sofort erhältlich ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRwSSvRnbVUm-ZOj5JjcxcIwBEYgHN3syNkIBaCm-wLoVgjfLgZ-DOXqGemNvAomn67E_XWW5jL" alt="St. Pölten: Kalender mit historischen Ansichten ab sofort erhältlich ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Auf dem Dezember-Kalenderblatt des Kalenders ist eine historische Postkarte mit einem Motiv vom Herrenplatz zu sehen. &middot; Foto: Stadtmuseum St. Pölten &middot; hochgeladen&nbsp;...</p></div>
            </div>
        </a><a href='https://www.meinbezirk.at/st-poelten/c-lokales/eine-kellergassen-krippe-fuer-das-st-poeltner-landhaus_a5732689'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>St. Pölten: Eine Kellergassen-Krippe für das St. Pöltner Landhaus ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS1Gp4CWlJJFflqEAKC_0bwy-jghF6c8WA8jNNRbvooTEZYlW_Cyk3uABF2QgGqlWWL8fJX-nFq" alt="St. Pölten: Eine Kellergassen-Krippe für das St. Pöltner Landhaus ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Die Mitglieder des Krippenverein Wolkersdorf im Weinviertel rund um Obfrau Renate Haselböck (4.v.r.) präsentierten die heurige Landhaus-Krippe: Landeshauptfrau&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}