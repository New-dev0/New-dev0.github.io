import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Повербанк</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Повербанк"/>
        <meta name="description" content="Trending News about Повербанк" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Повербанк</h1>
            <Image width={800} height={500} src="https://finance-news-media.fra1.cdn.digitaloceanspaces.com/prod/9/6/96af63efe6ef168383f744171341c99d" alt="Повербанк"/>
            <h3>Recent News</h3>
            <a href='https://news.finance.ua/ua/u-novorichnyy-sezon-vyhravayte-v-moneyveo-poverbank-ta-iphone'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>У новорічний сезон вигравайте в Moneyveo повербанк та iPhone</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRd18Y9ex5W3QINISy73Dl9cMd2pwC3KGY_mgLKaz9i4TDU7UdomWTaez6KtOjrubbK2XurpedF" alt="У новорічний сезон вигравайте в Moneyveo повербанк та iPhone" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Традиційно до новорічних свят компанія Манівео запускає для своїх клієнтів акцію із розіграшем iPhone14 та повербанків. Десятеро щасливчиків отримають&nbsp;...</p></div>
            </div>
        </a><a href='https://news.finance.ua/ru/v-novogodniy-sezon-vyigryvayte-v-moneyveo-poverbank-i-iphone'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В новогодний сезон выигрывайте в Moneyveo повербанк и iPhone</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRd18Y9ex5W3QINISy73Dl9cMd2pwC3KGY_mgLKaz9i4TDU7UdomWTaez6KtOjrubbK2XurpedF" alt="В новогодний сезон выигрывайте в Moneyveo повербанк и iPhone" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Традиционно к новогодним праздникам компания Манивео запускает для своих клиентов акцию с розыгрышем iPhone14 и повербанков. Десять счастливчиков получат&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}