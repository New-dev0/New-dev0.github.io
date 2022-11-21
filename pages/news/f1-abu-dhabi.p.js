import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>F1 Abu Dhabi</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,F1 Abu Dhabi"/>
        <meta name="description" content="Trending News about F1 Abu Dhabi" /></Head><Template>
            <h1 style={{fontSize: "30"}}>F1 Abu Dhabi</h1>
            <Image width={800} height={500} src="https://www.motorsport-total.com/img/sm/274142_mst.jpg?rf=1668959327" alt="F1 Abu Dhabi"/>
            <h3>Recent News</h3>
            <a href='https://www.motorsport-total.com/formel-1/news/f1-rennen-abu-dhabi-verstappen-gewinnt-leclerc-erobert-platz-2-22112011'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>F1-Rennen Abu Dhabi: Verstappen gewinnt, Leclerc erobert Platz 2!</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSy1pvLpqFkd1E2TXkBWkTAgh2tAi5dHI1fIcDM2Ymbgal_A2AS5XXA9alOn2E0X7-hJiJp-A9U" alt="F1-Rennen Abu Dhabi: Verstappen gewinnt, Leclerc erobert Platz 2!" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Hat nicht ganz gereicht für Sergio Perez: Max Verstappen gewinnt das Saisonfinale der Formel 1 2022 vor Charles Leclerc und Sergio Perez - Sebastian Vettel&nbsp;...</p></div>
            </div>
        </a><a href='https://www.motorsport-magazin.com/formel1/news-280617-formel-1-live-liveticker-abu-dhabi-heute-das-rennen-news-start-ergebnis-startaufstellung-sieger-2022-f1-sebastian-vettel-mick-schumacher/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Formel 1 Ticker-Nachlese Abu Dhabi: Stimmen zum Finale</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSE6nMg0a6z8urg0uOEpM64Vh8sGYkT5EnGiaHO4MsFyHiENcxt3VqFsDKHCkf6NYR9tK7sxmc6" alt="Formel 1 Ticker-Nachlese Abu Dhabi: Stimmen zum Finale" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Das war das Finale der Formel 1 in Abu Dhabi. Sebastian Vettel glänzt zum Abschied, Max Verstappen feiert Sieg Nr. 15. Die Reaktionen in der&nbsp;...</p></div>
            </div>
        </a><a href='https://www.spox.com/de/sport/formel1/2211/Artikel/rennen-beim-gp-abu-dhabi-heute-im-liveticker.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Formel 1: Rennen beim GP von Abu Dhabi: Verstappen gewinnt ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQMPKFiwD21qhLInPXEYvqRZ4GuTFGPZ78pp-Xi5gG2F9Uz1tHKcH1kdKw77KhpKafSQxT6uBZY" alt="Formel 1: Rennen beim GP von Abu Dhabi: Verstappen gewinnt ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Weltmeister Max Verstappen hat auch das Saisonfinale der Formel 1 in Abu Dhabi gewonnen und seinen Rekord damit ausgebaut. Der Niederländer im Red Bull&nbsp;...</p></div>
            </div>
        </a><a href='https://www.auto-motor-und-sport.de/formel-1/f1-fotos-gp-abu-dhabi-2022-bilder-highlights-rennen/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>F1-Fotos GP Abu Dhabi 2022 - Highlights Rennen: Donuts fürs ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ0uG4KtzgVSDd9Qo_rw2wnnkgc9H8dd4mO9Ruqkzii0NFprFNPQIFoRBXCc962t9qANuwnqgTJ" alt="F1-Fotos GP Abu Dhabi 2022 - Highlights Rennen: Donuts fürs ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Die Formel 1 bestritt ihr letztes Saisonrennen. Sebastian Vettel verabschiedete sich mit einem Punkt. Der Rennsieg ging an Max Verstappen. Die Highlights.</p></div>
            </div>
        </a><a href='https://volksblatt.at/sport/f1-verstappen-gewann-in-abu-dhabi-739068/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Verstappen siegt in Abu Dhabi – Leclerc Vizeweltmeister</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQxmZrEazSj9MExy71DweYOTSFF4EO5Wl64bd-ZfyVRAVpODGcvVxBEU2fLVXPaoeexkbtO4vCT9g" alt="Verstappen siegt in Abu Dhabi – Leclerc Vizeweltmeister" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Max Verstappen hat den Rekord für Siege innerhalb einer Formel-1-Saison noch höher geschraubt. Der Weltmeister gewann das Finale in Abu Dhabi und schaffte&nbsp;...</p></div>
            </div>
        </a><a href='https://sport.sky.de/formel1/artikel/formel-1-gp-in-abu-dhabi-sky-user-bewerten-alle-f1-fahrer/12750330/34240'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Formel 1 GP in Abu Dhabi: Sky User bewerten alle F1-Fahrer</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQRTXY1pTBK0M9pp4scft3q7eIrcvyfdt9lQy07u17g9pPudXAVsdslkbm6qKluwx-OmPZ7DBei" alt="Formel 1 GP in Abu Dhabi: Sky User bewerten alle F1-Fahrer" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Max Verstappen gewinnt auch das Saison-Finale in Abu Dhabi. Für Sebastian Vettel geht es bei seiner Abschiedsfahrt immerhin in die Punkte - trotz&nbsp;...</p></div>
            </div>
        </a><a href='https://www.motorsport-magazin.com/formel2/news-280616-formel-2-abu-dhabi-logan-sargeant-fixiert-f1-aufstieg-iwasa-siegt-rennen-ergebnis-f2-2022/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Formel 2 Abu Dhabi: Sargeant fixiert F1-Cockpit, Iwasa siegt</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRa2ckMoK6rd7Z8USOtZuaRE8vOZnUZxuMX455dhATOxqbUmY2lP-r23HAzLbxDGiLAUGxw3GcB" alt="Formel 2 Abu Dhabi: Sargeant fixiert F1-Cockpit, Iwasa siegt" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Logan Sargeant kann feiern: Mit einem vierten Platz in der Formel-2-Meisterschaft garantiert der Amerikaner sein F1-Cockpit. Iwasa gewinnt Saisonfinale.</p></div>
            </div>
        </a>
        </Template></>;
}