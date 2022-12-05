import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Беринчик Менди</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Беринчик Менди"/>
        <meta name="description" content="Trending News about Беринчик Менди" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Беринчик Менди</h1>
            <Image width={800} height={500} src="" alt="Беринчик Менди"/>
            <h3>Recent News</h3>
            <a href='https://vringe.com/exclusive/160754-evropu-bral-berinchik-pobedil-mendi-v-londone.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Европу брал. Беринчик победил Менди в Лондоне</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRhz3rPK9MxA3wWvpPhx8FLQ0qCq6HpNy2_8S8nqCulXzXntwdSsaF5H9BivdOaSFy7U9gK_DlN" alt="Европу брал. Беринчик победил Менди в Лондоне" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Читайте репортаж vRINGe о бое Денис Беринчик - Иван Менди за титул чемпиона Европы в лёгком весе, который состоялся 3 декабря в Лондоне.</p></div>
            </div>
        </a><a href='https://sport.24tv.ua/ru/denis-berinchik-ivan-mendi-ishod-boja-24-kanal_n2210890'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Беринчик единогласным решением победил Менди в ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSZ240b5_x7OAyvHooNXKJRb-1ewAnqyh-vVZH1GXZUP8X9m5XgcuebEPWPaVV48Mrb3FhOno1X" alt="Беринчик единогласным решением победил Менди в ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Результат боя Денис Беринчик – Иван Менди, который прошел 3 декабря 2022. Беринчик встретился Менди на профессиональном ринге бокса в Лондоне. Кто победил в&nbsp;...</p></div>
            </div>
        </a><a href='https://vesti.ua/sport/boks/berinchik-vyshel-v-forme-zsu-pobedil-mendi-i-zavoeval-titul-ebu-video'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Беринчик вышел в форме ЗСУ и победил Менди (видео)</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTamwhtFo3UricMZVOFAqwqvvnwVQ8n1RmL9FBsQ0UCF0loed1otizjhBjgt1ITJPgcSb4vtaMi" alt="Беринчик вышел в форме ЗСУ и победил Менди (видео)" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Украинский боксер Денис Беринчик победил француза Ивана Менди в поединке за титул чемпиона Европы. Спортсмен вышел в форме ЗСУ (смотрите видео)</p></div>
            </div>
        </a><a href='https://www.sud.ua/ru/news/obshchestvo/255895-ukrainets-berinchik-pobedil-mendi-i-zavoeval-poyas-ebu'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Украинец Беринчик победил Менди и завоевал пояс EBU</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSsGj0k7ag88XR4eKzdshjVU8UKlfYOqLuujLrsAGTcpygkSYIySwAsntOOEqz4xrUEq5yIEkEw" alt="Украинец Беринчик победил Менди и завоевал пояс EBU" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В субботу, 3 декабря, в Лондоне состоялся бой украинского боксера Денис Беринчика (16-0, 9 КО) против француза Ивана Менди (47-5-1, 22 КО).</p></div>
            </div>
        </a><a href='https://champion.com.ua/boxing/2022/12/03/916665/berinchyk-mendi-yak-tse-bulo'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Берінчик - Менді: Як це було</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTcoOTCEgb1dvpoXxbmdnoUi59ri-0bDzxWpBzsEbBjbxp3X-jlGzZRAels02CSLAimV-NSAlB8" alt="Берінчик - Менді: Як це було" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Бій за пояс EBU (Європейський боксерський союз) в легкій вазі ; 3 грудня 2022 року, стадіон Тоттенгем Хотспур&nbsp;...</p></div>
            </div>
        </a><a href='https://news.obozrevatel.com/sport/box/gde-segodnya-smotret-berinchik-mendi-raspisanie-translyatsij-chempionskogo-boya-ukraintsa.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Где сегодня смотреть Беринчик – Менди. Расписание ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT8dN9KAUxk5P4xY_EPiN0rHID9F_SoaGARn9cQdG5Xt91W0zshjsQ_FB7GRHTpma8cIhzc-K09" alt="Где сегодня смотреть Беринчик – Менди. Расписание ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Как сообщал OBOZREVATEL, год назад Денис защитил свой титул. Напряженный бой против россиянина Исы Чаниева (15-3, 7 КО) в Броварах на ринге ТРЦ &quot;Терминал&quot;&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ua-football.com/ukrainian/news/1670098601-berinchik-pobedil-mendi-edinym-resheniem-sudey.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Беринчик победил Менди единым решением судей</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRSag1KTlFVRw4aPIH63S2_m5_E1HMKFQgtHtP5XP2R011fJc9iEeXpB5QufLQ-Q-QpRGABkB_b" alt="Беринчик победил Менди единым решением судей" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Денис одержал победу единым решением судей. В последнем бою Беринчик избил россиянина Ису Чаниева в Броварах, в шестой раз защитив пояс чемпиона WBO&nbsp;...</p></div>
            </div>
        </a><a href='https://sportarena.com/boxing/berinchik-mendi-polnoe-video-boya/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Беринчик – Менди: полное видео боя</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQH7h891L4cyenSzPzJnFRWg2YXxmA_wTcHC_ssSGZ2wF0SGiEoB58lgUL4PoBx6I_ESC-F6l5l" alt="Беринчик – Менди: полное видео боя" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Лучшие моменты боя Беринчик – Менди, полное видео и обзор боя, в котором украинец Денис Беринчик провел поединок против Ивана Менди.</p></div>
            </div>
        </a><a href='https://sport.24tv.ua/denis-berinchik-ivan-mendi-rezultat-boyu_n2210866'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Берінчик одноголосним рішенням переміг Менді в андеркарді ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSZ240b5_x7OAyvHooNXKJRb-1ewAnqyh-vVZH1GXZUP8X9m5XgcuebEPWPaVV48Mrb3FhOno1X" alt="Берінчик одноголосним рішенням переміг Менді в андеркарді ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Результат бою Денис Берінчик – Іван Менді, який пройшов 3 грудня 2022. Берінчик зустрівся Менді на професійному ринзі боксу у Лондоні. Хто переміг у цьому&nbsp;...</p></div>
            </div>
        </a><a href='https://fakty.com.ua/ua/sport/20221203-vyjshov-na-bij-u-formi-zsu-berinchyk-zavoyuvav-tytul-chempiona-yevropy-u-boyu-z-mendi/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Вийшов на бій у формі ЗСУ: Берінчик завоював титул чемпіона ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT2yzUkTIFegdB43gw_yKnEKpRUImv8a5il7rbTVTfhBg998OoOWU9dxA1gJk-3Vih4A0i28uPV" alt="Вийшов на бій у формі ЗСУ: Берінчик завоював титул чемпіона ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Український боксер Денис Берінчик переміг француза Івана Менді у бою за титул чемпіона Європи у легкій вазі. Боксери подолали всю дистанцію у 12 раундів,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}