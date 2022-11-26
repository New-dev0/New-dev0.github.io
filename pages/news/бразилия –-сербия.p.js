import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Бразилия – Сербия</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Бразилия – Сербия"/>
        <meta name="description" content="Trending News about Бразилия – Сербия" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Бразилия – Сербия</h1>
            <Image width={800} height={500} src="" alt="Бразилия – Сербия"/>
            <h3>Recent News</h3>
            <a href='https://prm.ua/ru/brazylyia-serbyia-zaiavka-na-chempyonstvo/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Бразилия - Сербия: заявка на чемпионство</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRW08xnb86ZoHXJgRHd1gRtqeqgvdju39ShXNaefqWNON1uu4Fm2QF318Vx1cwicgHuJiuJ1qsz" alt="Бразилия - Сербия: заявка на чемпионство" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Бразилия – главный фаворит Чемпионата мира. Самая футбольная страна мира пять раз одерживала победу на мундиале, и в этом году букмекеры именно ее называют.</p></div>
            </div>
        </a><a href='https://www.sport-express.ru/football/world/2022/reviews/braziliya-serbiya-2-0-obzor-matcha-1-go-tura-gruppovogo-etapa-chempionata-mira-2022-v-katare-24-noyabrya-2022-goda-2002872/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Гол Ришарлисона — шедевр в золотую коллекцию. Сербы ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRN-0P7DCMxoUmEbA8RLDYw5uked8_8m1V56Evi0coDf5y_rMAFXBdzzSt3RttsveXJZruribm3" alt="Гол Ришарлисона — шедевр в золотую коллекцию. Сербы ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Один из фаворитов чемпионата мира стартовал с уверенной победы. Чемпионат мира. Группа G 24 нояб, 22:00. Lusail Stadium (Лусаил).</p></div>
            </div>
        </a><a href='https://www.rbc.ua/ukr/news/chs-2022-zbirna-braziliyi-zavdyaki-shedevru-1669323345.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ЧМ-2022: Сборная Бразилии благодаря шедевру Ришарлисона ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSblC3NhGZ4D68vGs8SYlTABeqPjASRUTbO6_JMTcRaXwy4ZStXCMEseXWS8cig_rAW3vVq4Wuz" alt="ЧМ-2022: Сборная Бразилии благодаря шедевру Ришарлисона ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Бразильская сборная победоносно начала турнирный путь на чемпионате мира 2022 года.</p></div>
            </div>
        </a><a href='https://prm.ua/brazyliia-serbiia-zaiavka-na-chempionstvo/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Бразилія — Сербія: заявка на чемпіонство</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRW08xnb86ZoHXJgRHd1gRtqeqgvdju39ShXNaefqWNON1uu4Fm2QF318Vx1cwicgHuJiuJ1qsz" alt="Бразилія — Сербія: заявка на чемпіонство" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Бразилія — головний фаворит Чемпіонату світу. Найфутбольніша країна світу п&#39;ять разів одержувала перемогу на мундіалі.</p></div>
            </div>
        </a><a href='https://www.championat.com/football/news-4897143-braziliya-serbiya-pryamaya-translyaciya-matcha-chempionata-mira-2022-nachnyotsya-v-22-00.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Бразилия — Сербия: прямая трансляция матча чемпионата мира ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR9f6RfMws3Gw3MCQgz4fPLzJRby5aqGEBQfvFU8v7WXcf7GFosdh7-qDTXXweHKSy6KnobKJzU" alt="Бразилия — Сербия: прямая трансляция матча чемпионата мира ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Чемпионат мира по футболу — 2022 проходит в Катаре с 20 ноября по 18 декабря. Страна впервые принимает турнир. Решение о проведении чемпионата в конце&nbsp;...</p></div>
            </div>
        </a><a href='https://sport.unian.ua/football/braziliya-serbiya-prognoz-bukmekeriv-i-de-divitisya-match-chs-2022-z-futbolu-12055965.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Бразилія - Сербія: прогноз букмекерів і де дивитися матч ЧС ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQyVTELSa7dg52MJ67vj0Lka_dN7qb3PHPxhBvUr8vfz4w3JwpVzY6sH2q7HfFTfaWWBk2kAyps" alt="Бразилія - Сербія: прогноз букмекерів і де дивитися матч ЧС ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>24 листопада в рамках першого туру чемпіонату світу-2022 з футболу збірна Бразилії зіграє проти національної команди Сербії - де дивитися поєдинок ЧС-2022.</p></div>
            </div>
        </a><a href='https://www.championat.com/football/article-4904407-braziliya-serbiya-2-0-obzor-i-statistika-matcha-goly-risharlisona-24-noyabrya-2022-goda-chempionat-mira-po-futbolu.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Бразилия забила лучший гол чемпионата мира! Но как же ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTR5Pg4dWd0mEqWiCAZ15d3RKT0YTrZ2EZhKvb3aZysYcWC6D3ZBj-2IjEtzibTfrITSeKI1kNZ" alt="Бразилия забила лучший гол чемпионата мира! Но как же ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Сербия совсем ничего не противопоставила сопернику. 24 ноября — возможно, самый контрастный день на чемпионате мира в Катаре. Скучное начало и огненная концовка&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sport-express.ru/football/world/2022/news/braziliya-serbiya-sostavy-komand-chempionat-mira-24-noyabrya-2022-goda-2002788/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Бразилия и Сербия назвали стартовые составы на матч ЧМ-2022</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQd_b9m-HRLQCMAMz7TyDdDqi5LNX3uxZdFjIabQxnSGfuQTkrzqsjKdnR058OFUgZ-k2UxGuAr" alt="Бразилия и Сербия назвали стартовые составы на матч ЧМ-2022" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Бразилия и Сербия назвали стартовые составы на матч ЧМ-2022 ... Футболисты сборной Бразилии. ... Матчем между сборными Бразилии и Сербии завершается 1-й тур&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ua-football.com/foreign/worldcup/1669327155-s-golom-cherez-sebya-ot-risharlisona-braziliya-serbiya-2-0-video-golov-i-obzor-matcha.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>С голом через себя от Ришарлисона. Бразилия – Сербия 2:0 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRxFGDH6o_S3f__o3zVwTyjN4FnckrwHk5_uxMruc98sBOmAn9t-gRi-QCuvL6DoxPe00i62iJ-" alt="С голом через себя от Ришарлисона. Бразилия – Сербия 2:0 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Бразилия – Сербия ⋇ 24 ноября ⋇ Видео обзор голов и лучших моментов матча ⋙ ЧМ-2022 ☛ Счет матча ✓ Видео футбола ☛ Обзоры игр ☝ Интервью игроков,&nbsp;...</p></div>
            </div>
        </a><a href='https://football24.ua/ru/brazilija_serbija_video_golov_matcha_24_11_2022_n748622/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Бразилия – Сербия – 2:0 – видео голов и обзор матча ЧМ-2022 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS40YIeiX4ECILSIW9bALI1OuQq0GU5eWjx4CdB31xDXITJF_3duJ0N6UviTfwhidXTrM8UJyiC" alt="Бразилия – Сербия – 2:0 – видео голов и обзор матча ЧМ-2022 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Видео голов матча Бразилия – Сербия, игра прошла в рамках ЧМ по футболу 2022. Бразилия и Сербия сыграли 24 ноября 2022. Полный обзор голов смотрите на&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}