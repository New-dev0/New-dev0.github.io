import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Франция – Польша</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Франция – Польша"/>
        <meta name="description" content="Trending News about Франция – Польша" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Франция – Польша</h1>
            <Image width={800} height={500} src="" alt="Франция – Польша"/>
            <h3>Recent News</h3>
            <a href='https://www.vseprosport.ru/news/2022/12/03/francija-polsha-prognoz-kf-6-50-na-match-chempionata-mira-4-dekabrja-2022-goda'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Франция — Польша: прогноз на матч Чемпионата мира</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTNLuoHLMtPIBT0ghjBX7WZff6--j2SCsr3eSEqco-bbrH2pXO33QiiNrcb_uVfctXS9XiLKGNe" alt="Франция — Польша: прогноз на матч Чемпионата мира" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Польша и Франция проиграли в последних поединках в группе. Кто сумеет 4 декабря пробиться в четвертьфинал? – ответ есть в прогнозе.</p></div>
            </div>
        </a><a href='https://www.sport-express.ru/stavki-na-sport/reviews/franciya-polsha-prognoz-i-stavka-na-match-4-dekabrya-chempionat-mira-po-futbolu-2022-2006912/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Франция — Польша: Мбаппе и Гризманн помогут Левандовски ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS-dANxDV13dXfYOCutp11nIyFV614tk_FKGChf0YWpStnIK4uszqe-6Rhq3OuPEXD6plBVnvd9" alt="Франция — Польша: Мбаппе и Гризманн помогут Левандовски ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Прогноз на матч Франция — Польша в рамках чемпионата мира по футболу 4 декабря 2022 года в Катаре.</p></div>
            </div>
        </a><a href='https://soccer365.ru/news/16607/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Франция ― Польша: превью</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTaYsE89mAw-WTEx_V9UAE3ZFGk9A_c_CtfgOPjCnEu4Hk8nqAGaWYzUcIE2kadIcWldbv7r12h" alt="Франция ― Польша: превью" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Рассказываем о раскладах на матч Франции и Польши в рамках 1/8 финала чемпионата мира-2022.</p></div>
            </div>
        </a><a href='https://www.championat.com/bets/article-4915001-franciya-polsha-prognoz-na-match-chempionata-mira-4-dekabrya-2022-goda-gde-smotret-onlajn-besplatno-translyaciya.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Франция — Польша. Мбаппе выбьет Левандовского</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTluPwom0EUGjX4tG1xXiL1HN5y1_7NQkkn0SXjlR-bh8VzByFsM1ZP-Z_Q42vJ03WQ2q9eCaih" alt="Франция — Польша. Мбаппе выбьет Левандовского" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Щенсны не волшебник, и он вряд ли прикроет команду от столь резвой атаки, какая есть у Дешама.</p></div>
            </div>
        </a><a href='https://sport24.ru/news/football/2022-12-03-frantsiya-polsha-prognoz-i-stavka-na-match-chm-2022-4dekabrya-ot-aleksandra-mostovogo'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Мостовой поделился крепкой ставкой на матч 1/8 ЧМ Франция ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSbPSpr0WNd0NOapBCM7iFNrQoqw_xvKv8fl0JWpHebsq1YBOyhPDSN0PSes8-APmXNku6EEHdh" alt="Мостовой поделился крепкой ставкой на матч 1/8 ЧМ Франция ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Самые свежие новости российского и мирового спорта только на сайте Sport24.ru! Интервью со спортсменами, онлайн трансляции, аналитика и прогнозы,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sports.ru/football/1113907836-chm-2022-francziya-polsha-pryamaya-translyacziya.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ЧМ 2022: Франция — Польша прямая трансляция</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSosQMCq3DGofleCl6QcPLw_GSIlbX7s85RrSDSW7vO-c_IS8oKRSmSEn06Ba5aw6bH3MMHFg8v" alt="ЧМ 2022: Франция — Польша прямая трансляция" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ЧМ 2022: Франция — Польша прямая трансляция ... Французские футболисты приехали в Катар защищать свой титул и перед ними стоит задача попасть в финал. Сборная&nbsp;...</p></div>
            </div>
        </a><a href='https://www.footboom.com/foreign/worldcup2022/1670056236-frantsiia-polshcha-anons-ta-prohnoz-matchu.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Франция – Польша. Анонс и прогноз матча</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTHdev8uVtw2uK400jcpY_w0Duep2Ju0DrYbgciWJCFlshW1Cft_wKEcOI8ogzckC6luDPs8gqk" alt="Франция – Польша. Анонс и прогноз матча" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Прогноз на матч Франция — Польша ✓ Состоится 04.12.2022 в рамках турнира Чемпионат мира-2022 ⚽ Статистика и анализ матча ✔️ Коэффициенты букмекеров.</p></div>
            </div>
        </a>
        </Template></>;
}