import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Южноукраинская АЭС</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Южноукраинская АЭС"/>
        <meta name="description" content="Trending News about Южноукраинская АЭС" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Южноукраинская АЭС</h1>
            <Image width={800} height={500} src="https://www.rbc.ua/static/img/_/u/_unian__1__1_1300x820.jpg" alt="Южноукраинская АЭС"/>
            <h3>Recent News</h3>
            <a href='https://www.rbc.ua/ukr/news/usi-energobloki-pivdennoukrayinskoyi-aes-1669209992.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Все энергоблоки Южноукраинской АЭС аварийно остановлены ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQhM58M8TrkuEZHZhFoluN9sAcOS1kxw8dFhdQjE1XrH2eKXCnMh01h8dagBNrUzgV_o2sVMVsE" alt="Все энергоблоки Южноукраинской АЭС аварийно остановлены ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>&quot;Да. Это связано с разрушением сетей. Со станцией все хорошо. Некуда выдавать электроэнергию&quot;, - отметил он. Напомним, Россия устроила очередной ракетный террор&nbsp;...</p></div>
            </div>
        </a><a href='https://www.unian.net/economics/energetics/yuzhnoukrainskaya-aes-vse-energobloki-ostanovleny-v-chem-prichina-12054801.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Южноукраинская АЭС аварийно остановлена: стала известна ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSltpqS_IQzt3WMvtxp5GHksKXXwKGiOsVVHGNBRVtjmw-EmICuDX627onct4DuTE6WkDWultTI" alt="Южноукраинская АЭС аварийно остановлена: стала известна ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В Николаевской области аварийно остановлены все энергоблоки Южноукраинской атомной электростанции (АЭС), сообщил спикер &quot;Энергоатома&quot; Леонид Олейник.</p></div>
            </div>
        </a><a href='https://focus.ua/ukraine/538262-prosim-ne-panikovat-na-yuzhnoukrainskiy-aes-avariyno-ostanovili-energobloki'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Просим не паниковать&quot;: на Южноукраинский АЭС аварийно ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQxGwYUQrazQszFc1hVq0x8U3FkQOXH3RJy1iFmy9957lY7sZ3qAimnpbxOgc2YG_TTA67y8G2i" alt="&quot;Просим не паниковать&quot;: на Южноукраинский АЭС аварийно ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>По информации журналистов. остановка произошла из-за понижения частоты в сети. Related video. На Южноукраинской АЭС были аварийно остановлены энергоблоки.</p></div>
            </div>
        </a><a href='https://zn.ua/ECONOMICS/juzhnoukrainskaja-aes-ekstrenno-otkljuchila-enerhobloki.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Южноукраинская и Хмельницкая АЭС экстренно отключили ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSkmGcYZIpJI7GCwJE2BOFXlblkJHyT5YjBiTgQ2CUaSQGjAYv27vjp-4h_d9GgIUWXixvN7O-7" alt="Южноукраинская и Хмельницкая АЭС экстренно отключили ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В ходе российской ракетной атаки на энергетические объекты Украины аварийно остановили свою работу энергоблоки Южноукраинской атомной электростанции,&nbsp;...</p></div>
            </div>
        </a><a href='https://telegraf.com.ua/ukraina/2022-11-23/5723824-na-odnoy-iz-ukrainskikh-aes-avariyno-ostanovleny-energobloki-chto-izvestno'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>На украинских АЭС аварийно остановлены энергоблоки: что ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQAP0oYw_NuQ9paf6eOMZt3hLQktniz5ccE5bAkv75q-xo2rkPY5Rz4YVnK8A3T3VgjjDmi1dkk" alt="На украинских АЭС аварийно остановлены энергоблоки: что ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Эту же информацию сообщил народный депутат Украины Алексей Гончаренко в своем Telegram-канале. Позднее в Энергоатоме подтвердили отключение энергоблоков Южно-&nbsp;...</p></div>
            </div>
        </a><a href='https://www.stopcor.org/section-uanews/news-raketnij-teror-rf-zupinilis-hmelnitska-ta-pivdennoukrainska-aes-23-11-2022.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ракетный террор россии: остановились Хмельницкая и ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTM8WHOclj857nocj2sb091CVa4xQ06x4I_6JxDLK8SBbTkYAIkfFhPFQ78rLZULbNWSQpHvU0S" alt="Ракетный террор россии: остановились Хмельницкая и ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Одни из крупнейших атомных электростанций Украины остановились. Все из-за ракетных обстрелов россии. Миллионы украинцев снова без воды, света и тепла.</p></div>
            </div>
        </a><a href='https://life.ru/p/1540931'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Блогер Шарий сообщил об аварийной остановке энергоблоков ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQTlSme96l5p3fTluzA4M0TTopDSeAA9sDabjEPywI-kqY7tAIKEIButPYCTJfBtUxaGCcyy7Bm" alt="Блогер Шарий сообщил об аварийной остановке энергоблоков ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Энергоблоки Южноукраинской АЭС были аварийно остановлены. Об этом сообщает украинский оппозиционер и блогер Анатолий Шарий.</p></div>
            </div>
        </a>
        </Template></>;
}