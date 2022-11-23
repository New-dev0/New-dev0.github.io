import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Муратов</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Муратов"/>
        <meta name="description" content="Trending News about Муратов" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Муратов</h1>
            <Image width={800} height={500} src="https://nashaniva.com/photos/generated/fb303692.png" alt="Муратов"/>
            <h3>Recent News</h3>
            <a href='https://nashaniva.com/ru/303692'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Нобелевский лауреат Муратов в беседе с Дудем объяснил ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSkeZwGaGEdJB-Xi07prfq-IPQllPOF5oAPxAOSiNGJihhAC5m0erYf7qr973Gl1aUkxP3Bs0x3" alt="Нобелевский лауреат Муратов в беседе с Дудем объяснил ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Путин сделал службу в армии единственным возможным социальным лифтом для жителей провинции, а смерть родного на войне — выгодной для семей, живущих в&nbsp;...</p></div>
            </div>
        </a><a href='https://gazetaby.com/post/muratov-oni-nazyvayut-vedushhix-olenka-vovochka-i-/188429/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Муратов: «Они называют ведущих «Оленька, Вовочка» и ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQQVp9FHpwNCihGsVtp0b-fAWvuv2Nb_1giJZ4cyRK3NQq_-ckrTSrD5fK4nFYMXjcZfEBY5R81" alt="Муратов: «Они называют ведущих «Оленька, Вовочка» и ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>— Обычно в мире, когда народ нищенствует, под правителем начинает качаться кресло. У нас в стране процесс прямо противоположный: чем более тяжело и бедно живет&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}