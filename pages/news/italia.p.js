import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Italia</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Italia"/>
        <meta name="description" content="Trending News about Italia" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Italia</h1>
            <Image width={800} height={500} src="" alt="Italia"/>
            <h3>Recent News</h3>
            <a href='https://radioalianca.com.br/concordia/comitiva-de-concordia-e-recebida-em-sarcedo-na-italia'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Comitiva de Concórdia é recebida em Sarcedo, na Itália</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Comitiva de Concórdia é recebida em Sarcedo, na Itália" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Município irá firmar o Pacto Gemellaggio com a cidade italiana.</p></div>
            </div>
        </a>
        </Template></>;
}