import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Хмельницькобленерго</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Хмельницькобленерго"/>
        <meta name="description" content="Trending News about Хмельницькобленерго" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Хмельницькобленерго</h1>
            <Image width={800} height={500} src="https://ye.ua/images/news/_Na_Hmelnichchini_diyit_grafiki_pogodinnih_ta_avariynih_vidklyichen___Hmelnickoblenergo_1_2022_11_16_04_24_48.jpg" alt="Хмельницькобленерго"/>
            <h3>Recent News</h3>
            <a href='https://ye.ua/syspilstvo/61607_Na_Hmelnichchini_diyit_grafiki_pogodinnih_ta_avariynih_vidklyichen___Hmelnickoblenergo.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>На Хмельниччині діють графіки погодинних та аварійних ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT9mtGzRA0tRfx3CYnngT18-TWT078ISGNbqQQjzS53Jd-3QxM3UfY3X8b_tLobMrEn3lcKgzSe" alt="На Хмельниччині діють графіки погодинних та аварійних ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Мешканцям області варто готуватися до частих вимкнень електроенергії. Внаслідок вчорашнього масованого ракетного удару ситуація в енергосистемі критична.</p></div>
            </div>
        </a><a href='https://vsim.ua/Podii/budte-gotovi-do-chastih-vidklyuchen-elektriki-po-4-godini-i-bilshe--hm-11711386.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>“Будьте готові до частих відключень електрики, по 4 години і ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSpD7nW58chcMmj-UQNkT5orIGfGoTdS98MApxFLjF2vBVqGYtnCst2BhaDiY2apEYY00CBn5TY" alt="“Будьте готові до частих відключень електрики, по 4 години і ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>[16:11:2022] “Будьте готові до частих відключень електрики, по 4 години і більше”, — Хмельницькобленерго ✓Новини від vsim.ua ✓ Тільки свіжі новини&nbsp;...</p></div>
            </div>
        </a><a href='https://www.xm-inside.com/news/buty-gotovymy-do-chastyh-vymknen-svitla-po-4-godyny-i-bilshe-hmelnyczkoblenergo/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Бути готовими до частих вимкнень світла по 4 години і більше ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQhSD8_kmiVJY1kb2vZrRUsZJWcsobUWknyqbdLI7ZLHf4PvUZDjKQe-1Awd4Rv6a5_D0NVJUeo" alt="Бути готовими до частих вимкнень світла по 4 години і більше ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Внаслідок масованого ракетного удару ситуація в енергосистемі критична. Наразі на Хмельниччині запроваджено графіки аварійних та погодинних відключень.</p></div>
            </div>
        </a><a href='https://podillyanews.com/2022/11/16/avarijni-ta-pogody-nni-meshkantsyam-hmel-ny-chchy-ny-radyat-gotuvaty-sya-do-rizny-h-vy-div-vidklyuchen-svitla/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Аварійні та погодинні: мешканцям Хмельниччини радять ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTPBOTCjNVa35BeYq7ecWvxEtMOl38grvJaQaw9I_uzzMMb7n6c1SHXqL3XzpQoTvdqngv0bRIw" alt="Аварійні та погодинні: мешканцям Хмельниччини радять ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>У &quot;Хмельницькобленерго&quot; повідомили, в якому режимі отримуватимуть електроенергію мешканці області найближчим часом.</p></div>
            </div>
        </a><a href='https://ngp-ua.info/2022/11/61404'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Жителям Хмельниччини слід бути готовими до вимкнень ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQhSD8_kmiVJY1kb2vZrRUsZJWcsobUWknyqbdLI7ZLHf4PvUZDjKQe-1Awd4Rv6a5_D0NVJUeo" alt="Жителям Хмельниччини слід бути готовими до вимкнень ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Внаслідок масованого ракетного удару, ситуація в енергосистемі критична. Наразі на Хмельниччині запроваджено графіки як аварійних відключень,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}