import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Taça da Liga</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Taça da Liga"/>
        <meta name="description" content="Trending News about Taça da Liga" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Taça da Liga</h1>
            <Image width={800} height={500} src="https://cdn.record.pt/images/2022-11/img_1200x676$2022_11_18_22_33_52_2063761.png" alt="Taça da Liga"/>
            <h3>Recent News</h3>
            <a href='https://www.record.pt/futebol/futebol-nacional/allianz-cup/detalhe/fase-de-grupos-da-taca-da-liga-resultados-e-marcadores'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Boavista derrota B SAD com reviravolta incrível: todos os resultados ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRRcYLrnex8bEdWkqB0WzHma5_fwyvWM9-SPNRbZak3DZUvM-fMXM5io2uaTKZbRwnmipmDAcHp" alt="Boavista derrota B SAD com reviravolta incrível: todos os resultados ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>90&#39; - Termina o duelo entre B SAD e Boavista no Jamor, com os axadrezados a somarem os primeiros três pontos na competição. Formação liderada por Petit lidera&nbsp;...</p></div>
            </div>
        </a><a href='https://www.abola.pt/nnh/2022-11-18/taca-da-liga-resultados-e-calendario-da-fase-de-grupos/965111'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Resultados e calendário da fase de grupos</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS6HbKoQfi22IB7O-S8G6gbla9fKagufKnSZCcYSoxn_JridSvTYsk1QGo9yfQS6gCTmO-rMe2y" alt="Resultados e calendário da fase de grupos" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Grupos, resultados e calendário da fase de grupos da Taça da Liga (note-se que os grupos G e H têm cinco equipas). Grupo A: FC Porto, Vizela, Chaves, Mafra.</p></div>
            </div>
        </a><a href='https://www.slbenfica.pt/pt-pt/agora/noticias/2022/11/18/futebol-benfica-antevisao-jogo-estrela-amadora-1-jornada-grupo-c-taca-da-liga'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Taça da Liga: nova página numa caminhada vencedora</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRe8NM0bNfnr1rIP6_B8ap3HBAa93duzoDWzFuMNmtZ4jTM-FwDqbhEofxm2bMVegwKtREipKKb" alt="Taça da Liga: nova página numa caminhada vencedora" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Futebol. O Benfica inicia a sua participação na Taça da Liga frente ao Estrela da Amadora, neste domingo, 20 de novembro, às 19h00.</p></div>
            </div>
        </a>
        </Template></>;
}