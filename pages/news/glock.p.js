import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Glock</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Glock"/>
        <meta name="description" content="Trending News about Glock" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Glock</h1>
            <Image width={800} height={500} src="https://ibs.orf.at/noe?image=https%3A%2F%2Foekastatic.orf.at%2Fmims%2F2022%2F47%2F75%2Fcrops%2Fw%3D1200%2Ch%3D627%2Cq%3D75%2F1572917_master_575375_chronik_verbrechen_001_zko.jpg%3Fs%3Dd32057b8b85014cb67379b6f1e7d43d2c4b49d31" alt="Glock"/>
            <h3>Recent News</h3>
            <a href='https://noe.orf.at/stories/3182341/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Wirtschaft: Rekordumsatz für Pistolenhersteller Glock</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ-qmAQSbKax1ziXHMuJ5uM0CSWkfppKeuH1sAqwEGnECJa-sr7-P6EYJaCBzig8GyNqe3zLsfz" alt="Wirtschaft: Rekordumsatz für Pistolenhersteller Glock" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Der österreichische Pistolenhersteller Glock mit Sitz in Deutsch-Wagram (Bezirk Gänserndorf) hat 2021 – wie bereits im Jahr zuvor – wieder einen&nbsp;...</p></div>
            </div>
        </a><a href='https://kurier.at/wirtschaft/waffenfirma-glock-erzielt-rekord-umsatz-und-gewinn/402219255'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Waffenfirma Glock erzielt Rekord-Umsatz und -Gewinn</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR9jYR0kX3nanXrn299JOViSzqIcpQ1kr0D3MEiNZV8ZQDC0CrKWoFCTh6f1QHti9am68eYEM-G" alt="Waffenfirma Glock erzielt Rekord-Umsatz und -Gewinn" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Vor allem die starke Nachfrage in den USA brachten das Traditionsunternehmen mit Sitz in Ferlach 2021 an den Rand seiner Kapazitätsgrenzen,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.krone.at/2857782'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Nachfrage „sehr stark“ - Waffenproduzent Glock 2021 mit ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSA5C3kUD69X93LGN-kIjwLnjLdl_iWfNVQv9do_7c2t4Aom-FhXdIUyvT6FtCjY7jzOvNd21OG" alt="Nachfrage „sehr stark“ - Waffenproduzent Glock 2021 mit ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Der österreichische Pistolen-Hersteller Glock hat 2021 - wie bereits im Jahr zuvor - erneut einen Rekordumsatz erzielt. Der Umsatzanstieg lag bei ...</p></div>
            </div>
        </a><a href='https://www.5min.at/202211584648/glock-verzeichnet-erneut-rekordumsatz-nachfrage-aus-usa-gross/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Glock verzeichnet erneut Rekordumsatz: Nachfrage aus USA groß</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRF-jE1FAVeY85cYH4f_E99LMMQOwTOgv2UIgLGRzk2K1aD-d-fn50KKqtK3yXHh5nytzcNXNqq" alt="Glock verzeichnet erneut Rekordumsatz: Nachfrage aus USA groß" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Der Kärntner Waffen-Hersteller Glock hat im Vorjahr wieder einen Rekordumsatz verzeichnet. Der Umsatz konnte von 780,05 Millionen Euro auf 888,81 Millionen&nbsp;...</p></div>
            </div>
        </a><a href='https://www.kleinezeitung.at/wirtschaft/wirtschaftktnhp/6215985/Starke-Nachfrage_Pistolenproduzent-Glock-erzielt-Rekordeinnahmen'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pistolenproduzent Glock erzielt Rekordeinnahmen</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQkrFbjQdMxN7cvIDupOA0AqWedxqhlIvUrGZW9lYnwgFhc1KtsJOhrpblD0ghq7i-sEwfk2dO3" alt="Pistolenproduzent Glock erzielt Rekordeinnahmen" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Der österreichische Pistolen-Hersteller Glock mit Produktions-Standorten in Deutsch-Wagram und Ferlach hat 2021 – wie bereits im Jahr zuvor – wieder einen&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}