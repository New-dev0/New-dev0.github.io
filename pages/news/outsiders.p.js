import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Outsiders</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Outsiders"/>
        <meta name="description" content="Trending News about Outsiders" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Outsiders</h1>
            <Image width={800} height={500} src="https://cyber.sports.ru/dynamic_images/post/309/350/8/share/03b442_no_text.jpg" alt="Outsiders"/>
            <h3>Recent News</h3>
            <a href='https://cyber.sports.ru/tribuna/blogs/notime/3093508.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Outsiders – чемпионы мейджора! Мы до сих пор не верим</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSNbwOZeM5SPA0CsN-6URmVTkqHWXZBPdxe4lHmJUjkoe4x5XaIf6HTklnw0wTUgDcLYpMzfoiU" alt="Outsiders – чемпионы мейджора! Мы до сих пор не верим" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Да потому что российская команда, которую и близко не считали фаворитами, стала первой на главном турнире в CS. Парни выиграли 500 тысяч баксов и навсегда&nbsp;...</p></div>
            </div>
        </a><a href='https://dtf.ru/esport/1445899-rossiya-24-vypustila-novost-o-pobede-outsiders-na-iem-rio-major-2022-po-cs-go-s-fotografiey-polskogo-sostava'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Россия 24» выпустила новость о победе Outsiders на IEM Rio ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR7Y2JeyiQoRDVLF5QVorBF6zTGqeouUv2NP5cyAIuYSjtH8YJ54qbv0OEZcVFdmYsUlwdHI-_K" alt="«Россия 24» выпустила новость о победе Outsiders на IEM Rio ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>«Россия 24» также выпустила небольшой репортаж о победе российской команды на IEM Rio Major 2022. Видео&nbsp;...</p></div>
            </div>
        </a><a href='https://ura.news/news/1052602748'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Российская команда Outsiders выиграла главный ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRx4XM6J3i47uKOOP8-t08S4g8KHH7FrwDP0P84xKF9JiLczbJGx9AZG8xauwVpZfP6wFoOPvW5" alt="Российская команда Outsiders выиграла главный ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>«Российская киберспортивная команда VirtusPro (Outsiders) стала победителем чемпионата мира IEM Rio Major 2022 по CS:GO», — передает Sport24. По информации&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ixbt.com/news/2022/11/14/outsiders-virtus-pro-cs-go.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Российские киберспортсмены из Outsiders (Virtus.pro) выиграли ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRjLSDZmHrUM1DwPE5U_MBUmrxBMeEt6gZcvbkWMPzzhZFJCKp8InEbrNgkKryln89GHCrQmupu" alt="Российские киберспортсмены из Outsiders (Virtus.pro) выиграли ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Российская команда Outsiders выиграла главный турнир по Counter-Strike: Global Offensive: Intel Extreme Masters Major с призовым фондом 1,25 млн долларов&nbsp;...</p></div>
            </div>
        </a><a href='https://3dnews.ru/1077289/rio-major-final-winner-outsiders'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Российская Outsiders стала чемпионом IEM Rio Major 2022 по СS ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQTamzXWIt3THjhkZl9kcM8RUwa7a-mzAzTBB1crxbcydAtBTX-mpF3yqftJWoO5VkeCaZX6sBT" alt="Российская Outsiders стала чемпионом IEM Rio Major 2022 по СS ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Сегодня, 13 ноября в Рио-де-Жанейро состоялся финал IEM Rio Major 2022 —пожалуй, самого важного турнира второй половины текущего года по Counter Strike:&nbsp;...</p></div>
            </div>
        </a><a href='https://www.vseprosport.ru/news/2022/11/13/outsiders-heroic-prognoz-na-match-csgo-13-nojabrja-2022-goda'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Outsiders — Heroic: прогноз на матч IEM Rio Major</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRiP09H_j9C3OWm_9OJmcEjoFGLJOkBkqK4QQvQWXCN6k-uBQsQq89X49oMm2y04DJWIDItBnzS" alt="Outsiders — Heroic: прогноз на матч IEM Rio Major" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Прогноз и ставка на Outsiders — Heroic + фрибет до 10000, статистика, коэффициенты. Сегодня в 21:00. 13 ноября состоится финал мейджора,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}