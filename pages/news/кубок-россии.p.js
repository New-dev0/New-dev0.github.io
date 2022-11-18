import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Кубок России</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Кубок России"/>
        <meta name="description" content="Trending News about Кубок России" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Кубок России</h1>
            <Image width={800} height={500} src="https://tverisport.ru/wp-content/uploads/2022/11/Kubok-kompyuteriya-768x512.jpg" alt="Кубок России"/>
            <h3>Recent News</h3>
            <a href='https://tverisport.ru/sport/football/v-tverskuyu-oblast-vozvrashhaetsya-kubok-rossii-po-futbolu-8h8/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В Тверскую область возвращается Кубок России по футболу 8х8</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSaW7ml9wt9xSpOVPlS8RnmfY38LA-H1TT9S6RiFY7yefhHWgyJH7ChMLe8fbCMbzvc-efCElx6" alt="В Тверскую область возвращается Кубок России по футболу 8х8" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Сообщения и материалы информационного агентства «Спорт Твери» («Sport Tveri»), зарегистрировано Управлением Федеральной службы по надзору в сфере связи,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.rusfootball.info/pliga/1146689006-galaktionov-na-kubok-rossii-u-lokomotiva-eksperimentov-ne-budet-vazhno-vyigrat-oba-matcha-i-vyyti-v-sleduyuschiy-etap.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Галактионов: на Кубок России у &quot;Локомотива&quot; экспериментов не ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQlXdZNK72PWIou_sVyqUNy1y8zoe3SNvpS0Fhzw36n4prmtTtAFS4ZOyKSgrWeBFF-4XmVw_Vd" alt="Галактионов: на Кубок России у &quot;Локомотива&quot; экспериментов не ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Главный тренер Локомотива Михаил Галактионов высказался о настрое команды на оставшиеся матчи в Кубке России – против Краснодара и Пари НН.</p></div>
            </div>
        </a>
        </Template></>;
}