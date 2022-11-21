import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Эльдар Рязанов</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Эльдар Рязанов"/>
        <meta name="description" content="Trending News about Эльдар Рязанов" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Эльдар Рязанов</h1>
            <Image width={800} height={500} src="https://gorky.media/wp-content/uploads/2022/11/soc-a04345c708d2454ff4d2cab6149fc980.jpg" alt="Эльдар Рязанов"/>
            <h3>Recent News</h3>
            <a href='https://gorky.media/reviews/eldar-ryazanov-i-polotno-otechestvennogo-bytiya/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Эльдар Рязанов и полотно отечественного бытия</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRDIhdrZEuYsD-FM-_ciLvZ-pJgU6fdYlQVyjyRlC9l2LL7x0kQHNvia6oZZ-gn9UmIK8uvJ8nc" alt="Эльдар Рязанов и полотно отечественного бытия" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Сегодня исполняется 95 лет со дня рождения Эльдара Рязанова — поистине народного режиссера, хорошо всем известного по внешне легким комедиям с не всегда&nbsp;...</p></div>
            </div>
        </a><a href='http://www.e-vesti.ru/ru/eldar-ryazanov-kto-on/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Эльдар Рязанов. Кто он?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTisYxxnF8meuBe5OWY8lAr938yEEueW3FnRs80YL7OKeSGUYvP9HUcR2Qe5qYH3y2yTVNmTmVz" alt="Эльдар Рязанов. Кто он?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>18 ноября - День рождения Эльдара Рязанова. Говорить о том, кто такой Эльдар Рязанов, мы не будем, это не только неуместно, но и неприлично. Это человек,</p></div>
            </div>
        </a><a href='https://argumenti.ru/society/2022/11/799578'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Актриса Светлана Немоляева: «Эльдар Рязанов был моим ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRF_n_ErEMO7Hxerh1F9UFR19wUdvzkHBQs9RMXzH2J4sczEHVLSc5ZAaidkiIXnc3-ImEAvkYx" alt="Актриса Светлана Немоляева: «Эльдар Рязанов был моим ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Светлана Немоляева рассказала «Аргументам недели» о работе с Эльдаром Рязановым и почему она ему благодарна за свою карьеру в кино.</p></div>
            </div>
        </a><a href='https://www.mosfilm.ru/news/?ELEMENT_ID=66489'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Раздвинувший рамки комедии: к 95-летию со дня рождения ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSP7pUWNYUEbvkm-nVv9Kuup76PjsxP4_K4VvKrb_8g9krG9gxQdF2GwSjjn8ZJxEnrH6symenY" alt="Раздвинувший рамки комедии: к 95-летию со дня рождения ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В честь Эльдара Рязанова названы улица в Москве и астероид главного пояса 4258 Ryazanov. В 2016 г. на фасаде дома №120 по улице Фрунзе в Самаре, в котором&nbsp;...</p></div>
            </div>
        </a><a href='https://turkmenportal.com/blog/54362/18-noyabrya-rodilsya-rezhisser-eldar-ryazanov'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>18 ноября родился режиссер Эльдар Рязанов | В мире</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRHlC0998w1JgNdzIkVqvcEV9ifUEZsUZozYiJpIqH5OHECZbXdTwnk4IBC4YWQS7B79dWmfUhB" alt="18 ноября родился режиссер Эльдар Рязанов | В мире" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>18 ноября исполнилось бы 95 лет Эльдару Рязанову – одному из известнейших кинорежиссеров советской эпохи. Фильмы Рязанова знает и любит уже не одно&nbsp;...</p></div>
            </div>
        </a><a href='https://www.m24.ru/shows2/46/522960'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Раскрывая тайны звезд&quot;: к 95-летию Эльдара Рязанова</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTjhbfwFqCXWFCcI75O_BzmXaRmi4HQYX5I9RxCdv-hSsU9d_ixvrk7us7H3G0zv5RsJrhDT7nN" alt="&quot;Раскрывая тайны звезд&quot;: к 95-летию Эльдара Рязанова" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>СМИ сетевое издание «Городской информационный канал m24.ru» зарегистрировано в Федеральной службе по надзору в сфере связи, информационных технологий и массовых&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}