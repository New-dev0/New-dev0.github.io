import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Nico Rosberg</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Nico Rosberg"/>
        <meta name="description" content="Trending News about Nico Rosberg" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Nico Rosberg</h1>
            <Image width={800} height={500} src="" alt="Nico Rosberg"/>
            <h3>Recent News</h3>
            <a href='https://f1-insider.com/formel-1-nico-rosberg-zukunft-technologie-51890/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Rosberg: Formel 1 in Zukunft technologisch relevant? | F1-Insider.com</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Rosberg: Formel 1 in Zukunft technologisch relevant? | F1-Insider.com" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nico Rosberg ist der letzte deutsche Weltmeister der Formel 1. Doch er glaubt nicht an die technologische Vorreiterrolle der Königsklasse.</p></div>
            </div>
        </a><a href='https://sport.sky.de/formel1/artikel/formel-1-rosberg-denkt-nicht-an-comeback/12757849/34240'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Formel 1: Rosberg denkt nicht an Comeback</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSQKkhI2cQSthGIm6ZzpcRKdZ0F0h6jq9rKv9jMUqs3EqbNB-AaluChmqVz2AcWqFSDqAsmgYkd" alt="Formel 1: Rosberg denkt nicht an Comeback" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nico Rosberg verabschiedete sich 2016 nach seinem ersten WM-Triumph aus der Formel 1. Eine Rückkehr in die Königsklasse schließt der 37 Jahre aus.</p></div>
            </div>
        </a><a href='https://www.derwesten.de/sport/sportmix/formel-1-nico-rosberg-extreme-e-id300331225.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Formel 1: Deutsche Comeback-Hoffnung endgültig dahin – diese ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSFbFpQ0RkLegU_d5Ctgey12UsP-cq83giCjWePi9tKVaC0vrYXSAfoTsUevXfqaGaxipvk4tw5" alt="Formel 1: Deutsche Comeback-Hoffnung endgültig dahin – diese ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Über Jahre prägten deutsche Fahrer die Formel 1. Michael Schumacher, Sebastian Vettel, Nico Rosberg – sie alle wurden Weltmeister. Es gab Zeiten, da fuhren&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}