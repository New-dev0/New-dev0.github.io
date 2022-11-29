import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Погода Иркутск</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Погода Иркутск"/>
        <meta name="description" content="Trending News about Погода Иркутск" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Погода Иркутск</h1>
            <Image width={800} height={500} src="https://cdn.iportal.ru/news/2015/social/938c4a17dc85e9fd351f1820cdf7a9.png" alt="Погода Иркутск"/>
            <h3>Recent News</h3>
            <a href='https://ircity.ru/text/society/2022/11/28/71850146/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Просвета» пока не будет: мы узнали, как долго продержатся ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRKK6hATNP5doxoSxjUoI6M9-kwSopJALB7sjzPyOepLR1B3pkAqxBMq3V6zoRR8pjnwxVuxDfv" alt="«Просвета» пока не будет: мы узнали, как долго продержатся ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>При этом особо морозных ночей в регионе пока не ожидается.</p></div>
            </div>
        </a>
        </Template></>;
}