import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Светлана Лобода</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Светлана Лобода"/>
        <meta name="description" content="Trending News about Светлана Лобода" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Светлана Лобода</h1>
            <Image width={800} height={500} src="https://n1s1.hsmedia.ru/e9/83/68/e983683e2c86fec455b411b592ced134/1200x630_0xac120003_11209863271669388481.png" alt="Светлана Лобода"/>
            <h3>Recent News</h3>
            <a href='https://www.starhit.ru/novosti/svetlana-loboda-na-segodnyashnii-den-nikakogo-oficialnogo-zapreta-na-moi-vezd-v-litvu-net-851302/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Светлана Лобода: «На сегодняшний день никакого ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR0APCMYg0GAEG5Lvl7ghTLB33ulK18aSWNw22Ajbg5NJgSQ5XArt2rta4OrZ-EtdCkbLwlJNPi" alt="Светлана Лобода: «На сегодняшний день никакого ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Власти Литвы накануне приняли решение запретить Светлане Лободе выступать в стране — об этом рассказали пресс-секретарь МИДа и министр культуры.</p></div>
            </div>
        </a><a href='https://news.ru/show-business/zhidkovata-ty-musya-kuchera-vyskazalsya-o-lobode-posle-otkaza-ej-litvoj/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Жидковата ты, муся»: Кучера высказался о Лободе после ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTYOp1Nxoh79oRznWRfgRQBelODTR84HPYFFXBH4nfqQ_j7UQMQmdkq_htxzR3vYZ9vGArB9Eux" alt="«Жидковата ты, муся»: Кучера высказался о Лободе после ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Оскар Кучера прокомментировал решение литовских властей признать Светлану Лободу персоной нон грата и отказаться от ее концертов в стране.</p></div>
            </div>
        </a><a href='https://1sn.ru/pevica-svetlana-loboda-stala-nezelatelnoi-v-litve'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Певица Светлана Лобода стала нежелательной в Литве</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTA-o4jXSjckZLB_vfZQ5ltlFv2tFvvZdnk_Kfq8FBdwn-wMEf7Op26CpyEwXSq3Pnv-j6a9GeQ" alt="Певица Светлана Лобода стала нежелательной в Литве" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ИА SakhaNews. &middot; Как отметил министр культуры Литвы Симонас Кайрис, позиция Лободы по отношению к действиям России на Украине непонятна.</p></div>
            </div>
        </a><a href='https://www.kommersant.ru/doc/5682356'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Литва включила певицу Светлану Лободу в список ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS71iO6AezFVFSCOjtQQlqltMN8vwaug53Tt0ohOpt057G0KlXf2QQ9pFYiIrordmwScE2B247S" alt="Литва включила певицу Светлану Лободу в список ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Украинская певица Светлана Лобода попала в список нежелательных в Литве лиц. Об этом сообщила пресс-секретарь главы литовского МИДа Паулина Левицкайте.</p></div>
            </div>
        </a><a href='https://argumenti.ru/society/2022/11/800659'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Светлана Лобода оказалась в черном списке Литвы - Аргументы ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSHPpsp2Hrrzncu739WXtgy53AdHBp4c6W8Q6vuGpUmvc8yX-JRBEPZa8kIWjSEbSJlWaVaRDZ_" alt="Светлана Лобода оказалась в черном списке Литвы - Аргументы ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Украинская певица Светлана Лобода, которая проживает в Латвии (Юрмала) вдруг оказалась в черном списке Литвы. Чем же певица, которая отстаивает интересы&nbsp;...</p></div>
            </div>
        </a><a href='https://www.eurointegration.com.ua/rus/news/2022/11/24/7151279/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Литва внесет певицу Светлану Лободу в список нежелательных ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS9fQuR6bWf8gQuqqtX6V520YKNETMclCe3xOjDrS8-m2CT3tZDjq84o6EhXq-VhhKZBc4v2ZnU" alt="Литва внесет певицу Светлану Лободу в список нежелательных ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Украинская певица Светлана Лобода будет добавлена ​​в список нежелательных лиц в Литве. Об этом заявила представитель министра иностранных дел Паулина&nbsp;...</p></div>
            </div>
        </a><a href='https://showbiz.24tv.ua/ru/svetlanu-lobodu-ne-hotjat-puskat-litvu-ona-otreagirovala_n2205445'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Лобода ответила на слухи, что станет персоной нон грата в ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRByfCYNHL8FU972Z_Wre98F2hWIcbf87N0blH7EJfphsNcyHxMogdG6psQb32ZgoGXv5-gaORN" alt="Лобода ответила на слухи, что станет персоной нон грата в ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Светлана Лобода может попасть в черный список Литвы. Ее не хотят пускать с концертами. Как отреагировала бывшая гастролерша, узнавайте и смотрите видео на&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}