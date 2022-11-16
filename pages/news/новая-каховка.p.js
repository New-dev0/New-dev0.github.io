import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Новая Каховка</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Новая Каховка"/>
        <meta name="description" content="Trending News about Новая Каховка" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Новая Каховка</h1>
            <Image width={800} height={500} src="https://www.interfax.ru/aspimg/872455.png" alt="Новая Каховка"/>
            <h3>Recent News</h3>
            <a href='https://www.interfax.ru/russia/872455'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Власти заявили, что большинство жителей покинули ближайшие ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ_dMjzw7MKKAal_zQgbtTb_tZ31M1PvEIh5tuGNlNSDHymkBfV-2FLa5FhwarBXpPggMwUiAdQ" alt="Власти заявили, что большинство жителей покинули ближайшие ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Москва. 15 ноября. INTERFAX.RU - Большинство жителей ближайших к Херсону городов на левом берегу Днепра покинули свои дома в связи с объявленной эвакуацией&nbsp;...</p></div>
            </div>
        </a><a href='https://gazeta.ua/ru/articles/np/_flag-ukrainy-v-novoj-kahovke-hlan-otvetil-oznachaet-li-eto-osvobozhdenie-goroda/1120869'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Флаг Украины в Новой Каховке – Хлань ответил, означает ли это ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ13Wc41z1ZGosDxu9XlUgc3U8Cbi81HvuaJH6h3Zok2qohfg1IN1ZYkTi0DvsmxDg8tfRZZHgD" alt="Флаг Украины в Новой Каховке – Хлань ответил, означает ли это ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Вчера, 14 ноября, сообщалось об украинском флаге в Новой Каховке Херсонской области. Но пока контролируем только правобережную Херсонщину. Об этом на&nbsp;...</p></div>
            </div>
        </a><a href='https://censor.net/ru/news/3380707/okkupatsionnaya_administratsiya_pokinula_novuyu_kahovku_rossmi'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Оккупационная &quot;администрация&quot; покинула Новую Каховку ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRHM0NbWBWEmbhROrlejh_OUOMV88CdqjSegsXmwXzNBtrJC9Epj9oqVJTvwb5EDx9mHeVyNVdn" alt="Оккупационная &quot;администрация&quot; покинула Новую Каховку ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>15.11.22 14:35 - Новая Каховка: Оккупационная администрация покинула Новую Каховку, - росСМИ. Оккупационная администрация выехала из Новой Каховки,&nbsp;...</p></div>
            </div>
        </a><a href='https://eadaily.com/ru/news/2022/11/15/administraciya-novoy-kahovki-pokinula-gorod-iz-za-obstrelov-vsu'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Администрация Новой Каховки покинула город из-за обстрелов ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTD5KtAEAie7YhFRkVdzVLbOim3gDujNBLF83Vmff1hHIL-6Z8JpkKx0NFNI1EH4MmKn2PtkrqP" alt="Администрация Новой Каховки покинула город из-за обстрелов ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Сотрудники администрации Новой Каховки были вынуждены покинуть город в связи с непрекращающимися обстрелами стороны войск киевского режима.</p></div>
            </div>
        </a><a href='https://www.vedomosti.ru/politics/news/2022/11/15/950434-administratsiya-pokinula'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Администрация Новой Каховки покинула город</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQnk-SI9T7clyO48JuFx6241CXdb53NURUTdsNr3s5_-o3lZP0csKcrML26XZJnZG_XZhWcLh4-" alt="Администрация Новой Каховки покинула город" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Сотрудники администрации Новой Каховки в Херсонской области покинули город, сообщил Telegram-канал местных властей.</p></div>
            </div>
        </a><a href='https://www.m24.ru/news/politika/15112022/521673'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Сотрудники администрации Новой Каховки покинули город из-за ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR3qXSTXClhSy6C5gGCmDHHHuB-K59GG5ejngMwqjgXPitRpBFW-tw9ql7IdWVneFGrIJFdlAHq" alt="Сотрудники администрации Новой Каховки покинули город из-за ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Уточняется, что из города также уехали сотрудники государственных и муниципальных учреждений. &quot;Но это не значит, что Новая Каховка, Таврийск и все другие&nbsp;...</p></div>
            </div>
        </a><a href='https://life.ru/p/1539110'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Сотрудники Администрации Новой Каховки ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRbKvhKpZ0GDqzJnwwRWLy2glFxFis6xBDnbaFB4jh1UcNiTtK2akI8g2ZpV1Nzk5vJUoqOAK0u" alt="Сотрудники Администрации Новой Каховки ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Сотрудники Администрации Новой Каховки, а также местных муниципальных учреждений были вынуждены покинуть город и передислоцироваться в более безопасные&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ostro.org/general/society/news/652161/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Оккупационные &quot;власти&quot; выехали из Новой Каховки - росСМИ</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Оккупационные &quot;власти&quot; выехали из Новой Каховки - росСМИ" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Из Новой Каховки (Херсонская область) выехала оккупационная &quot;администрация&quot;. Об этом пишут росСМИ 15 ноября. &quot;Сотрудники ВГА Новой Каховки,&nbsp;...</p></div>
            </div>
        </a><a href='https://m.business-gazeta.ru/news/571808'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Администрация Новой Каховки покинула город</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Администрация Новой Каховки покинула город" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В администрации отметили, что Новая Каховка оказалась под непосредственным огневым воздействием крупнокалиберной артиллерии и минометов ВСУ. «Неизбирательный&nbsp;...</p></div>
            </div>
        </a><a href='https://www.stopcor.org/section-uanews/news-garyacha-tochka-livij-bereg-hersonu-tam-tochatsya-boi-arestovich-15-11-2022.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Горячая точка – левый берег Херсона, там идут бои – Арестович ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS4f8AuSKes5U8q8ZRDCCDnVFHVkUp4bBLYnjNzfQE7TTm2dr2mzFZ_Rqm9YBtzKLoZX05MpDy0" alt="Горячая точка – левый берег Херсона, там идут бои – Арестович ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Южное направление уже неделю на устах всей страны и мира. В самом городе Херсоне местные до сих пор обнимают каждую машину ВСУ, чтобы поблагодарить за.</p></div>
            </div>
        </a>
        </Template></>;
}