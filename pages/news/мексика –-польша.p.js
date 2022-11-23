import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Мексика – Польша</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Мексика – Польша"/>
        <meta name="description" content="Trending News about Мексика – Польша" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Мексика – Польша</h1>
            <Image width={800} height={500} src="https://www.rbc.ua/static/img/3/1/316218468_2328191160682090_8279637419473675722_n_1300x820.jpg" alt="Мексика – Польша"/>
            <h3>Recent News</h3>
            <a href='https://www.rbc.ua/ukr/news/nezabitiy-levandovski-penalti-pozbaviv-zbirnu-1669149721.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Незабитый Левандовски пенальти лишил сборную Польши ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRgrKEPoN-iT-JJBDWKHJ1XD6oHiX1xmvPD6jbXAFi-jws42ju0j_zk8N0jd9xtI_rEJv0913A8" alt="Незабитый Левандовски пенальти лишил сборную Польши ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Национальные команды Мексики и Польши не выявили сильнейшего в стартовом матче на Мундиале.</p></div>
            </div>
        </a><a href='https://www.championat.com/football/news-4901505-meksika-polsha-levandovski-ne-realizoval-penalti.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Мексика — Польша: Левандовски не реализовал пенальти</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTMEXROmGqttz9PirB_ltXtWg0GboYd9zxeWiJUQe_7wy-ghrhPZHvqnKsldgRAF28daBgBCzER" alt="Мексика — Польша: Левандовски не реализовал пенальти" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Сегодня, 22 ноября, проходит матч 1-го тура группы С между сборными Мексики и Польши на стадионе «Стэдиум 974».</p></div>
            </div>
        </a><a href='https://www.sport-express.ru/football/world/2022/news/meksika-polsha-startovye-sostavy-komand-chempionat-mira-22-noyabrya-2022-goda-2001586/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Мексика — Польша: составы команд на матч ЧМ-2022. Крыховяк ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR2RTDTBgOE2G3-2IvhBHk9383tjyFTc8GVDeprNmXJODIzXgcpVqacWFVhvECgnbszqpNX429f" alt="Мексика — Польша: составы команд на матч ЧМ-2022. Крыховяк ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Сборная Мексики сыграет с командой Польши в матче группового этапа ЧМ-2022.</p></div>
            </div>
        </a><a href='https://football24.ua/ru/meksika_polsha_obzor_schet_matcha_22_11_2022_n748347/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ЧМ-2022: Польша и Мексика расписали ничью в пользу ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSnD12lsNmsjfHCaPTR72wmqJB-MmW9pjwqHl_RRAa5uaBb48PP0AGZZqTRtqq7Jd5T09CFZpXX" alt="ЧМ-2022: Польша и Мексика расписали ничью в пользу ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Мексика и Польша сыграли 22 ноября 2022, игра прошла в рамках 1 тура группы С Чемпионата мира по футболу 2022. Какой счет и полный обзор читайте на&nbsp;...</p></div>
            </div>
        </a><a href='https://news.obozrevatel.com/sport/football/meksika-polsha-onlajn-translyatsiya-matcha-chm-2022.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Мексика – Польша: результат и хронология матча ЧМ-2022</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTnqSgSwBw8TLd0eQRUn2maR13cU_4ViWD_jr4-NcGOA2i0bSv25sOSrVQktEwIK9FKONkWQyHbQw" alt="Мексика – Польша: результат и хронология матча ЧМ-2022" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Сборная Польши по футболу во вторник, 22 ноября, проводила стартовый для себя матч чемпионата мира 2022 года. Команда Чеслава Михневича играла с&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ua-football.com/foreign/worldcup/1669129451-meksika-polsha-smotret-onlayn-live-pryamuyu-videotranslyaciyu-matcha-chempionata-mira.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Мексика – Польша. Смотреть онлайн LIVE прямую ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSem8Zf6Dn0CKG0MzeQQcE8Xuai5Gqxne7GUt6W69CZz7aILQmR9ugtW44OPW5S3E8VDGeBZQYb" alt="Мексика – Польша. Смотреть онлайн LIVE прямую ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Мексика - Польша ⚽ 22.11.2022 ⚽ Смотреть онлайн трансляцию матча ✓ ЧМ-2022 ✓ Футбольные видео трансляции ☛ Матчи чемпионата мира 2022 на UA-Футбол.</p></div>
            </div>
        </a>
        </Template></>;
}