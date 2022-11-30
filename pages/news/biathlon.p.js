import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Biathlon</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Biathlon"/>
        <meta name="description" content="Trending News about Biathlon" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Biathlon</h1>
            <Image width={800} height={500} src="https://api-tvthek.orf.at/assets/segments/0145/95/c756fd198444da6270babb86228df0cb3b9e07ee.jpeg" alt="Biathlon"/>
            <h3>Recent News</h3>
            <a href='https://tvthek.orf.at/live/Biathlon-Weltcup-Kontiolahti-Herren-Einzel/14201577'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Biathlon-Weltcup Kontiolahti: Herren Einzel vom 29.11.2022 um 13 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ3WWywsrEG7SOH6pWvZEK-swyp6-IotGWwYpxQFnTgL1O8DOBAmt-jIhrQAiPLhiiAOWAkElLR" alt="Biathlon-Weltcup Kontiolahti: Herren Einzel vom 29.11.2022 um 13 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Simon Eder landete am Dienstag im Einzel-Bewerb über 20 km im finnischen Kontiolahti als bester österreichischer Athlet nur auf dem 33. Rang. Der 39-jährige&nbsp;...</p></div>
            </div>
        </a><a href='https://www.krone.at/2869490'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Überraschendes Podest - ÖSV beim Biathlon-Auftakt im ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSvSWj4t0Ghpnc4Ex1dEB3CaAXPilHWk8eczrfizB0tTm_s0668ptCztaIfIIXJYo7sR_jObYFn" alt="Überraschendes Podest - ÖSV beim Biathlon-Auftakt im ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Der Schwede Martin Ponsiluoma hat am Dienstag zum Auftakt der Biathlon-Weltcup-Saison triumphiert. Der 27-Jährige setzte sich in Kontiolahti in ...</p></div>
            </div>
        </a><a href='https://www.spox.com/de/sport/mehrsport/wintersport/2211/Artikel/einzelrennen-herren-maenner-kontiolahti-heute-liveticker.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Biathlon: David Zobel Dritter zum Auftakt in Kontiolahti - Roman ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTGGr4m3n5RtvEPyjUCX3y8QaH9bHBM4x29n3QZj0WcrmLi5EITMIW-xR_pJQs8on2Z1F0VO1L5" alt="Biathlon: David Zobel Dritter zum Auftakt in Kontiolahti - Roman ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>David Zobel hat den deutschen Biathleten einen traumhaften Saisoneinstand beschert. Der 26-Jährige lief beim Weltcup-Auftakt im finnischen Kontiolahti im&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sport1.de/news/wintersport/biathlon/2022/11/biathlon-live-weltcup-auftakt-in-kontiolahti-im-tv-stream-ticker'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Biathlon LIVE: Weltcup-Auftakt, heute Einzel der Frauen in ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQyP8oTiLx0_oDjMUbO7roFV686SbgC90TnGQBRUyNACgyG3UO40B78BbkVzpUFI3ZxKiIZvOUv" alt="Biathlon LIVE: Weltcup-Auftakt, heute Einzel der Frauen in ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Die Biathlon-Saison öffnet ihre Pforten. Zum Start sind die Athleten in Finnland gefordert. SPORT1 zeigt ihnen, wo sie die Wettbewerbe im TV verfolgen&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sport1.de/news/wintersport/biathlon/2022/11/biathlon-deutscher-coup-bei-biathlon-auftakt-in-kontiolahti'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Biathlon: Deutscher Coup bei Biathlon-Auftakt in Kontiolahti</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTQLrnu5Gs_Wo6baZfnwTWZnQ9wbizkn3VkxzoBJY803BUH3337J4d32pwj1DioM-qzhsUUVoL9" alt="Biathlon: Deutscher Coup bei Biathlon-Auftakt in Kontiolahti" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Beim Weltcup-Auftakt im Biathlon überrascht ein deutscher Skijäger. Vor allem am Schießstand zeigt David Zobel starke Nerven - dank der Tipps von Erik&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sportschau.de/wintersport/biathlon/biathlon-einzel-kontiolahti-zobel-100.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Biathlon in Kontiolahti: Zobel nach Podest-Coup: &quot;An Lesser gedacht&quot;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS7Ui5tgbUvS7eaeqgVkCJLaX3XiDjej9uPnQDs5BP5aRaTqB4x5AxP0WlsxP5C5TXG83F5ySFf" alt="Biathlon in Kontiolahti: Zobel nach Podest-Coup: &quot;An Lesser gedacht&quot;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Zum ersten Mal schafft es David Zobel in Kontiolahti aufs Weltcup-Podest. Damit überrascht der Spätstarter alle - vor allem sich selbst.</p></div>
            </div>
        </a><a href='https://www.swp.de/unterhaltung/tv/biathlon-kontiolathi-2022-zeitplan-startzeiten-weltcup-uebertragung-tv-livestream-ard-eurosport-67849399.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Biathlon Weltcup in Kontiolathi: Zeitplan, TV-Übertragung &amp; Stream</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS9eGt5SYTjYjTzImaLB5YzybP0In-4tJQ3es6r-SkaYN4CiG6zqjeSAWFIueP1qVf3DFxmTgws" alt="Biathlon Weltcup in Kontiolathi: Zeitplan, TV-Übertragung &amp; Stream" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Am Dienstag startete die Biathlon-Weltcup-Saison 2022/23. Beim ersten Weltcup in Kontiolathi stehen acht Wettbewerbe auf dem Programm. Alle Infos hier.</p></div>
            </div>
        </a><a href='https://www.sportnews.bz/artikel/wintersport/biathlon/live-auf-die-plaetze-fertig-los-der-start-der-biathlon-saison'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>LIVE | Auf die Plätze, fertig, los: Der Start der Biathlon-Saison</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSPJR7O56ccIIqvehtfMSWtpUxvUQWNcnzvpKCIw4BIB6L9rBkfcostIcbINE1Y273zoim9J4bD" alt="LIVE | Auf die Plätze, fertig, los: Der Start der Biathlon-Saison" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Endlich legen auch die Skijäger los: Am Dienstag ab 13.15 Uhr werden die Herren mit ihrem Einzel-Bewerb die Saison eröffnen. In Kontiolahti sind zwei&nbsp;...</p></div>
            </div>
        </a><a href='https://www.meinbezirk.at/kitzbuehel/c-sport/hochfilzen-ist-fuer-den-weltcup-geruestet_a5740678'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Biathlon Weltcup Hochfilzen: Hochfilzen ist für den Weltcup gerüstet ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTmiMufZXjsD2j6XPIbwAK8CabxzON-A0CazAwwviyS0y8F5zhVOFR2UAHmlTB9X684MlDAdUPG" alt="Biathlon Weltcup Hochfilzen: Hochfilzen ist für den Weltcup gerüstet ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Von 8. bis 11. Dezember sechs Weltcuprennen in Hochfilzen; Vorbereitungen laufen auf Hochtouren, Nachhaltigkeit im Fokus. HOCHFILZEN.Von 8. bis 11.</p></div>
            </div>
        </a><a href='https://www.sportnews.bz/artikel/wintersport/biathlon/weltcup-start-ein-suedtiroler-biathlet-ueberrascht-im-hohen-norden'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Weltcup-Start: Ein Südtiroler überrascht im hohen Norden</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS1pAmlHTkdAB90yZ2jHCVLuZflD9M-MsIZIPz3Sk5GmkaFzexyQAYr93u9K2k3niNL9I6qXwUt" alt="Weltcup-Start: Ein Südtiroler überrascht im hohen Norden" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Das erste Biathlon-Rennen der Saison 2022/23 ist geschlagen. Im Einzel-Wettkampf in Kontiolahti (Finnland) sorgte ein Schwede für den Sieg – und ein&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}