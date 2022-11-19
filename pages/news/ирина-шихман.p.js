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
            <Image width={800} height={500} src="https://iv.kommersant.ru/SocialPics/5678885_26_2295665_404460088" alt="Ирина Шихман"/>
            <h3>Recent News</h3>
            <a href='https://www.kommersant.ru/doc/5678885'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Минюст объявил иноагентами Noize MC и Шихман</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQKYNuOnTM9O6gNRI6qz9P8u6qCsPnikS777csZs9NRzHX_t5FZT-8VvbX6gaRaIU5aVlCFzpn2" alt="Минюст объявил иноагентами Noize MC и Шихман" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Минюст России обновил реестр физлиц-иноагентов. В него попали Иван Алексеев (музыкант Noize MC), журналистка Ирина Шихман (YouTube-канал «А поговорить?</p></div>
            </div>
        </a><a href='https://www.starhit.ru/novosti/noize-mc-irina-shikhman-i-para-blogerov-novyi-spisok-inoagentov-ot-minyusta-rf-849803/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Noize MC, Ирина Шихман и пара блогеров: новый список ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTTMKrwckfiuVABpvtU71Nx5y1IO1qDekJJ8HWHJj-OBxMECupey3q1TxMbYelpu6Zz5lVWOOor" alt="Noize MC, Ирина Шихман и пара блогеров: новый список ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>По традиции в пятницу вечером Минюст России огласил новый список иноагентов, куда попали блогеры, музыкант и журналистка. | STARHIT.</p></div>
            </div>
        </a><a href='https://klops.ru/news/2022-11-18/261626-muzykant-noize-mc-i-zhurnalistka-irina-shihman-vklyucheny-v-reestr-inoagentov'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Музыкант Noize MC и журналистка Ирина Шихман включены в ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQWeTi8R3Rd3C39omEmFH3o_mhausnFZ4FrDhtHHDkKiKHv1owMn3MNLeWk6Tub4GhzulO3nN5z" alt="Музыкант Noize MC и журналистка Ирина Шихман включены в ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Список Минюста РФ пополнился новыми именами в пятницу, 18 ноября.</p></div>
            </div>
        </a><a href='https://www.chita.ru/text/politics/2022/11/19/71829251/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Певец Noize MC, журналистка Ирина Шихман и еще семь ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS6ZgUooqJV_aSiJ2_DejeO7Ejk-9heiTLKjA0xUf_1oBEKytGEXPCFORMmeZiWstyPCAs544h3" alt="Певец Noize MC, журналистка Ирина Шихман и еще семь ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>До этого Роскомнадзор заблокировал сайт Kolezev.ru, принадлежащий уральскому журналисту. В конце октября Иван Алексеев, известный как Noize MC, дал откровенное&nbsp;...</p></div>
            </div>
        </a><a href='https://rtvi.com/news/minyust-rossii-obyavil-inoagentami-noize-mc-i-irinu-shihman/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Минюст России объявил иноагентами Noize MC* и Ирину Шихман*</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSMWymIA8vk26spCF-o-JZL0nkYNGI87iDf9H2njk1ypxtptmI-kc-inGKNk9VsTLYpZXh3lFQx" alt="Минюст России объявил иноагентами Noize MC* и Ирину Шихман*" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Министерство юстиции России пополнило реестры физических лиц, признанных иностранными агентами, и СМИ-иноагентов. В первый список вошли рэпер Noize MC (Иван&nbsp;...</p></div>
            </div>
        </a><a href='https://ura.news/news/1052604258'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Минюст РФ признал иноагентами Шихман, Noize MC и Светова</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQF9othB82nA8no1aG6UG9xrThtkRgpbY-tPCFs8xReNy_D_ksqc4arK-YxrKX-9gY_MUmKH7Ix" alt="Минюст РФ признал иноагентами Шихман, Noize MC и Светова" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Журналистку Ирину Шихман, музыканта Ивана Алексеева (Noize MC) и блогера Михаила Светова признали иностранными агентами. Об этом сообщается на сайте&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}