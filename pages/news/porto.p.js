import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Porto</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Porto"/>
        <meta name="description" content="Trending News about Porto" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Porto</h1>
            <Image width={800} height={500} src="https://www.rbsdirect.com.br/filestore/4/6/2/8/6/2/4_de94c465ea54fa0/4268264_d42812a5dc88de0.jpg?w=1200&h=630&a=c&version=1575255600" alt="Porto"/>
            <h3>Recent News</h3>
            <a href='https://prefeitura.poa.br/smtc/noticias/movimento-porto-alegre-cidade-educadora-promove-debate-sobre-o-plano-municipal-da'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Movimento Porto Alegre Cidade Educadora promove debate sobre ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Movimento Porto Alegre Cidade Educadora promove debate sobre ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Com a intenção de debater a elaboração do Plano Municipal da Primeira Infância (PMPI) de Porto Alegre e apresentar a proposta do Grupo de Trabalho Primeiros&nbsp;...</p></div>
            </div>
        </a><a href='https://gauchazh.clicrbs.com.br/geral/noticia/2022/12/44-anos-depois-militares-envolvidos-em-sequestro-em-porto-alegre-sao-presos-clbfarckb00290170c3i48h0a.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>44 anos depois, militares envolvidos em sequestro em Porto Alegre ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSFXryJuK2l79fbxmf7BOO1vVIQ2P5R8MKJ1yKtHmlzcRXhYkUxD6RyWgmCUIx4tA50lOFzBVH9" alt="44 anos depois, militares envolvidos em sequestro em Porto Alegre ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Coronéis do Exército uruguaio prenderam em território gaúcho militantes contrários à ditadura naquele país.</p></div>
            </div>
        </a><a href='https://prefeitura.poa.br/eptc/noticias/porto-alegre-recebe-premio-nacional-com-programa-um-dia-de-agente-da-eptc'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Porto Alegre recebe prêmio nacional com programa Um Dia de ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcThvE9-YO-m328DGZ7HfNfMpHuiAuQ79-n3dQQ5eQn3GpLYS5YWontbtZ14BW4j6ZUEIa-Dcfj2" alt="Porto Alegre recebe prêmio nacional com programa Um Dia de ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A Prefeitura de Porto Alegre, por meio da Empresa Pública de Transporte e Circulação (EPTC), recebeu nesta quinta-feira, 8, em cerimônia realizada em&nbsp;...</p></div>
            </div>
        </a><a href='https://gauchazh.clicrbs.com.br/porto-alegre/noticia/2022/12/prefeitura-de-porto-alegre-suspende-disputa-para-administracao-de-postos-de-saude-clbflf5g1004j014ux8x9mgpz.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Prefeitura de Porto Alegre suspende disputa para administração de ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Prefeitura de Porto Alegre suspende disputa para administração de ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A prefeitura de Porto Alegre decidiu suspender a concorrência que definiria as organizações da sociedade civil que administrariam os postos de saúde da&nbsp;...</p></div>
            </div>
        </a><a href='https://primeirafeira.com.br/indaiatuba-e-porto-feliz-oferecem-atracoes-natalinas/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Indaiatuba e Porto Feliz oferecem atrações natalinas - Portal ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQtoR2fXQNiVYGqntTp-jVE2fW8Xz97s-xqLtt0ZE49A9fVpAcVdWaKO-htxt46dOf5JD8f6iI0" alt="Indaiatuba e Porto Feliz oferecem atrações natalinas - Portal ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O repertório contará com solos da soprano Thayana Roverso e mais músicos convidados para integrar a orquestra, tocando clássicos das canções de Natal, como &#39;&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}