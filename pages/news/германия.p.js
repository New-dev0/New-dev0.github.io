import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Германия</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Германия"/>
        <meta name="description" content="Trending News about Германия" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Германия</h1>
            <Image width={800} height={500} src="https://img.pravda.com/images/doc/b/1/b174bde-nim-flag-getty.png" alt="Германия"/>
            <h3>Recent News</h3>
            <a href='https://www.pravda.com.ua/rus/news/2022/12/1/7378867/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Германия передала Украине мостоукладочные танки ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRXwPqaPTgqsdgac2G6PVjV5VZ2Aipj0w06ZE7C5vmeIvHyjZfrJnHCNta9g7AMeUIlTcsCewRB" alt="Германия передала Украине мостоукладочные танки ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Об этом сообщает &quot;Европейская правда&quot;. Согласно информации, за последние дни Украина получила от Германии три мостоукладочных танка BIBER, восемь надводных&nbsp;...</p></div>
            </div>
        </a><a href='https://www.rbc.ua/ukr/news/gepard-ta-nadvodni-droni-nimechchina-nadala-1669913580.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Gepard и надводные дроны: Германия предоставила новый ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQlNG9ii3EgIgO3BgVtQMgu91_GFWxOpcFPagYiTJdyOo4F357a9LaoknXVrvzvY0AYdQ80bTUj" alt="Gepard и надводные дроны: Германия предоставила новый ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Германия в ближайшее время передаст Украине новый пакет военной помощи. В него вошло следующее: 7 зенитных установок Gepard;; 100 000 аптечек;; 3 бронированные&nbsp;...</p></div>
            </div>
        </a><a href='https://news.liga.net/politics/news/germaniya-otpravit-esche-sem-gepardov-dlya-vsu-i-peredala-nadvodnye-drony-i-mostoukladchiki'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Германия отправит еще семь &quot;Гепардов&quot; для ВСУ и передала ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSa4RBTk42LUgb9aeAjk1fXMu64ZVATEr7c1xSHne6cyFeeaHp6Se2B_S3UOSor_kbo1fwX9XX5" alt="Германия отправит еще семь &quot;Гепардов&quot; для ВСУ и передала ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Германия передала Украине 10 беспилотных надводных кораблей, три мостоукладчика, запчасти для вертолетов, а также планирует отправить семь Gepard.</p></div>
            </div>
        </a><a href='https://focus.ua/voennye-novosti/539301-germaniya-sobrala-novyy-paket-pomoshchi-dlya-ukrainy-chto-tuda-voshlo-spisok'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Германия собрала новый пакет помощи для Украины: что туда ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTXRvyP2MoeiIV63d8R6pyG3n4YF8LcXX-peZngWMqVfXndNWvz_jiKgG7hxw6uDQp5Ph46bcvW" alt="Германия собрала новый пакет помощи для Украины: что туда ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>65 пограничных патрульных машин;; 14 000 спальных мешков;; запасные части к Ми-24;; 30 машин скорой помощи. 7 зенитных самоходных установок Gepard;; 100 000&nbsp;...</p></div>
            </div>
        </a><a href='https://www.5.ua/ru/polytyka/hermanyia-obnovyla-spysok-voennoi-pomoshchy-ukrayne-chto-eshche-poluchat-vsu-293881.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Германия обновила список военной помощи Украине – что еще ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQXbt0fPadBQnHUdNQm1mfpuH-sDs1916KO8hd44S7GqRt50R6ErLEKBz8awDpvWSSBLytNgJrI" alt="Германия обновила список военной помощи Украине – что еще ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Анонсирована передача Украине 7 зенитных САУ Gepard и 100 тыс. аптечек. Бундестаг в четверг, 1 декабря, изменил перечень военной помощи, переданной Украине&nbsp;...</p></div>
            </div>
        </a><a href='https://tsn.ua/ru/ukrayina/germaniya-peredast-ukraine-zenitnye-ustanovki-gepard-chto-esche-voshlo-v-novyy-paket-pomoschi-2214286.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Германия передаст Украине зенитные установки Gepard: что ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ6qBBRjrWBx3iiPXZIZJJ3QsrzRafj27tKcRl4khwN0kdjd-Rm-yho3E22AwYLLQf6i9WxeEOb" alt="Германия передаст Украине зенитные установки Gepard: что ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Германия передаст Украине новый пакет военной помощи. В него вошли 7 зенитных установок Gepard и 8 надводных беспилотников.</p></div>
            </div>
        </a>
        </Template></>;
}