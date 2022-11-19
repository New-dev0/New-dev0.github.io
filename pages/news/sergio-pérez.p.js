import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Sergio pérez</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Sergio pérez"/>
        <meta name="description" content="Trending News about Sergio pérez" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Sergio pérez</h1>
            <Image width={800} height={500} src="https://www.motorsport-total.com/img/sm/216133_mst.jpg?rf=1560535082" alt="Sergio pérez"/>
            <h3>Recent News</h3>
            <a href='https://www.motorsport-total.com/formel-1/news/fia-plant-keine-untersuchung-zum-monaco-unfall-von-sergio-perez-22111811'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>FIA plant keine Untersuchung zum Monaco-Unfall von Sergio Perez</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSSTaRNVH8y5VD_K78mdJOJ4TpyjMN4dgt0ca1bgqZEqHAGYTZRlw35eoWBRiVX0REyvDEXkFvI" alt="FIA plant keine Untersuchung zum Monaco-Unfall von Sergio Perez" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Warum der Automobil-Weltverband (FIA) keine Untersuchung anstoßen will zum Monaco-Unfall von Perez, dem möglichen Auslöser der Stallorder-Affäre bei Red&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}