import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Sagitário</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Sagitário"/>
        <meta name="description" content="Trending News about Sagitário" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Sagitário</h1>
            <Image width={800} height={500} src="https://thumbs.web.sapo.io/?W=1200&H=630&delay_optim=1&tv=1&crop=center&bottom_overlay=https%3A%2F%2Fmag.sapo.pt%2Fassets%2Fimg%2Flifestyle-sapo%2Ffacebook-overlay.png&epic=OTI4jduuZp5em9wYdgG2MYOenmUbHWz7nNpjkMJGjURWKhH6Ju9p4izFjvClmN70Lt/ccjsINDcev+Zjy8nkYPaYa8PvlVySt2Ua+EHa7GktdTI=" alt="Sagitário"/>
            <h3>Recent News</h3>
            <a href='https://lifestyle.sapo.pt/astral/astrologia/artigos/momento-astrologico-transicao-de-escorpiao-para-sagitario'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Momento astrológico: transição de Escorpião para Sagitário</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRNCtSV8-abV7akX5ulS5qhfySwOc8li7wyWJL5QdMYsWXJ5yEz4jUyQ4BDPiSauz0p-A7gqifn" alt="Momento astrológico: transição de Escorpião para Sagitário" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Breves notas: Lua Nova de Sagitário, Júpiter Estacionário Directo. Efeméride do aniversário da amada Maria Flávia de ...</p></div>
            </div>
        </a>
        </Template></>;
}