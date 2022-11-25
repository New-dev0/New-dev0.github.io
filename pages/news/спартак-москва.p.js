import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Спартак-Москва</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Спартак-Москва"/>
        <meta name="description" content="Trending News about Спартак-Москва" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Спартак-Москва</h1>
            <Image width={800} height={500} src="https://static.spartak.com/m/23ba/1a59/8a67/f537/85b0/7005/578e/c122/1280_1280_max.jpeg" alt="Спартак-Москва"/>
            <h3>Recent News</h3>
            <a href='https://spartak.com/news/2022-11-23-tur_po_stadionu_i_zalu_slavy_s_danilom_prutsevym/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Тур по стадиону и Залу Славы с Данилом Пруцевым</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRmY-BqPuuENWBoZlOeVnTSBksi7n23Z_s_skFXF2tJtphUXP4rsvX4LincG1JRX5mdWAA8KUOn" alt="Тур по стадиону и Залу Славы с Данилом Пруцевым" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>25 ноября в 14:30 мы начнем экскурсию по «Открытие Банк Арене» и спартаковскому Залу Славы, в которой примет участие футболист нашей команды Данил Пруцев.</p></div>
            </div>
        </a><a href='https://spartak.com/news/2022-11-23-spartak_snova_pomozhet_detyam_s_onkologicheskimi_i_immunologicheskimi_zabolevaniyami_v_novogodney_aktsii_komanda_dobra/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Спартак» снова поможет детям с онкологическими и ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRaLEQV_IdHi3CuNrLMEci0XbwPGwC7uUaiOTQMM-YtNTTsph9bcQ2Yz76758X7mJ4DiPns91ss" alt="«Спартак» снова поможет детям с онкологическими и ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Сроки проведения акции — с 23 ноября по 23 декабря 2022 года. Посмотрите, как это было в прошлом году, и становитесь частью «Команды Добра “Спартака”»! Подарим&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}