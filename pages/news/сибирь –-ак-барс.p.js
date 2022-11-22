import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Сибирь – Ак Барс</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Сибирь – Ак Барс"/>
        <meta name="description" content="Trending News about Сибирь – Ак Барс" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Сибирь – Ак Барс</h1>
            <Image width={800} height={500} src="https://ss.sport-express.ru/userfiles/materials/183/1838279/large.jpg" alt="Сибирь – Ак Барс"/>
            <h3>Recent News</h3>
            <a href='https://www.sport-express.ru/hockey/khl/news/khl-raspisanie-i-rezultaty-matchey-21-noyabrya-sibir-ak-bars-barys-salavat-yulaev-i-drugie-2000930/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>КХЛ: «Сибирь» обыграла «Ак Барс», «Барыс» победил ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSozIfuUhAwqclHAmlFYGUbLNGh3_G3fKL_ibJPY4Ozz58wf36b6CWuJAQEv9HMG7kOmjgeuio_" alt="КХЛ: «Сибирь» обыграла «Ак Барс», «Барыс» победил ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Голы: Быков — 2 (Семенов, Галимов), 12:42 — 0:1. Петров — 6 (бол., Семенов, Кагарлицкий), 17:29 — 0:2. Бек — 10 (бол., Пьянов, Мерфи), 18:03 — 1:2. Голубев — 3&nbsp;...</p></div>
            </div>
        </a><a href='https://www.championat.com/bets/news-4899439-sibir-ak-bars-prognoz-maksima-lebedeva-na-igru-khl-21-noyabrya.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Сибирь» — «Ак Барс»: прогноз Максима Лебедева на игру КХЛ ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS8pdqoqhx_Fd_y1IXXo8fGxWTPX5J8T_0hQGSnzWSmiNdjx4fy2914y-cFTsWJnrGnJpgmDdOF" alt="«Сибирь» — «Ак Барс»: прогноз Максима Лебедева на игру КХЛ ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Хоккейный обозреватель Максим Лебедев дал прогноз на матч регулярного сезона КХЛ «Сибирь» — «Ак Барс».</p></div>
            </div>
        </a><a href='https://allhockey.ru/news/show/461252-Sibir_otygralas_so_scheta_0_2_i_pobedila_Ak_Bars_Sharov_oformil_dubl'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Сибирь&quot; отыгралась со счёта 0:2 и победила &quot;Ак Барс&quot;, Шаров ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="&quot;Сибирь&quot; отыгралась со счёта 0:2 и победила &quot;Ак Барс&quot;, Шаров ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>&quot;Сибирь&quot; отыгралась со счёта 0:2 и победила &quot;Ак Барс&quot;, Шаров оформил дубль | Allhockey.ru - главный хоккейный информационный сайт России, где собраны все&nbsp;...</p></div>
            </div>
        </a><a href='https://www.liveresult.ru/news/152580'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Сибирь – Ак Барс: прямая трансляция, где смотреть матч онлайн</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQMdQkz-VpUH5NlbwbPFOhuE2uCLF2fIa0k0WFsY9v6rrcQiS9CvflL03i-w7kEd-xJP7G01CMw" alt="Сибирь – Ак Барс: прямая трансляция, где смотреть матч онлайн" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В понедельник, 21 ноября, состоится матч Фонбет Чемпионата Континентальной хоккейной лиги, в котором новосибирская «Сибирь» сыграет дома с казанским «Ак&nbsp;...</p></div>
            </div>
        </a><a href='https://nsk.tsargrad.tv/news/sibir-nachala-domashnjuju-seriju-matchej-s-volevoj-pobedy-nad-ak-barsom_669181'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Сибирь&quot; начала домашнюю серию матчей с волевой победы ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQh7Tikn-uzlQg68wqC8ZqTTfHnhjABMaFbwPV_aIu7rRFxtjOUs2kq1ps2HyPKk_gA_BT8dcyv" alt="&quot;Сибирь&quot; начала домашнюю серию матчей с волевой победы ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Новосибирская команда победила гостей из Казани, отыгравшись с 0:2. 21 ноября на домашнем льду ЛДС &quot;Сибирь&quot; переиграла &quot;Ак Барс&quot; со счётом 4:2,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.tatar-inform.ru/news/sibir-obygrala-v-novosibirske-ak-bars-v-matce-cempionata-kxl-5887335'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Сибирь» обыграла в Новосибирске «Ак Барс» в матче ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="«Сибирь» обыграла в Новосибирске «Ак Барс» в матче ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>«Сибирь» вырвала волевую победу (4:2) в Новосибирске у «Ак Барса» в рамках регулярного чемпионата КХЛ. Хозяева льда проигрывали в две шайбы по ходу матча.</p></div>
            </div>
        </a><a href='https://bookmaker-ratings.ru/tips/khl-sibir-ak-bars-prognoz-ot-hokejchika/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Кхл. Сибирь- Ак Барс. Прогноз от Хокейчика. 21.11.2022 [page ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQADYqh5CNptg1Dz-k-F99DfkSwJOSYO1Rga8b64MKTZnfznp9JWstEIhhswOCbt_EVOWHpQCFv" alt="Кхл. Сибирь- Ак Барс. Прогноз от Хокейчика. 21.11.2022 [page ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Когда на хоккей дают что то приличное на тб4, об этом стоит подумать. Здесь как раз именно такой случай. Вспоминая прошлые матчи Сибири против СКА, или.</p></div>
            </div>
        </a>
        </Template></>;
}