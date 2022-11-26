import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Carrefour</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Carrefour"/>
        <meta name="description" content="Trending News about Carrefour" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Carrefour</h1>
            <Image width={800} height={500} src="https://netstorage-legit.akamaized.net/images/2464ca648fc93e9c.jpg" alt="Carrefour"/>
            <h3>Recent News</h3>
            <a href='https://gauchazh.clicrbs.com.br/mundo/noticia/2022/11/ong-acusa-carrefour-de-manter-lacos-com-empresas-acusadas-de-desmatar-a-amazonia-clawql6vy006701g7u96kh8wt.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ONG acusa Carrefour de manter laços com empresas acusadas de ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="ONG acusa Carrefour de manter laços com empresas acusadas de ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O gigante comercial francês Carrefour, que havia anunciado a suspensão de sua colaboração com alguns fornecedores acusados de desmatamento na Amazônia,&nbsp;...</p></div>
            </div>
        </a><a href='https://noticias.uol.com.br/ultimas-noticias/rfi/2022/11/25/relatorio-de-ong-diz-que-carrefour-ainda-compra-carne-da-jbs-proveniente-de-desmatamento-no-brasil.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Relatório de ONG diz que Carrefour ainda compra carne da JBS ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Relatório de ONG diz que Carrefour ainda compra carne da JBS ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Em um novo relatório, &quot;Carrefour nous enfume toujours&quot; (&quot;Carrefour continua nos enganando&quot;, em tradução livre), apresentado nesta sexta-feira (25),&nbsp;...</p></div>
            </div>
        </a><a href='https://www.zeddbrasil.com/carrefour-continua-vendendo-carne-bovina-ligada-ao-desmatamento-no-brasil-ong/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Carrefour continua vendendo carne bovina ligada ao ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRYnCgXk-WvwDA-5o7V08kedx5tL4XEJq6jsfgPteVTtcAHVHWYeQ32oefibFKOJ7fWkFkNJpN6" alt="Carrefour continua vendendo carne bovina ligada ao ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O gigante varejista francês Carrefour continua a vender produtos de carne bovina brasileira ligados à destruição do Amazonas selva apesar de prometer acabar com&nbsp;...</p></div>
            </div>
        </a><a href='https://soudecanoas.com.br/segundo-o-mighty-earth-o-carrefour-sempre-foi-associado-aos-piores-frigorificos-brasileiros/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Segundo o Mighty Earth, &quot;o Carrefour sempre foi associado aos ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQKLO8WuWi0VU7IqwVI-m887qfIx5imHZrsmh4BgiZPtq-cw9241v9zx3L2JwdxIxnvP5qVkDqA" alt="Segundo o Mighty Earth, &quot;o Carrefour sempre foi associado aos ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O grupo de distribuição Carrefour, que anunciou que suspenderá sua cooperação com alguns fornecedores envolvidos no desmatamento da Amazônia, não está.</p></div>
            </div>
        </a>
        </Template></>;
}