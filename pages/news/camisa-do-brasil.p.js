import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Camisa do Brasil</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Camisa do Brasil"/>
        <meta name="description" content="Trending News about Camisa do Brasil" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Camisa do Brasil</h1>
            <Image width={800} height={500} src="https://cdn.folhabv.com.br/images/noti-1669316601.webp" alt="Camisa do Brasil"/>
            <h3>Recent News</h3>
            <a href='https://folhabv.com.br/noticia/ESPORTES/Nacional/Roraimenses-deixam-para-ultima-hora-a-compra-da-camisa-do-Brasil/92768'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Roraimenses deixam para última hora a compra da camisa do Brasil</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS-gjwrAj8swdUFc501whqJU_-STQjZPrs6b8AjGvIEBxVFvBI4UJv9t0IflZnTFO2B9E_CfuhS" alt="Roraimenses deixam para última hora a compra da camisa do Brasil" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Poucos minutos antes do jogo, público ainda está a procura da camisa ideal para torcer para o Brasil. Em Boa Vista, as lojas de Jaime Brasil continuarão&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}