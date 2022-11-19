import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Международный день студента</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Международный день студента"/>
        <meta name="description" content="Trending News about Международный день студента" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Международный день студента</h1>
            <Image width={800} height={500} src="https://tvmig.ru/upload/resize_cache/iblock/2ed/cla6bym6sjjh3yernhssjmlmh8n7z2uq/1200_630_1/Безымянный.png" alt="Международный день студента"/>
            <h3>Recent News</h3>
            <a href='https://tvmig.ru/news/v-mezhdunarodnyy-den-studenta-v-noyabrske-proshli-massovye-kataniya-na-konkakh/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В Международный день студента в Ноябрьске прошли массовые ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSm7s8dnZ2vMVu-NNtYc3kJu-XAnKuxfyL9xY0wRvPcfPtRRfEyL7xgJcT70kLW5KDMr34riRHw" alt="В Международный день студента в Ноябрьске прошли массовые ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Подарок к Международному дню студента ребятам сделали активисты «Молодой Гвардии Единой России». Они организовали бесплатное массовое катание.</p></div>
            </div>
        </a><a href='https://www.masu.edu.ru/press/news/32136-segodnya-vo-vsyem-mire-otmechaetsya-mezhdunarodnyy-den-studenta'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Сегодня во всём мире отмечается Международный день студента</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSlE6DtDWKpM-8pbHuQwip7bKH_WVwfmANGrVIXLCvM4uXYNqqqXkxnEq5Gfvaf8VGvY1vl1N8o" alt="Сегодня во всём мире отмечается Международный день студента" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>p&gt;И пусть в России он менее популярен, чем 25 января, Мурманский арктический государственный университет с удовольствием поздравляет всех своих&nbsp;...</p></div>
            </div>
        </a><a href='https://vitvesti.by/index.php/obrazovanie/v-mezhdunarodnyi-den-studentov-v-polotckom-gosudarstvennom-universitete-prokhodit-den-studencheskogo-samoupravleniia.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В Международный день студентов в Полоцком государственном ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT9iGSLc0xBhYwT2Xvs1Jp4q_cfZXmvhPossI5VQss6GPqgAsmzH-Bf8pLcoGqpBgMP8vEPGiTb" alt="В Международный день студентов в Полоцком государственном ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Утро в университете началось с церемонии передачи портфелей руководящих лиц их дублерам. Каждому из них было выдано задание.</p></div>
            </div>
        </a>
        </Template></>;
}