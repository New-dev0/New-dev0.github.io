import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>8 dezembro FERIADO</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,8 dezembro FERIADO"/>
        <meta name="description" content="Trending News about 8 dezembro FERIADO" /></Head><Template>
            <h1 style={{fontSize: "30"}}>8 dezembro FERIADO</h1>
            <Image width={800} height={500} src="https://imagens.ne10.uol.com.br/img/imagens/2019/11/28/68b18359ae_festa-do-morro.jpg" alt="8 dezembro FERIADO"/>
            <h3>Recent News</h3>
            <a href='https://tvjornal.ne10.uol.com.br/noticias/2022/11/15131962-8-de-dezembro-e-feriado-de-que-saiba-o-que-e-celebrado-dia-8-de-dezembro.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>8 de dezembro é feriado de quê? Saiba o que é celebrado dia 8 de ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSLo134qPHQReQtxsiRmzlV7vGpKD9CPF232f_rVzNroD2CsBYGeAWPwGyB9U9ltlQGKdNfTFCN" alt="8 de dezembro é feriado de quê? Saiba o que é celebrado dia 8 de ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A data é uma homenagem da Igreja Católica a mulher que foi escolhida para ser a mãe de Jesus Cristo. A Imaculada Conceição é, segundo o dogma católico, a&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}