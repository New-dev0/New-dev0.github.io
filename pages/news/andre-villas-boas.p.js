import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Andre Villas-Boas</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Andre Villas-Boas"/>
        <meta name="description" content="Trending News about Andre Villas-Boas" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Andre Villas-Boas</h1>
            <Image width={800} height={500} src="https://bolavip.com/__export/1668810339286/sites/bolavip/img/2022/11/18/agif13062412070160.jpg_242310155.jpg" alt="Andre Villas-Boas"/>
            <h3>Recent News</h3>
            <a href='https://br.bolavip.com/saopaulo/Queria-muito-Queridinho-no-Sao-Paulo-se-anima-com-proposta-de-Duilio-e-pode-pintar-no-Corinthians-20221118-0160.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>“Queria muito”; &#39;Queridinho&#39; no São Paulo se anima com proposta ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSouAGiTzSJYpX85hsch1ziYZWUZwYv8mfQHqi8kH9pcI1P8rs7wxnUT1VctEr7Nv_nAdAs9KQa" alt="“Queria muito”; &#39;Queridinho&#39; no São Paulo se anima com proposta ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Rival do tricolor paulista entrou em negociações e nome era um dos mais cobiçados no São Paulo.</p></div>
            </div>
        </a>
        </Template></>;
}