import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>9 декабря</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,9 декабря"/>
        <meta name="description" content="Trending News about 9 декабря" /></Head><Template>
            <h1 style={{fontSize: "30"}}>9 декабря</h1>
            <Image width={800} height={500} src="https://udm-info.ru/attachments/ee7002e201c8271be6aa6df5bfee3dd76ba52003/store/crop/0/72/1077/608/1077/608/0/75a14b7538e7c1e05a7d19085e87e2b6b3cad4bf6536a381aae8843c9b6e/Screenshot_26.jpg" alt="9 декабря"/>
            <h3>Recent News</h3>
            <a href='https://udm-info.ru/news/2022-12-09/9-dekabrya-v-izhevske-otkryvayut-stelu-gorod-trudovoy-doblesti-2611340'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>9 декабря в Ижевске открывают стелу «Город трудовой ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQEnhcEVimqYTp66RGNFEytJoUTzvPteks_JkkxBW2EKOimIO3MLxdPKy98Jwvv2vfC9F_G8Q5N" alt="9 декабря в Ижевске открывают стелу «Город трудовой ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Сегодня 9 декабря в Сквере Победы Ижевска состоится торжественное открытие стелы «Город трудовой доблести». Подробнее на сайте издания udm-info.ru.</p></div>
            </div>
        </a><a href='https://pravo.ru/story/244371/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Обзор СМИ за 9 декабря</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Обзор СМИ за 9 декабря" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В России выявили первые случаи взяток криптовалютой, в Госдуму внесли законопроект о наказании за диверсии, а СКР завершил расследование дела о хищениях у&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}