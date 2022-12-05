import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Moro</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Moro"/>
        <meta name="description" content="Trending News about Moro" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Moro</h1>
            <Image width={800} height={500} src="https://conteudo.imguol.com.br/c/noticias/f8/2022/01/27/moro-segurando-o-queixo-1643267014136_v2_615x300.jpg" alt="Moro"/>
            <h3>Recent News</h3>
            <a href='https://noticias.uol.com.br/colunas/leonardo-sakamoto/2022/12/03/moro-quer-liderar-oposicao-mas-seu-partido-caminha-para-a-base-de-lula.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Leonardo Sakamoto - Moro quer &#39;liderar oposição&#39;, mas seu partido ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQo6Zr_t6p19ZUAsJ9ITznyxho8Xv1ytHLdX27vtlms0GIXI0doo7vVX6ctnWGC2LinqqenkVoW" alt="Leonardo Sakamoto - Moro quer &#39;liderar oposição&#39;, mas seu partido ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Diante do avanço das negociações para que o União Brasil faça parte da base do governo Lula no Congresso Nacional e, consequentemente, ocupe espaço na&nbsp;...</p></div>
            </div>
        </a><a href='https://jc.ne10.uol.com.br/colunas/jamildo/2022/12/15134429-moro-pode-mudar-de-partido-novamente-saiba-motivo.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Moro pode MUDAR de partido novamente; saiba motivo</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS1mwCMzELaOGHMyqjPdm7w6e4n5XthFQqcfJ69hZota4EtJeO7aVkE__2mwOkJtXBrBAS2ocXY" alt="Moro pode MUDAR de partido novamente; saiba motivo" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O senador eleito Sergio Moro (UB) pode novamente mudar de partido. O motivo agora seria a possibilidade do União Brasil, sua atual legenda,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.diariodocentrodomundo.com.br/essencial/saiba-o-que-moro-fara-se-o-uniao-brasil-aliar-se-a-lula/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Saiba o que Moro fará se o União Brasil aliar-se a Lula</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRxnQ1QbUYBkYWysF6uQzTPce8NKrmQt7aXrgs0pTIqWCeFY6_z2VbYSR1MZ5-mNtRqWUDC0DBy" alt="Saiba o que Moro fará se o União Brasil aliar-se a Lula" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O senador eleito Sergio Moro já tem planejado o seu futuro, caso o seu partido, União Brasil, decida integrar a base de Luiz Inácio Lula da Silva (PT) no&nbsp;...</p></div>
            </div>
        </a><a href='https://ultimosegundo.ig.com.br/colunas/panorama/2022-12-03/moro-deve-deixar-uniao-brasil.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Insatisfeito com Bivar, Moro pode sair do União Brasil</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQW9Z8Rabkd1hcuTKy1yCjud8CPhi4wyxrfcKwz6vaxOQBH9-ZUlRpLQmvn5bhm6sWpRwyq0fdQ" alt="Insatisfeito com Bivar, Moro pode sair do União Brasil" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Segundo apurou o Portal iG, o ex-ministro do presidente Jair Bolsonaro (PL) se incomodou quando Bivar tentou levar o União Brasil para a base aliada de Lula já&nbsp;...</p></div>
            </div>
        </a><a href='https://www.bnews.com.br/noticias/politica/lula-avanca-por-uniao-brasil-e-sergio-moro-estuda-medida-drastica-saiba-detalhes.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lula avança por União Brasil e Sérgio Moro estuda medida drástica ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSGg92J_wiOgdOHXpto0fH7Nb5biJYEOsqU_8CBkObphPh0F1b4buPcfMT99QAXC5Q8xIkrk-Fd" alt="Lula avança por União Brasil e Sérgio Moro estuda medida drástica ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O presidente eleito&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}