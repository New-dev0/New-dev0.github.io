import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Голодомор</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Голодомор"/>
        <meta name="description" content="Trending News about Голодомор" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Голодомор</h1>
            <Image width={800} height={500} src="https://static.ukrinform.com/photos/2022_11/thumb_files/630_360_1669546462-225.jpg" alt="Голодомор"/>
            <h3>Recent News</h3>
            <a href='https://www.ukrinform.ru/rubric-uarazom/3623142-ickeria-priznala-golodomor-genocidom-ukrainskogo-naroda.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ичкерия признала Голодомор геноцидом украинского народа</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcROJKiUB46aq49a6Telod-SZF7KwX1-LKOMtGCKCpun8v4JYc4M2yHkrI7ZUM2o-0zVhXsaJY3M" alt="Ичкерия признала Голодомор геноцидом украинского народа" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Республика Ичкерия признала Голодомор 1932-1933 годов в Украине актом геноцида украинского народа. — Укринформ.</p></div>
            </div>
        </a><a href='https://zn.ua/POLITICS/ichkerija-priznala-holodomor-aktom-henotsida-ukraintsev.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ичкерия признала Голодомор актом геноцида украинцев</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT8jRtoaAv6zCQFSkP8PZ12oI67PI3gY3l-Y5ac_cr56g2J-oGAQxKOmZXKXavTF6VeOeRqNc0m" alt="Ичкерия признала Голодомор актом геноцида украинцев" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Правительство Чеченской Республики Ичкерия приняло решение о признании Голодомора украинцев в 1932-33 годах актом геноцида нашего народа.</p></div>
            </div>
        </a><a href='https://24tv.ua/ru/golodomor-ukraine-ichkerija-priznala-golodomor-genocidom-ukrainskogo_n2206371'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Еще одна страна официально признала Голодомор геноцидом ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTMDW-DpBnRk6wneBT7HdQojvRw4Tkn5veHGI_bq8hE7MqdJ4m6nCOR2EPSvdojJcbXgIRk3y3P" alt="Еще одна страна официально признала Голодомор геноцидом ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>26 ноября правительство Ичкерии проголосовало за осуждение Голодомора 1932 – 1933 годов. Страна признала это событие преступлением против человечества и&nbsp;...</p></div>
            </div>
        </a><a href='https://gazeta.ua/ru/articles/life/_pravitelstvo-ichkerii-priznalo-golodomor-genocidom-ukraincev/1122592'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Правительство Ичкерии признало Голодомор геноцидом ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRPZR-Y5s6yBFJ7H0gDkeQwSBEFwLFxc4GYzywIfRSX9Be_4HQoXZJskZgw0vCizEL9KuNZDXFm" alt="Правительство Ичкерии признало Голодомор геноцидом ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Правительство Чеченской Республики Ичкерия в изгнании признало Голодомор 1932-1933 годов геноцидом украинского народа. Оно подчеркнуло, что нужно называть&nbsp;...</p></div>
            </div>
        </a><a href='https://nv.ua/world/geopolitics/chechenskaya-respublika-ichkeriya-priznala-golodomor-genocidom-ukrainskogo-naroda-poslednie-novosti-50287010.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Правительство Ичкерии в изгнании признало Голодомор ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ32AMYlRxeo4qnvBGCubdP1M-py0q7lwKf59GfeW2Zmtt2T6CXYPu1s7cprv-EwYp1O2yieyFB" alt="Правительство Ичкерии в изгнании признало Голодомор ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Правительство Чеченской Республики Ичкерия в изгнании 26 ноября признало Голодомор 1932−1933 гг. актом геноцида украинского народа.</p></div>
            </div>
        </a><a href='https://tsn.ua/ru/svit/ukraincy-v-danii-otmetili-godovschinu-golodomora-iniciativoy-o-priznanii-rossii-sponsorom-terrorizma-foto-i-video-2210749.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Украинцы в Дании отметили годовщину Голодомора ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSWZ92dd2shRKOonsOnKrDjKI5gAVZ4kpjKYR4ZDtjDZH-8OFq_2pcVmoY38H8VcfGurbRMkpgS" alt="Украинцы в Дании отметили годовщину Голодомора ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В День памяти жертв Голодомора 1932-33 годов украинское коммюнити в Дании отметило массовым шествием центром Копенгагена.</p></div>
            </div>
        </a><a href='https://fakty.com.ua/ru/ukraine/20221127-uryad-ichkeriyi-vyznav-golodomor-1932%E2%88%921933-rokiv-genoczydom-ukrayinskogo-narodu/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Правительство Ичкерии признало Голодомор 1932-1933 годов ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRNp6ogrBKbBxN5WmUpdyeRsDln7fgL2gQeY1Zgg-eahx5_qk1LRUOmv7_VyMvebtg5NtA9Wihp" alt="Правительство Ичкерии признало Голодомор 1932-1933 годов ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Правительство Чеченской Республики Ичкерия признало Голодомор 1932-1933 годов актом геноцида украинского народа. Соответствующее сообщение было обнародовано&nbsp;...</p></div>
            </div>
        </a><a href='https://war.obozrevatel.com/ichkeriya-priznala-golodomor-1932-1933-godov-genotsidom-ukraintsev.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ичкерия признала Голодомор 1932-1933 годов геноцидом ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTGaATTjJyl_gEo6NI62QGsadmwB0tc-nP00U7i1erTq5X5qW3qPk-E12ZcHgUt73L4rPjvYxRw" alt="Ичкерия признала Голодомор 1932-1933 годов геноцидом ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Правительство Ичкерии приняло решение о признании Голодомора 1932-33 годов в Украине геноцидом украинского народа.</p></div>
            </div>
        </a>
        </Template></>;
}