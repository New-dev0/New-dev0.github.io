import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Сша – Уэльс</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Сша – Уэльс"/>
        <meta name="description" content="Trending News about Сша – Уэльс" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Сша – Уэльс</h1>
            <Image width={800} height={500} src="https://static.espreso.tv/uploads/photobank/266000_267000/266571_GettyImages-1443345984.jpg" alt="Сша – Уэльс"/>
            <h3>Recent News</h3>
            <a href='https://espreso.tv/uels-zigrav-vnichiyu-zi-ssha-na-chempionati-svitu'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Уельс зіграв внічию зі США на чемпіонаті світу</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTNgPgNz_iRPivHi7SnQPynIVGXRwlTQBWczuMQ0pT6uxkqUCEylwWo4KkTYL9mApMhjZSvXa0k" alt="Уельс зіграв внічию зі США на чемпіонаті світу" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>21 листопада у 1-му турі чемпіонату світу з футболу збірна Уельсу зіграла внічию зі США - Читайте все найважливіше про ЧС-2022 на Еспресо.</p></div>
            </div>
        </a><a href='https://www.championat.com/football/news-4900271-ssha-uels-startovye-sostavy-na-match-chempionata-mira.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>США — Уэльс: стартовые составы на матч чемпионата мира</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS-6t278_SfifNISTAfcPzWX8G0sV7en0qfWD4Fs6cWfiQVuLgIEYIOQUp3Aqmpz1NXJnxNezNf" alt="США — Уэльс: стартовые составы на матч чемпионата мира" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Сегодня, 21 ноября, состоится матч 1-го тура группового этапа чемпионата мира в Катаре – сыграют сборные США и Уэльса. Игра пройдёт в Аль-Райане на стадионе&nbsp;...</p></div>
            </div>
        </a><a href='https://www.rbc.ua/ukr/news/zbirna-uelsu-zavdyaki-beylu-vryatuvala-nichiyu-1669064463.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Сборная Уэльса благодаря Бейлу спасла ничью со США на ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTXDWHXGRL8e3bg4Q1Z2hy5NbJseizMPjnXDLfXF_bT_Z1E03eI5ViLpr9F1k3LVpC8efGHOw4W" alt="Сборная Уэльса благодаря Бейлу спасла ничью со США на ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Главные команды Уэльса и Соединенных Штатов не выявили сильнейшего в матче 1-го тура группового этапа мирового первенства в Катаре.</p></div>
            </div>
        </a><a href='https://news.obozrevatel.com/sport/football/ssha-uels-onlajn-translyatsiya-matcha-chm-2022.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>США – Уэльс: результат и хронология матча ЧМ-2022</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSVbzrRCkjsoEUDky4RV5OkEBgj2nsgFK-0sHdr2cPS1IyV8J6hv1nFbBCIaXRr_2gWQtDosD4V" alt="США – Уэльс: результат и хронология матча ЧМ-2022" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Обидчик сборной Украины в отборе ЧМ-2022 команда Уэльса в понедельник, 21 ноября, играла с американцами в стартовом для себя матче турнира.</p></div>
            </div>
        </a><a href='https://news.obozrevatel.com/ukr/sport/football/ssha-uels-onlajn-translyatsiya-matchu-chs-2022.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>США – Уельс: результат і хронологія матчу ЧС-2022</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSVbzrRCkjsoEUDky4RV5OkEBgj2nsgFK-0sHdr2cPS1IyV8J6hv1nFbBCIaXRr_2gWQtDosD4V" alt="США – Уельс: результат і хронологія матчу ЧС-2022" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Кривдник збірної України у відборі ЧС-2022 команда Уельсу в понеділок, 21 листопада, грала з американцями у стартовому для себе матчі турніру.</p></div>
            </div>
        </a><a href='https://focus.ua/uk/sport/537981-chudesnoe-spasenie-kak-garret-beyl-valliycev-spas-v-matche-ssha-uels'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Чудовий порятунок. Як Гаррет Бейл врятував валлійців у матчі ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSxfAXBc-01UKWMS2qZ_eG4sRgCYNMb9VgpswnYe9NlyqJXSyxwz9f8xxJjQoV5-wYY9Ktp3ju6" alt="Чудовий порятунок. Як Гаррет Бейл врятував валлійців у матчі ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Збірна Уельсу у групі кваліфікації на Чемпіонат світу-2022 посіла другий рядок у таблиці. У восьми поєдинках вони зуміли взяти 15 очок, пропустивши вперед&nbsp;...</p></div>
            </div>
        </a><a href='https://football24.ua/ru/ssha__ujels_bejl_poluchil_nagradu_luchshemu_igroku_matcha__zvezda_objasnil_kakoj_hod_trenera_pozvolil_spasti_nichju_n748317/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>США – Уэльс: Бейл получил награду лучшему игроку матча ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTphhhw90bFlHdYoeSDFe6TE6tHZNZfQJymHyB7YzP1Kti2e3cjTD0fFQ_4-HihlBIKmFbvaK5_" alt="США – Уэльс: Бейл получил награду лучшему игроку матча ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Нападающий сборной Уэльса Гарет Бейл стал главным героем матча против США на чемпионате мира. Новости футбола Футбол 24.</p></div>
            </div>
        </a><a href='https://fakty.ua/ru/411123-obidchik-ukrainy-blagodarya-penalti-spassya-v-startovom-matche-chm-2022-videoobzor-igry'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Обидчик Украины благодаря пенальти спасся в стартовом матче ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTBfQWvZm0DYOaTpy1BoZikB5Z6mkqEL6iUpSfPwR-vqU9ho5Nib_YkqpY7zwtGaC9EXg2_rkdd" alt="Обидчик Украины благодаря пенальти спасся в стартовом матче ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Результат и видеообзор матча 1-го тура в группе В на ЧМ-2022 между сборными США и Уэльса - обидчик Украины спас игру благодаря пенальти, который реализовал&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sport-express.ru/football/world/2022/news/ssha-uels-1-1-rezultat-matcha-gruppy-v-chempionata-mira-2022-21-noyabrya-2022-2001270/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Сборные США и Уэльса сыграли первый ничейный матч на ЧМ ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSUShWegop0kSWw5MiDMf_a6CNhjTE9Q3cDtc5AweTvATiJkYWdPYYYt2IU63ySwkwm_yvtYLYX" alt="Сборные США и Уэльса сыграли первый ничейный матч на ЧМ ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Сборные США и Уэльса сыграли вничью в матче группы В чемпионата мира-2022. Встреча на стадионе «Ахмед бин Али» завершилась со счетом 1:1.</p></div>
            </div>
        </a><a href='https://focus.ua/sport/537981-chudesnoe-spasenie-kak-garret-beyl-valliycev-spas-v-matche-ssha-uels'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Чудесное спасение. Как Гарет Бейл спас валлийцев в матче ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSxfAXBc-01UKWMS2qZ_eG4sRgCYNMb9VgpswnYe9NlyqJXSyxwz9f8xxJjQoV5-wYY9Ktp3ju6" alt="Чудесное спасение. Как Гарет Бейл спас валлийцев в матче ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В матче первого тура Чемпионата мира по футболу в Катаре в группе «В» не удалось победить ни одной команде — финальный счет 1:1.</p></div>
            </div>
        </a>
        </Template></>;
}