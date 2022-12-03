import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Filho do Tite</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Filho do Tite"/>
        <meta name="description" content="Trending News about Filho do Tite" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Filho do Tite</h1>
            <Image width={800} height={500} src="https://conteudo.imguol.com.br/c/galeria/8b/2022/12/02/fabinho-e-bremer-lamentam-derrota-do-brasil-para-camaroes-por-1-a-0-1670015406007_v2_615x300.jpg" alt="Filho do Tite"/>
            <h3>Recent News</h3>
            <a href='https://www.uol.com.br/esporte/colunas/milly-lacombe/2022/12/02/uma-selecao-sem-alma.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Milly Lacombe - Uma seleção sem alma</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS5bhcejzbGMFDkPesMxLM5yoK8j3cf7zDRE6l5FBTMfgF19o5-36ZdiszBcMxsbkjX3quYOodf" alt="Milly Lacombe - Uma seleção sem alma" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Se o Brasil for hexacampeão mundial de futebol eu ficarei surpresa.Não porque essa é uma seleção ruim ou tecnicamente fraca. Não é.Não porque essa é uma&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}