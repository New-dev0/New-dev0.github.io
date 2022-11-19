import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Mane</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Mane"/>
        <meta name="description" content="Trending News about Mane" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Mane</h1>
            <Image width={800} height={500} src="https://p2.trrsf.com/image/fget/cf/1200/630/middle/images.terra.com/2022/11/18/454820572-6376870cc3eda.jpeg" alt="Mane"/>
            <h3>Recent News</h3>
            <a href='https://www.terra.com.br/esportes/presidente-do-senegal-manda-mensagem-para-sadio-mane-cortado-da-copa-do-mundo,c1c9f2102950f5349170904b81ed99a8ilkgnbsh.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Presidente do Senegal manda mensagem para Sadio Mané ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT03bDKQijyR4huxFM4fdFWanh0MGCHKrZ0JBfY6sRMXWp2pnxLYmSGTG_JGjCGsZs8wd3TkAqP" alt="Presidente do Senegal manda mensagem para Sadio Mané ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O presidente de Senegal, Macky Sall, desejou uma rápida recuperação ao atacante do Bayern de Munique Sadio Mané. O jogador não conseguiu se recuperar a&nbsp;...</p></div>
            </div>
        </a><a href='https://www.uol.com.br/esporte/ultimas-noticias/enm/2022/11/18/senegal-nao-planeja-convocar-um-substituto-para-o-lugar-de-mane-na-copa-do-mundo.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Porque Senegal não planeja convocar substituto para lugar de ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR2w8xeHgZeKnAqYtSZWZfgh9srCXzjaJGC0obqb8RI7fJo_DOsQF9tPCf4Y58OXs-B7-18ur96" alt="Porque Senegal não planeja convocar substituto para lugar de ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Com uma lesão na fíbula da perna direita, o principal atleta da seleção senegalesa ficou de fora da Copa do Mundo.</p></div>
            </div>
        </a><a href='https://ge.globo.com/futebol/selecoes/senegal/noticia/2022/11/18/senegal-nao-pretende-convocar-substituto-de-mane-para-disputa-da-copa-do-mundo.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Senegal não pretende convocar substituto de Mané para disputa da ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR0tpvyyUFXFPXLKigGNv40yJDUS4a0bWJUxDZaeMyM9I0Y8LGM15kdnrUEgp9YdKlQrltgWakE" alt="Senegal não pretende convocar substituto de Mané para disputa da ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Seleção africana ainda não oficializou decisão, mas, por agora, está certa de não chamar nenhum outro atleta para o lugar do atacante do Bayern.</p></div>
            </div>
        </a><a href='https://br.bolavip.com/futebol/E-agora-Senegal-toma-decisao-surpreendente-sobre-substituto-de-Mane-na-Copa-do-Mundo-20221118-0153.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;E agora?&quot;; Senegal toma decisão surpreendente sobre substituto ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQll8_X-H2PFDi5OCpjF896OhGbb5J465NG8Ce6aHHWswRuEWCJsz8sdI5MgQRWcqVCVxARoVAF" alt="&quot;E agora?&quot;; Senegal toma decisão surpreendente sobre substituto ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nesta semana, o mundo da bola se surpreendeu com o corte do atacante Sadio Mané da Copa do Mundo. O jogador, prinicipal destaque de Senegal,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.bemparana.com.br/noticias/apos-corte-da-copa-do-mundo-mane-e-confortado-pelo-presidente-do-senegal/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Após corte da Copa do Mundo, Mané é confortado pelo presidente ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Após corte da Copa do Mundo, Mané é confortado pelo presidente ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Macky Sall, presidente do Senegal, confortou o astro da seleção Sadio Mané, após ser anunciado seu corte da Copa do Mundo do Catar. O chefe de estado usou.</p></div>
            </div>
        </a><a href='https://www.osul.com.br/mane-da-selecao-de-senegal-esta-fora-da-copa-do-mundo-de-2022/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mané, da seleção de Senegal, está fora da Copa do Mundo de ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Mané, da seleção de Senegal, está fora da Copa do Mundo de ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O jogador sofreu uma lesão na fíbula da perna direita em jogo do Campeonato Alemão pelo Bayern em novembro e virou dúvida desde lá. O tratamento necessário não&nbsp;...</p></div>
            </div>
        </a><a href='https://www.jornalterceiravia.com.br/2022/11/18/sadio-mane-de-senegal-esta-fora-da-copa-do-mundo-do-catar/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sadio Mané, de Senegal, está fora da Copa do Mundo do Catar ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS2n0nuEWhb1Nxg8omt5J0cMEMu___bBzzuLgJkC8mFmwhjFr5N_FIs_GfB83Y6HjLqGVsc7rph" alt="Sadio Mané, de Senegal, está fora da Copa do Mundo do Catar ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O atacante Sadio Mané, de Senegal, está fora da Copa do Mundo do Catar. O jogador – eleito segundo melhor do mundo em 2022 – havia lesionado a fíbula da&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}