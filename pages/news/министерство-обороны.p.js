import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Министерство обороны</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Министерство обороны"/>
        <meta name="description" content="Trending News about Министерство обороны" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Министерство обороны</h1>
            <Image width={800} height={500} src="https://img.pravda.com/images/doc/1/3/13ae996-hinare690.jpg" alt="Министерство обороны"/>
            <h3>Recent News</h3>
            <a href='https://www.pravda.com.ua/rus/news/2022/11/20/7377161/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Министр обороны Новой Зеландии впервые в истории посетил ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRUI-HMpC-HEpU25InFSSDqIDzdmyL6AfOYjqR8J0Fk9SioquF-tTs4l0HqtAFbRYR0bH2I9H04" alt="Министр обороны Новой Зеландии впервые в истории посетил ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Министр обороны Новой Зеландии Пини Хенаре встретился с министром обороны Украины Алексеем Резниковым – о чем они говорили.</p></div>
            </div>
        </a><a href='https://azertag.az/ru/xeber/Ministerstvo_oborony_predstavilo_ezhenedelnyi_obzor_-2380769'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Министерство обороны представило еженедельный обзор</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTpaX3vAXVKra1LnATkTq9E3K0bkLniyTAyWTB6hRlcGgMBQddKYScgB7gx3YUE3KHQqnzM3fO7" alt="Министерство обороны представило еженедельный обзор" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Министерство обороны Азербайджанской Республики представило видеоролик, подготовленный на основе информации, опубликованной на прошлой неделе.</p></div>
            </div>
        </a><a href='https://www.ukrinform.ru/rubric-ato/3618315-ministr-oborony-novoj-zelandii-vpervye-v-istorii-pribyl-v-ukrainu.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Министр обороны Новой Зеландии впервые в истории прибыл в ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSNlryjozOH5X8lo2QHfyyYQYOUXvpX-joRIG4lk7DS_2mtSBii8cHaAW-Y9f_gwhG-Tbx8CvsG" alt="Министр обороны Новой Зеландии впервые в истории прибыл в ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Министр обороны Украины Алексей Резников провел встречу с министром обороны Новой Зеландии Пини Хенаре. — Укринформ.</p></div>
            </div>
        </a><a href='https://korrespondent.net/ukraine/4536912-kyev-posetyl-mynystr-oborony-novoi-zelandyy'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Киев посетил министр обороны Новой Зеландии</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ3NYM5ifGTZE4iY2sC1GB4f_2VBHnIyPqBR0CoxoVKCz4lipfm1uhbmd4EJFnNpSqFkLZOhfrE" alt="Киев посетил министр обороны Новой Зеландии" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Пини Хенаре встретился с Алексеем Резниковым и заверил в непоколебимой поддержке Украины .</p></div>
            </div>
        </a><a href='https://ru.interfax.com.ua/news/general/873376.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Министр обороны Новой Зеландии посетил Киев</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTFnqa9Y7IqzXgg7I3vfxIwHyNeBGLPQ-W7dtQ76IoFyqvOF3cGdmkcuxXQdulFJLuUB4uQvCae" alt="Министр обороны Новой Зеландии посетил Киев" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Министр обороны Новой Зелендии Пини Хенаре завершил свой официальный визит в украинскую столицу, где он встретился с главой украинского оборонного ведомства&nbsp;...</p></div>
            </div>
        </a><a href='https://gordonua.com/news/politics/ministr-oborony-novoy-zelandii-posetil-kiev-i-vstretilsya-s-reznikovym-1636971.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Министр обороны Новой Зеландии посетил Киев и встретился с ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTzs-cGAvO5j3V24lqz0MYBWWNvf34WuuJBzytOzJ7GkpXkDrpU49vVTZZPhfFIyqNWCLfYmCWk" alt="Министр обороны Новой Зеландии посетил Киев и встретился с ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>NEWS &middot; has visited Ukraine and Poland, holding talks with his Ministerial counterparts.</p></div>
            </div>
        </a><a href='https://tsn.ua/ru/ato/ministr-oborony-novoy-zelandii-vpervye-posetil-ukrainu-i-vstretilsya-s-reznikovym-o-chem-govorili-2205751.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Министр обороны Новой Зеландии впервые посетил Украину и ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRBgA26OrRU8XCrnGWo2qLzHCcr6XuItKLNmbwpvIAzaOoez-m0ufirj1z4MIf9mci-X7l4tghy" alt="Министр обороны Новой Зеландии впервые посетил Украину и ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Министр обороны Новой Зеландии в Киеве почтил память погибших украинских защитников и провел переговоры с Алексеем Резниковым.</p></div>
            </div>
        </a><a href='https://zn.ua/UKRAINE/ministr-oborony-novoj-zelandii-vpervye-pobyval-v-ukraine-obeshchal-pomoshch-v-obuchenii-voennykh-i-razminirovanii.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Министр обороны Новой Зеландии впервые побывал в Украине ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQM-Bge6KxptxYv0cux4bFXCreB7OYF7slEn6wlhFAI7zm_-N-p5gF-fPc-HdkpLEl_pCinIR1m" alt="Министр обороны Новой Зеландии впервые побывал в Украине ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Кроме Украины, Пини Хенаре посетил Польшу, где встретился с польским министром национальной обороны Мариушем Блащаком. Министр обороны Новой Зеландии&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}