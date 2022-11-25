import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Queer o. Que é</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Queer o. Que é"/>
        <meta name="description" content="Trending News about Queer o. Que é" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Queer o. Que é</h1>
            <Image width={800} height={500} src="https://thumbs.web.sapo.io/?W=1200&H=630&delay_optim=1&tv=1&crop=center&bottom_overlay=https%3A%2F%2Fmag.sapo.pt%2Fassets%2Fimg%2Fmag-sapo%2Ffacebook-overlay.png&epic=MTVkH2uvYoqzu8HJX3EIGWzDJoenYhFkc8ygN2G1GvMYR7eRQhlS8HtVcQ5M+dvPYe4kQxo1sUKUfFeBadMf3lUDKn66tEBmgGy/+Wl1LQD/8Qc=" alt="Queer o. Que é"/>
            <h3>Recent News</h3>
            <a href='https://mag.sapo.pt/passatempos/artigos/queer-porto-8-ganhe-bilhetes-duplos-para-sessoes'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Queer Porto 8: ganhe bilhetes duplos para sessões</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTYMxL_musUKY4pSiWLvfSVDhLdNO4RlmeTt7kIYo9SYbCAAZiYAEpe0XOmdV3WeIFjaRM5nuNG" alt="Queer Porto 8: ganhe bilhetes duplos para sessões" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O Queer Lisboa e o SAPO Mag juntam-se para dar bilhetes para sessões do festival que decorre entre 29 de novembro e 4 de dezembro.</p></div>
            </div>
        </a>
        </Template></>;
}