import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Лолита</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Лолита"/>
        <meta name="description" content="Trending News about Лолита" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Лолита</h1>
            <Image width={800} height={500} src="https://n1s1.hsmedia.ru/a4/af/89/a4af89fa2f28da67de6cbd9cc2cd7fe7/1200x629_0xac120003_10901196551668968295.png" alt="Лолита"/>
            <h3>Recent News</h3>
            <a href='https://www.starhit.ru/novosti/poslednyaya-pesnya-shatunova-korablik-lolity-ot-moiseeva-zvezd-doveli-do-slez-na-shou-superstar-849956/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Последняя песня Шатунова, кораблик Лолиты от Моисеева ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRm1XZsjer8hvFpI90Pl17qYAmYQZkzuPx1Zrqjb_RxqgnnXoK6rmojfYbjTPX6jBIRZu7Zs3uJ" alt="Последняя песня Шатунова, кораблик Лолиты от Моисеева ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Очередной выпуск шоу на НТВ был посвящен безвременно ушедшим из жизни артистам. Участники вспоминали истории, связанные с коллегами, и исполняли их&nbsp;...</p></div>
            </div>
        </a><a href='https://novostivl.ru/news/20221121/91626/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Звезд довели до слез на шоу “Суперстар” | 21.11.2022 | NVL</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSYqBvFDhvRvpqIBqe-fIDFcWFxU9uYxF8pCCdYeWJUqjJwIIy2QRpS5AV2izz_GhuMs7YdSV9w" alt="Звезд довели до слез на шоу “Суперстар” | 21.11.2022 | NVL" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>21 ноября - NVL. Очередной выпуск шоу “Суперстар” посвятили ушедшим из жизни артистам: участники вспоминали истории, связанные с умершими коллегами,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}