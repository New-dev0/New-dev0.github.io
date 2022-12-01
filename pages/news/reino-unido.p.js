import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Reino Unido</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Reino Unido"/>
        <meta name="description" content="Trending News about Reino Unido" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Reino Unido</h1>
            <Image width={800} height={500} src="https://media-manager.noticiasaominuto.com/1280/naom_629f029866b4d.jpg?crop_params=eyJsYW5kc2NhcGUiOnsiY3JvcFdpZHRoIjoyNTYwLCJjcm9wSGVpZ2h0IjoxNDQwLCJjcm9wWCI6MCwiY3JvcFkiOjE1Mn0sInBvcnRyYWl0Ijp7ImNyb3BXaWR0aCI6OTYxLCJjcm9wSGVpZ2h0IjoxNzA4LCJjcm9wWCI6ODU3LCJjcm9wWSI6LTF9fQ==" alt="Reino Unido"/>
            <h3>Recent News</h3>
            <a href='https://www.noticiasaominuto.com/mundo/2124291/anunciadas-novas-sancoes-do-reino-unido-a-oficiais-russos'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Anunciadas novas sanções do Reino Unido a oficiais russos</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT29KtTzoLgI6UN5P2QacirY66koNxOYDSZoXYGVvGUUW64kYub5uaOlXHT6h0k_hBdKz3k_9i1" alt="Anunciadas novas sanções do Reino Unido a oficiais russos" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Até agora, o Reino Unido já tinha aplicado sanções financeiras a mais de 1.200 indivíduos, mais de 120 entidades, incluindo 19 bancos russos e mais de 120&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}