import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Ингулец – Львов</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Ингулец – Львов"/>
        <meta name="description" content="Trending News about Ингулец – Львов" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Ингулец – Львов</h1>
            <Image width={800} height={500} src="https://www.rbc.ua/static/img/y/h/yhqwppnuep0ypdreh8z1d1wuzjq5pifb_1300x820.jpg" alt="Ингулец – Львов"/>
            <h3>Recent News</h3>
            <a href='https://www.rbc.ua/ukr/news/upl-ingulets-domashnoyu-peremogoyu-vidpraviv-1669031620.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>УПЛ: &quot;Ингулец&quot; домашней победой отправил &quot;Львов&quot; на дно ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSKE73psMC2-onQT0W5kHS3ZYK7eE8PuLtuRsn0V8neBCkdT7aNhVpcx7v0tYqES7Mh6T71B6TC" alt="УПЛ: &quot;Ингулец&quot; домашней победой отправил &quot;Львов&quot; на дно ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Младен Бартулович одержал первую победу в украинской Премьер-лиге в качестве тренера.</p></div>
            </div>
        </a><a href='https://www.ua-football.com/ukrainian/high/1669022511-ingulec-lvov-smotret-onlayn-pryamaya-videotranslyaciya-matcha.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ингулец - Львов: смотреть онлайн, прямая видеотрансляция матча</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTapGHE4mEyKJye4ZRTozFWHUck9udw2QLfVmUFVaGjWCT-pIrNZMVTd4tIOkSSQ0FB7yp3eHZ8" alt="Ингулец - Львов: смотреть онлайн, прямая видеотрансляция матча" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ингулец - Львов ⚽ 21.11.2022 ⚽ Смотреть онлайн трансляцию матча ✓ Чемпионат Украины ✓ Футбольные видео трансляции ☛ Матчи чемпионата {Лига} на UA.</p></div>
            </div>
        </a><a href='https://football24.ua/ru/shedevr_sletu_v_videoobzore_matcha_ingulec__lvov_n748228/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Шедевр слету в видеообзоре матча Ингулец – Львов — Футбол 24</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQnNaOxs5dwQqxbmMpYA4VgSRrV8sUiiktlH_8-fQ0YCtepw_Sjuen1d4josyfA0Fv9QjsfpbKE" alt="Шедевр слету в видеообзоре матча Ингулец – Львов — Футбол 24" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ингулец минимально, но уверенно победил Львов (1:0) в 14-м туре УПЛ. Смотрите видео гола и обзор самых интересных моментов на Футбол 24.</p></div>
            </div>
        </a><a href='https://sport.ua/news/604305-ingulets-lvov-tekstovaya-translyatsiya-matcha'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ингулец – Львов – 1:0. Текстовая трансляция матча</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRSsKjSnjt0dgKa-NiJD1f2H7EZX-AuQKfhFkXQWx7RhNWrbj8Zl5eFx86AN3I4egeoZsg6IfDC" alt="Ингулец – Львов – 1:0. Текстовая трансляция матча" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Текстовая онлайн трансляция матча {Ингулец} – {Львов} ⇒ ≺{21.11.2022}≻ ✓ {Чемпионат Украины} Футбольные матчи онлайн ☛ Самые интересные текстовые&nbsp;...</p></div>
            </div>
        </a><a href='https://tsn.ua/ru/prosport/ingulec-oderzhal-pervuyu-pobedu-s-novym-trenerom-i-pokinul-poslednyuyu-strochku-upl-2206378.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Ингулец&quot; одержал первую победу с новым тренером и покинул ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQWpgyXk58o7NwoJvct6tmJywmfZfNDCxuup4no0hTrjf94rcuF8W4QoHoQNlM-J3Xsuilu4brF" alt="&quot;Ингулец&quot; одержал первую победу с новым тренером и покинул ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ингулец оказался сильнее Львова в рамках 14-го тура украинской Премьер-лиги. Команда Младена Бартуловича отправила соперника на дно турнирной таблицы.</p></div>
            </div>
        </a><a href='https://sportarena.com/football/upl/ingulets-na-svoem-pole-minimalno-obygral-lvov/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ингулец на своем поле минимально обыграл Львов</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQz3NjD9JXy5XG8PEQQ9p-35iEwqIADCk0SAC-ZEhx0jkT5793pqb9o98hc0PTDtvKgj-49yPtS" alt="Ингулец на своем поле минимально обыграл Львов" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Обзор матча Ингулец - Львов, видео повторы голов, лучшие моменты игры, в которой Ингулец выиграл Львов со счетом 1:0 - чемпионат Украины.</p></div>
            </div>
        </a><a href='https://sport24.ua/ru/football/news/30872-ingulec-v-bolshinstve-minimalno-pereigral-lvov-opustiv-komandu-duluba-na-poslednjuju-strochku-upl'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ингулец в большинстве минимально переиграл Львов, опустив ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTBZ89h1wYY-bJMxJtiIuycZujb3_S5GoIjY0HPFlBAqbXaVeVg7S3Jw0zP_7I2yvsFVW_Gx8fd" alt="Ингулец в большинстве минимально переиграл Львов, опустив ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Львов потерпел еще одно поражение в текущем сезоне чемпионата Украины. УПЛ, 14 тур. Ингулец – Львов – 1:0. Гол: Марусич, 45. Удаление: Грисьо, 84.</p></div>
            </div>
        </a>
        </Template></>;
}