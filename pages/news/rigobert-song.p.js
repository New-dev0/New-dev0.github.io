import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Rigobert Song</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Rigobert Song"/>
        <meta name="description" content="Trending News about Rigobert Song" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Rigobert Song</h1>
            <Image width={800} height={500} src="" alt="Rigobert Song"/>
            <h3>Recent News</h3>
            <a href='https://gq.globo.com/esporte-clube/noticia/2022/12/tecnico-camaroes-song.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Técnico de Camarões, Song adota ternos ousados e &#39;loiro pivete&#39;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQWAqInbHM-hj-e5fxrzMb2qPeqFUHfUGG0mHaXD8CijmQdZwsC5Rry3eALYmRb5voFFmCFys6G" alt="Técnico de Camarões, Song adota ternos ousados e &#39;loiro pivete&#39;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Barba e longos dreads loiros tornavam Rigobert Song inconfundível nos campos ao final da carreira. O estilo do ex-zagueiro foi só uma palhinha do que exibe&nbsp;...</p></div>
            </div>
        </a><a href='https://www.record.pt/internacional/competicoes-de-selecoes/mundial/mundial-2022/camaroes/detalhe/rigobert-song-nem-sabia-que-era-uma-vitoria-tao-historica'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Rigobert Song: «Nem sabia que era uma vitória tão histórica»</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTSLTgTCZmI9ecw17RhPj0K8afJ0wMebHZVNWEkF_B6E-vcP1YfKOpBLxRZOiwgAJ6TfPUvNkx0" alt="Rigobert Song: «Nem sabia que era uma vitória tão histórica»" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Rigobert Song, selecionador dos Camarões, deixou grandes elogios aos jogadorez após a vitória frente ao Brasil por 1-0, resultado que não foi suficiente&nbsp;...</p></div>
            </div>
        </a><a href='https://www.vavel.com/br/futebol-internacional/2022/12/02/1131218-rigobert-song-elogia-jogadores-em-vitoria-sobre-o-brasilmeus-jogadores-sao-guerreiros.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Rigobert Song elogia jogadores em vitória sobre o Brasil:&quot;Meus ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRCTQtmBPoivnaKC8cK7-pfq83kcTS0IRnIH-8wlPFLQvUlc-6yVhgWxkD64r_0yL6xj-H7Ut61" alt="Rigobert Song elogia jogadores em vitória sobre o Brasil:&quot;Meus ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O técnico é o primeiro treinador africano a bater o Brasil em Copas.</p></div>
            </div>
        </a><a href='https://maisfutebol.iol.pt/mundial-2022/camaroes/rigobert-song-percebemos-que-podiamos-ter-feito-melhor'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Rigobert Song: «Percebemos que podíamos ter feito melhor»</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcST0K9iPPBuV8tzTKRu9tlF4W4GwD7NPRrmEyV0jv84I9gHkC8MYTmmqbrlWMiv0yz1MCnFI1I7" alt="Rigobert Song: «Percebemos que podíamos ter feito melhor»" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Apesar da vitória histórica sobre o Brasil, os Camarões não chegaram aos oitavos de final do Mundial 2022.</p></div>
            </div>
        </a><a href='https://extra.globo.com/esporte/tecnico-de-camaroes-song-jogou-em-quatro-copas-com-um-cabelo-diferente-em-cada-25620524.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Técnico de Camarões, Song jogou em quatro Copas com um ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSDwzOnISkP8tle7ft4bD8o-mMiQml-6i806mArevpudOr-1l76ywXo9a7hCF7JfzrqgYjMAxxrQw" alt="Técnico de Camarões, Song jogou em quatro Copas com um ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O treinador da seleção de Camarões, Rigoberto Song, hoje está em evidência pelo comando fora das quato linhas. Mas durante quatro Copas do Mundo, ele se...</p></div>
            </div>
        </a>
        </Template></>;
}