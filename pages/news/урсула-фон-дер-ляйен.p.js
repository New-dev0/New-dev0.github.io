import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Урсула фон дер Ляйен</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Урсула фон дер Ляйен"/>
        <meta name="description" content="Trending News about Урсула фон дер Ляйен" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Урсула фон дер Ляйен</h1>
            <Image width={800} height={500} src="https://ichef.bbci.co.uk/news/1024/branded_russian/FC29/production/_127835546_p0dkvttk.jpg" alt="Урсула фон дер Ляйен"/>
            <h3>Recent News</h3>
            <a href='https://www.bbc.com/russian/media-63812094'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Глава Еврокомиссии назвала потери Украины в войне, но потом ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTc5xaZCo15YJ_GL93xS8A0YqYRRmtdUjxq3bSawK6zoHJAcakWFf5K0gFwG8DqocSTN5m892rS" alt="Глава Еврокомиссии назвала потери Украины в войне, но потом ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Названные главой Еврокомиссии потери Украины вызвали возмущение в Киеве. Украинские власти говорят, что данные о погибших закрытые, озвучить их могут только&nbsp;...</p></div>
            </div>
        </a><a href='https://www.rbc.ua/ukr/news/es-nazvali-vtrati-ukrayini-viyni-sered-tsivilnih-1669797191.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В ЕС оценили возможные потери Украины в войне среди ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTNglCUTM8S3X3PLe8UnRRBaZFu_lRnC2PtfTXtK4AJFPjNgRXVnDDhnddgzuQRF27bJwpw-ypG" alt="В ЕС оценили возможные потери Украины в войне среди ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В Европейской комиссии оценили потери украинских военных в войне с РФ в 100 тысяч человек, а гражданских в 20 000.</p></div>
            </div>
        </a><a href='https://nv.ua/ukraine/events/poteri-ukrainy-100-tysyach-ursula-fon-der-lyaen-otozvala-zayavlenie-chto-izvestno-poslednie-novosti-50287649.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Оценка фон дер Ляйен и реакция Украины. Главе Еврокомиссии ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTlJh1OZkfR3onzF5WF_JqR50CaF0D6AXMDlRSdHMZFSz32V6VWP7DJzfR1qxsxzORv-8KvCEMB" alt="Оценка фон дер Ляйен и реакция Украины. Главе Еврокомиссии ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Оценка фон дер Ляйен и реакция Украины. Главе Еврокомиссии пришлось отозвать заявление о потерях ВСУ в 100 тыс. человек: что произошло. 30 ноября, 14:20.</p></div>
            </div>
        </a><a href='https://tsn.ua/ru/ato/na-voyne-s-rossiey-ukraina-poteryala-100-tysyach-voennyh-ursula-fon-der-lyayen-2212897.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>На войне с Россией Украина потеряла 100 тысяч военных ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQpJPgoB7RX3g4og_54091r3FdfZNY-QYv7r3Y9oQv0CL2zg2Z-2r-ewyTntA4jtqJiNEGtB-n9" alt="На войне с Россией Украина потеряла 100 тысяч военных ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Глава Еврокомиссии Урсула фон дер Ляйен заявила, что с начала войны Украина потеряла 100 тысяч военных и 20 тысяч гражданских.</p></div>
            </div>
        </a><a href='https://news.liga.net/politics/news/v-es-zayavili-chto-pogibli-svyshe-100-000-boytsov-vsu-danilov-ranee-oproverg-takie-tsifry'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В ЕС заявили, что погибли &quot;свыше 100 000&quot; бойцов ВСУ ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQdSbEGDvwgaxepEBWmPXLIGR5S5b-wxhMIyUII85a8i78qebH2qLbdLvmlUzEwHWtG7ie6icMN" alt="В ЕС заявили, что погибли &quot;свыше 100 000&quot; бойцов ВСУ ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Шестизначную цифру потерь украинских Сил обороны назвала президент Еврокомиссии Урсула фон дер Ляйен. Откуда такие оценки, не сообщила.. война, урсула фон&nbsp;...</p></div>
            </div>
        </a><a href='https://www.apsny.ge/2022/pol/1669843693.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Еврокомиссия выступила с пояснениями по поводу изменения ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Еврокомиссия выступила с пояснениями по поводу изменения ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Как отметила заместитель официального пресс-спикера Еврокомиссии Дана Спинант, первоначальное обращение Урсулы фон дер Ляйен содержало неточности в цифрах. В&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}