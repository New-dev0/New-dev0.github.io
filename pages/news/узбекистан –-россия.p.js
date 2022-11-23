import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Узбекистан – Россия</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Узбекистан – Россия"/>
        <meta name="description" content="Trending News about Узбекистан – Россия" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Узбекистан – Россия</h1>
            <Image width={800} height={500} src="https://ss.sport-express.ru/userfiles/materials/183/1837870/large.jpg" alt="Узбекистан – Россия"/>
            <h3>Recent News</h3>
            <a href='https://www.sport-express.ru/football/rusteam/online/uzbekistan-rossiya-pryamaya-translyaciya-matcha-gde-smotret-tovarischeskaya-igra-uzbekistan-rossiya-20-noyabrya-2022-goda-2000259/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Узбекистан — Россия: вторая нулевая ничья сборной подряд ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS9TbtwubfdM_VTjULySOuhkX5lGMIJr5FclmNoGxeKCqGvn8ofXpscQwGnwfY0XGbCwKTfMeBU" alt="Узбекистан — Россия: вторая нулевая ничья сборной подряд ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Футбол Узбекистан — Россия: прямая трансляция товарищеского матча, дата и время начала игры, где смотреть — какой канал и сайт, текстовая трансляция онлайн,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.championat.com/football/news-4898177-uzbekistan-rossiya-tekstovaya-onlajn-translyaciya-matcha-nachnyotsya-v-15-00.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Узбекистан — Россия: текстовая онлайн-трансляция матча ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRGXFgc21ejY0YjshblzI_R3hR9obUyxvIGv8HKPJtAESJbB0EObRUfPJcxm6o-CKv6lxllW2sD" alt="Узбекистан — Россия: текстовая онлайн-трансляция матча ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Сегодня, 20 ноября, в товарищеском матче сборная России встретится с национальной командой Узбекистана. Игра пройдёт на стадионе «Пахтакор» в Ташкенте&nbsp;...</p></div>
            </div>
        </a><a href='https://news.sportbox.ru/Vidy_sporta/Futbol/spbnews_NI1726504_Uzbekistan__Rossija_kogda_nachalo_gde_smotret_onlajn_tovarishheskogo_matcha_futbolnyh_sbornyh'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Узбекистан — Россия: когда начало, где смотреть онлайн ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTwkdDrjTSj2mi-gBwqSqaKEHTt5R7TelHnURqfRstNawEbMky7btYQ9A9ws3OuO9Dld0-te-o7" alt="Узбекистан — Россия: когда начало, где смотреть онлайн ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Сборная России по футболу проведет товарищеский матч с национальной командой Узбекистана в воскресенье, 20 ноября. Прямую трансляцию встречи можно&nbsp;...</p></div>
            </div>
        </a><a href='https://rfs.ru/news/217182'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Команда Валерия Карпина заканчивает ноябрьский ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRHV32s7voGLlj8-yeuIUr4my0vuudCj_Dd6_sPbczeq57tzoV77TcPzJhCP3aqB6WXiQs6ILNe" alt="Команда Валерия Карпина заканчивает ноябрьский ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Национальные сборные России и Узбекистана сыграли товарищеский матч вничью не забив друг другу мячей. Встреча проходила в Ташкенте на Центральном стадионе&nbsp;...</p></div>
            </div>
        </a><a href='https://sport24.ru/news/football/2022-11-20-uzbekistan-rossiya-prognoz-i-stavka-na-tovarishcheskiy-match-20noyabrya-ot-romana-pavlyuchenko'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Узбекистан попытается сыграть агрессивно». Роман ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTdADfryuznTg3R0X5ttXjYjwclj8cbNG-TV7zinWOQLMaRE8FIo2G34Vmf4aFSmZl83m5fvxTh" alt="«Узбекистан попытается сыграть агрессивно». Роман ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Самые свежие новости российского и мирового спорта только на сайте Sport24.ru! Интервью со спортсменами, онлайн трансляции, аналитика и прогнозы,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.liveresult.ru/news/152384'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Узбекистан – Россия: прямая трансляция, где смотреть матч ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS0PMH4P3TkrRuGQ7S8h4Vf3mbJp4kyAhoj3xHFmddyLu8t9JYLJYYPieJdn83VIKBxz1bEyT1z" alt="Узбекистан – Россия: прямая трансляция, где смотреть матч ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В воскресенье, 20 ноября, состоится товарищеский матч, в котором сборная Узбекистана сыграет дома со сборной России.</p></div>
            </div>
        </a>
        </Template></>;
}