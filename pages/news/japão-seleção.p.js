import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Japão seleção</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Japão seleção"/>
        <meta name="description" content="Trending News about Japão seleção" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Japão seleção</h1>
            <Image width={800} height={500} src="" alt="Japão seleção"/>
            <h3>Recent News</h3>
            <a href='https://riodaspedras.portaldacidade.com/noticias/esportes/conheca-cada-selecao-do-grupo-e-japao-5950'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Conheça cada Seleção do Grupo E: Japão</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRrW5K9aVQmsiYehqLxqb19iAwnMT9jyR-BeeWdJSLN0zCb3ZKy31Wktliav5BeyNcF0gMWs23E" alt="Conheça cada Seleção do Grupo E: Japão" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Para entrar no clima da Copa o Portal da Cidade divulga diariamente um Guia com as informações das equipes e os palpites; CONFIRA!</p></div>
            </div>
        </a>
        </Template></>;
}