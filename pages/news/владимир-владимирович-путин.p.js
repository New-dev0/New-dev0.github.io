import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Владимир Владимирович Путин</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Владимир Владимирович Путин"/>
        <meta name="description" content="Trending News about Владимир Владимирович Путин" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Владимир Владимирович Путин</h1>
            <Image width={800} height={500} src="" alt="Владимир Владимирович Путин"/>
            <h3>Recent News</h3>
            <a href='https://admnvrsk.ru/o-gorode/novosti/glavnye-novosti/news-08122022202300-116364/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Владимир Владимирович Путин наградил призеров ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTJK3MswfLVGgR6zsFh4EUrn2O0qUBEsboNIH0ZaYpgDAMnyydL8eQw7do1nUmRrnGoB1uJBMEv" alt="Владимир Владимирович Путин наградил призеров ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Третье место в номинации «Страна возможностей» получил новороссийский волонтерский проект «Молодежное сестричество», которым руководит Инна Александровна&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}