import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Соединенные Штаты Америки</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Соединенные Штаты Америки"/>
        <meta name="description" content="Trending News about Соединенные Штаты Америки" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Соединенные Штаты Америки</h1>
            <Image width={800} height={500} src="" alt="Соединенные Штаты Америки"/>
            <h3>Recent News</h3>
            <a href='https://nomad.su/?a=3-202212080029'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Казахстан и Соединенные Штаты Америки подвели итоги года ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Казахстан и Соединенные Штаты Америки подвели итоги года ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Состоялось очередное заседание Комиссии по расширенному стратегическому партнерству (КРСП) под со-председательством Первого заместителя министра иностранных&nbsp;...</p></div>
            </div>
        </a><a href='https://ru.usembassy.gov/ru/a-proclamation-on-national-pearl-harbor-remembrance-day-2022-ru/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Прокламация президента США: Национальный день памяти ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR0AhJKaP437GTwebZ7XumHHHSOWEGQy2yXyzuEoUaOnx8m8qMRrJxlBen6IDD_hTutgLG8CyEk" alt="Прокламация президента США: Национальный день памяти ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>После пережитой трагедии эти храбрые женщины и мужчины — Величайшее поколение — ответили на призыв защищать свободу, справедливость и демократию в Тихом океане,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.pravda.com.ua/rus/news/2022/12/9/7379971/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>США ввели санкции против десятков компаний за торговлю ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSGXPFu8hpwq0FKud97YhRFjxzccCq7Xoig2IXsCKgt-ROfTQ80meRqeQR4STJYKmWRYbaVoUvu" alt="США ввели санкции против десятков компаний за торговлю ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Дословно: &quot;В партнерстве с высокопоставленными чиновниками IRGC-QF сеть компаний Аяна способствовала поставкам иранской нефти в Китайскую Народную Республику и&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}