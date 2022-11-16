import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Pedro Porro</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Pedro Porro"/>
        <meta name="description" content="Trending News about Pedro Porro" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Pedro Porro</h1>
            <Image width={800} height={500} src="https://leonino.pt/wp-content/uploads/2022/10/Sporting-Pedro-Porro-Tottenham.jpg" alt="Pedro Porro"/>
            <h3>Recent News</h3>
            <a href='https://leonino.pt/pedro-porro-leva-fas-de-joao-felix-e-margarida-corceiro-a-loucura-jogador-do-sporting-causa-polemica-com-video/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>PEDRO PORRO LEVA FÃS DE JOÃO FÉLIX E MARGARIDA ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSttt1W_Bj1VXoX6tI-2WACAc5RGbs2RIhV9bzQwBrceApCd4v6vaNm6sOHg5fpfr3z0bFeBBcb" alt="PEDRO PORRO LEVA FÃS DE JOÃO FÉLIX E MARGARIDA ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Pedro Porro, João Félix e Margarida Corceiro continuam a fazer correr muita tinta. Jogador do Sporting com publicação polémica.</p></div>
            </div>
        </a><a href='https://www.ojogo.pt/futebol/1a-liga/sporting/noticias/porro-e-o-alegado-interesse-do-barcelona-nao-e-um-assunto-meu-15353026.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Porro e o alegado interesse do Barcelona: &quot;Não é um assunto meu&quot;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRVogwu8ShhrxXB3aS9CzoXLjNFMze4sTmavBwojkjnGtehHGsweZHmLyueB54Kjnir9T2yVhQn" alt="Porro e o alegado interesse do Barcelona: &quot;Não é um assunto meu&quot;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Pedro Porro, lateral-direito do Sporting, falou aos microfones do &quot;El Chiringuito&quot; na chegada a Espanha, onde vai passar alguns dias de folga.</p></div>
            </div>
        </a><a href='https://maisfutebol.iol.pt/sporting/pedro-porro/porro-barcelona-nao-e-assunto-meu'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Porro: «Barcelona? Não é assunto meu»</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSg-dYP4bE1zaaIrXa6x_J71_I93C3v4pOV7s_ERh-aqFyO22MlqhI9liiL3DCPnvqRCNfTqqC4" alt="Porro: «Barcelona? Não é assunto meu»" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O futebolista do Sporting, Pedro Porro, relativizou ter o seu nome associado ao Barcelona, em Espanha, garantindo apenas foco no trabalho, ao serviço do&nbsp;...</p></div>
            </div>
        </a><a href='https://infocul.pt/margarida-corceiro-e-pedro-porro-de-costas-voltadas-quero-ver-esquecer-o-pretao/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Margarida Corceiro e Pedro Porro de costas voltadas: “Quero ver ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTT3CrElvRD7Ssw0NVmNRTC5zbB3fTB7TVmqKoohuZi4RzUCq7AUgoY_xdcYE10OJ5P_FzC8Cxw" alt="Margarida Corceiro e Pedro Porro de costas voltadas: “Quero ver ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Margarida Corceiro e Pedro Porro estiveram &#39;debaixo de fogo&#39; nas redes sociais após terem sido apanhados numa discoteca e ela ser acusada de trair João Félix. A&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}