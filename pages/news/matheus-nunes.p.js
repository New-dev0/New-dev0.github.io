import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>MATHEUS NUNES</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,MATHEUS NUNES"/>
        <meta name="description" content="Trending News about MATHEUS NUNES" /></Head><Template>
            <h1 style={{fontSize: "30"}}>MATHEUS NUNES</h1>
            <Image width={800} height={500} src="https://leonino.pt/wp-content/uploads/2022/08/Matheus-Nunes-Sporting-Futebol-dortmund-champions.jpg" alt="MATHEUS NUNES"/>
            <h3>Recent News</h3>
            <a href='https://leonino.pt/mau-momento-do-sporting-ex-leao-nao-tem-duvidas-de-que-perda-de-matheus-nunes-foi-decisiva/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>MAU MOMENTO DO SPORTING? EX-LEÃO NÃO TEM DÚVIDAS ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ3OLeaOeHplWxxZrsA2s5USIws6rXAT4PxQmJvR5QUeDjIokCf-uwLt1Qf8WO1mTxIpMytY3cs" alt="MAU MOMENTO DO SPORTING? EX-LEÃO NÃO TEM DÚVIDAS ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Bruno Tabata, ex-jogador do Sporting, atualmente a representar o Palmeiras, treinado por Abel Ferreira, abordou o momento dos verdes e brancos em entrevista&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}