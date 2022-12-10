import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Дмитрий кулеба</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Дмитрий кулеба"/>
        <meta name="description" content="Trending News about Дмитрий кулеба" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Дмитрий кулеба</h1>
            <Image width={800} height={500} src="https://klymenko-time.com/wp-content/uploads/2022/12/1-5-600x315-126330-social.png" alt="Дмитрий кулеба"/>
            <h3>Recent News</h3>
            <a href='https://klymenko-time.com/dose/dmitrij-kuleba-sumerki-ukrainskoj-diplomatii/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Дмитрий Кулеба: сумерки украинской дипломатии</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRmoo3FKaAqhlcfdsnS8NVr-JL-4mYDpq9vyp-9IebJj1M47ULRpMXifnk44iQmwamaqYC7zEGZ" alt="Дмитрий Кулеба: сумерки украинской дипломатии" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Что известно о самом молодом и речистом министре иностранных дел Украины? Рассказываем вам в нашем новом досье.</p></div>
            </div>
        </a>
        </Template></>;
}