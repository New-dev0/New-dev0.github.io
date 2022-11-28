import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Sea King</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Sea King"/>
        <meta name="description" content="Trending News about Sea King" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Sea King</h1>
            <Image width={800} height={500} src="https://donpatriot.news/photos/news/37702.png" alt="Sea King"/>
            <h3>Recent News</h3>
            <a href='https://donpatriot.news/article/u-britaniyi-pidgotuvali-10-ukrayinskih-ekipazhiv-dlya-gelikopteriv-sea-king-minoboroni'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>У Британії підготували 10 українських екіпажів для гелікоптерів ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTmLX1lh5a11KQ6jvhkkjE1adQ1FfC4_LteQyVsamSLmY2yN4LKMOlIz-NDORkZfr9ocGZjUjMw" alt="У Британії підготували 10 українських екіпажів для гелікоптерів ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>У Великій Британії пройшли підготовку 10 українських екіпажів для гелікоптерів Sea King, які Лондон передає Україні. Про підготовку екіпажів повідомило&nbsp;...</p></div>
            </div>
        </a><a href='https://www.pravda.com.ua/news/2022/11/26/7378119/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Британія підготувала 10 українських екіпажів для гелікоптерів ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQxMULcxnaobYV8zy5hMINR-Ly88zT7avGxWRO2w7LKi28i4ao9J-ruvS4ll1QEQgSb6KcC7DrU" alt="Британія підготувала 10 українських екіпажів для гелікоптерів ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>&quot;Велика Британія надасть Збройним силам України гелікоптери Sea King у рамках подальшої підтримки. Королівський флот провів навчання на Sea King для 10 екіпажів&nbsp;...</p></div>
            </div>
        </a><a href='https://www.unian.ua/war/boyovi-vertoloti-sea-king-dlya-zsu-shcho-pro-nih-vidomo-video-12058083.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ЗСУ посиляться бойовими вертольотами Sea King: опубліковано ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTQ6i0qloV6jtQpjyYMfHiGzgcCNjkhUhUP5V6g4YLqXuSotnxVNgUTM8BwFFqwMdlsT6KLsHgH" alt="ЗСУ посиляться бойовими вертольотами Sea King: опубліковано ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Великобританія навчила 10 українських екіпажів вертольотчиків і найближчим часом передасть ЗСУ вертольоти Sea King, повідомили у Міноборони Великобританії.</p></div>
            </div>
        </a><a href='https://www.pravda.com.ua/rus/news/2022/11/26/7378119/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Британия подготовила 10 украинских экипажей для вертолетов ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQxMULcxnaobYV8zy5hMINR-Ly88zT7avGxWRO2w7LKi28i4ao9J-ruvS4ll1QEQgSb6KcC7DrU" alt="Британия подготовила 10 украинских экипажей для вертолетов ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>&quot;Великобритания предоставит Вооруженным силам Украины вертолеты Sea King в рамках дальнейшей поддержки. Королевский флот провел обучение на Sea King для 10&nbsp;...</p></div>
            </div>
        </a><a href='https://mil.in.ua/uk/news/brytaniya-pidgotuvala-10-ukrayinskyh-ekipazhiv-dlya-sea-king/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Британія підготувала 10 українських екіпажів для “Sea King”</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSuBmCL36jE830gvdzVUe7VYKUHJFIdW9TVQ2BJYnSmP39NuwrGTq9Xm7vJ1oz0_0Zq_C_64Erl" alt="Британія підготувала 10 українських екіпажів для “Sea King”" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Лондон надасть Збройним Силам України три вертольоти “Sea King” у рамках своєї постійної підтримки. 23 листопада міністр оборони Бен Воллес розповів, що перша&nbsp;...</p></div>
            </div>
        </a><a href='https://www.unian.net/war/boevye-vertolety-sea-king-dlya-vsu-chto-o-nih-izvestno-video-12058086.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ВСУ усилятся боевыми вертолетами Sea King: опубликовано ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTQ6i0qloV6jtQpjyYMfHiGzgcCNjkhUhUP5V6g4YLqXuSotnxVNgUTM8BwFFqwMdlsT6KLsHgH" alt="ВСУ усилятся боевыми вертолетами Sea King: опубликовано ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Великобритания обучила 10 украинских экипажей вертолетчиков и в ближайшее время передаст ВСУ боевые вертолеты Sea King, сообщили в Минобороны&nbsp;...</p></div>
            </div>
        </a><a href='https://news.liga.net/politics/news/britaniya-podgotovila-10-ekipajey-vsu-dlya-vertoletov-sea-king-video'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Британия подготовила 10 экипажей ВСУ для вертолетов Sea ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQfzhdMgfyd1eVDWXMmRan_ans--kB2Ll8wNPmIxcS7UhEUNBJH4hF_eFl5ZMttvJiWje9_PvGP" alt="Британия подготовила 10 экипажей ВСУ для вертолетов Sea ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Королевский военно-морской флот Великобритании подготовил 10 украинских экипажей для вертолетов Sea King, которые Лондон передаст Украине. Великобритания,&nbsp;...</p></div>
            </div>
        </a><a href='https://news.pn/ru/public/282442'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Британия подготовила 10 экипажей ВСУ для вертолетов Sea King</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQto5-Q1a4dTSXhSvh8sjc7DRDiQmdopFkZUCc0KzheRAPZbBdnnz7BdYLMB3-aZjw-Yl3TaVrc" alt="Британия подготовила 10 экипажей ВСУ для вертолетов Sea King" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Королевский военно-морской флот Великобритании подготовил 10 украинских экипажей для вертолетов Sea King, которые Лондон передаст Украине.</p></div>
            </div>
        </a>
        </Template></>;
}