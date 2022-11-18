import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Greve geral função Pública</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Greve geral função Pública"/>
        <meta name="description" content="Trending News about Greve geral função Pública" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Greve geral função Pública</h1>
            <Image width={800} height={500} src="https://static-storage.dnoticias.pt/www-assets.dnoticias.pt/images/configuration/fb-9/logoRS775413_image_tgY5cJO_YzvQiXF_FHrG7C9.jpeg" alt="Greve geral função Pública"/>
            <h3>Recent News</h3>
            <a href='https://www.dnoticias.pt/2022/11/17/336623-usam-convoca-concentracao-na-avenida-arriaga-em-solidariedade-com-trabalhadores-da-funcao-publica/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>USAM convoca concentração na Avenida Arriaga em solidariedade ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRC1UwFD0VYMGWHD2JyAer_Fka2WocRp849iKyVNh8emnsYY6UpYmawcgxeoAfhoBuLh9Md6d9I" alt="USAM convoca concentração na Avenida Arriaga em solidariedade ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A USAM – União dos Sindicatos da Madeira informou, esta quinta-feira, que no ãmbito da greve convocada pelas Federações Nacionais da Função e Administração&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}