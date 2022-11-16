import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Fabio Carvalho</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Fabio Carvalho"/>
        <meta name="description" content="Trending News about Fabio Carvalho" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Fabio Carvalho</h1>
            <Image width={800} height={500} src="https://images.rr.sapo.pt/3478238129502b8cca5e_socialshare.JPG" alt="Fabio Carvalho"/>
            <h3>Recent News</h3>
            <a href='https://rr.sapo.pt/bola-branca/noticia/clube-portugal/2022/11/15/renuncia-de-fabio-carvalho-foi-surpreendente-diz-henrique-araujo/308173/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Renúncia de Fábio Carvalho foi &quot;surpreendente&quot;, diz Henrique ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRQlDi93hBtkJKBoSg6OJsVHHnFZR9FTOAQ4RtBcUlrXxYWs0UwES513PLMz6dzXc4ndGuF-I87" alt="Renúncia de Fábio Carvalho foi &quot;surpreendente&quot;, diz Henrique ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Jogador do Liverpool &quot;decidiu abdicar de representar&quot; a seleção portuguesa de Sub-21.</p></div>
            </div>
        </a><a href='https://www.abola.pt/nnh/2022-11-15/apesar-de-surpreendido-henrique-araujo-respeita-opcao-de-fabio-carvalho/964841'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Apesar de «surpreendido», Henrique Araújo respeita opção de ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ4IFyn_iaiVNzlkgRms3gFe5KF0xSU68kTiZuHU4OJ8uJ5fwxZVxoTzoRGpABxT0yj3Guo8x9f" alt="Apesar de «surpreendido», Henrique Araújo respeita opção de ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O jogador das águias salientou que Portugal está a preparar os particulares «como se fossem jogos de qualificação». «Sabemos a importância que é prepararmos,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ojogo.pt/internacional/selecao/noticias/henrique-araujo-reagiu-assim-a-renuncia-de-fabio-carvalho-a-selecao-sub-21-15355191.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Henrique Araújo reagiu assim à renúncia de Fábio Carvalho à ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTyhFluVX7-IpyIlG0m0Rk131kkfY1E4rJoIdOI4yEfmFCHV44J9_gw-8CXYs1QmZpiNRDrbIm0" alt="Henrique Araújo reagiu assim à renúncia de Fábio Carvalho à ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O jogador do Liverpool &quot;decidiu abdicar de representar&quot; a seleção portuguesa de sub-21, informou na segunda-feira a Federação Portuguesa de Futebol (FPF),&nbsp;...</p></div>
            </div>
        </a><a href='https://www.rtp.pt/noticias/selecao-nacional/fabio-carvalho-renuncia-a-selecao-de-sub-21_d1447155'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Fábio Carvalho renuncia à seleção de sub-21</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTLHc1XgRYQsqlQfaiypVE_J5VBPzInZlUAIt3ZKZXuUPiWHG5gP2G5GZJjGUYRuunpPBUcxwRF" alt="Fábio Carvalho renuncia à seleção de sub-21" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O médio do Liverpool Fábio Carvalho “decidiu abdicar de representar” a seleção portuguesa de sub-21, informou a Federação Portuguesa de Futebol (FPF),&nbsp;...</p></div>
            </div>
        </a><a href='https://24.sapo.pt/desporto/artigos/portugues-fabio-carvalho-renuncia-a-selecao-por-sms'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Português Fábio Carvalho renuncia à seleção por SMS</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQI06iI_TapvXmHBoBBCuqg-JBaQx8PwVopb4WdY3ftwQ_l-DOHOxar0thexEFkM38TXLCHhyDc" alt="Português Fábio Carvalho renuncia à seleção por SMS" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Jovem que atua no Liverpool tinha sido convocado por Rui Jorge para a equipa sub-21 portuguesa....</p></div>
            </div>
        </a><a href='https://maisfutebol.iol.pt/sub-21/henrique-araujo/fabio-carvalho-foi-surpreendente-mas-o-importante-e-sentir-se-bem'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Fábio Carvalho? Foi surpreendente, mas o importante é sentir-se ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQCF1pJtoBLf-m7UsmGfdGKWMaoFMmEi9VVZHw7jsRYHsiqI166TF-RPi97b00Ri_RBj9DQJo4t" alt="«Fábio Carvalho? Foi surpreendente, mas o importante é sentir-se ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Henrique Araújo diz «respeitar» a decisão do jogador do Liverpool, que renunciou aos sub-21.</p></div>
            </div>
        </a>
        </Template></>;
}