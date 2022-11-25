import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Pepe</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Pepe"/>
        <meta name="description" content="Trending News about Pepe" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Pepe</h1>
            <Image width={800} height={500} src="https://www.abola.pt//img/fotos/ABOLA2015/NNH/2022/AntonioSilvaPepe9335596.JPG" alt="Pepe"/>
            <h3>Recent News</h3>
            <a href='https://www.abola.pt/nnh/2022-11-24/portugal-antonio-silva-e-pepe-o-pormenor-em-que-nenhuma-selecao-os-bate/965912'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>António Silva e Pepe - o pormenor em que nenhuma seleção os bate</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQHgmnHKauP-8kuM6WEWwxwM2i2rmovo3m5KUuUdDzdAELKn_iZpmvUwxIY0l-maftC7kKulxPs" alt="António Silva e Pepe - o pormenor em que nenhuma seleção os bate" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Pepe, com 39 anos e nove meses, é um dos jogadores mais velhos presentes nesta fase final. Mais velhos apenas dois: o mexicano Alfredo Talavera (40 e dois&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}