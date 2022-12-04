import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Amistosos</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Amistosos"/>
        <meta name="description" content="Trending News about Amistosos" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Amistosos</h1>
            <Image width={800} height={500} src="https://ne45.com.br/wp-content/uploads/2022/12/Design-sem-nome-3.jpg" alt="Amistosos"/>
            <h3>Recent News</h3>
            <a href='https://ne45.com.br/2022/12/03/santa-cruz-vence-primeiro-amistoso-2023/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Santa Cruz vence primeiro amistoso da pré-temporada 2023</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTFpRNMrz7t9WTw5SsNonFjBKcl07nxRo8_Vzz8LPMcvjzoYtXQn13xH3ND3ffTMWZrqvL1mC5A" alt="Santa Cruz vence primeiro amistoso da pré-temporada 2023" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ainda sem quatro jogadores, Santa Cruz bateu clube de Abreu e Lima por 4 a 0; Tricolor encara CSP na próxima semana.</p></div>
            </div>
        </a>
        </Template></>;
}