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
            <Image width={800} height={500} src="https://nashemisto.dp.ua/wp-content/uploads/2022/11/316949012_5670797609668756_4093727902235062118_n.jpg" alt="Новости Днепра"/>
            <h3>Recent News</h3>
            <a href='https://nashemisto.dp.ua/ru/2022/11/27/najdem-sposob-chtoby-kompensacija-vyrosla-do-1-mln-grn-mjer-dnepra-pobyval-na-meste-raketnogo-udara/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Найдем способ, чтобы компенсация выросла до 1 млн грн: мэр ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSmlubTSfFKiOptJxaAeeKCubVKJ8Qxzvd7IE08H0JSybOKQdBOPPzV3nO-VAUPgcVqlYDL_giD" alt="Найдем способ, чтобы компенсация выросла до 1 млн грн: мэр ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Найдем способ, чтобы компенсация выросла до 1 млн грн: мэр Днепра побывал на месте ракетного удара▻ Наше Місто.</p></div>
            </div>
        </a><a href='https://zn.ua/UKRAINE/okkupanty-nanesli-raketnyj-udar-po-dnepru-est-postradavshie.html'>
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
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS1-ZO6_jw33Guwua5OMFDSmybxZxt6OOOhmkRp1R5r6C3QsU18piM-RFMPWdd6S2g7KRODi68P" alt="В Днепре раздался взрыв. Мэр сообщил о &quot;прилете&quot;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>26 ноября в Днепре сообщили о взрыве. После чего в городе и области объявили воздушную тревогу, в сети пишут о задымлении в городе.</p></div>
            </div>
        </a><a href='https://www.pravda.com.ua/rus/news/2022/11/26/7378079/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В Днепре прилет по жилому кварталу, 6 раненых</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQGMCH0JUK-bGVvV7_SEbjOLGozECxaiL33I8g7z_EFX2cPA9xoVm5L1Mtux8kf239QW17IeQZb" alt="В Днепре прилет по жилому кварталу, 6 раненых" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Мэр Днепра Борис Филатов сообщил о прилете российской ракеты в городе около полудня 26 ноября.</p></div>
            </div>
        </a><a href='https://nashemisto.dp.ua/ru/2022/11/27/malenkie-ukraincy-pokorili-germaniju-color-music-iz-dnepra-provozhali-pod-ovacii-i-slezy/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Маленькие украинцы покорили Германию: COLOR MUSIC из ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQCpmUq65rclQesskznZbMhYcLgbSuZPJLgTRFQw_cFUjygucTgimEQ7cvuuYYFmSkJO912O6Qw" alt="Маленькие украинцы покорили Германию: COLOR MUSIC из ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Маленькие украинцы покорили Германию: COLOR MUSIC из Днепра провожали под овации и слезы▻ Наше Місто.</p></div>
            </div>
        </a><a href='https://dnepr.express/post/gorod-sdelaet-vsyo-chtoby-vozmestit-ubytki-mer-dnepra-boris-filatov-pobyval-na-meste-raketnogo-udara'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Филатов побывал на месте ракетного удара по Днепру | Новости ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQzV2uwxxZomm7I7560LeZvWl363gYAssUmeOSF7UQRM1qizBC0p_zRbCzSLJCq3chn7kW6S--3" alt="Филатов побывал на месте ракетного удара по Днепру | Новости ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Мэр Днепра Борис Филатов побывал на месте субботнего ракетного удара и пообщался с пострадавшими горожанами ➤ Читайте новости на сайте Днепр Оперативный.</p></div>
            </div>
        </a><a href='https://nv.ua/ukraine/events/v-dnepre-razdalsya-vzryv-50286816.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Удар РФ по Днепру: что известно. Разрушены семь частных ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRmiLhJxXSSMgDFDYwmK1KxoR9Dderz6ecC7xHXG7468zwNph249vaVln86MtziipGPosGhMIAy" alt="Удар РФ по Днепру: что известно. Разрушены семь частных ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В субботу, 26 ноября, в Днепре был слышен взрыв. В городе и области объявлена воздушная тревога.</p></div>
            </div>
        </a><a href='https://dnepr.express/post/v-dnepropetrovskoj-oblasti-proizoshlo-lobovoe-stolknovenie-legkovushek-est-postradavshie'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В ДТП в Новомосковске пострадали два человека | Новости ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQQlB2lofsLN6dfmBBJJpOXQC87wTk5GmPTkrg0qCx9nkU7AexLGjTRCGWfzPFwknbW1DvFfP27" alt="В ДТП в Новомосковске пострадали два человека | Новости ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В Новомосковске двух водителей забрали в больницу после ДТП с лобовым столкновением ➤ Читайте новости на сайте Днепр Оперативный.</p></div>
            </div>
        </a>
        </Template></>;
}