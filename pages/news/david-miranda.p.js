import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>DAVID MIRANDA</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,DAVID MIRANDA"/>
        <meta name="description" content="Trending News about DAVID MIRANDA" /></Head><Template>
            <h1 style={{fontSize: "30"}}>DAVID MIRANDA</h1>
            <Image width={800} height={500} src="https://imagens.ne10.uol.com.br/veiculos/_midias/jpg/2020/08/28/615x300/1_david_miranda-16567945.jpg" alt="DAVID MIRANDA"/>
            <h3>Recent News</h3>
            <a href='https://jc.ne10.uol.com.br/social1/2022/11/15123992-david-miranda-esta-internado-glen-greenwald-pede-doacoes-de-sangue-para-o-marido.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>DAVID MIRANDA ESTÁ INTERNADO? GLEN GREENWALD pede ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTakdKqQ0vfBpXSvb-1f1o7iOxqHDbBDuX-Yj-4jMgPRQaCYEJp5C6FXU4uUSIWUBuiFpXRMCbh" alt="DAVID MIRANDA ESTÁ INTERNADO? GLEN GREENWALD pede ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Na tarde desse sábado (19) o jornalista Glenn Greenwald fez um apelo nas redes sociais. Ele pediu para que os seguidores doassem sangue para o marido,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.tvprime.ig.com.br/noticia/143611/celebridades/glenn-greenwald-jornalista-que-vazou-conversas-da-lava-jato-pede-doacoes-de-sangue-ao-marido-na-uti-19112022'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Glenn Greenwald, jornalista que vazou conversas da Lava Jato ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRmb-Sspqi1-62GYLvps5_TUM_x-hYxZRB33mkDXIRoWYChw7pBkGfrdvpV1uGQOPW790GBkYwI" alt="Glenn Greenwald, jornalista que vazou conversas da Lava Jato ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O deputado federal David Miranda (PDT), de 37 anos, está internado na UTI de um hospital com infecção no pâncreas e em outros órgãos.</p></div>
            </div>
        </a>
        </Template></>;
}