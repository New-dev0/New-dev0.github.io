import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Globoplay</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Globoplay"/>
        <meta name="description" content="Trending News about Globoplay" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Globoplay</h1>
            <Image width={800} height={500} src="https://tm.ibxk.com.br/2022/11/18/18091138587104.jpg" alt="Globoplay"/>
            <h3>Recent News</h3>
            <a href='https://www.tecmundo.com.br/minha-serie/254583-globoplay-10-melhores-series-voce-maratonar.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Globoplay: 10 melhores séries para você maratonar</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSapfD-msOq5WhfYuKtRW6gziyvkVO1Q2ezgPAtv-fA4bt31LI0ZDLFguYpRlGkz8283ubg-OCr" alt="Globoplay: 10 melhores séries para você maratonar" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Enquanto isso, Arcanjo Renegado é uma série de ação e drama policial estrelada por Marcello Melo Jr. Na trama, ele é o sargento do BOPE Mikhael e, depois de um&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}