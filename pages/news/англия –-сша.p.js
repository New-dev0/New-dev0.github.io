import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Англия – США</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Англия – США"/>
        <meta name="description" content="Trending News about Англия – США" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Англия – США</h1>
            <Image width={800} height={500} src="https://ss.sport-express.ru/userfiles/materials/184/1840327/large.jpg" alt="Англия – США"/>
            <h3>Recent News</h3>
            <a href='https://www.sport-express.ru/football/world/2022/reviews/chm-2022-angliya-ssha-0-0-kak-proshel-match-gruppy-b-obzor-25-noyabrya-2022-goda-2003294/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>США и Англия разошлись миром. Британцы разочаровали после ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTDsF6vEe-Wk8Y_FPb1mIlhUxScMYWwUNCSS-9a2qixyvh9kqSaXEtInjD3h8qD-W6TSxJM3r8H" alt="США и Англия разошлись миром. Британцы разочаровали после ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Американская сборная не позволила забить команде Гарета Саутгейта. Англия все еще не может победить Штаты на чемпионатах мира. Чемпионат мира. Группа B</p></div>
            </div>
        </a><a href='https://www.championat.com/football/news-4905525-angliya-ssha-komandy-ne-zabili-golov-v-pervom-atjme.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Англия — США: команды не забили голов в первом тайме</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTs-Kbwz0njFS6eb0WLzedXUDoyZuoLWKGabZCVxtO_eV9VxdkU5t5Nlr53BqdlVP7edwXmfDvq" alt="Англия — США: команды не забили голов в первом тайме" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Сегодня, 25 ноября, проходит матч между сборными Англии и США. Он закрывает программу игрового дня на чемпионате мира. Матч команд, представляющих группу B,&nbsp;...</p></div>
            </div>
        </a><a href='https://sportrbc.ru/news/637fe2af9a794706012f8d35'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Англия — США</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRQi-gR8CLacj7OVh9iGJBwZVQq3tU2dJ8NB2oCAwk1OO_zJ3hc7M3xqhrUrgX3_tLOhwoU_equ" alt="Англия — США" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>На этом будем прощаться, пожелаем сборным Англии и США побед в следующих матчах и поблагодарим за игру! Онлайн матча для вас провел корреспондент «РБК&nbsp;...</p></div>
            </div>
        </a><a href='https://news.sportbox.ru/Vidy_sporta/Futbol/world_cup/spbnews_NI1730585_SBORNYJe_ANGLII_I_SShA_NAZVALI_STARTOVYJe_SOSTAVY_NA_MATCh_ChM_2022_V_KATARe'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Англия и США назвали стартовые составы на матч ЧМ-2022 в ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRcW_FqJy3302KhtEqroU9J1xEaDQQrn5zHUbTpkK-m9vdSOEoXUn6F4xgsF-gtJpM9Y7o-aVb7" alt="Англия и США назвали стартовые составы на матч ЧМ-2022 в ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Стали известны стартовые составы сборных Англии и США на предстоящий матч второго тура группового этапа чемпионата мира в Катаре.</p></div>
            </div>
        </a><a href='https://www.sportmk.ru/sports/2022/11/25/angliya-ssha-prognoz-na-match-chempionata-mira-25-noyabrya-ot-olimpbet.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Англия — США: прогноз на матч чемпионата мира 25 ноября от ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSWBb_5h4IVVllh02CLUI4yLEJgey50zVWSrnYew_I9ptF2aUhQYtaAdqfle032j7DaLuwn4UlD" alt="Англия — США: прогноз на матч чемпионата мира 25 ноября от ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Каждые две недели Olimpbet разыгрывает топовые призы. Делайте ставки от 500 рублей на любые события с коэффициентом от 1.50 и принимайте участие в борьбе за&nbsp;...</p></div>
            </div>
        </a><a href='https://zerkalo.az/ssha-i-angliya-ne-vyyavili-pobeditelya-v-matche-chm-2022/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>США и Англия не выявили победителя в матче ЧМ-2022 -</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTrMH3zMpGIvQIb44Dv-sABg9xjyu62LhJOO364zz_t0lvejFdLMNS5-XD_RwrB3ow2R3yPwUtR" alt="США и Англия не выявили победителя в матче ЧМ-2022 -" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Национальные команды США и Англии сыграли между собой в матче второго тура группового этапа чемпионата мира — 2022. Встреча, которая проходила на стадионе&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}