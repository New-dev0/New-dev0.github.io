import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Adidas</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Adidas"/>
        <meta name="description" content="Trending News about Adidas" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Adidas</h1>
            <Image width={800} height={500} src="" alt="Adidas"/>
            <h3>Recent News</h3>
            <a href='https://foz.portaldacidade.com/noticias/cidade/black-friday-da-foz-star-calcados-com-nike-adidas-e-fila-a-precos-jamais-vistos-5954'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Black Friday da Foz Star Calçados com Nike, Adidas e Fila a preços ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQmbUfNWLBKWJtSxRLFAQOXU5RyhPjdW651MIEph-fqZDnymLYvlSsPNvKDXSfmhsfNWNYeDMIo" alt="Black Friday da Foz Star Calçados com Nike, Adidas e Fila a preços ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Só nesta sexta-feira (25), as quatro lojas da estrela da Vila Portes estarão com essas e outras super promoções na linha de tênis, sandálias e chinelos.</p></div>
            </div>
        </a>
        </Template></>;
}