import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Atomic Heart</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Atomic Heart"/>
        <meta name="description" content="Trending News about Atomic Heart" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Atomic Heart</h1>
            <Image width={800} height={500} src="https://www.mirf.ru/wp-content/uploads/2022/11/4-3.jpg" alt="Atomic Heart"/>
            <h3>Recent News</h3>
            <a href='https://www.mirf.ru/games/videogames/poigrali-v-atomic-heart-i-delimsya-vpechatleniyami/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Atomic Heart: первые впечатления | Видеоигры, Игры | Мир ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRk8XbIEFtZKmm6E3Ppujf7Yga_SP46tSmvtKki-04WQbyyVdVotD9CuV1EfPll_KxoDTyi_2OD" alt="Atomic Heart: первые впечатления | Видеоигры, Игры | Мир ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>24 ноября прошла презентация Atomic Heart для отечественных блогеров и прессы. Мероприятие получилось отличным — локацию подобрали безупречно,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cybersport.ru/tags/games/sovetskii-anturazh-i-roboty-v-moskve-proshla-prezentatsiia-atomic-heart'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Советский антураж и роботы — в Москве прошла презентация ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRorHcuMw44xqYAUFVjf1HiM7MBJrrLhOtOmvKTtRi65x8cmVitOhL7T6B_zb9d6p6m8XKfcwBC" alt="Советский антураж и роботы — в Москве прошла презентация ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Студия Mundfish провела специальную презентацию, посвященную будущему экшену Atomic Heart. На ней приглашенные гости могли больше узнать об игре,&nbsp;...</p></div>
            </div>
        </a><a href='https://dtf.ru/u/514759-netvoyaprincessa/1467100-makarenkov-pro-meropriyatie-atomic-heart'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Макаренков про мероприятие Atomic Heart — netvoyaprincessa ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSbhFXD80HwUql2gkclMU2NftWEUczivSBRZsxhjupq1odINGybqFvDsPuF9I_n-Mebu3e62WSE" alt="Макаренков про мероприятие Atomic Heart — netvoyaprincessa ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ничего особенного, просто видосик с мероприятия по Atomic Heart. И тут два взгляда на вопрос. Взгляд первый - хорошо организованный ивент (про фейл с него&nbsp;...</p></div>
            </div>
        </a><a href='https://www.goha.ru/Atomic-Heart-preview-lj6ZAZ'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Первый взгляд на игру Atomic Heart с закрытого показа в Москве ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTH435ns9fjt_aF95_R-p8PZFpszcpo7ygi5Uoq6x7Iiy3jbB4j8XRgbRKgIqh8ZZsn46QJZkTz" alt="Первый взгляд на игру Atomic Heart с закрытого показа в Москве ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Она существует, игра реальная. Именно так решил написать я об игре Atomic Heart от разработчика из студии Mundfish. Извините, но я один из тех,&nbsp;...</p></div>
            </div>
        </a><a href='https://kanobu.ru/articles/pervyie-vpechatleniya-ot-atomic-heart-prey-i-bioshock-zahodyat-v-russkij-bar-377397/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Превью Atomic Heart - первый обзор на игру с ивента VR Play ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRdsxoe521Ue3kOI3KuT4eM_JHDFv0OQR3bMe1CwUj__cN0kdiKcCSdBcO9NtG5nBT2vQg0Hji8" alt="Превью Atomic Heart - первый обзор на игру с ивента VR Play ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Сейчас разработчики из студии Mundfish организовали в Москве мероприятие, на котором представили играбельную демо-версию своего проекта. Автор «Канобу» Руслан&nbsp;...</p></div>
            </div>
        </a><a href='https://app-time.ru/post/atomic-heart-sovmeschaet-idei-iz-bioshock-i-detroit-become-human'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Atomic Heart совмещает идеи из Bioshock и Detroit: Become Human</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSlWjGUhyu79QAH3_bTAYT7wdXAAYNAQunC_FJp8VhUJjcVRw2yN2yN4hXoJKpzD86KWlB2mDod" alt="Atomic Heart совмещает идеи из Bioshock и Detroit: Become Human" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Atomic Heart — игра от российских разработчиков, которая должна выйти 21-го февраля 2023 года на ПК и консоли прошлого и нынешнего поколений.</p></div>
            </div>
        </a><a href='https://vgtimes.ru/news/93266-razrabotchiki-proveli-pokaz-atomic-heart-dlya-pressy.-delimsya-vpechatleniyami-posle-chasa-igry.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Разработчики провели показ Atomic Heart для прессы. Делимся ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQnCNlF6G3jk1T_59ioDwzFT1fBBEgzsEUUg5oPx08xAPhsEYyRntoJ0ssVlPkQQlzC2v_pTZFc" alt="Разработчики провели показ Atomic Heart для прессы. Делимся ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Релиз Atomic Heart ожидается 21 февраля 2023 года на PC, PlayStation 4, PlayStation 5, Xbox One и Xbox Series X.</p></div>
            </div>
        </a>
        </Template></>;
}