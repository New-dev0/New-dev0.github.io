import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Tyson Fury</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Tyson Fury"/>
        <meta name="description" content="Trending News about Tyson Fury" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Tyson Fury</h1>
            <Image width={800} height={500} src="https://www.spox.com/de/sport/mehrsport/boxen/2212/Bilder/fury-chisora1.jpg" alt="Tyson Fury"/>
            <h3>Recent News</h3>
            <a href='https://www.spox.com/de/sport/mehrsport/boxen/2212/Artikel/tyson-fury-derek-chisora-boxkampf-heute-im-liveticker.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Boxen - Weltmeister Tyson Fury besiegt Landsmann Dereck Chisora ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSL4_aN86hKOdfE0hrV2oNOBJZy7IawNx3ZrNMp6l662qusI25bOdLwasnWyO3JyM2FSU4ybDAj" alt="Boxen - Weltmeister Tyson Fury besiegt Landsmann Dereck Chisora ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Weltmeister Tyson Fury hat seinen WBC-Gürtel im Schwergewicht gegen seinen britischen Landsmann Dereck Chisora durch Technischen K.o. erfolgreich verteidigt&nbsp;...</p></div>
            </div>
        </a><a href='https://www.spiegel.de/sport/boxen-tyson-fury-verteidigt-titel-im-schwergewicht-gegen-dereck-chisora-a-89751185-650a-4f81-9a48-005e93720182'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>WM-Titel im Schwergewicht verteidigt: Chisora ist noch immer kein ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS6En5_buZ4YT2OrpAjmwZJseKzpZceBX7I_bx3Z97-g38-yzCxq9-Zt2Zg17djFaIwnNELxT0s" alt="WM-Titel im Schwergewicht verteidigt: Chisora ist noch immer kein ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Der neue WBC-Champion ist der alte: Tyson Furys Titelverteidigung geriet auch im dritten Kampf gegen Dereck Chisora nie in Gefahr.</p></div>
            </div>
        </a><a href='https://www.sportbuzzer.de/artikel/tyson-fury-bleibt-weltmeister-im-schwergewicht-dereck-chisora/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Tyson Fury bleibt Weltmeister im Schwergewicht – Vorzeitiger Sieg ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRS7yRVAGv6oez_E7HCbW3LRcLbgonqLpXwbwv02OWH4nGF1zIWp6lJXtJAS7kDABpXHnG4d96X" alt="Tyson Fury bleibt Weltmeister im Schwergewicht – Vorzeitiger Sieg ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Im ausverkauften Fußball-Stadion von Tottenham Hotspur verteidigte Tyson Fury seinem WM-Titel des WBC im Schwergewicht. Der Kampf gegen Dereck Chisora&nbsp;...</p></div>
            </div>
        </a><a href='https://www.n-tv.de/sport/Das-Box-Spektakel-auf-das-niemand-gewartet-hat-article23760181.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Tyson Fury vs. Derek Chisora: Das Box-Spektakel, auf das niemand ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSwQftTLaZ_V9zLwHS0CbvhgN0vcWkSOfgnA91YID1xRhIgBk-4Ohj1kVswQhYMHn58wq96tPCE" alt="Tyson Fury vs. Derek Chisora: Das Box-Spektakel, auf das niemand ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nachdem der heiß ersehnte Briten-Blockbuster zwischen Tyson Fury und Anthony Joshua geplatzt ist, kommt es nun zu einem &quot;Battle of Britain&quot;, auf das&nbsp;...</p></div>
            </div>
        </a><a href='https://www.bild.de/sport/mehr-sport/boxen/boxen-so-sehen-sie-fury-vs-chisora-samstag-live-im-tv-82082096.bild.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Tyson Fury vs. Dereck Chisora: Hier sehen Sie Boxen JETZT live im ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRTzt3diZI1eHM2-oxMNky6zhkLcPAuHDInEaw-YZ-s8brhoQEuja7KvoPa9l6DixUjPiJbNOPq" alt="Tyson Fury vs. Dereck Chisora: Hier sehen Sie Boxen JETZT live im ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Diese Boxnacht wird irre! Mit BILDplus sehen Sie den Fury-Knaller am Samstag live.</p></div>
            </div>
        </a><a href='https://www.ran.de/boxen/news/wm-fight-tyson-fury-dereck-chisora-fussballstadion-163428'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Tyson Fury schlägt Dereck Chisora bei WM-Fight im Hotspur-Stadion</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRCh2lx5nzKnk4obx-OyGwHwkHg8iWpGOwe55JlJEj6lcvLmbKoHEzYh7bCjlAUca4giEmyQ63Z" alt="Tyson Fury schlägt Dereck Chisora bei WM-Fight im Hotspur-Stadion" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Box-Champion Tyson Fury schlägt seinen britischen Landsmann Dereck Chisora erneut und verteidigt den WM-Gürtel im Schwergewicht erfolgreich.</p></div>
            </div>
        </a><a href='https://www.sportsillustrated.de/mehr-sport/boxen/tyson-fury-verteidigt-wbc-titel-derek-chisora-geht-bei-pruegel-orgie-komplett'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&lt;p&gt;Tyson Fury verteidigt WBC-Titel! Derek Chisora geht bei Prügel ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR8cAMk0o1SGZv7937BbNEOi2W0QCUbC8xZkgSwphfnNh3pvoLJ43oqPvkyyXpf-VvnnDcoyYD5" alt="&lt;p&gt;Tyson Fury verteidigt WBC-Titel! Derek Chisora geht bei Prügel ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Tyson Fury bleibt der alte und neue WBC-Champion. Beim Schwergewichtskampf gegen Derek Chisora lässt er seinem britischen Landsmann vor über 60.000&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}