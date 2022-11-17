import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Barbara Tinoco</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Barbara Tinoco"/>
        <meta name="description" content="Trending News about Barbara Tinoco" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Barbara Tinoco</h1>
            <Image width={800} height={500} src="https://thumbs.web.sapo.io/?W=1200&H=630&png=1&delay_optim=1&tv=1&crop=center&bottom_overlay=https%3A%2F%2Fmiranda.sapo.pt%2Fassets%2Fimg%2Fbeauty-sapo%2Ffacebook-overlay.png&epic=ZmE1YCl5H6kyUd7yQJFxopU4fYloFgSv5SBCRTBrIC1kW/qZvgXZ8S+/QAk3p7vtDcDfPh2+3/kG0mqfo+O17CgO/rNFB6mkqG7G4O2TWiQHXlg=" alt="Barbara Tinoco"/>
            <h3>Recent News</h3>
            <a href='https://miranda.sapo.pt/outras-coisas/artigos/barbara-tinoco-os-melhores-looks-de-beleza-no-dia-do-seu-aniversario'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bárbara Tinoco: os melhores looks de Beleza no dia do seu ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQMyUtWr8B5QbXn2nLHPb_xyJdqAjUFaX3YaWfRLXfhlKvXpVwut0WErslgU2KAgLde176N5fvK" alt="Bárbara Tinoco: os melhores looks de Beleza no dia do seu ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A artista portuguesa celebra 23 anos e promete dar cartas não só na música, como na Beleza. ...</p></div>
            </div>
        </a>
        </Template></>;
}