import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Таджикистан – Россия</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Таджикистан – Россия"/>
        <meta name="description" content="Trending News about Таджикистан – Россия" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Таджикистан – Россия</h1>
            <Image width={800} height={500} src="https://ss.sport-express.ru/userfiles/materials/183/1836865/large.jpg" alt="Таджикистан – Россия"/>
            <h3>Recent News</h3>
            <a href='https://www.sport-express.ru/football/rusteam/online/tadzhikistan-rossiya-pryamaya-translyaciya-matcha-gde-smotret-tovarischeskaya-igra-tadzhikistan-rossiya-17-noyabrya-2022-goda-1998988/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Таджикистан — Россия: онлайн-трансляция матча</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSrB56qGow1EkLOuTubozj3Xebu8J8LS_EUJBwa7ZL5gv4SJUjMWf3K9nDhlkQ7X8eGX3mzJR-g" alt="Таджикистан — Россия: онлайн-трансляция матча" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Футбол Таджикистан — Россия: прямая трансляция товарищеского матча, дата и время начала игры, где смотреть — какой канал и сайт, текстовая трансляция онлайн&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}