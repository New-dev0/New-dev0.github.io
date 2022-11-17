import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Новости Украины сейчас</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Новости Украины сейчас"/>
        <meta name="description" content="Trending News about Новости Украины сейчас" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Новости Украины сейчас</h1>
            <Image width={800} height={500} src="https://img.tsn.ua/cached/812/tsn-15890496c3fba55a55e21f0ca3090d06/thumbs/1200x630/16/50/c55240510fa2016b432fa3e966f65016.jpeg" alt="Новости Украины сейчас"/>
            <h3>Recent News</h3>
            <a href='https://tsn.ua/ru/ato/kakie-kategorii-ukraincev-seychas-prizyvayut-na-sluzhbu-v-komandovanii-suhoputnyh-voysk-dali-otvet-2203303.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Какие категории украинцев сейчас призывают на службу: в ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRXTmgu-85CaiwUI2Ihop1jk1VBdIKP50zzSzmcv0_yZUD-lOSXQRwE7nTcynFlMgFOMHFa_LiU" alt="Какие категории украинцев сейчас призывают на службу: в ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В Украине сейчас мобилизуют наиболее подготовленные категории граждан, уже проходивших военную службу. Тех, кто раньше не проходил службу, призывают только&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}