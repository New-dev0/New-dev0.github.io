import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Илья Яшин</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Илья Яшин"/>
        <meta name="description" content="Trending News about Илья Яшин" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Илья Яшин</h1>
            <Image width={800} height={500} src="https://ichef.bbci.co.uk/news/1024/branded_russian/0F40/production/_127940930_tass_56333870.jpg" alt="Илья Яшин"/>
            <h3>Recent News</h3>
            <a href='https://www.bbc.com/russian/news-63864402'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Илью Яшина приговорили к 8,5 годам по делу о &quot;военных фейках ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQJLiAHLasmPOklPgow9OVGJMQyv1gvWKx6WyNwPR7Io53xLvGzYP6nV8kKqFALZ_pBlMSncVif" alt="Илью Яшина приговорили к 8,5 годам по делу о &quot;военных фейках ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Мещанский суд Москвы назначил 8 лет и 6 месяцев колонии общего режима оппозиционеру Илье Яшину (внесен в реестр &quot;иноагентов&quot;), обвиняемому в распространении&nbsp;...</p></div>
            </div>
        </a><a href='https://meduza.io/feature/2022/12/09/putina-sprosili-pro-zverskiy-srok-dlya-ili-yashina-eto-kto-takoy-otvetil-prezident'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Путина спросили про «зверский» срок для Ильи Яшина. «Это кто ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTmf0wRS5bbeniHWCJpgo7nSHjXvMiiXF8IQIhbl8M2AguXMAiXRKUtlCI7QAqG21sR9-S16v5M" alt="Путина спросили про «зверский» срок для Ильи Яшина. «Это кто ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Путина спросили про «зверский» срок для Ильи Яшина. «Это кто такой?» — ответил президент. 06:24, 9 декабря 2022. Источник: Meduza.</p></div>
            </div>
        </a><a href='https://www.kommersant.ru/doc/5718409'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Путин о Яшине: это кто такой</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Путин о Яшине: это кто такой" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Президент России Владимир Путин прокомментировал приговор бывшему муниципальному депутату Илье Яшину (признан иностранным агентом).</p></div>
            </div>
        </a><a href='https://www.golosameriki.com/a/yashin-is-sentenced/6869442.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Илья Яшин приговорён к 8,5 годам лишения свободы за видео о ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRvNSLPpB-meeRKLloU-ZOOlBbHi3320AyHCrMgS2dpJ-fx6RRb9mmtce8Cf15EOn1A1_chrIkB" alt="Илья Яшин приговорён к 8,5 годам лишения свободы за видео о ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Мещанский суд Москвы признал оппозиционера Илью Яшина виновным в распространении так называемых фейков о российской армии в связи с его стримом о массовых&nbsp;...</p></div>
            </div>
        </a><a href='https://www.interfax.ru/russia/876151'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Яшин приговорен к 8,5 годам колонии общего режима по делу о ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSDyfG1FUMoaHox_zPVTWHNwiNlBIO67Cz1hPpYESGHksBUTMEioHgu9-u6HObBuHTFbG1Rd1Fz" alt="Яшин приговорен к 8,5 годам колонии общего режима по делу о ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Москва. 9 декабря. INTERFAX.RU - Мещанский суд Москвы назначил оппозиционеру Илье Яшину (признан в РФ физлицом-иноагентом) восемь с половиной лет колонии&nbsp;...</p></div>
            </div>
        </a><a href='https://www.forbes.ru/society/482143-sud-priznal-asina-vinovnym-po-delu-o-fejkah-pro-armiu'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Суд признал Яшина виновным по делу о «фейках» про армию</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSPIlxYMfe7Kewh_iqJA2JlEaf4gPUhBiMBge-zFZtPVtY8l8DoUEREzbe25yB6mU3I22pdfcfI" alt="Суд признал Яшина виновным по делу о «фейках» про армию" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Суд признал политика Илью Яшина (Минюст признал его физлицом-иноагентом) виновным по уголовному делу о «фейках» об армии. Обвинение просило назначить ему&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}