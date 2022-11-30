import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Reino Unido</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Reino Unido"/>
        <meta name="description" content="Trending News about Reino Unido" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Reino Unido</h1>
            <Image width={800} height={500} src="https://imagens.ebc.com.br/KCQkgPirjTDDETO3Ep8NJeZA7cQ=/1600x800/https://agenciabrasil.ebc.com.br/sites/default/files/thumbnails/image/brasil_em_pauta_mcajr_abr_1304222523.jpg?itok=bDUOc3Zi" alt="Reino Unido"/>
            <h3>Recent News</h3>
            <a href='https://agenciabrasil.ebc.com.br/economia/noticia/2022-11/brasil-e-reino-unido-assinam-acordo-para-evitar-bitributacao'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Brasil e Reino Unido assinam acordo para evitar bitributação</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRQgyJLNHu4ZGIqUeJx0XYLOwuWuOKgQwC-tKZw0I-ItIHZMlyFs-3p8DCWfOAgPS3tlSatOZR8" alt="Brasil e Reino Unido assinam acordo para evitar bitributação" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Para a Receita Federal, a medida aumenta segurança jurídica nas transações entre os dois países e resulta na ampliação dos fluxos bilaterais de comércio e&nbsp;...</p></div>
            </div>
        </a><a href='https://www1.folha.uol.com.br/mercado/2022/11/brasil-e-reino-unido-assinam-acordo-para-acabar-com-bitributacao.shtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Brasil e Reino Unido assinam acordo para acabar com bitributação</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTN5oH3ZLWTPIwFp7tu7sF2Wvv0-tSyX-AjVOexnjY2dftXTMcS3cEunv53HAexIsU3fAGGsSKH" alt="Brasil e Reino Unido assinam acordo para acabar com bitributação" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Iniciativa amplia comércio e investimentos entre os países e é importante para tentar vaga na OCDE, diz Receita.</p></div>
            </div>
        </a><a href='https://www.infomoney.com.br/economia/choques-de-rendas-levarao-o-reino-unido-a-recessao-diz-presidente-do-bc-ingles/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Choques de rendas levarão o Reino Unido à recessão, diz ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQFvBDy-dSIDtp_X3UclIDTnNN159UTbLzzsxh_qQdxqTJLRiHxahJPm6Iio-A-MbG_9bKdQiiN" alt="Choques de rendas levarão o Reino Unido à recessão, diz ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Andrew Bailey também destacou que não há motivos para que o BC não consiga reduzir a carteira de Gilts em 80 milhões de libras em 1 ano.</p></div>
            </div>
        </a>
        </Template></>;
}