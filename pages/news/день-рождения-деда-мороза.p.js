import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>День рождения Деда Мороза</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,День рождения Деда Мороза"/>
        <meta name="description" content="Trending News about День рождения Деда Мороза" /></Head><Template>
            <h1 style={{fontSize: "30"}}>День рождения Деда Мороза</h1>
            <Image width={800} height={500} src="http://in-korolev.ru/upload/gallery/383/167883_49917793255de26c6867a5093533991902db077d.png" alt="День рождения Деда Мороза"/>
            <h3>Recent News</h3>
            <a href='https://in-korolev.ru/novosti/sobytiya/den-rozhdeniya-deda-moroza-otmechaetsya-18-noyabrya'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>День рождения Деда Мороза отмечается 18 ноября</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRrHQxINGIE4qj-7wdaWizkQq6p20e3cCFTvAO-z5lNkv1K9AXTmX27Y8Hw-ECDtNzsdO_mIwW-" alt="День рождения Деда Мороза отмечается 18 ноября" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Недавно выпавший снег напомнил нам не только о приближении зимы, но и о скором наступлении Нового года. Спешим вас обрадовать – с сегодняшнего дня можно&nbsp;...</p></div>
            </div>
        </a><a href='https://www.tvtomsk.ru/news/81482-den-rozhdenija-deda-moroza.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>День рождения Деда Мороза: история главного зимнего ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSzPRjnDtUrUyTub0iZm9b3LGnR8jANubmrMoke753_Xks1ZGXdfrHzDfON6aHGXedHOFMvjyer" alt="День рождения Деда Мороза: история главного зимнего ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>18 ноября в России отмечается День Рождения Деда Мороза. С этого праздника начинается подготовка к Новому году. Считается, что на родине зимнего волшебника,&nbsp;...</p></div>
            </div>
        </a><a href='https://vestniksr.ru/news/59639-ded-moroz-otmetil-den-rozhdenija-v-surgutskom-raione.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Дед Мороз отметил день рождения в Сургутском районе ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT6ysNXmesPeZa1aAFMrNXOheqz18Iq9eKUCLeUCofIpNuccKpL4krc5L2klQvH9Cmk0V_VArGb" alt="Дед Мороз отметил день рождения в Сургутском районе ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В резиденции Деда Мороза в Белом Яре (Сургутский район) отметил свой день рождения главный волшебник страны. Дети из поселка погрузились в сказку и покорили&nbsp;...</p></div>
            </div>
        </a><a href='https://u24.ru/news/69084/rossiyskiy-ded-moroz-otmechaet-den-rozhdeniya'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Российский Дед Мороз отмечает день рождения</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSBo-wftZs20bBz836I4wcx7FqTXBVZUDZZsr22KGWPXtGXS7hfOqzKW1WPFGWazmAzriH7S2tr" alt="Российский Дед Мороз отмечает день рождения" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>18 ноября в России отмечается день рождения Деда Мороза. С 2005 года праздник проходит на его родине в Великом Устюге (Вологодская область).</p></div>
            </div>
        </a><a href='https://media73.ru/2022/18-noyabrya-den-rozhdeniya-deda-moroza'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>18 ноября - день рождения Деда Мороза</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="18 ноября - день рождения Деда Мороза" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Лента новостей обновляемые в реальном времени. Рубрики: фото, видео-материалы, инфографика. Самые срочные сообщения из авторитетных источников.</p></div>
            </div>
        </a><a href='https://www.penzainform.ru/news/culture/2022/11/18/v_penze_v_den_rozhdeniya_deda_moroza_ustroili_prazdnik.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В Пензе в день рождения Деда Мороза устроили праздник</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTh7I6RSUv_1Thj5Cuwg7pXfdg1Pz7nCmQLqSgWBijLaEX15g1hhohDf9DEovWcwnIdmkK8ObUW" alt="В Пензе в день рождения Деда Мороза устроили праздник" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Поделки, открытки и рисунки - это часть даров главному зимнему старцу. Пензенская детвора поздравила Деда Мороза с днем рождения. С каким именно по счету,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}