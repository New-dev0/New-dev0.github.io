import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Guillermo Ochoa</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Guillermo Ochoa"/>
        <meta name="description" content="Trending News about Guillermo Ochoa" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Guillermo Ochoa</h1>
            <Image width={800} height={500} src="https://conteudo.imguol.com.br/c/esporte/47/2022/11/22/ochoa-goleiro-do-mexico-comemora-apos-defender-penalti-batido-por-lewandowski-na-copa-do-mundo-1669137930012_v2_615x300.jpg" alt="Guillermo Ochoa"/>
            <h3>Recent News</h3>
            <a href='https://www.uol.com.br/esporte/futebol/copa-do-mundo/2022/11/26/ochoa-tem-seis-dedos-goleiro-foi-acusado-de-ter-vantagem-competitiva.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ochoa tem seis dedos? Goleiro foi acusado de ter &#39;vantagem ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRKwrLhuH07PqQKrMEyFb_GXBMAdBSc3p5-9W09dtswn4OyW-wnazdkIANSaoTKqnOv719LJw54" alt="Ochoa tem seis dedos? Goleiro foi acusado de ter &#39;vantagem ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Titular na Copa do Mundo de 2022 teve rumores levantados sobre ele em 2011.</p></div>
            </div>
        </a><a href='https://jc.ne10.uol.com.br/blogs/torcedor/2022/11/15129492-ochoa-no-brasileirao-veja-onde-joga-e-qual-o-salario-do-goleiro-do-mexico-na-copa-do-mundo.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>OCHOA NO BRASILEIRÃO? Veja onde joga e qual o salário do ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTfaYtCXuB2q1vvhsJnOrVyrJHanYW-C4ugA9li19-Etljl5fscy063LtKIl_IUfLBf2BukI6N6" alt="OCHOA NO BRASILEIRÃO? Veja onde joga e qual o salário do ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Guillermo Ochoa, goleiro do México, é um dos grandes personagens da história da Copa do Mundo. O goleiro de 37 disputa a sua 5ª Copa da carreira,&nbsp;...</p></div>
            </div>
        </a><a href='https://www1.folha.uol.com.br/esporte/2022/11/depois-de-brilhar-contra-lewandovski-ochoa-e-superado-por-messi.shtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Depois de brilhar contra Lewandovski, Ochoa é superado por Messi</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSln_eLUuhIikF7aSJR9-3cJE8Y543aEQISnYaLn0YMJsyOcBvBsVn7yZbpMpn8qhUR7Vfn1Z6g" alt="Depois de brilhar contra Lewandovski, Ochoa é superado por Messi" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Goleiro, que disputa a sua quinta Copa, não consegue segurar o craque argentino.</p></div>
            </div>
        </a><a href='https://sportbuzz.uol.com.br/noticias/futebol/calca-jeans-web-comenta-uniforme-de-ochoa-em-argentina-x-mexico.phtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>“Calça jeans”: web comenta uniforme de Ochoa em Argentina x ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRWrOJPedzPUSpWfd-R49ei-157UAiNr9KDOZqw5h7g8JQuSY8aSdh2OXFfYYXuSwfRNBrmhk4I" alt="“Calça jeans”: web comenta uniforme de Ochoa em Argentina x ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Uniforme &#39;diferentão&#39; do goleiro mexicano Ochoa chamou a atenção dos internautas durante Argentina x México; confira as reações.</p></div>
            </div>
        </a>
        </Template></>;
}