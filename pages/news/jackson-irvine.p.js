import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Jackson Irvine</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Jackson Irvine"/>
        <meta name="description" content="Trending News about Jackson Irvine" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Jackson Irvine</h1>
            <Image width={800} height={500} src="https://media.futebol365.pt/cache/24/ae/24ae846bb13e83318026bc86349aa4ee.jpg" alt="Jackson Irvine"/>
            <h3>Recent News</h3>
            <a href='https://www.futebol365.pt/artigo/290413-jackson-irvine-demos-tudo-mas-nao-chegou/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jackson Irvine: «Demos tudo mas não chegou»</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSBna1AeTJWEHLTp9t2X8g0Na6E5WI-vPVEPcNpEXDsECaSDu82jy1qZUyoy66a9VyIXz113Jdk" alt="Jackson Irvine: «Demos tudo mas não chegou»" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Declarações de Jackson Irvine, jogador da Austrália, após a derrota frente à Argentina (1-2), em jogo dos oitavos de final do Mundial do Qatar.</p></div>
            </div>
        </a>
        </Template></>;
}