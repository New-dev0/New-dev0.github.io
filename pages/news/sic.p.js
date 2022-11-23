import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>SIC</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,SIC"/>
        <meta name="description" content="Trending News about SIC" /></Head><Template>
            <h1 style={{fontSize: "30"}}>SIC</h1>
            <Image width={800} height={500} src="" alt="SIC"/>
            <h3>Recent News</h3>
            <a href='https://sicnoticias.pt/pais/2022-11-22-Projeto-SIC-Esperanca-da-nova-vida-a-aldeia-de-Torres-Novas-acf74dbb'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Projeto SIC Esperança dá &quot;nova vida&quot; a aldeia de Torres Novas</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQJr9OpsXUlGM-qYmQPUfGcC-hkEmoZbz59qb2rNlaBG7p9vR3yFh9TQCIDFAr9h-vKRQlW3MLN" alt="Projeto SIC Esperança dá &quot;nova vida&quot; a aldeia de Torres Novas" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O centro de assistência paroquial de Pedrógão foi recuperado e convertido numa universidade sénior.</p></div>
            </div>
        </a>
        </Template></>;
}