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
            <Image width={800} height={500} src="https://www.dsnews.ua/static/storage/thumbs/1200x630/7/9e/137d289e-adc515c44965c6a164bfecf2eae329e7.jpg?v=7595_1" alt="Євген Карась"/>
            <h3>Recent News</h3>
            <a href='https://www.dsnews.ua/ukr/politics/okupanti-gotuyut-na-29-listopada-masovaniy-obstril-ukrajini-yevgen-karas-28112022-470119'>
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
        </a><a href='https://www.depo.ua/ukr/war/rosiya-gotue-na-29-listopada-masovaniy-obstril-ukraini-karas-202211281444142'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Росія готує на 29 листопада масований обстріл України, — Карась</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRcfc8g_xskXYTZgXYylwGIf2LHGKKrTWBAGncSHh1btShu4145g5ujouNHFV9L4P2-cYvlmvkW" alt="Росія готує на 29 листопада масований обстріл України, — Карась" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Про це у своєму Telegram-каналі повідомив відомий український військовослужбовець, лідер організації C14 (зараз &quot;Основа майбутнього&quot;) Євген Карась, передає Depo&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}