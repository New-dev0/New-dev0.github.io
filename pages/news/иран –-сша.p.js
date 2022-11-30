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
            <Image width={800} height={500} src="https://img.championat.com/news2/social/1/d7/4910569.jpg" alt="Иран – США"/>
            <h3>Recent News</h3>
            <a href='https://www.championat.com/football/news-4910569-iran-ssha-komandy-oglasili-startovye-sostavy-na-match.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Иран — США: команды огласили стартовые составы на матч ЧМ ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcScAn4kLliFJzVyFW6b4Sc_oUbRCRWP821YmCK3XOZ6rcR0iFRjC1HhgEXy0WkcADIxtxhmID2i" alt="Иран — США: команды огласили стартовые составы на матч ЧМ ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Сегодня, 29 ноября, состоится матч 3-го тура группы В, в котором встретятся сборные Ирана и США. Игра пройдёт на стадионе «Эль-Тумама», вмещающем 44 400&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sport-express.ru/football/world/2022/news/iran-ssha-vo-skolko-nachalo-i-gde-smotret-pryamuyu-translyaciyu-matcha-chempionata-mira-2022-29-noyabrya-2004962/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Иран — США: во сколько начало и где смотреть прямую ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcToOrx0FVmYT_QLY10YCHQDsCfmfGa_Ungd6MZDrZ13F531IpOoikyBrT5tRuKBBO6HMNTM1Yfl" alt="Иран — США: во сколько начало и где смотреть прямую ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Во вторник, 29 ноября сборная Ирана сыграет против США в матче 3-го тура групповой стадии чемпионата мира по футболу-2022 в Катаре.</p></div>
            </div>
        </a><a href='https://meduza.io/paragraph/2022/11/30/chm-2022-iran-ssha-amerikantsy-v-1-8-finala-irantsy-edut-domoy-gde-ih-semyam-grozili-pytkami'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ЧМ-2022. Иран — США. Американцы — в 1/8 финала, иранцы ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRvJjgFdCiNnmuOcpEJWz1Qlkf6ibBt_OHv8zaA9yRv43DzKMD5C7_3PCVdlNC-Zd4ia0nTGTyF" alt="ЧМ-2022. Иран — США. Американцы — в 1/8 финала, иранцы ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Данное сообщение (материал) создано и (или) распространено иностранным средством массовой информации, выполняющим функции иностранного агента,&nbsp;...</p></div>
            </div>
        </a><a href='https://news.sportbox.ru/Vidy_sporta/Futbol/spbnews_NI1733624_Sbornuju_Irana_cinichno_ubili_v_ugodu_SShA_Sudje_dolzhno_byt_stydno'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Сборную Ирана цинично убили в угоду США. Судье должно быть ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTj5emonJL763Y_cgzmPVZKYML9Am6BUYpbXrVR5yCwfqeL6bWF3xT6RIqw4KJ4vgmckkkBw4bD" alt="Сборную Ирана цинично убили в угоду США. Судье должно быть ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Арбитр лишил команду шанса на последней минуте матча. А ведь нарушение было!</p></div>
            </div>
        </a><a href='https://sportrbc.ru/news/6385bd229a79470bd19b5c2e'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Иран — США</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRUgFDwwyQ606f0Pr-NROnQmQb5KlNrqvM2zYVfB0NB2QDCy-WRoWEluXuqy6BGq8otXi574Wtu" alt="Иран — США" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Сборная США выходит в плей-офф чемпионата мира, Иран был в шаге от того, чтобы впервые в истории выйти из группы, но сегодня был не их день. 90&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sports.ru/football/1113720011-iran-ssha-startovye-sostavy-komand-na-match-chempionata-mira-po-futbol.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Иран — США: стартовые составы команд на матч Чемпионата ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTsv6uAzt0d7sdVeFNsEz7cQVuXK-qrqyA4mhBtPPI6ELDEbVdsN0TUb4Wen0kVv4jPNzT8IWnN" alt="Иран — США: стартовые составы команд на матч Чемпионата ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В матче третьего тура группового этапа в квартете B на Чемпионате мира по футболу 2022 сыграют сборные Ирана и США. Поединок пройдет на стадионе&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}