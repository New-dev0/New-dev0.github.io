import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Армия</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Армия"/>
        <meta name="description" content="Trending News about Армия" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Армия</h1>
            <Image width={800} height={500} src="https://www.rbc.ua/static/img/_/v/_viyskovi_navchannya_poligon_gettyimages_1244125635_1300x820.jpg" alt="Армия"/>
            <h3>Recent News</h3>
            <a href='https://www.rbc.ua/ukr/news/rosiyska-armiya-okopuetsya-stili-pershoyi-1669718290.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Российская армия окапывается в стиле первой мировой ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTQtUX-DdMmBl3bvw1KOY8En7qPoi0RU2BELZZfpuLz5mGpF9N4H2rU65LCtQppnAdaRQtGlelX" alt="Российская армия окапывается в стиле первой мировой ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Об этом сообщает РБК-Украина со ссылкой на Sky News. &quot;Русские знают, что они в невыгодном положении, и они знают, что не могут допустить дальнейших неудач, и&nbsp;...</p></div>
            </div>
        </a><a href='https://nv.ua/ukr/opinion/recommends/viyna-rosiji-viyskoviy-ekspert-pro-te-chomu-armiya-rf-tak-pogano-voyuye-ostanni-novini-50287376.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Це головна проблема армії Росії. Американський військовий ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQPXQhP5YKdaJiXoxVlB6ls3LdRbHRqIc48jd2JcpQ2xw070UJ3tJrd90G4WJZ2uQejlrdI0rXf" alt="Це головна проблема армії Росії. Американський військовий ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Макс Бут — про те, чому російська воєнна доктрина виявилася провальною в Україні, у чому секрет доктрини США.</p></div>
            </div>
        </a><a href='https://maidan.org.ua/2022/11/chy-zalyshyla-armiia-rf-kharkivsku-oblast-dobrovilno/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Чи залишила армія РФ Харківську область добровільно? - сайт ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTSRonwQiXbg-rwp9waaLvokKBzdOc3t3UFjVuWWPh04iYRvvhlGlt8uyiLgDAXW4tzzmAjIqE-" alt="Чи залишила армія РФ Харківську область добровільно? - сайт ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Чи залишила армія РФ Харківську область добровільно? 29-11-2022 15:22. Аналітик Адам Сибера демонструє те, що залишилось на місці колишньої російської бази&nbsp;...</p></div>
            </div>
        </a><a href='https://from-ua.com/news/633775-okkupacionnaya-armiya-okapyvaetsya-i-deistvuet-v-stile-pervoi-mirovoi-britanskii-general.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Оккупационная армия окапывается и действует в стиле Первой ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQVNGqEEJW_1ynMiP6BnK5hGZv-hKDylC-EGA2e_a_BW6VmWQM3K04iFADdYYQ3KJ1oo-itsbN5" alt="Оккупационная армия окапывается и действует в стиле Первой ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Бывший глава Генштаба британской армии Лорд Даннатт заявил, что с наступлением зимы российские войска окапываются, пытаясь создать дополнительные сложности&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}