import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Restaurantes Portugal estrela Michelin</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Restaurantes Portugal estrela Michelin"/>
        <meta name="description" content="Trending News about Restaurantes Portugal estrela Michelin" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Restaurantes Portugal estrela Michelin</h1>
            <Image width={800} height={500} src="https://images.impresa.pt/expresso/2022-03-16-Encanto_Merengue_1_Credito_Grupo-JoseAvillez.jpg-0619ad93-1/1.91x1?wm=true&outputFormat=jpeg" alt="Restaurantes Portugal estrela Michelin"/>
            <h3>Recent News</h3>
            <a href='https://expresso.pt/boa-cama-boa-mesa/2022-11-23-As-reacoes-e-tudo-o-que-precisa-de-saber-sobre-os-cinco-novos-restaurantes-portugueses-com-estrela-Michelin-e9060ee0'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>As reações e tudo o que precisa de saber sobre os cinco novos ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSeUTLK1bYGfleAs4RpZC8ZBgTB5hSiMDx7y9RhY-xmap40qq-p4I3BpdtVAqI-gVMc4WIg0joh" alt="As reações e tudo o que precisa de saber sobre os cinco novos ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A gala Michelin que anunciou as estrelas para Espanha e Portugal decorreu em Toledo. Contas feitas existem cinco novos restaurantes distinguidos pelo famoso&nbsp;...</p></div>
            </div>
        </a><a href='https://menshealth.pt/novidades/ha-mais-5-restaurantes-em-portugal-com-estrela-michelin/139698/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Há mais 5 restaurantes em Portugal com estrela Michelin</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR-_N2KWrU2Z2XFj6_05_GZPNLAlovXuu2DgcR3W3ydcXdD0PNvEaTOFD02HD_r7wEslXBClP8n" alt="Há mais 5 restaurantes em Portugal com estrela Michelin" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Portugal recebeu mais cinco estrelas Michelin na gala que decorreu na passada terça-feira em Toledo, Espanha.</p></div>
            </div>
        </a><a href='https://www.wort.lu/pt/vida/cinco-restaurantes-portugueses-conquistam-estrela-michelin-637e030cde135b9236f25b00'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Cinco restaurantes portugueses conquistam estrela Michelin</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRE8ktVIoNSB-AWHlUCiDVRPG9ocXgrx4MLllJjarzcQvZfZcUQIzXyEL76_mLvwpW29BhLkNUj" alt="Cinco restaurantes portugueses conquistam estrela Michelin" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O chef José Avillez ganhou a terceira estrela com o seu &#39;Encanto&#39;, o primeiro restaurante vegetariano a ser distinguido em Portugal.</p></div>
            </div>
        </a><a href='https://vousair.pt/cinco-restaurantes-portugueses-conquistam-primeira-estrela-michelin-e-um-deles-e-o-vegetariano-encanto/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Cinco restaurantes portugueses conquistam primeira estrela ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQtpZU81otzbJJVjN6BfCEDQU5taJUxJW4BecUcDhzv4WLdEqZj3Ic88o1-mD82OX9dJWva8UIZ" alt="Cinco restaurantes portugueses conquistam primeira estrela ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O Guia Michelin atribui, na edição de 2023, a primeira estrela a cinco novos restaurantes portugueses, incluindo o vegetariano Encanto, do chef José Avillez&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sulinformacao.pt/2022/11/algarve-mantem-8-restaurantes-com-estrela-michelin-e-ganha-um-bib-gourmant/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Algarve mantém 8 restaurantes com estrela Michelin e ganha um ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQRjFWqE7HqWEnoBl_hl7To6jiEtRdK2lbTiDXU6_Iq9rkdWmmMJFc4jj1X08RYVPxOonBCk_6X" alt="Algarve mantém 8 restaurantes com estrela Michelin e ganha um ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O restaurante À Mesa, do chef João Dias, em Tavira, foi galardoado com o símbolo Bib Gourmand, que, na simbologia do Guia Michelin, significa uma boa relação&nbsp;...</p></div>
            </div>
        </a><a href='https://www.flash.pt/weekend/detalhe/estes-sao-os-5-novos-restaurantes-com-estrela-michelin-em-portugal-saiba-o-que-comer-e-o-que-esperar-dos-novos-espacos-premiados'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Estes são os 5 novos restaurantes com Estrela Michelin em Portugal ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRhwnfTcLwRyj4nTEIWtevxtDhCDF1YmrY9N_K5uHxuhHEjfiZQBqyiXGARxXVHnBrdxUxaWZcq" alt="Estes são os 5 novos restaurantes com Estrela Michelin em Portugal ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Cinco restaurantes foram distinguidos com a mais alta distinção da gastronomia. Deixe-se levar por uma viagem de sabores e descubra os segredos destes&nbsp;...</p></div>
            </div>
        </a><a href='https://multinews.sapo.pt/noticias/cinco-restaurantes-portugueses-conquistam-primeira-estrela-michelin/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Cinco restaurantes portugueses conquistam primeira estrela Michelin</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTX6HByPswiJJbL0uGONvPFIR70tbL2CQra3lqVoQKNoYf7ngxi9O-hH1vligh-DSss2b8vrmZQ" alt="Cinco restaurantes portugueses conquistam primeira estrela Michelin" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Encanto (José Avillez e João Diogo), Kabuki Lisboa (Paulo Alves), Kanazawa (Paulo Morais) – em Lisboa –, Euskalduna Studio (Vasco Coelho Santos) e Le Monument (&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}