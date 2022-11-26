import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Владимир Путин</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Владимир Путин"/>
        <meta name="description" content="Trending News about Владимир Путин" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Владимир Путин</h1>
            <Image width={800} height={500} src="" alt="Владимир Путин"/>
            <h3>Recent News</h3>
            <a href='https://meduza.io/paragraph/2022/11/25/gospitali-zapolneny-na-38-voyna-put-k-ochischeniyu'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Госпитали заполнены на 38%. Война — путь к очищению ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS2cU1fU4fnIiIQqf0ISJ5J-kSUsqC0YdKU3utByK4yedrfte2oq5geluP8XTcfuWOYCZ92DXVJ" alt="«Госпитали заполнены на 38%. Война — путь к очищению ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>«Госпитали заполнены на 38%. Война — путь к очищению» Такими словами Владимир Путин анонсировал День матери. 10:11, 25 ноября 2022. Источник: Meduza.</p></div>
            </div>
        </a><a href='https://www.vedomosti.ru/politics/articles/2022/11/26/952246-putin-pogovoril-s-materyami'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Владимир Путин поговорил с матерями российских военных</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcREQK6azEj38gmKQQcX5DELdHGWUM7GUU3FnoYPaQqXyU7pw_g--3c0eBsZGRJAFagl60eA2o0r" alt="Владимир Путин поговорил с матерями российских военных" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Президент начал с того, что напомнил: послезавтра отмечается День матери, «который наполнен особым, очень добрым содержанием и подчеркивает присущее всем&nbsp;...</p></div>
            </div>
        </a><a href='https://www.severreal.org/a/vladimir-putin-vstretilsya-s-materyami-uchastnikov-voyny-v-ukraine-/32148846.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Владимир Путин встретился с матерями участников войны в ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT29WJmsKlV3RuLNML-9xcokK9MlV7rH0-IQf8oLGaKDnY2OdtUeEStDTsLrxstODARPhmcW6Ns" alt="Владимир Путин встретился с матерями участников войны в ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Встреча прошла в резиденции в Ново-Огарёво под Москвой. Путин сказал, что решил поговорить с матерями военнослужащих, чтобы &quot;из первых уст&quot; услышать их оценки,&nbsp;...</p></div>
            </div>
        </a><a href='https://lentv24.ru/vladimir-putin-vstretilsya-s-materyami-voennosluzashhix.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Владимир Путин встретился с матерями военнослужащих</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRKTMxD21Vd2XMuqWUzXb93SL5C8tfv99X0S2DwIn9jv9KPIoqEV6JcKT8DgnP0zEPtx2__4zsz" alt="Владимир Путин встретился с матерями военнослужащих" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В преддверии Дня матери, который в России отметят 27 ноября, Владимир Путин встретился с женщинами, сыновья которых - мобилизованные, контрактники,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.bfm.ru/news/513746'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Владимир Путин провел встречу с матерями участников ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSytiGoUOsjyRHDjGzUB-uFhU6Y_AAsSAXlanxEa9U6x5QULotRUy6G8z7wOJ8w3Nqrza7wQuFo" alt="Владимир Путин провел встречу с матерями участников ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Встреча была приурочена ко Дню матери, который отмечается в последнее воскресенье ноября, то есть 27 числа. Президент говорил о значении этого праздника,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}