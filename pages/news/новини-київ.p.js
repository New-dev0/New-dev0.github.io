import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Новини Київ</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Новини Київ"/>
        <meta name="description" content="Trending News about Новини Київ" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Новини Київ</h1>
            <Image width={800} height={500} src="https://img.tsn.ua/cached/357/tsn-15890496c3fba55a55e21f0ca3090d06/thumbs/1200x630/45/17/1f7ce4b883e2848ad656152c556c1745.jpeg" alt="Новини Київ"/>
            <h3>Recent News</h3>
            <a href='https://tsn.ua/ato/u-kiyevi-prolunali-novi-vibuhi-2208010.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>У Києві пролунали нові вибухи</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQFxvWNdlmNty4lGc_xGROD2wqSbOzNM9Ed17F-9gduRX7dHBTas1f2srV4aSALRsKzdVDIdoka" alt="У Києві пролунали нові вибухи" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В столиці триває повітряна тривога. У Києві сьогодні, 23 листопада, о 14.30 знову пролунали вибухи. Як повідомляють очевидці, вибухів було щонайменше три.</p></div>
            </div>
        </a><a href='https://www.unian.ua/economics/energetics/novini-kijiv-u-stolici-svitlo-vmikatimut-na-2-3-godini-dtek-novini-kiyeva-12056067.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>У Києві світло вмикатимуть на 2-3 години - ДТЕК</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQG7I2-51uXVEaKw3JYOdeF2wqzleiMo67Ss69GYn2cL1k0w5bnO-6IptMSaEh2rtWUJNe4jvO6" alt="У Києві світло вмикатимуть на 2-3 години - ДТЕК" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>За словами виконавчого директора ДТЕК Дмитра Сахарука, така ситуація відбуватиметься до збільшення обсягу електроенергії, яка надходитиме до Києва.</p></div>
            </div>
        </a><a href='https://zn.ua/ukr/UKRAINE/u-kijevi-je-vluchannja-v-objekt-inforastrukturi.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>У Києві є влучання в об&#39;єкт інфраструктури, в місті зникло світло</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSVqz5az5IqPgu-xrl0OIi6EgMOldeYpGedPJGQJiKF8MyJzyPS6l3Py1J99vtwcJpLrMvi2a5Y" alt="У Києві є влучання в об&#39;єкт інфраструктури, в місті зникло світло" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Зголом стало відомо, що внаслідок влучання ракети в місті пошкоджена двоповерхова будівля, одна людина загинула та одна постраждала. Related video. Доповнюється.</p></div>
            </div>
        </a><a href='https://thepage.ua/ua/news/novini-kiyiv-sho-u-misti-z-teplom-vodoyu-ta-elektrikoyu-25-listopada-2022-roku'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Київ оговтується після обстрілу: яка ситуація зі світлом, водою та ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQvZDENey57AmBuiLUa41G50lCFVVniBNeA1ISgCaxyp58D_FfhaMnqnEkj6Brw3QenZUSbNgfglg" alt="Київ оговтується після обстрілу: яка ситуація зі світлом, водою та ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>У Києві триває процес відновлення електро-, водо- та теплопостачання - що відомо на ранок 25 листопада 2022 року.</p></div>
            </div>
        </a><a href='https://www.rbc.ua/rus/news/situatsiya-kievi-pislya-obstriliv-koli-bude-1669282601.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ситуація у Києві після обстрілів: коли буде світло, вода, зв&#39;язок</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ4bLkCUiHOCL-bTSqkS8satigaDoOyzG3fBhm3qrGGhakBdHUL33OKbeZelrfV0YZ66OjCZJZy" alt="Ситуація у Києві після обстрілів: коли буде світло, вода, зв&#39;язок" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Мер Києва Віталій Кличко повідомив, що 60% міста залишається без електрики. Водопостачання відновили на лівому березі, на правий почали подачу води.</p></div>
            </div>
        </a><a href='https://nv.ua/ukr/ukraine/events/rf-nanesla-raketnyy-udar-po-obektu-infrastruktury-v-kieve-klichko-50286147.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>РФ завдала ракетного удару по об&#39;єкту інфраструктури в Києві ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQQmyhnbnT_VhnuVTN1ENd6GbrTVA0puJp3ulJmkmlrGeq-pQSp0kqLPg-nqUcwbKIDH156ud8d" alt="РФ завдала ракетного удару по об&#39;єкту інфраструктури в Києві ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Удень 23 листопада РФ завдала ракетного удару по об&#39;єкту інфраструктури у Києві, повідомив Віталій Кличко.</p></div>
            </div>
        </a>
        </Template></>;
}