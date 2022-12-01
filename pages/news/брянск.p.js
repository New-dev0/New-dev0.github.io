import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Брянск</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Брянск"/>
        <meta name="description" content="Trending News about Брянск" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Брянск</h1>
            <Image width={800} height={500} src="" alt="Брянск"/>
            <h3>Recent News</h3>
            <a href='https://br-tvr.ru/index.php/kriminal/54055-v-bryanskom-poselke-rzhanitsa-pokupatel-razbil-vitrinu-i-kholodilnik'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ГТРК Брянск - В брянском поселке Ржаница покупатель разбил ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="ГТРК Брянск - В брянском поселке Ржаница покупатель разбил ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В полицию Жуковского района обратилась хозяйка магазина в села Ржаница. Женщина сообщила, что один из покупателей разбил витрину и повредил холодильник.</p></div>
            </div>
        </a>
        </Template></>;
}