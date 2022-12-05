import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Володимир Зеленський</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Володимир Зеленський"/>
        <meta name="description" content="Trending News about Володимир Зеленський" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Володимир Зеленський</h1>
            <Image width={800} height={500} src="https://media.slovoidilo.ua/media/scimage/171/170354-uk.png" alt="Володимир Зеленський"/>
            <h3>Recent News</h3>
            <a href='https://www.slovoidilo.ua/2022/12/05/novyna/polityka/mayemo-zrobyty-vse-vystoyaty-cyu-zymu-zelenskyj'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Маємо зробити все, щоб вистояти цю зиму – Зеленський</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQNIF3tF9rwAVoyC46o3YPXi3-1viz_bXC6C9rRQtvWDHtDq0z5t9HlvxAvDwf67kKOAJN4be2c" alt="Маємо зробити все, щоб вистояти цю зиму – Зеленський" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Володимир Зеленський у новому відеозверненні заявив, що зима буде складною. Він закликав українців допомагати одне одному, щоб вистояти.</p></div>
            </div>
        </a><a href='https://www.pravda.com.ua/news/2022/12/4/7379239/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Зеленський: Вистояти цієї зими – це відстояти все</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQHw8rvXoGIXFAfeFAHeIfSZP8uUqqVUCMcFnOKPnoG4s9xBZMKmz50H8r2ugXiV2dNCfzL6inM" alt="Зеленський: Вистояти цієї зими – це відстояти все" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Вечірнє звернення президента 4 грудня. Володимир Зеленський переконаний, що вистояти цієї зими для українців означає відстояти все.</p></div>
            </div>
        </a><a href='https://www.rbc.ua/rus/styler/divitsya-k-zminilisya-volodimir-i-olena-zelenski-1670138290.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Дивіться, як змінилися Володимир і Олена Зеленські за три роки ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTlAHKw_6srrO_s7q_8SDU6oh9omR6KPsE2w8yVVKUxI-QCezWpwcrw2fuJFsFlYhyvYSuTMmox" alt="Дивіться, як змінилися Володимир і Олена Зеленські за три роки ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Як змінилися президент Володимир Зеленський і його дружина Олена за три роки на державних посадах, дуже помітно по фото.</p></div>
            </div>
        </a><a href='https://lb.ua/society/2022/12/04/538055_shchob_proyti_zimu_mi_maiemo_buti_stiykimi.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Щоб пройти зиму ми маємо бути стійкими і єдиними, як ніколи ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRaJwMbr2mtGtEvwGiH0xkTh_uU49Cz-Wu72AoqjO5jTWJ690H56Iz5DYp9BZMnvE_N70xccHbE" alt="Щоб пройти зиму ми маємо бути стійкими і єдиними, як ніколи ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>&quot;Ворог дуже сподівається використати зиму проти нас: зробити зимовий холод і труднощі частиною свого терору. Ми ж маємо зробити все, щоб вистояти цю зиму, як би&nbsp;...</p></div>
            </div>
        </a><a href='https://censor.net/ua/news/3384895/spryyimayite_tsyu_zymu_ne_vyprobuvannyam_a_chasom_yakyyi_nablyjaye_nas_do_peremogy_vystoyaty_tsiyeyi'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Сприймайте цю зиму не випробуванням, а часом, який наближає ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSc2_vmJ13IHEF8xkxKKLlvgtgLfK2vjLYn5TuE3uoXgQ3CQ3k0NlucBjIj5WTzMqiJQvbGVmXN" alt="Сприймайте цю зиму не випробуванням, а часом, який наближає ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>04.12.22 22:18 - Володимир Зеленський: сприймайте цю зиму не випробуванням а часом який наближає нас до перемоги Вистояти це відстояти все.</p></div>
            </div>
        </a><a href='https://www.ukrinform.ua/rubric-society/3627706-bazanna-ukrainciv-vidnoviti-svij-dim-zavzdi-bulo-bilsim-za-teror-okupantiv-zelenskij.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Бажання українців відновити свій дім завжди було більшим за ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQQvQ0pR0683PHcknOrXKIt6PxWrxLQ9sgnyBMAbFHq9-_h1Tx8zECfbEKmhWivmf12aiO59CTL" alt="Бажання українців відновити свій дім завжди було більшим за ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Бажання українців відновити все в своєму домі завжди було більш масштабним за терор окупантів - так має залишатися й надалі. — Укрінформ.</p></div>
            </div>
        </a>
        </Template></>;
}