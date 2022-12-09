import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Захар Прилепин</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Захар Прилепин"/>
        <meta name="description" content="Trending News about Захар Прилепин" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Захар Прилепин</h1>
            <Image width={800} height={500} src="https://dixinews.ru/upload/iblock/ee6/67bxa4ms0r6p7c0srxs2i9qqczp2h0xm.jpg" alt="Захар Прилепин"/>
            <h3>Recent News</h3>
            <a href='https://dixinews.ru/news/meropriyatiya/zakhar-prilepin-na-vstreche-s-chitatelyami-v-moskovskom-dome-knigi-rasskazal-o-maloizvestnykh-faktakh-biografii-sholokhova/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Захар Прилепин на встрече с читателями рассказал о ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRsl5xLG8jilvQJ1XIiM97WwGFSwuVAQ0BhNCQsQcwAXRT8qQuhUErE9GKCvML20btSr_zWmjhl" alt="Захар Прилепин на встрече с читателями рассказал о ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Москва, 8 декабря - DIXINEWS. Поклонники творчества популярного российского писателя Захара Прилепина, на презентации его новой книги «Шолохов. Незаконный»,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.nvgazeta.ru/news/14488/613101/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Захар Прилепин представил в Москве свою книгу о Шолохове</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRvRQzhmK0GBhPkZcPBE4OAM9M0ppBC17urpLlxrmH9YJgm2VumP38nhguhl69iXF-yh9sJY1lB" alt="Захар Прилепин представил в Москве свою книгу о Шолохове" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Он анонсировал это жизнеописание классика мировой литературы во время приездов на Дон и посещения Шолоховского музея-заповедника.</p></div>
            </div>
        </a><a href='https://echomsk.spb.ru/nws/2492-zahar-prilepin-tochno-znaet-kto-napisal-tihij-don-sholohov-i-tochka.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Захар Прилепин точно знает, кто написал &#39;Тихий Дон&#39;: &#39;Шолохов ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRC3uqfMqRhCSPtEhmw6DpYrWkvMdebM8Vq_VMRj3f5tvIwlnA5-aq_lZukzykWclpqoO-Y5FTr" alt="Захар Прилепин точно знает, кто написал &#39;Тихий Дон&#39;: &#39;Шолохов ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Создатель Elden Ring не знает секрет успеха игры и знать не хочет Президент и директор FromSoftware Хидетака Миядзаки (Hidetaka Miyazaki) в рамках выступления&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}