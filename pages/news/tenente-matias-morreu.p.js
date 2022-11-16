import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Tenente Matias morreu</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Tenente Matias morreu"/>
        <meta name="description" content="Trending News about Tenente Matias morreu" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Tenente Matias morreu</h1>
            <Image width={800} height={500} src="https://tnonline.uol.com.br/img/Artigo-Destaque/700000/Tenente-da-Policia-Militar-PM-Marco-Antonio-Matias-00702913-0-202211150750.jpg?xid=838933" alt="Tenente Matias morreu"/>
            <h3>Recent News</h3>
            <a href='https://tnonline.uol.com.br/noticias/apucarana/tenente-matias-sera-sepultado-nesta-terca-feira-em-apucarana-702913'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Tenente Matias será sepultado nesta terça-feira, em Apucarana ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS7_xRl8psSoNUdKW3Y8XM0VydtqNnrPoffoPyGAVppNX8ixtvKg-yUm_OtVLfd1Ysd6b_QasyL" alt="Tenente Matias será sepultado nesta terça-feira, em Apucarana ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Matias foi encontrado morto dentro do apartamento, na tarde desta segunda-feira, 14, na cidade de Arapongas, onde residia atualmente.</p></div>
            </div>
        </a><a href='https://www.patosonline.com/tenente-matias-policial-militar-e-influencer-e-encontrado-morto-em-apartamento-no-parana/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Tenente Matias, policial militar e influencer, é encontrado morto em ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS29Oj3lypABfgRTa-Gdd_piCGEVcbVjUQsp8SWYUeXUVhj5qEW72e7RGQtQURyGATyRSAVeh-l" alt="Tenente Matias, policial militar e influencer, é encontrado morto em ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O policial era conhecido no meio digital e participava de vídeos do famoso youtuber Renato Garcia. Ele deixa a esposa, a capitã Kelly Wistuba França,&nbsp;...</p></div>
            </div>
        </a><a href='https://plantaosantamariense.com.br/noticia/18150/tenente-matias-e-encontrado-morto-aos-36-anos-policial-deixa-esposa-e-filhos'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Tenente Matias é encontrado morto aos 36 anos; policial deixa ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS05wksvna1MpWRF5So5e5pSX9zAYqHWZzVYq8Rnb96Ma7IEPFgWTAz9ErYerbx1t_DPP6o4Git" alt="Tenente Matias é encontrado morto aos 36 anos; policial deixa ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O tenente Matias morreu aos 36 anos. Marco Antônio Matias foi encontrado morto no apartamento em que vivia no Paraná, ontem (14). A Prefeitura de Apucarana,&nbsp;...</p></div>
            </div>
        </a><a href='https://gmconline.com.br/noticias/parana/morre-em-arapongas-o-tenente-matias-aos-36-anos/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Morre em Arapongas o tenente Matias, aos 36 anos</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQZ4XMIfrFSy4ci2dNuVhhjpJqW89UpBXXpV_4hhTZC4fuKDd6jYj_ZSHO0INc5-nvADdbEcRp1" alt="Morre em Arapongas o tenente Matias, aos 36 anos" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O 1º tenente da Polícia Militar (PM) Marco Antônio Matias, 36 anos, de Arapongas, foi encontrado morto dentro do apartamento.</p></div>
            </div>
        </a>
        </Template></>;
}