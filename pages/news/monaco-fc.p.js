import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Monaco fc</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Monaco fc"/>
        <meta name="description" content="Trending News about Monaco fc" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Monaco fc</h1>
            <Image width={800} height={500} src="" alt="Monaco fc"/>
            <h3>Recent News</h3>
            <a href='https://mauaagora.com.br/2022/12/02/monaco-x-cercle-brugge-onde-assistir-ao-vivo-amistoso-internacional-de-clubes/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Monaco x Cercle Brugge ONDE ASSISTIR AO VIVO – AMISTOSO ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Monaco x Cercle Brugge ONDE ASSISTIR AO VIVO – AMISTOSO ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A partida do Monaco x Cercle Brugge acontece hoje, HOJE (02/12) às 11 hs, confira os detalhes de transmissão e da partida amistoso.</p></div>
            </div>
        </a>
        </Template></>;
}