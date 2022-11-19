import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Ifes</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Ifes"/>
        <meta name="description" content="Trending News about Ifes" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Ifes</h1>
            <Image width={800} height={500} src="" alt="Ifes"/>
            <h3>Recent News</h3>
            <a href='https://ifes.edu.br/noticias/20727-ifes-divulga-resultado-parcial-do-processo-seletivo-para-cursos-tecnicos-integrados'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ifes divulga resultado parcial do processo seletivo para cursos ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Ifes divulga resultado parcial do processo seletivo para cursos ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A partir desse resultado, terá início o processo de análise de documentação dos candidatos classificados que se inscreveram em uma das ações afirmativas. E na&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}