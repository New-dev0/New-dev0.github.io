import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Наталья Водянова</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Наталья Водянова"/>
        <meta name="description" content="Trending News about Наталья Водянова" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Наталья Водянова</h1>
            <Image width={800} height={500} src="https://3.assets.klops.ru/media/W1siZiIsIjIwMjIvMTEvMTYvYTU4MzdjYjEtMGQwMC00OWQxLWIyMmEtMzExOGJkZDJlOTcyX2ZpbGUuanBlZyJdLFsicCIsInRodW1iIiwiNjM5eDMzNSswKzgzIl0sWyJwIiwidGh1bWIiLCIxMjAweDYzMCMiXSxbInAiLCJlbmNvZGUiLCJqcGciLCItc3RyaXAgLWludGVybGFjZSBQbGFuZSJdXQ/file.jpg?sha=ec5cb3773d615384" alt="Наталья Водянова"/>
            <h3>Recent News</h3>
            <a href='https://klops.ru/news/2022-11-16/261488-model-natalya-vodyanova-nashla-tretyu-sestru-kotoruyu-kogda-to-udocherila-para-iz-ameriki'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Модель Наталья Водянова нашла третью сестру, которую когда ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ9XI5fWLibPr0NGELj1DpEtlirT0v44MChJ7yC23cRKWDjbfkKqnuKBHrpX116RNHS34rkU4Fr" alt="Модель Наталья Водянова нашла третью сестру, которую когда ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Девушка по имени Дженнифер Бёрнс сделала ДНК-тест и подписалась на сервис по отслеживанию родственников. Как пишет издание, недавно она получила уведомление о&nbsp;...</p></div>
            </div>
        </a><a href='https://www.starhit.ru/novosti/kak-dve-kapli-foto-muzhchiny-kotorogo-nazyvayut-otcom-veroyatnoi-dochki-vodyanovoi-849207/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Как две капли!»: фото мужчины, которого называют отцом ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTjuy_LGxbTdtcTFt5Crv5_8s5tvKgshchJ8mueuwn-rzX8GTDPiaF9xxv_DmJRZon7Ni-VHzQ_" alt="«Как две капли!»: фото мужчины, которого называют отцом ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>После неожиданных откровений о найденной младшей сестре Наталья Водянова столкнулась с хейтом. Публика уверена, что модель соврала и на самом деле Дженнифер&nbsp;...</p></div>
            </div>
        </a><a href='https://peopletalk.ru/article/natalya-vodyanova-rasskazala-o-pervoj-vstreche-s-sestroj-kotoruyu-ne-videla-22-goda/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Наталья Водянова рассказала о первой встрече с сестрой ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT2nLl29NKGJ89mKU-uHm8visMTbVuCGsdbmZE4L4G_OfEFRuJrDpfcAbzDStQ482rt9gJPldXZ" alt="Наталья Водянова рассказала о первой встрече с сестрой ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Сегодня вышло интервью Натальи Водяновой для журнала Vogue. В нем модель рассказала о том, что нашла свою сестру Дженну, которую не видела 22 года.</p></div>
            </div>
        </a><a href='https://readovka.news/news/121055'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Найден потенциальный отец «сестры» супермодели Водяновой ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTmNw9xKlrDnyXBl-tvb8Tp0Q9GYpdcKCHb29GQlH-_9KbdOV3U1p1-tGrSV4B4TbUmBc2dA-Lb" alt="Найден потенциальный отец «сестры» супермодели Водяновой ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ранее Readovka писала о том, что блогер Лена Миро заявила, Блогер Лена Миро заявила, что не верит в историю с найденной сестрой Натальи ВодяновойВозникшая&nbsp;...</p></div>
            </div>
        </a><a href='https://mc.bk55.ru/news/article/26597/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Наталья Водянова нашла родную сестру спустя 22 года</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQhES-LNudc_zEjtpvUq5skS0KgWNX9VyMt_cBoP8_rs7kuOIdABR7-ZpDFrSFlboOYvAzP5S3m" alt="Наталья Водянова нашла родную сестру спустя 22 года" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Супермодель Наталья Водянова нашла родную сестру, о чём рассказала журналу Vogue. Дженнифер Бернс (ранее девушку звали Машей) удочерила обеспеченная&nbsp;...</p></div>
            </div>
        </a><a href='https://life.ru/p/1539606'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Мечтал о дочке&quot;: Фотограф, от которого могла родить Водянова ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSVH5WdYFk3HdZFs4wNn5ViL17Eq6_aJvCwBAE4nY33yr63di4vn35Z06qWRglhiPSCgeMrasyF" alt="&quot;Мечтал о дочке&quot;: Фотограф, от которого могла родить Водянова ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Раскрывать все карты модельный скаут Алексей Васильев не стал, но согласился, что удочерённая американцами Маша-Дженнифер похожа на него.</p></div>
            </div>
        </a><a href='https://spletnik.ru/303304'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Найденная сестра Натальи Водяновой, которую воспитывали ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR71c6uoDiFXA8SFTifNY8KElpqJg1JQWoshtdIW7LcOrTd8AXZvrI_iqxkKurAmAefS9GsTmN8" alt="Найденная сестра Натальи Водяновой, которую воспитывали ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Найденная младшая сестра Натальи Водяновой Мария (Дженнифер), о которой супермодель рассказала в интервью для декабрьского номера Vogue, на самом деле может&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}