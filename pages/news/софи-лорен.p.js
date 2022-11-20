import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Софи Лорен</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Софи Лорен"/>
        <meta name="description" content="Trending News about Софи Лорен" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Софи Лорен</h1>
            <Image width={800} height={500} src="https://s74794.cdn.ngenix.net/m/e764/9663/19d9/4887/bfcf/b3c1/59fa/fd81/1200_1200_max.png" alt="Софи Лорен"/>
            <h3>Recent News</h3>
            <a href='https://sport24.ru/news/life/sofi-loren-foto-seychas-i-v-molodosti-biografiya-muzh-i-deti-skolko-let-sofi-loren'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Как изменилась любимица СССР легендарная Софи Лорен ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTuBFjMcWtQNaJ7jYgSX9_Tod3geTbAviPoetjGFEh0ep8wNx_TvqFdxELJgz4c7NAlCZIBd61c" alt="Как изменилась любимица СССР легендарная Софи Лорен ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Софи удостоилась престижной награды за главную роль в легендарной картине Витторио де Сика «Чочара». Сегодня, 19 ноября 2022 года, на Первом канале пройдет&nbsp;...</p></div>
            </div>
        </a><a href='https://informing.ru/2022/11/19/aktrisa-na-plakaty-kotoroj-molilis-v-sssr-kak-izmenilas-vneshnost-sofi-loren-foto.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Актриса, на плакаты которой молились в СССР. Как изменилась ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTTWXrmBWymKydADbQNXS8JlgKMKh2gFXyJldX9VA30W1JCLi7To8KBOEwTugleiunt--Zu57Ic" alt="Актриса, на плакаты которой молились в СССР. Как изменилась ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>18 и 19 ноября 2022 года на Первом канале состоится всероссийская премьера французского документального фильма под названием «Софи Лорен. Несравненная».</p></div>
            </div>
        </a><a href='https://tvmag.ru/article/canals/2022-11-18-na-1tv-premera-filma-sofi-loren-nesravnennaya-i-kino-grafinya-iz-gonkonga/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>На Первом канале – премьера фильма «Софи Лорен ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRd8c8vr5gxnXW8hlR5CzNeBvZ95o_EnioT_67ZneC69N8FEUoYsUoovuGADU3b4U2_GK-Y23xy" alt="На Первом канале – премьера фильма «Софи Лорен ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Документальную биографическую ленту «Софи Лорен. Несравненная» (Sophia Loren, une destinée particulière) выпустила режиссер и автор сценария Джулия Брахер. Она&nbsp;...</p></div>
            </div>
        </a><a href='https://inforeactor.ru/23758781-aktrisa_na_plakati_kotoroi_molilis_v_sovetskom_soyuze_kakoi_put_proshla_sofi_loren'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Актриса, на плакаты которой молились в Советском Союзе ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRH9p0lveYKoyMzm34NV56ZUroWlQt4rXTE0Hqqce1aJGrnmizba5i8RY5ReNV0WY_0hmiZXhhs" alt="Актриса, на плакаты которой молились в Советском Союзе ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>На Первом канале стартовал показ фильма «Софи Лорен. Несравненная», в котором рассказывается о судьбе неподражаемой актрисы Софи Лорен.</p></div>
            </div>
        </a>
        </Template></>;
}