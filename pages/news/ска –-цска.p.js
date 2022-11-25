import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Ска – ЦСКА</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Ска – ЦСКА"/>
        <meta name="description" content="Trending News about Ска – ЦСКА" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Ска – ЦСКА</h1>
            <Image width={800} height={500} src="https://img.championat.com/news/social/1/ad/4901661.jpg" alt="Ска – ЦСКА"/>
            <h3>Recent News</h3>
            <a href='https://www.championat.com/hockey/article-4901661-ska-cska-6-2-obzor-matcha-ska-obygral-cska-vo-vtorom-armejskom-derbi-sezona-khl.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>СКА размазал чемпиона за 13 минут! Так над обороной ЦСКА не ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQU8K4JXfEGnXRVOBqO7ThhNa-cP0_gXpHn-vAmtH1JYltYHA00CAFtrS35Rr2KFEHbzuGJhehk" alt="СКА размазал чемпиона за 13 минут! Так над обороной ЦСКА не ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Московские армейцы проснулись при счёте 0:5, но их добил супергол Дмитрия Яшкина.</p></div>
            </div>
        </a><a href='https://www.sport-express.ru/hockey/khl/news/ska-cska-6-2-rezultat-matcha-khl-22-noyabrya-2022-goda-2001719/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>6:2! СКА на своем льду победил ЦСКА в матче лидеров ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQHxVD_9ap_KQwAisshaLgNwainffhwgzclxdnBWS3QzGQrYJIRWz3hddsIL9i4gmoH4ynf5C23" alt="6:2! СКА на своем льду победил ЦСКА в матче лидеров ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>СКА на своем льду победил ЦСКА в матче регулярного чемпионата КХЛ. Питерцы выиграли со счетом 6:2. В составе СКА голами отметились нападающие Михаил&nbsp;...</p></div>
            </div>
        </a><a href='https://news.sportbox.ru/Vidy_sporta/Hokkej/KHL/spbnews_NI1727891_SKA_v_matche_s_CSKA_nuzhno_vozvrashhat_byluju_uverennost__Konkov'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«СКА в матче с ЦСКА нужно возвращать былую уверенность ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQybxfUGcU8lJ8md2F4L6dI1_NRJLr-wcTC42EPKjUOckyPhTnnW9kCQ2aLmPNkeUXPRkYLuATx" alt="«СКА в матче с ЦСКА нужно возвращать былую уверенность ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Двукратный обладатель Кубка Гагарина в составе московского «Динамо» Сергей Коньков назвал ЦСКА фаворитом матча Фонбет Чемпионата КХЛ со СКА.</p></div>
            </div>
        </a><a href='https://sport24.ru/news/hockey/2022-11-22-ska-tsska-smotret-onlayn-ska-tsska-onlayn-translyatsiya-ska-tsska-pryamaya-translyatsiya-ska-tsska-pryamoy-efir-ska-tsska-gde-smotret-onlayn'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>КХЛ. СКА — ЦСКА. Прямая трансляция</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQiBEL5KBzrPHqnZl_f_8QcAxVJ6eHYP3a2ef6LSzj2NQzhkCCe9athbEQBPwpgQP8GUyM3mkS0" alt="КХЛ. СКА — ЦСКА. Прямая трансляция" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Самые свежие новости российского и мирового спорта только на сайте Sport24.ru! Интервью со спортсменами, онлайн трансляции, аналитика и прогнозы,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sport-express.ru/video/den-s-alekseem-shevchenko/videoreports/ska-cska-chto-eto-bylo-den-s-alekseem-shevchenko-2001919/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>СКА — ЦСКА. Что это было? День с Алексеем Шевченко 23 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRlnkwzGhv-ZLPrt_74cYoCnXA7J1sQguUqVpkURBnaoFCr_dOi6xbv6U-_cNyWVuapmc83QFGW" alt="СКА — ЦСКА. Что это было? День с Алексеем Шевченко 23 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Новый бомбардир в ВХЛ, канадский новичок «Трактора» и проблемы со здоровьем у игроков двух клубов КХЛ. ... Your browser can&#39;t play this video. Learn more&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sport.ru/hockey/hokkey-khl-regulyarnyy-chempionat-ska-tsska-pryamaya-tekstovaya-onlayn-/article535671/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Хоккей, КХЛ, Регулярный чемпионат, СКА - ЦСКА, Прямая ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ0pR1DMcetL9n5YFH6Knr7ogL1CAau0BkVPgiZqO_2Va8q6LaHGFkLn_VZJgOBwAkIFdVVMT4g" alt="Хоккей, КХЛ, Регулярный чемпионат, СКА - ЦСКА, Прямая ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Источник: SPORT.RU. Sport.ru / Хоккей. В матче регулярного чемпионата КХЛ санкт-петербургский СКА будет принимать столичный ЦСКА. SPORT.RU приглашает вас на&nbsp;...</p></div>
            </div>
        </a><a href='https://spbvedomosti.ru/news/sport/pochti-sensatsiya-khokkeisty-ska-obygrali-v-ledovom-tsska/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Почти сенсация. Хоккеисты СКА обыграли в Ледовом ЦСКА</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Почти сенсация. Хоккеисты СКА обыграли в Ледовом ЦСКА" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Многолетний кубковый обидчик петербуржцев и вторая на данный момент команда конференции, похоже, забыла выйти из раздевалки.</p></div>
            </div>
        </a><a href='https://cskanews.com/phc-cska/news-phc-cska/ska-cska-translyaciya-i-obsuzhdenie-igry-22-11-2022-v-19-30/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>СКА — ЦСКА | трансляция и обсуждение игры 22.11.2022 в 19.30 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRFoZ9Lcph319Z5TxnA1-tRPe0vdUNiaQNCVrXIndoohetJEbnanlVP6n9GBX6PhZtZ-U_w9iJ-" alt="СКА — ЦСКА | трансляция и обсуждение игры 22.11.2022 в 19.30 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>СКА — ЦСКА | трансляция и обсуждение игры 22.11.2022 в 19.30 - Новости ПХК ЦСКА - ЦСКАНЬЮС.ком. ..Рады предложить вашему вниманию онлайн-трансляцию матча ХК&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}