import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Оккупация</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Оккупация"/>
        <meta name="description" content="Trending News about Оккупация" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Оккупация</h1>
            <Image width={800} height={500} src="https://img.pravda.com/images/doc/8/e/8e6d44c-opera--------2022-11-18-162322-www.0629.com.ua.png" alt="Оккупация"/>
            <h3>Recent News</h3>
            <a href='https://www.pravda.com.ua/rus/news/2022/11/18/7376977/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Оккупанты хотят восстановить памятники Ленину в Мариуполе ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQeXB1yWzHEB4FE3EtJmnyCOoZHrfEp3GNKVXusWg5EKC67-K04AbYHHW0uMqItOLSxdei2uhW8" alt="Оккупанты хотят восстановить памятники Ленину в Мариуполе ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Россияне планируют восстановить во временно оккупированном Мариуполе памятники Владимиру Ленину, которые ранее были демонтированы украинскими властями.</p></div>
            </div>
        </a>
        </Template></>;
}