import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Гиркин</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Гиркин"/>
        <meta name="description" content="Trending News about Гиркин" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Гиркин</h1>
            <Image width={800} height={500} src="https://gdb.currenttime.tv/008e0000-0aff-0242-b6f7-08dac89c1b6c_cx0_cy10_cw0_w1200_r1.jpg" alt="Гиркин"/>
            <h3>Recent News</h3>
            <a href='https://www.currenttime.tv/a/32135319.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Приговор по делу МН17: Гиркин, Дубинский и Харченко получили ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRDb8tyZCwx7D0fpGNpDT7-B61QQTVsxXL1VDjmMviq68y6uHSooMQiwArToJTcKA7iYxM9U82O" alt="Приговор по делу МН17: Гиркин, Дубинский и Харченко получили ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Окружной суд Гааги 17 ноября признал Игоря Гиркина (Стрелкова), Сергея Дубинского и Леонида Харченко виновными в уничтожении &quot;Боинга&quot; MH17 над Донбассом в&nbsp;...</p></div>
            </div>
        </a><a href='https://www.vedomosti.ru/politics/articles/2022/11/17/950867-dela-malaziiskogo-mh17'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Суд в Гааге признал Гиркина, Дубинского и Харченко виновными ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR0x_xcJfrZzlMCyRIkqnU1FZfzmPYNCB3pbap5uyn-Evt7wU8fCUR3hovAdBWd2fvXLrWY60DY" alt="Суд в Гааге признал Гиркина, Дубинского и Харченко виновными ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Суд в Гааге после начала оглашения приговора по уголовному делу о сбитом в небе над Украиной Boeing 777, который следовал рейсом MH17 из Амстердама в&nbsp;...</p></div>
            </div>
        </a><a href='https://www.eurointegration.com.ua/rus/news/2022/11/17/7150855/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Суд Гааги: &quot;Гиркин виновен в убийстве 298 раз&quot;, один из ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT2M4JKFVGN6K9kupNsa7fsXdeXtAZIx3SMJ2auEeXxFjnEWloIJpC2aOKc7F7BR3mOcUnAhxPQ" alt="Суд Гааги: &quot;Гиркин виновен в убийстве 298 раз&quot;, один из ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Окружной суд Гааги, рассматривающий дело о сбитии авиалайнера MH17, признал виновными в сбитии самолета Игоря Гиркина, а также подчиненных ему боевиков&nbsp;...</p></div>
            </div>
        </a><a href='https://v1.ru/text/incidents/2022/11/17/71824826/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Суд Гааги заочно приговорил Гиркина и еще двух человек к ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTu8PEUqooJbKnUn89ALqwldlZJVaKT81U9Q1_NtL5MXtKjTzK2azGDdACxz8Etf6G9mJXwkaWs" alt="Суд Гааги заочно приговорил Гиркина и еще двух человек к ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Они признаны виновными в уничтожении самолета MH17 и гибели 298 пассажиров.</p></div>
            </div>
        </a><a href='https://gordonua.com/news/mh17crash/sud-priznal-girkina-dubinskogo-pulatova-i-harchenko-otvetstvennym-za-katastrofu-mh17-1636562.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Суд признал Гиркина, Дубинского и Харченко ответственными ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSIkEoIBFXoH_e4Gk7E51G53RRCuIA2v8TEKQOcwGOhK3K2FkMijK3f9YHuFWxTCxXbjW-qpT3I" alt="Суд признал Гиркина, Дубинского и Харченко ответственными ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Окружной суд Гааги на заседании 17 ноября признал россиян Игоря Гиркина, Сергея Дубинского и украинца Леонида Харченко ответственными за катастрофу MH17.</p></div>
            </div>
        </a><a href='https://meduza.io/feature/2022/11/17/sud-v-niderlandah-priznal-vinovnymi-igorya-strelkova-i-esche-dvuh-figurantov-dela-o-krushenii-boinga-v-donbasse-chetvertyy-obvinyaemyy-opravdan-glavnoe'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Суд в Нидерландах признал виновными Игоря Стрелкова и еще ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRJYseOSWSdbNICtIunPk1Bq-sEgYphz2hW1y1_htv21hbEvPxpsehbGHkVc1ekEOF-v2XCZ-R1" alt="Суд в Нидерландах признал виновными Игоря Стрелкова и еще ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Суд в Нидерландах выносит приговор четверым обвиняемым по делу о крушении рейса MH17 авиакомпании Malaysia Airlines в Донецкой области в 2014 году. Boeing 777&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}