import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Selecao nacional</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Selecao nacional"/>
        <meta name="description" content="Trending News about Selecao nacional" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Selecao nacional</h1>
            <Image width={800} height={500} src="" alt="Selecao nacional"/>
            <h3>Recent News</h3>
            <a href='https://www.acorianooriental.pt/noticia/o-catl-de-sao-pedro-apoia-a-selecao-nacional-portuguesa-345028'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>O CATL de São Pedro Apoia a Seleção Nacional Portuguesa</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS3p26yQJkJn-gPSAm--s7OKri-O2ZuVz7t8E85PQ4pB3giLRmvy9KveWWfB-48QlJK4ORiyAWw" alt="O CATL de São Pedro Apoia a Seleção Nacional Portuguesa" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A delegada nos Açores da Associação da Hotelaria de Portugal (AHP) afirmou que o Natal e Passagem de Ano são sempre períodos &quot;mais fracos&quot; para a hotelaria&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}