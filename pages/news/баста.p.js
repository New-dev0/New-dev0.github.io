import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Баста</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Баста"/>
        <meta name="description" content="Trending News about Баста" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Баста</h1>
            <Image width={800} height={500} src="https://tvmag.ru/upload/iblock/86c/bez-nazvaniya-_2_.jpg" alt="Баста"/>
            <h3>Recent News</h3>
            <a href='https://tvmag.ru/article/canals/2022-12-02-pervyy-kanal-pokazhet-televersiyu-grandioznogo-solnika-basty-v-luzhnikakh/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Концерт Басты в Лужниках (18.06.2022) на Первом канале ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS-gXRB4uAgROiRTk1eVtXhVVwTnzE-UAc1t5BF7-z3m2avmM0x3QTKVBFj64GdnM_Z98aipuSV" alt="Концерт Басты в Лужниках (18.06.2022) на Первом канале ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В пятницу, 2 декабря, Первый канал представит телеверсию масштабного сольника рэпера Басты, прошедшего на спортивной арене «Лужники» в июне 2022 года.</p></div>
            </div>
        </a><a href='https://www.sb.by/articles/eto-staraya-i-tvorcheskaya-druzhba-basta-ob-otnosheniyakh-s-gufom.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Это старая творческая дружба»: Баста об отношениях с Гуфом</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ2S60CJ3-_hGK5_A05m96MK_GmO8Gt5lkgy_kLZMerH8zC6H6BgYQ3-CevMj_IdiQ5TbmINzsM" alt="«Это старая творческая дружба»: Баста об отношениях с Гуфом" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Басту (Василия Вакуленко) и Гуфа (Алексея Долматова) называют легендами русского рэпа. Несколько лет назад между музыкантами был конфликт. В...</p></div>
            </div>
        </a>
        </Template></>;
}