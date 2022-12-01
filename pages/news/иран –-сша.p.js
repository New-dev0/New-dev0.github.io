import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Иран – США</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Иран – США"/>
        <meta name="description" content="Trending News about Иран – США" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Иран – США</h1>
            <Image width={800} height={500} src="https://ss.sport-express.ru/userfiles/materials/184/1842145/large.jpg" alt="Иран – США"/>
            <h3>Recent News</h3>
            <a href='https://www.sport-express.ru/football/world/2022/news/iran-ssha-mateu-laos-kandidat-na-sudeystvo-finala-2005569/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Иран — США: Матеу Лаос — кандидат на судейство финала</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ4WEDaqs406b7Os-mWX1RfvZygOx9NOWVtQDip-IlhZl7K46DUD9C03R-PpPsmerjYvOHBJ78A" alt="Иран — США: Матеу Лаос — кандидат на судейство финала" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Испанец Антонио Мигель Матеу Лаос, в минувший вторник проведший второй матч на ЧМ-2022, стал одним из главных кандидатов на судейство финала турнира.</p></div>
            </div>
        </a><a href='https://www.sport-express.ru/football/world/2022/news/chm-2022-reakciya-socsetey-na-koncovku-matcha-chempionata-mira-iran-ssha-0-1-2005423/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Позор! Иран задушили в матче с США». Реакция соцсетей на ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS_YUswlmgS-WiVqpA-heSiXGh63aI5saYdtc4_WiivOUDzNfuFQJPsgEZgJp2dxGi6_OsnZqDE" alt="«Позор! Иран задушили в матче с США». Реакция соцсетей на ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Сборная США победила команду Ирана со счетом 1:0 в матче групповой стадии чемпионата мира-2022.</p></div>
            </div>
        </a><a href='https://meduza.io/paragraph/2022/11/30/chm-2022-iran-ssha-amerikantsy-v-1-8-finala-irantsy-edut-domoy-gde-ih-semyam-grozili-pytkami'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ЧМ-2022. Иран — США. Американцы — в 1/8 финала, иранцы ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRvJjgFdCiNnmuOcpEJWz1Qlkf6ibBt_OHv8zaA9yRv43DzKMD5C7_3PCVdlNC-Zd4ia0nTGTyF" alt="ЧМ-2022. Иран — США. Американцы — в 1/8 финала, иранцы ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Данное сообщение (материал) создано и (или) распространено иностранным средством массовой информации, выполняющим функции иностранного агента,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.championat.com/football/news-4910569-iran-ssha-komandy-oglasili-startovye-sostavy-na-match.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Иран — США: команды огласили стартовые составы на матч ЧМ ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcScAn4kLliFJzVyFW6b4Sc_oUbRCRWP821YmCK3XOZ6rcR0iFRjC1HhgEXy0WkcADIxtxhmID2i" alt="Иран — США: команды огласили стартовые составы на матч ЧМ ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Сегодня, 29 ноября, состоится матч 3-го тура группы В, в котором встретятся сборные Ирана и США. Игра пройдёт на стадионе «Эль-Тумама», вмещающем 44 400&nbsp;...</p></div>
            </div>
        </a><a href='https://news.sportbox.ru/Vidy_sporta/Futbol/world_cup/spbnews_NI1733467_IRAN__SShA__01_PULIShICh_OTKRYL_SCheT_V_MATChe_GRUPPOVOGO_ETAPA_CheMPIONATA_MIRA_V_KATARe'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Иран — США — 0:1: Пулишич открыл счет в матче ЧМ-2022 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQty7Gexr1bcQ2RNbqpnzkrPY5k_gPXsF_fngV9NCGWmNZXOChHMedWRnP99AqJBngNUDesKxMa" alt="Иран — США — 0:1: Пулишич открыл счет в матче ЧМ-2022 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Игра группы В проходит на стадионе «Эль‑Тумама» в Дохе. Прямую трансляцию смотрите в эти минуты на канале «Матч ТВ» и сайтах matchtv.ru и sportbox.ru. Телеканал&nbsp;...</p></div>
            </div>
        </a><a href='https://sportrbc.ru/news/6385bd229a79470bd19b5c2e'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Иран — США</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRUgFDwwyQ606f0Pr-NROnQmQb5KlNrqvM2zYVfB0NB2QDCy-WRoWEluXuqy6BGq8otXi574Wtu" alt="Иран — США" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Сборная США выходит в плей-офф чемпионата мира, Иран был в шаге от того, чтобы впервые в истории выйти из группы, но сегодня был не их день. 90&nbsp;...</p></div>
            </div>
        </a><a href='https://eurostavka.ru/news/football/u-igrokov-otobrali-pasporta-na-kryshe-stadiona-dezhurili-snaypery-kakim-byl-pervyy-match-irana-i-ssha'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>У игроков отобрали паспорта, на крыше стадиона дежурили ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQJhhjXv0p2rnd6X9FgKk_0MhMuOSQWid9MvEslODyFeqGI10fD-04_sa22Rm7U2PrkBWHg3tRX" alt="У игроков отобрали паспорта, на крыше стадиона дежурили ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Осенью 2022-го Иран потрясли уличные протесты. Митингующие сносили все на их пути, дрались с полицией. По данным Iran Human Rights, около 400 гражданских и&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}