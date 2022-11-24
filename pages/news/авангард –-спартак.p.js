import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Авангард – Спартак</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Авангард – Спартак"/>
        <meta name="description" content="Trending News about Авангард – Спартак" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Авангард – Спартак</h1>
            <Image width={800} height={500} src="https://ss.sport-express.ru/userfiles/materials/183/1839020/large.jpg" alt="Авангард – Спартак"/>
            <h3>Recent News</h3>
            <a href='https://www.sport-express.ru/hockey/khl/news/khl-raspisanie-i-rezultaty-matchey-23-noyabrya-avangard-spartak-barys-ak-bars-2001764/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>КХЛ: «Авангард» проиграл «Спартаку», «Ак Барс» победил ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQcTNPb_2HFb6QKxMnm6jzXPXH9wi9xM2bBjjI_mP3lWi1xXGZbIJFZBBFaInMqnj1Vijdlqi8eaA" alt="КХЛ: «Авангард» проиграл «Спартаку», «Ак Барс» победил ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Овчинников — 4 (Морозов, Яковлев), 25:20 — 3:0. Оксентюк — 1 ( Ли, Барулин), 30:32 — 3:1. Шаров — 16 (мен., Аланов), 31:57 — 4:1. Вратари: Красоткин — Аликин (&nbsp;...</p></div>
            </div>
        </a><a href='https://www.championat.com/hockey/news-4902701-spartak-prerval-devyatimatchevuyu-seriyu-pobed-avangarda.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Спартак» прервал девятиматчевую серию побед «Авангарда»</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQY6_EohVWLeo2zL7lvpBapF79SQIyAWnYGWWNEYpSZ0Fj4aMiAgsBIYQCtsVmeq-aYnL1qFt0Y" alt="«Спартак» прервал девятиматчевую серию побед «Авангарда»" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В Омске на стадионе «G-Drive Арена» закончился очередной матч Фонбет Чемпионата КХЛ сезона-2022/2023, в котором местный «Авангард» принимал московский&nbsp;...</p></div>
            </div>
        </a><a href='https://sport24.ru/news/hockey/2022-11-23-avangard-spartak-smotret-onlayn-avangard-spartak-pryamaya-translyatsiya-match-avangard-spartak-pryamoy-efir-avangard-spartak-gde-smotret'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>КХЛ. «Авангард» — «Спартак». Прямая трансляция</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQiBEL5KBzrPHqnZl_f_8QcAxVJ6eHYP3a2ef6LSzj2NQzhkCCe9athbEQBPwpgQP8GUyM3mkS0" alt="КХЛ. «Авангард» — «Спартак». Прямая трансляция" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Самые свежие новости российского и мирового спорта только на сайте Sport24.ru! Интервью со спортсменами, онлайн трансляции, аналитика и прогнозы,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.liveresult.ru/news/152924'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Авангард – Спартак: прямая трансляция, где смотреть матч онлайн</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS2FtllMu3c0VjImh4IKI6xoRlCr7elMh9bPU_7yDf7uk5lnXtLeaTDDE8K9-YW0KPjwtIqDE-E" alt="Авангард – Спартак: прямая трансляция, где смотреть матч онлайн" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В среду, 23 ноября, состоится матч Фонбет Чемпионата Континентальной хоккейной лиги, в котором омский «Авангард» сыграет дома с московским «Спартаком»</p></div>
            </div>
        </a><a href='https://news.sportbox.ru/Vidy_sporta/Hokkej/KHL/spbnews_NI1729216_Spartak_byl_posvezheje_i_pobystreje_chut_poprovorneje_v_jedinoborstvah__zashhitnik_Avangarda_o_porazhenii_ot_krasnobelyh_v_KKhL'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Спартак» был посвежее и побыстрее, чуть попроворнее в ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR4t0Na7NdjJy_yuulT49AzvtsdtDJbHhaAA_u_3n3KLBEUCENBjCuVfNwTtkuKdet1wS6zpE-d" alt="«Спартак» был посвежее и побыстрее, чуть попроворнее в ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Защитник омского «Авангарда» Антон Белов считает, что команда проиграла московскому «Спартаку» в матче Фонбет Чемпионата КХЛ из‑за того, что соперник был&nbsp;...</p></div>
            </div>
        </a><a href='https://allhockey.ru/news/show/461464-Kravec_Spartak_perebegal_Avangard'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Кравец: &quot;Спартак&quot; перебегал &quot;Авангард&quot;</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Кравец: &quot;Спартак&quot; перебегал &quot;Авангард&quot;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Кравец: &quot;Спартак&quot; перебегал &quot;Авангард&quot; | Allhockey.ru - главный хоккейный информационный сайт России, где собраны все актуальные новости хоккея,&nbsp;...</p></div>
            </div>
        </a><a href='https://kvnews.ru/news-feed/144510'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В Омске «Спартак» впервые за 12 лет обыграл «Авангард» в ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQcfuhb8Kmjr3ZGAp-2NKXVasX4s46wC7t8-v_zM_EWz5swDPwG6s13A7g0zEd-ar1YQaXqlt5I" alt="В Омске «Спартак» впервые за 12 лет обыграл «Авангард» в ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Единственный гол «ястреба» Рида БУШЕ на последней секунде не дал уйти «сухим» голкиперу москвичей Алексею КРАСИКОВУ.</p></div>
            </div>
        </a>
        </Template></>;
}