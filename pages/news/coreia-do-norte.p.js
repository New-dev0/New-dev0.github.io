import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Coreia do Norte</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Coreia do Norte"/>
        <meta name="description" content="Trending News about Coreia do Norte" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Coreia do Norte</h1>
            <Image width={800} height={500} src="https://revistaoeste.com/wp-content/uploads/2022/10/eua-japan-skorea.jpg" alt="Coreia do Norte"/>
            <h3>Recent News</h3>
            <a href='https://revistaoeste.com/mundo/eua-e-aliados-impoem-novas-sancoes-a-coreia-do-norte/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>EUA e aliados impõem novas sanções à Coreia do Norte</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTpLDJtH-Y9ercqSeBhVaoTkqvs73YYXyx0fHHvvOE3sIrL3UdEw6WiySV1KP_oJOTxkqv4EAKf" alt="EUA e aliados impõem novas sanções à Coreia do Norte" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Japão e Coreia do Sul se aliaram aos EUA em resposta aos testes de mísseis do país norte-coreano. Clique para saber mais.</p></div>
            </div>
        </a><a href='https://noticias.r7.com/internacional/eua-japao-e-coreia-do-sul-anunciam-novas-sancoes-contra-a-coreia-do-norte-02122022'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>EUA, Japão e Coreia do Sul anunciam novas sanções contra a ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSZgCLY6AGX1w0S1GK7GEc5yNrMGkdSL3oLGTEFSpuO1-e9htDit23tLRP-6E7NK3EbxUXok0LI" alt="EUA, Japão e Coreia do Sul anunciam novas sanções contra a ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O Japão declarou que, em resposta aos &quot;atos de provocação&quot; de Pyongyang, congelou os ativos de três grupos norte-coreanos - Korea Haegumgang Trading Corp, Korea&nbsp;...</p></div>
            </div>
        </a><a href='https://www.publico.pt/2022/12/02/mundo/noticia/eua-japao-coreia-sul-impoem-novas-sancoes-coreia-norte-2029951'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>EUA, Japão e Coreia do Sul impõem novas sanções à Coreia do ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT40suqpA0UlTmEkPlqKMBonIYd-Pdf59Ggk6Wmtqp8xsXteVQKeZiQf-Dk7f7HBFfyuQ455m5r" alt="EUA, Japão e Coreia do Sul impõem novas sanções à Coreia do ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Aliados justificam “coordenação trilateral” com as dezenas de ensaios balístico realizados este ano por Pyongyang, que terão incluído testes com um míssil&nbsp;...</p></div>
            </div>
        </a><a href='https://difusoraon.com/2022/12/02/eua-japao-e-coreia-do-sul-anunciam-novas-sancoes-contra-coreia-do-norte/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>EUA, Japão e Coreia do Sul anunciam novas sanções contra ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSR04gXqJBop6GC0vCOXNXNjlknmbP9Ct7unGYuzkkxnJC0UmoWEiwCSyJktY4HNm93zY4PYUqE" alt="EUA, Japão e Coreia do Sul anunciam novas sanções contra ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Publicado em 2 de dezembro de 2022 às 13:52 ... Os governos dos Estados Unidos, Japão e Coreia do Norte anunciaram, na madrugada desta 6ª feira (2.dez), novas&nbsp;...</p></div>
            </div>
        </a><a href='https://www.jn.pt/mundo/eua-japao-e-coreia-do-sul-anunciam-novas-sancoes-a-pyongyang-15418635.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>EUA, Japão e Coreia do Sul anunciam novas sanções a Pyongyang</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQem-4WoWGi-K0fHzJP2D4DIW7v0wNZfC0kYDnq6uqcT_IzGws0zYfTOdwwyDkY_-t04yuRmp0n" alt="EUA, Japão e Coreia do Sul anunciam novas sanções a Pyongyang" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Pessoas e instituições são alvo de ação conjunta em resposta a mísseis balísticos norte-coreanos. Os Governos dos Estados Unidos, do Japão e da Coreia do&nbsp;...</p></div>
            </div>
        </a><a href='https://www.balai.cv/noticias/atualidade/japao-e-coreia-do-sul-anunciam-novas-sancoes-contra-a-coreia-do-norte/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Japão e Coreia do Sul anunciam novas sanções contra a Coreia do ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTU50ve6zAsmDNK8YIkXPFcG-xYwZQe72UTYkaRkB0uY9ACTlQdZeiBPUo9TsYMjIGJKffJC4k2" alt="Japão e Coreia do Sul anunciam novas sanções contra a Coreia do ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O Japão incluiu as empresas norte-coreanas Haegumgang e Namgang, e o grupo de piratas informáticos Lazarus. O indivíduo a ser acrescentado à lista nipónica&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}