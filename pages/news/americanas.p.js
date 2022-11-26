import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Americanas</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Americanas"/>
        <meta name="description" content="Trending News about Americanas" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Americanas</h1>
            <Image width={800} height={500} src="https://www.bloomberglinea.com/resizer/qqbwPxICs3tUbZcCzmalBeuj-ZE=/1024x0/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/bloomberglinea/OR63VZE7T5F5TA7D3OH2SEP4PU.jpg" alt="Americanas"/>
            <h3>Recent News</h3>
            <a href='https://www.bloomberglinea.com.br/2022/11/25/americanas-vendas-de-fim-de-ano-antecipam-virada-antes-da-chegada-de-rial/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Americanas: vendas de fim de ano antecipam virada antes da ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQStlW4TdObZu4g5AvTrtzOiE3wa-hTAWdKpbqzXsZiwFlnPBwVI7vuAPmhcFSIhqoIXbipLIwx" alt="Americanas: vendas de fim de ano antecipam virada antes da ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Black Friday, Copa do Mundo e festas do fim de ano são citadas por analistas como oportunidades para varejista virar o jogo no desempenho de vendas no 4º&nbsp;...</p></div>
            </div>
        </a><a href='https://br.usembassy.gov/pt/empresas-norte-americanas-e-brasileiras-apresentam-melhores-praticas-de-diversidade-e-inclusao-em-painel-no-instituto-caldeira/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Empresas norte-americanas e brasileiras apresentam melhores ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Empresas norte-americanas e brasileiras apresentam melhores ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A vice-chefe da Embaixada e Consulados dos EUA no Brasil, Michelle Esperdy, e o cônsul-geral dos EUA em Porto Alegre, Shane Christensen, abrirão o evento, que&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}