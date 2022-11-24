import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Ракеты Brimstone</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Ракеты Brimstone"/>
        <meta name="description" content="Trending News about Ракеты Brimstone" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Ракеты Brimstone</h1>
            <Image width={800} height={500} src="https://cdn.zerkalo.az/2021/10/Brimstone.jpg" alt="Ракеты Brimstone"/>
            <h3>Recent News</h3>
            <a href='https://zerkalo.az/london-postavil-kievu-rakety-brimstone-2-s-udvoennoj-dalnostyu/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Лондон поставил Киеву ракеты Brimstone-2 с удвоенной ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ8BJHr8RYH9rd0tpb4t2nMh6qxXNOSusV0RPqz_MfZnp962rQ65URrTI8YGox7gRrMZnLMsub-" alt="Лондон поставил Киеву ракеты Brimstone-2 с удвоенной ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Великобритания отправила Украине высокоточные ракеты Brimstone-2 с лазерным наведением. Речь идет о модернизированной модели — с увеличенной в два раза&nbsp;...</p></div>
            </div>
        </a><a href='https://vm.ru/news/1013123-popytka-navesti-paniku-naskolko-opasny-rakety-brimstone-2-kotorye-vsu-poluchili-ot-britanii'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Попытка навести панику»: насколько опасны ракеты Brimstone ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ2PtjqvDVKt0ls6F5_fnoqXyU0W4XWvm1AmAWLoByVrBJkTE9DEsOO8kSaZwY1X9ol4EV2ajUP" alt="«Попытка навести панику»: насколько опасны ракеты Brimstone ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Великобритания передала Украине высокоточные ракеты Brimstone-2. Что это за оружие и как ему будет противодействовать российская армия, «Вечерней Москве»&nbsp;...</p></div>
            </div>
        </a><a href='https://riamo.ru/article/599702/kiev-poluchil-ot-velikobritanii-vysokotochnye-rakety-brimstone-2'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Киев получил от Великобритании высокоточные ракеты ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQuVJMXROwT7vJLYnaCQtc9hs0AsvT34qtDbQkYG4rsx-IYBgm7Eyffyg5eSFUyteypPApFaO5v" alt="Киев получил от Великобритании высокоточные ракеты ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>РИАМО - 22 ноя. Великобритания впервые передала Киеву высокоточные ракеты Brimstone-2, дальность пуска которых вдвое больше, чем у самонаводящихся ракет&nbsp;...</p></div>
            </div>
        </a><a href='https://www.rosbalt.ru/world/2022/11/23/1979427.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>СБУ ищет шпионов в монастырях, Лондон передал Украине ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTdkya8_M9L3sAg7tLYrnacLoa2nbP9Q1WlI-Hq0-kJqnEppgAzwWX-VCqht8boi4MIzDXVBvwx" alt="СБУ ищет шпионов в монастырях, Лондон передал Украине ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>СБУ ищет шпионов в монастырях, Лондон передал Украине ракеты Brimstone, «Газпром» грозит Киеву отключением газового транзита &middot; Обыски в Киево-Печерской лавре СБУ&nbsp;...</p></div>
            </div>
        </a><a href='https://life.ru/p/1540691'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Как на СВО повлияют ракеты Brimstone-2 с лазерным наведением</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTJu5wbK3Oigrfmx5EJwNYWWzNZy0lYYanaKqA5-aHJIjPZlI-L33cJ5qcXNon-LID9rXg7MDwg" alt="Как на СВО повлияют ракеты Brimstone-2 с лазерным наведением" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Эксперты считают, что использование мобильных платформ превращает британские ракеты в противотанковые и их количество не приведёт к усилению ВСУ.</p></div>
            </div>
        </a><a href='https://eadaily.com/ru/news/2022/11/22/perendzhiev-o-vozmozhnosti-puska-raket-brimstone-2-s-gruzovikov-chush'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Перенджиев о возможности пуска ракет Brimstone 2 с грузовиков ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSS6wQ2YJH6Zkb5oJlg_4zWFV9F-fnP9yNtUSMiL1OmiroXG2oQgPPzSYvi9gCLLAteMy2ZUzPD" alt="Перенджиев о возможности пуска ракет Brimstone 2 с грузовиков ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Заявления об использовании грузовиков в качестве пусковых установок для британских ракет Brimstone 2 — не более чем попытка дезинформировать российскую&nbsp;...</p></div>
            </div>
        </a><a href='https://dumatv.ru/news/the-telegraph-uznal-o-peredache-britaniei-ukraine-raket-brimstone-2'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The Telegraph узнал о передаче Британией Украине ракет ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQPUthb6nBFxJbg_yM7UoXmyvSL59YaG61JhbKl-u0B6pgtUhyRuh8wWuMqv4Ream6b67kOLgt5" alt="The Telegraph узнал о передаче Британией Украине ракет ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Британские власти направили киевскому режиму мощные ракеты Brimstone-2, модернизированную модель рак... Читать далее на Дума ТВ.</p></div>
            </div>
        </a><a href='https://hvylya.net/news/263005-britaniya-peredast-ukraine-noveyshie-rakety-s-lazernoy-navodkoy-brimstone'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Британия передаст Украине новейшие ракеты с лазерной ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSCXqH43HNqaQOVg4S29ujZ6GmEDDE8n3iMK2FYHNGh-QRVG9j43KOQSZJI0BMRWz702MXJyP5y" alt="Британия передаст Украине новейшие ракеты с лазерной ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Великобритания направит в Украину новые ракеты с лазерным наведением Brimstone 2, которые имеют вдвое большую дистанцию ​​поражения, чем их предыдущая&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}