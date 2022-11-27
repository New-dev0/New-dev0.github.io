import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Edital INSS 2022</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Edital INSS 2022"/>
        <meta name="description" content="Trending News about Edital INSS 2022" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Edital INSS 2022</h1>
            <Image width={800} height={500} src="https://dhg1h5j42swfq.cloudfront.net/2022/09/23105858/inss-11.jpg" alt="Edital INSS 2022"/>
            <h3>Recent News</h3>
            <a href='https://www.estrategiaconcursos.com.br/blog/inss-preposicoes-e-pronomes/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>INSS: Preposições e Pronomes</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTsWUFaPTzeVTeqtgsUeUx83-CA_0brpOI9x5e-1oOHJK9eE3pFFuyLlImfgl4eKEYL4sc7eYoB" alt="INSS: Preposições e Pronomes" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Classes gramaticais: Aprenda o emprego das preposições e dos pronomes, duas das classes das palavras da língua portuguesa e como utilizar essas classes da&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}