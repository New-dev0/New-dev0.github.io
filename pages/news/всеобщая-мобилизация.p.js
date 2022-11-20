import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Всеобщая мобилизация</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Всеобщая мобилизация"/>
        <meta name="description" content="Trending News about Всеобщая мобилизация" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Всеобщая мобилизация</h1>
            <Image width={800} height={500} src="https://muksun.fm/attachments/9c349337c8b01b13286576fa26cd943b0a05b3a9/store/crop/194/0/1725/974/1725/974/0/89489e3139305edf7806f5ec75a95cbabce6a43cf9e6613d95d7e5e750ff/DSC_4711.jpg" alt="Всеобщая мобилизация"/>
            <h3>Recent News</h3>
            <a href='https://muksun.fm/news/2022-11-18/v-yanvare-v-hmao-mogut-ob-yavit-vseobschuyu-mobilizatsiyu-razbiraem-sluhi-2593002'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В январе в ХМАО могут объявить всеобщую мобилизацию ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRMzMI3LBencqNiY1J7WxAjBgWz3M-xtQMsJOcSGZqAqcGqUK51lj7Yab3vTQz4s2NfVAOUPZi7" alt="В январе в ХМАО могут объявить всеобщую мобилизацию ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Такую информацию активно распространяют телеграм-каналы. Но насколько она правдива? «Muksun.fm» собрал информацию, выслушал мнение экспертов.</p></div>
            </div>
        </a>
        </Template></>;
}