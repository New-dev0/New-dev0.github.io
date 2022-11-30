import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Наталья Стешенко</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Наталья Стешенко"/>
        <meta name="description" content="Trending News about Наталья Стешенко" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Наталья Стешенко</h1>
            <Image width={800} height={500} src="https://cdn.iportal.ru/news/2015/social/9e5335bdca95c6b8065127aa4a3eb2.png" alt="Наталья Стешенко"/>
            <h3>Recent News</h3>
            <a href='https://www.fontanka.ru/2022/11/29/71854682/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В Театре Луны предположили, от чего могла умереть актриса ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQSEXSW48DM27mo8Bn4gQnqyeYXAY899-opIXMfiD_pNk7C3aOPnO1b2Hiq6ll-b3GkTQjLbxbC" alt="В Театре Луны предположили, от чего могла умереть актриса ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Смерть 37-летней актрисы Театра Луны Наталии Стешенко (Семаго) не носит криминальный характер. Об этом 29 ноября сообщил - Происшествия - 29 ноября 2022&nbsp;...</p></div>
            </div>
        </a><a href='https://riamo.ru/article/601445/umerla-aktrisa-teatra-luny-natalya-steshenko'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Умерла актриса театра Луны Наталья Стешенко</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRmNqTxEb3WS2eECt_35QqjM5OK3dDuHEzOeRI9fmms_aoQwCiOCqPbaolVYU432V9S0FHEw80" alt="Умерла актриса театра Луны Наталья Стешенко" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>По словам Заславского, о смерти женщины ему сообщил супруг актрисы, продюсер Владимир Семаго. Ректор ГИТИСа назвал Стешенко «молодой, красивой и талантливой». «&nbsp;...</p></div>
            </div>
        </a><a href='https://www.starhit.ru/novosti/nazvana-prichina-smerti-37-letnei-aktrisy-teatra-luny-natalii-steshenko-851965/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Названа причина смерти 37-летней актрисы Театра Луны ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQEnhmp3wH7aWKYo1r6oa4UjO-tBCvRjveh9jjop4uy-jwPMbT0OmzCBb-Q9AxWxZZdeWQVHMrF" alt="Названа причина смерти 37-летней актрисы Театра Луны ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>28 ноября актрису обнаружили без сознания в собственной квартире. Медики сразу заявили — смерть Наталии не носит насильственный характер.</p></div>
            </div>
        </a><a href='https://bloknot.ru/chp/proisshestviya-chp/v-moskve-pri-stranny-h-obstoyatel-stvah-skonchalas-miss-kazahstan-2000-1021622.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В Москве при странных обстоятельствах скончалась «Мисс ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS7cM9JRWIRE5W3cqRvApGddhn82NSg6OIi4dhEUBJpLNRveQlVcAXWn3WenvySHUslNiD8c4_D" alt="В Москве при странных обстоятельствах скончалась «Мисс ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Тело 37-летней актрисы Натальи Стешенко обнаружили в ее квартире. В Москве умерла известная актриса театра и кино, «Мисс Казахстан 2000» Наталья Стешенко.</p></div>
            </div>
        </a><a href='https://m.47news.ru/articles/222566/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Найдена мертвой 37-летняя актриса Наталья Стешенко ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSjPAm2_8bcwA2WTDh8RkROYBMrNMs5VVRG-sbvnN94U9vDPOgYSzSJukPsoZZEiYnFHExcJYRl" alt="Найдена мертвой 37-летняя актриса Наталья Стешенко ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Актриса театра Луны Наталья Стешенко скончалась в возрасте 37 лет. Она известна по ролям в сериалах &quot;Лига обманутых женщин&quot; и &quot;Инспектор Купер&quot;.</p></div>
            </div>
        </a><a href='https://www.vokrug.tv/article/show/16697480361/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Стало известно, от чего скончалась 37-летняя актриса Наталия ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTO95obgr2BWx_NBa0ZGZcQ-F0nHJKkEJJ26P5ZaGWZ1vjQsPwLIZpGcsDKi88t62GETB2JxErA" alt="Стало известно, от чего скончалась 37-летняя актриса Наталия ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>28 ноября не стало Натальи Стешенко. Ее десятилетний сын, увидев, что мама лежит без сознания, обратился за помощью к соседям. Те вызвали скорую помощь,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.eg.ru/showbusiness/2789762-kak-jila-aktrisa-nataliya-steshenko/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Как жила умершая при загадочных обстоятельствах Наталия ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT96j9-N4yD8O0lRxBpo7rDclCB4itZZ4DLCri829SV2LmnyWff69mJgewNxp1yLxF4r6jBH_j0" alt="Как жила умершая при загадочных обстоятельствах Наталия ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>28 ноября прервалась жизнь талантливой и популярной актрисы театра и кино Наталии Стешенко. До своего 38-летия выпускница актерского факультета ВГИКа не&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}