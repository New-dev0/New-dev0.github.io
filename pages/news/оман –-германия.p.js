import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Оман – Германия</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Оман – Германия"/>
        <meta name="description" content="Trending News about Оман – Германия" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Оман – Германия</h1>
            <Image width={800} height={500} src="https://ss.sport-express.ru/userfiles/materials/183/1836857/large.jpg" alt="Оман – Германия"/>
            <h3>Recent News</h3>
            <a href='https://www.sport-express.ru/football/friendly/news/oman-germaniya-0-1-rezultat-tovarischeskogo-matcha-16-noyabrya-2022-goda-1998978/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Германия с минимальным счетом победила Оман в ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT7M4FEqo5GTL_qn0fEeVRQDMRTTAae1uTvKeBt4ZfzaR4JX3Slmll9Jh3xwHZ-rncW6sNRwzac" alt="Германия с минимальным счетом победила Оман в ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Сборная Германии сыграет в Катаре в одной группе с национальными командами Испании, Японии и Коста-Рики. Товарищеские матчи. 16 нояб, 20:00. Sultan Qaboos Sport&nbsp;...</p></div>
            </div>
        </a><a href='https://vprognoze.ru/topforecast/5968910-oman-germaniya.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Оман - Германия прогноз на матч Товарищеские матчи ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Оман - Германия прогноз на матч Товарищеские матчи ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Бесплатные прогнозы на футбол: Оман - Германия на 16 ноября 2022 от профессионалов. Статистика встреч. Сравнение коэффициентов на исход матча Оман&nbsp;...</p></div>
            </div>
        </a><a href='https://www.liveresult.ru/news/151746'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Оман – Германия: прямая трансляция, где смотреть матч онлайн</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRE5urVBCccivc9RcYi3mgwQ1n8_pDHvxe-_BtszGLDaY7cZGR2AltHeJ5_C5UtLM9cE0C070T4" alt="Оман – Германия: прямая трансляция, где смотреть матч онлайн" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В среду, 16 ноября, состоится товарищеский матч, в котором сборная Омана сыграет дома со сборной Германии.</p></div>
            </div>
        </a><a href='https://www.championat.com/football/news-4893889-gol-fyullkruga-prinyos-germanii-pobedu-nad-omanom-v-tovarischeskom-matche.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Гол Фюллькруга принёс Германии победу над Оманом в ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTYSqHXz2vRo2p1KvbQHaHmMYXA3E5fp_lRE1hvTDAXObKeqTku4JbMk7__DcOD-Jw7VvgowW6Z" alt="Гол Фюллькруга принёс Германии победу над Оманом в ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Сегодня, 16 ноября, завершился товарищеский матч в рамках подготовки чемпионата мира в Катаре, в котором сборная Германии сыграла с Оманом. Стартовый&nbsp;...</p></div>
            </div>
        </a><a href='https://bombardir.ru/news/676422-tovarischeskie-matchi-germaniya-minimalno-pobedila-oman-polsha-chili'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Товарищеские матчи. Германия минимально победила Оман ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQzDDeSQs5YdyTsGjw6xiMISw8tBcq7Ro7Gj8JzoK8978SPshAtnVCOWchNVthbMqJQLdBRzCcn" alt="Товарищеские матчи. Германия минимально победила Оман ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Сборная Германии в товарищеской игре оказалась сильнее Омана – на «Бомбардире»</p></div>
            </div>
        </a><a href='https://www.ua-football.com/foreign/worldcup/1668627232-germaniya-pobedila-oman-v-tovarischeskom-matche.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Германия победила Оман в товарищеском матче</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTI9jcpdBAimm23rTBuMzsy0PqbFo6NyizJrHqx3mvW_KEgtIAciNFJNoGfNbKXiS94vY2PRgbZ" alt="Германия победила Оман в товарищеском матче" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>16-11-2022 ✓ Чемпионат мира FIFA. Благодаря голу абсолютного дебютанта: Сборная Германии успела сыграть товарищеский матч накануне старта на Чемпионате&nbsp;...</p></div>
            </div>
        </a><a href='https://rossaprimavera.ru/news/737f2945'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Германия обыграла Оман в товарищеском по футболе</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRUP_He55x4LNyzsGkN9Dm80GcAUGwYtan_e5F6MHbBadrqchrh0JkkJ8zCpbDMosbp1MZuv174" alt="Германия обыграла Оман в товарищеском по футболе" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Со счетом 1:0 Германия обыграла Оман 16 ноября в товарищеском матче по футболу.</p></div>
            </div>
        </a>
        </Template></>;
}