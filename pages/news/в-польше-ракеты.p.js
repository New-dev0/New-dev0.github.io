import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>В Польше ракеты</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,В Польше ракеты"/>
        <meta name="description" content="Trending News about В Польше ракеты" /></Head><Template>
            <h1 style={{fontSize: "30"}}>В Польше ракеты</h1>
            <Image width={800} height={500} src="" alt="В Польше ракеты"/>
            <h3>Recent News</h3>
            <a href='https://readovka.news/news/121162'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>МИД Турции: падение ракеты в Польше было несчастным ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ6nQFvnCSTY9cHmjuk0w9sFbZBNcs4FR1OmBI8njbYAdHzipgzdYjWn93INlSkijK_SYKtXezO" alt="МИД Турции: падение ракеты в Польше было несчастным ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ранее глава Турции Реджеп Эрдоган говорил, Эрдоган: данные показывают, что Россия не причастна к инциденту в ПольшеОн верит позиции Москвы что инцидент с&nbsp;...</p></div>
            </div>
        </a><a href='https://www.fontanka.ru/2022/11/17/71825225/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Падала ли на Польшу вторая ракета? Ответил президент Дуда</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTbFv1dlnWs8ML-5MPiCM6OuwZyBrZwn-C0bvmsGA4Qc3EWJFVH85JpShzpdowWyFQfarHX7dbS" alt="Падала ли на Польшу вторая ракета? Ответил президент Дуда" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В Польше не нашли следов второй ракеты, которая могла упасть на территории страны. Об этом 17 ноября заявил президент республики - Общество - 17 ноября 2022&nbsp;...</p></div>
            </div>
        </a><a href='https://www.bbc.com/russian/news-63646027'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Падение ракеты в польской деревне Пшеводув. Что известно на ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRa1DfjvPMBqKSofNqU_uaNTTBvhyN4Me4t62BfydtnoUYxvds5AwM17jSMkilZS6pGqNy8JY9J" alt="Падение ракеты в польской деревне Пшеводув. Что известно на ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Во вторник вечером в поселке Пшеводув на востоке Польши возле границы с Украиной упала ракета, в результате чего погибли два человека.</p></div>
            </div>
        </a><a href='https://www.m24.ru/articles/politika/16112022/521916'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Как в мире отреагировали на падение двух ракет в Польше</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTAfRXK_RnHSdNijVhqxkOKA7rZ9-29BBEanJAODxLlESEZkMnX_trh8wQXjVkIkcQVfor-MyCc" alt="Как в мире отреагировали на падение двух ракет в Польше" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>15 ноября на территорию Польши недалеко от границы с Украиной упали две ракеты, два человека погибли. Некоторые западные чиновники попытались обвинить в&nbsp;...</p></div>
            </div>
        </a><a href='https://www.kommersant.ru/doc/5669229'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Песков — о падении ракеты в Польше: первопричина всего ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Песков — о падении ракеты в Польше: первопричина всего ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Пресс-секретарь президента РФ Дмитрий Песков прокомментировал заявление США о том, что вне зависимости от результатов расследования вина за падение ракеты в&nbsp;...</p></div>
            </div>
        </a><a href='https://meduza.io/news/2022/11/17/pervoprichina-vsemu-eto-nato-i-ssha-peskov-ob-otvetstvennosti-za-padenie-rakety-v-polshe'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Первопричина всему — это НАТО и США». Песков — об ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSA9nx4h5dCrH1mFIQtKdUUPvvfJ0dVIDURnk6f_yss0kiDkYnpWeTGFxOAvKRGUJ8kbbDToMDk" alt="«Первопричина всему — это НАТО и США». Песков — об ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В Кремле считают США и НАТО «первопричиной всего», что касается ситуации с падением ракеты в Польше. Так пресс-секретарь президента РФ Дмитрий Песков&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}