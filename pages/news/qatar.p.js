import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Qatar</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Qatar"/>
        <meta name="description" content="Trending News about Qatar" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Qatar</h1>
            <Image width={800} height={500} src="https://images.impresa.pt/sicnot/2022-11-15-Talabat.JPG-cf5c6f87/1.91x1?wm=true&outputFormat=jpeg" alt="Qatar"/>
            <h3>Recent News</h3>
            <a href='https://sicnoticias.pt/especiais/mundial-de-futebol/a-sic-no-qatar/2022-11-15-Maior-empresa-de-pedidos-online-no-Qatar-e-gerida-por-um-portugues-7f010e6f'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Maior empresa de pedidos online no Qatar é gerida por um português</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSRx9JBeaUxfHCO8Rxqj_mvvZZAVUsPJfoxq7QTIZEn0Su-KL9KIL7fg3lWEMkN-Ko8y5APgSO1" alt="Maior empresa de pedidos online no Qatar é gerida por um português" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A Talabat é uma multinacional que está valorizada em milhares de milhões de euros.</p></div>
            </div>
        </a><a href='https://www.record.pt/futebol/futebol-nacional/liga-bwin/detalhe/adeptos-do-sp-braga-exibem-tarja-a-visar-mundial-do-qatar-e-quem-paga-a-multa-e-o-portimonense'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Adeptos do Sp. Braga exibem tarja a visar Mundial do Qatar e quem ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR996n0ESWtFGDK9nEU4Rv1HJ5lI7DQEB7IX7q4wJb_WoilMlOC--JT_yLYGd2JkM_rmxNyEiAs" alt="Adeptos do Sp. Braga exibem tarja a visar Mundial do Qatar e quem ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Clube algarvio recebeu os minhotos no domingo e &#39;não proibiu a entrada de tarjas com dimensões superiores&#39;</p></div>
            </div>
        </a>
        </Template></>;
}