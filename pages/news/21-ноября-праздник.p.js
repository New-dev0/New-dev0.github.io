import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>21 ноября праздник</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,21 ноября праздник"/>
        <meta name="description" content="Trending News about 21 ноября праздник" /></Head><Template>
            <h1 style={{fontSize: "30"}}>21 ноября праздник</h1>
            <Image width={800} height={500} src="https://images.unian.net/photos/2019_04/thumb_files/620_324_1555854776-1310.jpg?1" alt="21 ноября праздник"/>
            <h3>Recent News</h3>
            <a href='https://www.unian.net/lite/holidays/narodnyy-prazdnik-21-noyabrya-2022-obychai-primety-chto-nelzya-delat-12050637.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>21 ноября: какой сегодня народный праздник и что нельзя делать</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ7cdweBcs8g1SAbNQZrfKlYVOtD3qtqmySdEjj8YyYme1WKGqzJS7f1-r0R9XReM_Jp_ZH1c8s" alt="21 ноября: какой сегодня народный праздник и что нельзя делать" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>21 ноября 2022 года отмечается народный праздник Михайлов день. Узнайте, какие обряды проводятся в этот день, что нельзя делать и какие приметы погоды.</p></div>
            </div>
        </a><a href='https://glavcom.ua/ru/news/21-nojabrja-kakoj-sehodnja-prazdnik-primety-i-zaprety-890464.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>21 ноября: какой сегодня праздник, приметы и запреты</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTAzT09-Ub9mdnhY85rw1TsI1U3Y42gi182f5l95Z8_avo0NjQRJdFjDSRalucDizun3OuHiQk7" alt="21 ноября: какой сегодня праздник, приметы и запреты" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В этот понедельник не рекомендуется заниматься тяжелой работой, особенно что-то начинать.</p></div>
            </div>
        </a><a href='https://zn.ua/UKRAINE/mikhajlov-den-znachenie-prazdnika.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Михайлов день: значение праздника</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQiKeq0pt2xl1iWrRQF3DLJKM33t_4m8gkB1OYVTTqJzF8KHzGiPPqwiVtNBPPs9kpOt0T9uiOD" alt="Михайлов день: значение праздника" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>21 ноября христиане восточного обряда отмечают Собор Архангела Михаила, в этот день принято ходить в церковь.</p></div>
            </div>
        </a><a href='https://1plus1.ua/ru/novyny/ake-sogodni-svato-21-listopada-den-arhangela-mihaila-mihajliv-den-so-ne-mozna-robiti'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Какой сегодня праздник — 21 ноября: День архангела Михаила ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSTnRIJhKKFlMMRMi5mbbmK8nzTcz3AgdMi8-OspqZTRWpWlzoA3rdzqmPk4OqTPxWL12A6aiOW" alt="Какой сегодня праздник — 21 ноября: День архангела Михаила ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Какой сегодня праздник 21 ноября: День архангела Михаила, Михайлов день по народному календарю.</p></div>
            </div>
        </a><a href='https://www.rbc.ua/ukr/styler/mihayliv-den-2022-shcho-suvoro-zaboroneno-1668969977.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Михайлов день 2022: что строго запрещено, а что нужно ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT7q8eSbUHfPBLY27SwoL960UdpiSqUfdut2hy084B2qJtHc22GWDx9iGWH17_hvak6MtTQgiYh" alt="Михайлов день 2022: что строго запрещено, а что нужно ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>21 ноября 2022 года украинцы отмечают Собор Архистратига Михаила - важный православный праздник, который имеет свои традиции и запреты.</p></div>
            </div>
        </a><a href='https://focus.ua/lifestyle/537819-21-noyabrya-2022-goda-arhistratiga-mihaila-chto-segodnya-nelzya-delat'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>21 ноября 2022 года: архистратига Михаила - что сегодня нельзя ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS74iM_yRqgUaJIgka7Nhl2R5VApr-bScMO_PR1YWMr8K5cplAJcwVNdIYwAwyb8kn4I2raN0pj" alt="21 ноября 2022 года: архистратига Михаила - что сегодня нельзя ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Сегодня строго-настрого запрещается ссориться, выяснять отношения, осуждать людей, желать зла другим, клеветать, завидовать.</p></div>
            </div>
        </a><a href='https://ntr.city/news/society/110927/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Михайлов день: что можно и нельзя делать 21 ноября</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR02whQVBeHGYjVIf9_Xl33OSD4j9zjjLK3GFaiXauCm9kzENEZhVMryjhHoEK3RApd5RnA5g_P" alt="Михайлов день: что можно и нельзя делать 21 ноября" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>21 ноября православная церковь отмечает важный христианский праздник, именуемый Собор Архистратига Михаила и прочих Небесных Сил бесплотных: Архангелов Гавриила&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}