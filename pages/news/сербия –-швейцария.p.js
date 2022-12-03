import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Сербия – Швейцария</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Сербия – Швейцария"/>
        <meta name="description" content="Trending News about Сербия – Швейцария" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Сербия – Швейцария</h1>
            <Image width={800} height={500} src="https://www.rbc.ua/static/img/s/k/skysports_breel_embolo_switzerland_5985123_1300x820.jpg" alt="Сербия – Швейцария"/>
            <h3>Recent News</h3>
            <a href='https://www.rbc.ua/ukr/news/zbirna-shveytsariyi-viborola-serbiyi-mistse-1670015154.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Сборная Швейцарии вырвала у Сербии место в плей-офф ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRGPv2CwgGVnkzv2TwN1cpX8ML5sOFFl-t9msDwJmanJSWPJDV3-SBk1CWEkiEj6OuxKL2irfwc" alt="Сборная Швейцарии вырвала у Сербии место в плей-офф ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Швейцарские сборники завоевали путевку в 1/8 финала чемпионата мира 2022 года.</p></div>
            </div>
        </a><a href='https://www.championat.com/football/news-4914457-serbiya-shvejcariya-gol-frojlera-vyvel-shvejcarcev-vperyod.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Сербия — Швейцария: гол Фройлера вывел швейцарцев вперёд</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTudfIpSPl-FzVM3mTZFCoRtkoG_lr3QTykJsm3KVuGTnGsuUL1EhpvWhLyhrvr5vegKalxRTmX" alt="Сербия — Швейцария: гол Фройлера вывел швейцарцев вперёд" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Сегодня, 2 декабря, на стадионе «974» проходит матч 3-го тура группового этапа чемпионата мира, в котором встречаются соперники по группе G — сборные Сербии&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sport-express.ru/football/world/2022/online/chm-2022-smotret-translyacii-gana-urugvay-koreya-portugaliya-serbiya-shveycariya-kamerun-braziliya-onlayn-i-rezultaty-kto-vyigral-i-vyshel-v-pley-off-2-dekabrya-2006274/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ЧМ-2022: Бразилия уступила Камеруну, Швейцария обошла ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ0m4tYgVGCu9GIX4RB11ATsVQARf7pd2tuKlJy7TpUEac_WcjyuJVB58l0bPu1pyEfWpVbW3Cm" alt="ЧМ-2022: Бразилия уступила Камеруну, Швейцария обошла ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ЧМ 2022 по футболу, матчи 2 декабря: Гана — Уругвай, Корея — Португалия, Сербия — Швейцария, Камерун — Бразилия, где смотреть прямые трансляции матчей&nbsp;...</p></div>
            </div>
        </a><a href='https://tsn.ua/prosport/shveycariya-u-vidovischniy-goloviy-perestrilci-vikinula-serbiyu-z-chs-2022-ta-viyshla-do-pleyof-2215132.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Швейцарія у видовищній гольовій перестрілці викинула Сербію з ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQhdfXsUNHDwWZH8Va-MGfR07y8zMt4drsk1QIngjCJ3cVShcdMzWpLJlz9o0aC4LIWADRyXjy-" alt="Швейцарія у видовищній гольовій перестрілці викинула Сербію з ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Збірна Швейцарії перемогла команду Сербії в матчі 3-го туру групи G чемпіонату світу-2022 з футболу. Хрестоносці залишили балканців за бортом турніру,&nbsp;...</p></div>
            </div>
        </a><a href='https://football24.ua/ru/jarkij_krah_druzej_rossii_v_videoobzore_matcha_serbija__shvejcarija__23_n749901/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Яркий крах друзей России в видеообзоре матча Сербия ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ17_FnFv_MuiqmSEsuzySlKioC5J1tr7uvmiqsa0kYu98gJuE_Wrz0XpNkdvYqLos1J4iYUQF2" alt="Яркий крах друзей России в видеообзоре матча Сербия ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Сербия и Швейцария устроили перестрелку в матче 3-го тура чемпионата мира. Смотрите видео голов и обзор встречи. Новости футбола Футбол 24.</p></div>
            </div>
        </a><a href='https://www.ua-football.com/foreign/worldcup/1670017282-nikogda-ne-byli-v-pley-of-i-seychas-ne-budut-serbiya-shveycariya-2-3-obzor-matcha-i-video-golov.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Никогда не были в плей-оф, и сейчас не будут. Сербия ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQMqc9VFA95LEry4P5q4cjxZLCW4txKjEvniYjB5r9A7csg3qjxm55MyfD_GLO-JCaFUWRYAvbI" alt="Никогда не были в плей-оф, и сейчас не будут. Сербия ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Сербия - Швейцария ⋇ 02.12.2022 ⋇ Видео обзор голов и лучших моментов матча ⋙ ЧМ-2022 ☛ Счет матча ✓ Видео футбола ☛ Обзоры игр ☝ Интервью игроков,&nbsp;...</p></div>
            </div>
        </a><a href='https://espreso.tv/shveytsariya-vibila-serbiyu-z-chs-2022'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Швейцарія вибила Сербію з ЧС-2022</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ1gOsCLprT72X3qbr_KUy7VfNqH0P_-fRWU1Ct15-Gp7uTgT4u5ilHVv_dk0zodAaSl16X2wJJ" alt="Швейцарія вибила Сербію з ЧС-2022" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>У 3-му турі групового раунду ЧС-2022 збірна Швейцарії виявилась сильнішою за Сербію. Читайте більше тут.</p></div>
            </div>
        </a><a href='https://www.ua-football.com/ua/foreign/worldcup/1669935696-serbiya-shveycariya-divitisya-onlayn-live-pryamu-videotranslyaciyu-matchu-chs-2022.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Сербія – Швейцарія. Дивитися онлайн LIVE пряму ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT-sWXGeqS1IeG0aKBmr2HVyXPzU9DiGQOtXTQi7oy9uFdbHJTy-61svRvmQi3VBe2WlqWIeXb4" alt="Сербія – Швейцарія. Дивитися онлайн LIVE пряму ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Сербія - Швейцарія ⚽ 02.12.2022 ⚽ Дивитись онлайн трансляцію матчу ✓ ЧС-2022 ✓ Футбольні відеотрансляції ☛ Матчі чемпіонату світу 2022 на UA-</p></div>
            </div>
        </a><a href='https://football24.ua/yaskraviy_krah_druziv_rosiyi_u_videooglyadi_matchu_serbiya__shveytsariya__23_n749898/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Яскравий крах друзів Росії у відеоогляді матчу Сербія ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ17_FnFv_MuiqmSEsuzySlKioC5J1tr7uvmiqsa0kYu98gJuE_Wrz0XpNkdvYqLos1J4iYUQF2" alt="Яскравий крах друзів Росії у відеоогляді матчу Сербія ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Сербія та Швейцарія влаштували перестрілку у матчі 3 туру чемпіонату світу. Дивіться відео голів та огляд зустрічі. Новини футболу Футбол 24.</p></div>
            </div>
        </a><a href='https://sport.ua/news/606014-serbiya-shveytsariya-2-3-video-golov-i-obzor-matcha-obnovlyaetsya'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Сербия – Швейцария – 2:3. Швейцарцы вышли в плей-офф ЧМ ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcROxM-E7cK5q1eWVXupjvfv5eJNw-6bBCKY1-qGckYiIkRcggqbuEoBWDtUJtOAli1RKKPwvHvO" alt="Сербия – Швейцария – 2:3. Швейцарцы вышли в плей-офф ЧМ ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Обзор и видео голов матча Сербия – Швейцария ⇒ ≺02.12.2022≻ ✓ Чемпионат мира Футбольные видео ☛ Лучшие моменты матча, обзоры и комментарии&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}