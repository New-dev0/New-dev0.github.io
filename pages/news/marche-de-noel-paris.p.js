import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Marche de noel Paris</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Marche de noel Paris"/>
        <meta name="description" content="Trending News about Marche de noel Paris" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Marche de noel Paris</h1>
            <Image width={800} height={500} src="https://cdn.sortiraparis.com/images/80/1665/400759-le-marche-de-noel-2018-de-saint-germain-des-pres.jpg" alt="Marche de noel Paris"/>
            <h3>Recent News</h3>
            <a href='https://www.sortiraparis.com/arts-culture/balades/articles/46509-le-marche-de-noel-de-saint-germain-des-pres-a-paris-2022'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Le Marché de Noël de Saint-Germain-des-Prés à Paris 2022</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQmTCXXlgY_yBHGmfZXKBUr8iIH835p5dRQa09BDfDPViht0wmjNMm_OFdIsa32SWyNhdxq-8JM" alt="Le Marché de Noël de Saint-Germain-des-Prés à Paris 2022" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le Marché de Noël 2022 du boulevard Saint-Germain à Paris revient du samedi 26 novembre 2022 au dimanche 1er janvier 2023 avec ses beaux chalets décorés&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}