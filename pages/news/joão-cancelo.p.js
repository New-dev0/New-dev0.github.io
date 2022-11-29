import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>João Cancelo</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,João Cancelo"/>
        <meta name="description" content="Trending News about João Cancelo" /></Head><Template>
            <h1 style={{fontSize: "30"}}>João Cancelo</h1>
            <Image width={800} height={500} src="https://thumbs.web.sapo.io/?W=1200&H=630&delay_optim=1&tv=1&crop=center&bottom_overlay=https%3A%2F%2Fdesporto.sapo.pt%2Fassets%2Fimg%2Fdesporto-sapo%2Ffacebook-overlay.png&epic=MTBkOPM7+S0y87kWRL146YS4gns83X48RMFVd0ZfnqTySPYCXAVh/LFFS9ADM6YIQo9f6lCC4o63qIeDA+/zvwj3uwNMXACeZhc7KBt2lqe4b3o=" alt="João Cancelo"/>
            <h3>Recent News</h3>
            <a href='https://desporto.sapo.pt/futebol/mundial/artigos/felix-e-cancelo-colocam-portugal-no-topo-saiba-porque'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Félix e Cancelo colocam Portugal no topo. Saiba porquê</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSTW6G56u883PVynWAiYI7EE6U5TmIm-r_-QHrTtcluk2S3q3zDMuFddO63JXGDAFdgHkXcTbYe" alt="Félix e Cancelo colocam Portugal no topo. Saiba porquê" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Segundo o Relatório do Observatório do Futebol (CIES), a &#39;Equipa das Quinas&#39; está no topo do ranking das seleções do mundial com melhor média de minutos&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}