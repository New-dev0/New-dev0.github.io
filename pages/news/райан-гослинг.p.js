import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Райан Гослинг</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Райан Гослинг"/>
        <meta name="description" content="Trending News about Райан Гослинг" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Райан Гослинг</h1>
            <Image width={800} height={500} src="https://gamemag.ru/images/cache/News/News173416/9b76489f68-2_1390x600.jpg" alt="Райан Гослинг"/>
            <h3>Recent News</h3>
            <a href='https://gamemag.ru/news/173416/barbie-ryan-gosling-looks'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Райан Гослинг предстанет в необычных образах в фильме ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcROL9iiQfBvmV5PzEK2dGyG6WdINc70fz_x-Grz6f-Upgki8sBzVUOaGtGvPktMuGI8IwR1Ka_Yrg" alt="Райан Гослинг предстанет в необычных образах в фильме ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Первое изображение Райана Гослинга в образе Кена из предстоящего фильма &quot;Барби&quot; стало вирусным и подарило пользователям сети массу забавных мемов, однако в&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}