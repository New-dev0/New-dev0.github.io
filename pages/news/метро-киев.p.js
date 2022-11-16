import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Метро Киев</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Метро Киев"/>
        <meta name="description" content="Trending News about Метро Киев" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Метро Киев</h1>
            <Image width={800} height={500} src="" alt="Метро Киев"/>
            <h3>Recent News</h3>
            <a href='https://fakty.com.ua/ru/ukraine/suspilstvo/20221115-metro-kyyeva-postupovo-vidnovlyuye-ruh-pislya-raketnoyi-ataky/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Метро Киева постепенно восстанавливает движение после ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSN2GNoS0-g1Dz4wIbbX3Jg81bRlnZTecsQNzRezyfBwaaQibKNu7YRefV2qLSlWl9rvWhBxWOo" alt="Метро Киева постепенно восстанавливает движение после ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Метрополитен в Киеве постепенно возобновляет движение в обычном режиме после массированного ракетного обстрела. Что известно о работе метро в Киеве 15&nbsp;...</p></div>
            </div>
        </a><a href='https://kyiv.comments.ua/news/society/developments/13595-klichko-rasskazal-o-rabote-metro-posle-raketnoy-ataki-na-kiev.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Кличко рассказал о работе метро после ракетной атаки на Киев</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ5ZzFx5TzVLeEQ5_CX0RfH-s-GnkAbnFw8WbKUErOSaez1lAUBHOBg-ldZBp5sYNRNwtcNdwZy" alt="Кличко рассказал о работе метро после ракетной атаки на Киев" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Столичное метро после ракетных ударов по Киеву и продолжительной воздушной тревоги возобновляет движение в обычном режиме. Об этом рассказал Киевский&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ukrinform.ru/rubric-kyiv/3615138-metro-v-kieve-vozobnovlaet-rabotu.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Метро в Киеве возобновляет работу</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQMW-LDW1gEWRsFPkQcwRM1QkxGQ0f9Srj-gDm9MG_MrXRt23IPwYRQ8wt8g7eGPrcg2eCvxLqv" alt="Метро в Киеве возобновляет работу" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Киевский метрополитен после ракетной атаки и продолжительной воздушной тревоги возобновляет движение в обычном режиме. — Укринформ.</p></div>
            </div>
        </a><a href='https://www.unian.net/economics/transport/kiev-vecherom-zamer-v-uzhasnyh-probkah-ceny-na-taksi-vzleteli-do-nebes-foto-video-novosti-kieva-12046722.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Киев вечером замер в жутких пробках, цены на такси взлетели ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQwpAxg4LQsR5fn3Gfb3xk2mZD9SGxcZn1bg3532jrmF5ne99VXuYoOj4ScYUrAB9kh1K3ni_ub" alt="Киев вечером замер в жутких пробках, цены на такси взлетели ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В Киеве образовались пробки, которые наблюдаются и сейчас. А таксисты, пользуясь ситуацией, взвинтили цены на поездки. ФОТО и видео.</p></div>
            </div>
        </a><a href='https://www.5.ua/ru/kyev/stolychnoe-metro-posle-raketnoi-ataky-na-kyev-vozobnovliaet-dvyzhenye-v-obichnom-rezhyme-klychko-292605.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Столичное метро после ракетной атаки на Киев возобновляет ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSil9y8vpD7e-QjyRW7dmV5jyLqLtPyew1f9UKy7pNQ0j7h46Aen3608f8qh_AXXNiYCAYSHFht" alt="Столичное метро после ракетной атаки на Киев возобновляет ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>На некоторых подземных станциях, где собралось много людей, высадку пассажиров возобновляют постепенно.</p></div>
            </div>
        </a><a href='https://news.liga.net/kiev/news/stolichnoe-metro-posle-raketnoy-ataki-vozobnovlyaet-dvijenie-v-obychnom-rejime-klichko'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Столичное метро после ракетной атаки возобновляет движение ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQPcnELXyXxKWCv_hk7YOwa3vHpt22EUSSQ7E0_jvCSZux3Msl6_az_vnzsR39tOw0lLvN8xPFw" alt="Столичное метро после ракетной атаки возобновляет движение ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Столичное метро после ракетной атаки на Киев и продолжительной воздушной тревоги возобновляет движение в обычном режиме. киев, метро, ракетный удар,&nbsp;...</p></div>
            </div>
        </a><a href='https://24tv.ua/ru/v-kieve-metro-vozobnovljaet-rabotu-posle-vozdushnoj-trevogi-24-kanal_n2198667'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В Киеве из-за долгой воздушной тревоги огромные пробки ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTrEks0_h_-LQ-7Vx2rS8Wke4phUApGpLU3_BvmY6CUfSvo7Z5FwEIVXi1vQI3yBqLdy1jyuuH7" alt="В Киеве из-за долгой воздушной тревоги огромные пробки ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В Киеве постепенно возобновляется движение метро после массовой ракетной атаки России. В столице также образовались большие пробки на дорогах – фото&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}