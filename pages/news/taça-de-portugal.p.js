import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Taça de Portugal</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Taça de Portugal"/>
        <meta name="description" content="Trending News about Taça de Portugal" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Taça de Portugal</h1>
            <Image width={800} height={500} src="https://diariodigitalcastelobranco.pt/ficheiros/noticias/1669386775_316113751_6377385112276189_1802967225304456696_n-01.jpeg" alt="Taça de Portugal"/>
            <h3>Recent News</h3>
            <a href='https://www.sporting.pt/pt/noticias/clube/noticias/2022-11-26/sporting-na-tv'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sporting na TV</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Sporting na TV" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Esta é uma semana de grandes jogos, com destaque para a decisão do apuramento para a final-four da UEFA Futsal Champions League. De realçar ainda o regresso&nbsp;...</p></div>
            </div>
        </a><a href='https://www.diariodigitalcastelobranco.pt/noticia/61443/castelo-branco-kempo-da-carapalha-presente-na-taca-de-portugal2022-este-fim-de-semana-'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Castelo Branco: Kempo da Carapalha presente na taça de Portugal ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTaDWoA_iLafLd_TZNIJmHfnAqWDMiSax4nVuhQwaFmerGVZTYUoq3whtkyBp_tmAoGVZIQi8kV" alt="Castelo Branco: Kempo da Carapalha presente na taça de Portugal ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A escola de Kempo da Associação Cultural e Desportiva da Carapalha (ACDC) , vai estar presente na taça de Portugal de Kempo 2022 estes fim de semana,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}