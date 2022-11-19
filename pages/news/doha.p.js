import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Doha</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Doha"/>
        <meta name="description" content="Trending News about Doha" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Doha</h1>
            <Image width={800} height={500} src="https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2022/11/clubedoha.jpg" alt="Doha"/>
            <h3>Recent News</h3>
            <a href='https://www.cnnbrasil.com.br/esporte/copa-do-mundo-2022-catar-doha-hide-primeira-mega-boate-casa-noturna/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Primeira “mega boate” de Doha é inaugurada às vésperas da Copa ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTAa4xnlBDwCY6a88dLtIm32ip_ANav5wP1tgpOgGWLOJvrNhfLs9cxD0LPW9-v8i9IsCwERUW_" alt="Primeira “mega boate” de Doha é inaugurada às vésperas da Copa ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Com bebidas alcoólicas e DJs até as 3h, a Hide espera receber torcedores - e, no longo prazo, também jogadores - que vão a Doha para a Copa do Mundo.</p></div>
            </div>
        </a><a href='https://www.mercadoeeventos.com.br/multimidia/fotos/partida-cultural-futebol-e-turismo-movimentam-a-economia-de-doha/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Partida cultural: futebol e turismo movimentam a economia de Doha ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTkN5uAhBVGxLog5KsHLtl6FA_s9iTd45QTk8-pebeRSvuSY9kRckGO7DzgKD2NCFBa7xHfekjJ" alt="Partida cultural: futebol e turismo movimentam a economia de Doha ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A partir de 20 de novembro, os amantes de futebol de todos os países vão vibrar a cada partida da Copa do Mundo da FIFA 2022, que acontece no Qatar.</p></div>
            </div>
        </a><a href='https://www.uol.com.br/esporte/colunas/juca-kfouri/2022/11/18/o-primeiro-dia-em-doha.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Juca Kfouri - O primeiro dia em Doha</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSbJjpIIuGa8teoA5QrM-D4M8llM5VZbgwkpt8UYzxARrkOvYIpBWOuVd6dS4NH_PKDLRYhQSCp" alt="Juca Kfouri - O primeiro dia em Doha" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Pense num grande concurso de arquitetura, com os arquitetos competindo para ver quem faz o prédio mais original, mais bizarro, mais repleto de&nbsp;...</p></div>
            </div>
        </a><a href='https://www.folhape.com.br/esportes/esperanca-e-ambicao-dividem-parque-em-doha-as-vesperas-de-abertura-da/247520/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Esperança e ambição dividem parque em Doha às vésperas de ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRyQ2wNvrZrT0KcHMFT1KWTwl2QR6uP8zZUU2glH9xLrzJoxFAXDXPXtUtL4B82ztGt7KvStsBJ" alt="Esperança e ambição dividem parque em Doha às vésperas de ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>DOHA (CATAR) - Aspire Park é o nome do maior parque de Doha, capital do Catar. São 88 hectares de um ambiente que, dentre as programações mais comuns, est.</p></div>
            </div>
        </a><a href='https://br.vida-estilo.yahoo.com/viaje-nas-tradi%C3%A7%C3%B5es-catar-famoso-214035851.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Viaje nas tradições do Catar: famoso mercado de Doha, Souq Waqif ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQH-w5APG1wN-NTzZE3NHZc6se69Qkdg433v2qTsC4t8RgrU-4WnQoUnTvHcFZ7Syd0aHiOR-Em" alt="Viaje nas tradições do Catar: famoso mercado de Doha, Souq Waqif ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O mercado Souq Waqif tem desde roupa até especiarias e é ponto certo para as compras tanto dos moradores quanto dos turistas.</p></div>
            </div>
        </a>
        </Template></>;
}