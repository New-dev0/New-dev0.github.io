import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Filho do Tite</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Filho do Tite"/>
        <meta name="description" content="Trending News about Filho do Tite" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Filho do Tite</h1>
            <Image width={800} height={500} src="https://www.correiodopovo.com.br/image/policy:1.934364:1670590458/image.jpg?a=191%3A100&q=0.6&w=900&$p$a$q$w=61e089e" alt="Filho do Tite"/>
            <h3>Recent News</h3>
            <a href='https://www.correiodopovo.com.br/esportes/copadomundo/de-campe%C3%B5es-mundiais-ao-pr%C3%B3prio-filho-conhe%C3%A7a-os-homens-de-confian%C3%A7a-de-tite-1.934361'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>De campeões mundiais ao próprio filho: conheça os homens de ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSGPL4eQdeM9h1HOQ0gVfMxuIoLRXOGai1KfSQI1G-PerxF4pdGtNvNYsUJyTi2wroXAn_QzOpr" alt="De campeões mundiais ao próprio filho: conheça os homens de ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Taffarel - Campeão na Copa do Mundo dos Estados Unidos 1994, o ex-goleiro é o preparador de goleiros da seleção desde 2014, dois anos antes de Tite assumir o&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}