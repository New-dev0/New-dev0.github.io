import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Фокстрот</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Фокстрот"/>
        <meta name="description" content="Trending News about Фокстрот" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Фокстрот</h1>
            <Image width={800} height={500} src="https://itc.ua/wp-content/uploads/2022/11/black_fr_1920x400_2.jpg" alt="Фокстрот"/>
            <h3>Recent News</h3>
            <a href='https://itc.ua/ua/articles/top-10-krashhyh-propozytsij-chornoyi-p-yatnytsi-vid-fokstrot-znyzhky-tryvatymut-tsilyj-tyzhden/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ТОП-10 кращих пропозицій Чорної п&#39;ятниці від Фокстрот. Знижки ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTVp-8CC3bXGq9bGliXPWQXx4JHHTi9Am1ttt1lq8uwU-hA8-WiBIspqGvywtRFg1iBFkKNGNC_" alt="ТОП-10 кращих пропозицій Чорної п&#39;ятниці від Фокстрот. Знижки ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>1 Смартфон Samsung Galaxy M32 6/128 Gb Dual Sim Light Blue (SM-M325FLBGSEK) &middot; 2 Телевізор TV Samsung UE55AU7100UXUA &middot; 3 Ноутбук Lenovo IdeaPad 3 15ALC6 Arctic&nbsp;...</p></div>
            </div>
        </a><a href='https://itc.ua/articles/top-10-luchshyh-predlozhenyj-k-chernoj-pyatnytse-ot-fokstrota-skydky-prodlyatsya-tseluyu-nedelyu/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ТОП-10 лучших предложений к Черной пятнице от Фокстрота ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTVp-8CC3bXGq9bGliXPWQXx4JHHTi9Am1ttt1lq8uwU-hA8-WiBIspqGvywtRFg1iBFkKNGNC_" alt="ТОП-10 лучших предложений к Черной пятнице от Фокстрота ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>1 Смартфон Samsung Galaxy M32 6/128 Gb Dual Sim Light Blue (SM-M325FLBGSEK) &middot; 2 Телевизор TV Samsung UE55AU7100UXUA &middot; 3 Ноутбук Lenovo IdeaPad 3 15ALC6 Arctic&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}