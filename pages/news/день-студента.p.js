import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>День студента</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,День студента"/>
        <meta name="description" content="Trending News about День студента" /></Head><Template>
            <h1 style={{fontSize: "30"}}>День студента</h1>
            <Image width={800} height={500} src="https://tvmig.ru/upload/resize_cache/iblock/2ed/cla6bym6sjjh3yernhssjmlmh8n7z2uq/1200_630_1/Безымянный.png" alt="День студента"/>
            <h3>Recent News</h3>
            <a href='https://tvmig.ru/news/v-mezhdunarodnyy-den-studenta-v-noyabrske-proshli-massovye-kataniya-na-konkakh/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В Международный день студента в Ноябрьске прошли массовые ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSm7s8dnZ2vMVu-NNtYc3kJu-XAnKuxfyL9xY0wRvPcfPtRRfEyL7xgJcT70kLW5KDMr34riRHw" alt="В Международный день студента в Ноябрьске прошли массовые ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Подарок к Международному дню студента ребятам сделали активисты «Молодой Гвардии Единой России». Они организовали бесплатное массовое катание.</p></div>
            </div>
        </a>
        </Template></>;
}