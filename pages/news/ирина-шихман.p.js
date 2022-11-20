import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Ирина Шихман</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Ирина Шихман"/>
        <meta name="description" content="Trending News about Ирина Шихман" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Ирина Шихман</h1>
            <Image width={800} height={500} src="https://ichef.bbci.co.uk/news/1024/branded_russian/71F1/production/_127696192_noise_shikhman-nc.jpg" alt="Ирина Шихман"/>
            <h3>Recent News</h3>
            <a href='https://www.bbc.com/russian/news-63503470'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Рэпера Noize MC, журналистку Шихман и сооснователя ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTQtcyscbN-2yi20m9ilPELlr6ofg_Eggsm4u6ccdt5q1JjAk_JR6v4_DyMU7J85f5AjSXECCR0" alt="Рэпера Noize MC, журналистку Шихман и сооснователя ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Минюст России в пятницу пополнил реестры &quot;иностранных агентов&quot;. Среди прочих, к разным категориям &quot;иноагентов&quot; были отнесены рэпер Noize MC,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.starhit.ru/novosti/noize-mc-irina-shikhman-i-para-blogerov-novyi-spisok-inoagentov-ot-minyusta-rf-849803/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Noize MC, Ирина Шихман и пара блогеров: новый список ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTTMKrwckfiuVABpvtU71Nx5y1IO1qDekJJ8HWHJj-OBxMECupey3q1TxMbYelpu6Zz5lVWOOor" alt="Noize MC, Ирина Шихман и пара блогеров: новый список ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>По традиции в пятницу вечером Минюст России огласил новый список иноагентов, куда попали блогеры, музыкант и журналистка. | STARHIT.</p></div>
            </div>
        </a><a href='https://www.kommersant.ru/doc/5678885'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Минюст объявил иноагентами Noize MC и Шихман</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRsIe8fVwpJrTnSN4Al3-ab3m-m1AtzCAe-7wFYWTA4uROHjhaf_NwiSMYoz3TznKrvH8VmTClP" alt="Минюст объявил иноагентами Noize MC и Шихман" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Минюст России обновил реестр физлиц-иноагентов. В него попали Иван Алексеев (музыкант Noize MC), журналистка Ирина Шихман (YouTube-канал «А поговорить?</p></div>
            </div>
        </a><a href='https://www.chita.ru/text/politics/2022/11/19/71829251/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Певец Noize MC, журналистка Ирина Шихман и еще семь ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS6ZgUooqJV_aSiJ2_DejeO7Ejk-9heiTLKjA0xUf_1oBEKytGEXPCFORMmeZiWstyPCAs544h3" alt="Певец Noize MC, журналистка Ирина Шихман и еще семь ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>До этого Роскомнадзор заблокировал сайт Kolezev.ru, принадлежащий уральскому журналисту. В конце октября Иван Алексеев, известный как Noize MC, дал откровенное&nbsp;...</p></div>
            </div>
        </a><a href='https://karelia.news/news/10078130/spisok-inoagentov-popolnila-zhurnalist-irina-shikhman/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Список иноагентов пополнила журналист Ирина Шихман ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSpV7V8kaiqN3LPXTihthrYdi7djlugwe1PyK6PWdrwpIGpzpV6aqMF2sHKhQHo78h-FFxVCOZ_" alt="Список иноагентов пополнила журналист Ирина Шихман ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Министерство юстиции РФ расширило список иноагентов. К ним были отнесены рэпер Noize MC* (Иван Алексеев), журналисты Ирина Шихман* и Дмитрий Колезев**,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.youtube.com/watch?v=XpCQf2L4Ndo'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Признаны иноагентами Руслан Левиев, Noize MC, Ирина Шихман</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSbTYkxCNkxQmyzAtZ1lQLmCjYBcd5PcLka52rQkH7xu1NcWh6lkz9ov4UlVpZQg4t-5cGnEaN2" alt="Признаны иноагентами Руслан Левиев, Noize MC, Ирина Шихман" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В пятницу вечером, как полагается, Минюст опубликовал список новых иноагентов. В компанию лучших людей России попали Нойз МС, Руслан Левиев, Ирина Шихман,&nbsp;...</p></div>
            </div>
        </a><a href='https://klops.ru/news/2022-11-18/261626-muzykant-noize-mc-i-zhurnalistka-irina-shihman-vklyucheny-v-reestr-inoagentov'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Музыкант Noize MC и журналистка Ирина Шихман включены в ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQWeTi8R3Rd3C39omEmFH3o_mhausnFZ4FrDhtHHDkKiKHv1owMn3MNLeWk6Tub4GhzulO3nN5z" alt="Музыкант Noize MC и журналистка Ирина Шихман включены в ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Список Минюста РФ пополнился новыми именами в пятницу, 18 ноября.</p></div>
            </div>
        </a>
        </Template></>;
}