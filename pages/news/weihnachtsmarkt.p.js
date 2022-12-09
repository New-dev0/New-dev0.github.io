import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Weihnachtsmarkt</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Weihnachtsmarkt"/>
        <meta name="description" content="Trending News about Weihnachtsmarkt" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Weihnachtsmarkt</h1>
            <Image width={800} height={500} src="" alt="Weihnachtsmarkt"/>
            <h3>Recent News</h3>
            <a href='https://www.5min.at/202212592713/alle-jahre-wieder-murpark-laedt-zum-weihnachtsmarkt/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Alle Jahre wieder: Murpark lädt zum Weihnachtsmarkt</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQw5mHazbowV8bR2rTCXdhg5n_6bbJKfunzafRZbH9FH0sqXMj-UzQrRsFud1tVC7JN5EQ74hBt" alt="Alle Jahre wieder: Murpark lädt zum Weihnachtsmarkt" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Der MURPARK möchte die Kunden vor allem in der Weihnachtszeit emotional berühren. So ist der Weihnachtsmarkt bis 24. Dezember mit Christbaumkugeln, Schmuck&nbsp;...</p></div>
            </div>
        </a><a href='https://www.wa.de/nordrhein-westfalen/weihnachtsmarkt-bochum-oeffnungszeiten-2022-programm-weihnachtspass-staende-besucher-kinder-91929621.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Weihnachtsmarkt in Bochum 2022: Öffnungszeiten, Programm, Spar ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSerUdaLtw9w317_qevIi-RNKPKAen7zi_M_gUlD2BpTS0HlH1RXXpjyOH-4WIMbO9J8aevXtUL" alt="Weihnachtsmarkt in Bochum 2022: Öffnungszeiten, Programm, Spar ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Auch die Stadt Bochum wartet mit einem besinnlichen Angebot auf: Die „Bochumer Weihnacht“ soll an verschiedenen Standorten in der Innenstadt Besucher in&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}