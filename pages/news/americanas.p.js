import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Americanas</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Americanas"/>
        <meta name="description" content="Trending News about Americanas" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Americanas</h1>
            <Image width={800} height={500} src="" alt="Americanas"/>
            <h3>Recent News</h3>
            <a href='https://br.usembassy.gov/pt/empresas-norte-americanas-e-brasileiras-apresentam-melhores-praticas-de-diversidade-e-inclusao-em-painel-no-instituto-caldeira/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Empresas norte-americanas e brasileiras apresentam melhores ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Empresas norte-americanas e brasileiras apresentam melhores ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A vice-chefe da Embaixada e Consulados dos EUA no Brasil, Michelle Esperdy, e o cônsul-geral dos EUA em Porto Alegre, Shane Christensen, abrirão o evento, que&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}