import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Белгородская область</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Белгородская область"/>
        <meta name="description" content="Trending News about Белгородская область" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Белгородская область</h1>
            <Image width={800} height={500} src="" alt="Белгородская область"/>
            <h3>Recent News</h3>
            <a href='https://oskol.city/tv-and-publications/our-tv/88487/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Центр притяжения. Белгородская область от 07.12.2022</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQt7Kz8qrDLO1hTmubPMSgf1Zr2hgnugPH_PmeE5VtWwzyRuJQbxvsVSlBAgGF0ecE-3f1spyaE" alt="Центр притяжения. Белгородская область от 07.12.2022" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Все права на фотоматериалы, видео и тексты принадлежат их авторам. Для сетевых изданий обязательна гиперссылка на сайт — oskol.city. © 2022 Информационный&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}