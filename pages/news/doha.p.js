import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Doha</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Doha"/>
        <meta name="description" content="Trending News about Doha" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Doha</h1>
            <Image width={800} height={500} src="https://www.fr.de/bilder/2022/11/20/91927124/30327318-die-skyline-von-doha-2bMyDdGhZefe.jpg" alt="Doha"/>
            <h3>Recent News</h3>
            <a href='https://www.fr.de/sport/fussball/viele-menschen-wenig-platz-das-nadeloehr-von-doha-91927124.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Viele Menschen, wenig Platz: Das Nadelöhr von Doha</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRpKS0aIJqjkZxqXaVFGQix38MIBIWG0_xq3lWonthJZuiYq0AL1F4Fd5rqRcMubG1JVPcm6Xqo" alt="Viele Menschen, wenig Platz: Das Nadelöhr von Doha" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Es wird eine Herkulesaufgabe, Ströme von Hunderttausenden für vier WM-Spiele an einem Tag durch eine Stadt zu lenken, die bis vor kurzem ganz auf den&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}