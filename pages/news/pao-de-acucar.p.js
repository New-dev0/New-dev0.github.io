import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Pao de acucar</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Pao de acucar"/>
        <meta name="description" content="Trending News about Pao de acucar" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Pao de acucar</h1>
            <Image width={800} height={500} src="https://cdn.saocarlosagora.com.br/upload/dn_arquivo/2022/11/b3a2197a-316b-4061-804a-f060260ed799.jpg" alt="Pao de acucar"/>
            <h3>Recent News</h3>
            <a href='https://www.saocarlosagora.com.br/cidade/loja-minuto-pao-de-acucar-entra-em-operacao-na-regiao-damha/153288/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Loja Minuto Pão de Açúcar entra em operação na região do Damha</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ-LkYP9-6Q_rm-4tB0L13KT4u_-QoIYTK0AkLpYbk_iXqfzgRsegnYNILcMJIwt-0mhg4V9I7u" alt="Loja Minuto Pão de Açúcar entra em operação na região do Damha" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Unidade gera 15 empregos. ... Já está em funcionamento a loja Minuto Pão de Açúcar na região do Damha. A nova loja ocupa uma área de 222 metros quadrados e conta&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}