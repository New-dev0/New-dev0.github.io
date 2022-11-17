import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Ukraine</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Ukraine"/>
        <meta name="description" content="Trending News about Ukraine" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Ukraine</h1>
            <Image width={800} height={500} src="https://www.sulinformacao.pt/wp-content/uploads/2022/11/Hotel-SMY-Santa-Eulalia-scaled.jpg" alt="Ukraine"/>
            <h3>Recent News</h3>
            <a href='https://www.sulinformacao.pt/en/2022/11/refugiada-da-ucrania-sem-salario-de-outubro-e-impedida-de-trabalhar-no-hotel-smy-santa-eulalia/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Refugee from Ukraine without October salary and prevented from ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQLHj_32HObJeKo-ui1iJoh4JTCM7iN_pL7YehgZwmGZk1kuXKfgk1YMwpBZpAZd-as3b7bF7fR" alt="Refugee from Ukraine without October salary and prevented from ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O Sindicato dos Trabalhadores da Indústria de Hotelaria, Turismo, Restaurantes e Similares do Algarve denunciou hoje a situação de uma trabalhadora do Hotel SMY&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}