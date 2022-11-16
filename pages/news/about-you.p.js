import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>About You</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,About You"/>
        <meta name="description" content="Trending News about About You" /></Head><Template>
            <h1 style={{fontSize: "30"}}>About You</h1>
            <Image width={800} height={500} src="https://marketeer.sapo.pt/wp-content/uploads/2022/11/wall-street-english-spec-ad-joao-nes.jpg" alt="About You"/>
            <h3>Recent News</h3>
            <a href='https://marketeer.sapo.pt/do-you-nose-the-assner-designer-propoe-campanha-com-cristina-ferreira/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Do you nose the assner? Designer propõe campanha com Cristina ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQlhEoK45Qv_sBZz_iQIjOX5t320pSGh_dB2Er5I236U2jCEONXw5C01CF1hG8ZKjfgB-u-5TPF" alt="Do you nose the assner? Designer propõe campanha com Cristina ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>&quot;Inspirado nas rubricas do extremamente desagradável de @joanamarquespic na @renascenca sobre a palestra da Cristina Ferreira na Web Summit, desafio o Wall&nbsp;...</p></div>
            </div>
        </a><a href='https://maisalgarve.pt/2022/11/15/noble-novo-video-do-single-lost-in-you/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Noble | Novo Vídeo do Single “Lost In You” - Mais Algarve</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSuximITFUFYYbncQEFGjUKI-tbZwHtPlr5mmc4IJ3LONFf6B0tcp431ZHFdw7OlsNCW0HHLRZo" alt="Noble | Novo Vídeo do Single “Lost In You” - Mais Algarve" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>No novo e apaixonante vídeo para o single &quot;Lost In You&quot; de NOBLE, o amor é voz que sempre fala mais alto.</p></div>
            </div>
        </a>
        </Template></>;
}