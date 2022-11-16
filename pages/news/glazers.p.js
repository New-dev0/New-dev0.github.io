import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Glazers</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Glazers"/>
        <meta name="description" content="Trending News about Glazers" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Glazers</h1>
            <Image width={800} height={500} src="https://cdn.record.pt/images/2022-11/img_1200x676$2022_11_15_17_42_19_2062519.jpg" alt="Glazers"/>
            <h3>Recent News</h3>
            <a href='https://www.record.pt/internacional/paises/inglaterra/detalhe/ronaldo-ao-ataque-aos-glazer-donos-do-man-united-ja-tiraram-mais-de-mil-milhoes-ao-clube'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ronaldo ao ataque aos Glazer: Donos do Man. United já tiraram ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ-BEizuCQNPtlPYA9yMlDuOy6yoqkuXrLcT-XR85JoY0D77LgrC0X-DfBpXnIyKwKfSFJdHlcY" alt="Ronaldo ao ataque aos Glazer: Donos do Man. United já tiraram ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nos arredores do Etihad, casa do Man. City, há uma tarja de agradecimento ao Sheikh Mansour bin Zayed al Nahyan por ter investido no clube, catapultando-o&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}