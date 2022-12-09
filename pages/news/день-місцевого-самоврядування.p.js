import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>День місцевого самоврядування</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,День місцевого самоврядування"/>
        <meta name="description" content="Trending News about День місцевого самоврядування" /></Head><Template>
            <h1 style={{fontSize: "30"}}>День місцевого самоврядування</h1>
            <Image width={800} height={500} src="https://chernigiv-rada.gov.ua/storage/images/19/08/04/17/29c735101ec86f0f38da17626e153310-medium66.jpg" alt="День місцевого самоврядування"/>
            <h3>Recent News</h3>
            <a href='https://chernigiv-rada.gov.ua/news/id-55570/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>День місцевого самоврядування України: у Чернігові відзначили ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTSJEO-c0x5Q3Q31V8tGjQOn4s77NJDtr-IaG4NMnpaD4gUUYhbtzynMHPG_AW3HxzA_qvlRUOw" alt="День місцевого самоврядування України: у Чернігові відзначили ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Чим швидше ми будемо реагувати на питання громади, тим якісніше буде наша робота, – Владислав Атрошенко - Чернігівська міська рада.</p></div>
            </div>
        </a><a href='https://proslav.info/u-pereyaslavi-vidznachyly-den-misczevogo-samovryaduvannya-fotoreportazh/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>У Переяславі відзначили День місцевого самоврядування ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSV2HTilfbc2zAY2vrLLKVQAykNVfPGBruhla5uY5wAqgvyYXtoIfY72IKhsv2sPphKZxoZ2EP1" alt="У Переяславі відзначили День місцевого самоврядування ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Сьогодні в Україні відзначають свято тих, хто забезпечує функціонування держави на рівні громад: чиновників різних рівнів, голів міст та адміністрацій,</p></div>
            </div>
        </a><a href='https://olexrada.gov.ua/prestsentr/news/strong-u-7-grudnya-den-mistsevogo-samovryaduvannya-u-strong.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>7 грудня – День місцевого самоврядування - Олександрійська ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRrD00WDbPyD3AsstgOuZ1uHpBQ6Et7xkE-c1k2cxv5wDU6UfyfH37ivBNty9wKE3EQPqUIRmLw" alt="7 грудня – День місцевого самоврядування - Олександрійська ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В умовах війни ми об&#39;єдналися і тримаємо свій фронт. Злагоджена співпраця депутатського корпусу, виконавчих органів ради та громадськості дозволяє підтримувати&nbsp;...</p></div>
            </div>
        </a><a href='https://lv.tax.gov.ua/media-ark/news-ark/638287.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Сьогодні в Україні відзначається День місцевого самоврядування</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRZQYFCK1xnBDTCsjoJaAsaDmSxwdqe6x5CP7t5FT44ej2O94A1ODMtnsLoB6I_csFbi43JNqOl" alt="Сьогодні в Україні відзначається День місцевого самоврядування" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>На успішне наповнення місцевих бюджетів значним чином впливає координація роботи та тісна взаємодія органів місцевого самоврядування та органів державної&nbsp;...</p></div>
            </div>
        </a><a href='https://irt.pl.ua/news/27590/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>У Галереї мистецтв відзначили День місцевого самоврядування</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ9pcuY2b0Wdg-GJM8zMuK5_fT1EOgXm91k8TreZ1v8uDC0lvYl0FFi5URXBDdGE2vOwrY-wDpL" alt="У Галереї мистецтв відзначили День місцевого самоврядування" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Сьогодні в Україні відзначають День місцевого самоврядування. Вітають тих, хто працює на благо територіальних громад, відстоює їхні запити та інтереси.</p></div>
            </div>
        </a>
        </Template></>;
}