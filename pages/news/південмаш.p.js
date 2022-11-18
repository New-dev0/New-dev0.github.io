import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Південмаш</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Південмаш"/>
        <meta name="description" content="Trending News about Південмаш" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Південмаш</h1>
            <Image width={800} height={500} src="https://racurs.ua/content/images/Publication/News/17/68/85/preview_w696zc1.jpg" alt="Південмаш"/>
            <h3>Recent News</h3>
            <a href='https://racurs.ua/ua/n176885-rosiya-bie-po-gazovydobutku-bomblyat-pivdenmash-shmygal.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>росія б&#39;є по газовидобутку, бомблять «Південмаш» — Шмигаль</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSiNnAlWeOay5TiIhjb4nE1dfndgCuOZ9oJH7vC5PqK406VYXmIy6cn6vhTjj6ooLO1-Iq_69aY" alt="росія б&#39;є по газовидобутку, бомблять «Південмаш» — Шмигаль" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>росія б&#39;є по нашому газовидобутку. Бомблять наші підприємства у Дніпрі, «Південмаш». Про це повідомив Денис Шмигаль на Київському міжнародному економічному&nbsp;...</p></div>
            </div>
        </a><a href='https://www.pravda.com.ua/news/2022/11/17/7376738/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Росіяни бомблять український газовидобуток і &quot;Південмаш ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSfqJdPYQ4xd94m0UUFbt8xR7eKvD99IxAZLQq0KbZrbu4asi3gDTcpK3AGMIbWzfovEz2BTAVs" alt="Росіяни бомблять український газовидобуток і &quot;Південмаш ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Премєр-міністр Денис Шмигаль заявив, що Росія здійснює удари по газовидобувних обєктах України і по Південному машинобудівному заводу у Дніпрі.</p></div>
            </div>
        </a><a href='https://zn.ua/ukr/UKRAINE/u-dnipri-je-postrazhdali-vnaslidok-udaru-poshkodzheno-pivdenmash.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>У Дніпрі є постраждалі внаслідок удару, пошкоджено Південмаш</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTcwt5NvkXJv2Z9Iidz_BjPtPPMU4lv8vSVTF6JBngD4fthDpmIbD0kfUMwPykvRjnLyAIP2HxM" alt="У Дніпрі є постраждалі внаслідок удару, пошкоджено Південмаш" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Премєр повідомив про атаку на Південмаш та газовидобувні родовища України.</p></div>
            </div>
        </a><a href='https://forbes.ua/news/rosiyani-byut-po-gazovidobutku-i-pivdenmashu-shmigal-17112022-9832'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Росіяни бʼють по газовидобутку і «Південмашу» – Шмигаль</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTuDQ42AcdS7nRzGC9Rx8MCb4em6Ov1tYImxjZajA8C6fm9JYTogcgU_Ft2Sv-fcyECzzXtAyaj" alt="Росіяни бʼють по газовидобутку і «Південмашу» – Шмигаль" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>17 листопада у Києві вранці було чути вибухи, у Київській області працювала система протиповітряної оборони. Також пролунали вибухи у Дніпрі, Одесі.</p></div>
            </div>
        </a><a href='https://umoloda.kyiv.ua/number/0/2006/171055/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ракетний тероризм: росіяни атакували «Південмаш» та ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRju4iO4ElFAc0Zo45de2HWeJayjutmLjC47h6o4ClOnGrqBY_7gULGMQK8ShPZiNQUkGvWwwDg" alt="Ракетний тероризм: росіяни атакували «Південмаш» та ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Російські ракети було спрямовано ворогом по енергетичній інфраструктурі, а також по газовидобувним об&#39;єктам держави та по оборонному підприємству&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}