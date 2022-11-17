import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Волгоград</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Волгоград"/>
        <meta name="description" content="Trending News about Волгоград" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Волгоград</h1>
            <Image width={800} height={500} src="https://riac34.ru/upload/iblock/66f/0.jpg" alt="Волгоград"/>
            <h3>Recent News</h3>
            <a href='https://riac34.ru/news/150442/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Под Волгоградом проходит Студенческая неделя профилактики ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSKHuy29oZh25b0OpKcxUIQlO9x5ROXSl_j7hsi7qcS5BB09MbiuPgEPrYApjfFcy4uOlanTxNl" alt="Под Волгоградом проходит Студенческая неделя профилактики ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Свежие новости Волгограда и области в сфере политики, здравоохранения, экономики, культуры, спорта, промышленности, сельского хозяйства и бизнеса.</p></div>
            </div>
        </a>
        </Template></>;
}