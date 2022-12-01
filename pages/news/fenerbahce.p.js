import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Fenerbahce</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Fenerbahce"/>
        <meta name="description" content="Trending News about Fenerbahce" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Fenerbahce</h1>
            <Image width={800} height={500} src="https://gazetefutbol.de/wp-content/uploads/2022/11/AW771545_35-scaled-e1669843732206.jpg" alt="Fenerbahce"/>
            <h3>Recent News</h3>
            <a href='https://gazetefutbol.de/fenerbahce-dreht-rueckstand-gegen-vallecano/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Fenerbahce dreht Rückstand gegen Rayo Vallecano – Joao Pedro ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR3hp82rdUgZFwn5nFn8RjJwXU7V-i7lgusyYQfK1Pe4DN1bG_vw8lp8BMWqNN_BG-yuYGdkbTp" alt="Fenerbahce dreht Rückstand gegen Rayo Vallecano – Joao Pedro ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Fenerbahce hat zum Auftakt des Vierer-Turniers mit Rayo Vallecano, FC Villarreal und Galatasaray einen 3:1-Sieg über Vallecano eingefahren.</p></div>
            </div>
        </a>
        </Template></>;
}