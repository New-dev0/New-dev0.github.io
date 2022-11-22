import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Графік відключення світла Тернопіль</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Графік відключення світла Тернопіль"/>
        <meta name="description" content="Trending News about Графік відключення світла Тернопіль" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Графік відключення світла Тернопіль</h1>
            <Image width={800} height={500} src="https://teren.in.ua/uploads/media/82/4a/824af7d911b4f6f5bfe7284f78fc9a61_orig.jpg" alt="Графік відключення світла Тернопіль"/>
            <h3>Recent News</h3>
            <a href='https://teren.in.ua/news/na-ternopilshchini-zaprovadzhuyut-onovleniy-grafik-vidklyuchennya-svitla_393921.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>На Тернопільщині з 22 листопада - новий графік відключення ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQPXb9SMC-fiif3sbmfMOCgIEKgEz26uGETOWlB1AxzVAelaNjDVdir1gzmbeuchSnAX41tD2Cb" alt="На Тернопільщині з 22 листопада - новий графік відключення ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Даний графік діятиме за умов, що від диспетчера вищого рівня НЕК «Укренерго» не надходитиме вказівок на додаткові обмеження електропостачання.</p></div>
            </div>
        </a><a href='https://ternopilcity.gov.ua/news/63654.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>З 22 листопада у Тернополі цілодобово діятиме оновлений ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSl1KrmSnv54SxD5swrpdA31F8R5c69BAefXk5TOhoE1xKNvGqYBBfRUQK4YEJOTkn_jGDjeU4k" alt="З 22 листопада у Тернополі цілодобово діятиме оновлений ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>У разі відсутності потреби в зазначені години вимкнення не будуть застосовуватися.</p></div>
            </div>
        </a><a href='https://fainemisto.tv/news/47764-grafik-vidklyuchen-elektroenergiyi-na-21-lystopada-u-ternopoli'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Графік відключень електроенергії на 21 листопада у Тернополі</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRfLjDALQBtByEyGbPYPOMtlcVTDoX3rrq4Y0Mk5MKq_pH8pc5eiGQ63Fle6PvTYAxKtpAzJBeLnA" alt="Графік відключень електроенергії на 21 листопада у Тернополі" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Міський голова Тернополя опублікував графік відключення електроенергії на масивах. Зокрема, у більшості з них світла не буде з 12 по 16 годину.</p></div>
            </div>
        </a><a href='https://terminovo.te.ua/news/76157/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>З&#39;явився графік відключення електроенергії у м. Тернопіль на 21 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ2XUBFBFAwRag7WjQ1ghPqilZWqW2feLWflG6pjkSuECKQB632ZAQQzbkhWxopWRsnjNwIlXeu" alt="З&#39;явився графік відключення електроенергії у м. Тернопіль на 21 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Поширити: З&#39;явився графік відключень електроенергії на 21 листопада у Тернопільській громаді. Про це повідомляє міський голова Тернополя з посиланням на&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}