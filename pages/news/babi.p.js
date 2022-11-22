import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Babi</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Babi"/>
        <meta name="description" content="Trending News about Babi" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Babi</h1>
            <Image width={800} height={500} src="https://imagens.ne10.uol.com.br/veiculos/_midias/jpg/2022/11/21/615x300/1_template_fotos_capa__60_-22054949.jpg" alt="Babi"/>
            <h3>Recent News</h3>
            <a href='https://jc.ne10.uol.com.br/social1/2022/11/15124744-babi-saiu-da-fazenda-apos-briga-com-deolane-atriz-chora-e-diz-que-quer-ser-eliminada-entenda.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>BABI SAIU DA FAZENDA? Após briga com DEOLANE, atriz chora e ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQp50Btcnai5Slxc6wOBWuH4pR0xyrdayX2DyqpXE9ruT0a4x_7IfxlPcWcAuIjbuvD60oKwSV33Q" alt="BABI SAIU DA FAZENDA? Após briga com DEOLANE, atriz chora e ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Após uma dinâmica da discórdia nesse domingo (20), ela ficou muito abalada com a confusão.</p></div>
            </div>
        </a><a href='https://www.uol.com.br/splash/noticias/2022/11/21/babi-diz-que-deolane-grita-porque-tem-feridas-e-aponta-sadismo-em-petala.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Babi diz que Deolane grita porque &#39;tem feridas&#39; e aponta sadismo ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ4gQSBW-xwgUspGJeFDm2OcpOtgMPsD3PQWVr4juWNUd6cyFv2Wu1n5mmEMtxg3kjRJvjctJQn" alt="Babi diz que Deolane grita porque &#39;tem feridas&#39; e aponta sadismo ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Bárbara Borges disse que Deolane Bezerra grita porque tem feridas e Pétala distorce falas e age com malícia em A Fazenda 14.</p></div>
            </div>
        </a><a href='https://portalpopline.com.br/a-fazenda-dinamica-termina-babi-prantos/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>A Fazenda: Dinâmica termina com Babi aos prantos</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTQ_ui6yft5teNOJXvAHox9qEIOfKnqogCfm__gOUG6uRde6ni1D1Il3Xau8PXS2sKnMHOXS_rV" alt="A Fazenda: Dinâmica termina com Babi aos prantos" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A pressão do jogo em &quot;A Fazenda&quot; está cada vez mais pesada para Bárbara Borges. No último domingo (20), durante o Jogo da Discórdia, a atriz enfrentou mais&nbsp;...</p></div>
            </div>
        </a><a href='https://lorena.r7.com/post/A-Fazenda-14-Babi-chama-Deolane-de-opressora-e-tirana'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>A Fazenda 14: Babi chama Deolane de opressora e tirana</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="A Fazenda 14: Babi chama Deolane de opressora e tirana" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Babi e Kerline conversaram nesta segunda-feira (20) sobre o comportamento de Deolane na fazenda. Babi disse que não entende como Deolane pode falar que ela&nbsp;...</p></div>
            </div>
        </a><a href='https://www.metroworldnews.com.br/entretenimento/2022/11/21/a-fazenda-14-babi-pode-desistir-a-qualquer-momento-do-reality-show/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>“A Fazenda 14”: Babi pode desistir a qualquer momento do reality ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRrtjvlCPwLgP0xcv2AuZxssuT5Z3UJeV0A6pvkNB8gqFTs--yLMS8SM3gO7fNaAviaZ5_dG9q2" alt="“A Fazenda 14”: Babi pode desistir a qualquer momento do reality ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Após mais uma briga com Deolane Bezerra, a atriz pensa em deixar o reality show da Record TV.</p></div>
            </div>
        </a><a href='https://diariodonordeste.verdesmares.com.br/entretenimento/zoeira/babi-e-ameacada-por-deolane-em-a-fazenda-e-equipe-emite-nota-de-repudio-1.3303006'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Babi é ameaçada por Deolane em &#39;A Fazenda&#39; e equipe emite nota ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSU3NjVwg05nBHOZEtS7LCstoyF5vsVGs2tUIzVP3s7_lclxaLx248NbeeyLW_dSuTDBb0FKN2u" alt="Babi é ameaçada por Deolane em &#39;A Fazenda&#39; e equipe emite nota ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A advogada Deolane Bezerra virou alvo de mais uma reclamação na &#39;Fazenda 14&#39;, dessa vez após discutir com a atriz Bárbara Borges, a Babi, outra participante&nbsp;...</p></div>
            </div>
        </a><a href='https://br.paipee.com/2022/11/21/deolane-ameaca-peoas-e-babi-pede-protecao-para-a-producao/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Deolane ameaça peoas e Babi pede proteção para a produção ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTdwOGc9ev5pQpxQTtdmnNeMQ4c0US1yuyRH4rpSXdqDHuyqB7mLu0n5wApMD0UhWCD6dC3LgML" alt="Deolane ameaça peoas e Babi pede proteção para a produção ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A dinâmica do último domingo, 20, de A Fazenda passou dos limites. Deolane Bezerra ameaçou fisicamente Kerline e disse para Bárbara Borges que poderia&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}