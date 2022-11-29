import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Tottenham</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Tottenham"/>
        <meta name="description" content="Trending News about Tottenham" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Tottenham</h1>
            <Image width={800} height={500} src="https://www.abola.pt//img/fotos/ABOLA2015/Mundial2022/FotosAP/skovolsen1.jpg" alt="Tottenham"/>
            <h3>Recent News</h3>
            <a href='https://www.abola.pt/nnh/2022-11-28/liga-dos-campeoes-adversario-do-benfica-pode-perder-estrela-para-o-tottenham/966379'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Adversário do Benfica pode perder &#39;estrela&#39; para o Tottenham</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQOCfvQ-I8Fe9ZZ0C76t_wkCc1deOFWkgSaJeXR3RFjdnc7ytpFjNyJTTIF27u-2G8nN2fiq71a" alt="Adversário do Benfica pode perder &#39;estrela&#39; para o Tottenham" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Tudo porque o Tottenham está determinado a contratar Andreas Skov Olsen, jogador que está no Catar a disputar o Campeonato do Mundo com a seleção da Dinamarca.</p></div>
            </div>
        </a>
        </Template></>;
}