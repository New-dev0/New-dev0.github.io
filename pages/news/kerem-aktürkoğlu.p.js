import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Kerem Aktürkoğlu</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Kerem Aktürkoğlu"/>
        <meta name="description" content="Trending News about Kerem Aktürkoğlu" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Kerem Aktürkoğlu</h1>
            <Image width={800} height={500} src="https://i12.haber7.net//haber/haber7/og_image/2022/44/galatasaray_kerem_akturkoglu_ile_prensipte_anlasti_1667665226_3363.jpg" alt="Kerem Aktürkoğlu"/>
            <h3>Recent News</h3>
            <a href='https://spor.haber7.com/galatasaray/haber/3282785-kerem-akturkoglunun-gol-sevinci-soru-oldu'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kerem Aktürkoğlu&#39;nun gol sevinci soru oldu!</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTdKzA4Z7FKfMBudPtg5akG4-D7zA0TXy4ZYrQg-jkNyyO5sBxAp8rM02Z_czLPYEyrau72_ptr" alt="Kerem Aktürkoğlu&#39;nun gol sevinci soru oldu!" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Tüm Spor - TRT ekranlarında yayınlanan 3&#39;te 3 yarışma programında Galatasaraylı futbolcu Kerem Aktürkoğlu&#39;nun gol sevinçlerinde yaptığı sevincin kime ait&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}