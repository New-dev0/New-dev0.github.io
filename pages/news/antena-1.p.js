import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>ANTENA 1</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,ANTENA 1"/>
        <meta name="description" content="Trending News about ANTENA 1" /></Head><Template>
            <h1 style={{fontSize: "30"}}>ANTENA 1</h1>
            <Image width={800} height={500} src="" alt="ANTENA 1"/>
            <h3>Recent News</h3>
            <a href='https://www.antena1.com.br/noticias/letra-e-traducao-for-life-isis-gee'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Letra e Tradução: For Life – Isis Gee</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Letra e Tradução: For Life – Isis Gee" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Aprenda a cantar e confira o significado de hits com a Antena 1 de uma maneira divertida e prática. O single de hoje é “For Life”, da cantora polaca Isis&nbsp;...</p></div>
            </div>
        </a><a href='https://www.antena1.com.br/noticias/setor-imobiliario-impulsionam-indice-europeu-stoxx-600-para-novo-pico-em-3-meses'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Setor imobiliário impulsionam índice europeu STOXX 600 para ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Setor imobiliário impulsionam índice europeu STOXX 600 para ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Por Sruthi Shankar e Devik Jain. (Reuters) - O índice pan-europeu STOXX 600 fechou em nova máxima de três meses nesta quinta-feira, liderado por ganhos nas&nbsp;...</p></div>
            </div>
        </a><a href='https://www.antena1.com.br/noticias/mais-de-15-mil-pessoas-desaparecem-na-guerra-da-ucrania-diz-autoridade'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mais de 15 mil pessoas desaparecem na guerra da Ucrânia, diz ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Mais de 15 mil pessoas desaparecem na guerra da Ucrânia, diz ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Por Anthony Deutsch. KIEV (Reuters) - Mais de 15 mil pessoas desapareceram durante a guerra na Ucrânia até agora, disse um funcionário da Comissão&nbsp;...</p></div>
            </div>
        </a><a href='https://www.antena1.com.br/noticias/comite-da-onu-insta-china-a-libertar-detidos-de-xinjiang-e-recomenda-reparacoes'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Comitê da ONU insta China a libertar detidos de Xinjiang e ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Comitê da ONU insta China a libertar detidos de Xinjiang e ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Grupos de direitos humanos acusam Pequim de abusos contra uigures, uma minoria étnica majoritariamente muçulmana que soma cerca de 10 milhões em Xinjiang,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}