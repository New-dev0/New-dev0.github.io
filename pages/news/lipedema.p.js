import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Lipedema</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Lipedema"/>
        <meta name="description" content="Trending News about Lipedema" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Lipedema</h1>
            <Image width={800} height={500} src="https://jornaldiadia.com.br/wp-content/uploads/2022/11/1-4.png" alt="Lipedema"/>
            <h3>Recent News</h3>
            <a href='https://jornaldiadia.com.br/medico-especialista-e-a-ex-paquita-tatiana-maranhao-falam-sobre-dieta-e-lipedema/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Médico especialista e a ex-paquita Tatiana Maranhão falam sobre ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTmBb7RTZ-3w7s_OLFzzTXLJAkxgMWtCFhlRGRHmj-IgQG2O5gw-b5liCD_IHatN41ey2F2lH1t" alt="Médico especialista e a ex-paquita Tatiana Maranhão falam sobre ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Quando a mulher com Lipedema faz dieta, ela não perde peso nos membros que estão com acúmulo de gordura. Esta é a principal diferença para quem não tem a doença&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}