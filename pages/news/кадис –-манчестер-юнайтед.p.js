import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Кадис – Манчестер Юнайтед</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Кадис – Манчестер Юнайтед"/>
        <meta name="description" content="Trending News about Кадис – Манчестер Юнайтед" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Кадис – Манчестер Юнайтед</h1>
            <Image width={800} height={500} src="https://ss.sport-express.ru/userfiles/materials/184/1845013/large.jpg" alt="Кадис – Манчестер Юнайтед"/>
            <h3>Recent News</h3>
            <a href='https://www.sport-express.ru/football/friendly/news/kadis-manchester-yunayted-4-2-rezultat-tovarischeskogo-matcha-7-dekabrya-2022-2009017/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Манчестер Юнайтед» проиграл аутсайдеру чемпионата Испании</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSlclv35Czmi8WFwLq_8b3749FaP2ln_JOWsMEMIMBJIKK01m8QysBjZlAUOX1_kMFmN00wxKGf" alt="«Манчестер Юнайтед» проиграл аутсайдеру чемпионата Испании" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>«Манчестер Юнайтед» проиграл «Кадису» в товарищеском матче со счетом 2:4.</p></div>
            </div>
        </a><a href='https://sport24.ru/news/football/2022-12-07-manchester-yunayted-kadis-smotret-onlayn-myu-kadis-pryamaya-translyatsiya-manchester-yunayted-kadis-pryamoy-efir-myu-kadis-gde-smotret-man-yunayted-kadis-onlayn'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Кадис» — «Манчестер Юнайтед». Прямая трансляция ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRtqwXxaY9qPhjrTjJ7tK5lNro04DmfnnP89CIVEz0QLKVWD_o0Y8ODtSBIHqRxutAyf2XILKE1" alt="«Кадис» — «Манчестер Юнайтед». Прямая трансляция ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Самые свежие новости российского и мирового спорта только на сайте Sport24.ru! Интервью со спортсменами, онлайн трансляции, аналитика и прогнозы,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.vseprosport.ru/news/2022/12/07/kadis-manchester-junajted-prognoz-na-tovarishheskij-match-7-dekabrja-2022-goda'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Кадис» — «Манчестер Юнайтед»: прогноз на товарищеский матч</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQE24Fe_IKA8tTWmv-4hGyIv-refDskWK8WYERroR2JK2qTKy-qaHfcDxyFr7MJIXUK1EcjLQTV" alt="«Кадис» — «Манчестер Юнайтед»: прогноз на товарищеский матч" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Кадис — Манчестер Юнайтед. Прогноз на товарищеский матч (7 декабря 2022 года). Кадис. Испания. Товарищеские матчи. 07.12.2022. 22:00 МСК. Манчестер Юнайтед.</p></div>
            </div>
        </a><a href='https://rossaprimavera.ru/news/627da563'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Манчестер Юнайтед» проиграл «Кадису» в товарищеском матче</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRICvMQ_Fm81G6CkM3KvyX68oKfXZbEjEy6uMasJayRs3TeEpJorK6uknLzyq3Gl_3yX9Q8MIAg" alt="«Манчестер Юнайтед» проиграл «Кадису» в товарищеском матче" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Испанский «Кадис» дома выиграл у английского «Манчестер Юнайтед» 7 декабря в товарищеском матче.</p></div>
            </div>
        </a><a href='https://vprognoze.ru/topforecast/6010397-kadis-manchester-yunajted.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Кадис - Манчестер Юнайтед прогноз на матч Товарищеские ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Кадис - Манчестер Юнайтед прогноз на матч Товарищеские ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Бесплатные прогнозы на футбол: Кадис - Манчестер Юнайтед на 07 декабря 2022 от профессионалов. Статистика встреч. Сравнение коэффициентов на исход матча&nbsp;...</p></div>
            </div>
        </a><a href='https://www.soccer.ru/news/1338402/kadis-manchester-yunayted'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Манчестер Юнайтед» уступил «Кадису» в контрольном матче</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSgVWZpYlxWuX9hGOUzaA9fWxmaKo4CyT6wAamOiCkYnTXm9Yrt8TXGovwurWEKwS1pCKzc19np" alt="«Манчестер Юнайтед» уступил «Кадису» в контрольном матче" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>«Кадис» обыграл «Манчестер Юнайтед» в контрольном матче (4:2).</p></div>
            </div>
        </a><a href='https://www.liveresult.ru/news/155287'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Кадис – Манчестер Юнайтед: прямая трансляция, где смотреть ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQgu5PCTIU7n8_gcWHiAX9pNgGIk_6W1sVcR1QIB8GBX1b9HmUYmZa8lKhuCxiBSPRtCVibHEAq" alt="Кадис – Манчестер Юнайтед: прямая трансляция, где смотреть ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В среду, 7 декабря, состоится товарищеский матч, в котором испанский «Кадис» сыграет дома с английским «Манчестер Юнайтед»</p></div>
            </div>
        </a>
        </Template></>;
}