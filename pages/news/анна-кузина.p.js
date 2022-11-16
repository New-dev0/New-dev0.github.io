import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Анна Кузина</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Анна Кузина"/>
        <meta name="description" content="Trending News about Анна Кузина" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Анна Кузина</h1>
            <Image width={800} height={500} src="https://kp.ua/img/article/6594/47_news_big-v1668423900.jpg" alt="Анна Кузина"/>
            <h3>Recent News</h3>
            <a href='https://kp.ua/culture/a659447-zvezda-univera-anna-kuzina-rasskazala-ob-aktere-iz-seriala-podderzhavsheho-ee-posle-napadenija-rf'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Звезда &quot;Универа&quot; Анна Кузина рассказала об актере из сериала ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSRNX-Bl-YUvjDnwaqnBdjXA_sCynAfT6bloqXzcEovpW0uzvniWUqAUh15VjxR4bf-lvHhl6yt" alt="Звезда &quot;Универа&quot; Анна Кузина рассказала об актере из сериала ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Украинская актриса Анна Кузина, наиболее известная по роли Яны Семакиной в российском комедийном сериале &quot;Универ. Новая общага&quot;, призналась, с кем из коллег&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}