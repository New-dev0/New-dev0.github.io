import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Antony</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Antony"/>
        <meta name="description" content="Trending News about Antony" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Antony</h1>
            <Image width={800} height={500} src="" alt="Antony"/>
            <h3>Recent News</h3>
            <a href='https://poraqui.news/o-melhor-antony-beevor-selecionado-para-voce/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>O melhor antony beevor: Selecionado para você</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ8G4qQb5zqtrxLi8ALd3s7khsCn8f0jmI7TGJhWrEy26aikrYuaACv1gyDQwkIm0DjFfpTPe18" alt="O melhor antony beevor: Selecionado para você" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Não arrisque seu dinheiro suado, pense duas vezes antes de investir, e tome a decisão sabiamente. Nossos leitores são bastante preciosos para nós, entendemos&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}