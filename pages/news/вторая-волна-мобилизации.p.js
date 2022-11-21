import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Вторая волна мобилизации</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Вторая волна мобилизации"/>
        <meta name="description" content="Trending News about Вторая волна мобилизации" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Вторая волна мобилизации</h1>
            <Image width={800} height={500} src="https://cdn.iportal.ru/news/2015/social/ecce04f4f3b2fc29bd779ea4642db7.png" alt="Вторая волна мобилизации"/>
            <h3>Recent News</h3>
            <a href='https://www.chita.ru/text/society/2022/11/20/71822942/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Поджог военкомата, прятки от Осипова и сухой закон. Как ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQT4rLOpSOmuoZyoeCsZliqlmuxgOWP3Yk2natoI7R46bSoKa3spl5O5IqYgtpTM-dADPV2INVm" alt="Поджог военкомата, прятки от Осипова и сухой закон. Как ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Подводим итоги и вспоминаем, что происходило в крае с 21 сентября по 28 октября.</p></div>
            </div>
        </a>
        </Template></>;
}