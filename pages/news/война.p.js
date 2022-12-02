import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Война</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Война"/>
        <meta name="description" content="Trending News about Война" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Война</h1>
            <Image width={800} height={500} src="https://ostannipodii.com/ru/a/202212/voyna-situaciya-na-vecher-01-dekabrya-110028006/big.jpg" alt="Война"/>
            <h3>Recent News</h3>
            <a href='https://ostannipodii.com/ru/a/202212/voyna-situaciya-na-vecher-01-dekabrya-110028006/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Война, ситуация на вечер 01 декабря</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRDC4GBWdpfXMkwHPX0cSHH0Wv8niNzuWjGX6OWhOWowdkbIkm0GN4E1fXPPMECySXFD2sgoRkJ" alt="Война, ситуация на вечер 01 декабря" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Об этом в Генштабе ВСУ сообщили в своей оперативной информации по состоянию на 18.00 01.12.2022 (продолжаются 281 сутки российского широкомасштабного вторжения)&nbsp;...</p></div>
            </div>
        </a><a href='https://www.unian.net/war/kogda-zakonchitsya-voyna-i-skolko-proderzhitsya-putin-prognoz-oppozicionera-rf-video-12063090.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Когда закончится война и сколько продержится Путин - прогноз ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTvQzBp0PLAtR4ep1_F4OYaUg3ae9otRt2Z0RVi8idyTnqVbi6BUYIpD6VtOvt7YsGDGqrNtFl5" alt="Когда закончится война и сколько продержится Путин - прогноз ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Все может закончиться военным поражением Путина, а после этого его будут еще сильнее давить санкциями. Диктатор не сможет долго продержаться.</p></div>
            </div>
        </a><a href='https://telegraf.com.ua/ukraina/2022-12-02/5724727-voyna-den-282-vsu-prodavlivayut-oboronu-okkupantov-na-luganshchine'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Война - день 282: ВСУ продавливают оборону оккупантов на ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR6-k3cDgGRSDF7KHvro32xd5SY1x-4LtIXyAvS9ZRXEQ3M2YfKIDsaIBF2E9W7yzQtAWCZYVAu" alt="Война - день 282: ВСУ продавливают оборону оккупантов на ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Полномасштабное вторжение россии в Украину длится уже 282 дня. В стране продолжаются массовые отключения электроэнергии из-за пострадавшей&nbsp;...</p></div>
            </div>
        </a><a href='https://zn.ua/UKRAINE/atlantic-council-smozhet-li-ukraina-prodolzhit-nastuplenie-zimoj.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Atlantic Council: Сможет ли Украина продолжить наступление ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQJqrPzvFdoVEINksDBmOP0vmvoq93_WMueTZnKGKz4YjHHD6WOsIPjJqdWTNhPTaiA_Hhs0oVb" alt="Atlantic Council: Сможет ли Украина продолжить наступление ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Сможет ли армия Украины продолжить наступление зимой? И как мороз повлияет на бои? Эксперты Atlantic Council объяснили, с какой ситуацией в последующие&nbsp;...</p></div>
            </div>
        </a><a href='https://aussiedlerbote.de/2022/12/vojna-v-ukraine-2-dekabrya/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Война в Украине 2 декабря</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSjyapLUZlblU81xZ-czPriyTA96oMBL23_PPxB4N31RmZ5W2BsKBbFnZA07XILhr_QbsLugX6-" alt="Война в Украине 2 декабря" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Война в Украине началась 24 февраля. Мы продолжаем круглосуточно следить за событиями в прямом эфире. 282‑й день, война в Украине 2 декабря 2022 года.</p></div>
            </div>
        </a><a href='https://www.rfi.fr/ru/%D1%83%D0%BA%D1%80%D0%B0%D0%B8%D0%BD%D0%B0/20221201-%D0%B2%D0%BE%D0%B9%D0%BD%D0%B0-%D1%80%D0%BE%D1%81%D1%81%D0%B8%D0%B8-%D0%BF%D1%80%D0%BE%D1%82%D0%B8%D0%B2-%D1%83%D0%BA%D1%80%D0%B0%D0%B8%D0%BD%D1%8B-%D0%B4%D0%B5%D0%BD%D1%8C-281'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Война России против Украины. День 281. Онлайн RFI</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ2FohMTDLupe5l7as9yWQxOv_lZDvuTfVlkRioPzogmx1tW1mr5co6tveeirh9pos_eJq_2Y7m" alt="Война России против Украины. День 281. Онлайн RFI" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>1 декабря — 281-й день полномасштабного российского военного вторжения в Украину. С первого дня войны Русская служба RFI следит за событиями в режиме онлайн&nbsp;...</p></div>
            </div>
        </a><a href='https://investigator.org.ua/news-2/249255/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Война России против Украины: хроника 1 декабря - Центр ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSdVtkug7it-mUKSUliJ_zVXu4DaaKXK7PMpjl4inst9NpIf7RjQmlFnui4E49p_fMlaTCf5L3i" alt="Война России против Украины: хроника 1 декабря - Центр ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В результате массированных обстрелов российскими оккупантами и подрыва шандоры Каховского магистрального канала затоплена главная насосная станция (ГНС)&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}