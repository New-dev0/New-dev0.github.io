import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Bloom</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Bloom"/>
        <meta name="description" content="Trending News about Bloom" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Bloom</h1>
            <Image width={800} height={500} src="https://cdn.cmjornal.pt/images/2022-12/img_1200x676$2022_12_01_21_00_22_1219315.jpg" alt="Bloom"/>
            <h3>Recent News</h3>
            <a href='https://www.cmjornal.pt/sociedade/detalhe/nova-droga-aterroriza-moradores-na-ilha-da-madeira-veja-agora-na-cmtv'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Nova droga aterroriza moradores na ilha da Madeira</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTpAyXNrqxiZDKmFJYIgKOe7ghKKTJf1uXUslDw76PiaAwiNtRyK5xjKSVaS4BbMZsKiAGwpjwn" alt="Nova droga aterroriza moradores na ilha da Madeira" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A Madeira é a região do país com maior tráfico e consumo de drogas sintéticas. Esta droga, o Bloom, tem efeitos devastadores. Ver vídeo.</p></div>
            </div>
        </a>
        </Template></>;
}