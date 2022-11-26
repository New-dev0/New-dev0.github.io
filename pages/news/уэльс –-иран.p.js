import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Уэльс – Иран</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Уэльс – Иран"/>
        <meta name="description" content="Trending News about Уэльс – Иран" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Уэльс – Иран</h1>
            <Image width={800} height={500} src="https://www.rbc.ua/static/img/3/1/316417021_6661293887219735_1417329086345226242_n_1300x820.jpg" alt="Уэльс – Иран"/>
            <h3>Recent News</h3>
            <a href='https://www.rbc.ua/ukr/news/chs-2022-iran-dodaniy-chas-nespodivano-peregrav-1669380251.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ЧМ-2022: Иран в добавленное время неожиданно обыграл ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcROZwoWNf0WZUhAx8oA7JYhHDU-yjrRSj7s-g7PA_j9KwlFP_onTgodNF3da2EBuhK2ir-Cm6M-" alt="ЧМ-2022: Иран в добавленное время неожиданно обыграл ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Иранская национальная команда сенсационно обыграла Уэльс на групповом этапе катарского Мундиаля.</p></div>
            </div>
        </a><a href='https://www.championat.com/football/news-4904901-uels-iran-pervyj-tajm-zavershilsya-bez-zabityh-myachej.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Уэльс — Иран: первый тайм завершился без забитых мячей</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRRpE0p3lwAhzoweXCxDp-oWzR1AUq2I6T58K0g8oCSE8uwX_XKNI07Jpl8yGcRRx-SoKlj0mFf" alt="Уэльс — Иран: первый тайм завершился без забитых мячей" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В эти минуты проходит матч 2-го тура чемпионата мира, в котором встречаются сборные Уэльса и Ирана. Команды играют на стадионе «Ахмед бин Али» в Аль-Райане&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sport-express.ru/football/world/2022/news/uels-iran-startovye-sostavy-na-match-gruppovogo-turnira-chempionata-mira-2022-2002988/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Уэльс — Иран: Азмун и Бэйл выйдут в стартовом составе</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS9FHnOjYyW9yu1brfXO5gthwZqZHoh4SiwIVe6nLItsREj73Ykt4Rb68Kw8Aq5RDWfax6NgAad" alt="Уэльс — Иран: Азмун и Бэйл выйдут в стартовом составе" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Сборные Уэльса и Ирана объявили стартовые составы на матч второго тура группового турнира чемпионата мира-2022 в Катаре.</p></div>
            </div>
        </a><a href='https://football24.ua/ru/ujels__iran__02__video_golov_i_obzor_matcha_s_pervym_udaleniem_na_chm_2022_i_rekordom_bejla_n748810/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Уэльс – Иран – 0:2 – видео голов и обзор матча с первым ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ2uOmqKMoX0RGSXtmHwFeGna4_4eQAXaad8QEsGsqNQ1mVLucwtUbo-YKhQQTCvwiLHsA664vC" alt="Уэльс – Иран – 0:2 – видео голов и обзор матча с первым ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В конце игры Уэйн Хеннеси получил прямую красную карточку за брутальный фол. Первое удаление на чемпионате мира-2022. В меньшинстве валлийцы не устояли,&nbsp;...</p></div>
            </div>
        </a><a href='https://fakty.ua/ru/411263-iran-blagodarya-golam-na-98-j-i-101-j-minutah-dobyl-neveroyatnuyu-pobedu-nad-uelsom-videooobzor-matcha-chm-2022'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Иран благодаря голам на 98-й и 101-й минутах добыл ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ-XEg7AsoQtC_XVRqMtaV_oBXskPtm_TW92x2vIZ4ioD-y2K9adaT8A1zGlfaRNBDO3QP4zGpE" alt="Иран благодаря голам на 98-й и 101-й минутах добыл ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Сборная Ирана благодаря двум голам в компенсированное арбитром время победила в поединке чемпионата мира по футболу команду Уэльса и поднялась на второе&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ua-football.com/foreign/worldcup/1669363432-uyels-iran-smotret-onlayn-live-pryamuyu-videotranslyaciyu-matcha-chm-2022.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Уэльс – Иран. Смотреть онлайн LIVE прямую видеотрансляцию ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSINOytKxy0z3heVIQ9wCfpUR6kSFwGKRqfQ8UIS1rB3DBqKv4r9GT3bRG0AOQaIjCbp_aB4hXc" alt="Уэльс – Иран. Смотреть онлайн LIVE прямую видеотрансляцию ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Уэльс - Иран ⚽ 25.11.2022 ⚽ Смотреть онлайн трансляцию матча ✓ ЧМ-2022 ✓ Футбольные видеотрансляции ☛ Матчи чемпионата мира 2022 на UA-Футбол.</p></div>
            </div>
        </a><a href='https://telegraf.com.ua/sport-cat/2022-11-25/5723966-iran-uels-onlayn-translyatsiya-matcha-chm-2022'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Уэльс - Иран - 0:2: хроника матча ЧМ-2022</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRmuj9Ozku2qZ3yb_mTE0JE-yjA-AwWewSxcanzvSGu48GPb-VArXkDoVbvHTN8dAlTpgcZUw7Q" alt="Уэльс - Иран - 0:2: хроника матча ЧМ-2022" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Группа В ⚽️ Онлайн матча Уэльс - Иран ⚽️ Начало в 12:00 ✓ Прямая трансляция на Суспильном и Мегого ✓ Все о матче ЧМ-2022.</p></div>
            </div>
        </a>
        </Template></>;
}