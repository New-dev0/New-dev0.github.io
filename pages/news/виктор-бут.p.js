import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Виктор Бут</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Виктор Бут"/>
        <meta name="description" content="Trending News about Виктор Бут" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Виктор Бут</h1>
            <Image width={800} height={500} src="https://ichef.bbci.co.uk/news/1024/branded_russian/4027/production/_127932461_bout-1getty.jpg" alt="Виктор Бут"/>
            <h3>Recent News</h3>
            <a href='https://www.bbc.com/russian/features-63873396'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Кто такой Виктор Бут и за что его прозвали &quot;торговцем смертью&quot;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQmkGoacS1iAvuxpcYyL8QON4RatCWnKmMC5Dc0tk-SVxVqTNiDzJBqUnSdWHgDvmAwfF05phvu" alt="Кто такой Виктор Бут и за что его прозвали &quot;торговцем смертью&quot;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Виктор Бут отбывал в США 25-летний тюремный срок за сговор с целью продажи крупной партии вооружений колумбийской группировке ФАРК, которая в США признана&nbsp;...</p></div>
            </div>
        </a><a href='https://zn.ua/WORLD/nyt-kto-takoj-prodavets-smerti-viktor-but-i-pochemu-rossija-tak-silno-khochet-eho-vernut-iz-tjurmy-v-ssha.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>NYT: Кто такой «продавец смерти» Виктор Бут и почему Россия ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRZs6XAw3nXbytdKmfSzrmIwfDUtLR-E1zUjALn8VZMV70y0XDUHZZ3W7nh9UGpnjQDqJbQvTpM" alt="NYT: Кто такой «продавец смерти» Виктор Бут и почему Россия ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Россия годами добивалась обмена контрабандиста оружия Виктора Бута, который в США был приговорен к 25 годам заключения. Его признали виновным в поставках&nbsp;...</p></div>
            </div>
        </a><a href='https://www.championat.com/basketball/article-4921001-amerikanskuyu-basketbolistku-brittni-grajner-pomenyali-na-viktora-buta-poslednyaya-informaciya-novosti-obmen-v-abu-dabi.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Глупый позор США». Бриттни Грайнер обменяли на Виктора ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTqwstiXq2olbAsxUFPlb1wNKVWigUSTEEHNob27XQ3vndUEH23JD0DA1gIpRO19zjsDMSzPj_1" alt="«Глупый позор США». Бриттни Грайнер обменяли на Виктора ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Дональд Трамп жёстко раскритиковал поступок Джо Байдена. 294 дня длилась история американской баскетболистки Бриттни Грайнер, которую поймали в аэропорту&nbsp;...</p></div>
            </div>
        </a><a href='https://www.vedomosti.ru/society/articles/2022/12/08/954396-viktor-but-vernulsya-v-rossiyu-posle-obmena-na-basketbolistku-brittni-grainer'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Виктор Бут вернется в Россию в результате обмена на ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQSMwlO6yGv2fDQaVGuPbI-Y41NQ7RQWyktX8KGvywdpl_9-ur4LLqHC6tFhLDDKES8cwqq_0ti" alt="Виктор Бут вернется в Россию в результате обмена на ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Россиянин Виктор Бут, с 2012 г. отбывавший в США 25-летний срок по обвинению в незаконной торговле оружием, вылетел в Москву после того, как его обменяли в&nbsp;...</p></div>
            </div>
        </a><a href='https://mir24.tv/news/16533779/viktor-but-osvobozhden-posle-mnogoletnego-zaklyucheniya-v-ssha-podrobnosti-gromkogo-obmena'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Виктор Бут освобожден после многолетнего заключения в США ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRtsKoh2EKUAxs41ruoDmXpG8jGqHpOQrDXDU0c6-LR5ZiqasIVIfr4rp21s_y6m45zQTOaNRxn" alt="Виктор Бут освобожден после многолетнего заключения в США ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Процесс передачи проходил в Абу-Даби в обстановке повышенной секретности.</p></div>
            </div>
        </a><a href='https://www.interfax.ru/russia/876044'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Депутат Мария Бутина сообщила, что Виктор Бут уже в России</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQU9AjYkQUFJur-mCBE2pC5fs91uZx1uG6dqj4NhZtRQ2IYIvVkMZOoJFkIAWYr4YyAaTtRG4iu" alt="Депутат Мария Бутина сообщила, что Виктор Бут уже в России" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Москва. 8 декабря. INTERFAX.RU - Бизнесмен Виктор Бут, которого 8 декабря освободили и обменяли на осужденную в России американку Бриттни Грайнер,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.kommersant.ru/doc/5708722'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Виктор Бут вернулся в Москву</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Виктор Бут вернулся в Москву" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Спецборт с Виктором Бутом, которого в результате обмена выдали власти США, приземлился в Москве. Об этом сообщили «Интерфаксу» в службах по контролю за&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}