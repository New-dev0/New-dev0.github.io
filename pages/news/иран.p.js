import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Иран</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Иран"/>
        <meta name="description" content="Trending News about Иран" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Иран</h1>
            <Image width={800} height={500} src="https://focus.ua/static/storage/thumbs/1200x630/1/9d/aff5c1c2-ad361de8c9668f7e94ca9a68ca5939d1.jpg?v=3612_1" alt="Иран"/>
            <h3>Recent News</h3>
            <a href='https://focus.ua/world/539143-v-kraynem-sluchae-u-baydena-zagovorili-o-voennom-vmeshatelstve-v-iran'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;В крайнем случае&quot;: у Байдена заговорили о военном ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS202Ft_OPesagZqKKFcX4McAOVZGEBloH9DVK0nH8NbeADZildIMNCBqyFISKIfNUUHKyi7jxL" alt="&quot;В крайнем случае&quot;: у Байдена заговорили о военном ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Госдепартамент США заинтересован в скорейшем восстановлении ядерной сделки с Ираном. В Вашингтоне допускают, что эта цель может быть достигнута военным&nbsp;...</p></div>
            </div>
        </a><a href='https://www.rbc.ua/ukr/news/chi-peredav-iran-balistichni-raketi-rosiyi-1669802987.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Передал ли Иран баллистические ракеты России: что говорят в ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSViK8ciZKAaqcSAa52e-XLEZcpnYm8hsOgmI9DLgXqh_ih8XVMVflhfiP5QkrcTAxeFlanZnwz" alt="Передал ли Иран баллистические ракеты России: что говорят в ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>&quot;По нашей информации такие переговоры (о передаче Ираном баллистических ракет для РФ - ред.) проводились, есть соответствующие проекты договоренностей&nbsp;...</p></div>
            </div>
        </a><a href='https://zerkalo.az/bajden-gotov-primenit-voennye-sredstva-chtoby-iran-ne-poluchil-yadernoe-oruzhie-spetspredstavitel/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Байден готов применить военные средства, чтобы Иран не ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRO3tWl--Yri9RRg-NjIhIma9Q7xO6Xex2uNQ7qjlPHRwwm_nHWQ0BX4ky2W0ETLWtEddSe69sj" alt="Байден готов применить военные средства, чтобы Иран не ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Байден готов применить военные средства, чтобы Иран не получил ядерное оружие - спецпредставитель. Об этом заявил спецпредставитель США по Ирану Роберт&nbsp;...</p></div>
            </div>
        </a><a href='https://tsn.ua/ru/ato/iran-poka-ne-peredal-rossii-ballisticheskie-rakety-razvedka-2213188.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Иран пока не передал России баллистические ракеты – разведка</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS0wIBywTEhB6h2PM9L6rNXsMeVXJNi2U_BhZ9qcS2VzPU1QZVcvKWuwewT4MuOF-n6W1fq7teg" alt="Иран пока не передал России баллистические ракеты – разведка" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Об этом в эфире телемарафона сообщил представитель Главного управления разведки Минобороны Вадим Скибицкий. По его словам, Москва с Тегераном переговоры о&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sport-express.ru/football/world/2022/news/iran-ssha-mateu-laos-kandidat-na-sudeystvo-finala-2005569/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Иран — США: Матеу Лаос — кандидат на судейство финала</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ4WEDaqs406b7Os-mWX1RfvZygOx9NOWVtQDip-IlhZl7K46DUD9C03R-PpPsmerjYvOHBJ78A" alt="Иран — США: Матеу Лаос — кандидат на судейство финала" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Испанец Антонио Мигель Матеу Лаос, в минувший вторник проведший второй матч на ЧМ-2022, стал одним из главных кандидатов на судейство финала турнира.</p></div>
            </div>
        </a><a href='https://www.rbc.ua/ukr/news/bayden-u-kraynomu-vipadku-pogoditsya-viyskoviy-1669828789.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Байден в крайнем случае согласится на военный сценарий ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQslHUuLlvdc3Ri5_FaUW0jU8E5CSHrE6sDY9_ltzB-qCAwZH2lCwB-aHX78U5b5RBc4J5p9QqO" alt="Байден в крайнем случае согласится на военный сценарий ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>США оказывают на Иран давление, чтобы не дать ему стать ядерным государством, в крайнем случае готовы к военному сценарию.</p></div>
            </div>
        </a><a href='https://news.liga.net/politics/news/iran-esche-ne-postavil-rossii-ballisticheskie-rakety-razvedka'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Иран еще не поставил России баллистические ракеты – разведка</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRO52aqymt9NhKDBFz2IiLdfKDFR9TUUg3tahUuGPJ8FplvxnqrQZKzIWD_PD4uJXO0VF7SFjbQ" alt="Иран еще не поставил России баллистические ракеты – разведка" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Иран не поставил России баллистические ракеты, говорят в разведке. Но ГУР отмечает: проекты договоренностей у Москвы и Тегерана есть. война, Иран, разведка,&nbsp;...</p></div>
            </div>
        </a><a href='https://ru.slovoidilo.ua/2022/11/30/novost/bezopasnost/postavka-oruzhiya-rf-irana-poka-ne-zafiksirovana-razvedka'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Поставка оружия в рф из Ирана пока не зафиксирована ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRcCAP_evpgxFF-LVfCJCj3fs_N9pdz8rLl1-VOj_7HJJLHPsvX0GvGY4SMqHId4hbsc2_cY1CQ" alt="Поставка оружия в рф из Ирана пока не зафиксирована ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>У армии рф есть дефицит определенных видов вооружения: страна-агрессор сейчас ведет переговоры с Ираном, но поставки вооружений россиянам оттуда пока не&nbsp;...</p></div>
            </div>
        </a><a href='https://nv.ua/world/countries/peredal-li-iran-rossii-ballisticheskie-rakety-chto-izvestno-novosti-ukrainy-50287660.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Украинская разведка пока не зафиксировала передачу в РФ ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRP9L_hutvVKThqqRS7_fSQze9uBW17Hu9v3g5IOTqDtInmMpRTrE6LR8upIFOgBCoMDEnHEre2" alt="Украинская разведка пока не зафиксировала передачу в РФ ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Главное управление разведки Минобороны пока не фиксировало передачу Ираном в Россию баллистических ракет для ударов по Украине.</p></div>
            </div>
        </a><a href='https://www.dialog.ua/war/263463_1669825018'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Иран перестал поставлять оружие России - разведка</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRoO8Eg2mvAaHSVhL6LsQYmrSe4UzV3jGiIDjusKUHbiVhjrxfBMNBgh-wb0ynXHQGmR9_GCLyY" alt="Иран перестал поставлять оружие России - разведка" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Новых случаев поставок иранского вооружения в Россию пока не зафиксировано, рассказали в украинской разведке.</p></div>
            </div>
        </a>
        </Template></>;
}