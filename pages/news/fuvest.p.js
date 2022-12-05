import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Fuvest</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Fuvest"/>
        <meta name="description" content="Trending News about Fuvest" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Fuvest</h1>
            <Image width={800} height={500} src="https://conteudo.imguol.com.br/c/noticias/d9/2021/12/12/alunas-realizam-as-provas-da-primeira-fase-da-fuvest-2022-1639339379944_v2_615x300.jpg" alt="Fuvest"/>
            <h3>Recent News</h3>
            <a href='https://educacao.uol.com.br/noticias/agencia-estado/2022/12/03/fuvest-unicamp-e-unesp-por-que-vestibulares-de-sp-vem-perdendo-inscritos.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Fuvest, Unicamp e Unesp: por que vestibulares de SP vêm ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRZzp0I5YDz5fd5ZG3xxAObqgBN-nB4DR-7NUUoNdTTRn2luBMuG2tOz-LlZw_9bkFNpGwvkIOC" alt="Fuvest, Unicamp e Unesp: por que vestibulares de SP vêm ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Não é só o Exame Nacional do Ensino Médio (Enem) que tem visto queda significativa de inscritos. Tradicionais vestibulares de universidades paulistas - como&nbsp;...</p></div>
            </div>
        </a><a href='https://g1.globo.com/sp/piracicaba-regiao/educacao/noticia/2022/12/03/fuvest-tem-2046-mil-inscritos-para-graduacao-na-usp-de-piracicaba-veja-concorrencia-das-carreiras.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Fuvest tem 2.046 mil inscritos para graduação na USP de ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQY88TEpRatRJbzVYmG60WQKMtn0bbyBvJiW2i3wV7mJ5K2XLHD2yWw2Ab441cTpBppn44m8UeF" alt="Fuvest tem 2.046 mil inscritos para graduação na USP de ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Curso com maior número de inscritos é Engenharia Agronômica, que tem mais da metade dos candidatos da Esalq. São 358 vagas ofertadas nos sete cursos do&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}