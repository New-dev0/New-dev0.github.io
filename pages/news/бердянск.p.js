import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Бердянск</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Бердянск"/>
        <meta name="description" content="Trending News about Бердянск" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Бердянск</h1>
            <Image width={800} height={500} src="https://www.rbc.ua/static/img/_/m/_miskrada_gettyimages_1241954039_1_1300x820.jpg" alt="Бердянск"/>
            <h3>Recent News</h3>
            <a href='https://www.rbc.ua/ukr/news/chim-vazhliviy-berdyansk-i-k-mozhe-pochatisya-1670602343.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Чем важен Бердянск и как может начаться его освобождение ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRGQc4TQSPrmYBlBsurqvCLiXBj4VzOp2FQjxpvOMrXvcUDFtrQ9_aGZIYzB6klZ0JzYQKEKery" alt="Чем важен Бердянск и как может начаться его освобождение ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Эксперт в комментарии РБК-Украина рассказал, чем важен Бердянск для воюющих сторон и как может начаться его освобождение.</p></div>
            </div>
        </a>
        </Template></>;
}