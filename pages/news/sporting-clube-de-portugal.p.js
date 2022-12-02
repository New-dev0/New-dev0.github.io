import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Sporting Clube de Portugal</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Sporting Clube de Portugal"/>
        <meta name="description" content="Trending News about Sporting Clube de Portugal" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Sporting Clube de Portugal</h1>
            <Image width={800} height={500} src="" alt="Sporting Clube de Portugal"/>
            <h3>Recent News</h3>
            <a href='https://www.sporting.pt/pt/noticias/futebol/futebol-formacao/iniciados/2022-12-01/isaac-santos-assinou-contrato-de-formacao'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Isaac Santos assinou contrato de formação</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Isaac Santos assinou contrato de formação" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Isaac Santos assinou um contrato de formação com o Sporting Clube de Portugal e é a mais recente aposta da formação verde e branca.</p></div>
            </div>
        </a>
        </Template></>;
}