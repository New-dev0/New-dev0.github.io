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
            <Image width={800} height={500} src="https://ss.sport-express.ru/img-gen/%D0%A4%D1%83%D1%82%D0%B1%D0%BE%D0%BB+%5C%5C+%D0%A7%D0%B5%D0%BC%D0%BF%D0%B8%D0%BE%D0%BD%D0%B0%D1%82+%D0%BC%D0%B8%D1%80%D0%B0+%5C%5C+%D0%A7%D0%9C-2022/%D0%90%D0%BD%D0%B3%D0%BB%D0%B8%D1%8F%C2%A0%E2%80%94+%D0%A1%D0%A8%D0%90%3A+%D1%81%D1%82%D0%B0%D1%80%D1%82%D0%BE%D0%B2%D1%8B%D0%B5+%D1%81%D0%BE%D1%81%D1%82%D0%B0%D0%B2%D1%8B+%D0%BD%D0%B0%C2%A0%D0%BC%D0%B0%D1%82%D1%87+%D0%A7%D0%9C-2022.jpg" alt="Англия – США"/>
            <h3>Recent News</h3>
            <a href='https://www.sport-express.ru/football/world/2022/news/angliya-ssha-startovye-sostavy-na-match-chm-2022-2003251/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Англия — США: стартовые составы на матч ЧМ-2022</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSPoZy_yU9wP9ywEkIitkphjaCvni9ayHn-u1fLMuM3OYlV0I0a3lOk-_747WX4IF3RLrElQHU9" alt="Англия — США: стартовые составы на матч ЧМ-2022" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Сборные Англии и США объявили стартовые составы команд на матч второго тура чемпионата мира-2022 в Катаре.</p></div>
            </div>
        </a><a href='https://www.golosameriki.com/a/usa-frustrates-england-again-at-a-world-cup-in-0-0-draw/6850958.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>США расстроили Англию ничьей на чемпионате мира по футболу</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQjTIKywuVBJikNKU2CbFsoLqDhBsaYjKZDNAD1F-WN9r8Q69QHkCk700jJCqsxKt2yI_EWdkv8" alt="США расстроили Англию ничьей на чемпионате мира по футболу" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Во вторник американская сборная встретится с иранской командой в матче за место в 1/8 финала мирового турнира.</p></div>
            </div>
        </a><a href='https://www.championat.com/football/article-4905565-angliya-ssha-chempionat-mira-po-futbolu-anglijskie-futbolisty-vstali-na-koleno-reakciya-bolelschikov.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Англия встаёт на колено, американцы — нет». Поступок ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQpbXWaqFJ6BZAMNTDJ9n0T-k5E5X3Mh9AB3cMWHpg6ETjoy7kS0IDI5Ed8vInpj3sPsd6Iud2l" alt="«Англия встаёт на колено, американцы — нет». Поступок ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Европейцы вернулись в Катаре к акции, про которую многие забыли. Английские футболисты снова встали на колено. Это произошло перед матчем 2-го тура&nbsp;...</p></div>
            </div>
        </a><a href='https://news.sportbox.ru/Vidy_sporta/Futbol/world_cup/spbnews_NI1730718_Pochti_69_tysach_bolelshhikov_posetili_match_Anglija__SShA_na_ChM_2022_v_Katare'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Почти 69 тысяч болельщиков посетили матч Англия — США на ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT-ioSl5EdhEWaUKYUPOsRskoB1WCr1YGkkfrxyD1Pyfit4DLpiukcPfCqJXXzsKGfusfW00Jag" alt="Почти 69 тысяч болельщиков посетили матч Англия — США на ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Пресс‑служба ФИФА сообщила, что на матче второго тура чемпионата мира‑2022 между сборными Англии и США присутствуют 68 463 болельщика.</p></div>
            </div>
        </a><a href='https://sportrbc.ru/news/637fe2af9a794706012f8d35'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Англия — США</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRQi-gR8CLacj7OVh9iGJBwZVQq3tU2dJ8NB2oCAwk1OO_zJ3hc7M3xqhrUrgX3_tLOhwoU_equ" alt="Англия — США" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>На этом будем прощаться, пожелаем сборным Англии и США побед в следующих матчах и поблагодарим за игру! Онлайн матча для вас провел корреспондент «РБК&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sportmk.ru/sports/2022/11/25/angliya-ssha-prognoz-na-match-chempionata-mira-25-noyabrya-ot-olimpbet.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Англия — США: прогноз на матч чемпионата мира 25 ноября от ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSWBb_5h4IVVllh02CLUI4yLEJgey50zVWSrnYew_I9ptF2aUhQYtaAdqfle032j7DaLuwn4UlD" alt="Англия — США: прогноз на матч чемпионата мира 25 ноября от ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Каждые две недели Olimpbet разыгрывает топовые призы. Делайте ставки от 500 рублей на любые события с коэффициентом от 1.50 и принимайте участие в борьбе за&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}