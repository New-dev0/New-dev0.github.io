import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Fernando lazaro</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Fernando lazaro"/>
        <meta name="description" content="Trending News about Fernando lazaro" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Fernando lazaro</h1>
            <Image width={800} height={500} src="https://conteudo.imguol.com.br/c/esporte/70/2022/11/07/tecnico-interino-fernando-lazaro-comanda-treinamento-do-corinthians-em-fevereiro-de-2022-1667857216529_v2_615x300.jpg" alt="Fernando lazaro"/>
            <h3>Recent News</h3>
            <a href='https://www.uol.com.br/esporte/futebol/ultimas-noticias/2022/11/20/corinthians-anuncia-fernando-lazaro-como-novo-tecnico.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Corinthians anuncia Fernando Lázaro como novo técnico</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR9qgrOJGYWgLtxLYlYyFfH1OJiP1wqlrQ6d1tUxhlMPCCzF28Mlpi2MRlb39dRg97tSuZp5OMQ" alt="Corinthians anuncia Fernando Lázaro como novo técnico" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O Corinthians anunciou Fernando Lázaro como seu novo treinador. O anúncio foi feito por meio das redes sociais do clube. O novo técnico será apresentado&nbsp;...</p></div>
            </div>
        </a><a href='https://ge.globo.com/futebol/times/corinthians/noticia/2022/11/20/quem-e-fernando-lazaro-conheca-o-novo-tecnico-do-corinthians.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Quem é Fernando Lázaro? Conheça o novo técnico do Corinthians</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQcnI8BGHhF3JxORILvqSsiVcEZNScyH5_miLe2xS7eckTzriDyDeIUlvcFhMB9LPFzTHOb94wv" alt="Quem é Fernando Lázaro? Conheça o novo técnico do Corinthians" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Analista de desempenho é filho de Zé Maria, ídolo do Timão nos anos 70 e 80.</p></div>
            </div>
        </a><a href='https://esportes.r7.com/prisma/cosme-rimoli/tite-recusou-voltar-e-corinthians-decidiu-apostar-em-um-novato-fernando-lazaro-comecara-como-treinador-no-parque-sao-jorge-20112022'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Tite recusou voltar. E Corinthians decidiu apostar em um novato ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS4W4BeZu_zXrQxISjMsOP9G0dFkicRplfk3Qb5VDf0bTODpGuEVvLZp62xcdThEia1TzzZEhjF" alt="Tite recusou voltar. E Corinthians decidiu apostar em um novato ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Fernando Lázaro jamais comandou um time como treinador principal. Aposta alta demais de Duilio. CBF. Al Kror, Catar. O presidente Adilson Monteiro Alves decidiu&nbsp;...</p></div>
            </div>
        </a><a href='https://www.lance.com.br/corinthians/corinthians-anuncia-fernando-lazaro-como-novo-treinador.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Corinthians anuncia Fernando Lázaro como novo treinador</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSoORAgyY4O89UxmAB7tL7hG-G_SDEU4MVmlXfKvanQJaSaJ8cMp5fUSX-2zBgeR6UYHLR90F_A" alt="Corinthians anuncia Fernando Lázaro como novo treinador" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ele é analista de desempenho e já foi técnico interino do time.</p></div>
            </div>
        </a><a href='https://www.espn.com.br/futebol/corinthians/artigo/_/id/11251465/corinthians-surpreende-e-anuncia-fernando-lazaro-como-novo-treinador-para-2023'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Corinthians surpreende e anuncia Fernando Lázaro como novo ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRqkbT72MGmEIieQwMDzezVJaFbueQnTFjPR5Z_CDFByyjXbivE5zP3FfD54aB_t2h_VfsjW0PW" alt="Corinthians surpreende e anuncia Fernando Lázaro como novo ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O Corinthians está classificado para a fase de grupos da Conmebol Libertadores, e ainda terá pela frente outras três competições: Campeonato Paulista,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}