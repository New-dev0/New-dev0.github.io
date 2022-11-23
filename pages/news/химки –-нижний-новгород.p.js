import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Химки – Нижний Новгород</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Химки – Нижний Новгород"/>
        <meta name="description" content="Trending News about Химки – Нижний Новгород" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Химки – Нижний Новгород</h1>
            <Image width={800} height={500} src="https://ss.sport-express.ru/img-gen/%D0%A4%D1%83%D1%82%D0%B1%D0%BE%D0%BB+%5C%5C+%D0%9A%D1%83%D0%B1%D0%BE%D0%BA+%D0%A0%D0%BE%D1%81%D1%81%D0%B8%D0%B8/%C2%AB%D0%A5%D0%B8%D0%BC%D0%BA%D0%B8%C2%BB%C2%A0%E2%80%94+%C2%AB%D0%9D%D0%B8%D0%B6%D0%BD%D0%B8%D0%B9+%D0%9D%D0%BE%D0%B2%D0%B3%D0%BE%D1%80%D0%BE%D0%B4%C2%BB%3A+%D0%A0%D1%83%D0%B4%D0%B5%D0%BD%D0%BA%D0%BE+%D0%BE%D1%82%D0%BA%D1%80%D1%8B%D0%BB+%D1%81%D1%87%D0%B5%D1%82+%D0%B2%C2%A0%D0%BC%D0%B0%D1%82%D1%87%D0%B5.jpg" alt="Химки – Нижний Новгород"/>
            <h3>Recent News</h3>
            <a href='https://www.sport-express.ru/football/rus_cup/news/himki-nizhniy-novgorod-rudenko-otkryl-schet-v-matche-2001593/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Химки» — «Нижний Новгород»: Руденко открыл счет в матче</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT6YebJUDNTELokayQUrnPnattp9JO6-WOiGh8nS6cQZEp_paEZB3x8gal_ldLzOtzxYPzVz4WQ" alt="«Химки» — «Нижний Новгород»: Руденко открыл счет в матче" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Нападающий «Химок» Александр Руденко открыл счет на 40-й минуте матча с «Нижним Новгородом» в Кубке России — 1:0.</p></div>
            </div>
        </a><a href='https://www.championat.com/football/news-4901443-pari-nizhnij-novgorod-v-serii-penalti-obygral-himki-v-matche-kubka-rossii.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Пари Нижний Новгород» в серии пенальти обыграл «Химки» в ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQNzrlWrIsU4jFcUGapxvf7h-_5Ct3H1nFVCnRGoL73QbkT2WZIX_iKqGrfQwjxFwJXIwWhd-b2" alt="«Пари Нижний Новгород» в серии пенальти обыграл «Химки» в ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Завершился матч группового этапа Кубка России между подмосковными «Химками» и «Пари Нижний Новгород». Команды встречались на стадионе «Арена Химки».</p></div>
            </div>
        </a><a href='https://sport24.ru/news/football/2022-11-22-khimki-nizhniy-novgorod-smotret-onlayn-khimki-nizhniy-novgorod-pryamaya-translyatsiya-khimki-nizhniy-novgorod-onlayn-translyatsiya-khimki-nizhniy-novgorod-pryamoy-efir-khimki-nizhniy-novgorod-kubok-rossii-gde-smotret'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Кубок России. «Химки» — «Нижний Новгород». Прямая трансляция</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTnBh73-HgTt0yN03DAgCjl0LpSCd1Sj7PvvXE87JFqrgdQX6mlIgqiRdIOUePSvuF0YndVP2E4" alt="Кубок России. «Химки» — «Нижний Новгород». Прямая трансляция" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Сегодня, 22 ноября, в Химках состоится матч пятого тура группового этапа Пути РПЛ Кубка России сезона-2022/23 между «Химками» и «Нижним Новгородом».</p></div>
            </div>
        </a><a href='https://www.vremyan.ru/news/505708'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ФК «Пари Нижний Новгород» по пенальти обыграл ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRMrCiTAyloGi6Mvtr223LOfqbj-EozUEgsdm5of205-gYU0hOwNdpjrO1uH94NtDdrWFyMvJ16" alt="ФК «Пари Нижний Новгород» по пенальти обыграл ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Главные новости. Политика, экономика, общество, культура, спорт, губерния, происшествия. Комментарии, интервью, персоны. Новости Нижнего Новгорода и&nbsp;...</p></div>
            </div>
        </a><a href='https://www.rusfootball.info/online/1146689289-himki-nizhniy-novgorod-22-noyabrya-2022-1730.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>22 ноября 2022. Химки - Нижний Новгород 1 - 1 (пен: 1-3)</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcReuGEH_IozC6iE0uiVSJJZ1zQK3YphHW9KJXRKevDpJIrFpZvPu6hEL-F8OquVbLO4iGTacRhj" alt="22 ноября 2022. Химки - Нижний Новгород 1 - 1 (пен: 1-3)" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Смотрите трансляцию матча Химки - Нижний Новгород 22 ноября 2022. Обзор матча, составы команд. Результаты предыдущих встреч.</p></div>
            </div>
        </a><a href='https://rossaprimavera.ru/news/a4a1c2a1'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Химки» по пенальти уступили «Пари Нижний Новгород» в Кубке ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRnoFEElUzGfOAamZ2vn5jPA1RMD9f8xTXmaaissDoRAUpJz0atYz7JZeDucPpozc2SAz8P2oWC" alt="«Химки» по пенальти уступили «Пари Нижний Новгород» в Кубке ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>«Пари Нижний Новгород» по пенальти обыграл «Химки» 22 ноября на групповом этапе Кубка России по футболу.</p></div>
            </div>
        </a><a href='https://www.sport.ru/football/nijniy-novgorod-po-penalti-obygral-himki-v-matche-kubka-rossii/article535705/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Нижний Новгород&quot; по пенальти обыграл &quot;Химки&quot; в матче Кубка ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRNomUlIEhlD18an8S56OuOlsXwEqXBQ7-w9qgFk055XN4AawvtJxPLoSBc28oW-mXUVQIZapsv" alt="&quot;Нижний Новгород&quot; по пенальти обыграл &quot;Химки&quot; в матче Кубка ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sport.ru/ Футбол. Сегодня, 22-го ноября, прошёл матч пятого тура группового этапа пути РПЛ Кубка России по футболу. &quot;Химки&quot; принимали &quot;Нижний Новгород&quot;.</p></div>
            </div>
        </a>
        </Template></>;
}