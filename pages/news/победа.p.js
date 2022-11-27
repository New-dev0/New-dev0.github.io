import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Победа</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Победа"/>
        <meta name="description" content="Trending News about Победа" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Победа</h1>
            <Image width={800} height={500} src="https://www.euromag.ru/storage/c/2022/11/25/1669364609_215385_16.jpg" alt="Победа"/>
            <h3>Recent News</h3>
            <a href='https://www.euromag.ru/tickets/pobeda-objavila-rasprodazhu-biletov-po-999-rublej/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Победа» объявила распродажу билетов по 999 рублей</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTkKQdjQus9mBpKIUGEwXEy91snF1q0ZJRRFxYF5SXleKxlxw4FySA_QnuaE66qeRHLVHKzq-0V" alt="«Победа» объявила распродажу билетов по 999 рублей" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Рейсы в стамбульский аэропорт им.Сабихи Гёкчен начнутся 1 декабря 2022 года и будут выполняться ежедневно. Рейсы в главный стамбульский аэропорт стартуют 21&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}