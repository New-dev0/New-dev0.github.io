import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Brasil FC</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Brasil FC"/>
        <meta name="description" content="Trending News about Brasil FC" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Brasil FC</h1>
            <Image width={800} height={500} src="https://brasil.un.org/sites/default/files/styles/large/public/2022-11/Captura-de-Tela-2022-11-25-a%CC%80s-12.45.03.png?h=3603c598&itok=7xTnB2O8" alt="Brasil FC"/>
            <h3>Recent News</h3>
            <a href='https://brasil.un.org/pt-br/209280-acnur-jogadoras-do-brasil-se-unem-campanha-em-defesa-de-refugiadas'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ACNUR: jogadoras do Brasil se unem à campanha em defesa de ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ5kEMmqXZ5riDdOn5EgNyN59TALmKlLGs1Z-SVIz4YEn0lPVbtDanzDMbds6HyYjNft7cle2Tr" alt="ACNUR: jogadoras do Brasil se unem à campanha em defesa de ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Jogadoras de renomados clubes brasileiros de futebol e vôlei participam, até o dia 10 de dezembro, da campanha “Atletas pelo fim da violência de gênero de&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}