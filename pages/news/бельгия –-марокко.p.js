import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Бельгия – Марокко</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Бельгия – Марокко"/>
        <meta name="description" content="Trending News about Бельгия – Марокко" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Бельгия – Марокко</h1>
            <Image width={800} height={500} src="https://ss.sport-express.ru/img-gen/%D0%A4%D1%83%D1%82%D0%B1%D0%BE%D0%BB+%5C%5C+%D0%A7%D0%B5%D0%BC%D0%BF%D0%B8%D0%BE%D0%BD%D0%B0%D1%82+%D0%BC%D0%B8%D1%80%D0%B0+%5C%5C+%D0%A7%D0%9C-2022/%D0%91%D0%B5%D0%BB%D1%8C%D0%B3%D0%B8%D1%8F%C2%A0%E2%80%94+%D0%9C%D0%B0%D1%80%D0%BE%D0%BA%D0%BA%D0%BE%3A+%D0%B2%D0%B8%D0%B4%D0%B5%D0%BE%D0%BE%D0%B1%D0%B7%D0%BE%D1%80+%D0%BC%D0%B0%D1%82%D1%87%D0%B0+%D1%87%D0%B5%D0%BC%D0%BF%D0%B8%D0%BE%D0%BD%D0%B0%D1%82%D0%B0+%D0%BC%D0%B8%D1%80%D0%B0-2022.jpg" alt="Бельгия – Марокко"/>
            <h3>Recent News</h3>
            <a href='https://www.sport-express.ru/football/world/2022/news/belgiya-marokko-videoobzor-matcha-chempionata-mira-2022-2004142/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Бельгия — Марокко: видеообзор матча чемпионата мира-2022</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT090w4Koxm8-4RbVjV-BU_g9C8U2wMz5MnkAEa2DdzyvOxSLPSV18XaZZLgOMXtwnanXdXHzUt" alt="Бельгия — Марокко: видеообзор матча чемпионата мира-2022" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Сборная Марокко обыграла Бельгию в матче второго тура группового турнира чемпионата мира в Катаре — 2:0.</p></div>
            </div>
        </a><a href='https://www.championat.com/football/news-4907509-belgiya-marokko-komandy-ne-otkryli-schyot-v-pervom-tajme-matcha-chempionata-mira.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Бельгия — Марокко: команды не открыли счёт в первом тайме ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcScvgHHzWtSA3D11Pf763asWSqqj1C2oRccwCuK7uCCSp2EEE3ezMmiCQCR2rfF_gREYyZIKuHI" alt="Бельгия — Марокко: команды не открыли счёт в первом тайме ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В эти минуты проходит матч 2-го тура группового этапа чемпионата мира между сборными Бельгии и Марокко. Команды играют на стадионе «Эль-Тумама» в Дохе.</p></div>
            </div>
        </a><a href='https://news.sportbox.ru/Vidy_sporta/Futbol/world_cup/spbnews_NI1731768_BeLGIJa___MAROKKO___02_ABUhLAL_UDVOIL_PReIMUShheSTVO_MAROKKANCeV_NA_902_J_MINUTe_MATChA_ChM_2022'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Бельгия — Марокко — 0:2. Абухлаль удвоил преимущество ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTIyJTyeD3x1SUeLv0JDvGqMwUk-JBvGDitnpao7iXT8Sdq4VPjXeMpyBbCwKsYg-oFmQmw1B17" alt="Бельгия — Марокко — 0:2. Абухлаль удвоил преимущество ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Нападающий сборной Марокко Закария Абухлаль забил второй гол в ворота команды Бельгии в матче чемпионата мира‑2022.</p></div>
            </div>
        </a><a href='https://sportrbc.ru/news/638284e69a7947b7ed960cb6'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Бельгия — Марокко</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTMFW7jfPRV3ZErS4sFyVmyeq3omKOv6PTiN1rFvuFVlMizuxi_FGaPKlsIafDBFTr7OF0UF7zV" alt="Бельгия — Марокко" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>На этом будем прощаться. Пожелаем сборной Бельгии побед в следующих матчах турнира, а команду Марокко поздравляем с победой. Ждем вас на онлайн-трансляциях&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sports.ru/football/1113660829-belgiya-marokko-onlajn-translyacziya-nachnetsya-v-1600.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Бельгия проиграла Марокко во 2-м туре ЧМ – 0:2. Сабири и ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSQRHvmuGdjEjFCVmhLxzp2ryOT9gQTjpsKn_wRiJMCGCY8z7Q6_bnR_PiDCQXcUTvyQK-jXrMx" alt="Бельгия проиграла Марокко во 2-м туре ЧМ – 0:2. Сабири и ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Сборная Бельгии проиграла Марокко (0:2) во 2-м туре группового этапа ЧМ-2022.</p></div>
            </div>
        </a><a href='https://www.interfax.ru/world/874441'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В столице Бельгии произошли беспорядки после поражения от ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSDYrVIcwfQql2OgL0F9UIthfQmolfhHlOB-PeYDJvvjUgb8StBUtY3H_BYq9Io-etShOS7Hphg" alt="В столице Бельгии произошли беспорядки после поражения от ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Столкновения фанатов Марокко с полицией на улицах Брюсселя 27 ноября. Фото: EPA/Vostock-photo. Москва. 27 ноября. INTERFAX.RU - В центре Брюсселя в&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}