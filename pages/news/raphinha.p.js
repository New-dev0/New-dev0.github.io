import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Raphinha</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Raphinha"/>
        <meta name="description" content="Trending News about Raphinha" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Raphinha</h1>
            <Image width={800} height={500} src="https://terceirotempo.uol.com.br/imagens/51/88/w615_h300_pdt_ft1_205188.webp" alt="Raphinha"/>
            <h3>Recent News</h3>
            <a href='https://terceirotempo.uol.com.br/noticias/depois-de-fred-e-gabriel-jesus-um-novo-cone-raphinha-por-marcosjuniormic'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Depois de Fred e Gabriel Jesus, um novo &#39;cone&#39; Raphinha! Por ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQPRlkZ42fMWXqVwssgcKKiHEDGodqvg63K_0hXiY7zsUI_hbK1xgxHZMQiuHAEg-V6BQIks7BT" alt="Depois de Fred e Gabriel Jesus, um novo &#39;cone&#39; Raphinha! Por ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O atacante brasileiro na Copa do Qatar. Foto: Divulgação/Fifa. Não é questão de eleger um &quot;culpado&quot;, longe disso. Mas, certamente, a eliminação do&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}