import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Spanien gegen Deutschland</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Spanien gegen Deutschland"/>
        <meta name="description" content="Trending News about Spanien gegen Deutschland" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Spanien gegen Deutschland</h1>
            <Image width={800} height={500} src="https://www.laola1.at/images/redaktion/images/Fussball/International/WM-2022/_getty-deutschland-spanien_bc902_f_1280x720.gif" alt="Spanien gegen Deutschland"/>
            <h3>Recent News</h3>
            <a href='https://www.laola1.at/de/red/fussball/wm-2022/gruppe-e/deutschland-ist-gegen-spanien-nahezu-zum-siegen-verdammt/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Deutschland ist gegen Spanien nahezu zum Siegen verdammt</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRKyf9B5bzdLUk3jPxhZGXao2j7429SxIAa1p4z8piSM966NevBCwkvjVCtqtVQksk9FsobA-vO" alt="Deutschland ist gegen Spanien nahezu zum Siegen verdammt" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Selbst bei einem Unentschieden im Kracherduell mit Spanien könnte der Aufstieg nach der Auftaktpleite gegen Japan in weite Ferne rücken.</p></div>
            </div>
        </a><a href='https://www.sportschau.de/fussball/fifa-wm-2022/wm-2022-dfb-deutschland-spanien-expertenaufstellung-100.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>WM 2022 in Katar: Deutschland gegen Spanien - so würden die ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTyhrjNBQAUbR97TIFWCgdCDkTSvjAtWh5wjetSMna-rIJBI42t4y9C2e1dp26QBi06VKi29Ubf" alt="WM 2022 in Katar: Deutschland gegen Spanien - so würden die ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Das Sportschau-Expertenteam stellt auf: Wie würden Sami Khedira, Thomas Hitzlsperger, Almuth Schult und Bastian Schweinsteiger mit der DFB-Elf ins Spiel&nbsp;...</p></div>
            </div>
        </a><a href='https://www.focus.de/sport/fussball/wm-2022/fussball-wm-2022-spanien-gegen-deutschland-morgen-online-und-im-tv-sehen_id_180303937.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Spanien gegen Deutschland live online und im TV sehen</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSHseMglD7EKmTjC5kWoY0LTv7IIezP1WlSew6288mQSZYy_304_E30q2MXpovozXtaom_hDbuU" alt="Spanien gegen Deutschland live online und im TV sehen" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nach dem Spiel gegen Japan trifft die DFB-Elf am 27.11 auf Spanien. Wo Sie das Spiel im TV und online im Live-Stream sehen können, erfahren Sie hier.</p></div>
            </div>
        </a><a href='https://www.wa.de/sport/fussball/spanien-deutschland-uebertragung-live-free-tv-stream-kostenlos-zdf-magentatv-wm-2022-thilo-kehrer-91940328.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Spanien vs. Deutschland: WM-Übertragung live im Free-TV und ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTUBmNmXF4JitQQOQAlk2LXABoYUvTMC1nDQ0SpjdY3WHa37mJ2wHc7YkKySXvG3p-6DWdzZogM" alt="Spanien vs. Deutschland: WM-Übertragung live im Free-TV und ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Spanien gegen Deutschland live: Das Spiel bei der WM 2022 läuft im Free-TV sowie im kostenlosen Stream – auf welchen Sendern? Infos zur Übertragung.</p></div>
            </div>
        </a><a href='https://www.spox.com/de/sport/fussball/wm/wm2022/2211/Artikel/ard-zdf-oder-magentatv-sender-zeigt-uebertraegt-deutschland-gegen-spanien-live-heute.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ARD, ZDF oder MagentaTV? Dieser Sender zeigt Deutschland ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTt3jmeqWBE4FgdJE7_6m8QhCqVMOLvC_0Qqjh6a9PhEuDKFAPmtgQVlcL6J1eHVTW1MhR0i4c8" alt="ARD, ZDF oder MagentaTV? Dieser Sender zeigt Deutschland ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Deutschland muss morgen ein wahrscheinliches Endspiel gegen Spanien spielen. Bei welchem Sender läuft das Spiel? ARD, ZDF oder MagentaTV? SPOX zeigt Euch&nbsp;...</p></div>
            </div>
        </a><a href='https://www.t-online.de/sport/fussball/wm/id_100087188/wm-2022-deutschland-gegen-spanien-kann-die-dfb-elf-ueberhaupt-gewinnen-.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>WM 2022: Deutschland gegen Spanien – Kann die DFB-Elf ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTsGaD0iyKitFjSiS1vEiSunGsnx0QytXAmexLenQ7TDFwnYDPSxM1PZQBcXVKLpJ65dBIDM6S5" alt="WM 2022: Deutschland gegen Spanien – Kann die DFB-Elf ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Am Sonntag steht das deutsche Endspiel in der Gruppenphase der WM an. Gegner ist Spanien. t-online hat mit einem Kenner der &quot;Furia Roja&quot; gesprochen.</p></div>
            </div>
        </a>
        </Template></>;
}