import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Jin</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Jin"/>
        <meta name="description" content="Trending News about Jin" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Jin</h1>
            <Image width={800} height={500} src="" alt="Jin"/>
            <h3>Recent News</h3>
            <a href='https://www.dgabc.com.br/Noticia/3898448/jin-do-bts-completa-30-anos-de-idade-no-domingo-e-ganha-data-de-inicio-no-servico-militar'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jin, do BTS, completa 30 anos de idade no domingo e ganha data ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Jin, do BTS, completa 30 anos de idade no domingo e ganha data ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Parabéns! Kim Seok-Jin, do grupo sul-coreano BTS, já completou 30 anos de idade no país - isso porque o fuso-horário do país está 12 horas a frente do&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}