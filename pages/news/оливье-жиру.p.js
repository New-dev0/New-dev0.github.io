import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Оливье жиру</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Оливье жиру"/>
        <meta name="description" content="Trending News about Оливье жиру" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Оливье жиру</h1>
            <Image width={800} height={500} src="https://s74794.cdn.ngenix.net/m/5319/d762/ab57/4b12/8c15/d02c/4779/c514/1200_1200_max.png" alt="Оливье жиру"/>
            <h3>Recent News</h3>
            <a href='https://sport24.ru/news/football/2022-11-23-gol-olivye-zhiru-pozvolil-kliyentu-betsiti-razbogatet-na-15-milliona-rubley'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Гол Оливье Жиру позволил клиенту БЕТСИТИ разбогатеть на 1 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSw5ELufZyQt6H0wIWtuf8EGtv8icvgvPJfEZmsdf2G8rPbgsTKhjRVee07jBL_bv8L_CSrNfDF" alt="Гол Оливье Жиру позволил клиенту БЕТСИТИ разбогатеть на 1 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Самые свежие новости российского и мирового спорта только на сайте Sport24.ru! Интервью со спортсменами, онлайн трансляции, аналитика и прогнозы,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}