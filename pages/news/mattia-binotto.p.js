import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Mattia Binotto</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Mattia Binotto"/>
        <meta name="description" content="Trending News about Mattia Binotto" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Mattia Binotto</h1>
            <Image width={800} height={500} src="https://media.kleinezeitung.at/social_klz/images/uploads_520/focal3322x1603-5779x4669/f/3/c/6221628/967DF9DC-F599-459D-95D6-A005EFD7026D_v0_h.jpg" alt="Mattia Binotto"/>
            <h3>Recent News</h3>
            <a href='https://www.boerse-express.com/news/articles/ferrari-bestaetigt-das-aus-von-teamchef-mattia-binotto-527610'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ferrari bestätigt das Aus von Teamchef Mattia Binotto</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Ferrari bestätigt das Aus von Teamchef Mattia Binotto" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Was sich bereits angekündigt hat, ist nun offiziell: Mattia Binotto ist nicht mehr länger Teamchef von Ferrari. Die Scuderia bestätigt die Trennung von&nbsp;...</p></div>
            </div>
        </a><a href='https://www.kleinezeitung.at/sport/motorsport/formel1/6221628/Wer-folgt-nach_Mattia-Binotto-ist-bei-Ferrari-an-Fahrern-Team-und'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mattia Binotto ist bei Ferrari an Fahrern, Team und Auto gescheitert</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS51LsJ4OtEDuRmfXdtjnWzBRiM5d2Tm8-QkiiEyjINz8oOUbbI8fEHmLqLOTNG6EJU5rYbbdg5" alt="Mattia Binotto ist bei Ferrari an Fahrern, Team und Auto gescheitert" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ferrari trennt sich nach monatelangen Spekulationen von seinem Formel-1-Teamchef Mattia Binotto. Der Italiener tritt mit 31. Dezember zurück.</p></div>
            </div>
        </a><a href='https://www.motorsport-total.com/formel-1/news/offiziell-teamchef-mattia-binotto-verlaesst-ferrari-22112903'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Offiziell: Teamchef Mattia Binotto verlässt Ferrari</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQDe1YskQJsKz31dbyyt7lQ84XomiGlVAX8W0Tfqtee2ygve9Iv3-7AkVQpAJqvz3o-UbhVHH3E" alt="Offiziell: Teamchef Mattia Binotto verlässt Ferrari" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mattia Binotto ist 2023 nicht mehr Teamchef von Ferrari in der Formel 1, aber wer seine Nachfolge am Kommandostand antreten wird, das ist noch offen.</p></div>
            </div>
        </a><a href='https://www.motorsport-magazin.com/formel1/news-280740-formel-1-2022-mattia-binotto-verlaesst-ferrari-nachfolger-unbekannt-frederic-vasseur-f1-john-elkann-leclerc-sainz-maranello/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Formel 1: Mattia Binotto verlässt Ferrari, Nachfolger unbekannt</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQgowU4K1Raz6RF0mLk3NUi0vPrvcHmHwJy4yhyaUmffLx7-JmzTr74xyG8Nf-usZseuSN1BdWC" alt="Formel 1: Mattia Binotto verlässt Ferrari, Nachfolger unbekannt" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Die Ära Mattia Binotto im Formel-1-Team von Ferrari ist beendet. Die Scuderia gibt den Rücktritt des Italieners als Teamchef bekannt. Nachfolger unbekannt.</p></div>
            </div>
        </a><a href='https://www.sport1.de/news/motorsport/formel1/2022/11/formel-1-schleudersitz-bei-ferrari-frei-wer-wird-nachfolger-von-mattia-binotto'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Formel 1: Schleudersitz bei Ferrari frei - wer wird Nachfolger von ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRV6VJa-unCRNrULKgVXTU5aRjNJptEWV9RKqvFx0X4LqimKmcPgMr_Mkovot6IaN2OkCMbUB1C" alt="Formel 1: Schleudersitz bei Ferrari frei - wer wird Nachfolger von ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Traumjob Ferrari-Teamchef? Mitnichten. Nach dem Aus von Mattia Binotto erweist sich die Suche nach einem Boss des italienischen&nbsp;...</p></div>
            </div>
        </a><a href='https://www.spox.com/de/sport/formel1/2211/News/f1-mit-grossem-bedauern-teamchef-mattia-binotto-verlaesst-scuderia-ferrari.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Formel 1 - &quot;Mit großem Bedauern&quot;: Teamchef Mattia Binotto verlässt ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ5IC0EMKcoshA778YiufjvuBBdDqaso43XDdcr7GoI7Ge1YpHc2_psUNyvXbsz1gWuUvvwJJBN" alt="Formel 1 - &quot;Mit großem Bedauern&quot;: Teamchef Mattia Binotto verlässt ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ferrari wird in der Formel-1-WM 2023 einen neuen Teamchef an der Boxenmauer haben. Mattia Binotto, seit 28 Jahren in unterschiedlichen Funktionen für die&nbsp;...</p></div>
            </div>
        </a><a href='https://www.faz.net/aktuell/sport/formel-1/formel-1-mattia-binotto-als-teamchef-von-ferrari-zurueckgetreten-18496622.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ferrari-Teamchef muss gehen: Binottos Abgang ist ein Fehler</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSSuqvznB540g98INw3-f2dwoOjtvnVgQh2Guk4d88ziOxmmNnWmKAO3WHWK9q9pOmwiZU167Zq" alt="Ferrari-Teamchef muss gehen: Binottos Abgang ist ein Fehler" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Rennleiter Mattia Binotto, seit Jahrzehnten in Diensten der Scuderia, nimmt seinen Hut. So endet abermals ein typischer, innenpolitischer...</p></div>
            </div>
        </a>
        </Template></>;
}