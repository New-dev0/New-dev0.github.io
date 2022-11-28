import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Польша – Саудовская Аравия</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Польша – Саудовская Аравия"/>
        <meta name="description" content="Trending News about Польша – Саудовская Аравия" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Польша – Саудовская Аравия</h1>
            <Image width={800} height={500} src="https://www.rbc.ua/static/img/1/1/111_612_1300x820.jpg" alt="Польша – Саудовская Аравия"/>
            <h3>Recent News</h3>
            <a href='https://www.rbc.ua/ukr/news/polshcha-vpevneno-obigrala-saudivsku-araviyu-1669476427.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Польша уверенно обыграла Саудовскую Аравию на ЧМ-2022</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRoJjCjbnNtZws2G87cpJS_iDqIa2wpgzHkCPuYXdBaS46RExfCiF1nEzM4Vu7YhqvR2wd9zRHB" alt="Польша уверенно обыграла Саудовскую Аравию на ЧМ-2022" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В рамках второго тура Чемпионата мира-2022 в Катаре в группе С сборная Польши со счетом 2:0 обыграла Саудовскую Аравию.</p></div>
            </div>
        </a><a href='https://www.sport-express.ru/football/world/2022/news/polsha-saudovskaya-araviya-vo-skolko-nachalo-i-gde-smotret-pryamuyu-translyaciyu-matcha-chempionata-mira-2022-26-noyabrya-2003407/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Польша — Саудовская Аравия: во сколько начало и где смотреть ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTmIOrIdt9XPsl4nGPBloKus4GoDjbiAcypEAKk1Bvo-g4GaXDi7cxpPAsu_01lQkPjLWtDv3JO" alt="Польша — Саудовская Аравия: во сколько начало и где смотреть ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В субботу, 26 ноября сборная Польши сыграет против Саудовской Аравии в матче групповой стадии чемпионата мира по футболу-2022 в Катаре.</p></div>
            </div>
        </a><a href='https://www.championat.com/football/news-4906325-polsha-saudovskaya-araviya-pyotr-zelinski-otkryl-schyot-v-matche.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Польша — Саудовская Аравия: Пётр Зелиньски открыл счёт в ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSvkwYO6W3v5POpWZbY0bwEOtDfoSPSTz-gQbrvr_60hFY5Xz0GB3EZkPye6SLbgdOpTsV2nSTT" alt="Польша — Саудовская Аравия: Пётр Зелиньски открыл счёт в ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Полузащитник сборной Польши Пётр Зелиньски открыл счёт в матче 2-го тура группового этапа чемпионата мира 2022 года в Катаре со сборной Саудовской Аравии.</p></div>
            </div>
        </a><a href='https://sport.24tv.ua/ru/polsha-saudovskaja-aravija-obzor-matcha-26112022-chempionat-mira-2022-24-kanal_n2205880'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Польша победила главную сенсацию ЧМ-2022, Левандовский ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRuJY4XbUeKXfIpXl83dyBFJg61zRyppcrZMy68-TLghRD24dhDDl7zkhVKyDBdMAN4bVRqe0oR" alt="Польша победила главную сенсацию ЧМ-2022, Левандовский ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Польша Саудовская Аравия провели игру 26 ноября 2022 года в рамках матча Чемпионата мира по футболу 2022 года. Полный обзор матча ЧМ 2022, какой счет Польша&nbsp;...</p></div>
            </div>
        </a><a href='https://football24.ua/ru/polsha__saudovskaja_aravija_onlajn_transljacija_matcha_chm_2022__levandovski_protiv_prokljatija_i_glavnoj_sensacii_n748950/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Польша – Саудовская Аравия: онлайн-трансляция матча ЧМ ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSvP3PChChOMKfFePxUNxkm-WYV0ZS8jbnUXARsa9fahfgwNI4MQ-UV3KzJrTxxut2vRAlWc6Fl" alt="Польша – Саудовская Аравия: онлайн-трансляция матча ЧМ ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Польша и Саудовская Аравия встречаются на Чемпионате мира во 2 туре группы C. Составы и ссылки на онлайн-трансляцию матча смотрите на &quot;Футбол 24&quot;.</p></div>
            </div>
        </a><a href='https://www.ua-football.com/foreign/worldcup/1669480882-polsha-saudovskaya-araviya-2-0-obzor-matcha-i-video-golov.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Польша - Саудовская Аравия 2:0. Обзор матча и видео голов</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ3nRAUEpo5oIof6IMdyKtwZKjZKijdYkxdOYFEZCPmYrfQ1GGRtHJl5fNssRVGwIP-eriCR9jI" alt="Польша - Саудовская Аравия 2:0. Обзор матча и видео голов" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>26-11-2022 ✓ Чемпионат мира FIFA. Поляки на вершине таблицы в группе с Месси: Польша - Саудовская Аравия 2:0. Обзор матча и видео голов ᐉ смотреть онлайн&nbsp;...</p></div>
            </div>
        </a><a href='https://sportrbc.ru/news/6381308e9a794770c11909db'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Польша — Саудовская Аравия</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQhfVLmNug9ntH8xsmMV7FL443vcwuBLK08fIdgBC48u-PE24Mg2MNYlfJfh6fc0uu8VJuNGXfa" alt="Польша — Саудовская Аравия" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>На этом будем прощаться, пожелаем сборной Саудовской Аравии побед в следующих матчах турнира. А сборную Польши поздравляем с победой!</p></div>
            </div>
        </a><a href='https://news.sportbox.ru/Vidy_sporta/Futbol/world_cup/spbnews_NI1731060_Polsha__Saudovskaja_Aravija_luchshije_momenty_matcha_ChM_2022_po_futbolu_26_nojabra_smotret_goly_i_obzor'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Польша — Саудовская Аравия: лучшие моменты матча ЧМ-2022 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ4kqDXtObowF_WzZJHdJ6I_gOnajyA5J4yNA0nQe2_P-2gQpAuCL_VdFyLxLK92AodRtmycqnr" alt="Польша — Саудовская Аравия: лучшие моменты матча ЧМ-2022 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Польша — Саудовская Аравия: лучшие моменты матча ЧМ-2022 по футболу 26 ноября, смотреть голы и обзор.</p></div>
            </div>
        </a>
        </Template></>;
}