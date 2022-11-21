import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Taça da Liga grupos</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Taça da Liga grupos"/>
        <meta name="description" content="Trending News about Taça da Liga grupos" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Taça da Liga grupos</h1>
            <Image width={800} height={500} src="https://www.abola.pt/img/fotos/abola2015/GENERICAS/2020/tacadaligaleiria.jpg" alt="Taça da Liga grupos"/>
            <h3>Recent News</h3>
            <a href='https://www.abola.pt/nnh/2022-11-20/taca-da-liga-resultados-e-calendario-da-fase-de-grupos/965111'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Resultados e calendário da fase de grupos</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ-vuA5f-iZ0m8Gb5YspTuZQ5e9ruSB4j1CYkt9O7lwuxHDwiIyhjrVanOW6aRst0G6sPRaGAuJ" alt="Resultados e calendário da fase de grupos" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Grupos, resultados e calendário da fase de grupos da Taça da Liga (note-se que os grupos G e H têm cinco equipas). Grupo A: FC Porto, Vizela, Chaves, Mafra.</p></div>
            </div>
        </a>
        </Template></>;
}