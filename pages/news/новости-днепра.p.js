import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Новости Днепра</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Новости Днепра"/>
        <meta name="description" content="Trending News about Новости Днепра" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Новости Днепра</h1>
            <Image width={800} height={500} src="https://zn.ua/img/article/5201/88_main-v1669461813.jpg" alt="Новости Днепра"/>
            <h3>Recent News</h3>
            <a href='https://zn.ua/UKRAINE/okkupanty-nanesli-raketnyj-udar-po-dnepru-est-postradavshie.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Оккупанты нанесли ракетный удар по Днепру: 13 человек ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ4irdtuhwQxiuWx_yG8mll1ENv2F3k4IYi-zzB8Q_zCDR0LwB9j_4sJlLiglT5EJ7Otcc9OtQu" alt="Оккупанты нанесли ракетный удар по Днепру: 13 человек ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Российские войска в субботу, 26 ноября, нанесли ракетный удар по Днепру. В результате обстрелов пострадала женщина, заявил глава ОВА Валентин Резниченко.</p></div>
            </div>
        </a><a href='https://www.rbc.ua/ukr/news/dnipri-povidomili-vibuh-1669456054.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В Днепре раздался взрыв. Мэр сообщил о &quot;прилете&quot;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQbaZgXmgWLw8pvTVnUj7XuluGUkMICd8rscsawyasAzGBlh3-LYMoy5VTcMF44RF60a2Ktc9G1" alt="В Днепре раздался взрыв. Мэр сообщил о &quot;прилете&quot;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>26 ноября в Днепре сообщили о взрыве. После чего в городе и области объявили воздушную тревогу, в сети пишут о задымлении в городе.</p></div>
            </div>
        </a><a href='https://www.pravda.com.ua/rus/news/2022/11/26/7378079/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В Днепре прилет по жилому кварталу, 6 раненых</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQGMCH0JUK-bGVvV7_SEbjOLGozECxaiL33I8g7z_EFX2cPA9xoVm5L1Mtux8kf239QW17IeQZb" alt="В Днепре прилет по жилому кварталу, 6 раненых" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Мэр Днепра Борис Филатов сообщил о прилете российской ракеты в городе около полудня 26 ноября.</p></div>
            </div>
        </a><a href='https://nv.ua/ukraine/events/v-dnepre-razdalsya-vzryv-50286816.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Удар РФ по Днепру: что известно. Разрушены семь частных ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRmiLhJxXSSMgDFDYwmK1KxoR9Dderz6ecC7xHXG7468zwNph249vaVln86MtziipGPosGhMIAy" alt="Удар РФ по Днепру: что известно. Разрушены семь частных ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В субботу, 26 ноября, в Днепре был слышен взрыв. В городе и области объявлена воздушная тревога.</p></div>
            </div>
        </a><a href='https://dnepr.express/post/pod-zavalami-lyudi-spasateli-rasskazali-podrobnosti-raketnogo-udara-po-dnepru-video'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Новости Днепра: подробности от спасателей с места ракетного ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS-R2pTEeapCla5UBBeee7z7Nh3EZr8VSQL6kL9rFfA3TQBmyLLTAM7ZNojxwmub6Af0RAXkkqs" alt="Новости Днепра: подробности от спасателей с места ракетного ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ракетный удар по Днепру сегодня, 26 ноября, разрушил и повредил около 30 домов. Спасатели ищут людей под завалами - видео ➤ Читайте новости на сайте Днепр&nbsp;...</p></div>
            </div>
        </a><a href='https://tsn.ua/ru/ato/udar-rossiyan-po-dnepru-vyroslo-kolichestvo-postradavshih-mirnyh-zhiteley-foto-2210311.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Удар россиян по Днепру: выросло количество пострадавших ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQIInpR03mbH4VTPmQj5RdKdq13NMbsPRAGc9Ljtwd5sxTYgscjIeKy8VXF_Xckz3dt_wyqINS7" alt="Удар россиян по Днепру: выросло количество пострадавших ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В результате атаки российской армии по частному сектору Днепра в субботу, 26 ноября, пострадали уже 13 человек — ОВА.</p></div>
            </div>
        </a><a href='https://nashemisto.dp.ua/ru/2022/11/26/cena-na-grechku-v-dnepre-hvatit-li-ukraincam-grechki-v-2023-godu/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Цена на гречку в Днепре: хватит ли украинцам гречки в 2023 году</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQL7b3StDYGEF4b6pMVdCBz5Nx1zpVLkN1ohcr_MqnPGt1xPOUzetie1_IP_36NFAtNib67IEwU" alt="Цена на гречку в Днепре: хватит ли украинцам гречки в 2023 году" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В Украине достаточно гречки для внутреннего потребления: по данным Минагрополитики, аграриям удалось собрать 156 тыс. тонн. ▻ Наше Місто.</p></div>
            </div>
        </a>
        </Template></>;
}