import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Enzo Fernández</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Enzo Fernández"/>
        <meta name="description" content="Trending News about Enzo Fernández" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Enzo Fernández</h1>
            <Image width={800} height={500} src="https://thumbs.web.sapo.io/?W=1200&H=630&delay_optim=1&tv=1&crop=center&bottom_overlay=https%3A%2F%2Fdesporto.sapo.pt%2Fassets%2Fimg%2Fdesporto-sapo%2Ffacebook-overlay.png&epic=OTdkEY5QD0t2BGAWWu3Y0Ou6m+K6bmTi9HWoMt8upGHzG3gWahWFxvCWqntSKFl/pAUr97CYwEdAFZy/8V1HtyiaVLanWhYiW70JH/1zTGXKBwU=" alt="Enzo Fernández"/>
            <h3>Recent News</h3>
            <a href='https://desporto.sapo.pt/futebol/primeira-liga/artigos/enzo-fernandez-colocado-na-orbitra-do-barcelona'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Enzo Fernández colocado na órbitra do Barcelona</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTcKN5oSOWfILpNR40TeLkW4-RuNkJDkhvZs6zTxP8ZytXVbjsXh9gHeizERzSB2fwDhbsPFSxW" alt="Enzo Fernández colocado na órbitra do Barcelona" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Médio argentino tem sido um dos destaques do Benfica nesta temporada e é uma das preferências de Xavi para os &#39;Blaugrana&#39;....</p></div>
            </div>
        </a><a href='https://www.record.pt/futebol/futebol-nacional/liga-bwin/benfica/detalhe/enzo-fernandez-na-lista-do-barcelona'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Enzo Fernández na lista do Barcelona</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR0JJ4Mga_pm4GJ1o7W24EStds4k_CgGaIB7QHi7Ml2lAIAWekfB_MazfnKVISNkNka12xMzVFD" alt="Enzo Fernández na lista do Barcelona" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Xavi planeia contratar um médio para a próxima temporada e não perde de vista o atleta do Benfica.</p></div>
            </div>
        </a><a href='https://www.noticiasaominuto.com/desporto/2118040/xavi-esta-de-olho-em-enzo-fernandez-e-barcelona-pode-avancar-no-verao'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Xavi está de olho em Enzo Fernández e Barcelona pode avançar no ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQBRxsQbyg2ybmSW2OvXy0H1H6SSxCmFnUbu0_LY99kUAr5_jd2XFmk6gCma1OUADPX-ks4n718" alt="Xavi está de olho em Enzo Fernández e Barcelona pode avançar no ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O médio argentino do Benfica é um dos jogadores que agradam a Xavi Hernández e o clube blaugrana pode avançar para a sua contratação, mas apenas no verão,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.futebol365.pt/artigo/289651-record-barca-de-olho-em-enzo/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Record: «Barça de olho em Enzo»</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRmlW3dVaO5IYKcp7clgLPrCKTCh0j_7x9FdLf1FANAftzEyNHeKyA_xhDUbNXRwQ--nDgD16uM" alt="Record: «Barça de olho em Enzo»" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O jornal «Record» revela hoje que o benfiquista Enzo Fernández está «na lista de reforços de Xavi».</p></div>
            </div>
        </a>
        </Template></>;
}