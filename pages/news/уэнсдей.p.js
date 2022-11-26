import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Уэнсдей</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Уэнсдей"/>
        <meta name="description" content="Trending News about Уэнсдей" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Уэнсдей</h1>
            <Image width={800} height={500} src="https://dtf.ru/cover/fb/c/1465601/1669369931/cover.jpg" alt="Уэнсдей"/>
            <h3>Recent News</h3>
            <a href='https://dtf.ru/cinema/1465601-serial-uensdey-ot-tima-bertona-bolshe-napominaet-garri-pottera-chem-semeyku-addams-no-v-etom-est-svoya-prelest'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Сериал «Уэнсдей» от Тима Бёртона больше напоминает ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQNv0QNMM9RJ3TiElTNY1smVrvvoyU3Le6jsc25ShLyOCjBjB1NIRuMC-zLI3rWXNH42_lkuf9-" alt="Сериал «Уэнсдей» от Тима Бёртона больше напоминает ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>23 ноября (в среду, что иронично) на Netflix вышел весь первый сезон сериала «Уэнсдей» — сиквела знаменитой «Семейки Аддамс», посвящённого чуть повзрослевшей&nbsp;...</p></div>
            </div>
        </a><a href='https://shazoo.ru/2022/11/25/135797/u-sozdatelei-seriala-wednesday-uze-est-plany-na-vtoroi-sezon'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>У создателей сериала &quot;Уэнсдей&quot; уже есть планы на второй сезон</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRBdecwUa1OIEYcnSd3cIPJxcvJqMrhoAST5zVdJkmNIkbh-qyzcQ-1cA8stUYOSJacmJKow_K2" alt="У создателей сериала &quot;Уэнсдей&quot; уже есть планы на второй сезон" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Сериал &quot;Уэнсдей&quot; вышел на Netflix всего пару дней назад, а у его создателей уже есть планы на несколько сезонов вперед. Об этом шоураннеры, сценаристы и&nbsp;...</p></div>
            </div>
        </a><a href='https://www.soyuz.ru/news/23441'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Стало известно, о чем может рассказать 2 сезон «Уэнсдэй»</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTi5cc_wqKmyjyzLYPZJqhEvnqMyov_CXDnuakHf0LlT0rGyH-Zw93497-OjCRh1BsEIDSQNvcl" alt="Стало известно, о чем может рассказать 2 сезон «Уэнсдэй»" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Netflix выпустил 1 сезон сериала «Уэнсдэй» по вселенной «Семейки Аддамс» только 23 ноября и пока не продлил шоу Тима Бертона на 2 сезон.</p></div>
            </div>
        </a><a href='https://www.buro247.ru/fashion/heroes/25-nov-2022-wednesday-addams-tim-burton.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Miu Miu, Dr. Martens, Alaïa. Что носит Уэнсдей Аддамс в новом ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS7Nq3_XiXkwRH-vZL_1cMaB9iZ5etqGblD2gthmtyKm-CtRxMQN96FK-vBdFKzYWFC4rIrBZ6j" alt="Miu Miu, Dr. Martens, Alaïa. Что носит Уэнсдей Аддамс в новом ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Уэнсдей образца 2022-го презирает соцсети, собирает мёд и ходит в хипстерскую кофейню. Ее гардероб тоже немного изменился — рассказываем, как художница по&nbsp;...</p></div>
            </div>
        </a><a href='https://www.fontanka.ru/2022/11/24/71843285/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Среда заела. Чем интересен новый сериал «Уэнсдей» Тима ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQbeUAWZYEOqNddPM2xwkYZQIW18ZzyWGAr6Uk8r5OJk_YMOmfcz8zm7gpAK7b38qwMQuOQMs-J" alt="Среда заела. Чем интересен новый сериал «Уэнсдей» Тима ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>На «Нетфликсе» 23 ноября стартовал сериал «Уэнсдей», что, кстати, и значит — «среда». Надо, наверное, напомнить, что так - Афиша Plus - 24 ноября 2022&nbsp;...</p></div>
            </div>
        </a><a href='https://pluggedin.ru/open/kogda-vyydet-2-sezon-seriala-uensdey-shouranner-prokommentiroval-prodolghenie-40974'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Когда выйдет 2 сезон сериала «Уэнсдэй»? Шоураннер ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ_HCjDhAH2eY0h4tScK6uiU4zxLgqGRzoxjxRFzhjp7p7Sk4BEIH8ufg_wWMQUv1lVYXrBE1miLQ" alt="Когда выйдет 2 сезон сериала «Уэнсдэй»? Шоураннер ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Сериал от Netflix еще не был продлен на второй сезон, но со-шоураннер Эл Гоф говорит, что планирует глубже погрузиться в характер героини, если ему представится&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sobaka.ru/entertainment/cinema/159988'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>От «Уэнсдэй» Бертона до спешела «Стражей Галактики»: Что ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQeIJ9x1K3fMCPYyswij8GY3a53HFinrh4-A7hvQFAihvHoI7jDHP3zfNKK0Ir01lPaE3qEBYLI" alt="От «Уэнсдэй» Бертона до спешела «Стражей Галактики»: Что ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>История про девочку Уэнсдэй из семейки Аддамс, рождественские «Стражи Галактики», документальный проект про загадочного Виктора Пелевина и новая&nbsp;...</p></div>
            </div>
        </a><a href='https://gamemag.ru/specials/173551/netflix-wednesday-review'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Мистификация под Тима Бертона: Обзор сериала &quot;Уэнсдей&quot; от ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQS7KJJULqkeHFQ4yrV_F3-MfPb1Cgcy0ZOeIJKX4iu7SehWCh4l6xcXYx5bYd2yOUfvXQXVJEB" alt="Мистификация под Тима Бертона: Обзор сериала &quot;Уэнсдей&quot; от ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Редакция GameMAG.ru делится впечатлениями после просмотра сериала &quot;Уэнсдей&quot; от Netflix, который продвигался как проект имени Тима Бертона.</p></div>
            </div>
        </a><a href='https://www.kinoafisha.info/news/shourannery-seriala-uensdey-hoteli-by-vypustit-vtoroy-sezon/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Шоураннеры сериала «Уэнсдэй» хотели бы выпустить второй ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSe_vIIzWIIusVNhnF3w1vgxBkOGoiNd8C2RP1sYUg4fJcGZV3dL79pGFgz8Bb3b38ZJKe8CSMv" alt="Шоураннеры сериала «Уэнсдэй» хотели бы выпустить второй ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В продолжении было бы больше остальных членов семейки Аддамс. Все восемь эпизодов мистической комедии Тима Бертона «Уэнсдэй» вышли на сервисе Netflix&nbsp;...</p></div>
            </div>
        </a><a href='https://66.ru/news/freetime/258488/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Возвращение готической девочки. Павел Матяж – о сериале ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRt4kyjNY7W9xXwXKUng4lY6OSqtpPG19apmzWS89J-sgBg_O-d28u11inv8SdBluxkec4F_bx_" alt="Возвращение готической девочки. Павел Матяж – о сериале ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Великий и ужасный Тим Бертон снял свой первый сериал. Его героиней стала старшая дочка из «Семейки Аддамс». Восемь серий новейшего телешоу от Netflix уже на&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}