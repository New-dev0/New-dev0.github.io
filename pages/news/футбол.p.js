import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Футбол</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Футбол"/>
        <meta name="description" content="Trending News about Футбол" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Футбол</h1>
            <Image width={800} height={500} src="https://img.championat.com/news/social/8/55/4900243.jpg" alt="Футбол"/>
            <h3>Recent News</h3>
            <a href='https://www.championat.com/football/article-4900243-chempionat-mira-po-futbolu-v-katare-protesty-irana-v-igre-s-angliej-futbolisty-ne-peli-gimn-bannery-na-tribunah.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Наши люди несчастны». Сильные политические протесты ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRoL2jIv4U_mG-vvrydupKJdCqVX54jLSmfDeFBh6K8xA7YtAmQCrps-1-zaIrdv7fAzqB0BPQ8" alt="«Наши люди несчастны». Сильные политические протесты ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Для иранцев чемпионат мира – безопасное место выражения своей позиции. Футболисты, например, отказались петь гимн страны.</p></div>
            </div>
        </a><a href='https://sportrbc.ru/news/637b30e49a794782da8c88aa'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Кто из самых дорогих футболистов пропускает чемпионат мира ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRlezcywG5hHJB0KvWhsF0j4U-7bsrfkba2342vIjNNL8yI7A2VIVQxwl5bcD60tI93aNLBodm4" alt="Кто из самых дорогих футболистов пропускает чемпионат мира ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>«РБК Спорт», опираясь на данные портала Transfermarkt, собрал команду из самых дорогих футболистов, которые пропустят мундиаль из-за травм и слабости своей&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sportmk.ru/sports/2022/11/21/iranskie-bolelshhicy-snova-raspustili-volosy-v-katar-oni-priekhali-ne-dlya-futbola.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Иранские болельщицы снова распустили волосы: в Катар они ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQhwb_gCpIMRS9J5N7ODRP0ENhLiKtX2v3p1QUcuxfH9yTzfl-AdhSTNsRUnc7EsIjKz09TQ0ye" alt="Иранские болельщицы снова распустили волосы: в Катар они ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Приезд иранских болельщиков, а особенно болельщиц, в Катар — событие в конкретный момент истории особенное. Протесты в их родной стране не могли не&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}