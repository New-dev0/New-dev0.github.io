import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Монако – Марсель</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Монако – Марсель"/>
        <meta name="description" content="Trending News about Монако – Марсель" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Монако – Марсель</h1>
            <Image width={800} height={500} src="https://ss.sport-express.ru/userfiles/materials/183/1835901/large.jpg" alt="Монако – Марсель"/>
            <h3>Recent News</h3>
            <a href='https://www.sport-express.ru/football/france/reviews/monako-marsel-2-3-obzor-matcha-15-tura-chempionata-francii-aleksandr-golovin-sdelal-golevuyu-peredachu-1997787/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Голевой пас Головина оказался бесполезен: «Монако» проиграл ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRWq6_ZHvOeAOgodtLo4_xqIEjHfWKKVH0XsxHL8m_D4aBnsnmzqXJu1kURgGaLc2Egb04WKfg7" alt="Голевой пас Головина оказался бесполезен: «Монако» проиграл ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>У «Монако» в этом сезоне появилась серьезная болезнь — монегаски пока ни разу не победили команду из текущей топ-7 лиги. Были отдельные неплохие матчи,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.championat.com/football/article-4890383-monako-marsel-2-3-golevaya-peredacha-aleksandra-golovina-statistika-obzor-matcha-13-noyabrya-2022-goda-liga-1.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Какой волшебник!» Во Франции восхищаются прекрасным ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSf4r16bh4bgN0sB2vszxCoQ-5K7PsB6FRy7YPB8e6iuYFY1yPY8Y4j2cifoFfZQ6SDxBkWWO16" alt="«Какой волшебник!» Во Франции восхищаются прекрасным ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Но «Монако» отличная игра россиянина не помогла. Монегаски не просто упустили победу, а уступили на 90+8-й минуте.</p></div>
            </div>
        </a><a href='https://sportmail.ru/news/football-foreign/53866317/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Монако» проиграл «Марселю» в чемпионате Франции, Головин ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTpOa6QJqFIMFw1oEakJEwXqGx6Cyr4O2EvOK1Ql8iGwJmhsQWkZAhohImEGju7jKOKfQDZrzaE" alt="«Монако» проиграл «Марселю» в чемпионате Франции, Головин ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ТАСС, 14 ноября. «Монако» дома со счетом 2:3 проиграл «Марселю» в матче 15-го тура чемпионата Франции по футболу. Встреча прошла в воскресенье на стадионе «Луи&nbsp;...</p></div>
            </div>
        </a><a href='https://sport24.ru/news/football/2022-11-13-monako-marsel-smotret-onlayn-pryamaya-translyatsiya-monako-marsel-pryamoy-efir-monako-marsel-gde-smotret-monako-marsel-besplatno'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Монако» — «Марсель». Головин против Жиго. Смотреть ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQkUEFyw3VKBz2dVOFJBbg6mEruME_M6BY4ltBWKW8ok0PPR_3VXQR7Y2aSmcoK3xlZBBDiyVbh" alt="«Монако» — «Марсель». Головин против Жиго. Смотреть ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Самые свежие новости российского и мирового спорта только на сайте Sport24.ru! Интервью со спортсменами, онлайн трансляции, аналитика и прогнозы,&nbsp;...</p></div>
            </div>
        </a><a href='https://football24.ua/ru/shedevr_aleksisa_i_bezumnaja_koncovka_v_videoobzore_matcha_monako__marsel__23_n747260/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Шедевр Алексиса и безумная концовка в видеообзоре матча ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRoMahSe8o3P1Zn7rdO4nhe8E7iktNLKYlGM71huUkT1iUyIWGmXZJqYiUTPsCUQ37s7KbEM6WK" alt="Шедевр Алексиса и безумная концовка в видеообзоре матча ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Монако и Марсель устроили феерическую перестрелку в матче 15 тура Лиги 1. Смотрите видео голов и обзор поединка. Новости футбола Футбол 24.</p></div>
            </div>
        </a><a href='https://www.sport.ru/football/golovin-otdal-golevoy-pas-v-matche-monako-marsel/article534970/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Головин отдал голевой пас в матче &quot;Монако&quot;-&quot;Марсель&quot;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ_6KhyVS9lYp3BRUoWkARvdC3elDK7aWOL37zymbS26zLZIaRbsbE8GmWj-hqCEHt-CW51kuXQ" alt="Головин отдал голевой пас в матче &quot;Монако&quot;-&quot;Марсель&quot;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Российский полузащитник Александр Головин отдал голевой пас в матче 15-го тура чемпионата Франции &quot;Монако&quot;-&quot;Марсель&quot;. Полузащитник &quot;Монако&quot; на 72-й минуте&nbsp;...</p></div>
            </div>
        </a><a href='https://news.sportbox.ru/Vidy_sporta/Futbol/spbnews_NI1723855_Monako_proigral_Marselu_propustiv_na_7_j_dobavlennoj_minute'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Монако» проиграл «Марселю», пропустив на 7-й добавленной ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQEmHZeoAtqT7MoPT6ohN-_nTG7WI8-Qydgh4veAqN24TBtehi1GnlmDt-OZ5WEfXAjy0Y_dQbY" alt="«Монако» проиграл «Марселю», пропустив на 7-й добавленной ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>«Монако» сыграл вничью с «Марселем» в матче 15-го тура Лиги 1 — 2:2.</p></div>
            </div>
        </a>
        </Template></>;
}