import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Dwarf Fortress</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Dwarf Fortress"/>
        <meta name="description" content="Trending News about Dwarf Fortress" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Dwarf Fortress</h1>
            <Image width={800} height={500} src="https://3dnews.ru/assets/external/illustrations/2022/12/08/1078535/00.jpg" alt="Dwarf Fortress"/>
            <h3>Recent News</h3>
            <a href='https://3dnews.ru/1078535/platnaya-versiya-simulyatora-kolonii-dvarfov-dwarf-fortress-perevipolnila-plan-prodag-i-podeshevela-v-rossiyskom-steam'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Платная версия симулятора колонии дварфов Dwarf Fortress ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTLu7TwpBcUxoOlSZyC98EaLX1MbrdCSXdKd6GrqU_E--5Nw4nCFhdds7WIPvEcQP-3T9HlEZED" alt="Платная версия симулятора колонии дварфов Dwarf Fortress ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Глава Kitfox Games Таня Шорт (Tanya Short) рассказала о первых успехах Steam-версии легендарного симулятора колонии дварфов Dwarf Fortress, а разработчики&nbsp;...</p></div>
            </div>
        </a><a href='https://dtf.ru/gameindustry/1490584-izdatel-dwarf-fortress-snizil-stoimost-igry-v-rossii-turcii-i-argentine'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Издатель Dwarf Fortress снизил стоимость игры в России ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQUWOA1cAgaQpwErUTmstlyz5F_qEEYuAuc5Vl43hVyJgs-GsICWBY-k-N5w_RmJnpLwZMT6IFl" alt="Издатель Dwarf Fortress снизил стоимость игры в России ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В компании сделали это без какого-либо объявления, но, как выяснилось, издатель предупреждал о возможном снижении в день релиза, 6 декабря. Глава Kitfox Games&nbsp;...</p></div>
            </div>
        </a><a href='https://www.igromania.ru/news/121370/Steam-versiya_Dwarf_Fortress_za_pervye_sutki_vypolnila_plan_prodazh_na_dva_mesyaca.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Steam-версия Dwarf Fortress за первые сутки выполнила план ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQbyQgeVws7JAMyDpY_j6m5C5JQglHEiOjouxdm-ZohNbh0R3T2jYI3DzjEC7ZutBV8bUD-v3K3" alt="Steam-версия Dwarf Fortress за первые сутки выполнила план ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Всего за сутки после релиза в Steam легендарная стратегия Dwarf Fortress разошлась тиражом в 160 тыс копий. Примечательно, что столько разработчики&nbsp;...</p></div>
            </div>
        </a><a href='https://www.championat.com/cybersport/news-4920247-prodazhi-dwarf-fortress-prevzoshli-vse-ozhidaniya-izdatelya.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Продажи Dwarf Fortress превзошли все ожидания издателя</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSGwENvwcboPof0gjd1qz9M35_JjC6o-jQHWojmc7V1iAEw8gJXcMncEPzBtGva6sjAV5-2ITZp" alt="Продажи Dwarf Fortress превзошли все ожидания издателя" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Глава Kitfox Games Таня Шорт похвасталась успехом. Игра компании Dwarf Fortress в дебютные сутки разошлась тиражом в 160 тыс. копий.</p></div>
            </div>
        </a><a href='https://shazoo.ru/2022/12/08/136383/za-sutki-dwarf-fortress-prodalas-tirazom-svyse-160-tysiac-kopii'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>За сутки Dwarf Fortress продалась тиражом свыше 160 тысяч копий</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTRsJznRDyxREcpJskyzX70sc0o7m0H-RqH28nKa40DBkyR87VvCTV7cxJTCuRIcs4Vora7Ag3N" alt="За сутки Dwarf Fortress продалась тиражом свыше 160 тысяч копий" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>На этой недели в Steam состоялся релиз Dwarf Fortress, игры про строительство колонии дварфов, которая находится в разработке уже более 20 лет.</p></div>
            </div>
        </a><a href='https://kanobu.ru/news/dwarf-fortress-v-steam-teper-stoit-810-rublej-460357/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Dwarf Fortress в Steam теперь стоит 810 рублей</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSgWCS1S75Y48iCRGz7ynU4CpfPfx3WEX1akuou6OvY91XlS-xkBlmbak6_yRp44TnBnAA-8Hpi" alt="Dwarf Fortress в Steam теперь стоит 810 рублей" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Вышедшая в Steam Dwarf Fortress изначально продавалась по цене в 1100 рублей (30 долларов или 1890 рублей по курсу) — и цена совсем не помешала&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cybersport.ru/tags/games/izdatel-dwarf-fortress-snizil-tsenu-igry-v-steam-dlia-rossii-turtsii-i-argentiny'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Издатель Dwarf Fortress снизил цену на игру в Steam для России ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTH79T2-VBk5CBUeE1HmCyFhqxwtHL_7XtpTKJSWa1QSMnctQjsNJDJ2L419ihmms8fq1ZALstD" alt="Издатель Dwarf Fortress снизил цену на игру в Steam для России ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Студия Kitfox Games, выступившая издателем хардкорного симулятораDwarf Fortress, изменила стоимость игры в Steam для некоторых регионов. Обновле...</p></div>
            </div>
        </a>
        </Template></>;
}