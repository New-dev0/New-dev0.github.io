import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Курская область</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Курская область"/>
        <meta name="description" content="Trending News about Курская область" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Курская область</h1>
            <Image width={800} height={500} src="https://focus.ua/static/storage/thumbs/1200x630/0/a8/14343390-8ee522f62449f179ec50e6f4b14e9a80.png?v=5028_1" alt="Курская область"/>
            <h3>Recent News</h3>
            <a href='https://focus.ua/voennye-novosti/538994-11-priletov-v-kurskoy-oblasti-rossii-pozhalovalis-na-obstrel-vsu-i-otklyuchenie-sveta-video'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;11 прилетов&quot;: в Курской области России пожаловались на ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQe11uflvRjr9tTigsXEz7bOhxC3Nb1bj401z7CpphMFxIk6l-s_lH796hj4-IOX2aZSAVr89W3" alt="&quot;11 прилетов&quot;: в Курской области России пожаловались на ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Губернатор Курской области РФ написал об 11 прилетах. По его словам, ВСУ обстреляли Курскую область, из-за чего произошло отключение электроенергии.</p></div>
            </div>
        </a><a href='https://bel.ru/news/2022-11-29/vsu-obstrelivayut-kurskuyu-oblast-2603200'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Обстрел ВСУ обесточил два района Курской области — Bel.ru</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQBUgw9gk_UMt8Hdi3qQVA6X1ggeFRENHgwruhLLvfc9HNS_Lf0VCl6Qbs0sTL3JTV9DL1yesje" alt="Обстрел ВСУ обесточил два района Курской области — Bel.ru" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Об этом сообщил губернатор Курской области Роман Старовойт. Обстрел Суджанского района происходит прямо сейчас. Подробнее на сайте издания Bel.ru.</p></div>
            </div>
        </a><a href='https://46tv.ru/odnoj-strokoj/v-kurske/177929-kurskaja-oblast-podverglas-obstrelu-narusheno-jelektrosnabzhenie-dvuh-rajonov.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Курская область подверглась обстрелу, нарушено ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTbnJCDuHRY7fRrw4gBEqTE9ozhEdTzb4cc1jqRCHOZK-8XArZCFqhzZvGIJcDDHyCBJ6OCUcT9" alt="Курская область подверглась обстрелу, нарушено ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Губернатор Курской области сообщил о том, что территория Суджанского района подверглась обстрелу. По словам Романа Старовойта зафиксировано более 10&nbsp;...</p></div>
            </div>
        </a><a href='https://24tv.ua/ru/kurskoj-oblasti-byl-hlopok-29-nojabrja-2022-rossijane-ostalis_n2208068'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В Курскую область пришло &quot;бавовнятко&quot; и лишило россиян света</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR7zzAc0ZGbXoFgZXdIbnq4kEO7wM2oosdIec228-bVJfiFuxKB0IaS4bgT2DIAfMcsjpUGGXTz" alt="В Курскую область пришло &quot;бавовнятко&quot; и лишило россиян света" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В Курской области России 29 ноября 2022 были взрывы. Россияне традиционно обвинили во всем Украину. Мол, это ВСУ их обстреляли. В регионе пропал свет – 24&nbsp;...</p></div>
            </div>
        </a><a href='https://fedpress.ru/news/46/incidents/3150929'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Два района в Курской области обесточены в результате ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSyF2aQdUb-QuSkejDgQ2UJtJ_z2X9BpQ7syhpnKvpgrdnE5NdQ5yn6FEdjcJZI_ZdZ66Kj4Tbt" alt="Два района в Курской области обесточены в результате ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Суджанский район Курской области попал под обстрел ВСУ, в объект энергоснабжения угодил снаряд - обесточены два района, передает ФедералПресс.</p></div>
            </div>
        </a><a href='https://readovka.news/news/122841'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ВСУ обстреливают Курскую область — Readovka.news</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSp0yv2XMw_fCpS7ICdGkv61v_nMLq4NnEJQWjx4gdGbYfBROwMZfV9XIFu2sJdRyZFCZkiLx7p" alt="ВСУ обстреливают Курскую область — Readovka.news" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Анастасия Федорова сегодня в 22:35. Происшествия. Зафиксировано 11 прилетов. В данный момент ВСУ обстреливают Суджанский район Курской области.</p></div>
            </div>
        </a><a href='https://www.tatar-inform.ru/news/dva-raiona-kurskoi-oblasti-casticno-ostalis-bez-elektricestva-posle-obstrela-5888303'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Суджанский и Кореневский районы Курской области частично ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSsYbe_PKHZDxBhjhyE6i_KX-7BZ3G4onSQll31GQE9fvbwj0fP5V4U7JWNU_qq_f0Qoz3_zdBa" alt="Суджанский и Кореневский районы Курской области частично ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Российская школа «Летово», где учатся ребята из Татарстана, возглавила список GlobalTop IB Schools 2022 со средним баллом выпускников 43 из 45 возможных. Ранее&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}