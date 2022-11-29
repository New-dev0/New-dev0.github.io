import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Yann Sommer</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Yann Sommer"/>
        <meta name="description" content="Trending News about Yann Sommer" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Yann Sommer</h1>
            <Image width={800} height={500} src="https://images.bstatic.de/cZyfapkgboGzwETjESA7MReCH1E=/1200x630/filters:focal(990x504:1010x524)/images/9dc354e6/e4e6/4aeb/afca/852e3f4cc6ed.jpg" alt="Yann Sommer"/>
            <h3>Recent News</h3>
            <a href='https://www.bunte.de/stars/wm-star-yann-sommer-so-viel-power-hat-seine-frau-alina.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>WM-Star Yann Sommer : So viel Power hat seine Frau Alina</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR08v6ew4ES--UNuxDPvEz3SpPILlcmvo087dHBeLgoPEEkZrfs-2zwBA1JY9er4ybUsUaUcPgL" alt="WM-Star Yann Sommer : So viel Power hat seine Frau Alina" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Yann Sommer spielt in diesem Jahr für die Schweizer Nationalmannschaft bei der WM in Katar. Doch seine Frau scheint eine mindestens genauso eindrucksvolle&nbsp;...</p></div>
            </div>
        </a><a href='https://www.4-4-2.com/bundesliga/borussia-moenchengladbach/spektakulaeres-geruecht-yann-sommer-zu-real-madrid/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Spektakuläres Gerücht: Yann Sommer zu Real Madrid?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTvsBdX95QeS5ViszVdwX8SKFauYBc1CpA4Bbr7V8urDArJ4-FR3LE29GyNdBfwiDaSZN9lNAI0" alt="Spektakuläres Gerücht: Yann Sommer zu Real Madrid?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Da Thibaut Courtois nur sehr wenige Schwächen zeigt, ist für Andriy Lunin kein Vorbeikommen am Stammgoalie von Real Madrid. Dass es der junge Ukrainer drauf&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}