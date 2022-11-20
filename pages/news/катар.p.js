import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Катар</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Катар"/>
        <meta name="description" content="Trending News about Катар" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Катар</h1>
            <Image width={800} height={500} src="https://eimg.pravda.com/images/doc/1/6/167d812-qatar-world-cup-m2.jpg" alt="Катар"/>
            <h3>Recent News</h3>
            <a href='https://www.epravda.com.ua/publications/2022/11/19/694015/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Спочатку Росія, потім Катар. Далі – КНДР? Як Чемпіонат світу ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQnp0LB4kw5wW8xeE1vwjeZYArrGz6L0oXWWWEVxZ6p19fGBde3geOi0iGcaf81eWHVZ1gCR0Oz" alt="Спочатку Росія, потім Катар. Далі – КНДР? Як Чемпіонат світу ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>20 листопада стартують матчі скандального мундіалю. Як Катар виборов право на проведення ЧС-2022 і чому він стане провальним.</p></div>
            </div>
        </a><a href='https://www.sport-express.ru/football/world/2022/online/chm-2022-katar-ekvador-smotret-match-pryamaya-translyaciya-tekstovyy-onlayn-igry-chempionata-mira-po-futbolu-20-noyabrya-2022-2000370/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Катар — Эквадор: прямая трансляция матча открытия ЧМ-2022</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRKUUcolV71wcW5jhwQaTyiRD5lzztRh8CBP88BOYKywEqxSwhaw9Cw8JIb6qAifBgzDfpx30fY" alt="Катар — Эквадор: прямая трансляция матча открытия ЧМ-2022" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ЧМ 2022 по футболу Катар — Эквадор: где смотреть матч открытия чемпионата мира, прямая трансляция ТВ и интернет сайт в России, текстовый онлайн игры,&nbsp;...</p></div>
            </div>
        </a><a href='https://racurs.ua/ua/n176929-katar-zaboronyv-pyvo-na-stadionah-pid-chas-chs-z-futbolu-za-dva-dni-do-startu.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Катар заборонив пиво на стадіонах під час ЧС з футболу — за ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSLlnZLKbzORgjtbe4J_IPn9sSsi0Vn3FlJ8hcsymm2IZR5o23LIuudqjDtYM1QMUDOalOAAKyG" alt="Катар заборонив пиво на стадіонах під час ЧС з футболу — за ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Реалізація пива була передбачена контрактом між FIFA і AB InBev, власником бренду Budweiser. Контракт оцінили в 75 млн дол. В офіційній заяві ФІФА не&nbsp;...</p></div>
            </div>
        </a><a href='https://sport.24tv.ua/katar-ekvador-prognoz-gru-chempionatu-svitu-2022-20-listopada_n2201206'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Катар та Еквадор зіграють в матчі-відкритті ЧС-2022: чи ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRWJx3f-aw-QflBAY-e422-Wv6ctKy6KdSTvtlEbuHGvpNNyLCOSVL7--nM1Z9l_5FAK4XpKI2p" alt="Катар та Еквадор зіграють в матчі-відкритті ЧС-2022: чи ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Прогноз на матч Катар – Еквадор, який відбудеться в рамках матчу Чемпіонату світу з футболу 2022. Команди зіграють 20 листопада 2022.</p></div>
            </div>
        </a><a href='https://sport.24tv.ua/ru/katar-jekvador-prognoz-igru-chempionata-mira-2022-20-nojabrja_n2201222'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Катар и Эквадор сыграют в матче-открытии ЧМ-2022 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRWJx3f-aw-QflBAY-e422-Wv6ctKy6KdSTvtlEbuHGvpNNyLCOSVL7--nM1Z9l_5FAK4XpKI2p" alt="Катар и Эквадор сыграют в матче-открытии ЧМ-2022 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Прогноз на матч Катар – Эквадор, который пройдет в рамках матча Чемпионата мира по футболу 2022 года. Команды сыграют 20 ноября. Ставки букмекеров на матч&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ua-football.com/ua/foreign/worldcup/1668844053-katar-ekvador-de-i-koli-divitisya-live-onlayn-pryamu-videotranslyaciyu-matchu-vidkrittya-chs-2022.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Катар - Еквадор. Де і коли дивитися LIVE онлайн пряму ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQkAFuHCjaf78nUPYabOgJovO4eRCTUg7y6HU7mazD-4a5PfkBfYZxH8PRJK__N6eTeUfrCz6tV" alt="Катар - Еквадор. Де і коли дивитися LIVE онлайн пряму ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Катар - Еквадор ⋇ 20.11.2022 ⋇ Де дивитися матч онлайн ✓ Прямі трансляції футбольних матчів ⚽ Статистика ☝ Результати ✌ Свіжі новини футболу&nbsp;...</p></div>
            </div>
        </a><a href='https://ivbg.ru/8290473-katar-podstavil-fifa-pered-sponsorami-na-desyatki-millionov-dollarov.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Катар подставил ФИФА перед спонсорами на десятки ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRfshx2lqRGV_qoj6BaZN_AE0lCzWsyjmFy_wC4Q6yWHk1Z8v0fFe4gP2N3GSVBSqAPkO-k5sgO" alt="Катар подставил ФИФА перед спонсорами на десятки ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Как сообщает Associated Press, руководство Катара приняло решение запретить продажу алкогольного пива на всех стадионах во время турнира.</p></div>
            </div>
        </a><a href='https://champion.com.ua/wc2022/2022/11/19/915413/katar-chempion-svitu-zi-skandaliv'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Катар - чемпіон світу зі скандалів</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQPziHir0v7uTuc6EMvDSIQeZ-ky-1iBHlpRU1-H4bpM6YNe-9sIZls3PcWGRl07XOyFiJMxbzb" alt="Катар - чемпіон світу зі скандалів" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Колись у виконавчому комітеті ми домовилися, що Росія прийматиме ЧС-2018, а США — 2022. За тиждень до конгресу у 2010 році мені зателефонував Мішель Платіні та&nbsp;...</p></div>
            </div>
        </a><a href='https://prm.ua/chempionat-svitu-z-futbolu-u-katari-problemy-ta-nedoliky-turniru/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Чемпіонат світу з футболу у Катарі: проблеми та недоліки турніру</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRJxDbI2odUSX5I1fH8PJ5pUbGbeijnOcv9ik6EhZKiGXzCxodJWNH-WP5DfZM31eBi-1K7i5-j" alt="Чемпіонат світу з футболу у Катарі: проблеми та недоліки турніру" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>У неділю, 20 листопада, матчем КАТАР - ЕКВАДОР о 18:00 за Києвом — розпочнеться чемпіонат світу з футболу &quot;Катар-2022&quot;</p></div>
            </div>
        </a><a href='https://sport.ua/news/604006-katar-ekvador-prognoz-i-anons-na-match-chempionata-mira'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Катар – Эквадор. Прогноз и анонс на матч чемпионата мира</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT_eg5TiaNZSq9cvfzEqWgDr-3186fWNkF_tqrIg5dceR1wHHfiVjbQrHqSREYx1H7Z_PCqftUg" alt="Катар – Эквадор. Прогноз и анонс на матч чемпионата мира" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Прогноз и анонс на матч {Катар} – {Эквадор} ⇒ ≺{20.11.2022}≻ ✓ {Чемпионат мира} Прогнозы, обзоры и анонсы футбольных матчей от лучших экспертов на&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}