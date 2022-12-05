import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Dieter Bohlen</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Dieter Bohlen"/>
        <meta name="description" content="Trending News about Dieter Bohlen" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Dieter Bohlen</h1>
            <Image width={800} height={500} src="https://www.tz.de/bilder/2022/12/01/91951733/30411940-nach-dsds-und-tournee-dieter-bohlen-verkuendet-karriere-aus-3Kfe.jpg" alt="Dieter Bohlen"/>
            <h3>Recent News</h3>
            <a href='https://www.tz.de/stars/nach-dsds-tour-dieter-bohlen-verkuendet-karriere-aus-stars-pietro-lombardi-zr-91951733.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Nach DSDS und Tournee: Dieter Bohlen verkündet Karriere-Aus</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSBROrvWH_J70l_n69yn6u4NXRfKfUJLRBKOizey0OYVVZ_qsQ2pO7xskVqN-vakiuqyfFCOAJj" alt="Nach DSDS und Tournee: Dieter Bohlen verkündet Karriere-Aus" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Dieter Bohlen gibt er sein Karriereende bekannt. Nach DSDS und seiner Tour ist im Mai 2023 Schluss. Für seine Fans will er es nochmal krachen lassen.</p></div>
            </div>
        </a><a href='https://www.20min.ch/story/dieter-bohlen-haengt-seine-musikkarriere-an-den-nagel-850688379903'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Dieter Bohlen hängt seine Musikkarriere an den Nagel</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSyJJYy0iIy3Z2Nrab7qPLi5yOL5_7DhYjzqv3rhLgZb3KjcftxNeD49kbxEZ0sQyP3gkkcN1wS" alt="Dieter Bohlen hängt seine Musikkarriere an den Nagel" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Dieter Bohlen verkündet für 2023 seinen Abschied aus dem Show-BIZ. Seine Tour im Frühling mit Gastpromi Pietro Lombardi wird gleichzeitig seine letzte sein.</p></div>
            </div>
        </a><a href='https://www.nau.ch/people/welt/dieter-bohlen-hort-auf-im-tv-letzte-tournee-2023-66355930'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Dieter Bohlen hört auf im TV, letzte Tournee 2023</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR8Vl1HOHR3BwVUttLizp92KJTW9tQPCeHEKOlFEIOhJOamN3K6m2jP9dWztc0yHrbkqL3C8DJv" alt="Dieter Bohlen hört auf im TV, letzte Tournee 2023" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Viele haben es vermutet, jetzt ist es bestätigt: Die Comeback-Tour von Dieter Bohlen wird auch seine letzte sein.</p></div>
            </div>
        </a><a href='https://www.blick.ch/people-tv/international/pop-titan-geht-auf-abschiedstour-dieter-bohlen-gibt-karriere-aus-bekannt-id18109484.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Dieter Bohlen gibt Karriere-Aus bekannt</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS_CWvvBN_FES4Rng9d_aLLb6muDPZFFDzZdnqSucO6RawhgSb7mV2KXKktvs-kC2GLdglO3xkV" alt="Dieter Bohlen gibt Karriere-Aus bekannt" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Dieter Bohlen kündigte vor einigen Monaten eine neue Tour mit dem Titel «Das grösste Comeback aller Zeiten» an. Am Donnerstag schob er ein wichtiges Detail&nbsp;...</p></div>
            </div>
        </a><a href='https://www.promiflash.de/news/2022/12/02/seine-letzte-tour-dieter-bohlen-bekommt-besonderen-support.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Seine letzte Tour: Dieter Bohlen bekommt besonderen Support!</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTyQf7su1T6moQVv98uZmncHx1nJIHL4LCptHBYMcFSjS6jxBZnArUDWABFYlFSqRHyVg6o4c52" alt="Seine letzte Tour: Dieter Bohlen bekommt besonderen Support!" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Statt eines großen Comebacks feiert er eher einen Abschied! Vor wenigen Monaten überraschte DSDS-Juror Dieter Bohlen (68) seine Fans mit einer&nbsp;...</p></div>
            </div>
        </a><a href='https://www.westfalen-blatt.de/nrw/dieter-bohlen-kuendigt-abschiedstour-2023-mit-lombardi-an-2669338'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Dieter Bohlen kündigt Abschiedstour 2023 mit Lombardi an</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRKmZO4vlxn-D9YI9YhBMs4rjjEOXhF5-6IADb1j9H_nvV19gE_kiR1_DZT_2QS1NrQ_0_1GF_R" alt="Dieter Bohlen kündigt Abschiedstour 2023 mit Lombardi an" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Berlin (dpa). Die im kommenden Jahr anstehende Comeback-Tour von Dieter Bohlen (68) wird auch seine Abschiedstour. Das kündigte der Pop-Produzent am&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}