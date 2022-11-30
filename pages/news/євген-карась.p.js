import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Євген Карась</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Євген Карась"/>
        <meta name="description" content="Trending News about Євген Карась" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Євген Карась</h1>
            <Image width={800} height={500} src="https://focus.ua/static/storage/thumbs/1200x630/e/5e/0d22c987-c4578ae393e3128a61c3e74ddd4a05ee.jpeg?v=1349_1" alt="Євген Карась"/>
            <h3>Recent News</h3>
            <a href='https://focus.ua/uk/voennye-novosti/538813-vs-rf-gotovyat-na-29-noyabrya-massirovannyy-obstrel-ukrainy-evgeniy-karas'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ЗС РФ готують на 29 листопада масований обстріл України ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT0JqRbHbL-orZB0qjkSsCA_ytw4HG-4C03sdgRYtxoN4m7jXZFMrm-d3W_kmb160ebh4zHAEQ-" alt="ЗС РФ готують на 29 листопада масований обстріл України ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Імовірність масштабної атаки по Україні, за словами військовослужбовця, становить 90%, а про плани Кремля обстріляти Україну свідчать численні перехоплення.</p></div>
            </div>
        </a><a href='https://www.dsnews.ua/ukr/politics/okupanti-gotuyut-na-29-listopada-masovaniy-obstril-ukrajini-yevgen-karas-28112022-470119'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Окупанти готують на 29 листопада масований обстріл України ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRuKkCx6DCBXaXkbgevfoAi_ZrJ4nUSsntd_pgh9ywuE04pj26w45ZWgDS-KReZnc6NPRwOY01m" alt="Окупанти готують на 29 листопада масований обстріл України ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>У вівторок, 29 листопада, ЗС РФ планує здійснити масовані ракетні удари по Україні. понеділок, 28 листопада 2022, 22:55. Реклама на dsnews.ua.</p></div>
            </div>
        </a><a href='https://apostrophe.ua/ua/news/society/2022-11-28/veroyatnost---90-ukraintsev-predupredili-pro-novyiy-masshtabnyiy-raketnyiy-udar/284909'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Імовірність – 90%: українців попередили про новий масштабний ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRsyVfhTQDf4rj1f_WKfbgKb5_JGcDiVjWRu2T7cYCRwh0eolOjJ5jKa5bSV4d-1-h6WT1VFxag" alt="Імовірність – 90%: українців попередили про новий масштабний ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Про це написав у Telegram боєць ЗСУ, засновник організації &quot;С14&quot; Євген Карась. За його словами, ймовірність того, що Росія знову атакує ракетами, становить 90%&nbsp;...</p></div>
            </div>
        </a><a href='https://glavred.net/ukraine/veroyatnost-90-ukraincev-predupredili-o-novom-masshtabnom-raketnom-udare-29-noyabrya-10428938.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Імовірність - 90%&quot;: українців попередили про новий масштабний ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSgkinBhqR4eHnxYTDG1eRmmBtCEjzzXAhTpHPTMZl2riVu5EicFLXfstXp7gKD-FH5fGKQaLlp" alt="&quot;Імовірність - 90%&quot;: українців попередили про новий масштабний ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>у вівторок, 29 листопада, Україну, ймовірно, накриє нова хвиля ракетних атак з боку країни-терориста Росії. Сказав боєць ЗСУ Євген Карась 28 листопада.</p></div>
            </div>
        </a><a href='https://kyiv.comments.ua/ua/news/society/developments/13875-rosiya-mozhe-zavdati-novih-udariv-po-kievu-29-listopada-podrobici.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Росія може завдати нових ударів по Києву 29 листопада: подробиці</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ3pDOr52lrEoUXsUM8kw4xybnBrwx8jqaHf0n4_9oPu8gEHgi_zsrFiJJzBGl47gJcvguFOTwp" alt="Росія може завдати нових ударів по Києву 29 листопада: подробиці" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Російські окупанти 29 листопада можуть завдати масованого ракетного удару по українській столиці та інших містах, щоб вразити критичну інфраструктуру.</p></div>
            </div>
        </a><a href='https://novosti-n.org/ua/news/Zavtra-z-jmovirnistyu-90-v-Ukrayini-sprognozuvaly-novyj-masovanyj-raketnyj-udar-256364'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Завтра з ймовірністю 90%: в Україні спрогнозували новий ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQmV5EU0JanW7WGXqmWBX95UM45RPhgHArZHXUpboQ0BfYVYC2ksJZOOaNE1ve4kwtqy-EXQtU-" alt="Завтра з ймовірністю 90%: в Україні спрогнозували новий ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В Україні у вівторок, 28 листопада, з ймовірністю 90% очікується черговий масований ракетний удар по Україні з боку країни-терориста Росії.</p></div>
            </div>
        </a>
        </Template></>;
}