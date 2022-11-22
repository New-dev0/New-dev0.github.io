import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Москва пожар</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Москва пожар"/>
        <meta name="description" content="Trending News about Москва пожар" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Москва пожар</h1>
            <Image width={800} height={500} src="https://www.rbc.ua/static/img/i/m/imgonline_com_ua_resize_aqokclnnz1ar_1300x820.jpg" alt="Москва пожар"/>
            <h3>Recent News</h3>
            <a href='https://www.rbc.ua/ukr/news/odniy-vezh-moskva-siti-provoditsya-evakuatsiya-1669062348.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В Москве очередной пожар. Эвакуируют один из небоскребов ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS_CNCD6ZGYTZnT7qJkjUmJXOma2uDe9RmY7devgPfPonV9WyMpEl-c_H3ctCeR7yjAbuQHlJ4x" alt="В Москве очередной пожар. Эвакуируют один из небоскребов ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Одну из башен Москва-Сити начали эвакуировать после того, как в соседнем здании вспыхнул пожар.</p></div>
            </div>
        </a><a href='https://focus.ua/world/537990-v-moskve-snova-vspyhnul-pozhar-zagorelas-mnogoetazhka-zhiteley-evakuirovali-video'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В Москве снова вспыхнул пожар: загорелась многоэтажка ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTVGEeAN10M1LBjQ05EnT_OL8muR6MHEWagOZ_SxAhNSkMAp_7jzehGEUlh-MGfCOAXGNU7ahlo" alt="В Москве снова вспыхнул пожар: загорелась многоэтажка ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Возгорание началось в одной из квартир жилого комплекса рядом с бизнес-центром «Москва-Сити», сообщили в российском МЧС.</p></div>
            </div>
        </a><a href='https://fakty.com.ua/ru/svit/rosiya/20221121-gorily-mebli-u-kvartyri-v-czentri-moskvy-znovu-spalahnula-pozhezha/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Горела мебель в квартире: в центре Москвы снова вспыхнул пожар</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSbuIIUgl-e1OwC8pUEYFudI7VircqBKb_FgprRtw8lhaR21nvomBqm2zb8j2dU2-vgPxsMFbMP" alt="Горела мебель в квартире: в центре Москвы снова вспыхнул пожар" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Вечером 21 ноября в столице России снова вспыхнул пожар. В этот раз возгорание произошло на 36-м этаже 40-этажного дома рядом с центром Москва-Сити.</p></div>
            </div>
        </a><a href='https://24tv.ua/ru/moskve-pozhar-21-nojabrja-2022-goda-jevakuirujut-zhitelej-moskva_n2202556'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В России – снова горит: из-за пожара эвакуировали жителей ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRgJ0C2lbpLp0BgztkSsdsYWCCIX4BpE4uSnbXa0pMZeoXRs2dzV8mQU4FIQzWaUG0yHZacUE3W" alt="В России – снова горит: из-за пожара эвакуировали жителей ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В многоэтажке Москва-Сити возник пожар 21 ноября 2022 года. Горела квартира и мебель. Жителей эвакуировали - есть ли пострадавшие - смотрите видео на 24&nbsp;...</p></div>
            </div>
        </a><a href='https://korrespondent.net/world/4537266-v-moskve-opiat-sluchylsia-pozhar'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В Москве опять случился пожар</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTZip7zxxR2gInsAwX9hopp1sIAVMMgK3oGu6CvcJ67z8zog-PAolZIKMQJ1bGE1E4_GlTTnr0N" alt="В Москве опять случился пожар" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Пожар произошел в однокомнатной квартире, его площадь не успела превысить и десяти квадратных метров.</p></div>
            </div>
        </a><a href='https://www.ostro.org/general/world/news/652672/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В москве в 40-этажном жилом доме в районе делового центра ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="В москве в 40-этажном жилом доме в районе делового центра ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В москве в 40-этажном жилом доме в районе Москва-Сити произошел пожар. Об этом сообщают российские соцсети со ссылкой на столичный главк МЧС 21 ноября.</p></div>
            </div>
        </a><a href='https://life.ru/p/1540555'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Пожар в высотке у &quot;Москвы-Сити&quot; потушен</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQEyFNDqh4urALaulyMNA2ND5gHdTmj5xgREhq5rf4uwoQpu-SYDBkVM-8s9cua0-vnXVOWoWou" alt="Пожар в высотке у &quot;Москвы-Сити&quot; потушен" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В Москве пожарные ликвидировали возгорание в 40-этажном жилом доме у &quot;Москвы-Сити&quot;. Пожар произошёл в однокомнатной квартире, его площадь не успела&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}