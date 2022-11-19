import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Заря – Александрия</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Заря – Александрия"/>
        <meta name="description" content="Trending News about Заря – Александрия" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Заря – Александрия</h1>
            <Image width={800} height={500} src="https://www.rbc.ua/static/img/q/h/qhnc_cc8ctmxb8vc7ckbdrxzgbvpx8sq_1300x820.jpg" alt="Заря – Александрия"/>
            <h3>Recent News</h3>
            <a href='https://www.rbc.ua/ukr/news/zorya-rozgromila-oleksandriyu-bitvi-trete-1668775950.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Заря&quot; разгромила &quot;Александрию&quot; в битве за третье место УПЛ</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSu3TvSnMwkeXGmJ7X_n_ngQsX-MjQDzb1iFF-KJivVHGBQlDOrWOw5k5EMOHtReyr5VXu9zbjE" alt="&quot;Заря&quot; разгромила &quot;Александрию&quot; в битве за третье место УПЛ" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Луганская &quot;Заря&quot; одолела прямого конкурента в борьбе за медали чемпионата Украины.</p></div>
            </div>
        </a><a href='https://tsn.ua/ru/video/video-novini/zarya-aleksandriya-luchshie-momenty-matcha-14-tura-ukrainskoy-premer-ligi-2022.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Заря – Александрия. Лучшие моменты матча 14 тура Украинской ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQrZVfRC7wXU4dQ-N-_6l7K17mlDf1ftinB5-r7NM_pZ7uRxR4JouEoXvdXrMTetKv7bB6CfAwI" alt="Заря – Александрия. Лучшие моменты матча 14 тура Украинской ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>18 ноября состоялся матч 14 тура Украинской Премьер-лиги 2022 года. Игра состоялась в Киеве на стадионе &quot;Динамо&quot; имени Валерия Лобановского. На поле&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ua-football.com/ukrainian/high/1668775002-razgrom-kotorogo-ne-zhdali-zarya-aleksandriya-4-1.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Разгром, которого не ждали. Заря - Александрия 4:1</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTdPiW23raOm1I9nwPdxDxZQ_Xb1QeyakHZe8Gi-ipXcVyA5IN2H3QpAScfyhyadI3BUs8SCkmw" alt="Разгром, которого не ждали. Заря - Александрия 4:1" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>18-11-2022 ✓ Премьер-лига. Луганчане за тринадцать минут деклассируют своего прямого конкурента в борьбе за третью строчку: В двенадцати предыдущих матчах&nbsp;...</p></div>
            </div>
        </a><a href='https://football24.ua/ru/zarja__aleksandrija__41__video_golov_i_obzor_matcha_s_istoricheskim_dublem_butko_n747819/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Заря – Александрия – 4:1 – видео голов и обзор матча с ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSuRc3Y58IjK-ouR4tRLgVSkqedbZiR00K6FVTAraSlAQhsDdR2psjYvI2vhtyfTtQ-7n-Ln5G3" alt="Заря – Александрия – 4:1 – видео голов и обзор матча с ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Команда Патрика ван Леувена во втором тайме поединка 14-го тура УПЛ не заметила Александрию. Смотрите видеообзор игры на &quot;Футбол 24&quot;.</p></div>
            </div>
        </a><a href='https://fakty.ua/ru/410963-zarya-za-15-minut-razgromila-aleksandriyu-videoobzor-matcha-upl'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Заря» за 15 минут разгромила «Александрию»: видеообзор ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSRXcTCvWNZfVeV8eNGCQBESbAkujIDcMB7_AbqAroQjUvIF9Xq1_1E_fLLS6Z6aqJ0ADzR8r-R" alt="«Заря» за 15 минут разгромила «Александрию»: видеообзор ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Результат и видеообзор матча 14-го тура чемпионата Украины по футболу между Зарей и Александрией - луганчане забили четыре мяча с 62-й по 76-ю минуту и&nbsp;...</p></div>
            </div>
        </a><a href='https://sport.24tv.ua/ru/zarja-aleksandrija-rezultat-matcha-i-video-golov-upl-18-nojabrja-2022-24-kanal_n2200654'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Заря разгромила Александрию в битве за третье место: пять ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQIoEMh_e1U4B1JsD_E94ZouR8ZJhM7Bnyjn7uqK2bLsTqa17B5eLCq5G5Nxyo8CHpuc7yCEzsL" alt="Заря разгромила Александрию в битве за третье место: пять ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Заря победила Александрию в матче 14-го тура УПЛ 18 ноября 2022 года. Счет матча Заря – Александрия 4:1. Обзор матча Заря – Александрия, видео голов.</p></div>
            </div>
        </a><a href='https://sportarena.com/football/upl/zarya-aleksandriya-pryamaya-translyatsiya-matcha/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Заря – Александрия прямая трансляция матча</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQTN32evY2H6NUnbOaCRRm-ZSsiq-nctdTYrwiKH9oanoiy_xXeWAVRdoyMntPF9JXz3AmtzzQS" alt="Заря – Александрия прямая трансляция матча" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>18 ноября в матче 14-го тура чемпионата Украины в Киеве на стадионе Динамо имени Лобановского Заря сыграет с Александрией. Начало матча Заря – Александрия в&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}