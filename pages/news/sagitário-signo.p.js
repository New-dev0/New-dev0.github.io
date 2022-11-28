import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Sagitário signo</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Sagitário signo"/>
        <meta name="description" content="Trending News about Sagitário signo" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Sagitário signo</h1>
            <Image width={800} height={500} src="https://thumbs.web.sapo.io/?W=1200&H=630&delay_optim=1&tv=1&crop=center&bottom_overlay=https%3A%2F%2Fmag.sapo.pt%2Fassets%2Fimg%2Flifestyle-sapo%2Ffacebook-overlay.png&epic=ZjI1cP2RYPRVYE1GhDAzR9pVZTVhK8i1nRd/fMOelGFq6QOPEtpKtWHbhEFcFl+JfVCaUXCTtfgYLCcp7Ec80yTeOa6Bf5llFhPQ5bsEHr1ALNo=" alt="Sagitário signo"/>
            <h3>Recent News</h3>
            <a href='https://lifestyle.sapo.pt/fama/noticias-fama/artigos/e-do-signo-sagitario-estes-famosos-tambem-sao'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>É do signo Sagitário? Estes famosos também são</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSNa_ngBYc6MfrGtZFJcQE5KzI0Y8SlywVii4nNPbqK-bGlhu5THC3z9NFijjXpT0AO7htFhDtk" alt="É do signo Sagitário? Estes famosos também são" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Entre as celebridades, são vários os nomes conhecidos que são do signo Sagitário, tais como Brad Pitt, Miley Cyrus ou Jay-Z. Um bocadinho de gossip por dia, nem&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}