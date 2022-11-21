import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>19 ноября</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,19 ноября"/>
        <meta name="description" content="Trending News about 19 ноября" /></Head><Template>
            <h1 style={{fontSize: "30"}}>19 ноября</h1>
            <Image width={800} height={500} src="https://ss.sport-express.ru/userfiles/materials/183/1837668/large.jpg" alt="19 ноября"/>
            <h3>Recent News</h3>
            <a href='https://www.sport-express.ru/hockey/khl/news/khl-raspisanie-i-rezultaty-matchey-19-noyabrya-avangard-ak-bars-neftehimik-ska-traktor-metallurg-2000026/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>КХЛ, 19 ноября: «Нефтехимик» победил СКА, «Авангард ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTQi5mIRc4nSbFRy4DyNV9MaVNX_ISjAoX_d5pYcDXJ3gsrZrhEcO2bm8UPYaAcUUBMgaRzLhYC" alt="КХЛ, 19 ноября: «Нефтехимик» победил СКА, «Авангард ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>19 ноября, в субботу, состоялись очередные матчи регулярного чемпионата КХЛ.</p></div>
            </div>
        </a><a href='https://www.tv21.ru/news/2022/11/19/programma-dezhurnyy-po-pechenge-ot-19-noyabrya'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Программа «Дежурный по Печенге» от 19 ноября</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ-sNUq4DQ4gyhQfXMf81tf1fb-9XDGfbrmGyVtoH3xuRTgDyDdz_NYGsdg5PxeVqTHxkyomM9g" alt="Программа «Дежурный по Печенге» от 19 ноября" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В Печенгском округе завершился один из проектов-победителей конкурса беспроцентных займов «Норникеля». Как по нотам. На Кольской ГМК ликвидировали условную&nbsp;...</p></div>
            </div>
        </a><a href='https://www.championat.com/hockey/article-4897813-rezultaty-matchej-khl-19-noyabrya-turnirnaya-tablica-videoobzory-raspisanie-matchej-khl-na-20-noyabrya.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Домашний кошмар «Салавата» и новое сенсационное ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSpn1IQ89rWZjLV3nwZFoWE2nEH2k2LAfgu7N_O8FW9-ZOxoFEgYqK6KCuY2ZZGoFHdSL67KHsA" alt="Домашний кошмар «Салавата» и новое сенсационное ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>У «Авангарда» уже девять побед подряд, невероятный «Адмирал» — в тройке лучших команд Востока.</p></div>
            </div>
        </a>
        </Template></>;
}