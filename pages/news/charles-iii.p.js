import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Charles iii</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Charles iii"/>
        <meta name="description" content="Trending News about Charles iii" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Charles iii</h1>
            <Image width={800} height={500} src="https://static1.purepeople.com.br/articles/1/36/67/31/@/4204391-the-crown-charles-nao-costuma-almocar-opengraph_1200-3.jpg" alt="Charles iii"/>
            <h3>Recent News</h3>
            <a href='https://www.purepeople.com.br/noticia/the-crown-cena-da-serie-retrata-e-confirma-dieta-do-rei-charles-iii_a366731/1'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;The Crown&#39;: dieta de Rei Charles III é confirmada em cena da série</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ0ofmom_HRFwGayHnCfwPTZOPWarKYg10YLGaFhI4xJV39YNKDxhun1deOoBCOtS9dxo6nd_FB" alt="&#39;The Crown&#39;: dieta de Rei Charles III é confirmada em cena da série" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Série mostra rotina da diete do Rei Charles conforme informações apontam sobre a alimentação do pai de William e Harry.</p></div>
            </div>
        </a>
        </Template></>;
}