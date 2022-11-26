import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Война</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Война"/>
        <meta name="description" content="Trending News about Война" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Война</h1>
            <Image width={800} height={500} src="https://zn.ua/img/article/5201/31_main-v1669430082.jpg" alt="Война"/>
            <h3>Recent News</h3>
            <a href='https://zn.ua/UKRAINE/nachalas-zimnjaja-vojna-osint-analitik-informnapalm-objasnili-umenshenie-poter-kafirov-na-fronte.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Началась «зимняя война»: OSINT-аналитик InformNapalm ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTayI4_mfq1X7bzVSUhZGZAeNRGtII8mLixOUvuEow0vcxhxXqI59GtUzn8DsW0_tksXIr4L-kn" alt="Началась «зимняя война»: OSINT-аналитик InformNapalm ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Украинская армия ежедневно уничтожает один пехотный батальон россиян, чтобы не дать им собрать «ударный кулак». Началась «зимняя война»: OSINT-аналитик&nbsp;...</p></div>
            </div>
        </a><a href='https://opinions.glavred.info/chem-zakonchitsya-vtoraya-holodnaya-voyna-10428200.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Чем закончится Вторая холодная война</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSn5PiU-480_9rZ4a9YxkooZYoNaGwloFgbjsnsp-TRI5wdnFXvuLpHcP_YrpzH5MJSZDYtaZ9C" alt="Чем закончится Вторая холодная война" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Задачи Кремля не предполагают мирных путей, а сдерживание его агрессивных устремлений невозможно мирным путём.</p></div>
            </div>
        </a>
        </Template></>;
}