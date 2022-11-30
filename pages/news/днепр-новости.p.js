import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Днепр новости</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Днепр новости"/>
        <meta name="description" content="Trending News about Днепр новости" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Днепр новости</h1>
            <Image width={800} height={500} src="https://img.pravda.com/images/doc/7/0/7012041-opera--------2022-11-29-123303-xn--80affa3aj0al.xn--80asehdb.png" alt="Днепр новости"/>
            <h3>Recent News</h3>
            <a href='https://www.pravda.com.ua/rus/news/2022/11/29/7378409/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ночная атака на Днепр: в ОВА показали последствия ракетного ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTGgRtiEPDnFkBcCIduYZVfbtVnnQ3dRnEXxj3skvbBFAns7umS6kmKp6DLKCvGOpj1sPBKNdz9" alt="Ночная атака на Днепр: в ОВА показали последствия ракетного ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Прямая речь: &quot;Россияне ударили по Днепру. Направили на ночной город несколько ракет. Попали в частное предприятие&quot;. Детали: По словам Резниченко, на месте&nbsp;...</p></div>
            </div>
        </a><a href='https://fakty.com.ua/ru/ukraine/20221129-raketnyj-udar-rf-po-dnipru-shho-zalyshylos-vid-pidpryyemstva/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ракетный удар РФ по Днепру: что осталось от предприятия</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRkctlsP6Y4NwHwtTDRlVoue-nT84oKY0-cUdeC11xbeEZSJlPBW7Tx-LFJNsbaaaeCMKyN_1Ef" alt="Ракетный удар РФ по Днепру: что осталось от предприятия" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Новости Днепра – фото последствий ракетных обстрелов российскими войсками. Фото последствий после взрывов в Днепре 28 ноября 2022 года – в материале Фактов&nbsp;...</p></div>
            </div>
        </a><a href='https://www.rbc.ua/ukr/news/dnipri-prolunali-vibuhi-pid-chas-povitryanoyi-1669666949.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В Днепре прозвучали взрывы во время воздушной тревоги</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQZIT8KH-S1cwUITusR5lFndKcsIcRpjr-31UaxvghTQ6r-HXa681nC-3XwCwqBSyGJnFI7a68l" alt="В Днепре прозвучали взрывы во время воздушной тревоги" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Представители местной власти пока не раскрыли более подробных деталей происшествия. При этом глава Днепропетровского областного совета Николай Лукашук призвал&nbsp;...</p></div>
            </div>
        </a><a href='https://www.unian.net/war/novosti-dnepra-rossiya-udarila-po-gorodu-raketami-12060432.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Россия ударила по Днепру ракетами, начался пожар</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSR70O-0Ye0X4Gjuc6wSIL8_6yMyYxfpgZ3diqtJi7vGv06kRjVDIHfDQuiousyesH8XnCh0b0B" alt="Россия ударила по Днепру ракетами, начался пожар" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В ночь на 29 ноября российские захватнические войска ударили по Днепру ракетами. Оккупанты попали в частное предприятие, на месте начался пожар.</p></div>
            </div>
        </a><a href='https://dnepr.express/post/rossijskie-rakety-udarili-po-predpriyatiyu-v-dnepre-policiya-provodit-rassledovanie'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Новости Днепра: Полиция проводит расследование ракетного ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTbeSt3xr4hRCKEuNzhgT-xx_BenTksFAFRaG203wNGrNGPP9JNdm2LcN08w3lxF6SFTqo3exw-" alt="Новости Днепра: Полиция проводит расследование ракетного ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ракетный удар по частному предприятию в Днепре: полиция проводит расследование ➤ Читайте новости на сайте Днепр Оперативный.</p></div>
            </div>
        </a><a href='https://news.liga.net/politics/news/rossiya-vtoroy-raz-za-neskolko-dney-nanesla-raketnyy-udar-po-dnepru'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Россия нанесла ракетный удар по Днепру</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSwgQjTihU9YjDmH_uky4rhKxcazSnMYcAmXQ4e-UI6Ib4h7gyeUy8ve4GaQC-mX5-FgehB3MVQ" alt="Россия нанесла ракетный удар по Днепру" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Город Днепр попал под ракетный удар. Есть прилет в частное предприятие. ракетный удар, днепр, валентин резниченко.</p></div>
            </div>
        </a><a href='https://dnepr.express/post/greli-kirpich-na-plite-v-margance-ugoreli-paren-i-devushka'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В Марганце мать нашла тело сына и его девушки | Новости ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRuqtCJ8p2T_QYvfi4PRiwN_z8-89bzSS26ceNUEbWDe1myE6uz_ZLbLHRb6R26otRkvQoWd_Nh" alt="В Марганце мать нашла тело сына и его девушки | Новости ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В Марганце парень и девушка клали кирпичи на плету, чтобы согреться и погибли ➤ Читайте новости на сайте Днепр Оперативный.</p></div>
            </div>
        </a><a href='https://www.056.ua/ru/news/3504578/vzryvy-v-dnepre-i-oblasti-situacia-v-regione-po-sostoaniu-na-utro'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Взрывы в Днепре и области: ситуация в регионе по состоянию ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQuYUa1JkhTj_NIne7CkrXpaB_NWntaAFT0wDvlAGCzO88LiEOPv6wCvjRP8v44dWgrs9VqWyI4" alt="Взрывы в Днепре и области: ситуация в регионе по состоянию ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>По уточненной информации, россияне атаковали Днепр четырьмя ракетами. Серьезные разрушения и пожар, который пожарные уже потушили. Прошло без погибших и раненых&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}