import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Paises Baixos</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Paises Baixos"/>
        <meta name="description" content="Trending News about Paises Baixos" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Paises Baixos</h1>
            <Image width={800} height={500} src="https://www.santos.sp.gov.br/../../static/files_www/styles/newspagemodal/public/field/image/isabela_carrari_0352.jpg" alt="Paises Baixos"/>
            <h3>Recent News</h3>
            <a href='https://www.santos.sp.gov.br/?q=noticia/autoridades-do-reino-dos-paises-baixos-estreitam-relacao-com-santos'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Autoridades do Reino dos Países Baixos estreitam relação com ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRIwDIim67-0pODhlKNQYzMbXRa2P0B7Kd63Jo9MOmcONq9_JrRiQJmLNDS74DYCFbjqc6K77nG" alt="Autoridades do Reino dos Países Baixos estreitam relação com ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O grupo foi recepcionado pelo prefeito Rogério Santos, pela vice-prefeita Renata Bravo (titular da Secretaria da Mulher, Cidadania e Direitos Humanos) e pelo&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}