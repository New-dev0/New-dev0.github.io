import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>ÖĞRETMENLER GÜNÜ Tebrik</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,ÖĞRETMENLER GÜNÜ Tebrik"/>
        <meta name="description" content="Trending News about ÖĞRETMENLER GÜNÜ Tebrik" /></Head><Template>
            <h1 style={{fontSize: "30"}}>ÖĞRETMENLER GÜNÜ Tebrik</h1>
            <Image width={800} height={500} src="https://www.tgrthaber.com.tr/assets/images/logo.png" alt="ÖĞRETMENLER GÜNÜ Tebrik"/>
            <h3>Recent News</h3>
            <a href='https://www.tgrthaber.com.tr/aktuel/ogretmenler-gunu-tebrik-karti-nasil-hazirlanir-ogretmene-tebrik-karti-ornekleri-2857071'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Öğretmenler Günü tebrik kartı nasıl hazırlanır? Öğretmene tebrik ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQLfv1h7GkdvINPjU1vI-6G7186_hNPGlFQeepz2XU9jubm8ZCokKGrXKolI10gtQWC9FFfezuK" alt="Öğretmenler Günü tebrik kartı nasıl hazırlanır? Öğretmene tebrik ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ÖĞRETMENLER GÜNÜ KARTI NASIL HAZIRLANIR? Öğretmeninize bu özel günde kendi ellerinizle kart hazırlamak ister misiniz? Oldukça basit yöntemle hazırlanan “Tebrik&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}