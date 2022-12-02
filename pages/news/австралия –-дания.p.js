import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Австралия – Дания</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Австралия – Дания"/>
        <meta name="description" content="Trending News about Австралия – Дания" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Австралия – Дания</h1>
            <Image width={800} height={500} src="https://img.championat.com/news2/social/e/71/4911709.jpg" alt="Австралия – Дания"/>
            <h3>Recent News</h3>
            <a href='https://www.championat.com/football/news-4911709-avstraliya-daniya-forvard-avstralijcev-leki-otkryl-schyot-na-61-j-minute.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Австралия — Дания: форвард австралийцев Леки открыл счёт ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTRzjqm_B0TnnhdxaK4dFf7PKakfQLW6BDFXnnT7FQEJpU-t2yDot5sQ96N0ApPz85DdE2Nwepz" alt="Австралия — Дания: форвард австралийцев Леки открыл счёт ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В эти минуты в матче 3-го тура группового этапа чемпионата мира 2022 года по футболу в Катаре встречаются сборные Австралии и Дании. Встреча проходит в&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sport-express.ru/football/world/2022/news/avstraliya-daniya-1-0-rezultat-matcha-chempionat-mira-gruppa-d-30-noyabrya-2022-goda-2005722/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Австралия победила Данию и вышла в 1/8 финала ЧМ-2022</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQFQdcCMiNC3cPzDwiSPCeFeTvLa35V-HErteJidu6AVyTtdRWJ6frhjkWPwvh6PlyBDnLC2IjU" alt="Австралия победила Данию и вышла в 1/8 финала ЧМ-2022" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Сборная Австралии победила команду Дании в матче 3-го тура группового этапа ЧМ-2022 со счетом 1:0.</p></div>
            </div>
        </a><a href='https://news.sportbox.ru/Vidy_sporta/Futbol/world_cup/spbnews_NI1733960_Avstralija__Danija_luchshije_momenty_matcha_ChM_2022_po_futbolu_30_nojabra_smotret_goly_i_obzor'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Австралия — Дания: лучшие моменты матча ЧМ-2022 по ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR2JoiwWZIwsTimPsRqRwaWALxrgRwaoDC15T-f9IRGI800jVYblRrKgt0ZD-B4tZrTn8T2aafG" alt="Австралия — Дания: лучшие моменты матча ЧМ-2022 по ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Сборная Австралии обыграла команду Дании в последнем туре группового этапа ЧМ‑2022 в Катаре.</p></div>
            </div>
        </a><a href='https://sportrbc.ru/news/63870e639a794776bb62a0f8'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Австралия — Дания</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRLMBuHI0wKa488748xh4EmKKrKiiwdvNs3SUDeK__9AuTUlbH-cIx1l31sWcULHSgNRvFbAFLO" alt="Австралия — Дания" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>На этом будем прощаться, пожелаем сборной Дани удачи и поблагодарим за игру на этом турнире. А команду Австралии поздравляем с победой и проходом в плей-офф!</p></div>
            </div>
        </a><a href='https://www.sports.ru/football/1113744317-avstraliya-daniya-startovye-sostavy-komand-na-match-chempionata-mira-p.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Австралия — Дания: стартовые составы команд на матч ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRgIP3G7UaWB2HJja16y0cB_WhNQ5X5VT8zWvbpShsGG8Dt_h1lr2u8Fc0ixAf3SWFnKSoCW5Cu" alt="Австралия — Дания: стартовые составы команд на матч ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В матче третьего тура группового этапа в квартете D на Чемпионате мира по футболу 2022 сыграют сборные Австралии и Дании. Поединок пройдет на стадионе&nbsp;...</p></div>
            </div>
        </a><a href='https://sport24.ru/news/football/2022-11-30-avstraliya-daniya-smotret-besplatno-avstraliya-daniya-pryamoy-efir-match-tv-avstraliya-daniya-match-tv-pryamaya-translyatsiya-smotret-match-chm-2022-avstraliya-daniya-chempionat-mira-po-futbolu-2022-smotret-onlayn'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ЧМ-2022. Австралия — Дания. Прямая трансляция</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQxGqt_0h0V4f3K9-1bE7jwOfQD0yy_KsvMTsqI0TQd29F4q_xNAVXH_RWilTpDS2FOUG7Jw7Fc" alt="ЧМ-2022. Австралия — Дания. Прямая трансляция" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Самые свежие новости российского и мирового спорта только на сайте Sport24.ru! Интервью со спортсменами, онлайн трансляции, аналитика и прогнозы,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}