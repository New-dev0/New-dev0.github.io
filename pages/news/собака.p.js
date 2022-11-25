import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Собака</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Собака"/>
        <meta name="description" content="Trending News about Собака" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Собака</h1>
            <Image width={800} height={500} src="https://cbn.com.ua/wp-content/uploads/2022/11/2022-11-24_13-55_695012.jpg" alt="Собака"/>
            <h3>Recent News</h3>
            <a href='https://cbn.com.ua/2022/11/24/kropyvnytska-sobaka-matilda-zavela-storinku-v-instagram-video/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Кропивницька собака Матільда завела сторінку в Instagram (відео)</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRGqQmfJvWC6T2B4KWVd9tPuUBNm4zUJzmUuKQKxyrx8OT-_z_N5DjtCtBTxdV6oVahkavjXZJ7" alt="Кропивницька собака Матільда завела сторінку в Instagram (відео)" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Новини Кіровоградської області та Кропивницького, події, репортажі, прес-конференції, статті, спецпроекти, фото, відео, кіровоградське телебачення,&nbsp;...</p></div>
            </div>
        </a><a href='https://suspilne.media/324028-u-hmelnickomu-kinologi-z-sobakami-vcilisa-sukati-tila/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>У Хмельницькому кінологи з собаками вчилися шукати тіла</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQXHjgpEZkwmkkPF6E-mG7-aIMBKp-qTr3NJcsDAHNMb0ctPVBwGXYcHd0Q1q3iZMhMO6Z18cOj" alt="У Хмельницькому кінологи з собаками вчилися шукати тіла" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>suspilne.media У Хмельницькому вперше кінологів-нацгвардійців з собаками навчали пошуку людей під завалами. Вчилися шукати й тіла загиблих.</p></div>
            </div>
        </a><a href='https://www.belnovosti.by/domashnie-zhivotnye/pochemu-sobaka-tyanet-povodok-na-progulke-eksperty-nazvali-3-glavnye-prichiny'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Почему собака тянет поводок на прогулке: эксперты назвали 3 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRzmQHdlFX4V_oFFhiaBZv-wFxH1-NqNMcgLrwqKnHXFUPB7-UT8yA-AjjFmDkHcqTUD5ATDyFR" alt="Почему собака тянет поводок на прогулке: эксперты назвали 3 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Если собака тянет поводок во время прогулки, то эту проблему можно решить - достаточно правильно установить причину нежелательного поведения.</p></div>
            </div>
        </a><a href='https://www.ivanovonews.ru/reports/1307245/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Собака упала на женщину. Пострадавшая 4-й месяц на ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Собака упала на женщину. Пострадавшая 4-й месяц на ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>IN - всегда рядом в соцсетях: 24.11.2022, 16:11. 187 0. Ivanovonews на. Перелом позвоночника, повреждённый локтевой нерв и потеря чувствительности&nbsp;...</p></div>
            </div>
        </a><a href='https://vostokmedia.com/news/2022-11-24/taksa-razdora-kakoe-nakazanie-zhdet-hozyayku-psov-za-rasterzannuyu-sobaku-v-primorie-2598281'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Такса раздора: какое наказание ждет хозяйку псов за ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ8cNpUb6No7lKomxoAwcCT-9mU1wWlcMAUUHAwxGUGudDzF7l-xpBbKUvQv824OVK6HJNVSAbj" alt="Такса раздора: какое наказание ждет хозяйку псов за ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Если две большие собаки разорвут одну маленькую, то будет ли это преступлением для хозяина агрессивных псов? Полиция Владивостока провела проверку по одному&nbsp;...</p></div>
            </div>
        </a><a href='https://www.belnovosti.by/domashnie-zhivotnye/kak-uznat-gluhaya-li-sobaka'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Как узнать, глухая ли собака</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS128Z27VwmJ34JltZQGR--CNu6pGCzMTiw1UAg4NaLKoG8mH-U5ZPIyPUpvhOv2rRAj2k7evln" alt="Как узнать, глухая ли собака" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Поведение глухой собаки может быть идентично поведению здоровой, поэтому необходимо уделять питомцу больше внимания, чтобы обнаружить, что что-то не так.</p></div>
            </div>
        </a>
        </Template></>;
}