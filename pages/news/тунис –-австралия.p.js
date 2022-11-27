import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Тунис – Австралия</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Тунис – Австралия"/>
        <meta name="description" content="Trending News about Тунис – Австралия" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Тунис – Австралия</h1>
            <Image width={800} height={500} src="https://www.rbc.ua/static/img/f/i/fifshhcxwaat5k9_1300x820.jpg" alt="Тунис – Австралия"/>
            <h3>Recent News</h3>
            <a href='https://www.rbc.ua/ukr/news/chs-2022-avstraliya-vtrimala-peremogu-tunisom-1669464923.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ЧМ-2022: Австралия удержала победу над Тунисом в группе D</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQNoP1HofwBuKZA9JjnPvOTI-5yGPlDHs1OKVIK44gfbOZrXaqIcmsvIcw44nR_WrTlskfipOYO" alt="ЧМ-2022: Австралия удержала победу над Тунисом в группе D" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Об этом сообщает РБК-Украина со ссылкой на результат матча. Чемпионат мира-2022, группа D, 2-й тур. Тунис – Австралия – 0:1. Начало матча&nbsp;...</p></div>
            </div>
        </a><a href='https://www.championat.com/football/news-4900995-tunis-avstraliya-onlajn-translyaciya-matcha-chempionata-mira-2022-nachnyotsya-v-13-00.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Тунис — Австралия: онлайн-трансляция матча чемпионата мира ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQfvrMra5Cc-RLfMJgiUb292Fy-qLcuCYUzaHUcguZpzQG3m0LCIFMmUYF0M1z_V6D1iCPd6l0c" alt="Тунис — Австралия: онлайн-трансляция матча чемпионата мира ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Cегодня, 26 ноября, сборные Туниса и Австралии проведут матч в рамках 2-го тура группового этапа чемпионата мира в Катаре. Стартовый свисток на стадионе&nbsp;...</p></div>
            </div>
        </a><a href='https://football24.ua/ru/interesnoe_golevoe_dostizhenie_v_videoobzore_matcha_tunis__avstralija_n748954/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Интересное голевое достижение в видеообзоре матча Тунис ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTGh7GABKS8iPmFWTDf8zcsaeRt5PxM1KNw6henUroX-xAzFcDF8PhcmdmUbMisLtbe1h6O6LDb" alt="Интересное голевое достижение в видеообзоре матча Тунис ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Австралия сенсационно победила Тунис (1:0) во 2 туре ЧМ-2022. Смотрите видео гола и обзор самых интересных моментов на Футбол 24. Новости футбола Футбол 24.</p></div>
            </div>
        </a><a href='https://fakty.ua/ru/411321-avstraliya-dobyla-pervuyu-za-12-let-pobedu-na-chempionatah-mira-videooobzor-matcha-chm-2022'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Австралия добыла первую за 12 лет победу на чемпионатах ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTR1_ogMSDdOvTjD7v9o6jpp7b1ObjZBq3vBQR9myt6mP9TYe-AGJO3rFGPZUtUCokmDeGqMulk" alt="Австралия добыла первую за 12 лет победу на чемпионатах ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Сборная Туниса проиграла команде Австралии в поединке 2-го тура чемпионата мира по футболу 26 ноября, забившей юбилейный, 50-й, мяч ЧМ-2022.</p></div>
            </div>
        </a><a href='https://www.sport-express.ru/football/world/2022/news/tunis-avstraliya-0-1-rezultat-matcha-vtorogo-tura-chm-2022-26-noyabrya-2022-goda-2003526/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Австралия победила Тунис на ЧМ-2022 после гола Дюка</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT8o-Eq_ueVhDmV0xpQk60RanmOzy5XBWcdZ11uYSZUjsauSwGlRiPlWlGIMLDMC_40pPC6eMCO" alt="Австралия победила Тунис на ЧМ-2022 после гола Дюка" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Сборная Австралии обыграла Тунис в матче второго тура групповой стадии на ЧМ-2022. Единственный гол был забит на 23-й минуте форвардом Митчеллом Дюком.</p></div>
            </div>
        </a><a href='https://www.footboom.com/foreign/worldcup2022/1669463497-tunis-avstraliia-0-1.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Тунис — Австралия: текстовой отчет матча 26.11.2022 ᐉ ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSTyjVHs-AQ7Dt7h_YlCH9ezLcoLVBAGKWHeY6dSsre6-RtqaU9ETtxOPll-WrEhvgY-vS8PwpX" alt="Тунис — Австралия: текстовой отчет матча 26.11.2022 ᐉ ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Детальный отчет о матче Тунис — Австралия ✓ Счет и результаты поединка 26.11.2022 ☝ Анализ матча в турнире Чемпионат мира-2022 от редакции ᐉ FootBoom.</p></div>
            </div>
        </a><a href='https://sport.ua/news/605097-tunis-avstraliya-stali-izvestny-startovye-sostavy'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Тунис – Австралия. Стали известны стартовые составы</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSxJho68xmUpxIMeC_AGAHAAQDnyK2yJETjB41iu7DqX5g2pZR-GTiyzCs2GiQCsnc1ER3yaFqp" alt="Тунис – Австралия. Стали известны стартовые составы" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Команды сыграют во втором туре ЧМ-2022 ⋆ Футбол на Sport.ua.</p></div>
            </div>
        </a>
        </Template></>;
}