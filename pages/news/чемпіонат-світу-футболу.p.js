import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Чемпіонат світу футболу</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Чемпіонат світу футболу"/>
        <meta name="description" content="Trending News about Чемпіонат світу футболу" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Чемпіонат світу футболу</h1>
            <Image width={800} height={500} src="https://focus.ua/static/storage/thumbs/1200x630/a/90/3b6f222e-d84bd837b3f2c137ab830938a885490a.jpg?v=0488_1" alt="Чемпіонат світу футболу"/>
            <h3>Recent News</h3>
            <a href='https://focus.ua/uk/world/539020-hto-vizme-goru-za-mezhami-futbolnogo-polya-zahid-chi-shid'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Золотий мільярд на берегах Перської затоки. Хто візьме гору за ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS38rcU3A2g129n-C8E44OTHT6viDI6F8IThfcI8PRTmFH9nmbiVkmVZs-kcWRhMKmDwHE-zaCd3Q" alt="Золотий мільярд на берегах Перської затоки. Хто візьме гору за ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Найвідомішим прикладом такого позиціювання спорту стала &quot;нацистська&quot; Олімпіада в Берліні у 1936 році. Літні Олімпійські ігри 1936 року у Берліні: спорт як&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}