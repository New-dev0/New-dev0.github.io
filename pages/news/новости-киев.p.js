import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Новости Киев</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Новости Киев"/>
        <meta name="description" content="Trending News about Новости Киев" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Новости Киев</h1>
            <Image width={800} height={500} src="https://zn.ua/img/article/5188/15_main-v1668520794.jpg" alt="Новости Киев"/>
            <h3>Recent News</h3>
            <a href='https://zn.ua/UKRAINE/v-kieve-rakety-popali-v-dva-zhilykh-doma.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В Киеве ракеты попали в три жилых дома</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRm4GoCxp04W95F4LFFUxwFsZqCvahI1oWRrmC8qjZlzC_lVVUzbjMSFUjV4AXuoWRgXY8Eidjk" alt="В Киеве ракеты попали в три жилых дома" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В результате вражеской ракетной атаки в Киеве зафиксировано два попадания, еще четыре ракеты удалось сбить, сообщила Киевская городская военная&nbsp;...</p></div>
            </div>
        </a><a href='https://www.pravda.com.ua/rus/news/2022/11/15/7376453/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ракеты попали в жилые дома в центре Киева, есть погибшая</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQQSCwp4OXcBRA0BoZcT7BJhGYzLLFkbNEdVggG_3drJIOsSDlde8B99GSj9xLDERcsHY-68qlH" alt="Ракеты попали в жилые дома в центре Киева, есть погибшая" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Россия ударила ракетами по центру Киева: есть попадания в жилые дома в Печерском районе, 4 ракеты сбила ПВО.</p></div>
            </div>
        </a><a href='https://www.rbc.ua/ukr/news/povitryana-trivoga-ohopila-piv-ukrayini-niztsi-1668514242.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Взрывы и угроза ударов. Масштабная тревога в Украине: что ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTM63PZft64TPXQ-jsN_OBH4Xf19zoGWroclSnkvGJOIeCBDFvdfHx-6bNn9auNp-vAeHT4weHU" alt="Взрывы и угроза ударов. Масштабная тревога в Украине: что ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>15 ноября в Украине объявлена воздушная тревога. Власти в ряде регионов уже предупредили об опасности массированного ракетного удара.</p></div>
            </div>
        </a><a href='https://kyiv.tsn.ua/ru/rossiya-udarila-raketami-po-kievu-nad-gorodom-podnyalsya-stolb-dyma-2202337.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Россия ударила ракетами по Киеву: над городом поднялся столб ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcScaG99iSt9eh4rdspm5yIj_5-QD4cdAgU671OlYDxYud_xeCEd_XO0ZTEGWLTsSXlJ_lkJJfdj" alt="Россия ударила ракетами по Киеву: над городом поднялся столб ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В Киеве и Киевской области днем 15 ноября раздались взрывы. В одном из районов Киева после взрыва поднялся столб дыма.</p></div>
            </div>
        </a><a href='https://www.stopcor.org/section-uanews/news-u-kievi-ta-v-inshih-oblastyah-lunayut-vibuhi-scho-vidomo-15-11-2022.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В Киеве и других областях раздаются взрывы: что известно ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSUNqmStIbAyoblPdYQqJkwg9zRoxdzc5AUnzE5ncVpqQYocDEwdHZ7V8-G1AAg11QZBjAsgeao" alt="В Киеве и других областях раздаются взрывы: что известно ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Во время масштабной воздушной тревоги во многих регионах Украины были слышны взрывы. Анастасия Ковалева. Редактор ленты новостей. 15.11.2022 15:25.</p></div>
            </div>
        </a><a href='https://nv.ua/ukraine/events/v-kieve-zafiksirovali-eshche-odin-prilet-rakety-po-pecherskomu-rayonu-klichko-50284245.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В Киеве зафиксировали еще один «прилет» ракеты по ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTOHUEsqbbT7kPOb5jhveTBQ5deUPRWsbA284HnBCEmc43kj1cYLDPPN-6Ax6FPshX7axcZrAsO" alt="В Киеве зафиксировали еще один «прилет» ракеты по ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Об этом сообщил мэр Киева Виталий Кличко. Других подробностей он не рассказал. Однако ранее Telegram-каналы сообщали о повторных звуках взрывов в столице.</p></div>
            </div>
        </a><a href='https://news.obozrevatel.com/kiyany/proisshestviya/v-kieve-vo-vremya-vozdushnoj-trevogi-progremeli-vzryivyi-podnyalsya-dyim.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Оккупанты нанесли удары по Киеву, есть прилеты в жилые дома ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRC1qU0UjSwqVNRGUBHMuEoV3eWO03kxMEoc2W9LEaKwXfu7vVPh3QR52Pjb0isHhGtHZkBR2d2yA" alt="Оккупанты нанесли удары по Киеву, есть прилеты в жилые дома ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>112,2 т. Только проверенная информация у нас в Telegram-канале Obozrevatel и в Viber . Не ведитесь на фейки!</p></div>
            </div>
        </a>
        </Template></>;
}