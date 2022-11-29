import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>ANTENA 1</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,ANTENA 1"/>
        <meta name="description" content="Trending News about ANTENA 1" /></Head><Template>
            <h1 style={{fontSize: "30"}}>ANTENA 1</h1>
            <Image width={800} height={500} src="" alt="ANTENA 1"/>
            <h3>Recent News</h3>
            <a href='https://www.antena1.com.br/noticias/tres-soldados-israelenses-sao-detidos-por-suspeita-de-vinganca-contra-palestinos'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Três soldados israelenses são detidos por suspeita de vingança ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Três soldados israelenses são detidos por suspeita de vingança ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Por Emily Rose. JERUSALÉM (Reuters) - Três soldados israelenses foram detidos nesta segunda-feira, informaram as Forças Armadas, depois de supostamente&nbsp;...</p></div>
            </div>
        </a><a href='https://www.antena1.com.br/noticias/evergrande-quer-aval-para-propostas-de-reestruturacao-de-divida-no-inicio-de-2023'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Evergrande quer aval para propostas de reestruturação de dívida ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Evergrande quer aval para propostas de reestruturação de dívida ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Por Xie Yu. HONG KONG (Reuters) - A incorporadora imobiliária China Evergrande pretende obter a aprovação dos credores para suas propostas de reestruturação&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}