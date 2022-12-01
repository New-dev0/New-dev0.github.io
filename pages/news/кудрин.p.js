import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Кудрин</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Кудрин"/>
        <meta name="description" content="Trending News about Кудрин" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Кудрин</h1>
            <Image width={800} height={500} src="https://ichef.bbci.co.uk/news/1024/branded_russian/F3F5/production/_127835426_592adcf0-7bd6-4b58-ab81-bb3b74d53b55.jpg" alt="Кудрин"/>
            <h3>Recent News</h3>
            <a href='https://www.bbc.com/russian/news-63811714'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Лоббист и защитник&quot;. Что Кудрин и &quot;Яндекс&quot; могут дать друг ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR1a4AsoFaVBTsaJExViphwHMH9YZ1UMyBkllLhdajAg6P5m0BaBDMqw5BI-vvPNuzWhMYH96Sz" alt="&quot;Лоббист и защитник&quot;. Что Кудрин и &quot;Яндекс&quot; могут дать друг ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Глава Счетной палаты Алексей Кудрин покидает ведомство и, по слухам, уходит в “Яндекс”. Кудрин известен не только как старый соратник Владимира Путина,&nbsp;...</p></div>
            </div>
        </a><a href='https://vnnews.ru/kudrin-ukhodit-iz-politiki-net-on-gotov/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Кудрин уходит из политики? Нет, он готовит трамплин, чтобы в ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQvJSS4MBiREOa43S77KYZn8I4litnO5QaR4om4Z2W_8AFmYex4ohc23uUoBn8Wqs9WuxqjW0TrGw" alt="Кудрин уходит из политики? Нет, он готовит трамплин, чтобы в ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ну вот и все: сегодня Совфед практически единогласно проголосовал за снятие Алексея Кудрина с поста главы Счетной палаты. Вчера, напомню, сенаторы получили&nbsp;...</p></div>
            </div>
        </a><a href='https://www.comnews.ru/content/223304/2022-11-30/2022-w48/poiske-reshenie-deystvitelno-li-aleksey-kudrin-ukhodit-yandeks'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В поиске — решение: действительно ли Алексей Кудрин уходит ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="В поиске — решение: действительно ли Алексей Кудрин уходит ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>29 ноября глава Счетной палаты (СП) Алексей Кудрин сообщил, что уходит из ведомства и подал соответствующее заявление президенту.</p></div>
            </div>
        </a><a href='https://secretmag.ru/enciklopediya/aleksei-kudrin.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Политический тяжеловес и несостоявшийся премьер. Кто такой ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQbGWUynMdwGZXGx4QPXagyJkkObVYu8eD4ddhUmHw-uMcmTCK4UezcasEhG4Dcaj3YcKXVR984" alt="Политический тяжеловес и несостоявшийся премьер. Кто такой ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Алексей Леонидович Кудрин (родился 12 октября 1960 года) — экономист, политик и государственный деятель. Пробыл во власти четверть века, в нулевые отвечал&nbsp;...</p></div>
            </div>
        </a><a href='https://tsargrad.tv/articles/kudrin-protiv-putina-jeks-glava-schetnoj-palaty-metit-vyshe-chem-jandeks_675449'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Кудрин против Путина? Экс-глава Счётной палаты метит выше ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSJwTPHvacMYwsq4XWtKelZNw0Fe373YXWD6jHhJ3xrrZL-n5IDHrpBy3cjeeonXLJ-Lm02vqGc" alt="Кудрин против Путина? Экс-глава Счётной палаты метит выше ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Отставка главы Счётной палаты Алексея Кудрина – самый интересный и загадочный ход Владимира Путина во внутренней политике. Что хотел сказать президент и&nbsp;...</p></div>
            </div>
        </a><a href='https://rt-online.ru/kudrin-osvobozhden-ot-dolzhnosti-glavy-schetnoj-palaty/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Кудрин освобожден от должности главы Счетной палаты</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Кудрин освобожден от должности главы Счетной палаты" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Накануне Кудрин заявил, что подал главе государства Владимиру Путину заявление об уходе со своего поста.</p></div>
            </div>
        </a><a href='https://ru.euronews.com/2022/11/30/kudrin-leaves-audit-chamber'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Кудрин ушел досрочно</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSqeGJVgR6KBhbPje6-vnyP3rCybbEfSJDszraCq2qE35YNGMY0k-5Ueb0hwOMFVcPHks23c8XI" alt="Кудрин ушел досрочно" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Совет Федерации проголосовал за досрочное освобождение Алексея Кудрина от должности председателя Счетной палаты РФ. Прошение об уходе Кудрин подал несколько&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}