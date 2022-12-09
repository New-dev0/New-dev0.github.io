import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Dia da Justiça</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Dia da Justiça"/>
        <meta name="description" content="Trending News about Dia da Justiça" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Dia da Justiça</h1>
            <Image width={800} height={500} src="" alt="Dia da Justiça"/>
            <h3>Recent News</h3>
            <a href='https://ww2.trt2.jus.br/noticias/noticias/noticia/dia-da-justica-conheca-historias-e-homenagens-do-trt-2-na-pagina-do-centro-de-memoria'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Dia da Justiça: conheça histórias e homenagens do TRT-2 na ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Dia da Justiça: conheça histórias e homenagens do TRT-2 na ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O artigo mais recente, publicado neste dia 8 de dezembro, é uma homenagem ao juiz do trabalho Maurício Miguel Abou Assali, falecido em setembro deste ano. Além&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}