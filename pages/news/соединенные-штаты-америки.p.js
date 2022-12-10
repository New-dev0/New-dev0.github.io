import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Соединенные Штаты Америки</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Соединенные Штаты Америки"/>
        <meta name="description" content="Trending News about Соединенные Штаты Америки" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Соединенные Штаты Америки</h1>
            <Image width={800} height={500} src="" alt="Соединенные Штаты Америки"/>
            <h3>Recent News</h3>
            <a href='https://rossaprimavera.ru/news/293f055d'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Делегация Намибии направляется на саммит США — Африка</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTJAg5Ttr5dccyCGcdFB94w71tz7Df3Jg-HQMBQsPdmrsYUBGrNoFMygxMM3TKjay2AxSP8iiog" alt="Делегация Намибии направляется на саммит США — Африка" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>С 14-дневным визитом в Соединенные Штаты Америки отправился президент Намибии Хаге Гейнгоб во главе делегации влиятельных граждан страны — для участия в&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}