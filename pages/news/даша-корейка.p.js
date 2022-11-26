import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Даша Корейка</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Даша Корейка"/>
        <meta name="description" content="Trending News about Даша Корейка" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Даша Корейка</h1>
            <Image width={800} height={500} src="https://cyber.sports.ru/dynamic_images/news/111/362/917/3/share/83b841.jpg" alt="Даша Корейка"/>
            <h3>Recent News</h3>
            <a href='https://cyber.sports.ru/streamers-twitch/1113629173-dasha-korejka-rebyata-eto-moj-poslednij-kruzhok-voobshhe-v-princzipe-v.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Даша Корейка: «Ребята, это мой последний кружок вообще в ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSh7M5A3Td3E-sQfmhMEKxY5MKR8RKzC9fLgcnDrTTe60ugcBA2e21qq_qR23u81FzkWjjnL2pR" alt="Даша Корейка: «Ребята, это мой последний кружок вообще в ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Даша Корейка: «Ребята, это мой последний кружок вообще в принципе в жизни. Мне уже нет смысла жить, типа, все». Теги Twitch Стримы Происшествия Стримеры&nbsp;...</p></div>
            </div>
        </a><a href='https://kliker.com.ua/dasha-korejka-umerla-pravda-li/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«даша корейка умерла» — правда ли | KLIKER</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTMNa1tplJRUqscYtEZT_GZ6G7TSrEIgfdYbb1pTp8FcnV9MVdZC8NzeWKVL9DE6E00UHpCKRBi" alt="«даша корейка умерла» — правда ли | KLIKER" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>25 ноября 2022 года запрос «даша корейка умерла» появился в поисковых трендах: люди ищут, правда ли блогер Даша Корейка умерла, покончив с собой.</p></div>
            </div>
        </a><a href='https://mukola.net/pravda-li-chto-dasha-koreyka-umerla/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Правда ли что Даша Корейка умерла?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQm7kd9DJ3VcWb_xvd27ztFrgrKUSBj6Svb-Unf_M-Zss76kBCgzNUegU4ltvorkmr-HskmsmV9" alt="Правда ли что Даша Корейка умерла?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Желающих узнать судьбу известной блогерши Даши Корейка, вчера значительно увеличилось. Связано это со странным сообщением в официальном телеграм-канале.</p></div>
            </div>
        </a>
        </Template></>;
}