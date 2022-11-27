import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Taça de portugal</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Taça de portugal"/>
        <meta name="description" content="Trending News about Taça de portugal" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Taça de portugal</h1>
            <Image width={800} height={500} src="" alt="Taça de portugal"/>
            <h3>Recent News</h3>
            <a href='https://www.sporting.pt/pt/noticias/clube/noticias/2022-11-26/sporting-na-tv'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sporting na TV</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Sporting na TV" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Esta é uma semana de grandes jogos, com destaque para a decisão do apuramento para a final-four da UEFA Futsal Champions League. De realçar ainda o regresso&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}