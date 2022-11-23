import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Франция – Австралия</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Франция – Австралия"/>
        <meta name="description" content="Trending News about Франция – Австралия" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Франция – Австралия</h1>
            <Image width={800} height={500} src="https://www.rbc.ua/static/img/f/i/fimdmucwaaagieh_1300x820.jpg" alt="Франция – Австралия"/>
            <h3>Recent News</h3>
            <a href='https://www.rbc.ua/ukr/news/chs-2022-frantsiya-rozpochala-zahist-titulu-1669150825.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ЧМ-2022: Франция начала защиту титула чемпиона мира ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS-9XyB3nrsMuf6IHTe1X93Z3daX-Q1Agu7Bfws8Xdv2f6WIWZZB99h6VSdeUwhl3TEzci5ehI8" alt="ЧМ-2022: Франция начала защиту титула чемпиона мира ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Уверенной победой сборной Франции завершился матч первого тура в квартете D чемпионата мира.</p></div>
            </div>
        </a><a href='https://prm.ua/frantsiia-avstraliia-chempionska-hra-vid-chempioniv/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Франція — Австралія: чемпіонська гра від чемпіонів</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSca8dXbK93KJ5TqV54noUHf83gDe_kGlQGm3grjFaD_wkk8ekQgfo7VlpGeUVMJk5q37E7FM0A" alt="Франція — Австралія: чемпіонська гра від чемпіонів" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Франція чотири роки тому стала найсильнішою футбольною країною планети. І уявіть лише, що з того моменту все пішло не так.</p></div>
            </div>
        </a><a href='https://www.championat.com/football/news-4901777-franciya-avstraliya-zhiru-oformil-dubl.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Франция — Австралия: Жиру оформил дубль</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSJPoJpclGlJUv08Nbm6Znd_lY1f6kyi7205FN3yPb2fDav02_HbZb2JJhxCmM_06C3ClPwWbsM" alt="Франция — Австралия: Жиру оформил дубль" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Сегодня, 22 ноября, проходит матч первого тура группы D между сборными Франции и Австралии. Матч идёт на стадионе «Эль-Джануб».</p></div>
            </div>
        </a><a href='https://sport.unian.ua/football/franciya-avstraliya-prognoz-bukmekeriv-i-de-divitisya-match-chs-2022-z-futbolu-12053637.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Чинні чемпіони світу почнуть захист титулу: де дивитися матч ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTwFG9Uj_OBbjOr9KSiqjXy6nZ1fks6TOk0rVWdjX-zmqZzd95aGmie8nGZm-wWs2tX7F8-AXKw" alt="Чинні чемпіони світу почнуть захист титулу: де дивитися матч ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>22 листопада в рамках першого туру чемпіонату світу-2022 з футболу збірна Франції зіграє проти національної команди Австралії - де дивитися поєдинок&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sport-express.ru/football/world/2022/news/franciya-avstraliya-startovye-sostavy-komand-chempionat-mira-22-noyabrya-2022-goda-2001690/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Франция — Австралия: Гризманн, Мбаппе и Жиру выйдут в ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQvCqFFc3pqw2xiGn9sL3QuzpR9qHIOrySM-z6ThlMvRXNtsouM8uKlrKrZeJgQaqA3m87Nbri_" alt="Франция — Австралия: Гризманн, Мбаппе и Жиру выйдут в ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Сборная Франции стартует на группового этапе чемпионата мира-2022 в Катаре матчем против Австралии.</p></div>
            </div>
        </a><a href='https://football24.ua/frantsiya__avstraliya_startovi_skladi_ta_onlayn_translyatsiya_poyedinku_chs_2022_n748428/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Франція – Австралія: онлайн-трансляція поєдинку ЧС-2022 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTk3dCZhJ_-DRoraU2Fvx6TKJG6NBgSoI1L_o0VLj64_Ypdo3gMqJSbtkTkeYoTatiYZ4lBwqKw" alt="Франція – Австралія: онлайн-трансляція поєдинку ЧС-2022 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Франція розпочинає виступи на Мундіалі матчем проти Австралії. Стартові склади і онлайн-трансляція гри – у цій новині на Футбол 24.</p></div>
            </div>
        </a><a href='https://football24.ua/ru/francija__avstralija_startovye_sostavy_i_onlajn_transljacija_poedinka_chm_2022_n748431/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Франция – Австралия: онлайн-трансляция поединка ЧМ-2022 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTk3dCZhJ_-DRoraU2Fvx6TKJG6NBgSoI1L_o0VLj64_Ypdo3gMqJSbtkTkeYoTatiYZ4lBwqKw" alt="Франция – Австралия: онлайн-трансляция поединка ЧМ-2022 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Франция начинает выступления на Мундиале матчем против Австралии. Стартовые составы и онлайн-трансляция игры – в этой новости на Футбол 24.</p></div>
            </div>
        </a><a href='https://news.sportbox.ru/Vidy_sporta/Futbol/world_cup/spbnews_NI1728223_FRANCIJa__AVSTRALIJa__11_ADRIAN_RABO_SRAVNaL_SCheT_V_MATChe_CheMPIONATA_MIRA_PO_FUTBOLU_VIDeO'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Франция — Австралия — 1:1: Рабьо сравнял счет в матче ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS7r1YJFYUUszS5acwm_TzkXOd4MClp8vIoyGqLY_KJ51z3jiohwar0Lei6VyA1YXv4Qxps20aX" alt="Франция — Австралия — 1:1: Рабьо сравнял счет в матче ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Полузащитник сборной Франции Адриан Рабьо сравнял счет в матче группового этапа чемпионата мира 2022 года против команды Австралии.</p></div>
            </div>
        </a><a href='https://sport.ua/uk/news/604609-frantsiya-avstraliya-video-golov-i-obzor-matcha-obnovlyaetsya'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Франція – Австралія – 4:1. Дубль Жиру, гол Мбаппе. Відео голів ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSYZZBhkKgqkb1mXzDDtsFNSb_mlWPAUu46DrdqRy_hiKQWxnswuObVkvZdNivkcqQBJc4mnLYQ" alt="Франція – Австралія – 4:1. Дубль Жиру, гол Мбаппе. Відео голів ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Огляд і відео голів матчу {Франція} – {Австралія} ⇒ ≺{22.11.2022}≻ ✓ {Чемпіонат світу} Футбольні відео ☛ Кращі моменти матчу, огляди та коментарі&nbsp;...</p></div>
            </div>
        </a><a href='https://sport.ua/news/604609-frantsiya-avstraliya-video-golov-i-obzor-matcha-obnovlyaetsya'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Франция – Австралия – 4:1. Дубль Жиру, гол Мбаппе. Видео ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSYZZBhkKgqkb1mXzDDtsFNSb_mlWPAUu46DrdqRy_hiKQWxnswuObVkvZdNivkcqQBJc4mnLYQ" alt="Франция – Австралия – 4:1. Дубль Жиру, гол Мбаппе. Видео ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Обзор и видео голов матча {Франция} – {Австралия} ⇒ ≺{22.11.2022}≻ ✓ {Чемпионат мира} Футбольные видео ☛ Лучшие моменты матча, обзоры и комментарии&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}