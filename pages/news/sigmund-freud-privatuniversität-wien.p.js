import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Sigmund Freud Privatuniversität Wien</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Sigmund Freud Privatuniversität Wien"/>
        <meta name="description" content="Trending News about Sigmund Freud Privatuniversität Wien" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Sigmund Freud Privatuniversität Wien</h1>
            <Image width={800} height={500} src="https://ibs.orf.at/wie?image=https%3A%2F%2Foekastatic.orf.at%2Fmims%2F2022%2F48%2F91%2Fcrops%2Fw%3D1200%2Ch%3D627%2Cq%3D75%2F1581594_master_578891_sfu.jpg%3Fs%3D056c116b24d50885a93eb4e8666a4491700cb646" alt="Sigmund Freud Privatuniversität Wien"/>
            <h3>Recent News</h3>
            <a href='https://wien.orf.at/stories/3183400/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>BILDUNG: Aus für Medizin-MA an Freud-Privatuni</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ0fkJjkNbJluWX-J7orcLCSYlk7aJzQRuW2U2DVL3EJeFsJWU7sq6Ly53YczH1MGbRyFhjSt71" alt="BILDUNG: Aus für Medizin-MA an Freud-Privatuni" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Der Masterstudiengang Humanmedizin an der Sigmund Freud PrivatUniversität (SFU) steht vor dem Aus. Wegen Qualitätsmängel wird die Zulassung durch die&nbsp;...</p></div>
            </div>
        </a><a href='https://www.vienna.at/wiener-sigmund-freud-uni-keine-zulassung-fuer-medizin-masterstudium/7760263'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Wiener Sigmund-Freud-Uni: Keine Zulassung für Medizin ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQlNf5nXZb60zOwoAzvhPKjZsg5fVh0dGMqLBFICprZVUGES6xc6pDip-voVYAZNGYat21LvqqQ" alt="Wiener Sigmund-Freud-Uni: Keine Zulassung für Medizin ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Seit 2015/16 bietet die Wiener Sigmund Freud Privatuniversität (SFU) einen Masterstudiengang Humanmedizin an. Jetzt steht dieser vor dem Aus.</p></div>
            </div>
        </a><a href='https://www.heute.at/s/siegmund-freud-uni-verliert-zulassung-fuer-medizin-studium-100240186'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sigmund Freud Uni verliert Zulassung für Medizin Studium</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQUtuS0BriOTrfbAuK8cRyF6cmFGqUrVLz45a5tgc3djOihPi_WXbHPfr3LsMeA-lV-ra0NiWRs" alt="Sigmund Freud Uni verliert Zulassung für Medizin Studium" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Der Masterstudiengang Humanmedizin an der Sigmund Freud Universität steht vor dem Aus. Qualitätsmangel sei der Grund für diese Entscheidung.</p></div>
            </div>
        </a><a href='https://www.meinbezirk.at/leopoldstadt/c-lokales/sigmund-freud-privatuni-verliert-wohl-medizinstudium_a5726656'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Leopoldstadt: Sigmund Freud Privatuni verliert wohl Medizinstudium ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR1-lzBU_-gTIel7FjnY7YIcb3zhEikECozlHa8BXBDt6ZVCQsKUUllS3yidFOA5tbFUqfwHPUO" alt="Leopoldstadt: Sigmund Freud Privatuni verliert wohl Medizinstudium ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Die Wiener Sigmund Freud Privatuniversität darf den Masterstudiengang Humanmedizin künftig nicht fortführen. Die zuständige Agentur für Qualitätssicherung&nbsp;...</p></div>
            </div>
        </a><a href='https://www.krone.at/2863556'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Nur noch Bachelor - Medizinstudium: Aus für Master an Wiener ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR1nJxuajsNc4qlwqf0KrTq_rra9ICkE3dipcODfkqRIeqGh_nEboHXJ4NCwJQwus1S0wwqiHvu" alt="Nur noch Bachelor - Medizinstudium: Aus für Master an Wiener ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Wegen diverser Mängel stand das Medizinstudium an der privaten Wiener Sigmund-Freund-Universität an der Kippe. Der Masterstudiengang ist tatsächlich ...</p></div>
            </div>
        </a><a href='https://www.derstandard.at/story/2000141142300/wiener-privat-uni-verliert-zulassung-fuer-medizin-master'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Wiener Privat-Uni verliert Zulassung für Medizin-Master</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTqlPv2oe4_HuowctMM2uiLp4awEB8-6hFL8pP8l5WW1wcH4cPWXpsnVbVK6-Dzr7EutExuo5Gr" alt="Wiener Privat-Uni verliert Zulassung für Medizin-Master" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Das Masterstudium Humanmedizin der Sigmund-Freud-Privatuniversität (SFU) steht vor dem Aus. Wie am Mittwoch bekannt wurde, entzieht die Agentur für&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ots.at/presseaussendung/OTS_20221123_OTS0173/spoe-kucher-ad-sigmund-freud-privatuni-ein-weiterer-grund-die-oeffentlichen-medizinstudienplaetze-in-oesterreich-zu-verdoppeln'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>SPÖ-Kucher ad Sigmund Freud Privatuni: „Ein weiterer Grund die ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS83DLn-9h4Hdsqm0IgPQg2U1Quo4xTmjjEesWjuDG_SNQmkLgj4U23O1ud6ckR2WKb9Q0yonn9" alt="SPÖ-Kucher ad Sigmund Freud Privatuni: „Ein weiterer Grund die ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Braucht Lösung um „Lose-Lose-Situation für alle“ zu verhindern – Mittelfristig Erhöhung öffentlicher Studienplätze einziger Weg.</p></div>
            </div>
        </a>
        </Template></>;
}