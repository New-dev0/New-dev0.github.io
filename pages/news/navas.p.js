import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Navas</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Navas"/>
        <meta name="description" content="Trending News about Navas" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Navas</h1>
            <Image width={800} height={500} src="https://media1.faz.net/ppmedia/aktuell/sport/3579456028/1.8499819/facebook_teaser/an-ihm-gab-es-fuer-japan-kein.jpg" alt="Navas"/>
            <h3>Recent News</h3>
            <a href='https://www.faz.net/aktuell/sport/fussball-wm/fussball-wm-keylor-navas-ist-costa-ricas-beruehmtester-fussballer-18499681.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Star-Torwart Keylor Navas: Costa Ricas geduldiger Rückhalt</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ-w8JegIO328MSd2a56vBodNeMun8iVTgWaGb_y_bseXPXbz2GviLl5dHZ20NU4EU68HDewbGa" alt="Star-Torwart Keylor Navas: Costa Ricas geduldiger Rückhalt" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Der Torwart ist der berühmteste Spieler von Costa Rica. In seiner Karriere hat Keylor Navas viele Titel gewonnen – und so manchem Umweg...</p></div>
            </div>
        </a>
        </Template></>;
}