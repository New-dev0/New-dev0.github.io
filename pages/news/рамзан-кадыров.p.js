import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Рамзан Кадыров</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Рамзан Кадыров"/>
        <meta name="description" content="Trending News about Рамзан Кадыров" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Рамзан Кадыров</h1>
            <Image width={800} height={500} src="https://vologda-poisk.ru/system/Cover/images/000/285/493/medium/ramzan-kadyrov-opublikoval-svo_1668564219.jpg" alt="Рамзан Кадыров"/>
            <h3>Recent News</h3>
            <a href='https://vologda-poisk.ru/news/na-zlobu-dnya/ramzan-kadyrov-opublikoval-svoy-plan-umirotvoreniya-ukrainy-v-usloviyah-vsego-para-punktov'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Рамзан Кадыров опубликовал свой план умиротворения ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRJDMes60VY4NTLX1ZkCAiL5fGP6KrkvXPixOH9bFDmg-jdzqmRNQcMPxWNGefzYACsU9Qn_cQk" alt="Рамзан Кадыров опубликовал свой план умиротворения ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Рамзан Кадыров был возмущен наглостью Зеленского, который посмел диктовать условия России, после которых, якобы, украинская сторона сядет за стол&nbsp;...</p></div>
            </div>
        </a><a href='https://grozny.tv/news/main/51721'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Рамзан Кадыров: Не в том положении власти Украины ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTGgVsfLZGplezx39WSXl31T114t0y8QNhJiaNN-XF4XI3Rp0F2Fa3HvMnJrfIST4JCdJVD4vi4" alt="Рамзан Кадыров: Не в том положении власти Украины ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Об этом написал Глава ЧР Рамзан Кадыров в своем телеграм-канале. &quot;Смешны условия для переговоров у руководства Украины. Если бы Зеленский переживал за своих&nbsp;...</p></div>
            </div>
        </a><a href='https://mosregtoday.ru/power/ramzan-kadyrov-nazval-ukraine-svoi-usloviya-dlya-peregovorov/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Рамзан Кадыров назвал Украине свои условия для переговоров</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS9Smp-DaUrFjJEYRCbjJP3mu08Nhih5uz5XlrLHJ47NBl5n29VkBQZc9OdCuEKFIZ6Aw0b5xZr" alt="Рамзан Кадыров назвал Украине свои условия для переговоров" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>По словам главы Чеченской Республики, если бы украинский президент действительно переживал за судьбу «мобилизованных пенсионеров», то он бы сделал все для&nbsp;...</p></div>
            </div>
        </a><a href='https://www.kommersant.ru/doc/5668451'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Кадыров назвал условия для начала переговоров с Украиной</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSksnZbhj1ZLSPNncwSROKzvuz-RmI615n2wj0rZvtC6GaHTjWJikbX7KVB2QxadN8_vf1hCP5M" alt="Кадыров назвал условия для начала переговоров с Украиной" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Глава Чечни Рамзан Кадыров заявил, что условия для окончания военных действий на Украине должна ставить Москва, а не Киев. Он сообщил, что Россия требует от&nbsp;...</p></div>
            </div>
        </a><a href='https://octagon.media/novosti/ramzan_kadyrov_v_otvet_na_vystuplenie_zelenskogo_nazval_usloviya_dlya_peregovorov_s_ukrainoj.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Рамзан Кадыров в ответ на выступление Зеленского назвал ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRvIX2fM0Ck8d27M_J32SKw-LU_yt-8-p3XIVwZ7QCT5BHUS9fY4brTpJHm4ouvvBpJGm6I15Om" alt="Рамзан Кадыров в ответ на выступление Зеленского назвал ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Глава Чечни Рамзан Кадыров отреагировал на выступление Зеленского. На саммите G20 украинский президент озвучил условия для переговоров с Россией. Зеленский&nbsp;...</p></div>
            </div>
        </a><a href='https://readovka.news/news/120533'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Рамзан Кадыров назвал «бездарем» генерала Лапина ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS7o86FdCbxAwRSGCUzMGssgcIK338Pxm2fQIrt_LviRB18Yf2cuRAufeMacw9BlMh_4syvApMP" alt="Рамзан Кадыров назвал «бездарем» генерала Лапина ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ранее Readovka писала о том, что Кадыров раскритиковал Кадыров раскритиковал командующего ЦВО генерал-полковника Александра ЛапинаГлава Чечни считает, что на&nbsp;...</p></div>
            </div>
        </a><a href='https://runews24.ru/politics/15/11/2022/673d54sadc17aa2c0304b9291d844c03'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Рамзан Кадыров назвал Украине два условия для прекращения ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcToRbQ_DoIBy1nuD5USum8b3kN8hHiIbPaUE-SF5xRgJ3iWdFR4LZDPEoZC2weR8mfPdVGVfqDX" alt="Рамзан Кадыров назвал Украине два условия для прекращения ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>По его словам, эти требования гораздо реалистичнее тех, о которых заявил Зеленский на саммите G20.</p></div>
            </div>
        </a><a href='https://ura.news/news/1052603025'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>США исключили Кадырова из санкционного списка</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQMIyt02qkIFZSN1VBM0Wbne-eLy9J-Yqu5ulB5EkWj2y6i9T4NpA_GYZtE1xQAw87ovkTAMgh5" alt="США исключили Кадырова из санкционного списка" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Главу Чечни Рамзана Кадырова исключили из санкционного списка США. Информация об этом опубликована на американском сайте Министерства финансов.</p></div>
            </div>
        </a><a href='https://www.kavkaz-uzel.eu/articles/383057/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Одобрение Кадыровым отвода войск из Херсона вписалось в ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTSdhTIZ3n20XcaltweGoI9yvNWDGuva7b2YHpgYx6mKAfqoQLBwtRo8iX8-uaaA7T4UCyRAUJa" alt="Одобрение Кадыровым отвода войск из Херсона вписалось в ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Похвала Кадыровым и Пригожиным генерала Суровикина за отвод войск из Херсона на фоне критики ими же генерала Лапина за похожую ситуацию под Лиманом&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}