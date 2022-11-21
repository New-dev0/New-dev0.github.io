import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Fußball-WM spiele</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Fußball-WM spiele"/>
        <meta name="description" content="Trending News about Fußball-WM spiele" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Fußball-WM spiele</h1>
            <Image width={800} height={500} src="https://assets.deutschlandfunk.de/64423739-5abc-44d4-9a33-881ad0cc6595/original.jpg?t=1668865809119" alt="Fußball-WM spiele"/>
            <h3>Recent News</h3>
            <a href='https://www.deutschlandfunkkultur.de/fussball-wm-boykott-100.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Fußball-WM in Katar - Warum ich mir die Spiele doch ansehe</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRJFSqW4kfnnCHdQ4Qil3zectOffPX2Yi_94P3G9CiWz0037BS7cblP19B14XR09ifHLeFV1Py4" alt="Fußball-WM in Katar - Warum ich mir die Spiele doch ansehe" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Der Umgang mit Arbeitsmigranten, die Unterdrückung der LGBTQ-Community und eingeschränkte Frauenrechte: Die Fußball-WM in Katar ist umstritten – manche&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}