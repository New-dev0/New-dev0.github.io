import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Reserva</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Reserva"/>
        <meta name="description" content="Trending News about Reserva" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Reserva</h1>
            <Image width={800} height={500} src="https://www.aloalobahia.com/images/p/reserva_loja_lauro_de_freitas.jpeg" alt="Reserva"/>
            <h3>Recent News</h3>
            <a href='https://aloalobahia.com/notas/reserva-inaugura-primeira-loja-em-lauro-de-freitas'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Reserva inaugura primeira loja em Lauro de Freitas</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSu-6y9bHnG3VyfnbbHJUdWjkmjEB8ny50J9Tx2IDRDDCxYt1FdtBkRV2RZVr7j70lWerJMMhGi" alt="Reserva inaugura primeira loja em Lauro de Freitas" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A Reserva, marca carioca de moda, acaba de inaugurar sua primeira loja no Litoral Norte baiano. A nova unidade está localiz...</p></div>
            </div>
        </a><a href='https://gazetadetoledo.com.br/refugio-bela-vista-renova-titulo-de-posto-avancado-da-reserva-da-mata-atlantica/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Refúgio Bela Vista renova título de Posto Avançado da Reserva da ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRKc-G_z8BNJuBo0Q2eX_zZ0GTH4ppt4ISabGlyFilPMcn6Meg4HNSphC4U5zJwIL3lp6iczpXi" alt="Refúgio Bela Vista renova título de Posto Avançado da Reserva da ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O Refúgio Biológico Bela Vista (RBV), da Itaipu Binacional, segue como Posto Avançado da Reserva da Biosfera da Mata Atlântica. A renovação por mais quatro anos&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}