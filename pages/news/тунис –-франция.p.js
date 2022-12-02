import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Тунис – Франция</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Тунис – Франция"/>
        <meta name="description" content="Trending News about Тунис – Франция" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Тунис – Франция</h1>
            <Image width={800} height={500} src="https://ss.sport-express.ru/userfiles/materials/184/1842428/large.jpg" alt="Тунис – Франция"/>
            <h3>Recent News</h3>
            <a href='https://www.sport-express.ru/football/world/2022/news/otmena-gola-v-matche-chm-2022-tunis-franciya-privela-k-skandalu-2005889/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Большой судейский скандал в Катаре. Результат матча Тунис ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQwgPwDRC7_9cy74oSt4xJohExJsGyU3_sqLPhn3YYy3xg0WuFLSp7lkcqozkyIPzkxpUUzIIGI" alt="Большой судейский скандал в Катаре. Результат матча Тунис ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Действия арбитра Мэттью Конгера и видеоарбитра Абдуллы Аль-Марри в конце матча 3-го тура группового турнира ЧМ-2022 Тунис — Франция (1:0) привели к громкому&nbsp;...</p></div>
            </div>
        </a><a href='https://www.championat.com/football/news-4908689-tunis-franciya-pryamaya-translyaciya-matcha-chempionata-mira-2022-nachnyotsya-v-18-00.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Тунис — Франция: прямая трансляция матча чемпионата мира ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTynpuRGDdVXbEy5etkFfR2xoIooJtuOrwv56NpbIpNGmuFMLalMKi8IIYDFuwGVqGN3I4pEAfh" alt="Тунис — Франция: прямая трансляция матча чемпионата мира ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Сегодня, 30 ноября, на «Эдьюкейшн Сити» в матче 3-го тура группового этапа чемпионата мира по футболу встретятся соперники по группе D. Тунис сыграет с&nbsp;...</p></div>
            </div>
        </a><a href='https://news.sportbox.ru/Vidy_sporta/Futbol/world_cup/spbnews_NI1733666_Tunis__Francija_gde_smotret_onlajn_matcha_30_nojabra_chempionat_mira_po_futbolu'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Тунис — Франция: где смотреть онлайн матча 30 ноября ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSEF8WjV7SNEvd2mOPyN_cJLiTNTrOInRAh3s0sw-rUlNpLzOKesaH2U2zIaVzSl_Dhx4WglsqO" alt="Тунис — Франция: где смотреть онлайн матча 30 ноября ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Встреча третьего тура группового этапа чемпионата мира по футболу между командами Туниса и Франции пройдет в среду, 30 ноября. Прямую трансляцию можно будет&nbsp;...</p></div>
            </div>
        </a><a href='https://www.vseprosport.ru/news/2022/11/30/tunis-francija-stavka-i-koefficienty-na-match-chempionata-mira-30-nojabrja-2022-goda'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Тунис — Франция: ставка на матч Чемпионата мира</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTpHdxP1yHxm0FP7NkF2MBfPr3Jlxhm9x3ofoskVLQr06_tsh8Ye44oHu8gtalytFFfU1Zwsqm2" alt="Тунис — Франция: ставка на матч Чемпионата мира" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Тунис — Франция. Ставка и коэффициенты на матч Чемпионата мира (30 ноября 2022 года). Сборная Туниса еще не потеряла шансов на выход в следующий раунд&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sports.ru/football/1113763317-tunis-francziya-onlajn-translyacziya-nachnetsya-v-1800.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Тунис победил Францию (1:0), но не вышел в плей-офф ЧМ-2022</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ7OMUW_RqA_DmJlT0kVcXIHmWZjhI5kkOFStPMNsm1hELKYwYVKKRIQot6hk0aBiI3H_vyAZXF" alt="Тунис победил Францию (1:0), но не вышел в плей-офф ЧМ-2022" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Франция уступила Тунису (0:1) в 3-м туре группового этапа ЧМ-2022.</p></div>
            </div>
        </a><a href='https://www.sport.ru/football/futbol-chm-2022-tunis-frantsiya-pryamaya-tekstovaya-onlayn-translyatsiya/article536417/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Футбол, ЧМ-2022, Тунис - Франция, прямая текстовая онлайн ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSYvJhmb682OjWewnquS5iqyJm6OLtsPu1H-KgiOCoFv103tdZJppf3UV0xjn4WABljzB-Jakaw" alt="Футбол, ЧМ-2022, Тунис - Франция, прямая текстовая онлайн ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sport.ru / Футбол. Сегодня, 30 ноября, состоятся очередные матчи 3-го тура группового этапа чемпионата мира 2022 года. Сборная Франции, уже гарантировавшая себе&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}