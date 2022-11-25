import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Wednesday</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Wednesday"/>
        <meta name="description" content="Trending News about Wednesday" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Wednesday</h1>
            <Image width={800} height={500} src="" alt="Wednesday"/>
            <h3>Recent News</h3>
            <a href='https://www.ua-football.com/ua/live/match/93218-sheffild-uyensdey-mansfild-taun'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sheffield Wednesday - Мансфілд Таун • дивитись онлайн ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Sheffield Wednesday - Мансфілд Таун • дивитись онлайн ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Онлайн трансляція Sheffield Wednesday - Мансфілд Таун - Кубок Англії ⚽ 2022-11-26 ⚽ Дивитися онлайн матч ☝ Пряма трансляція Суббота 05:00 на&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}