import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Seleção portuguesa</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Seleção portuguesa"/>
        <meta name="description" content="Trending News about Seleção portuguesa" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Seleção portuguesa</h1>
            <Image width={800} height={500} src="" alt="Seleção portuguesa"/>
            <h3>Recent News</h3>
            <a href='https://www.record.pt/opiniao/cronistas/fabiano-abreu-agrela/detalhe/a-velha-mania-da-falta-de-vontade-da-selecao-portuguesa'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>A velha mania da falta de vontade da seleção portuguesa</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSGAXADFsB7fjjKTRTX-eOjiHUvpGivcdYEBD4CPdbGfNbinOP3mc5FB5JNC2HZ0Ilg2Caphz2v" alt="A velha mania da falta de vontade da seleção portuguesa" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Com Cristiano Ronaldo, perderam-se muitos golos, sem ele, pior, não jogamos! Ao jogador Leão falta-lhe personalidade de leão e parece que está a jogar cansado&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}