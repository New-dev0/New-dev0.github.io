import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>22 ноября</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,22 ноября"/>
        <meta name="description" content="Trending News about 22 ноября" /></Head><Template>
            <h1 style={{fontSize: "30"}}>22 ноября</h1>
            <Image width={800} height={500} src="https://gdb.voanews.com/03370000-0aff-0242-d144-08dacc9111d0_w1200_r1.jpg" alt="22 ноября"/>
            <h3>Recent News</h3>
            <a href='https://www.golosameriki.com/a/voaexpress-11222022/6845180.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>VOAэкспресс 22 ноября 2022</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSz4TcTxlU1Lk3iDhVnKGq2qrdSTaHpfag1_tkgwvIzNIN9DztI3K5LU894oeEPBxWqc7qDiJfN" alt="VOAэкспресс 22 ноября 2022" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Он был арестован после стрельбы в субботу вечером в клубе Q в Колорадо-Спрингс, в результате которой пять человек погибли и по меньшей мере 18 получили ранения.</p></div>
            </div>
        </a><a href='https://www.tatar-inform.ru/news/obzor-glavnoe-k-veceru-22-noyabrya-v-federalnyx-i-mestnyx-telegram-kanalax-5887421'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Обзор: Главное к вечеру 22 ноября в федеральных и местных ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Обзор: Главное к вечеру 22 ноября в федеральных и местных ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Лисичанск поблагодарил за помощь жителей и организации Казани, благодаря неравнодушию которых в городе восстанавливаются разрушенные дома,&nbsp;...</p></div>
            </div>
        </a><a href='https://spbdnevnik.ru/news/2022-11-22/pdkasty-vypusk-ot-22-noyabrya'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«ПДкасты»: выпуск от 22 ноября</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTOwJmgU6C0pUv3qpYqsTaWKy8b1t7GFQTpWxsPcXciGoMHP1caw8gEbsptGZ2q4QafZPIlLpb3" alt="«ПДкасты»: выпуск от 22 ноября" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Квитанции ЖКХ с новым логотипом петербуржцы начнут получать с января 2023 года, Владимир Путин дал старт спуску на воду атомного ледокола «Якутия» в&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}