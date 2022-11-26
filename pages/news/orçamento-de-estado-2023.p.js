import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Orçamento de Estado 2023</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Orçamento de Estado 2023"/>
        <meta name="description" content="Trending News about Orçamento de Estado 2023" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Orçamento de Estado 2023</h1>
            <Image width={800} height={500} src="https://eco.imgix.net/uploads/2022/04/artigo_health_talks_03_1200x628.jpg?mark64=aHR0cHM6Ly9lY28uaW1naXgubmV0L0VDT193YXRlcm1hcmsucG5nP2ZtPXBuZw%3D%3D&markscale=33&markalign=center,left&w=1200" alt="Orçamento de Estado 2023"/>
            <h3>Recent News</h3>
            <a href='https://eco.sapo.pt/2022/11/25/orcamento-do-estado-de-2023-e-suficiente-para-a-saude/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Orçamento do Estado de 2023 é suficiente para a saúde?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ6Hf7ftr1vmlyaY3H-Zjvv8otMBNpKdgV_J8K5bbhQJb2M3_rj9paY4-fjzjLeIX7N40XH4SqA" alt="Orçamento do Estado de 2023 é suficiente para a saúde?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Os últimos cinco episódios das Health Talks abordaram o Orçamento do Estado de 2023 na área da saúde. Apesar de algumas opiniões positivas, a maioria&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}