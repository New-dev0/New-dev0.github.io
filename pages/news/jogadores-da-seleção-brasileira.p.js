import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Jogadores da seleção brasileira</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Jogadores da seleção brasileira"/>
        <meta name="description" content="Trending News about Jogadores da seleção brasileira" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Jogadores da seleção brasileira</h1>
            <Image width={800} height={500} src="https://extra.globo.com/esporte/25621039-570-7bf/w976h550-PROP/arte-(2).png" alt="Jogadores da seleção brasileira"/>
            <h3>Recent News</h3>
            <a href='https://extra.globo.com/esporte/mulheres-dos-jogadores-da-selecao-incentivam-craques-apos-derrota-vamos-para-cima-25621034.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mulheres dos jogadores da seleção incentivam craques após ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ7eVirsSmgTg0pIyO-eOr894yNrW782-MN97Fc4LnJ55t6lTXmiIndeAMGP9RBIR7qWu4QCL7z" alt="Mulheres dos jogadores da seleção incentivam craques após ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>As mulheres dos jogadores incentivaram seus craques a não deixarem a bola cair depois da derrota inesperada para a seleção de Camarões, em que o Brasil&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}