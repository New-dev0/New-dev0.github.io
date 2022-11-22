import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Чемпионат мира по футболу</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Чемпионат мира по футболу"/>
        <meta name="description" content="Trending News about Чемпионат мира по футболу" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Чемпионат мира по футболу</h1>
            <Image width={800} height={500} src="https://img.championat.com/news/social/8/55/4900243.jpg" alt="Чемпионат мира по футболу"/>
            <h3>Recent News</h3>
            <a href='https://www.championat.com/football/article-4900243-chempionat-mira-po-futbolu-v-katare-protesty-irana-v-igre-s-angliej-futbolisty-ne-peli-gimn-bannery-na-tribunah.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Наши люди несчастны». Сильные политические протесты ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRoL2jIv4U_mG-vvrydupKJdCqVX54jLSmfDeFBh6K8xA7YtAmQCrps-1-zaIrdv7fAzqB0BPQ8" alt="«Наши люди несчастны». Сильные политические протесты ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Для иранцев чемпионат мира – безопасное место выражения своей позиции. Футболисты, например, отказались петь гимн страны.</p></div>
            </div>
        </a>
        </Template></>;
}