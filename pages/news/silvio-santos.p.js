import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Silvio Santos</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Silvio Santos"/>
        <meta name="description" content="Trending News about Silvio Santos" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Silvio Santos</h1>
            <Image width={800} height={500} src="https://lumiere-a.akamaihd.net/v1/images/o_rei_da_tv_mariano_mattos_3_87398827.jpeg?region=0%2C74%2C1920%2C767" alt="Silvio Santos"/>
            <h3>Recent News</h3>
            <a href='https://www.star-brasil.com/novidades/qual-foi-o-primeiro-programa-de-silvio-santos-na-tv'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Qual foi o primeiro programa de Silvio Santos na TV?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTdHIVuadJg7nLK2SBaJyCagftNDpRQ6rhBRtPewW2elhEpzctnEHmlzfnHV9HyayOYr7KSDTmP" alt="Qual foi o primeiro programa de Silvio Santos na TV?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A série O Rei da TV, disponível no Star+, mostra detalhes da vida do apresentador antes mesmo de ele ter seu primeiro programa. Saiba qual era a atração de&nbsp;...</p></div>
            </div>
        </a><a href='https://rd1.com.br/familia-de-silvio-santos-se-irrita-e-prepara-projeto-proprio-para-desmentir-o-rei-da-tv/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Esposa de Silvio Santos prepara plano B após polêmicas com O ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcToDPRcznhvniQhbhU7dA4y32TrO1zy2rzQatfiJAsauld7fHFNXaDMzU1ez-6UfInzMlaE6zxc" alt="Esposa de Silvio Santos prepara plano B após polêmicas com O ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A família de Silvio Santos, sem nenhuma exceção até aqui, não gostou de O Rei da TV. A série produzida pelo Star+ sobre a vida do apresentador mais famoso&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}