import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>28 ноября</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,28 ноября"/>
        <meta name="description" content="Trending News about 28 ноября" /></Head><Template>
            <h1 style={{fontSize: "30"}}>28 ноября</h1>
            <Image width={800} height={500} src="http://in-korolev.ru/upload/gallery/144/168144_72a9ae4e489118f8b71913ce499b514346bd3f0f.jpeg" alt="28 ноября"/>
            <h3>Recent News</h3>
            <a href='https://www.vademec.ru/news/2022/11/28/kartina-dnya-daydzhest-glavnykh-novostey-ot-28-noyabrya-2022-goda/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Картина дня: дайджест главных новостей от 28 ноября 2022 года</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Картина дня: дайджест главных новостей от 28 ноября 2022 года" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Главное #1 Владимир Путин подписал указ, согласно которому Минздрав должен до 1 апреля 2024 года погрузить в межведомственную информационную базу о&nbsp;...</p></div>
            </div>
        </a><a href='https://www.mos.ru/news/item/116587073/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Чем заняться в парках на неделе с 28 ноября по 4 декабря</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Чем заняться в парках на неделе с 28 ноября по 4 декабря" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Парки Москвы, подведомственные Департаменту культуры, приглашают на тематические мастер-классы, мультпоказ, урок фигурного катания и познавательные&nbsp;...</p></div>
            </div>
        </a><a href='https://in-korolev.ru/novosti/sobytiya/28-noyabrya-otmechaetsya-vsemirnyy-den-sostradaniya'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>28 ноября отмечается Всемирный День сострадания</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRngnaBxHOteAe0ob-QFiXYAQP5wOBo-p8AYGfPYkwp40eo_Q5STZzonQ371h8q_jZ6eI-geKoc" alt="28 ноября отмечается Всемирный День сострадания" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Символ этого дня – дерево сострадания с птицами, сидящими на его ветвях, а предложил учредить этот необычный праздник Притиш Нанди – индийский поэт,&nbsp;...</p></div>
            </div>
        </a><a href='https://spbvedomosti.ru/news/financy/novosti-finansov-28-noyabrya-2022/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Новости финансов: 28 ноября 2022</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Новости финансов: 28 ноября 2022" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ФОТО pixabay. Производство нащупало дно. Опубликованный Росстатом индекс промышленного производства за 10 месяцев все еще показывает символический рост (+0&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}