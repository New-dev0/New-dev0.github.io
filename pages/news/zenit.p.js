import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Zenit</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Zenit"/>
        <meta name="description" content="Trending News about Zenit" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Zenit</h1>
            <Image width={800} height={500} src="https://s2.glbimg.com/znwFyzpgHZuRE1X6mq8EeZX4nSk=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2022/O/m/Rs1zYWTkmbZCqAkGOh2Q/sem-titulo.png" alt="Zenit"/>
            <h3>Recent News</h3>
            <a href='https://ge.globo.com/blogs/brasil-mundial-fc/post/2022/11/27/copa-russia-pancadaria-malcom-expulso-corinthians-zenit-spartak.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Copa da Rússia: Malcom e mais cinco são expulsos em Zenit x ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSgG1MhwNHYVo9d_qnRaREbw-mSIeC6Emp4JcN-XqxwrR8mtPG99dVaGHWkCwqWebykXMZZy11VDQ" alt="Copa da Rússia: Malcom e mais cinco são expulsos em Zenit x ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Correndo paralelamente ao Mundial do Catar, jogo eliminatório da competição termina em pancadaria antes de disputa de pênaltis.</p></div>
            </div>
        </a><a href='https://tntsports.com.br/melhorfuteboldomundo/Jogo-entre-Zenit-e-Spartak-pela-Copa-da-Russia-termina-em-confusao-generalizada-20221127-0011.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jogo entre Zenit e Spartak pela Copa da Rússia termina em ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS3MhqqhiPBarLJBkHR4dV5oZZWrE14YQnSBMIlTZ9_S2LB_EW3ccZ1B8DOlMdcUY_Zq3tgDzSD" alt="Jogo entre Zenit e Spartak pela Copa da Rússia termina em ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ao final da confusão, seis jogadores foram expulsos, incluindo os brasileiros Malcom e Rodrigão.</p></div>
            </div>
        </a><a href='https://www.uol.com.br/esporte/futebol/ultimas-noticias/2022/11/27/pancadaria-em-jogo-na-russia-tem-6-expulsos-e-brasileiros-envolvidos-veja.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pancadaria em jogo na Rússia tem 6 expulsos e brasileiros ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRjLNUFoO31vKawLbDjAzPzJNpOBO2yVwk11hCudg5Hp2FTfKAJ8ytjF6wLCfhqGZS7chBtY--T" alt="Pancadaria em jogo na Rússia tem 6 expulsos e brasileiros ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O duelo entre Zenit e Spartak Moscou, pela Copa da Rússia, hoje (27), terminou em pancadaria e expulsões. Dentre os punidos estavam os brasileiros Malcom e&nbsp;...</p></div>
            </div>
        </a><a href='https://eotimedopovo.com.br/2022/11/mantuan-converte-penalti-em-jogo-do-zenit-com-pancadaria-e-seis-expulsoes.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mantuan converte pênalti em jogo do Zenit com pancadaria e seis ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQi5LOrwY9znupiJrlOmAU4TCRGyS08E0WKDfareWOI5cz8GV2tPxOeCziUJaIWl9DexgFBUFxn" alt="Mantuan converte pênalti em jogo do Zenit com pancadaria e seis ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O confronto empatou em 0 a 0 no tempo normal, com vitória do Zenit por 4 a 2 nas penalidades. O atacante corinthiano Mantuan, emprestado ao clube russo, anotou&nbsp;...</p></div>
            </div>
        </a><a href='https://www.espn.com.br/futebol/artigo/_/id/11290436/jogo-russia-briga-generalizada-com-brasileiros-expulsos-ex-corinthians-decisivo-nos-penaltis'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jogo na Rússia tem briga generalizada com brasileiros e mais ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQYjxj91UFO0HtHRV0rpjBpC53EnvDgPw0nB9FZsSiFbWyUcK-IbPHpMXijvyEOM8VJLBZ8ojZw" alt="Jogo na Rússia tem briga generalizada com brasileiros e mais ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O jogo entre Zenit e Spartak Moscow, realizado neste domingo (27), pela sexta rodada da Copa da Rússia, teve jogadores brasileiros como protagonistas.</p></div>
            </div>
        </a><a href='https://www.abola.pt/nnh/2022-11-27/russia-batalha-campal-no-zenit-spartak-acaba-com-seis-expulsoes-video/966322'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Batalha campal no Zenit - Spartak acaba com seis expulsões (vídeo)</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQliDF-0Dq31qajQycxX5X43FumaoZi1yCCnge7JVtlpYXrEKhiFi3vUQ5uOI4SVmmXaZn9a_Hg" alt="Batalha campal no Zenit - Spartak acaba com seis expulsões (vídeo)" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O momento terminou com seis expulsões, três para cada lado (Barrios, Rodrigão e Malcom, do Zenit, e Nicholson, Selikhov e Sobolev, do Spartak). No jogo&nbsp;...</p></div>
            </div>
        </a><a href='https://maisfutebol.iol.pt/internacional/zenit/video-batalha-campal-no-zenit-spartak-acaba-com-seis-expulsoes'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>VÍDEO: batalha campal no Zenit-Spartak acaba com seis expulsões</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSqu74OodfFetUxbgm9QvwS4hnrTsehYiTCba6aiBVBRFluEMqjWJ1c-Xwenxkms17kMTGKVD-w" alt="VÍDEO: batalha campal no Zenit-Spartak acaba com seis expulsões" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Seguiram-se empurrões entre elementos das duas equipas, desde jogadores em campo aos suplentes e elementos técnicos que estavam nos bancos. A confusão durou&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}